import styled from "styled-components";

export const NavBarContainer = styled.div`
  height: 12vh;
  width: 100%;
  display: flex;
  padding: 0 6rem;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color--primary-second);
  color: var(--color-primary-darker);
  position: sticky;
  z-index: 10;
  top: 0;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin-left: 4rem;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.3s;
  letter-spacing: 1px;

  img {
    height: 3.5rem;
    transition: all 0.3s;
  }
`;
