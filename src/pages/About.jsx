import { aboutText } from "../texts/aboutText";
import TextBox from "../components/TextBox";

function About() {
  return (
    <>
      <h1>{aboutText.heading}</h1>
      <TextBox text={aboutText.contentFirstPart} />
      <TextBox text={aboutText.contentSecondPart} />
    </>
  );
}

export default About;
