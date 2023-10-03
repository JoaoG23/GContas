import { endpoint } from "../../../../services/endpoint";
import { ContaCriterioPesquisa } from "../../../../types/conta/ContaCriterioPesquisa";

import { buscaDadoUsuarioNaSessao } from "../../../../utils/buscaDadoUsuarioNaSessao";

export async function pesquisarContasPaginaPorCriterio(
  numero_pagina: number,
  criteriosBusca: ContaCriterioPesquisa
) {
  const { instituacao, titulo, login } = criteriosBusca;
  const resposta = await endpoint.get(`/contas/pesquisar/paginas`, {
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
