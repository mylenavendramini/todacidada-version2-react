import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Burger from "../burger/burger";
import Menu from "../menu/menu.component";
import { useOnClickOutside } from "../../hooks";
import { NavBarContainer, NavLinks, NavItem } from "./navbar.styles";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <Fragment>
      <NavBarContainer>
        <NavLinks>
          <NavItem>
            <Link onClick={scrollToTop} to="/">
              <img
                src="/logoprincipal.png"
                type="image/pnj"
                alt="TodaCidada-logo"
              />
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={scrollToTop} to="/quemsomos">
              Quem somos
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={scrollToTop} to="/cargamental">
              Nossos cursos
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={scrollToTop} to="/contato">
              Contato
            </Link>
          </NavItem>
        </NavLinks>
      </NavBarContainer>

      <Burger isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      <Menu isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
    </Fragment>
  );
}

export default Navbar;
