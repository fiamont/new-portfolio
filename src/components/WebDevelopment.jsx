import ProjectBox from "./ProjectBox";
import VideoPlayer from "./VideoPlayer";
import cartoonSofia from "../assets/cartoonSofia.png";
import bollarSquare from "../assets/bollarSquare.jpg";
import { projectsText, projectOne } from "../texts/projectsText";
import { StyledHeading } from "../components/ProjectPart.styles.js";

function WebDevelopment() {
  return (
    <>
      <StyledHeading>{projectsText.underHeadingOne}</StyledHeading>
      <ProjectBox
        heading={projectOne.heading}
        imgSrc={cartoonSofia}
        imgAlt="cartoon Sofia"
        width={300}
        height={300}
        text={projectOne.content}
        challenges={projectOne.challenges}
        solutions={projectOne.solutions}
      />
      <VideoPlayer />
      <ProjectBox
        heading={projectOne.heading}
        imgSrc={bollarSquare}
        imgAlt={"yellow balls"}
        width={300}
        height={300}
        text={projectOne.content}
        challenges={projectOne.challenges}
        solutions={projectOne.solutions}
      />
    </>
  );
}

export default WebDevelopment;
