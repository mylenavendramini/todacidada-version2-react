import React, { Fragment } from "react";
import { StyledMenu } from "./menu.styles";
import { Link } from "react-router-dom";
import { bool } from "prop-types";

const Menu = ({ isBurgerOpen }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <StyledMenu isBurgerOpen={isBurgerOpen}>
        <a onClick={scrollToTop} href="/">
          <img
            src="/logoprincipal.png"
            type="image/pnj"
            alt="TodaCidada-logo"
          />
        </a>
        <a href="/quemsomos">Quem somos</a>
        <a href="/cargamental">Nossos cursos</a>
        <a href="/contato">Contato</a>
      </StyledMenu>
    </Fragment>
  );
};
Menu.propTypes = {
  isBurgerOpen: bool.isRequired,
};
export default Menu;
