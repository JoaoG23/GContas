import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillFileRuledFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
  BsBoxArrowInLeft,
  BsBank2,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import { tiposFluxosCaixa, categorias } from "./data/listLinks";

import * as SideBar from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

type Props = {
  setMostrarSidebar: any;
  mostrarSidebar: boolean;
};

export const MobileSidebar: React.FC<Props> = ({
  mostrarSidebar,
  setMostrarSidebar,
}) => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();
  const esconderSidebar = () => setMostrarSidebar(false);
  return (
    <>
      {mostrarSidebar && (
        <SideBar.Container>
          <SideBar.Item>
            <FaUserAlt color="#fff" size={20} />
            <Link to={"/usuario_logado"}>
              <p>Olá {nomeUsuario}!</p>
            </Link>
          </SideBar.Item>
          <SideBar.Item onClick={esconderSidebar}>
            <BsFillPieChartFill color="#fff" />
            <Link to={"/dashboard"}>
              <p>Dashboard</p>
            </Link>
          </SideBar.Item>

          <SideBar.Item
            onClick={() => {
              limparSessaoUsuario();
              esconderSidebar();
            }}
          >
            <IoLogOut color="#fff" />
            <Link to={"/"}>
              <p>Sair</p>
            </Link>
          </SideBar.Item>
          <SecondaryButton onClick={() => setMostrarSidebar(false)}>
            <BsBoxArrowInLeft size={20} />
          </SecondaryButton>
        </SideBar.Container>
      )}
    </>
  );
};
