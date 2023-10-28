import styled from "styled-components";

export const NoBorders = styled.input`
  @media screen and (max-width: 600px) {
    padding: 1em;
  }
`;
export const ContainerInput = styled.label`
font-size: 14px;

  display: flex;
  align-items: center;
  gap: 3px;
  background-color: #fff;
  color: #717f95;
  border-radius: 5px;
  padding: 0.4em;

  box-shadow: 1px 1px 5px #717f953a;

  :hover{
    transition: ease 0.4s;
    background-color: #6879F7;
    color: white;
  }
`;

export const SecondaryInputStyle = styled(NoBorders);
