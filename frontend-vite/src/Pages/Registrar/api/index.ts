import { endpoint } from "../../../services/endpoint";

import { Usuario } from "../../../types/usuario/Usuario";

export async function registrarUsuario(dados: Usuario) {
  const resposta = await endpoint.post(`/ap/usuarios`, dados);
  return resposta;
}
