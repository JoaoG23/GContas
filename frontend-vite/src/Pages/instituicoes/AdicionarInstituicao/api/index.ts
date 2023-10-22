import { endpoint } from "../../../../services/endpoint";
import { ContaCriada } from "../../../../types/conta/ContaCriada";

export async function adicionarConta(conta: ContaCriada) {
  const resposta = await endpoint.post(`/contas`, conta);
  return resposta;
}
