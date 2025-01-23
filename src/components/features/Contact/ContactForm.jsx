import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
} from "./ContactForm.styles";

const ContactForm = () => {
  return (
    <div>
      <StyledForm action="" autoComplete="on">
        <div>
          <StyledLabel htmlFor="name">Namn</StyledLabel>
          <StyledInput type="text" id="name" name="name" autoComplete="name" />
        </div>
        <div>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            autoComplete="email"
          />
        </div>
        <div>
          <StyledLabel htmlFor="message">Meddelande</StyledLabel>
          <StyledTextarea
            id="message"
            name="message"
            autoComplete="off"
          ></StyledTextarea>
        </div>
        <div>
          <label htmlFor="robotCheck">
            <input
              type="checkbox"
              id="robotCheck"
              name="robotCheck"
              autoComplete="off"
            />
            Jag är ingen robot
          </label>
        </div>
        <div>
          <button type="submit">Skicka</button>
        </div>
      </StyledForm>
    </div>
  );
};

export default ContactForm;
