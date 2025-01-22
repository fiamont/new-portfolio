import styled from "styled-components";
import { Link } from "react-router-dom";

// Navbar
export const StyledNavbar = styled.nav`
  background-color: var(--light-grey);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
  width: 100%;
  overflow: hidden;
  border-bottom: 6px solid var(--light-orange-color);

  @media (max-width: 1067px) {
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }
`;

// NavList
export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  grid-column: 2 / 4;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1067px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

// li
export const NavItem = styled.li`
  padding: 10px;
`;

// Link
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: var(--dark-grey-color);

  &:hover {
    color: var(--red-color);
  }
`;
