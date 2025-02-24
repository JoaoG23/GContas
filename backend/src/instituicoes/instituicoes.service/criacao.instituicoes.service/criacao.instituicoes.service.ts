import { Injectable } from '@nestjs/common';

import { InstituicaoCriadaDto } from 'src/instituicoes/instituicoes.dto/InstituicaoCriada';

import { InstituicoesRepositoriesInterface } from 'src/instituicoes/instituicoes.repository/instituicoes.repository.Interface';

import { CriacaoInstituicoesServiceInterface } from './criacao.instituicoes.service.interface';

@Injectable()
export class CriacaoInstituicoesService
  implements CriacaoInstituicoesServiceInterface
{
  constructor(
    private readonly instituicoesRepositories: InstituicoesRepositoriesInterface,
  ) {}

  async tratarSeExisteImagem(imagem: string) {
    if (!imagem) {
      return null;
    }
    return imagem;
  }

  async criarUm(instituicao: InstituicaoCriadaDto) {
    await this.tratarSeExisteImagem(instituicao.image);
    return await this.instituicoesRepositories.salvar(instituicao);
  }
}
