import { endpoint } from "../../../../services/endpoint";

export async function deletarInstituicaoPorId(id: string) {
  const resposta = await endpoint.delete(`/instituicoes/${id}`);
  return resposta;
}
