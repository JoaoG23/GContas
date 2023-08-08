import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { CriarUsuariosBodyDto } from '../usuarios.dto/CriarUsuarioBodyDto';

import { UsuariosRepositoriesInterface } from '../interfaces/UsuariosRepositoriesInterface';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly usuariosRepositories: UsuariosRepositoriesInterface,
  ) {}

  async validarSeExisteLogin(login: string) {
    const existeLogin = await this.usuariosRepositories.buscarUmPorLogin(login);
    if (existeLogin) {
      throw new ConflictException('Esse login já existe no sistema');
    }
  }
  async validarNaoExisteId(id: number) {
    const existeId = await this.usuariosRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }

  async criarUm(usuario: CriarUsuariosBodyDto) {
    const { login } = usuario;
    await this.validarSeExisteLogin(login);
    return await this.usuariosRepositories.salvar(usuario);
  }

  async deletarUmPorId(id: number) {
    await this.validarNaoExisteId(id);
    return await this.usuariosRepositories.deletarUmPorId(id);
  }

  async buscarUmPorLogin(login: string) {
    return await this.usuariosRepositories.buscarUmPorLogin(login);
  }
  async buscarUmPorId(id: number) {
    return await this.usuariosRepositories.buscarUmPorId(id);
  }
  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    return await this.usuariosRepositories.buscarTodosPorPagina(
      numeroPagina,
      quantidadeItemsPagina,
    );
  }
}
