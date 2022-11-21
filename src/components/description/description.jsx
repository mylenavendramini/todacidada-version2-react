import { Fragment } from "react";
import { DescriptionDesktop, DescriptionMobile } from "./description.styles";

function Description() {
  return (
    <Fragment>
      <section id="quemsomos">
        <DescriptionDesktop>
          <div>
            <h5>NOSSO PROPÓSITO</h5>
            <p>
              A Toda Cidadã foi criada com o objetivo de democratizar por meio
              da troca a educação política para mulheres e jovens. Vivemos um
              período político no Brasil, no qual se faz necessário a
              disseminação de conhecimento, principalmente dos direitos dos
              cidadãos.
            </p>
          </div>
          <div>
            <h5>NOSSOS VALORES</h5>
            <p>
              Buscamos expandir o acesso a educação política para as pessoas que
              estão excluídas socialmente. Desta forma, nossa missão é garantir
              mulheres e jovens tenham um espaço onde possam trocar
              conhecimentos e vivências de forma a facilitar a organização
              política e econômica como meio de garantia de acesso aos seus
              direitos.
            </p>
            <h4>RESPEITO | TRANSFORMAÇÃO | CONEXÃO | PLURAL | HUMANO</h4>
          </div>
        </DescriptionDesktop>

        <DescriptionMobile>
          <div>
            <h5>NOSSO PROPÓSITO</h5>
            <p>
              A Toda Cidadã foi criada com o objetivo de democratizar por meio
              da troca a educação política para mulheres e jovens. Vivemos um
              período político no Brasil, no qual se faz necessário a
              disseminação de conhecimento, principalmente dos direitos dos
              cidadãos.
            </p>
          </div>
          <div>
            <h5>NOSSOS VALORES</h5>
            <p>
              Buscamos expandir o acesso a educação política para as pessoas que
              estão excluídas socialmente. Desta forma, nossa missão é garantir
              mulheres e jovens tenham um espaço onde possam trocar
              conhecimentos e vivências de forma a facilitar a organização
              política e econômica como meio de garantia de acesso aos seus
              direitos.
            </p>
            <h4>RESPEITO | TRANSFORMAÇÃO | CONEXÃO | PLURAL | HUMANO</h4>
          </div>
        </DescriptionMobile>
      </section>
    </Fragment>
  );
}

export default Description;
