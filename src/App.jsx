import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CountriesLine from './components/CountriesLine';
import CountriesLineMobile from './components/CountriesLineMobile';
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

  const handleCountryClick = (country) => {
    console.log(country);
    setSelectedCountry(country);
    handleShowCountry();
  };

  const handleLogoClick = () => {
    handleShowAbout();
  };

  const handleCloseCountry = () => setShowCountry(false);
  const handleShowCountry = () => setShowCountry(true);
  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  let modalCountry = (
    <Modal show={showCountry} onHide={handleCloseCountry}>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedCountry ? selectedCountry.name['common'] : ''}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        The capital of {selectedCountry ? selectedCountry.name['common'] : ''}{' '}
        is{' '}
        {selectedCountry && selectedCountry.hasOwnProperty('capital')
          ? selectedCountry.capital[0]
          : '[no capital]'}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCloseCountry}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  let modalAbout = (
    <Modal show={showAbout} onHide={handleCloseAbout}>
      <Modal.Header closeButton>
        <Modal.Title>About Prolegoma</Modal.Title>
      </Modal.Header>
      <Modal.Body>[content here]</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCloseAbout}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

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
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLine
          countries={countries}
          offset={7}
          centerOpen={true}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLine
          countries={countries}
          offset={14}
          centerOpen={true}
          useLogo={true}
          useCompany={true}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLine
          countries={countries}
          offset={21}
          centerOpen={false}
          useLogo={false}
          useCompany={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        {modalCountry}
        {modalAbout}
        {copyright}
      </div>
    );
  } else if (countries && device === 'Mobile') {
    return (
      <div>
        <CountriesLineMobile
          countries={countries}
          offset={20}
          onCountryClick={(country) => handleCountryClick(country)}
          useLogo={false}
        />
        <CountriesLineMobile
          countries={countries}
          offset={22}
          onCountryClick={(country) => handleCountryClick(country)}
          useLogo={false}
        />
        <CountriesLineMobile
          countries={countries}
          offset={24}
          onCountryClick={(country) => handleCountryClick(country)}
          useLogo={false}
        />
        <CountriesLineMobile
          countries={countries}
          offset={26}
          onCountryClick={(country) => handleCountryClick(country)}
          useLogo={true}
        />
        {modalCountry}
        {modalAbout}
        {copyright}
      </div>
    );
  } else return null;
};

export default App;
