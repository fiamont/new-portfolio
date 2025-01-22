import ContactForm from "../components/ContactForm";
import TextBox from "../components/TextBox";
import { contactText } from "../texts/contactText";

function Contact() {
  return (
    <>
      <h1>{contactText.heading}</h1>
      <TextBox text={contactText.content} />
      <ContactForm />
    </>
  );
}

export default Contact;
