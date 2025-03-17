import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import CountriesLine from './components/CountriesLine';
import CountriesLineMobile from './components/CountriesLineMobile';
import AboutDialog from './components/AboutDialog';
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

  const handleAboutClick = () => {
    handleShowAbout();
  };

  const handleCountryClick = (country) => {
    console.log(country);
    setSelectedCountry(country);
    handleShowCountry();
  };

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);
  const handleCloseCountry = () => setShowCountry(false);
  const handleShowCountry = () => setShowCountry(true);

  let copyright = (
    <footer className="copyright-footer">
      &copy; Copyright {new Date().getFullYear()} Prolegoma.com
    </footer>
  );

  let navigation = (
    <Nav
      className="justify-content-center"
      variant="underline"
      activeKey=""
      onSelect={(selectedKey) => {
        if (selectedKey === 'about') {
          handleAboutClick();
        } else {
          alert(`selected ${selectedKey}`);
        }
      }}
    >
      <Nav.Item>
        <Nav.Link eventKey="home" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );

  if (countries && device !== 'Mobile') {
    return (
      <div>
        <CountriesLine
          countries={countries}
          offset={0}
          centerOpen={false}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountriesLine
          countries={countries}
          offset={7}
          centerOpen={true}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountriesLine
          countries={countries}
          offset={14}
          centerOpen={true}
          useLogo={true}
          useCompany={true}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountriesLine
          countries={countries}
          offset={21}
          centerOpen={false}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountryDialog
          country={selectedCountry}
          showCountry={showCountry}
          onClose={() => handleCloseCountry()}
        />
        <AboutDialog showAbout={showAbout} onClose={() => handleCloseAbout()} />
        {navigation}
        {copyright}
      </div>
    );
  } else if (countries && device === 'Mobile') {
    return (
      <div>
        <CountriesLineMobile
          countries={countries}
          offset={20}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountriesLineMobile
          countries={countries}
          offset={22}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountriesLineMobile
          countries={countries}
          offset={24}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountriesLineMobile
          countries={countries}
          offset={26}
          useLogo={true}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleAboutClick()}
        />
        <CountryDialog
          country={selectedCountry}
          showCountry={showCountry}
          onClose={() => handleCloseCountry()}
        />
        <AboutDialog showAbout={showAbout} onClose={() => handleCloseAbout()} />
        {copyright}
      </div>
    );
  } else return null;
};

export default App;
