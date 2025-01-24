import { homeText } from "../texts/homeText";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Slideshow, TextBox } from "../components/index.js";
import portfolio from "./../assets/portfolio.png";
import { Row, Col } from "react-bootstrap";

import { HeaderDiv, IconContainer } from "../pages/Home.styles.js";

function Home() {
  return (
    <div>
      <HeaderDiv>
        <h2>{homeText.headingOne}</h2>
        <Row className="justify-content-center">
          <Col xs={12} sm={11} md={10} className="text-center">
            <img src={portfolio} alt="portfolio" className="img-fluid" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={11} md={10} className="text-center">
            <IconContainer className="pt-2 pb-2 fs-1 fs-lg-2">
              <a
                href="https://github.com/fiamont"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sofia-montgomery-3175a821a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </IconContainer>
          </Col>
        </Row>
      </HeaderDiv>
      <TextBox>{homeText.content}</TextBox>
      <Slideshow />
    </div>
  );
}

export default Home;
