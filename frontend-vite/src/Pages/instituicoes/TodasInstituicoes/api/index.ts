import { endpoint } from "../../../../services/endpoint";

import { InstituicaoPesquisada } from "../../../../types/instituicao/InstituicaoPesquisada";

export async function pesquisarInstituicoesPaginaPorCriterio(
  numero_pagina: number,
  criteriosBusca: InstituicaoPesquisada
) {
  const { nome } = criteriosBusca;
  const resposta = await endpoint.get(`/instituicoes/pesquisar/paginas`, {
    params: {
      numero_pagina,
      quantidade_items: 5,
      nome,
    },
  });
  return resposta;
}
