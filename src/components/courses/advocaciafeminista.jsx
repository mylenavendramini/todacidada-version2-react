import { Fragment } from "react";
import { Header } from "./cargamental.styles";

function AdvocaciaFeminista() {
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
          src="/capa-advocaciafeminista.png"
          alt="capa-advocaciafeminista"
        />
      </Header>

      <section>
        <div className="course-test">
          <div className="course__feature-test">
            <p>
              Gostaria de entender a advocacia pela perspectiva do feminismo?{" "}
              <br />
              Acredita que o judiciário brasileiro precisa ser mais
              representativo?
              <br />
              Quer ter um olhar mais crítico sobre o ordenamento e as questões
              de gênero?
              <br />
              Gostaria de poder debater e construir o conhecimento com outras
              mulheres?
            </p>
            <h4>
              <font size="5">
                Chegou a hora de aprender tudo isso! <br /> Esse curso é para
                você!
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
              O curso vai reunir profissionais do direito de diversas áreas para
              tratar de temas que atravessam questões de gênero, buscando
              proporcionar um olhar crítico sobre o ordenamento.
              <br />
              <br />
              Através do olhar crítico sobre o ordenamento buscar compreender,
              por meio de discussões e debates, em que medida as questões de
              gênero e as consequentes discriminações moldam a forma como as
              leis são feitas e interpretadas, as decisões judiciais e a atuação
              das autoridades (tais como a polícia, o ministério público e o
              judiciário), e como isso impacta diretamente a vida de todas as
              mulheres.
              <br />
              <br />
              Situações que dizem respeito a gênero, como lei da alienação
              parental: analisaremos questões que dizem respeito a gênero no
              ordenamento jurídico brasileiro, como a lei da alienação parental,
              a criminalização da homotransfobia, inconstitucionalidade da tese
              da legítima defesa da honra, como a questão de gênero opera nas
              relações de trabalho, adoção e perda do poder familiar e tantos
              outros temas relevantes.
              <br />
              <br />O curso visa tornar a prática do direito mais próxima às
              demandas de justiça de gênero, ao mesmo tempo em que propõe um
              olhar crítico ao ordenamento jurídico brasileiro na perspectiva
              feminista, apresentando soluções e caminhos práticos para
              operadores do Direito que busquem atuar em suas respectivas áreas
              para a construção de um mundo mais igualitário.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="course-test">
          <div className="course__feature-test">
            <h5>Pra quem é o curso?</h5>
            <p>
              Para quem se incomoda com as desigualdades de gênero no ambiente
              jurídico.
              <br />
              Para quem gostaria de entender mais sobre como ter uma atuação
              feminista dentro do Direito.
              <br />
              Para quem gostaria de respaldar o conhecimento para que suas teses
              jurídicas tenham um olhar para as questões de gênero.
              <br />
              Para quem quer entender quais ferramentas o Direito usa para
              oprimir mulheres.
              <br />
              Para quem quer entender como superar essas ferramentas dentro da
              atuação da advocacia, nas áreas de Penal e Processo Penal,
              Família, Infância e Juventude e Trabalho.
            </p>
            <br />
            <br />
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
                href="https://go.hotmart.com/Q68651321L?dp=1"
              >
                INSCREVA-SE AGORA
              </a>
            </h5>
          </div>
        </div>
        <div className="white-space"></div>
      </section>

      <section id="modules">
        <div className="modules-test">
          <div onClick={tabbedComponent} className="courses__tab-container">
            <button
              className="btn btn-test courses__tab courses__tab--1 courses__tab--active"
              data-tab="1"
            >
              Aula 1
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--2"
              data-tab="2"
            >
              Aula 2
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--3"
              data-tab="3"
            >
              Aula 3
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--4"
              data-tab="4"
            >
              Aula 4
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--5"
              data-tab="5"
            >
              Aula 5
            </button>
            <button
              className="btn btn-test courses__tab courses__tab--6"
              data-tab="6"
            >
              Aula 6
            </button>
          </div>
          <div className="courses__content courses__content--active courses__content--1">
            <div>
              <h5>
                Protocolo para Julgamento com perspectiva de gênero (Introdução)
              </h5>
              <p>
                <font>
                  <b>Professora:</b> Fernanda Pacheco Amorim
                </font>
              </p>
              <p>
                <font>
                  Advogada Criminalista. Doutoranda em Direito na Universidade
                  Federal do Paraná. Mestra em Ciências Jurídicas pela
                  Universidade do Vale do Itajaí. Pós-Graduada em Direito Penal
                  e Processo Penal pela Academia Brasileira de Direito
                  Constitucional. Membra da Comissão da Mulher e da Comissão de
                  Direito Digital do Instituto dos Advogados Brasileiros.
                  Graduada em Direito pela Universidade do Vale do Itajaí
                  (2015). Autora dos livros “Respeita as Mina: inteligência
                  artificial e violência contra a mulher” e “Pai, te amo
                  sempre”. Coapresentadora do podcast Mulherão da Porra.
                </font>
              </p>
              <p>
                <br />
                - Protocolo Conselho Nacional de Justiça - Brasil; <br />
                - Protocolo para julgamento com perspectiva de gênero; <br />
                - Estereótipos de gênero e o mito da neutralidade; <br />-
                Teoria Feminista, Feminismos e Movimento Feminista.
              </p>
            </div>
          </div>

          <div className="courses__content courses__content--2">
            <div>
              <h5>Direito Penal e Processo Penal Feminista</h5>
              <p>
                <font>
                  <b>Professora:</b> Thaise Mattar Assad
                </font>
              </p>
              <p>
                {" "}
                <font>
                  {" "}
                  Thaise Mattar Assad é advogada criminalista, mestre em
                  ciências criminais pela PUC-RS, vice-presidente da Associação
                  Paranaense dos Advogados Criminalistas (APACRIMI -
                  ABRACRIM-PR), Conselheira Estadual da OAB/PR e Conselheira do
                  Instituto Brasileiro de Direito Penal Econômico - IBDPE.
                  Também é professora da FAE Centro Universitário.
                </font>{" "}
              </p>
              <p>
                <br /> - A proteção da mulher no Direito Penal Brasileiro;{" "}
                <br />
                - Quem é a MULHER “protegida” pelo Direito Penal? <br />
                - Superação da mulher como posse do homem na economia do Direito
                Penal brasileiro: <br />- Da legítima defesa da honra à
                qualificadora do feminicídio; <br />
                - Palavra da vítima e arquitetura probatória nos crimes
                relacionados a gênero; <br />
                – ADPF 779 e a discussão sobre a inconstitucionalidade da tese
                da “legítima defesa da honra”; <br />
                - Lei Maria da Penha: marco jurídico na proteção penal de
                mulheres nos espaços de violência familiar, doméstica e no
                âmbito das relações de afeto; <br />
                - Alterações no Código Penal e Código de Processo Penal:
                reconhecimento de uma violência doméstica e familiar, novos bens
                jurídicos, novos tipos penais incriminadores, e rechaço a
                benefícios despenalizantes para agressores; <br />
                - Controle dos corpos sexados como femininos: criminalização
                primária do aborto; <br />
                - "Por que uma criminologia feminista para um direito penal que
                persegue, predominantemente, homens?"
                <br />
              </p>
            </div>
          </div>
          <div className="courses__content courses__content--3">
            <div>
              <h5>
                Direito da Infância e da Juventude sobre as lentes do feminismo
              </h5>
              <p>
                <font>
                  <b>Facilitadores:</b> Larissa Alves e Heloise Cella
                </font>
              </p>
              <p>
                <font>
                  Larissa Alves é bacharela em direito e jornalista. Filha
                  adotiva e pesquisadora sobre adoção, é uma das idealizadoras
                  da ADOTIVA (Associação Brasileira de pessoas Adotadas) e
                  coordenadora da página Olhar Adotivo.
                  <br />
                  <br />
                  Heloise Rosin Cella, advogada com ênfase na área de direito
                  das famílias e direito da infância e juventude, pós graduada
                  em direito penal e processual penal pela Universidade Estadual
                  de Londrina (UEL). Bacharela em direito pela Universidade
                  Estadual de Maringá (UEM).
                </font>
              </p>
              <p>
                <br />
                - Perda do poder familiar e argumentos relacionados a
                estereótipo de gênero; <br />
                - Adoção e questões de gênero;
                <br />
                - Atos infracionais e a questão de gênero (crianças filhas de
                adolescentes em cumprimento de medida socioeducativa). <br />
              </p>{" "}
            </div>
          </div>
          <div className="courses__content courses__content--4">
            <div>
              <h5>Constitucionalismo feminista</h5>
              <p>
                <font>
                  <b>Facilitadores:</b> Melina Fachin, Estefânia Barboza e André
                  Demétrio
                </font>
              </p>
              <p>
                <font>
                  Meina Fachin é professora da Faculdade de Direito da
                  Universidade Federal do Paraná. Fez estágio de
                  Pós-doutoramento pela Universidade de Coimbra, no Instituto de
                  Direitos Humanos e Democracia (2019/2020). Doutora em Direito
                  Constitucional, com ênfase em Direitos Humanos, pela
                  Pontifícia Universidade Católica de São Paulo (PUC-SP.)
                  Visiting researcher da Harvard Law School (2011). Mestre em
                  Direitos Humanos pela Pontifícia Universidade Católica de São
                  Paulo (PUC-SP). Bacharel em Direito pela Universidade Federal
                  do Paraná (UFPR). Autora de diversas obras e artigos na seara
                  do Direito Constitucional e dos Direitos Humanos. Membro do
                  Instituto dos Advogados Brasileiros/IAB, do Instituto dos
                  Advogados do Paraná/IAP e da Ordem dos Advogados do Brasil
                  Seção Paraná - OAB/PR. Advogada-sócia do Bureau Fachin
                  Advogados Associados. <br /> <br />
                  Estefânia Barboza é professora da Faculdade de Direito da
                  Universidade Federal do Paraná e do Mestrado em Direito do
                  Centro Universitário Internacional - UNINTER. Doutora e Mestre
                  em Direito pela PUC-PR, com estágio doutoral
                  (doutorado-sanduíche) e bolsa CAPES na Osgoode Hall Law School
                  (York University). Professora Adjunta do Departamento de
                  Direito Público da Universidade Federal do Paraná e do
                  Mestrado em Direito do UNINTER. Foi Professora Convidada da
                  Università degli Studi di Palermo nos anos de 2012, 2013, 2014
                  e 2019. Professora Visitante na Faculdade de Direito de
                  Toronto, em julho de 2016. Professora Visitante no Doutorado
                  de Messina, em junho de 2019. Representante da UFPR na Cátedra
                  de Direitos Humanos da AUGM - Associação de Universidades do
                  Grupo Montevideo.
                  <br /> <br />
                  André Demétrio é doutorando em Direito pela Universidade de
                  Brasília (UnB). Graduando em História pela Universidade do
                  Estado de Santa Catarina (UDESC). É pesquisador do CCONS
                  (Centro de Estudos da Constituição)/ Universidade Federal do
                  Paraná (UFPR).
                </font>
              </p>

              <p>
                <br />
                - Mulher e Poder; <br />
                - Gênero e Constitucionalismo; <br />
                - (Des)igualdade de gênero e noção de cidadania; <br />
                - Democracia e (des)igualdade de gênero; <br />
                - Políticas Públicas e perspectiva de gênero; <br />
                - Poder Judiciário e as mulheres; <br />
                - Devido processo com enfoque de gênero; <br />
                - Direito à educação das mulheres; <br />
                - Trabalhadoras domésticas: o retrato da desigualdade de gênero,
                raça e classe. <br />
              </p>
            </div>
          </div>
          <div className="courses__content courses__content--5">
            <div>
              <h5>Direito das Famílias sobre as lentes do feminismo</h5>
              <p>
                <font>
                  <b>Professora:</b> Daiana Allessi Nicoletti Alves
                </font>
              </p>
              <p>
                <font>
                  Advogada Familiarista. Pesquisadora nas temáticas de gênero,
                  feminismos e representatividade feminina na política.
                  Especialista em Direito Aplicado e em Direito Público e Mestra
                  em Direitos Humanos e Políticas Públicas pela PUC/PR. Membro
                  da Comissão das Mulheres Advogadas e da Comissão de Defesa dos
                  Direitos Humanos da OAB/PR.
                </font>
              </p>
              <p>
                <br />
                - Como as opressões de gênero operam na estrutura familiar: que
                tipo de família é protegida pelo Direito?; <br />
                - Pensão alimentícia, guarda;
                <br />
                - Alienação parental e estereótipos de gênero;
                <br />- Violência Obstétrica
              </p>
            </div>
          </div>
          <div className="courses__content courses__content--6">
            <div>
              <h5>Direito Trabalhista sob as lentes do feminismo</h5>
              <p>
                <font>
                  <b>Professora:</b> Ana Gabriela de Melo Primon
                </font>
              </p>
              <p>
                <font>
                  Graduada pela Faculdade de Direito de Ribeirão Preto da
                  Universidade de São Paulo em 2013. Especialista em Gestão da
                  Diversidade nas Organizações pela PUC-SP. Especialista em
                  Gestão de Pessoas e Compliance Trabalhista pela Fundação
                  Getúlio Vargas. Sócia do Granadeiro Guimarães Advogados, onde
                  atua com processos judiciais estratégicos e é gestora de
                  comunicação. Autora de diversos artigos em matéria de Direito
                  do Trabalho, Compliance Trabalhista e Diversidade no Mercado
                  de Trabalho.
                </font>
              </p>
              <p>
                <br />
                - Como as opressões de gênero operam nas relações de trabalho;
                <br />
                - Por que ainda discutimos sobre como conciliar maternidade e
                carreira?
                <br />
                - Assédio sexual e assédio moral como violências relacionadas ao
                gênero.
                <br /> <br />
              </p>
            </div>
          </div>
        </div>
        <div className="courses--mobile">
          <div className="operations operations--dark">
            <br /> <br />
            <div className="operations__tab-container">
              <button
                type="submit"
                className="btn btn-test btn-mobile"
                data-tab="1"
              >
                Aula 1
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>
                Protocolo para Julgamento com perspectiva de gênero (Introdução)
              </h5>
              <p>
                <font color="black">
                  <b>Professora:</b> Fernanda Pacheco Amorim
                </font>
              </p>
              <p>
                <font color="black">
                  Advogada Criminalista. Doutoranda em Direito na Universidade
                  Federal do Paraná. Mestra em Ciências Jurídicas pela
                  Universidade do Vale do Itajaí. Pós-Graduada em Direito Penal
                  e Processo Penal pela Academia Brasileira de Direito
                  Constitucional. Membra da Comissão da Mulher e da Comissão de
                  Direito Digital do Instituto dos Advogados Brasileiros.
                  Graduada em Direito pela Universidade do Vale do Itajaí
                  (2015). Autora dos livros “Respeita as Mina: inteligência
                  artificial e violência contra a mulher” e “Pai, te amo
                  sempre”. Coapresentadora do podcast Mulherão da Porra.
                </font>
              </p>

              <p>
                <br />
                - Protocolo Conselho Nacional de Justiça - Brasil; <br />
                - Protocolo para julgamento com perspectiva de gênero; <br />
                - Estereótipos de gênero e o mito da neutralidade; <br />-
                Teoria Feminista, Feminismos e Movimento Feminista.
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
                Aula 2
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>Direito Penal e Processo Penal Feminista</h5>
              <p>
                <font color="black">
                  <b>Professora:</b> Thaise Mattar Assad
                </font>
              </p>
              <p>
                {" "}
                <font color="black">
                  {" "}
                  Thaise Mattar Assad é advogada criminalista, mestre em
                  ciências criminais pela PUC-RS, vice-presidente da Associação
                  Paranaense dos Advogados Criminalistas (APACRIMI -
                  ABRACRIM-PR), Conselheira Estadual da OAB/PR e Conselheira do
                  Instituto Brasileiro de Direito Penal Econômico - IBDPE.
                  Também é professora da FAE Centro Universitário.
                </font>{" "}
              </p>
              <p>
                <br /> - A proteção da mulher no Direito Penal Brasileiro;{" "}
                <br />
                - Quem é a MULHER “protegida” pelo Direito Penal? <br />
                - Superação da mulher como posse do homem na economia do Direito
                Penal brasileiro: <br />- Da legítima defesa da honra à
                qualificadora do feminicídio; <br />
                - Palavra da vítima e arquitetura probatória nos crimes
                relacionados a gênero; <br />
                – ADPF 779 e a discussão sobre a inconstitucionalidade da tese
                da “legítima defesa da honra”; <br />
                - Lei Maria da Penha: marco jurídico na proteção penal de
                mulheres nos espaços de violência familiar, doméstica e no
                âmbito das relações de afeto; <br />
                - Alterações no Código Penal e Código de Processo Penal:
                reconhecimento de uma violência doméstica e familiar, novos bens
                jurídicos, novos tipos penais incriminadores, e rechaço a
                benefícios despenalizantes para agressores; <br />
                - Controle dos corpos sexados como femininos: criminalização
                primária do aborto; <br />
                - "Por que uma criminologia feminista para um direito penal que
                persegue, predominantemente, homens?"
                <br />
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
                Aula 3
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>
                Direito da Infância e da Juventude sobre as lentes do feminismo
              </h5>

              <p>
                <font color="black">
                  <b>Professora:</b> Daiana Allessi Nicoletti Alves
                </font>
              </p>
              <p>
                <font color="black">
                  Advogada Familiarista. Pesquisadora nas temáticas de gênero,
                  feminismos e representatividade feminina na política.
                  Especialista em Direito Aplicado e em Direito Público e Mestra
                  em Direitos Humanos e Políticas Públicas pela PUC/PR. Membro
                  da Comissão das Mulheres Advogadas e da Comissão de Defesa dos
                  Direitos Humanos da OAB/PR.
                </font>
              </p>

              <p>
                <br />
                - Perda do poder familiar e argumentos relacionados a
                estereótipo de gênero; <br />
                - Adoção e questões de gênero;
                <br />
                - Atos infracionais e a questão de gênero (crianças filhas de
                adolescentes em cumprimento de medida socioeducativa). <br />
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
                Aula 4
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>Constitucionalismo feminista</h5>

              <p>
                <font color="black">
                  <b>Facilitadoes:</b> Melina Fachin, Estefânia Barboza e André
                  Demétrio
                </font>
              </p>
              <p>
                <font color="black">
                  Meina Fachin é professora da Faculdade de Direito da
                  Universidade Federal do Paraná. Fez estágio de
                  Pós-doutoramento pela Universidade de Coimbra, no Instituto de
                  Direitos Humanos e Democracia (2019/2020). Doutora em Direito
                  Constitucional, com ênfase em Direitos Humanos, pela
                  Pontifícia Universidade Católica de São Paulo (PUC-SP.)
                  Visiting researcher da Harvard Law School (2011). Mestre em
                  Direitos Humanos pela Pontifícia Universidade Católica de São
                  Paulo (PUC-SP). Bacharel em Direito pela Universidade Federal
                  do Paraná (UFPR). Autora de diversas obras e artigos na seara
                  do Direito Constitucional e dos Direitos Humanos. Membro do
                  Instituto dos Advogados Brasileiros/IAB, do Instituto dos
                  Advogados do Paraná/IAP e da Ordem dos Advogados do Brasil
                  Seção Paraná - OAB/PR. Advogada-sócia do Bureau Fachin
                  Advogados Associados. <br /> <br />
                  Estefânia Barboza é professora da Faculdade de Direito da
                  Universidade Federal do Paraná e do Mestrado em Direito do
                  Centro Universitário Internacional - UNINTER. Doutora e Mestre
                  em Direito pela PUC-PR, com estágio doutoral
                  (doutorado-sanduíche) e bolsa CAPES na Osgoode Hall Law School
                  (York University). Professora Adjunta do Departamento de
                  Direito Público da Universidade Federal do Paraná e do
                  Mestrado em Direito do UNINTER. Foi Professora Convidada da
                  Università degli Studi di Palermo nos anos de 2012, 2013, 2014
                  e 2019. Professora Visitante na Faculdade de Direito de
                  Toronto, em julho de 2016. Professora Visitante no Doutorado
                  de Messina, em junho de 2019. Representante da UFPR na Cátedra
                  de Direitos Humanos da AUGM - Associação de Universidades do
                  Grupo Montevideo.
                  <br /> <br />
                  André Demétrio é doutorando em Direito pela Universidade de
                  Brasília (UnB). Graduando em História pela Universidade do
                  Estado de Santa Catarina (UDESC). É pesquisador do CCONS
                  (Centro de Estudos da Constituição)/ Universidade Federal do
                  Paraná (UFPR).
                </font>
              </p>
              <p>
                <br />
                - Mulher e Poder; <br />
                - Gênero e Constitucionalismo; <br />
                - (Des)igualdade de gênero e noção de cidadania; <br />
                - Democracia e (des)igualdade de gênero; <br />
                - Políticas Públicas e perspectiva de gênero; <br />
                - Poder Judiciário e as mulheres; <br />
                - Devido processo com enfoque de gênero; <br />
                - Direito à educação das mulheres; <br />
                - Trabalhadoras domésticas: o retrato da desigualdade de gênero,
                raça e classe. <br />
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
                Aula 5
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>Direito das Famílias sobre as lentes do feminismo</h5>
              <p>
                <font color="black">
                  <b>Facilitadores:</b> Larissa Alves e Heloise Cella
                </font>
              </p>
              <p>
                <font color="black">
                  Larissa Alves é bacharela em direito e jornalista. Filha
                  adotiva e pesquisadora sobre adoção, é uma das idealizadoras
                  da ADOTIVA (Associação Brasileira de pessoas Adotadas) e
                  coordenadora da página Olhar Adotivo.
                  <br />
                  <br />
                  Heloise Rosin Cella, advogada com ênfase na área de direito
                  das famílias e direito da infância e juventude, pós graduada
                  em direito penal e processual penal pela Universidade Estadual
                  de Londrina (UEL). Bacharela em direito pela Universidade
                  Estadual de Maringá (UEM).
                </font>
              </p>
              <p>
                <br />
                - Como as opressões de gênero operam na estrutura familiar: que
                tipo de família é protegida pelo Direito?; <br />
                - Pensão alimentícia, guarda;
                <br />
                - Alienação parental e estereótipos de gênero;
                <br />
                - Violência Obstétrica
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
                Aula 6
              </button>
            </div>
            <div className="operations__content-test operations__content--1 operations__content--active">
              <h5>Direito Trabalhista sob as lentes do feminismo</h5>
              <p>
                <font color="black">
                  <b>Professora:</b> Ana Gabriela de Melo Primon
                </font>
              </p>
              <p>
                <font color="black">
                  Graduada pela Faculdade de Direito de Ribeirão Preto da
                  Universidade de São Paulo em 2013. Especialista em Gestão da
                  Diversidade nas Organizações pela PUC-SP. Especialista em
                  Gestão de Pessoas e Compliance Trabalhista pela Fundação
                  Getúlio Vargas. Sócia do Granadeiro Guimarães Advogados, onde
                  atua com processos judiciais estratégicos e é gestora de
                  comunicação. Autora de diversos artigos em matéria de Direito
                  do Trabalho, Compliance Trabalhista e Diversidade no Mercado
                  de Trabalho.
                </font>
              </p>
              <p>
                <br />
                - Como as opressões de gênero operam nas relações de trabalho;
                <br />
                - Por que ainda discutimos sobre como conciliar maternidade e
                carreira?
                <br />
                - Assédio sexual e assédio moral como violências relacionadas ao
                gênero.
                <br /> <br />
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
            <h4>Camila Ricci</h4>
            <p>
              O curso "Por uma Advocacia Feminista” foi idealizado e
              desenvolvido pela Toda Cidadã com colaboração da advogada,
              professora, coordenadora (Curso de Direito da FAG - Toledo) e
              voluntária Camila Ricci e conduzido por diversas professoras
              importantes da área!
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
                href="https://go.hotmart.com/Q68651321L?dp=1"
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
              17 hora-aula de 10 professoras diferentes da área do Direito,
              especialistas por universidades importantes (como UFPR, UEM, UEL,
              USP, PUC-RS e Universidade de Coimbra), entre elas Fernanda
              Amorim, Melina Fachin, Thaise Mattar Assad e muitas outras
            </p>
            <p>
              30 materiais diferentes entre indicações e conteúdos exclusivos
              elaborados pelas professoras
            </p>
            <p>
              Outros custos operacionais com gravação, armazenagem e hospedagem
              em site
            </p>
          </div>
          <div className="description__feature-test">
            <h4>R$ 3.400,00</h4>
            <br />
            <h4>R$ 300,00</h4>
            <h4>R$ 90,50</h4>
            <br />
            <h5>Total: R$ 3.790,50 </h5>
          </div>
        </div>

        <div className="mobile">
          <div className="price-test-mobile">
            <p>
              17 hora-aula de 10 professoras diferentes da área do Direito,
              especialistas por universidades importantes (como UFPR, UEM, UEL,
              USP, PUC-RS e Universidade de Coimbra), entre elas Fernanda
              Amorim, Melina Fachin, Thaise Mattar Assad e muitas outras.....
              <font color="d#83c23">R$ 3.400,00</font>
              <br />
              30 materiais diferentes entre indicações e conteúdos exclusivos
              elaborados pelas professoras.....
              <font color="d#83c23">R$ 300,00</font>
              <br />
              Outros custos operacionais com gravação, armazenagem e hospedagem
              em site.....
              <font color="d#83c23">R$ 90,50</font>
              <br /> <br />
              <font color="d#83c23">Total: R$ 3.790,50</font>
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
              397,00.
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
            <p>O curso sairá de R$ 397,00 por</p>
            <h5>
              <font size="7">
                12 parcelas de R$ 29,64* ou R$ 297,00 à vista!
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
                href="https://go.hotmart.com/Q68651321L?dp=1"
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

export default AdvocaciaFeminista;
