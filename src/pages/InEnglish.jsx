import { inEnglishText } from "../texts/inEnglishText";
import { TextBox } from "../components/index.js";
import { Link } from "react-router-dom";
import curvyLineOrange from "./../assets/curvyLineOrange.png";
import meRound from "./../assets/meRound.png";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--orange-color);
`;

function InEnglish() {
  return (
    <>
      <Row className="d-flex flex-row justify-content-center align-items-center">
        <Col xs={10} sm={1} className="text-start">
          <h1>{inEnglishText.heading}</h1>
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
        <Col xs={9} md={7} className="justify-content-center">
          <TextBox>{inEnglishText.content}</TextBox>
          <div className="pt-3">
            <p>
              Projects
              <StyledLink to="/projects" className="ps-1 pe-1">
                here.
              </StyledLink>
            </p>
            <p>
              Contact
              <StyledLink to="/contact" className="ps-1 pe-1">
                here.
              </StyledLink>
            </p>
          </div>
        </Col>
        <Col
          xs={9}
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={meRound} alt="me round" className="img-fluid" />
        </Col>
      </Row>
    </>
  );
}

export default InEnglish;
