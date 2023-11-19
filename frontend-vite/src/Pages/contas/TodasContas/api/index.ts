import { endpoint } from "../../../../services/endpoint";
import { ContaCriterioPesquisa } from "../../../../types/conta/ContaCriterioPesquisa";

export async function pesquisarContasPaginaPorCriterio(
  numero_pagina: number,
  criteriosBusca: ContaCriterioPesquisa
) {
  const { instituicoes, titulo, login } = criteriosBusca;
  const resposta = await endpoint.get(`/contas/pesquisar/paginas`, {
    params: {
      numero_pagina,
      quantidade_items: 3,
      instituicoes,
      titulo,
      login,
    },
  });
  return resposta;
}
