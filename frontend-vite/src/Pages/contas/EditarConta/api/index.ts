import { endpoint } from "../../../../services/endpoint";
import { ContaCriada } from "../../../../types/conta/ContaCriada";

export async function editarContaPorId(id: string, conta: ContaCriada) {
  const resposta = await endpoint.put(`/contas/${id}`, conta);
  return resposta;
}

export async function buscarContaPorId(id: string) {
  const resposta = await endpoint.get(`/contas/${id}`);
  return resposta;
}
