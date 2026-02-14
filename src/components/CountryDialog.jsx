import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CountryDialog = ({ country, showCountry, onClose }) => {
  return (
    <Modal show={showCountry} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{country ? country.name['common'] : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>Region</Col>
            <Col>
              {country && country.hasOwnProperty('region')
                ? country.region
                : '[no region]'}
            </Col>
          </Row>
          <Row>
            <Col>Capital</Col>
            <Col>
              {country && country.hasOwnProperty('capital')
                ? country.capital[0]
                : '[no capital]'}
            </Col>
          </Row>
          <Row>
            <Col>Population</Col>
            <Col>
              {country && country.hasOwnProperty('population')
                ? country.population.toLocaleString()
                : '[no population]'}
            </Col>
          </Row>
          <Row>
            <Col>Google map</Col>
            <Col>
              <a
                href={
                  country && country.maps['googleMaps']
                    ? country.maps['googleMaps']
                    : '[no map]'
                }
                target="_map"
              >
                Open Map
              </a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CountryDialog;
