import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
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

import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";
import { InstituicaoVisualizada } from "../../../types/instituicao/InstituicaoVisualizada";
import { InstituicaoPesquisada } from "../../../types/instituicao/InstituicaoPesquisada";
import { PaginacaoInstituicaoCache } from "../../../types/instituicao/PaginacaoInstituicaoCache";

import { buscarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/buscarConfiguracoesPaginaPorChave/buscarConfiguracoesPaginaPorChave";
import { guardarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/guardarConfiguracoesPaginaPorChave/guardarConfiguracoesPaginaPorChave";

export const TodasInstituicoes: React.FC = () => {
  const navigate = useNavigate();

  const chave = "instituicoes";
  const configuracaoPagina: PaginacaoInstituicaoCache =
    buscarConfiguracoesPaginaPorChave(chave) || {};

  const paginaAtual: number = Number(configuracaoPagina?.pagina!);
  const [pagina, setPagina] = useState<number>(paginaAtual || 1);

  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const [criteriosBusca, setCriteriosBusca] = useState<InstituicaoPesquisada>(
    configuracaoPagina?.criteriosBusca || {}
  );

  const { data, isLoading } = useQuery(
    ["todas-instituicao-pesquisa", { pagina, criteriosBusca }],
    async () =>
      await pesquisarInstituicoesPaginaPorCriterio(pagina, criteriosBusca),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops!: ${error.response?.data?.message}`);
      },
    }
  );
  const { register, handleSubmit, reset } = useForm<InstituicaoPesquisada>({});

  useEffect(() => {
    guardarConfiguracoesPaginaPorChave(chave, { criteriosBusca, pagina });
    reset(criteriosBusca);
  }, [pagina, criteriosBusca]);

  const instituicoes: InstituicaoVisualizada[] = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Formulario>
        <FormularioPesquisa
          onSubmit={handleSubmit((criterios: InstituicaoPesquisada) => {
            setCriteriosBusca(criterios);
            comecarPelaPrimeiraPagina();
          })}
          register={register}
        />
      </Fluxo.Formulario>
      <Fluxo.Header>
        <h2>Suas Instituições Cadastradas</h2>
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
