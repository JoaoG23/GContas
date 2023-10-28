import { Injectable } from '@nestjs/common';

import { InstituicoesRepositoriesInterface } from 'src/instituicoes/instituicoes.repository/instituicoes.repository.Interface';

import { ValidacaoInstituicoesServiceInteface } from '../validacao.instituicoes.service/validacao.instituicoes.service.inteface';
import { EdicaoInstituicoesServiceInterface } from './edicao.instituicoes.service.interface';

import { Instituicao } from 'src/instituicoes/instituicoes.dto/Instituicao';
import { InstituicaoEditadaDto } from 'src/instituicoes/instituicoes.dto/InstituicaoEditada';

import { retornaCaminhoUploadLogos } from 'src/instituicoes/instituicoes.utils/retornaCaminhoUploadLogos/retornaCaminhoUploadLogos';

import { removerArquivo } from 'src/utils/arquivos/removerArquivo/removerArquivo';

@Injectable()
export class EdicaoInstituicoesService
  implements EdicaoInstituicoesServiceInterface
{
  constructor(
    private readonly instituicoesRepositories: InstituicoesRepositoriesInterface,
    private readonly validacaoService: ValidacaoInstituicoesServiceInteface,
  ) {}

  async atualizarLogomarcaPorIdInstituicao(
    id: number,
    instituicao: InstituicaoEditadaDto,
  ) {
    const instituicaoEncontrada: Instituicao =
      await this.instituicoesRepositories.buscarUmPorId(id);

    const uploadLogosCaminho = retornaCaminhoUploadLogos();
    const imagemAnterior: string = instituicaoEncontrada?.image;
    const logoARemover = `${uploadLogosCaminho}/${imagemAnterior}`;

    const instituicaoDeletada =
      await this.instituicoesRepositories.editarUmPorId(id, instituicao);

    await removerArquivo(logoARemover);
    return instituicaoDeletada;
  }

  async editarInstituicaoELogoPorId(
    id: number,
    instituicao: InstituicaoEditadaDto,
  ) {
    await this.validacaoService.validarNaoExisteId(id);
    const isImagemFoiAlterada = instituicao?.image;
    if (isImagemFoiAlterada) {
      return await this.atualizarLogomarcaPorIdInstituicao(id, instituicao);
    }
    return await this.instituicoesRepositories.editarUmPorId(id, instituicao);
  }
}
