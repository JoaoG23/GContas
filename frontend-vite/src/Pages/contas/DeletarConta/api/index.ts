import { endpoint } from "../../../../services/endpoint";

export async function deletarContaPorId(id: string) {
  const resposta = await endpoint.delete(`/contas/${id}`);
  return resposta;
}
