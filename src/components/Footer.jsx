import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  border-top: 2px solid var(--red-color);
  text-align: center;
  padding: 1rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const StyledGithub = styled(FaGithub)`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--dark-grey);
  transition: color 0.3s;

  &:hover {
    color: var(--orange-color);
  }
`;

const StyledLinkedin = styled(FaLinkedin)`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  color: var(--dark-grey);
  transition: color 0.3s;

  &:hover {
    color: var(--orange-color);
  }
`;

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
