import WebDesign from "../components/WebDesign";
import WebDevelopment from "../components/WebDevelopment";
import { projectsText } from "../texts/projectsText";
import TextBox from "../components/TextBox";

function Projects() {
  return (
    <>
      <h1>{projectsText.heading}</h1>
      <TextBox text={projectsText.content} />
      <WebDesign />
      <WebDevelopment />
    </>
  );
}

export default Projects;
