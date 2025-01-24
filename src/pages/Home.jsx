import { homeText } from "../texts/homeText";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Slideshow, TextBox } from "../components/index.js";
import {
  HeaderDiv,
  HeaderOne,
  HeaderTwo,
  IconContainer,
} from "../pages/Home.styles.js";

function Home() {
  return (
    <div>
      <HeaderDiv>
        <HeaderOne>{homeText.headingOne}</HeaderOne>
        <HeaderTwo>{homeText.headingTwo}</HeaderTwo>
        <IconContainer>
          <FaGithub />
          <FaLinkedin />
        </IconContainer>
      </HeaderDiv>
      <TextBox>{homeText.content}</TextBox>
      <TextBox>{homeText.content}</TextBox>
      <TextBox>{homeText.content}</TextBox>
      <TextBox>{homeText.content}</TextBox>
      <TextBox>{homeText.content}</TextBox>
      <TextBox>{homeText.content}</TextBox>
      <Slideshow />
    </div>
  );
}

export default Home;
