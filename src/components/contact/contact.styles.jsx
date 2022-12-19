import styled from "styled-components";

export const ContactContainer = styled.div`
  justify-content: center;
  padding: 3rem;
  justify-content: center;
  margin: 8rem auto;

  h5 {
    text-transform: uppercase;
    color: #d83c23;
    font-size: 2.5rem;
    padding: 1rem;
    letter-spacing: 3px;
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;

  input {
    font-size: 1.7rem;
    font-family: inherit;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-primary-lighter);
    display: block;
    align-items: center;
    width: 60rem;

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 700px) {
      width: 70%;
    }
  }

  textarea {
    font-size: 1.7rem;
    font-family: inherit;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-primary-lighter);
    display: block;
    align-items: center;
    width: 60rem;

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 700px) {
      width: 70%;
    }
  }

  @media only screen and (max-width: 928px) {
    display: block;
    margin-left: 0rem;
    margin-right: 0rem;
  }
`;
