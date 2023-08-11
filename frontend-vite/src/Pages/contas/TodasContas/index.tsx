import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { pesquisarContasPaginaPorCriterio } from "./api";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { ListaContas } from "../ComponentesParaTodos/tabela/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";

import { ContaCriterioPesquisa } from "../../../types/conta/ContaCriterioPesquisa";
import { ContaVisualizada } from "../../../types/conta/ContaVisualizada";
import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";
import { CardList } from "../../../Components/cards/CardList";

export const TodosContas: React.FC = () => {
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
    async () => await pesquisarContasPaginaPorCriterio(pagina, criteriosBusca),
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

  const contas = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
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
      {isLoading && <SpinnerCarregamento />}
      <Fluxo.Header>
        <h2>Suas senhas</h2>
        <Fluxo.ContainerButtons>
          <ButtonDefault onClick={() => navigate("adicionar")}>
            <>Adicionar</>
            <IoMdAddCircle />
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
