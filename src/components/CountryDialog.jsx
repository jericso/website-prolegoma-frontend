import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CountryDialog = ({ country, showCountry, onClose }) => {
  return (
    <Modal show={showCountry} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{country ? country.name['common'] : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        The capital of {country ? country.name['common'] : ''} is{' '}
        {country && country.hasOwnProperty('capital')
          ? country.capital[0]
          : '[no capital]'}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CountryDialog;
