import styled from "styled-components";

export const Light = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: 0.6px solid #fbfbfb;
  background-color: #fff;
  color: #717f95;
  border-radius: 5px;
  padding: 0.5em;

  box-shadow: 0 0 2px gray;

  :hover {
    animation: changeColor 0.5s ease alternate both;
  }

  @keyframes changeColor {
    from {
      transform: translateY(0vh);
    }

    to {
      transform: translateY(-4px);
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    width: 95%;
    padding: 1em;
  }
`;
