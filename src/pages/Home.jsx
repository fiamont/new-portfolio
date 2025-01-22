import styled from "styled-components";
import Slideshow from "../components/Slideshow";
import { homeText } from "../texts/homeText";
import TextBox from "../components/TextBox";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 3rem 2rem 5rem;

  @media (max-width: 700px) {
    padding: 1rem 1rem 1rem 3rem;
  }
`;

const HeaderOne = styled.h2`
  font-size: clamp(1rem, 3.5vw, 5rem);
  margin: 0px 0px 5px 0px;
`;

const HeaderTwo = styled.h1`
  margin: -30px 0px -20px 0px;
  font-size: clamp(3rem, 13.5vw, 11rem);

  @media (max-width: 700px) {
    margin: -10px 0px -5px 0px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2rem;

  svg {
    width: 2rem;
    height: auto;

    @media (min-width: 768px) {
      width: 3rem;
    }

    @media (min-width: 1024px) {
      width: 4rem;
    }
  }
`;

function Home() {
  return (
    <>
      <HeaderDiv>
        <HeaderOne>{homeText.headingOne}</HeaderOne>
        <HeaderTwo>{homeText.headingTwo}</HeaderTwo>
        <IconContainer>
          <FaGithub />
          <FaLinkedin />
        </IconContainer>
      </HeaderDiv>
      <TextBox text={homeText.content} />
      <Slideshow />
    </>
  );
}

export default Home;
