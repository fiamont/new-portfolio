import { ProjectBox, VideoPlayer } from "../../index.js";
import { projectsText, projectTwo } from "../../../texts/projectsText.js";
import vaxtverketDesign from "../../../assets/vaxtverketDesign.png";
import { StyledHeading } from "../Project/ProjectPart.styles.js";

function WebDesignPart() {
  return (
    <>
      <StyledHeading>{projectsText.underHeadingTwo}</StyledHeading>
      <ProjectBox
        heading={projectTwo.heading}
        imgSrc={vaxtverketDesign}
        imgAlt="Informationsprodukt Växtverket"
        width={350}
        height={183}
        text={projectTwo.content}
        challenges={projectTwo.challenges}
        solutions={projectTwo.solutions}
      />
      <VideoPlayer />
    </>
  );
}

export default WebDesignPart;
