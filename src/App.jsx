import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import CountriesLine from './components/CountriesLine';
import MobileLayout from './components/MobileLayout';
import AboutDialog from './components/AboutDialog';
import ContactOffcanvas from './components/ContactOffcanvas';
import CountryDialog from './components/CountryDialog';
import countryService from './services/country';
import useDeviceDetection from './hooks/useDeviceDetection';
import './App.css';

const App = () => {
  const device = useDeviceDetection();
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCountry, setShowCountry] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const loadCountries = useCallback(() => {
    return countryService
      .getAll()
      .then((countries) => {
        setCountries(countries);
        setError(false);
      })
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  const handleLogoClick = () => loadCountries();

  const handleRetry = () => {
    setError(false);
    loadCountries();
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    handleShowCountry();
  };

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);
  const handleCloseCountry = () => setShowCountry(false);
  const handleShowCountry = () => setShowCountry(true);

  let copyright = (
    <footer className="copyright-footer">
      &copy; Copyright {new Date().getFullYear()} Prolegoma.com
    </footer>
  );

  if (countries && device !== 'Mobile') {
    return (
      <div>
        <CountriesLine
          countries={countries}
          offset={0}
          centerOpen={false}
          useNavigation={false}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
          onAboutClick={() => handleShowAbout()}
          onContactClick={() => handleShowContact()}
        />
        <CountriesLine
          countries={countries}
          offset={7}
          centerOpen={true}
          useNavigation={true}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
          onAboutClick={() => handleShowAbout()}
          onContactClick={() => handleShowContact()}
        />
        <CountriesLine
          countries={countries}
          offset={14}
          centerOpen={true}
          useNavigation={false}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
          onAboutClick={() => handleShowAbout()}
          onContactClick={() => handleShowContact()}
        />
        <CountriesLine
          countries={countries}
          offset={21}
          centerOpen={true}
          useNavigation={false}
          useLogo={true}
          useCompany={true}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
          onAboutClick={() => handleShowAbout()}
          onContactClick={() => handleShowContact()}
        />
        <CountriesLine
          countries={countries}
          offset={28}
          centerOpen={false}
          useNavigation={false}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
          onAboutClick={() => handleShowAbout()}
          onContactClick={() => handleShowContact()}
        />
        <CountryDialog
          country={selectedCountry}
          showCountry={showCountry}
          onClose={() => handleCloseCountry()}
        />
        <AboutDialog showAbout={showAbout} onClose={() => handleCloseAbout()} />
        <ContactOffcanvas
          showContact={showContact}
          onClose={() => handleCloseContact()}
        />
        {copyright}
      </div>
    );
  } else if (countries && device === 'Mobile') {
    return (
      <div>
        <MobileLayout
          countries={countries}
          onCountryClick={handleCountryClick}
          onLogoClick={handleLogoClick}
          onAboutClick={handleShowAbout}
          onContactClick={handleShowContact}
        />
        <CountryDialog
          country={selectedCountry}
          showCountry={showCountry}
          onClose={handleCloseCountry}
        />
        <AboutDialog showAbout={showAbout} onClose={handleCloseAbout} />
        <ContactOffcanvas
          showContact={showContact}
          onClose={handleCloseContact}
        />
        {copyright}
      </div>
    );
  } else if (error) {
    return (
      <div className="app-status" role="alert">
        <p className="reading-text">Sorry, we couldn&apos;t load the countries.</p>
        <Button variant="dark" onClick={handleRetry}>
          Try again
        </Button>
      </div>
    );
  }
  return (
    <div className="app-status reading-text" role="status">
      Loading&hellip;
    </div>
  );
};

export default App;
