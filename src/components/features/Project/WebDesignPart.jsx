import { ProjectBox, VideoPlayer } from "../../index.js";
import { projectsText, vaxtverket } from "../../../texts/projectsText.js";
import vaxtverketDesign from "../../../assets/vaxtverketDesign.png";
import { StyledHeading } from "../Project/ProjectPart.styles.js";

function WebDesignPart() {
  return (
    <>
      <StyledHeading>{projectsText.underHeadingTwo}</StyledHeading>
      <ProjectBox
        heading={vaxtverket.heading}
        imgSrc={vaxtverketDesign}
        imgAlt="Informationsprodukt Växtverket"
        width={350}
        height={183}
        text={vaxtverket.content}
        challenges={vaxtverket.challenges}
        solutions={vaxtverket.solutions}
      />
      <VideoPlayer />
    </>
  );
}

export default WebDesignPart;
