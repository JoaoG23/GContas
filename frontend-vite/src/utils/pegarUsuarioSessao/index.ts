import { RespostaAutenticacao } from "../../types/autenticacao/RespostaAutenticacao";

export async function pegarUsuarioSessao(
  respostaAutenticacao: RespostaAutenticacao
) {
  const { usuario_nome, access_token } = respostaAutenticacao;
  const idUsuario = sessionStorage.setItem("id", "");
  const nomeUsuario = sessionStorage.setItem("nome", usuario_nome!);
  const tokenSessao = sessionStorage.setItem("token", access_token!);

  return { idUsuario, nomeUsuario, tokenSessao };
}
