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
  border-radius: 2em;
  display: flex;
  gap: 5px;
  border: none;
  background-color: transparent;


  color: #6879F7;

  align-items: center;
  :hover {
    animation: toRightButtons 0.2s forwards ease-in;
  }

  @keyframes toRightButtons {
    0% {
      transform: translateX(0vw);
    }
    100% {
      /* background-color: #0000003f; */
      transform: translateX(0.1vw);
    }
  }
`;
export const VoltarText = styled.p`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
