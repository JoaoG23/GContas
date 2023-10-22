import { endpoint } from "../../../../services/endpoint";
import { ContaCriterioPesquisa } from "../../../../types/conta/ContaCriterioPesquisa";

export async function pesquisarInstituicoesPaginaPorCriterio(
  numero_pagina: number,
  criteriosBusca: ContaCriterioPesquisa
) {
  const { instituacao, titulo, login } = criteriosBusca;
  const resposta = await endpoint.get(`/instituicoes/pesquisar/paginas`, {
    params: {
      numero_pagina,
      quantidade_items: 3,
      instituacao,
      titulo,
      login,
    },
  });
  return resposta;
}
