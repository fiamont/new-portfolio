import { StyledNavbar, NavList, NavItem, NavLink } from "./Navbar.styles.js";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </StyledNavbar>
  );
};

export default Navbar;
