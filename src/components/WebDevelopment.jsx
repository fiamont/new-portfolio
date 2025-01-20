import ProjectBox from "./ProjectBox";
import VideoPlayer from "./VideoPlayer";
import cartoonSofia from "../assets/cartoonSofia.png";
import { projectTwo } from "../texts/projectsText";

function WebDevelopment() {
  return (
    <>
      <h1>Web Development</h1>
      <ProjectBox
        heading={projectTwo.heading}
        imgSrc={cartoonSofia}
        imgAlt="cartoon Sofia"
        text={projectTwo.content}
      />
      <VideoPlayer />
      <ProjectBox />
    </>
  );
}

export default WebDevelopment;
