import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledNavbar = styled(Navbar)`
  background: none;

  .navbar-toggler {
    border: none;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .navbar-collapse {
    text-align: center;
  }

  .nav-link {
    color: var(--text-color);
    &:hover {
      color: var(--red-color);
    }
  }
`;

const StyledContainer = styled(Container)`
  background: none;
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  &:hover {
    color: var(--red-color);
  }
`;

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    const newExpanded = !expanded;
    console.log("Hamburgermenyns tillstånd:", newExpanded);
    setExpanded(newExpanded);
  };

  const handleClose = () => {
    console.log("Hamburgermenyn stängs!");
    setExpanded(false);
  };

  console.log("Hamburgermenyn är öppen:", expanded);

  return (
    <StyledNavbar
      collapseOnSelect
      expand="lg"
      className="p-2 p-sm-3 p-md-4 p-lg-5"
      expanded={expanded}
    >
      <StyledContainer>
        <StyledNavbarBrand as={Link} to={"/"}>
          Hem
        </StyledNavbarBrand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/about"} onClick={handleClose}>
              Om mig
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"} onClick={handleClose}>
              Projekt
            </Nav.Link>
            <Nav.Link as={Link} to={"/inEnglish"} onClick={handleClose}>
              In English
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"} onClick={handleClose}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledContainer>
    </StyledNavbar>
  );
}

export default Navigation;
