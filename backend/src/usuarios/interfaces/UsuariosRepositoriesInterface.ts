import { Injectable } from '@nestjs/common';
import { CriarUsuariosBodyDto } from '../usuarios.dto/CriarUsuarioBodyDto';

@Injectable()
export abstract class UsuariosRepositoriesInterface {
  abstract salvar(usuario: CriarUsuariosBodyDto);
  abstract buscarUmPorEmail(email: string);
  abstract buscarUmPorEmail(email: string);
}
