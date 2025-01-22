import { StyledNavbar, NavList, NavItem, NavLink } from "./Navbar.styles.js";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavList>
        <NavItem>
          <NavLink to="/">Hem</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">Om mig</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projekt</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Kontakt</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">In English</NavLink>
        </NavItem>
      </NavList>
    </StyledNavbar>
  );
};

export default Navbar;
