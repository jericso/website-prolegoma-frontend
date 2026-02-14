import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AboutDialog = ({ showAbout, onClose }) => {
  return (
    <Modal show={showAbout} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Prolegoma</Modal.Title>
      </Modal.Header>
      <Modal.Body className="reading-text">
        <p>
          We&apos;re a small software company focused on information management
          who listen to client needs. We deliver practical, quality solutions.
        </p>
        <p>Integrations to complete systems.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutDialog;
