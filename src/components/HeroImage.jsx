import { homeText } from "../texts/homeText";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import webutveckling from "../assets/webutveckling.jpg";

const BackgroundDiv = styled.div`
  background-image: url(${webutveckling}); /* Ställer in bakgrundsbilden */
  background-size: cover; /* Gör så att bilden täcker hela div */
  background-position: center; /* Centrera bilden */
  height: 80vh; /* Gör div lika hög som skärmen */
  width: 100%; /* Gör div lika bred som skärmen */
  display: flex;
  flex-direction: column; /* Staplar innehållet vertikalt */
  justify-content: center;
  align-items: left;
  padding-left: 5rem;
`;

function HeroImage() {
  return (
    <BackgroundDiv>
      <h2>{homeText.headingTwo}</h2>
      <h1>{homeText.headingOne}</h1>
      <FaGithub />
      <FaLinkedin />
    </BackgroundDiv>
  );
}

export default HeroImage;
