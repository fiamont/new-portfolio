import { ProjectBox } from "../../index.js";
import { vaxtverket } from "../../../texts/projectsText.js";
import vaxtverketDesign from "../../../assets/vaxtverketDesign.png";
import { StyledDiv } from "../Project/ProjectPart.styles.js";
import { Row, Col } from "react-bootstrap";

function WebDesignPart() {
  return (
    <Row className="d-flex justify-content-center">
      <Col>
        <ProjectBox
          heading={vaxtverket.heading}
          imgSrc={vaxtverketDesign}
          imgAlt="Informationsprodukt Växtverket"
          width={300}
          height={157}
          text={vaxtverket.content}
          challenges={vaxtverket.challenges}
          solutions={vaxtverket.solutions}
        />
      </Col>
    </Row>
  );
}

export default WebDesignPart;
