import { inEnglishText } from "../texts/inEnglishText";
import { TextBox } from "../components/index.js";
import { Link } from "react-router-dom";

function InEnglish() {
  return (
    <>
      <h1>{inEnglishText.heading}</h1>
      <TextBox>{inEnglishText.content}</TextBox>
      <h2>
        Projects <Link to="/projects">here</Link>
      </h2>
      <h2>
        Contact <Link to="/contact">here</Link>
      </h2>
    </>
  );
}

export default InEnglish;
