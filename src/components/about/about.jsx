import { Fragment } from "react";
import Contact from "../contact/contact";
import Description from "../description/description";
import { Header } from "./about.styles";

function About() {
  return (
    <Fragment>
      <Header>
        <img
          type="image/pnj"
          src="/logoprincipaltagline.png"
          alt="toda-cidada-logo"
        />
      </Header>
      <Description />
      <Contact />
    </Fragment>
  );
}

export default About;
