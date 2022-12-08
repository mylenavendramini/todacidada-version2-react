import { Fragment } from "react";
import {
  CoursesDesktopTitle,
  CourseContainer,
  CourseContent,
} from "./courses.styles";
import { Link } from "react-router-dom";

function Courses() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <section id="nossoscursos">
        <CoursesDesktopTitle>
          <h5>NOSSOS CURSOS</h5>
        </CoursesDesktopTitle>
        <CourseContainer>
          <CourseContent>
            <h5>Sobrecarga Feminina no Contexto Doméstico</h5>
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
                to="/cargamental"
                onClick={scrollToTop}
                className="btn btn-test"
                data-tab="1"
              >
                Saiba mais
              </Link>
            </p>
          </CourseContent>
          <CourseContent>
            <h5>Advocacia Feminista</h5>
            <p>
              Gostaria de entender a advocacia pela perspectiva do feminismo?
              Acredita que o judiciário brasileiro precisa ser mais
              representativo? Quer ter um olhar mais crítico sobre o ordenamento
              e as questões de gênero? Gostaria de poder debater e construir o
              conhecimento com outras mulheres?
            </p>
            <br />
            <p>Chegou a hora de aprender tudo isso! Esse curso é para você!</p>
            <br />
            <p>
              O curso reúne profissionais do direito de diversas áreas para
              tratar de temas que atravessam questões de gênero, buscando
              proporcionar um olhar crítico sobre o ordenamento. Assim buscamos
              compreender por meio de discussões e debates, em que medida as
              questões de gênero e as consequentes discriminações moldam a forma
              como as leis são feitas e interpretadas, as decisões judiciais e a
              atuação das autoridades (tais como a polícia, o ministério público
              e o judiciário), e como isso impacta diretamente a vida de todas
              as mulheres. Analisamos questões que dizem respeito a gênero no
              ordenamento jurídico brasileiro, tais como: a lei da alienação
              parental, a criminalização da homotransfobia,
              inconstitucionalidade da tese da legítima defesa da honra, como a
              questão de gênero opera nas relações de trabalho, adoção e perda
              do poder familiar e tantos outros temas relevantes. Visa tornar a
              prática do direito mais próxima às demandas de justiça de gênero,
              ao mesmo tempo em que propõe um olhar crítico ao ordenamento
              jurídico brasileiro na perspectiva feminista, apresentando
              soluções e caminhos práticos para operadores do Direito que
              busquem atuar em suas respectivas áreas para a construção de um
              mundo mais igualitário. Por isso, você profissional e estudante de
              direito, ou pessoas que se interessem pelo tema de Gênero e
              Direito, vão aproveitar este curso.
            </p>
            <br />
            <p>
              O curso foi planejado pela advogada, professora, coordenadora
              (Curso de Direito da FAG - Toledo) e voluntária Camila Ricci, em
              conjunto com a coordenação pedagógica da Toda Cidadã.
              <br />
              <br />
              <Link
                to="/advocaciafeminista"
                onClick={scrollToTop}
                className="btn btn-test"
                data-tab="1"
              >
                Saiba mais
              </Link>
            </p>
          </CourseContent>
        </CourseContainer>
      </section>
    </Fragment>
  );
}

export default Courses;
