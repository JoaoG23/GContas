import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { ContaVisualizada } from "../../../../../types/conta/ContaVisualizada";

import * as Contas from "./styles";

import { Card } from "../../../../../Components/cards/Card";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import { RedFont } from "../../../../../Components/FontColor/RedFont";
import ButtonDefault from "../../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { Logomarca } from "../../../../instituicoes/ComponentesParaTodos/images/Logomarca";

import { useMascaraTexto } from "../../hooks/useMascaraTexto/useMascaraTexto";

type Props = {
  conta: ContaVisualizada;
};

export const ListaContas: React.FC<Props> = ({ conta }) => {
  const {
    textoMascarada: senhaMascarada,
    mostrarTexto: mostrarSenha,
    setMostrarTexto: setMostrarSenha,
  } = useMascaraTexto(conta.senha);

  const navigate = useNavigate();
  return (
    <Card>
      <Contas.Container>
        <Contas.ContainerRight>
          <Logomarca imageLogomarca={conta?.instituicoes?.image!} />

          <Contas.ListaItems>
            <li>
              <h2>
                <strong>Titulo: </strong> {conta.titulo!}
              </h2>
            </li>
            <li>
              <strong>Instituição: </strong> {conta?.instituicoes?.nome!}
            </li>
            <li>
              <strong>Login: </strong>
              <GreenFont>{conta.login!}</GreenFont>
            </li>
            <li>
              <Contas.SenhaContainer>
                <strong>Senha: </strong>
                <RedFont>{senhaMascarada}</RedFont>
                <div
                  role="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? (
                    <BsFillEyeFill size={14} />
                  ) : (
                    <BsFillEyeSlashFill size={14} />
                  )}
                </div>
              </Contas.SenhaContainer>
            </li>
            <li>
              <strong>E-mail: </strong> {conta.email!}
            </li>
            <li>
              <strong>Obs: </strong> {conta.observacoes!}
            </li>
          </Contas.ListaItems>
        </Contas.ContainerRight>
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
