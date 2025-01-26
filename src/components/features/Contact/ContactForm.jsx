import { StyledDiv, StyledButton } from "./ContactForm.styles";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <StyledDiv className="p-3">
      <Form>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
          <Form.Label>Namn</Form.Label>
          <Form.Control type="name" placeholder="namn namn" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
          <Form.Label>Meddelande</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Form.Check label="Jag är inte en robot" />
        <Button variant="warning" type="submit" size="lg">
          Skicka
        </Button>
      </Form>
    </StyledDiv>
  );
};

export default ContactForm;
