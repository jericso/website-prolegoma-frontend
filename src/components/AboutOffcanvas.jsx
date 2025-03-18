import Offcanvas from 'react-bootstrap/Offcanvas';

const AboutOffcanvas = ({ showAbout, onClose }) => {
  return (
    <Offcanvas
      show={showAbout}
      onHide={onClose}
      placement="start"
      backdrop="static"
      className="prolegoma-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>About</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        resume, information about my work history, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default AboutOffcanvas;
