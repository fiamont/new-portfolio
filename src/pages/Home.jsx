import HeroImage from "../components/HeroImage";
import Slideshow from "../components/Slideshow";
import { homeText } from "../texts/homeText";
import TextBox from "../components/TextBox";

function Home() {
  return (
    <>
      <HeroImage />
      <TextBox text={homeText.content} />
      <Slideshow />
    </>
  );
}

export default Home;
