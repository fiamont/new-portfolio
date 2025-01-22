import ProjectBox from "./ProjectBox";
import VideoPlayer from "./VideoPlayer";
import { projectsText, projectTwo } from "../texts/projectsText";
import vaxtverketDesign from "../assets/vaxtverketDesign.png";
import { StyledHeading } from "../components/ProjectPart.styles.js";

function WebDesign() {
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

export default WebDesign;
