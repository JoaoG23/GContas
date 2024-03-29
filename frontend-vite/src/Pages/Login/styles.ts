import styled from "styled-components";


import imageLogin from "../../assets/login-image.png";

export const LoginContainer = styled.main`
  padding: 3em;
  margin: 10px;
  width: auto;
  display: grid;

  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  height: auto;
  background-color: #f8f8f9;
  border-radius: .8em;

  animation: entradaSuave 1s ease alternate both;
  box-shadow: 2px 2px 10px #1ed49d33;

  @media only screen and (max-width: 768px) {
    justify-items:stretch;

    text-align: center;
    width: 90%;
    padding: .8em;
  }
`;
export const ImageLateral = styled.img`

    width: 70vw;
`;


export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  background-color:#6979F8;

  /* background-color: #f8f8f9; */
  /* background-color:#FFA26B; */
  /* background-color:#6979F8; */
  /* background-color:#FF65A4; */
  
  position: fixed;
  top: 0;
  z-index: 2;
  align-items: center;

  @media only screen and (max-width: 768px) {
    background-image: none;
    display: flex;
    background-color:#6879f7;
  }
`;
