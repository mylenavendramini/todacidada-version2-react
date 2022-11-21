import { Fragment } from "react";
import { FooterContainer, Logo, FooterLinks } from "./footer.styles";

function Footer() {
  return (
    <Fragment>
      <FooterContainer>
        <Logo>
          <a href="/">
            <img
              type="image/pnj"
              src="/logosecundaria.png"
              alt="logo-secundaria"
            />
          </a>
        </Logo>

        <FooterLinks>
          <a
            href="https://www.linkedin.com/company/toda-cidad%C3%A3/mycompany"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Linkedin |{" "}
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/todacidada"
          >
            {" "}
            Facebook |{" "}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/todacidada/"
          >
            {" "}
            Instagram |{" "}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/todacidada"
          >
            {" "}
            Twitter |{" "}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtube.com/channel/UCKfIdNKgdFBk4V4AYHtgLew"
          >
            {" "}
            YouTube
          </a>
        </FooterLinks>
      </FooterContainer>
    </Fragment>
  );
}

export default Footer;
