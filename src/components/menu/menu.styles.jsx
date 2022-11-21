import styled from "styled-components";

export const StyledMenu = styled.nav`
  /* display: flex; */
  display: none;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color--primary-second);
  color: var(--color-primary-darker);
  height: 100%;
  text-align: center;
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 9;
  transition: transform 0.6s ease-in-out;
  transform: ${({ isBurgerOpen }) =>
    isBurgerOpen ? "translateX(0%)" : "translateX(100%)"};

  @media only screen and (max-width: 800px) {
    display: flex;
    width: 100%;
  }

  @media only screen and (min-width: 1000px) {
    transition: transform 0.3s ease-in-out;
    transform: ${({ isBurgerOpen }) =>
      isBurgerOpen ? "translateX(100%)" : "translateX(100%)"};
  }

  a {
    font-size: 2rem;
    font-weight: bold;
    transition: all 0.3s;
    letter-spacing: 1px;
    padding: 1rem;
  }

  img {
    height: 5rem;
    transition: all 0.3s;
  }
`;
