import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  background-color: #6879f7;
  border-radius: 10px;
  color: #fff;

  font-weight: 500;
  padding: 0.5em;
  background-size: 200% 200%;

  box-shadow: 0 0 3px #717f953a;

  :hover {
    animation: mudarCorEReduzTamanho 0.5s ease alternate both;
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
