import { Fragment } from "react";
import Contact from "../contact/contact";
import { Link } from "react-router-dom";
import {
  Header,
  CourseContainer,
  CourseContent,
  CoursesDesktopTitle,
} from "./home.styles";
import Description from "../description/description";
import Courses from "../courses/courses";

function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <Header>
        <img
          className="toda--img--top"
          type="image/pnj"
          src="/logoprincipal.png"
          alt="toda-cidada-logo"
        />
      </Header>

      <Description />
      <Courses />
      <Contact />
    </Fragment>
  );
}

export default Home;
