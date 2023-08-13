import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-color: #a05dfc;
  border-radius: 10px;

  color: #fff;
  padding: 0.5em;
  background-size: 200% 200%;

  box-shadow: 1px 1px 2px rgb(160, 93, 252,0.4);

  :hover {
    animation: mudarCorEReduzTamanho 0.8s ease forwards;
  }

  @keyframes mudarCorEReduzTamanho {
    from {
      transform: scale(1);
      box-shadow: 1px 1px 10px rgb(160, 93, 252,0.4);
    }

    to {
      transform: scale(0.9);
      box-shadow: 0px 0px 13px rgb(160, 93, 252,0.7);
    }
  }

  @media screen and (max-width: 600px) {

    display: flex;
    width: 95%;
    padding: 1em;

  }
`;
