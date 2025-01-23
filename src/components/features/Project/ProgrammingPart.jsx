import { ProjectBox, VideoPlayer } from "../../index.js";
import cartoonSofia from "../../../assets/cartoonSofia.png";
import bollarSquare from "../../../assets/bollarSquare.jpg";
import { projectsText, projectOne } from "../../../texts/projectsText.js";
import { StyledHeading } from "../Project/ProjectPart.styles.js";

function ProgrammingPart() {
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

export default ProgrammingPart;
