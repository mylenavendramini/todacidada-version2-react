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

      <section id="nossoscursos">
        <CoursesDesktopTitle>
          <h5>NOSSOS CURSOS</h5>
          <h5>Sobrecarga Feminina no Contexto Doméstico</h5>
        </CoursesDesktopTitle>
        <CourseContainer>
          <CourseContent>
            <p>
              Você já percebeu que nós, mulheres, andamos muito cansadas?
              Estamos pedindo socorro de tão exaustas! E muitas vezes esse
              cansaço vem a partir das sobrecargas que recebemos pelo fato de
              ser mulher.
            </p>
            <br />
            <p>
              E quando falamos do contexto doméstico, existem atividades
              invisíveis que podem estar sobrecarregando as mulheres ainda mais
              e que tem relação com essa estrutura social onde estamos
              inseridas. Mesmo naquele contexto doméstico onde dividimos as
              atividades da casa de maneira igualitária, existem sobrecargas
              invisíveis. Assim, o desempenho dessas tarefas contribui para o
              sentimento de sobrecarga das mulheres e sentimentos associados.
              Reconhecendo esse cenário, criamos essa imersão como espaço para
              expor, debater e identificar estruturas sociais que influenciam o
              processo de sobrecarga feminina e que impactam a nossa saúde
              mental, principalmente nesse contexto doméstico.
            </p>
            <br />
            <p>
              A “Imersão: Sobrecarga Feminina no Contexto Doméstico” terá
              conteúdos reflexívos através de aulas gravadas, atividades
              interativas, rodas interativas, conteúdos bônus e principalmente
              uma comunidade de mulheres incríveis!
              <br />
              <br />
              <Link
                onClick={scrollToTop}
                className="btn btn-test"
                data-tab="1"
                to="/cargamental"
              >
                Saiba mais
              </Link>
            </p>
          </CourseContent>
        </CourseContainer>
      </section>
      <Contact />
    </Fragment>
  );
}

export default Home;
