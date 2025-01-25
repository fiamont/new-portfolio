import { ProjectBox, VideoPlayer } from "../../index.js";
import examensprojektet from "../../../assets/examensprojektet.png";
import sofiasNotepadImg from "../../../assets/sofiasNotepad.png";
import awesomeMemory from "../../../assets/awesomeMemory.png";
import unifyImg from "../../../assets/unify.png";
import { StyledDiv } from "../Project/ProjectPart.styles.js";
import { Row, Col } from "react-bootstrap";
import {
  vhvh,
  memory,
  sofiasNotepad,
  unify,
} from "../../../texts/projectsText.js";

function ProgrammingPart() {
  return (
    <Row className="d-flex flex-row justify-content-center">
      <Col>
        <ProjectBox
          heading={vhvh.heading}
          imgSrc={examensprojektet}
          imgAlt="examensprojektet"
          width={300}
          height={157}
          text={vhvh.content}
          challenges={vhvh.challenges}
          solutions={vhvh.solutions}
        />
        {/* <VideoPlayer /> */}
        <ProjectBox
          heading={sofiasNotepad.heading}
          imgSrc={sofiasNotepadImg}
          imgAlt={"sofiasNotepadImg"}
          width={300}
          height={157}
          text={sofiasNotepad.content}
          challenges={sofiasNotepad.challenges}
          solutions={sofiasNotepad.solutions}
        />
        <ProjectBox
          heading={unify.heading}
          imgSrc={unifyImg}
          imgAlt="unifyImg"
          width={300}
          height={157}
          text={unify.content}
          challenges={unify.challenges}
          solutions={unify.solutions}
        />
        <ProjectBox
          heading={memory.heading}
          imgSrc={awesomeMemory}
          imgAlt={"awesomeMemory"}
          width={300}
          height={157}
          text={memory.content}
          challenges={memory.challenges}
          solutions={memory.solutions}
        />
      </Col>
    </Row>
  );
}

export default ProgrammingPart;
