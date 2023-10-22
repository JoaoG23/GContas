import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { ContaVisualizada } from "../../../../../types/conta/ContaVisualizada";

import * as Instituicao from "./styles";

import { Card } from "../../../../../Components/cards/Card";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import { RedFont } from "../../../../../Components/FontColor/RedFont";
import ButtonDefault from "../../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { LightButton } from "../../../../../Components/Buttons/LightButton";

import { useMascaraTexto } from "../../hooks/useMascaraTexto/useMascaraTexto";
import { InstituicaoVisualizada } from "../../../../../types/instituicao/InstituicaoVisualizada";

type Props = {
  instituicao: InstituicaoVisualizada;
};

export const ListaInstituicoes: React.FC<Props> = ({ instituicao }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Instituicao.Container>
        <Instituicao.ListaItems>
          <li>
            <strong>id: </strong> {instituicao.id!}
          </li>
          <li>
            <strong>Instituição: </strong> {instituicao.nome}
          </li>
        </Instituicao.ListaItems>
        <Instituicao.ContainerButton>
          <ButtonDefault onClick={() => navigate(`editar/${instituicao.id!}`)}>
            <BsFillPencilFill size={21} />
          </ButtonDefault>
          <SecondaryButton onClick={() => navigate(`deletar/${instituicao.id!}`)}>
            <BsFillTrashFill size={21} />
          </SecondaryButton>
        </Instituicao.ContainerButton>
      </Instituicao.Container>
    </Card>
  );
};
