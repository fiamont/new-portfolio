import styled from "styled-components";
import Slideshow from "../components/Slideshow";
import { homeText } from "../texts/homeText";
import TextBox from "../components/TextBox";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import VerticalLine from "../components/VerticalLine";
import {
  HomeDiv,
  HeaderDiv,
  HeaderOne,
  HeaderTwo,
  IconContainer,
} from "../pages/Home.styles.js";

function Home() {
  return (
    <HomeDiv>
      <VerticalLine width="24px" color="var(--yellow-color)" $right="15%" />
      <HeaderDiv>
        <HeaderOne>{homeText.headingOne}</HeaderOne>
        <HeaderTwo>{homeText.headingTwo}</HeaderTwo>
        <IconContainer>
          <FaGithub />
          <FaLinkedin />
        </IconContainer>
      </HeaderDiv>
      <TextBox text={homeText.content} />
      <TextBox text={homeText.content} />
      <TextBox text={homeText.content} />
      <TextBox text={homeText.content} />
      <TextBox text={homeText.content} />
      <TextBox text={homeText.content} />
      <Slideshow />
    </HomeDiv>
  );
}

export default Home;
