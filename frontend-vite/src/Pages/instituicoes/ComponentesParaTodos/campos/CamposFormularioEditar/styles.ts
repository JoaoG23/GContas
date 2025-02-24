import styled from "styled-components";

export const Campos = styled.section`
  display: grid;
`;

export const UmaColuna = styled.section`

  display: grid;
  grid-template-columns: auto;
  gap: 1em;
  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const ObservacoesLinha = styled.section`
  display: grid;
  gap: 1em;

  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const Container = styled.form`
  display: grid;
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;
`;
