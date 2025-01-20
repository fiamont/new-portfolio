import styled from "styled-components";
import { Link } from "react-router-dom";

//navbar
export const StyledNavbar = styled.nav`
  background-color: var(--light-orange-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 150px;
`;

// ul
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// li
export const NavItem = styled.li`
  margin-top: 2rem;
`;

// Link
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: var(--light-grey);

  &:hover {
    color: var(--red-color);
  }
`;
