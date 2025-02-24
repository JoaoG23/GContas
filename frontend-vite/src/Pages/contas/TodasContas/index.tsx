import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { pesquisarContasPaginaPorCriterio } from "./api";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { ListaContas } from "../ComponentesParaTodos/tabela/Linha/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";
import { CardList } from "../../../Components/cards/CardList";

import { ContaCriterioPesquisa } from "../../../types/conta/ContaCriterioPesquisa";
import { ContaVisualizada } from "../../../types/conta/ContaVisualizada";
import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";
import { PaginacaoContaCache } from "../../../types/conta/PaginacaoContaCache";

import { buscarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/buscarConfiguracoesPaginaPorChave/buscarConfiguracoesPaginaPorChave";
import { guardarConfiguracoesPaginaPorChave } from "../../../utils/paginacao/guardarConfiguracoesPaginaPorChave/guardarConfiguracoesPaginaPorChave";

export const TodosContas: React.FC = () => {
  const navigate = useNavigate();

  const chave = "contas";
  const configuracaoPagina: PaginacaoContaCache =
    buscarConfiguracoesPaginaPorChave(chave) || {};

  const paginaAtual: number = Number(configuracaoPagina?.pagina!);
  const [pagina, setPagina] = useState<number>(paginaAtual || 1);

  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const [criteriosBusca, setCriteriosBusca] = useState<ContaCriterioPesquisa>(
    configuracaoPagina?.criteriosBusca || {}
  );

  const { data, isLoading } = useQuery(
    ["pesquisar-contas", { pagina, criteriosBusca }],
    async () => await pesquisarContasPaginaPorCriterio(pagina, criteriosBusca),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops!: ${error.response?.data?.message}`);
      },
    }
  );

  const { register, reset, handleSubmit } = useForm<ContaCriterioPesquisa>({});
  useEffect(() => {
    guardarConfiguracoesPaginaPorChave(chave, { criteriosBusca, pagina });
    reset(criteriosBusca);
  }, [pagina, criteriosBusca]);

  const contas: ContaVisualizada[] = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Formulario>
        <FormularioPesquisa
          onSubmit={handleSubmit((criterios: ContaCriterioPesquisa) => {
            setCriteriosBusca(criterios);
            comecarPelaPrimeiraPagina();
          })}
          register={register}
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
        {contas?.map((conta: ContaVisualizada) => (
          <ListaContas key={conta.id} conta={conta} />
        ))}
      </CardList>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={contas}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Fluxo.Container>
  );
};
