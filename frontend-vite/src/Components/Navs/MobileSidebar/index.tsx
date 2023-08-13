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
  BsFillPersonVcardFill,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut, IoPeopleSharp } from "react-icons/io5";

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
          <SideBar.Item onClick={esconderSidebar}>
            <BsFillPersonVcardFill color="#fff" size={40} />
            <Link to={"/contas"}>
              <p>Contas</p>
            </Link>
          </SideBar.Item>
          <SideBar.Item onClick={esconderSidebar}>
            <IoPeopleSharp color="#fff" size={40} />
            <Link to={"/usuarios"}>
              <p>Usuários</p>
            </Link>
          </SideBar.Item>
          <SideBar.Item
            onClick={() => {
              esconderSidebar();
              limparSessaoUsuario();
            }}
          >
            <IoLogOut color="#fff" size={40} />
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
