import { aboutText } from "../texts/aboutText";
import { TextBox } from "../components/index.js";
import Me from "../assets/hero-sofia-utklippt.png";
import { StyledDiv, StyledImg, StyledLink } from "../pages/About.styles.js";

function About() {
  return (
    <>
      <h1>{aboutText.heading}</h1>
      <TextBox>{aboutText.contentFirstPart}</TextBox>
      <StyledDiv>
        <StyledImg src={Me} alt="me" width={230} height={256} />
        <TextBox>{aboutText.contentSecondPart}</TextBox>
        <TextBox>
          {aboutText.lastLinePartOne}
          <StyledLink to="/contact">{aboutText.lastLinePartTwo}</StyledLink>
        </TextBox>
      </StyledDiv>
    </>
  );
}

export default About;
