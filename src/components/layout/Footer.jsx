import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer``;

const FooterText = styled.p``;

const IconContainer = styled.div``;

const StyledGithub = styled(FaGithub)``;

const StyledLinkedin = styled(FaLinkedin)``;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Sofia Montgomery portfolio
      </FooterText>
      <IconContainer>
        <StyledGithub />
        <StyledLinkedin />
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
