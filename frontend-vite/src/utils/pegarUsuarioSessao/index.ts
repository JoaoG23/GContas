import { RespostaAutenticacao } from "../../types/autenticacao/RespostaAutenticacao";

export async function pegarUsuarioSessao(
  respostaAutenticacao: RespostaAutenticacao
) {
  const { usuario_nome, access_token } = respostaAutenticacao;
  const idUsuario = localStorage.setItem("id", "");
  const nomeUsuario = localStorage.setItem("nome", usuario_nome!);
  const tokenSessao = localStorage.setItem("token", access_token!);

  return { idUsuario, nomeUsuario, tokenSessao };
}
