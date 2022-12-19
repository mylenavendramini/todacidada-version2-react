import { Fragment } from "react";
import { Header } from "./cargamental.styles";

function CargaMental() {
  function tabbedComponent(e) {
    const tabsContent = document.querySelectorAll(".courses__content");
    const tabs = document.querySelectorAll(".courses__tab");
    const clicked = e.target.closest(".courses__tab");
    if (!clicked) return;
    tabs.forEach((t) => t.classList.remove("courses__tab--active"));
    tabsContent.forEach((c) => c.classList.remove("courses__content--active"));
    clicked.classList.add("courses__tab--active");
    document
      .querySelector(`.courses__content--${clicked.dataset.tab}`)
      .classList.add("courses__content--active");
  }

  return (
    <Fragment>
      <Header>
        <img
          type="image/pnj"
          src="/cargamental-banner.png"
          alt="capa-cargamental"
        />
      </Header>

      <section>
        <div className="course-test">
          <div className="course__feature-test">
            <h4>
              <font size="5">
                <i>Mulher</i>, me responde essas perguntas:
              </font>
            </h4>
            <p>
              Você se sente constantemente <i>cansada</i> com a rotina de casa?
              &#10004; <br />
              Você percebe que se VOCÊ não planejar e dar direcionamentos claros
              sobre as tarefas domésticas na sua casa, elas não serão feitas?
              &#10004; <br />
              Você sente que não consegue ter{" "}
              <i>tempo suficiente de qualidade</i> para lazer/descanso? &#10004;{" "}
              <br />
              Você se sente sobrecarregada na maior parte do tempo? &#10004;{" "}
              <br />
              Você se sente <i>culpada</i> quando faz pausas nas atividades
              domésticas porque está <i>sobrecarregada</i> e precisa descansar?
              &#10004;
            </p>
            <h4>
              <font size="5">
                Se você respondeu “sim” para ao menos uma dessas perguntas, está
                imersão é para você! <br /> Chegou a hora de entender melhor o
                porquê de todos esses sentimentos!
              </font>
            </h4>
          </div>
        </div>
      </section>

      <section id="oqueesperar">
        <div className="course-test">
          <div className="course__feature-test">
            <h5>O que esperar do curso?</h5>
            <p>
              A Imersão da sobrecarga feminina no contexto doméstico acontecerá
              através de aulas assíncronas e rodas de interação com intuito de
              refletir sobre a carga mental e saúde mental das mulheres.
              <br />
              <br />
              Serão disponibilizadas videoaulas ministradas por psicólogas
              pesquisadoras especialistas da área. Além disso, teremos dois
              encontros para interação das alunas com a fundadora da Toda
              Cidadã, Gabriela Toso, sendo este um espaço para que as
              participantes possam{" "}
              <font color="#d83c23">
                interagir, conversar, debater, questionar e compartilhar
              </font>{" "}
              sobre suas experiências, angústias e ideias para mudanças.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="course-test">
          <div className="course__feature-test">
            <h5>Pra quem é o curso?</h5>
            <p>
              Mulheres e/ou mães que dividem o ambiente doméstico com homens e
              mulheres interessadas em entender mais sobre a divisão sexual do
              trabalho e seus efeitos sobre elas.
            </p>
            <br />
          </div>{" "}
          <br />
        </div>
      </section>

      <section id="modules">
        <div className="modules-test">
          <div onClick={tabbedComponent} className="courses__tab-container">
            <button
              className="btn btn-test courses__tab courses__tab--1 courses__tab--active"
              data-tab="0"
            >
              Módulo 0
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--1 courses__tab"
              data-tab="1"
            >
              Módulo 1
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--2"
              data-tab="2"
            >
              Módulo 2
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--3"
              data-tab="3"
            >
              Módulo 3
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--4"
              data-tab="4"
            >
              Módulo 4
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--5"
              data-tab="5"
            >
              Módulo 5
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--6"
              data-tab="6"
            >
              Módulo bônus
            </button>
          </div>
          <div className="courses__content courses__content--active courses__content--0">
            <div>
              <h5>A Comunidade da Imersão</h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Isabela Pontes
                </font>
              </p>
              <p>
                <br />
                Os problemas que levam mulheres a estarem sobrecarregadas são
                múltiplos e complexos. Entendemos que a melhor forma de lidar
                com problemas complexos é pensando em soluções em conjunto: de
                forma a trocar com outras mulheres, num espaço seguro, que
                proporcione reflexão e tomadas de ação.
                <br />
                Por isso, nesse módulo inicial, falaremos sobre como se dará a
                comunidade das alunas do curso, e como podemos criar juntas uma
                rede de apoio!
              </p>
            </div>
          </div>
          <div className="courses__content  courses__content--1">
            <div>
              <h5>Reconhecendo a história</h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Maria Bertho (
                  <a
                    href="https://www.instagram.com/marialicebertho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @marialicebertho
                  </a>
                  )
                </font>
              </p>
              <p>
                <br />
                - Quais são os aspectos da nossa história e da nossa sociedade
                que nos levaram a viver situações desiguais em relação a homens
                e mulheres, especialmente aquelas relacionadas à carga mental.
                <br />
                - A situação atual do Brasil: o que os dados nos dizem?
                <br />
                - O que é a divisão sexual do trabalho?
                <br />- Qual a história por trás dessa divisão sexual do
                trabalho e estrutura familiar?
              </p>
            </div>
          </div>
          <div className="courses__content courses__content--2">
            <div>
              <h5>Trabalho familiar é apenas o que é visto?</h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Maria Bertho (
                  <a
                    href="https://www.instagram.com/marialicebertho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @marialicebertho
                  </a>
                  )
                </font>
              </p>
              <p>
                <br />
                - O que é a carga mental? <br />
                - Qual a relação entre a carga mental e o gênero? <br />- O que
                acontece com a carga mental depois que os filhos chegam? <br />
                - Como saber com quem está a carga mental? <br />
              </p>
            </div>
          </div>

          <div className="courses__content courses__content--3">
            <div>
              <h5>
                O impacto da sobrecarga mental para a saúde mental das mulheres
              </h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Maria Bertho (
                  <a
                    href="https://www.instagram.com/marialicebertho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @marialicebertho
                  </a>
                  )
                </font>
              </p>
              <p>
                <br />- Como a carga mental pode prejudicar a vida das mulheres?{" "}
                <br />
                - A cabeça que não para: como a saúde mental das mulheres é
                prejudicada pela carga mental? <br />
              </p>
            </div>
          </div>
          <div className="courses__content courses__content--4">
            <div>
              <h5>E a estrutura racista?</h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Stephani (
                  <a
                    href="https://www.instagram.com/psistephanipinho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @psistephanipinho
                  </a>
                  )
                </font>
              </p>
              <p>
                <br />
                - A história do trabalho das mulheres pretas e o trabalho do
                cuidado: O que precisamos compreender? <br />
                - Sexismo e racismo: como as mulheres pretas experienciam a
                sobrecarga mental?
                <br />
                - Saúde mental e racismo: quais os debates necessários? <br />
              </p>{" "}
            </div>
          </div>
          <div className="courses__content courses__content--5">
            <div>
              <h5>Encontros online</h5>
              <p>
                <br />
                Ao final do curso teremos encontros online com o intuito de
                facilitar a conexão entre as alunas. Nossa proposta é que todas
                as participantes atuem como uma rede coletiva.
                <br /> <br />
                Contaremos com a participação da Gabi Toso para conduzir a
                conversa entre as alunas e as psicólogas Maria Bertho e Stephani
                Pinho, especialistas em carga mental.
              </p>
            </div>
          </div>
          <div className="courses__content courses__content--6">
            <div>
              <p>
                Roda de conversa sobre o livro Saúde Mental, Gênero e
                Dispositivos: Cultura e Processos de Subjetivação, de Valeska
                Zanello.
              </p>
            </div>
          </div>
        </div>

        <div className="courses--mobile">
          <div className="operations ">
            <br /> <br />
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Módulo 0
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>A Comunidade da Imersão</h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Isabela Pontes
                </font>
              </p>

              <p>
                <br />
                Os problemas que levam mulheres a estarem sobrecarregadas são
                múltiplos e complexos. Entendemos que a melhor forma de lidar
                com problemas complexos é pensando em soluções em conjunto: de
                forma a trocar com outras mulheres, num espaço seguro, que
                proporcione reflexão e tomadas de ação.
                <br />
                Por isso, nesse módulo inicial, falaremos sobre como se dará a
                comunidade das alunas do curso, e como podemos criar juntas uma
                rede de apoio!
              </p>
            </div>
          </div>
          <br /> <br />
          <div className="operations operations--dark">
            <br /> <br />
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Módulo 1
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>Reconhecendo a história</h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Maria Bertho (
                  <a
                    href="https://www.instagram.com/marialicebertho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @marialicebertho
                  </a>
                  )
                </font>
              </p>

              <p>
                <br />
                - Quais são os aspectos da nossa história e da nossa sociedade
                que nos levaram a viver situações desiguais em relação a homens
                e mulheres, especialmente aquelas relacionadas à carga mental.
                <br />
                - A situação atual do Brasil: o que os dados nos dizem?
                <br />
                - O que é a divisão sexual do trabalho?
                <br />- Qual a história por trás dessa divisão sexual do
                trabalho e estrutura familiar?
              </p>
            </div>
          </div>
          <br /> <br />
          <div className="operations">
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Módulo 2
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>Trabalho familiar é apenas o que é visto?</h5>

              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Maria Bertho (
                  <a
                    href="https://www.instagram.com/marialicebertho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @marialicebertho
                  </a>
                  )
                </font>
              </p>
              <p>
                <br />
                - O que é a carga mental? <br />
                - Qual a relação entre a carga mental e o gênero? <br />- O que
                acontece com a carga mental depois que os filhos chegam? <br />
                - Como saber com quem está a carga mental? <br />
              </p>
            </div>
          </div>
          <br /> <br />
          <div className="operations operations--dark">
            <br /> <br />
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Módulo 3
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>
                O impacto da sobrecarga mental para a saúde mental das mulheres
              </h5>
              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Maria Bertho (
                  <a
                    href="https://www.instagram.com/marialicebertho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @marialicebertho
                  </a>
                  )
                </font>
              </p>
              <p>
                <br />- Como a carga mental pode prejudicar a vida das mulheres?{" "}
                <br />
                - A cabeça que não para: como a saúde mental das mulheres é
                prejudicada pela carga mental? <br />
              </p>
            </div>
          </div>
          <br /> <br />
          <div className="operations ">
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Módulo 4
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>E a estrutura racista?</h5>

              <p>
                <font color="#d83c23">
                  <b>Facilitadora:</b> Stephani (
                  <a
                    href="https://www.instagram.com/psistephanipinho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @psistephanipinho
                  </a>
                  )
                </font>
              </p>

              <p>
                <br />
                - A história do trabalho das mulheres pretas e o trabalho do
                cuidado: O que precisamos compreender? <br />
                - Sexismo e racismo: como as mulheres pretas experienciam a
                sobrecarga mental?
                <br />
                - Saúde mental e racismo: quais os debates necessários? <br />
              </p>
            </div>
          </div>
          <br /> <br />
          <div className="operations operations--dark">
            <br /> <br />
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Módulo 5
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>Encontros online</h5>
              <p>
                <br />
                Ao final do curso teremos encontros online com o intuito de
                facilitar a conexão entre as alunas. Nossa proposta é que todas
                as participantes atuem como uma rede coletiva.
                <br /> <br />
                Contaremos com a participação da Gabi Toso para conduzir a
                conversa entre as alunas e as psicólogas Maria Bertho e Stephani
                Pinho, especialistas em carga mental.
                <br /> <br />
              </p>
            </div>
          </div>
          <br /> <br />
          <div className="operations">
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Módulo bônus
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <p>
                Roda de conversa sobre o livro Saúde Mental, Gênero e
                Dispositivos: Cultura e Processos de Subjetivação, de Valeska
                Zanello.
              </p>
            </div>
          </div>
          <br /> <br />
        </div>
      </section>

      <section>
        <div className="course-test">
          <div className="course__feature-test">
            <h5>Como vou acessar o curso?</h5>
            <p>
              O conteúdo é 100% digital. O acesso será enviado ao seu e-mail
              assim que o pagamento for confirmado.
            </p>
            <p>
              Após a inscrição no curso, um grupo no WhatsApp será criado para
              combinar as datas das rodas de conversa síncronas com Gabriela
              Toso.
            </p>
            <h5>Garantia de 7 dias </h5>
            <p>
              Você tem sete dias para conhecer o conteúdo e pedir o seu
              reembolso, se acreditar que não é para você.{" "}
            </p>
            <h5>Certificado</h5>
            <p>Ao final do curso a plataforma irá gerar seu certificado. </p>
          </div>
        </div>
      </section>

      <section id="quemplanejou">
        <div className="course-test">
          <div className="course__feature-test">
            <h5>Quem planejou esse curso? </h5>
            <h4>Gabriela Toso</h4>
            <p>
              Gabriela Toso é formada em Direito pela UEM (Universidade Estadual
              de Maringá) e, atualmente, cursa especialização em Comunicação
              Pública pela USP (Universidade de São Paulo). Já atuou em
              organizações internacionais e realizou intercâmbio acadêmico na
              Universidade de Pavia na Itália. Foi conselheira do CONJUVE
              (Conselho Nacional de Juventude do Brasil) e participou de
              pesquisas e grupos de estudos sobre Direito da Mulher e da
              Infância e Juventude. Gabriela é fundadora e presidente da Toda
              Cidadã.
            </p>
            <h4>
              Maria Alice Centanin Bertho (
              <a
                href="https://www.instagram.com/marialicebertho/"
                target="_blank"
                rel="noreferrer"
              >
                @marialicebertho
              </a>
              )
            </h4>
            <p>
              Maria Alice Centanin Bertho é Psicóloga Clínica e Mestre em
              Psicologia (Comportamento Social e Processos Cognitivos) pela
              UFSCar (Universidade Federal de São Carlos). Desenvolveu seu
              mestrado no Laboratório de Análise e Prevenção da Violência
              (LAPREV), com ênfase de pesquisa sobre as desigualdades de gênero
              no contexto familiar. Paralelamente também é membra da Toda
              Cidadã.
            </p>
            <h4>
              Stéphani Pinho (
              <a
                href="https://www.instagram.com/psistephanipinho/"
                target="_blank"
                rel="noreferrer"
              >
                @psistephanipinho
              </a>
              ){" "}
            </h4>
            <p>
              Stéphani Pinho é Psicóloga Clínica e Psicanalista. Tem formação em
              Saúde Mental e Manejo Clínico para o Atendimento à Mulheres em
              Situação de Violência e pós-graduação em Teoria Psicanalítica.
              Atualmente é pós-graduanda em Docência do Ensino Superior e
              paralelamente atua como psicóloga voluntária no Projeto Pro Preto
              Psi. Além disso, é organizadora do Clube de Leitura Feminista,
              mediadora do Grupo de Acolhimento Psicológico à Mulheres em
              Condição de Abortamentos e mediadora do Grupo de Estudos em Teoria
              Psicanalítica.
            </p>
          </div>
        </div>
      </section>

      <section id="subscribe">
        <div className="course-test">
          <div className="course__feature-test">
            <h5>
              <a
                className="btn--text--subscribe"
                target="_blank"
                rel="noreferrer"
                href="https://go.hotmart.com/W72614070V?dp=1"
              >
                INSCREVA-SE AGORA
              </a>
            </h5>
          </div>
        </div>
      </section>

      <section id="quantoinvestir">
        <div className="course-test">
          <div className="course__feature-test">
            <h5>Quanto você vai investir?</h5>
            <p>
              Se fosse para colocar na ponta do lápis o valor por hora de cada
              profissional do curso, seria:
            </p>
          </div>
        </div>
        <div className="price-test">
          <div className="description__feature-test">
            <p>
              Aulas (2h) com a psicóloga Maria Bertho, Mestre em Psicologia com
              ênfase de pesquisa sobre as desigualdades de gênero no contexto
              familiar
            </p>
            <p>
              Aulas (2h) com a psicóloga Stephani Pinho, Psicanalista com
              formação em Saúde Mental
            </p>
            <p>
              Roda de conversa com participação da Gabi Toso, fundadora e
              presidente da Toda Cidadã
            </p>
          </div>
          <div className="description__feature-test">
            <h4>R$259,00</h4>
            <br />
            <h4>R$259,00</h4>
            <h4>R$259,00</h4>
            <br />
            <h5>Total: R$777,00</h5>
          </div>
        </div>

        <div className="mobile">
          <div className="price-test-mobile">
            <p>
              Aulas (2h) com a psicóloga Maria Bertho, Mestre em Psicologia com
              ênfase de pesquisa sobre as desigualdades de gênero no contexto
              familiar.....<font color="d#83c23">R$259,00</font>
              <br />
              Aulas (2h) com a psicóloga Stephani Pinho, Psicanalista com
              formação em Saúde Mental.....<font color="d#83c23">R$259,00</font>
              <br />
              Roda de conversa com participação da Gabi Toso, fundadora e
              presidente da Toda Cidadã.....
              <font color="d#83c23">R$259,00</font>
              <br /> <br />
              <font color="d#83c23">Total: R$777,00</font>
            </p>
          </div>
        </div>

        <div className="course-test">
          <div className="course__feature-test">
            <p>
              Contudo, o objetivo da Toda Cidadã é tornar nossos cursos
              acessíveis para que o maior número de mulheres participe! Por
              isso, nosso trabalho é voluntário sem visar o lucro.{" "}
              <font color="#d83c23">
                Todo dinheiro arrecadado é direcionado para financiamento de
                bolsas dos nossos cursos e manutenção da nossa operação.{" "}
              </font>
              Por isso, o valor do curso já seria diminuído para somente R$
              197,00.
            </p>
            <p>
              No entanto, sabendo das dificuldades de um ano atípico, com
              problemas políticos que nos deixam ainda mais cansadas, resolvemos
              fazer uma{" "}
              <font color="#d83c23">
                <strong>promoção de natal </strong>
              </font>
              (com vagas limitadas):
            </p>
            <p>O curso sairá de R$ 197,00 por</p>
            <h5>
              <font size="7">
                12 parcelas de R$ 12,50* ou R$ 147,00 à vista!
              </font>
            </h5>

            {/*<h4>
              Bolsas sociais: mães solos, mulheres pretas, pardas e indígenas -
              preencher formulário{" "}
                  </h4>*/}
            <p>* Condições de parcelamento no link de inscrição.</p>
          </div>
        </div>
      </section>

      <section id="subscribe">
        <div className="course-test">
          <div className="course__feature-test">
            <h5>
              <a
                className="btn--text--subscribe"
                target="_blank"
                rel="noreferrer"
                href="https://go.hotmart.com/W72614070V?dp=1"
              >
                INSCREVA-SE AGORA
              </a>
            </h5>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default CargaMental;
