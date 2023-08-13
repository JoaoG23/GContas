import { endpoint } from "../../../../services/endpoint";

export async function listarTodosUsuarioPorPagina(
  numero_pagina: number,
) {
  const resposta = await endpoint.get(`/usuarios`, {
    params: {
      numero_pagina,
      quantidade_items: 10,
    },
  });
  return resposta;
}
