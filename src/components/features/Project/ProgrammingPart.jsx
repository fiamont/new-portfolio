import { ProjectBox, VideoPlayer } from "../../index.js";
import examensprojektet from "../../../assets/examensprojektet.png";
import bollarSquare from "../../../assets/bollarSquare.jpg";
import cartoonSofia from "../../../assets/cartoonSofia.png";
import awesomeMemory from "../../../assets/awesomeMemory.png";

import {
  projectsText,
  vhvh,
  memory,
  sofiasNotepad,
  unify,
} from "../../../texts/projectsText.js";
import { StyledHeading } from "../Project/ProjectPart.styles.js";

function ProgrammingPart() {
  return (
    <>
      <StyledHeading>{projectsText.underHeadingOne}</StyledHeading>
      <ProjectBox
        heading={vhvh.heading}
        imgSrc={examensprojektet}
        imgAlt="examensprojektet"
        width={350}
        height={183}
        text={vhvh.content}
        challenges={vhvh.challenges}
        solutions={vhvh.solutions}
      />
      <VideoPlayer />
      <ProjectBox
        heading={sofiasNotepad.heading}
        imgSrc={bollarSquare}
        imgAlt={"yellow balls"}
        width={300}
        height={300}
        text={sofiasNotepad.content}
        challenges={sofiasNotepad.challenges}
        solutions={sofiasNotepad.solutions}
      />
      <ProjectBox
        heading={unify.heading}
        imgSrc={cartoonSofia}
        imgAlt="cartoon Sofia"
        width={300}
        height={300}
        text={unify.content}
        challenges={unify.challenges}
        solutions={unify.solutions}
      />
      <ProjectBox
        heading={memory.heading}
        imgSrc={awesomeMemory}
        imgAlt={"awesomeMemory"}
        width={350}
        height={183}
        text={memory.content}
        challenges={memory.challenges}
        solutions={memory.solutions}
      />
    </>
  );
}

export default ProgrammingPart;
