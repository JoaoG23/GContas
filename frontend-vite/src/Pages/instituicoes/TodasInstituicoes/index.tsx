import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { pesquisarInstituicoesPaginaPorCriterio } from "./api";

import * as Fluxo from "./styles";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { ListaInstituicoes } from "../ComponentesParaTodos/tabela/Linha/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";
import { CardList } from "../../../Components/cards/CardList";

import { ContaCriterioPesquisa } from "../../../types/conta/ContaCriterioPesquisa";
import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";
import { InstituicaoVisualizada } from "../../../types/instituicao/InstituicaoVisualizada";

export const TodasInstituicoes: React.FC = () => {
  const navigate = useNavigate();

  const [criteriosBusca, setCriteriosBusca] = useState<ContaCriterioPesquisa>(
    {}
  );
  const [pagina, setPagina] = useState<number>(1);
  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const {
    data,
    mutate: mutatePesquisar,
    isLoading,
  } = useMutation(
    async () =>
      await pesquisarInstituicoesPaginaPorCriterio(pagina, criteriosBusca),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops!: ${error.response?.data?.message}`);
      },
    }
  );

  useEffect(() => {
    mutatePesquisar();
  }, [pagina, criteriosBusca]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const instituicoes = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Formulario>
        <FormularioPesquisa
          onSubmit={handleSubmit((criterios: ContaCriterioPesquisa) => {
            setCriteriosBusca(criterios);
            mutatePesquisar();
            comecarPelaPrimeiraPagina();
          })}
          register={register}
          control={control}
          errors={errors}
        />
      </Fluxo.Formulario>
      <Fluxo.Header>
        <h2>Suas senhas</h2>
        <Fluxo.ContainerButtons>
          <ButtonDefault onClick={() => navigate("adicionar")}>
            <p>Adicionar</p>
            <IoMdAddCircle size={20} />
          </ButtonDefault>
        </Fluxo.ContainerButtons>
      </Fluxo.Header>

      <CardList>
        {instituicoes?.map((instituicao: InstituicaoVisualizada) => (
          <ListaInstituicoes key={instituicao.id} instituicao={instituicao} />
        ))}
      </CardList>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={instituicoes}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Fluxo.Container>
  );
};
