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
  const [show, setShow] = useState(false);

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
    handleShow();
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let modalDialog = (
    <Modal show={show} onHide={handleClose}>
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
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  let copyright = (
    <footer className="copyright-footer">
      <small>&copy; Copyright {new Date().getFullYear()} Prolegoma.com</small>
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
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLine
          countries={countries}
          offset={7}
          centerOpen={true}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLine
          countries={countries}
          offset={14}
          centerOpen={true}
          useLogo={true}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        <CountriesLine
          countries={countries}
          offset={21}
          centerOpen={false}
          useLogo={false}
          onCountryClick={(country) => handleCountryClick(country)}
          onLogoClick={() => handleLogoClick()}
        />
        {modalDialog}
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
        {modalDialog}
        {copyright}
      </div>
    );
  } else return null;
};

export default App;
