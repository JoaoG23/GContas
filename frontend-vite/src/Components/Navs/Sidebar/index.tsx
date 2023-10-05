import { FaFilePdf } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoLogOut, IoPeopleSharp } from "react-icons/io5";

import * as SideBar from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";

export const Sidebar: React.FC = () => {
  return (
    <SideBar.Container>
      <SideBar.Item>
        <BsFillPersonVcardFill color="#fff" size={40} />
        <Link to={"/contas"}>
          <p>Contas</p>
        </Link>
      </SideBar.Item>
      <SideBar.Item>
        <FaFilePdf color="#fff" size={40} />
        <Link to={"/exportacoes"}>
          <p>Exportações</p>
        </Link>
      </SideBar.Item>
      <SideBar.Item>
        <IoPeopleSharp color="#fff" size={40} />
        <Link to={"/usuarios"}>
          <p>Usuários</p>
        </Link>
      </SideBar.Item>
      <SideBar.Item onClick={limparSessaoUsuario}>
        <IoLogOut color="#fff" size={40} />
        <Link to={"/"}>
          <p>Sair</p>
        </Link>
      </SideBar.Item>
    </SideBar.Container>
  );
};
