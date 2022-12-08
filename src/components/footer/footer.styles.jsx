import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 1rem;
  background-color: var(--color--primary-second);
  bottom: 0;
`;

export const Logo = styled.div`
  margin: 5rem auto 0rem auto;

  img {
    width: 10%;
    display: block;
    margin: auto;
    padding-bottom: 4rem;

    @media only screen and (max-width: 968px) {
      width: 20%;
    }

    @media only screen and (max-width: 500px) {
      width: 50%;
    }
  }
`;

export const FooterLinks = styled.div`
  text-align: center;
  color: var(--color-primary-darker);
  font-size: 2rem;
  font-weight: 600;
  transition: all 0.3s;
  letter-spacing: 1px;

  @media only screen and (max-width: 968px) {
    font-size: 1.5rem;
    letter-spacing: 0px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
