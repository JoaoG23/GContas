import styled from "styled-components";

export const ContainerPesquisa = styled.section`
  width: 40%;

  display: flex;

  gap: 10px;
  align-items: end;
  
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 98%;
  }
`;

export const Container = styled.form`
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;
`;
