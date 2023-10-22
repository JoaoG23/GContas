import { Injectable, NotFoundException } from '@nestjs/common';

import { InstituicaoCriadaDto } from '../instituicoes.dto/InstituicaoCriada';
import { InstituicaoEditadaDto } from '../instituicoes.dto/InstituicaoEditada';

import { InstituicoesRepositoriesInterface } from '../instituicoes.repository/instituicoes.repository.Interface';
import { CriterioDePesquisaInstituicaoDto } from '../instituicoes.dto/InstituicaoPesquisa';

@Injectable()
export class InstituicoesService {
  constructor(
    private readonly instituicoesRepositories: InstituicoesRepositoriesInterface,
  ) {}

  async validarNaoExisteId(id: number) {
    const existeLogin = await this.instituicoesRepositories.buscarUmPorId(id);
    if (!existeLogin) {
      throw new NotFoundException('Esse id não existe');
    }
  }

  async criarUm(instituicao: InstituicaoCriadaDto) {
    return await this.instituicoesRepositories.salvar(instituicao);
  }

  async deletarUmPorId(id: number) {
    await this.validarNaoExisteId(id);
    return await this.instituicoesRepositories.deletarUmPorId(id);
  }

  async editarUmPorId(id: number, instituicao: InstituicaoEditadaDto) {
    await this.validarNaoExisteId(id);
    return await this.instituicoesRepositories.editarUmPorId(id, instituicao);
  }

  async buscarUmPorId(id: number) {
    return await this.instituicoesRepositories.buscarUmPorId(id);
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    return await this.instituicoesRepositories.buscarTodosPorPagina(
      numeroPagina,
      quantidadeItemsPagina,
    );
  }

  async pesquisarCriteriosPorPagina(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  ) {
    return await this.instituicoesRepositories.pesquisarCriteriosPorPagina(
      criteriosDeBusca,
    );
  }

  async pesquisarPorCriterios(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  ) {
    return await this.instituicoesRepositories.pesquisarPorCriterios(
      criteriosDeBusca,
    );
  }
}
