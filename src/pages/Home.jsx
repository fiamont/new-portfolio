import HeroImage from "../components/HeroImage";
import Slideshow from "../components/Slideshow";
import { homeText } from "../texts/homeText";
import TextBox from "../components/TextBox";

function Home() {
  return (
    <>
      <HeroImage />
      <h1>{homeText.headingOne}</h1>
      <h1>{homeText.headingTwo}</h1>
      <TextBox text={homeText.content} />
      <Slideshow />
    </>
  );
}

export default Home;
