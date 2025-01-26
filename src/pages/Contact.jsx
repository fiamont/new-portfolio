import { ContactForm, TextBox } from "../components/index.js";
import { contactText } from "../texts/contactText";
import { Link } from "react-router-dom";
import curvyLineOrange from "./../assets/curvyLineOrange.png";
import girlcartoon from "./../assets/girlcartoon.png";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--red-color);
`;

function Contact() {
  return (
    <>
      <Row className="d-flex flex-row justify-content-center justify-content-md-start align-items-center">
        <Col xs={10} sm={3} className="text-start text-md-end">
          <h1>{contactText.heading}</h1>
        </Col>
        <Col xs={8} sm={5} className="ml-auto">
          <img
            src={curvyLineOrange}
            alt="curvyLineOrange"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} className="text-center pt-4 pb-3">
          <TextBox>
            {contactText.contentPartOne}
            <StyledLink
              to={contactText.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-1 pe-1"
            >
              {contactText.linkedIn}
            </StyledLink>
            {contactText.contentPartTwo}
          </TextBox>
        </Col>
      </Row>
      <ContactForm />
      <img src={girlcartoon} alt="girlcartoon" className="img-fluid" />
    </>
  );
}

export default Contact;
