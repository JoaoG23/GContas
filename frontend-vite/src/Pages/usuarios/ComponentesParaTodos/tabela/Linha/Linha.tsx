import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Usuarios from "./styles";

import { Card } from "../../../../../Components/cards/Card";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import { RedFont } from "../../../../../Components/FontColor/RedFont";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";

import { UsuarioVisualizado } from "../../../../../types/usuario/Usuario";

type Props = {
  usuario: UsuarioVisualizado;
};

export const ListaUsuarios: React.FC<Props> = ({ usuario }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Usuarios.Container>
        <Usuarios.ListaItems>
          <li>
            <strong>Nome: </strong> {usuario.nome!}
          </li>
          <li>
            <strong>Login: </strong>
            <GreenFont>{usuario.login!}</GreenFont>
          </li>
          <li>
            <strong>Senha: </strong>
            <RedFont>*************</RedFont>
          </li>
        </Usuarios.ListaItems>
        <Usuarios.ContainerButton>
          <SecondaryButton onClick={() => navigate(`deletar/${usuario.id!}`)}>
            <BsFillTrashFill size={21} />
          </SecondaryButton>
        </Usuarios.ContainerButton>
      </Usuarios.Container>
    </Card>
  );
};
