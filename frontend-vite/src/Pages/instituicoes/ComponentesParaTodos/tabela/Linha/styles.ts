import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  height: 36px;
  gap: 1em;
`;
export const ContainerLeft = styled.section`
  display: flex;
  gap: 1em;
  align-items: center;
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
  display: flex;
  
  align-content: center;
  gap: 5px;
`;
