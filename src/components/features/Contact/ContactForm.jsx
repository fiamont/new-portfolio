import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { StyledDiv, ButtonContainer, StyledButton } from "./ContactForm.styles";
import { Form } from "react-bootstrap";

function ContactForm() {
  const formRef = useRef();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    notARobot: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("Email skickat!");
            alert("Ditt meddelande har skickats!");
            setFormData({
              name: "",
              email: "",
              message: "",
              notARobot: false,
            });
            setValidated(false);
            formRef.current.reset();
          },
          (error) => {
            console.log("Ett fel uppstod:", error.text);
            alert("Det gick inte att skicka ditt meddelande.");
          }
        );
    }

    setValidated(true);
  };

  return (
    <StyledDiv className="p-3">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
          <Form.Label>Namn</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Namn Namn"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Namn saknas.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="namn@exempel.com"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Email saknas eller innehåller inte @.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
          <Form.Label>Meddelande</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={5}
            name="message"
            placeholder="Skriv ditt meddelande här"
            value={formData.message}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Meddelande saknas.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Check
            required
            label="Jag är inte en robot"
            name="notARobot"
            feedback="Klicka i rutan."
            feedbackType="invalid"
            checked={formData.notARobot}
            onChange={handleChange}
          />
        </Form.Group>
        <ButtonContainer className="mt-4">
          <StyledButton type="submit" className="fs-3 pe-3 ps-3">
            Skicka
          </StyledButton>
        </ButtonContainer>
      </Form>
    </StyledDiv>
  );
}

export default ContactForm;
