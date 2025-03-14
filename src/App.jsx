import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CountriesLine from './components/CountriesLine';
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(`Using device: ${device}`);

  return (
    <div>
      {countries && device !== 'Mobile' ? (
        <>
          <CountriesLine
            countries={countries}
            offset={0}
            onCountryClick={(country) => handleCountryClick(country)}
          />
          <CountriesLine
            countries={countries}
            offset={7}
            onCountryClick={(country) => handleCountryClick(country)}
          />
          <CountriesLine
            countries={countries}
            offset={14}
            onCountryClick={(country) => handleCountryClick(country)}
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedCountry ? selectedCountry.name['common'] : ''}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              The capital of the selected country is{' '}
              {selectedCountry ? selectedCountry.capital[0] : ''}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        '[mobile version]'
      )}
    </div>
  );
};

export default App;
