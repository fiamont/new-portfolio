import { inEnglishText } from "../texts/inEnglishText";
import { TextBox } from "../components/index.js";
import { Link } from "react-router-dom";
import curvyLineOrange from "./../assets/curvyLineOrange.png";
import meRound from "./../assets/meRound.png";
import { Row, Col } from "react-bootstrap";

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
      <img src={meRound} alt="me round" className="img-fluid" />
      <TextBox>{inEnglishText.content}</TextBox>
      <div>
        <h2>
          Projects <Link to="/projects">here</Link>
        </h2>
        <h2>
          Contact <Link to="/contact">here</Link>
        </h2>
        <img
          src={curvyLineOrange}
          alt="curvyLineOrange"
          className="img-fluid"
        />
      </div>
    </>
  );
}

export default InEnglish;
