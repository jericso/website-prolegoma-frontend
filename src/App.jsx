import { useState, useEffect } from 'react';
import CountriesLine from './components/CountriesLine';
import CountriesLineMobile from './components/CountriesLineMobile';
import AboutOffcanvas from './components/AboutOffcanvas';
import ContactOffcanvas from './components/ContactOffcanvas';
import CountryDialog from './components/CountryDialog';
import countryService from './services/country';
import useDeviceDetection from './hooks/useDeviceDetection';
import './App.css';

const App = () => {
  const device = useDeviceDetection();
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showCountry, setShowCountry] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

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
        <AboutOffcanvas
          showAbout={showAbout}
          onClose={() => handleCloseAbout()}
        />
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
        <CountriesLineMobile
          countries={countries}
          offset={27}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLineMobile
          countries={countries}
          offset={29}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLineMobile
          countries={countries}
          offset={31}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLineMobile
          countries={countries}
          offset={33}
          useLogo={true}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountryDialog
          country={selectedCountry}
          showCountry={showCountry}
          onClose={() => handleCloseCountry()}
        />
        <AboutOffcanvas
          showAbout={showAbout}
          onClose={() => handleCloseAbout()}
        />
        {copyright}
      </div>
    );
  } else return null;
};

export default App;
