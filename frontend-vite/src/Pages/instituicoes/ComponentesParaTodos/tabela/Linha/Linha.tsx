import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Instituicao from "./styles";

import { Card } from "../../../../../Components/cards/Card";
import ButtonDefault from "../../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { Logomarca } from "../../images/Logomarca";

import { InstituicaoVisualizada } from "../../../../../types/instituicao/InstituicaoVisualizada";

type Props = {
  instituicao: InstituicaoVisualizada;
};

export const ListaInstituicoes: React.FC<Props> = ({ instituicao }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Instituicao.Container>
        <Instituicao.ContainerLeft>
          <Logomarca imageLogomarca={instituicao?.image!} />
          <h3>{instituicao.nome}</h3>
        </Instituicao.ContainerLeft>
        <Instituicao.ContainerButton>
          <ButtonDefault onClick={() => navigate(`editar/${instituicao.id!}`)}>
            <BsFillPencilFill size={21} />
          </ButtonDefault>
          <SecondaryButton
            onClick={() => navigate(`deletar/${instituicao.id!}`)}
          >
            <BsFillTrashFill size={21} />
          </SecondaryButton>
        </Instituicao.ContainerButton>
      </Instituicao.Container>
    </Card>
  );
};
