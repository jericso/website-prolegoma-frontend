import Offcanvas from 'react-bootstrap/Offcanvas';

const ContactOffcanvas = ({ showContact, onClose }) => {
  return (
    <Offcanvas
      show={showContact}
      onHide={onClose}
      placement="end"
      backdrop="static"
      className="prolegoma-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Us</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="reading-text">[contact form]</Offcanvas.Body>
    </Offcanvas>
  );
};

export default ContactOffcanvas;
