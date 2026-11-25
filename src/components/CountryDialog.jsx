import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './Map';

const CountryDialog = ({ country, showCountry, onClose }) => {
  return (
    <Modal show={showCountry} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{country ? country.name['common'] : ''}</Modal.Title>
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
              {country?.capital?.[0] ?? '[no capital]'}
            </Col>
          </Row>
          <Row>
            <Col>
              <Map
                latitude={
                  country?.capitalInfo?.latlng?.[0] ?? 0
                }
                longitude={
                  country?.capitalInfo?.latlng?.[1] ?? 0
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
