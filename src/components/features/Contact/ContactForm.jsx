import { StyledForm } from "./ContactForm.styles";

function ContactForm() {
  return (
    <div>
      <form action="">
        <label>Namn</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Meddelande</label>
        <textarea></textarea>
      </form>
    </div>
  );
}

export default ContactForm;
