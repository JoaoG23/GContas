import { Injectable } from '@nestjs/common';
import { removerArquivo } from 'src/utils/arquivos/removerArquivo/removerArquivo';

import { InstituicoesRepositoriesInterface } from 'src/instituicoes/instituicoes.repository/instituicoes.repository.Interface';

import { ValidacaoInstituicoesServiceInteface } from '../validacao.instituicoes.service/validacao.instituicoes.service.inteface';
import { RemocaoInstituicoesServiceInterface } from './remocao.instituicoes.service.interface';

import { Instituicao } from 'src/instituicoes/instituicoes.dto/Instituicao';

import { retornaCaminhoUploadLogos } from 'src/instituicoes/instituicoes.utils/retornaCaminhoUploadLogos/retornaCaminhoUploadLogos';

@Injectable()
export class RemocaoInstituicoesService
  implements RemocaoInstituicoesServiceInterface
{
  constructor(
    private readonly instituicoesRepositories: InstituicoesRepositoriesInterface,
    private readonly validacaoService: ValidacaoInstituicoesServiceInteface,
  ) {}

  async deletarUmPorId(id: number) {
    await this.validacaoService.validarNaoExisteId(id);

    const instituicaoDeletada: Instituicao =
      await this.instituicoesRepositories.deletarUmPorId(id);
    const imageADeletar: string = instituicaoDeletada?.image;

    const uploadLogoCaminho = retornaCaminhoUploadLogos();
    const logoARemover = `${uploadLogoCaminho}/${imageADeletar}`;
    await removerArquivo(logoARemover);

    return instituicaoDeletada;
  }
}
