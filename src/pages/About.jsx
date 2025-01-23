import { aboutText } from "../texts/aboutText";
import { TextBox } from "../components/index.js";
import Me from "../assets/hero-sofia-utklippt.png";
import { StyledDiv, StyledImg } from "../pages/About.styles.js";

function About() {
  return (
    <>
      <h1>{aboutText.heading}</h1>
      <TextBox text={aboutText.contentFirstPart} />
      <StyledDiv>
        <StyledImg src={Me} alt="me" width={230} height={256} />
        <TextBox text={aboutText.contentSecondPart} />
      </StyledDiv>
    </>
  );
}

export default About;
