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
            <h5>Advocacia Feminista</h5>
            <p>
              Gostaria de entender o Direito pela perspectiva do feminismo?
              Acredita que o judiciário brasileiro precisa ser mais
              representativo? Quer ter um olhar mais crítico sobre o ordenamento
              e as questões de gênero? Já se indignou com decisões que pareceram
              ser definidas pelo patriarcado, mais do que pelo ordenamento
              jurídico?
            </p>
            <br />
            <p>Chegou a hora de aprender tudo isso! Esse curso é para você!</p>
            <br />
            <p>
              O curso reúne profissionais do direito de diversas áreas para
              tratar de temas que atravessam questões de gênero, buscando
              proporcionar um olhar crítico sobre o ordenamento.{" "}
            </p>
            <br />
            <p>
              Assim, buscamos compreender, por meio de discussões e debates, em
              que medida as questões de gênero e as consequentes discriminações
              moldam a forma como as leis são feitas e interpretadas, as
              decisões judiciais e a atuação das autoridades (tais como a
              polícia, o ministério público e o judiciário), e como isso impacta
              diretamente a vida de todas as mulheres.
            </p>
            <br />
            <p>
              Analisamos questões que dizem respeito a gênero no ordenamento
              jurídico brasileiro, tais como: a lei da alienação parental, a
              criminalização da homotransfobia, inconstitucionalidade da tese da
              legítima defesa da honra, como a questão de gênero opera nas
              relações de trabalho, adoção e perda do poder familiar e tantos
              outros temas relevantes.
            </p>
            <br />
            <p>
              O curso, ministrado por professoras renomadas em suas areas e
              pesquisadoras de instituições tão relevantes quanto Harvard e UFPR
              visa tornar a prática do direito mais próxima às demandas de
              justiça de gênero, ao mesmo tempo em que propõe um olhar crítico
              ao ordenamento jurídico brasileiro na perspectiva feminista,
              apresentando soluções e caminhos práticos para operadores do
              Direito que busquem atuar em suas respectivas áreas para a
              construção de um mundo mais igualitário.
            </p>
            <p>
              Por isso, seja você profissional ou estudante de direito, ou se
              somente se interessar pelos temas de Gênero e Direito, vai
              aproveitar este curso.
            </p>
            <br />
            <p>
              O curso “Por uma Advocacia Feminista” foi idealizado e
              desenvolvido pela Toda Cidadã com colaboração da advogada,
              professora, coordenadora (Curso de Direito da FAG - Toledo) e
              voluntária Camila Ricci e conduzido por diversas professoras
              importantes da área!
            </p>
            <br />
            <p>
              Clique no botão abaixo para conhecer um pouco do conteúdo
              disponível. Estamos muito felizes em iniciar essa jornada com
              você!
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
              Mesmo naquele contexto doméstico onde dividimos as atividades da
              casa de maneira igualitária, existem sobrecargas invisíveis: quem
              delega as tarefas? Quem pensa na lista do mercado? Quem busca o
              cuidado emocional do/a/e parceiro/a/e?
            </p>
            <br />
            <p>
              Isso sem contar os casos em que a execução das tarefas não é
              dividida: onde a mulher é quem cuida integralmente da casa, do/a/e
              parceiro/a/e e de filhos/as/es.
            </p>
            <br />
            <p>
              Reconhecendo esse cenário, criamos essa imersão como espaço para
              expor, debater e identificar estruturas sociais que influenciam o
              processo de sobrecarga feminina e que impactam a nossa saúde
              mental, principalmente nesse contexto doméstico.
            </p>
            <br />
            <p>
              O objetivo do curso é que, a partir da reflexão conjunta e da
              criação de um grupo de confiança, mulheres sintam-se seguras para
              repensar a forma como se relacionam e dedicam e dividem o tempo em
              seu dia a dia. Assim, visamos facilitar recursos para que as
              mulheres possam promover mudanças em suas vidas.
            </p>
            <br />
            <p>
              A “Imersão: Sobrecarga Feminina no Contexto Doméstico” tem
              conteúdos reflexivos através de aulas gravadas, atividades
              interativas, conteúdos bônus e principalmente uma comunidade de
              mulheres incríveis! Esse trabalho lindo foi idealizado e
              desenvolvido pela Toda Cidadã e é conduzido pela fundadora da Toda
              Cidadã, Gabriela Toso (@gabrielatoso), a psicologa Maria Alice
              Bertho (@marialicebertho) e a psicologa Sthéphani Pinho
              (@psistephanipinho).
            </p>
            <br />
            <p>
              Estamos muito ansiosas de iniciar essa jornada com você!
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
            <h5>Guia Prático</h5>
            <p>
              Sabe a dúvida que antecede o vestibular, sobre qual curso fazer?
              Sobre se você consegue ou não ter a profissão que gostaria de
              almejar? Sabe os momentos em que batem inseguranças sobre sua
              autoestima, sobre ser ou não digna de receber amor e afeto? Sabe
              quando alguns assuntos - como educação sexual - são tratados como
              tabu, deixando meninas sem qualquer ideia de como agir frente a
              impulsos naturais da idade, e mesmo sem saber quais os limites das
              ações alheias sobre seus corpos?
            </p>
            <br />
            <p>
              Foi pensando nesse cenário, e nas dificuldades que são normais da
              adolescência - mas que não deveriam ser, fosse esse um mundo mais
              justo - que fizemos esse Guia Prático para Sobreviver a
              Adolescência.
            </p>
            <br />
            <p>
              A ideia do Guia é, por vídeos curtos e gratuitos, disponíveis no
              YouTube, fornecer pílulas de conhecimento, que podem fornecer
              algumas respostas para as dúvidas mais comuns de meninas na
              adolescência.
            </p>
            <br />
            <p>
              Todas as aulas foram elaboradas por especialistas nos temas, e são
              de curta duração.
            </p>
            <br />

            <p>
              Esperamos que o curso te ajude a navegar essa época tão delicada!
              Vai lá no{" "}
              <font color="#d83c23">
                <a
                  href="https://www.youtube.com/@todacidada"
                  target="_blank"
                  rel="noreferrer"
                >
                  nosso canal
                </a>
              </font>{" "}
              pra conferir!
            </p>
          </CourseContent>
        </CourseContainer>
      </section>
    </Fragment>
  );
}

export default Courses;
