import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { listarTodosUsuarioPorPagina } from "./api";

import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { PaginacaoComum } from "../../../Components/paginacoes/Paginacao";
import { ListaUsuarios } from "../ComponentesParaTodos/tabela/Linha/Linha";
import ButtonDefault from "../../../Components/Buttons/ButtonDefault/ButtonDark";
import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";
import { CardList } from "../../../Components/cards/CardList";

import { ContaCriterioPesquisa } from "../../../types/conta/ContaCriterioPesquisa";
import { ContaVisualizada } from "../../../types/conta/ContaVisualizada";
import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";
import { UsuarioVisualizado } from "../../../types/usuario/Usuario";

export const TodosUsuarios: React.FC = () => {
  const navigate = useNavigate();
  const [pagina, setPagina] = useState<number>(1);
  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const { data, isLoading } = useQuery(
    ["pagina-usuario-pagina", pagina],
    () => listarTodosUsuarioPorPagina(pagina),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops!: ${error.response?.data?.message}`);
      },
    }
  );

  useEffect(() => {}, [pagina]);

  const usuarios = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}
   
      <Fluxo.Header>
        <h2>Seus Usuários</h2>
        <Fluxo.ContainerButtons>
          <ButtonDefault onClick={() => navigate("adicionar")}>
            <p>Adicionar</p>
            <IoMdAddCircle size={20} />
          </ButtonDefault>
        </Fluxo.ContainerButtons>
      </Fluxo.Header>

      <CardList>
        {usuarios?.map((usuario: UsuarioVisualizado) => (
          <ListaUsuarios key={usuario.id} usuario={usuario} />
        ))}
      </CardList>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={usuarios}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Fluxo.Container>
  );
};
