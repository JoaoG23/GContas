import { Injectable, NotFoundException } from '@nestjs/common';

import { InstituicoesRepositoriesInterface } from 'src/instituicoes/instituicoes.repository/instituicoes.repository.Interface';

import { ValidacaoInstituicoesServiceInteface } from './validacao.instituicoes.service.inteface';

@Injectable()
export class ValidacaoInstituicoesService
  implements ValidacaoInstituicoesServiceInteface
{
  constructor(
    private readonly instituicoesRepositories: InstituicoesRepositoriesInterface,
  ) {}

  async validarNaoExisteId(id: number) {
    const existeId = await this.instituicoesRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe');
    }
  }
}
