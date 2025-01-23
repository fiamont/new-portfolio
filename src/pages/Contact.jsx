import { ContactForm, TextBox } from "../components/index.js";
import { contactText } from "../texts/contactText";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <h1>{contactText.heading}</h1>
      <TextBox>
        {contactText.contentPartOne}
        <Link
          to={contactText.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contactText.linkedIn}
        </Link>
        {contactText.contentPartTwo}
      </TextBox>
      <ContactForm />
    </>
  );
}

export default Contact;
