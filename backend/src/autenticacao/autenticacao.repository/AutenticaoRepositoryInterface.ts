import { UsuarioDto } from "../autenticacao.dto/UsuarioDto";

export interface AutenticaoRepositoryInterface {
  save(usuario: UsuarioDto);
  findByEmail(email: string);
  findByUsername(username: string);
}
