import { Fragment } from "react";
import { ContactContainer, FormContainer } from "./contact.styles";

function Contact() {
  return (
    <Fragment>
      <section id="contato">
        <ContactContainer>
          <h5>FALE COM A GENTE</h5>
          <FormContainer>
            <form
              action="https://formsubmit.co/todacidada@gmail.com"
              method="POST"
            >
              <label htmlFor="name">Nome: </label>
              <input type="text" name="name" required />
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" required />
              <label htmlFor="message" className="form__form-test">
                Mensagem:
              </label>
              <textarea id="message" rows="4" name="message"></textarea>
              <br />
              <button type="submit" className="btn btn-test">
                Enviar
              </button>
            </form>
          </FormContainer>
        </ContactContainer>
      </section>
    </Fragment>
  );
}

export default Contact;
