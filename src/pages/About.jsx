import { aboutText } from "../texts/aboutText";
import { TextBox } from "../components/index.js";
import Me from "../assets/meRoundGlasses.png";
import curvyLineOrange from "./../assets/curvyLineOrange.png";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--orange-color);
`;

function About() {
  return (
    <>
      <Row className="d-flex flex-row justify-content-center align-items-center pb-2">
        <Col xs={10} sm={2} lg={1} className="text-start pe-3">
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
      <Row className="d-flex justify-content-center align-items-center pt-4 pb-4">
        <Col xs={8} md={7} className="justify-content-center">
          <TextBox>{aboutText.contentFirstPart}</TextBox>
          <TextBox>{aboutText.contentSecondPart}</TextBox>
          <TextBox>
            {aboutText.lastLinePartOne}
            <StyledLink to="/contact" className="ps-1 pe-1">
              {aboutText.lastLinePartTwo}
            </StyledLink>
          </TextBox>
        </Col>
        <Col
          xs={11}
          md={4}
          className="d-flex justify-content-center align-items-center pt-5 pt-md-0"
        >
          <img src={Me} alt="me" className="img-fluid" />
        </Col>
      </Row>
    </>
  );
}

export default About;
