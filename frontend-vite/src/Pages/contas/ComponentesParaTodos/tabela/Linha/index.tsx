import { useNavigate } from "react-router";
import ButtonDefault from "../../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { Card } from "../../../../../Components/Card";
import { BlueFont } from "../../../../../Components/FontColor/BlueFont";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import { RedFont } from "../../../../../Components/FontColor/RedFont";

import { AcoesItems } from "../../../../../Components/acoes/AcoesItems";
import { ContaVisualizada } from "../../../../../types/conta/ContaVisualizada";
import { formatarDataHoraPadraoBR } from "../../../../../utils/formatadoresDatahora/formatarDataHoraPadraoBR/formatarDataHoraBR";

import * as Contas from "./styles";
type Props = {
  conta: ContaVisualizada;
};

export const ListaContas: React.FC<Props> = ({ conta }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Contas.Container>
        <li>
          <strong>ID: </strong> {conta.id!}
        </li>
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
      </Contas.Container>
      <div>
        <ButtonDefault onClick={navigate(`editar/${conta.id!}`)}>
          Editar
        </ButtonDefault>
        <SecondaryButton onClick={navigate(`editar/${conta.id!}`)}>
          Remover
        </SecondaryButton>
      </div>
    </Card>
  );
};
