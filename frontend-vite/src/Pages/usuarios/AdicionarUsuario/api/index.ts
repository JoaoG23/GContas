import { endpoint } from "../../../../services/endpoint";
import { UsuarioCriado } from "../../../../types/usuario/Usuario";

export async function adicionarUsuario(usuario: UsuarioCriado) {
  const resposta = await endpoint.post(`/usuarios`, usuario);
  return resposta;
}
