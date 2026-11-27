import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import contactMessageService from '../services/contactMessage';

// Keep these in sync with the backend ContactMessage schema.
const NUMBER_PATTERN = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm = { name: '', number: '', email: '', message: '' };

const validate = ({ name, number, email, message }) => {
  const errors = {};
  if (name.trim().length < 3) {
    errors.name = 'Please enter at least 3 characters.';
  }
  // Phone is optional, but must be valid when given.
  if (number.trim() && !NUMBER_PATTERN.test(number.trim())) {
    errors.number = 'Please enter a 10-digit phone number, in the format XXX-XXX-XXXX.';
  }
  if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = 'Please enter a valid email address, e.g. name@example.com.';
  }
  if (message.trim().length < 10) {
    errors.message = 'Please enter at least 10 characters.';
  }
  return errors;
};

const ContactOffcanvas = ({ showContact, onClose }) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { variant, text }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(null);

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    contactMessageService
      .create({
        name: form.name.trim(),
        number: form.number.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })
      .then(() => {
        setForm(emptyForm);
        setErrors({});
        setStatus({
          variant: 'success',
          text: 'Thanks! Your message has been sent.',
        });
      })
      .catch((error) => {
        setStatus({
          variant: 'danger',
          text:
            error.response?.data?.error ??
            'Sorry, your message could not be sent. Please try again.',
        });
      })
      .finally(() => setSubmitting(false));
  };

  const handleClose = () => {
    setStatus(null);
    setErrors({});
    onClose();
  };

  return (
    <Offcanvas
      show={showContact}
      onHide={handleClose}
      placement="end"
      backdrop="static"
      className="prolegoma-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Us</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {status && (
          <Alert
            variant={status.variant}
            className="reading-text"
            onClose={() => setStatus(null)}
            dismissible
          >
            {status.text}
          </Alert>
        )}
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3 reading-text" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              disabled={submitting}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 reading-text" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              autoComplete="email"
              placeholder="name@example.com"
              maxLength={254}
              value={form.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              disabled={submitting}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 reading-text" controlId="contactNumber">
            <Form.Label>Phone number (optional)</Form.Label>
            <Form.Control
              type="tel"
              name="number"
              autoComplete="tel"
              placeholder="XXX-XXX-XXXX"
              value={form.number}
              onChange={handleChange}
              isInvalid={!!errors.number}
              disabled={submitting}
            />
            <Form.Control.Feedback type="invalid">
              {errors.number}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 reading-text" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
              disabled={submitting}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="dark" type="submit" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send'}
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ContactOffcanvas;
