import { aboutText } from "../texts/aboutText";
import TextBox from "../components/TextBox";
import Me from "../assets/hero-sofia-utklippt.png";
import { StyledDiv, StyledImg } from "../pages/About.styles.js";

function About() {
  return (
    <>
      <h1>{aboutText.heading}</h1>
      <TextBox text={aboutText.contentFirstPart} />
      <StyledDiv>
        <TextBox text={aboutText.contentSecondPart} />
        <StyledImg src={Me} alt="me" width={230} height={256} />
      </StyledDiv>
    </>
  );
}

export default About;
