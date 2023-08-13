import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5em;

  @media screen and (max-width: 769px) {


    height: 300px;
    overflow-y:scroll;
  }
`;
