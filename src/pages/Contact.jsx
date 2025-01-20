import ContactForm from "../components/ContactForm";
import TextBox from "../components/TextBox";

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <TextBox
        text={
          "Please use the contact form below to contact me here! Or click on the LinkedIn Icon, or if you prefer, contact me on my email: sofia.montgomery@gmail.com"
        }
      />
      <ContactForm />
    </>
  );
}

export default Contact;
