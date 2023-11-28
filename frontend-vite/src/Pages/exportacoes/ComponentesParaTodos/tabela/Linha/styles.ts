import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
`;
export const ContainerRight = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const SenhaContainer = styled.div`
  gap: 0.3em;
  display: flex;
  div {
    display: flex;
    gap: 0.3em;
    align-items: center;
  }
`;
export const ListaItems = styled.ul`
  list-style-type: none;

  @media screen and (max-width: 600px) {
    font-size: large;
  }
`;
export const ContainerButton = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 5px;
`;
