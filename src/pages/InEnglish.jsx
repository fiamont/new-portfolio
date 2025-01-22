import { inEnglishText } from "../texts/inEnglishText";
import TextBox from "../components/TextBox";

function InEnglish() {
  return (
    <>
      <h1>{inEnglishText.heading}</h1>
      <TextBox text={inEnglishText.content} />
    </>
  );
}

export default InEnglish;
