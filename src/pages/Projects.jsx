import examensprojektet from "./../assets/examensprojektet.png";
import sofiasNotepadImg from "./../assets/sofiasNotepad.png";
import awesomeMemory from "./../assets/awesomeMemory.png";
import unifyImg from "./../assets/unify.png";
import vaxtverketImg from "./../assets/vaxtverketDesign.png";
import curvyLineOrange from "./../assets/curvyLineOrange.png";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  vaxtverket,
  vhvh,
  unify,
  memory,
  sofiasNotepad,
  projectText,
} from "../texts/projectsText";
import { TextBox, ProjectBox, VideoPlayer } from "../components/index.js";
import styled from "styled-components";

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  font-family: var(--heading-font-family);
`;

function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

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
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col>
          <TextBox className="p-1">{projectText.content}</TextBox>
        </Col>
      </Row>
      <Row
        className="d-grid gap-3"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        }}
      >
        <StyledCol id="vhvh">
          <ProjectBox
            heading={vhvh.heading}
            imgSrc={examensprojektet}
            imgAlt="examensprojektet"
            width={300}
            height={157}
            text={vhvh.content}
            challenge={projectText.challenge}
            solution={projectText.solution}
            challengeText={vhvh.challenge}
            solutionText={vhvh.solution}
            githubLink="https://github.com/fiamont/vhvh-frontend.git"
          />
        </StyledCol>
        <StyledCol id="vaxtverket">
          <ProjectBox
            heading={vaxtverket.heading}
            imgSrc={vaxtverketImg}
            imgAlt="Informationsprodukt Växtverket"
            width={300}
            height={157}
            text={vaxtverket.content}
            challenge={projectText.challenge}
            solution={projectText.solution}
            challengeText={vaxtverket.challenge}
            solutionText={vaxtverket.solution}
          />
        </StyledCol>
        <StyledCol id="unify">
          <ProjectBox
            heading={unify.heading}
            imgSrc={unifyImg}
            imgAlt="unifyImg"
            width={300}
            height={157}
            text={unify.content}
            challenge={projectText.challenge}
            solution={projectText.solution}
            challengeText={unify.challenge}
            solutionText={unify.solution}
            githubLink="https://github.com/fiamont/unify.git"
          />
        </StyledCol>
        <StyledCol id="awesomeMemory">
          <ProjectBox
            heading={memory.heading}
            imgSrc={awesomeMemory}
            imgAlt="awesomeMemory"
            width={300}
            height={157}
            text={memory.content}
            challenge={projectText.challenge}
            solution={projectText.solution}
            challengeText={memory.challenge}
            solutionText={memory.solution}
            githubLink="https://github.com/fiamont/sti-memory.git"
          />
        </StyledCol>
        <StyledCol>
          <ProjectBox
            heading={sofiasNotepad.heading}
            imgSrc={sofiasNotepadImg}
            imgAlt="sofiasNotepadImg"
            width={300}
            height={157}
            text={sofiasNotepad.content}
            challenge={projectText.challenge}
            solution={projectText.solution}
            challengeText={sofiasNotepad.challenge}
            solutionText={sofiasNotepad.solution}
            githubLink="https://github.com/fiamont/Sofias_Notepad.git"
          />
        </StyledCol>
      </Row>
      <Row className="d-flex flex-row justify-content-center align-items-center ps-md-5 pb-2">
        <Col xs={10} sm={3} lg={2} className="text-center ps-3">
          <StyledH2>Demos</StyledH2>
        </Col>
        <Col xs={6} sm={4} className="ml-auto">
          <img
            src={curvyLineOrange}
            alt="curvyLineOrange"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col>
          <TextBox>{projectText.contentDemo}</TextBox>
          <p>vhvh-demo...</p>
          <VideoPlayer />
        </Col>
      </Row>
    </>
  );
}

export default Projects;
