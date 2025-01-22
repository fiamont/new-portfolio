import ProjectBox from "./ProjectBox";
import VideoPlayer from "./VideoPlayer";
import { projectsText, projectOne } from "../texts/projectsText";
import cartoonSofia from "../assets/cartoonSofia.png";

function WebDesign() {
  return (
    <>
      <h1>{projectsText.underHeadingOne}</h1>
      <ProjectBox
        heading={projectOne.heading}
        imgSrc={cartoonSofia}
        imgAlt="A description of the image"
        text={projectOne.content}
      />
      <VideoPlayer />
      <ProjectBox />
    </>
  );
}

export default WebDesign;
