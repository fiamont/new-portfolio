import { homeText } from "../texts/homeText";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Slideshow } from "../components/index.js";
import portfolio from "./../assets/heroImg.png";
import { Row, Col } from "react-bootstrap";

import { HeaderDiv, IconContainer } from "../pages/Home.styles.js";

function Home() {
  return (
    <div>
      <HeaderDiv>
        <Row className="justify-content-center m-0">
          <Col xs={11} sm={10} md={7} className="text-center">
            <img src={portfolio} alt="portfolio" className="img-fluid" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={11} md={10} className="text-center">
            <IconContainer className="pb-2 fs-1 fs-lg-2">
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
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="pt-1 pb-3 text-center fs-4 fs-mg-1">{homeText.content}</p>
        <p className="pt-1 pb-3 text-center fs-6 fs-mg-3 fs-lg-2">
          {homeText.slideshow}
        </p>
        <Slideshow />
      </div>
    </div>
  );
}

export default Home;
