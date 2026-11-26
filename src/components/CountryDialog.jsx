import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './Map';
import { countryName, primaryCapital } from '../utils/country';

const CountryDialog = ({ country, showCountry, onClose }) => {
  const capital = primaryCapital(country);

  return (
    <Modal show={showCountry} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{countryName(country)}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="reading-text">
        <Container>
          <Row>
            <Col>Region</Col>
            <Col>
              {country?.region ?? '[no region]'}
            </Col>
          </Row>
          <Row>
            <Col>Population</Col>
            <Col>
              {country?.population?.toLocaleString() ?? '[no population]'}
            </Col>
          </Row>
          <Row>
            <Col>Capital</Col>
            <Col>
              {capital?.name || '[no capital]'}
            </Col>
          </Row>
          <Row>
            <Col>
              <Map
                latitude={
                  capital?.coordinates?.lat ?? 0
                }
                longitude={
                  capital?.coordinates?.lng ?? 0
                }
              />
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
