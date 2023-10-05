import { endpoint } from "../../../../services/endpoint";
import { ContaCriterioPesquisa } from "../../../../types/conta/ContaCriterioPesquisa";

export async function pesquisarContaPorCriterio(
  criteriosBusca: ContaCriterioPesquisa
) {
  const { instituacao, titulo, login } = criteriosBusca;
  const resposta = await endpoint.get(`/contas/pesquisar`, {
    params: {
      instituacao,
      titulo,
      login,
    },
  });
  return resposta;
}
