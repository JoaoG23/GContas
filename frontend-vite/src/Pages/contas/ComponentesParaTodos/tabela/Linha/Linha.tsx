import { useNavigate } from "react-router-dom";

import { ContaVisualizada } from "../../../../../types/conta/ContaVisualizada";

import * as Contas from "./styles";

import { Card } from "../../../../../Components/cards/Card";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import { RedFont } from "../../../../../Components/FontColor/RedFont";
import ButtonDefault from "../../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

type Props = {
  conta: ContaVisualizada;
};

export const ListaContas: React.FC<Props> = ({ conta }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Contas.Container>
        <Contas.ListaItems>
          <li>
            <strong>Titulo: </strong> {conta.titulo!}
          </li>
          <li>
            <strong>Instituição: </strong> {conta.instituacao!}
          </li>
          <li>
            <strong>Login: </strong>
            <GreenFont>{conta.login!}</GreenFont>
          </li>
          <li>
            <strong>Senha: </strong>
            <RedFont>{conta.senha!}</RedFont>
          </li>
          <li>
            <strong>E-mail: </strong> {conta.email!}
          </li>
          <li>
            <strong>Obs: </strong> {conta.observacoes!}
          </li>
        </Contas.ListaItems>
        <Contas.ContainerButton>
          <ButtonDefault onClick={() => navigate(`editar/${conta.id!}`)}>
            <BsFillPencilFill size={21} />
          </ButtonDefault>
          <SecondaryButton onClick={() => navigate(`deletar/${conta.id!}`)}>
            <BsFillTrashFill size={21} />
          </SecondaryButton>
        </Contas.ContainerButton>
      </Contas.Container>
    </Card>
  );
};
