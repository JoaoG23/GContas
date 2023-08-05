import { Injectable } from '@nestjs/common';
import { CriarUsuariosBodyDto } from '../usuarios.dto/CriarUsuarioBodyDto';
import { UsuariosRepositoriesInterface } from '../interfaces/UsuariosRepositoriesInterface';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly usuariosRepositories: UsuariosRepositoriesInterface,
  ) {}

  async criarUm(usuario: CriarUsuariosBodyDto) {
    return await this.usuariosRepositories.salvar(usuario);
  }
  async buscarUmPorEmail(email: string) {
    return await this.usuariosRepositories.buscarUmPorEmail(email);
  }
}
