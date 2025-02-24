import { endpoint } from "../../../../services/endpoint";

export async function buscarTodasInstituicoes() {
  const resposta = await endpoint.get(`/instituicoes`);
  return resposta;
}
