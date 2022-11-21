import { bool, func } from "prop-types";
import { StyledBurger } from "./burger.styles";

function Burger({ isBurgerOpen, setIsBurgerOpen }) {
  return (
    <StyledBurger
      isBurgerOpen={isBurgerOpen}
      onClick={() => setIsBurgerOpen(!isBurgerOpen)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

Burger.propTypes = {
  isBurgerOpen: bool.isRequired,
  setIsBurgerOpen: func.isRequired,
};

export default Burger;
