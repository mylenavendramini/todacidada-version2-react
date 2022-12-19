import styled from "styled-components";
import img from "./megafone.png";

export const CourseContainer = styled.div`
  margin: auto 2rem;
  position: relative;

  @media only screen and (max-width: 800px) {
    margin: 2rem;
  }

  &:before {
    content: "";
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 40%;
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

  h5 {
    text-transform: uppercase;
    color: var(--color-primary);
    font-size: 2.25rem;
    letter-spacing: 3px;
    text-align: center;
    padding: 2rem;
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
    color: #d83c23;
    font-size: 2.5rem;
    letter-spacing: 3px;
    text-align: center;
    padding: 2rem;
  }

  &:hover {
    color: var(--color-primary-darker);
  }
`;
