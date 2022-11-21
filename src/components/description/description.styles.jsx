import styled from "styled-components";

export const DescriptionDesktop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  /* gap: 3em; */
  column-gap: 5rem;
  margin: auto 2rem;
  padding: 2rem 0rem;

  h5 {
    font-size: 2.5rem;
    text-transform: uppercase;
    color: var(--color-primary);
    font-family: "Montserrat";
    padding: 1rem;
    letter-spacing: 3px;
    text-align: center;

    &:hover {
      color: var(--color-primary-darker);
    }
  }

  h4 {
    font-size: 1.7rem;
    margin-top: 10px;
    top: 10px;
    letter-spacing: 1px;
    color: var(--color-primary-darker);
    font-family: "Montserrat";
    padding: 0rem;
    text-align: center;
    opacity: 0.7;
  }

  p {
    align-self: center;
    justify-self: center;
    width: 100%;
    text-align: justify;
    font-size: 2rem;
    font-family: "Montserrat";
    color: black;
    padding: 2rem;
  }

  @media only screen and (max-width: 968px) {
    display: none;
    opacity: 0;
  }
`;

export const DescriptionMobile = styled.div`
  display: none;

  @media only screen and (max-width: 968px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 2rem 0rem;

    p {
      align-self: center;
      justify-self: center;
      width: 100%;
      text-align: justify;
      font-size: 2rem;
      padding: 2rem;
    }

    h4,
    h5 {
      text-align: center;
      text-transform: uppercase;
      padding: 1rem;
    }

    h5 {
      font-size: 2.5rem;
      color: var(--color-primary);
      letter-spacing: 3px;
    }

    h4 {
      font-size: 1.7rem;
      letter-spacing: 1px;
      color: var(--color-primary-darker);
      opacity: 0.7;
    }
  }
`;
