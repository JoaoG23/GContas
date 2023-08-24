import styled from "styled-components";

export const Container = styled.div`
  width: 84vw;
  height: 9vh;

  display: flex;
  align-items: center;

  font-weight: 300;
  position: absolute;
  top: 0em;
  right: 0em;

  padding: 1em;

  justify-content: space-between;

  background-color: #fcfcff;
  box-shadow: 2px 2px 4px #00000027;
  color: grey;
  a {
    color: grey;
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
    height: 10vh;
  }
`;

export const TextLimited = styled.p`
  width: 90px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;

export const Item = styled.button`
  border-radius: .9em;
  display: flex;
  gap: 5px;
  border: none;
  background-color: transparent;

  padding: 7px;
  color: #6879f7;

  align-items: center;
  :hover {
    animation: toRightButtons 0.2s forwards ease-in;
  }

  @keyframes toRightButtons {
    0% {
      transform: translateY(0vw);
    }
    100% {
      color: #fff;
      background-color: #6879f7;
      transform: translateY(0.1vw);
    }
  }
`;
export const VoltarText = styled.p`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
