import { aboutText } from "../texts/aboutText";
import { TextBox } from "../components/index.js";
import Me from "../assets/meRoundGlasses.png";
import curvyLineOrange from "./../assets/curvyLineOrange.png";
import { StyledDiv, StyledImg, StyledLink } from "../pages/About.styles.js";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <Row className="d-flex flex-row justify-content-center align-items-center">
        <Col xs={10} sm={1} className="text-start">
          <h1>{aboutText.heading}</h1>
        </Col>
        <Col xs={8} sm={5} className="ml-auto">
          <img
            src={curvyLineOrange}
            alt="curvyLineOrange"
            className="img-fluid"
          />
        </Col>
      </Row>
      <StyledDiv>
        <StyledImg src={Me} alt="me" className="img-fluid" />
        <TextBox>{aboutText.contentFirstPart}</TextBox>
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
