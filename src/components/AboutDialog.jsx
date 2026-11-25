import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AboutDialog = ({ showAbout, onClose }) => {
  return (
    <Modal show={showAbout} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Prolegoma</Modal.Title>
      </Modal.Header>
      <Modal.Body className="prolegoma-about-body reading-text">
        <p>I&apos;m a full-stack developer focused on information management.</p>
        <p>I deliver practical, quality solutions to meet client needs.</p>
        <p>
          From integrations to complete systems, I&apos;d be glad to help with
          your data.
        </p>
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
