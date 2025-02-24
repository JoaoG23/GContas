import styled from "styled-components";

export const Container = styled.main`
  display: block;

  color: #424651;
  @media screen and (max-width: 769px) {
    justify-content: center;
  }
`;
export const Formulario = styled.div`
  margin-bottom: 1px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export const ContainerButtons = styled.header`
  display: flex;
  gap: 6px;
`;
