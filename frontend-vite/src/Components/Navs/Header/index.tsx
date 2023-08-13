import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { Container, Item, VoltarText, TextLimited } from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

export const Header: React.FC = () => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }
  return (
    <Container>
      <Item>
        <FaUser size={30} />
        <TextLimited>{nomeUsuario}</TextLimited>
      </Item>
      <strong>Gcontas</strong>
      <Item
        onClick={() => {
          voltarPaginaAnterior();
        }}
      >
        <VoltarText>Voltar</VoltarText>
        <BsFillArrowRightCircleFill size={30} />
      </Item>
    </Container>
  );
};
