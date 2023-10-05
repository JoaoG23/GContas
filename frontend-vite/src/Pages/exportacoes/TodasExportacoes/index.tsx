import { FaFilePdf } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { CardList } from "../../../Components/cards/CardList";

import { ContaCriterioPesquisa } from "../../../types/conta/ContaCriterioPesquisa";
import { ContaVisualizada } from "../../../types/conta/ContaVisualizada";
import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";

import { pesquisarContaPorCriterio } from "./api";

import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";
import { ListaContas } from "../ComponentesParaTodos/tabela/Linha/Linha";

import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { logoBase64 } from "./utils/pdf/assets/logoBase64";
import { configuracaoGeracaoExportacaoContasPDF } from "./utils/pdf/configuracaoGeracaoExportacaoContasPDF/configuracaoGeracaoExportacaoContasPDF";
import { criarLinhasExportacaoContas } from "./utils/pdf/criarLinhasExportacaoContas/criarLinhasExportacaoContas";

export const ExportacoesDadosContas: React.FC = () => {
  const navigate = useNavigate();

  const [criteriosBusca, setCriteriosBusca] = useState<ContaCriterioPesquisa>(
    {}
  );

  const {
    data,
    mutate: mutatePesquisar,
    isLoading,
  } = useMutation(async () => await pesquisarContaPorCriterio(criteriosBusca), {
    onError: (error: ErrorResposta) => {
      toast.error(`Ops!: ${error.response?.data?.message}`);
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const contas = data?.data;

  //------ PDF

  const relatorioPDFGerado = criarLinhasExportacaoContas(contas);
  const configuracoesDocumento = configuracaoGeracaoExportacaoContasPDF(
    relatorioPDFGerado,
    logoBase64
  );

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Formulario>
        <FormularioPesquisa
          onSubmit={handleSubmit((criterios: ContaCriterioPesquisa) => {
            setCriteriosBusca(criterios);
            mutatePesquisar();
          })}
          register={register}
          control={control}
          errors={errors}
        />
      </Fluxo.Formulario>
      <Fluxo.Header>
        <h2>Contas Filtradas para exportação</h2>
        <Fluxo.ContainerButtons>
          <ButtonDefault
            onClick={() => {
              pdfMake.createPdf(configuracoesDocumento as any).open();
            }}
          >
            <p>Exporta PDF</p>
            <FaFilePdf size={25} />
          </ButtonDefault>
        </Fluxo.ContainerButtons>
      </Fluxo.Header>

      <CardList>
        {contas?.map((conta: ContaVisualizada) => (
          <ListaContas key={conta.id} conta={conta} />
        ))}
      </CardList>
    </Fluxo.Container>
  );
};
