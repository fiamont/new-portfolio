import ProjectBox from "./ProjectBox";
import VideoPlayer from "./VideoPlayer";
import { projectOne } from "../texts/projectsText";
import cartoonSofia from "../assets/cartoonSofia.png";

function WebDesign() {
  return (
    <>
      <h1>Web Design</h1>
      <ProjectBox
        heading={projectOne.heading}
        imgSrc={cartoonSofia} // Skicka bildens URL här
        imgAlt="A description of the image"
        text={projectOne.content}
      />
      <VideoPlayer />
      <ProjectBox />
    </>
  );
}

export default WebDesign;
