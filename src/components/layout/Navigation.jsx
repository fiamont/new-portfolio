import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background: none;
  .navbar-toggler {
    border: none;
  }
`;

const StyledContainer = styled(Container)`
  background: none;
`;

function Navigation() {
  return (
    <StyledNavbar
      collapseOnSelect
      expand="lg"
      className="p-2 p-sm-3 p-md-4 p-lg-5"
    >
      <StyledContainer>
        <Navbar.Brand as={Link} to={"/"}>
          Hem
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/about"}>
              Om mig
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"}>
              Projekt
            </Nav.Link>
            <Nav.Link as={Link} to={"/inEnglish"}>
              In English
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledContainer>
    </StyledNavbar>
  );
}

export default Navigation;
