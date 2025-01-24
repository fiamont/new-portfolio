import { projectsText } from "../texts/projectsText";
import {
  ProgrammingPart,
  WebDesignPart,
  TextBox,
} from "../components/index.js";

function Projects() {
  return (
    <>
      <h1>{projectsText.heading}</h1>
      <TextBox>{projectsText.content}</TextBox>
      <WebDesignPart />
      <ProgrammingPart />
    </>
  );
}

export default Projects;
