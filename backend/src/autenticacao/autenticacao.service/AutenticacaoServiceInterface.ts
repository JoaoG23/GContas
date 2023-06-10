import { UsuarioDto } from '../autenticacao.dto/UsuarioDto';

export interface AutenticacaoServiceInterface {
  criarUm(usuario: UsuarioDto);
  validarUsuario(usuario: string, senha: string);
  logar(dadosAutenticacao: any);
  atualizacaoSenha(atualizacao: object);
}
