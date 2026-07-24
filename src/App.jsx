import { useState, useEffect } from 'react';
import CountriesLineMobile from './components/CountriesLineMobile';
import AboutDialog from './components/AboutDialog';
import ContactOffcanvas from './components/ContactOffcanvas';
import CountryDialog from './components/CountryDialog';
import countryService from './services/country';
import useDeviceDetection from './hooks/useDeviceDetection';
import CountriesGrid from './components/CountriesGrid';
import './App.css';

const App = () => {
  const device = useDeviceDetection();
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCountry, setShowCountry] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  document.body.style.backgroundPosition = '0px 0px';
  document.body.style.minHeight = '100vh';
  document.body.style.backgroundImage = 'linear-gradient(white, lightblue)';

  useEffect(() => {
    countryService
      .getAll()
      .then((countries) => {
        console.log(`total countries: ${countries.length}`);
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogoClick = () => {
    countryService
      .getAll()
      .then((countries) => {
        console.log(`total countries: ${countries.length}`);
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCountryClick = (country) => {
    console.log(country);
    setSelectedCountry(country);
    handleShowCountry();
  };

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);
  const handleCloseCountry = () => setShowCountry(false);
  const handleShowCountry = () => setShowCountry(true);

  

  if (countries && device !== 'Mobile') {
    return (
      <div className="flag-grid">
        <CountriesGrid
          countries={countries}
          useAbout={false}
          useContact={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
          onPortfolioClick={() => handleShowAbout()}
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
      </div>
    );
  } else if (countries && device === 'Mobile') {
    return (
      <div>
        <div className="prolegoma-heading-mobile">Prolegoma</div>
        <div>
          <CountriesLineMobile
            countries={countries}
            offset={27}
            useLogo={false}
            usePortfolio={true}
            useAbout={false}
            useContact={false}
            onCountryClick={(country) => handleCountryClick(country)}
            onLogoClick={() => handleLogoClick()}
            onPortfolioClick={() => handleShowAbout()}
            onAboutClick={() => handleShowAbout()}
            onContactClick={() => handleShowContact()}
          />
          <CountriesLineMobile
            countries={countries}
            offset={29}
            useLogo={false}
            usePortfolio={false}
            useAbout={true}
            useContact={false}
            onCountryClick={(country) => handleCountryClick(country)}
            onLogoClick={() => handleLogoClick()}
            onPortfolioClick={() => handleShowAbout()}
            onAboutClick={() => handleShowAbout()}
            onContactClick={() => handleShowContact()}
          />
          <CountriesLineMobile
            countries={countries}
            offset={31}
            useLogo={false}
            usePortfolio={false}
            useAbout={false}
            useContact={true}
            onCountryClick={(country) => handleCountryClick(country)}
            onLogoClick={() => handleLogoClick()}
            onPortfolioClick={() => handleShowAbout()}
            onAboutClick={() => handleShowAbout()}
            onContactClick={() => handleShowContact()}
          />
          <CountriesLineMobile
            countries={countries}
            offset={33}
            useLogo={true}
            usePortfolio={false}
            useAbout={false}
            useContact={false}
            onCountryClick={(country) => handleCountryClick(country)}
            onLogoClick={() => handleLogoClick()}
            onPortfolioClick={() => handleShowAbout()}
            onAboutClick={() => handleShowAbout()}
            onContactClick={() => handleShowContact()}
          />
          <CountryDialog
            country={selectedCountry}
            showCountry={showCountry}
            onClose={() => handleCloseCountry()}
          />
          <AboutDialog
            showAbout={showAbout}
            onClose={() => handleCloseAbout()}
          />
          <ContactOffcanvas
            showContact={showContact}
            onClose={() => handleCloseContact()}
          />
          {copyright}
        </div>
      </div>
    );
  } else return null;
};

export default App;
