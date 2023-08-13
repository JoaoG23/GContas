import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
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
