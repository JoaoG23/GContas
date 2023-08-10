import { endpoint } from "../../../services/endpoint";
import { LoginUsuario } from "../../../types/autenticacao/LoginUsuario";

export async function logarUsuario(usuarioLogin: LoginUsuario) {
  const resposta = await endpoint.post(`/auth/login`, usuarioLogin);
  return resposta;
}
