import styled from "styled-components";
import img from "./megafone.png";

export const Header = styled.div`
  text-align: center;
  margin: 9rem auto;

  img {
    width: 50%;

    @media only screen and (max-width: 968px) {
      width: 100%;
      padding: 1rem;
    }
  }
`;

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

export const CourseContainer = styled.div`
  margin: auto 2rem;
  position: relative;

  &:before {
    content: "";
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 30%;
    background-position: center;
    content: "";
    opacity: 0.1;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const CourseContent = styled.div`
  /* margin-left: 25rem; */
  position: relative;
  text-align: justify;
  font-size: 2rem;
  padding: 2rem;
  font-weight: bold;

  @media only screen and (max-width: 968px) {
    padding: 0rem;
    font-size: 1.8rem;
  }
`;

export const CoursesDesktopTitle = styled.div`
  justify-content: center;

  h5 {
    text-transform: uppercase;
    color: black;
    font-size: 2.5rem;
    letter-spacing: 3px;
    text-align: center;
    padding: 2rem;
  }

  h5 + h5 {
    color: var(--color-primary);
    font-size: 2.25rem;
  }

  &:hover {
    color: var(--color-primary-darker);
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
