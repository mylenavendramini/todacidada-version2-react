import styled from "styled-components";

export const StyledBurger = styled.button`
  display: none;

  @media only screen and (max-width: 800px) {
    display: flex;
    position: sticky;
    /* top: 2.2rem; */
    top: 5rem;
    left: 1.8rem;
    flex-direction: column;
    justify-content: space-around;
    width: 1rem;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 25;

    &:focus {
      outline: none;
    }

    &:hover {
      transform: scale(1.2);
    }

    div {
      width: 30px;
      height: 5px;
      background-color: var(--color-primary-darker);
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ isBurgerOpen }) =>
          isBurgerOpen ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${({ isBurgerOpen }) => (isBurgerOpen ? "0" : "1")};
        transform: ${({ isBurgerOpen }) =>
          isBurgerOpen ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ isBurgerOpen }) =>
          isBurgerOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;
