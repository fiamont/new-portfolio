import examensprojektet from "./../assets/examensprojektet.png";
import sofiasNotepadImg from "./../assets/sofiasNotepad.png";
import awesomeMemory from "./../assets/awesomeMemory.png";
import unifyImg from "./../assets/unify.png";
import vaxtverketImg from "./../assets/vaxtverketDesign.png";
import curvyLineOrange from "./../assets/curvyLineOrange.png";
import { Row, Col } from "react-bootstrap";
import {
  vaxtverket,
  vhvh,
  unify,
  memory,
  sofiasNotepad,
  projectText,
} from "../texts/projectsText";
import { TextBox, ProjectBox } from "../components/index.js";

function Projects() {
  return (
    <>
      <Row className="d-flex flex-row justify-content-center align-items-center ps-md-5 pb-2">
        <Col xs={10} sm={3} lg={2} className="text-center ps-3">
          <h1>{projectText.heading}</h1>
        </Col>
        <Col xs={6} sm={4} className="ml-auto">
          <img
            src={curvyLineOrange}
            alt="curvyLineOrange"
            className="img-fluid"
          />
        </Col>
      </Row>
      <TextBox>{projectText.content}</TextBox>
      <Row
        className="d-grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        }}
      >
        <Col id="vhvh">
          <ProjectBox
            heading={vhvh.heading}
            imgSrc={examensprojektet}
            imgAlt="examensprojektet"
            width={300}
            height={157}
            text={vhvh.content}
            challenges={vhvh.challenges}
            solutions={vhvh.solutions}
            githubLink="https://github.com/fiamont/vhvh-frontend.git"
            extraText={projectText.klickImg}
          />
        </Col>
        <Col id="vaxtverket">
          <ProjectBox
            heading={vaxtverket.heading}
            imgSrc={vaxtverketImg}
            imgAlt="Informationsprodukt Växtverket"
            width={300}
            height={157}
            text={vaxtverket.content}
            challenges={vaxtverket.challenges}
            solutions={vaxtverket.solutions}
          />
        </Col>
        <Col id="unify">
          <ProjectBox
            heading={unify.heading}
            imgSrc={unifyImg}
            imgAlt="unifyImg"
            width={300}
            height={157}
            text={unify.content}
            challenges={unify.challenges}
            solutions={unify.solutions}
            githubLink="https://github.com/fiamont/unify.git"
            extraText={projectText.klickImg}
          />
        </Col>
        <Col id="awesomeMemory">
          <ProjectBox
            heading={memory.heading}
            imgSrc={awesomeMemory}
            imgAlt="awesomeMemory"
            width={300}
            height={157}
            text={memory.content}
            challenges={memory.challenges}
            solutions={memory.solutions}
            githubLink="https://github.com/fiamont/sti-memory.git"
            extraText={projectText.klickImg}
          />
        </Col>
        <Col>
          <ProjectBox
            heading={sofiasNotepad.heading}
            imgSrc={sofiasNotepadImg}
            imgAlt="sofiasNotepadImg"
            width={300}
            height={157}
            text={sofiasNotepad.content}
            challenges={sofiasNotepad.challenges}
            solutions={sofiasNotepad.solutions}
            githubLink="https://github.com/fiamont/Sofias_Notepad.git"
            extraText={projectText.klickImg}
          />
        </Col>
      </Row>
    </>
  );
}

export default Projects;
