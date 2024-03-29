import styled from "styled-components";

export const Container = styled.div`
  width: 16vw;
  height: 100vh;

  position: fixed;
  left: 0px;
  padding-top: 7em;
  padding-left: 1em;
  padding-right: 1em;

  display: flex;
  flex-direction: column;

  gap: 1em;

  background-color: #6879F7;

  box-shadow: 2px 2px 4px #00000027;

  @media only screen and (max-width: 768px) {
    display: none;
    flex-direction: row;
  }
`;

export const Image = styled.img`

  @media only screen and (max-width: 768px) {
    width: 40px;
  }
`;

export const Item = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 2px;

  align-items: center;
  gap: 1em;

  a {
    text-decoration: none;
    color: #fff;
  }
  :hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;

    background-color: #0000003f;
  }
`;

export const Elementos = styled.ul`
  border-radius: 8px;

  li {
    padding: 3px;
    display: flex;
    gap: 1em;
    border-radius: 0.7em;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  li:hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;

    background-color: #0000003f;
  }
`;

export const ColecaoElementos = styled.summary`
  display: flex;
  border-radius: 12px;

  align-items: center;
  gap: 0.9em;
  color: #fff;
  text-decoration: none;

  :hover {
    transition: 0.3s;
    background-color: #0000003f;
  }
`;
