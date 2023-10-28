import { Injectable } from '@nestjs/common';

import { InstituicaoCriadaDto } from '../instituicoes.dto/InstituicaoCriada';
import { InstituicaoEditadaDto } from '../instituicoes.dto/InstituicaoEditada';
import { CriterioDePesquisaInstituicaoDto } from '../instituicoes.dto/InstituicaoPesquisa';

import { InstituicoesRepositoriesInterface } from '../instituicoes.repository/instituicoes.repository.Interface';

import { EdicaoInstituicoesServiceInterface } from './edicao.instituicoes.service/edicao.instituicoes.service.interface';
import { RemocaoInstituicoesServiceInterface } from './remocao.instituicoes.service/remocao.instituicoes.service.interface';
import { CriacaoInstituicoesServiceInterface } from './criacao.instituicoes.service/criacao.instituicoes.service.interface';

@Injectable()
export class InstituicoesService {
  constructor(
    private readonly instituicoesRepositories: InstituicoesRepositoriesInterface,
    private readonly edicaoSerivce: EdicaoInstituicoesServiceInterface,
    private readonly remocaoService: RemocaoInstituicoesServiceInterface,
    private readonly criacaoService: CriacaoInstituicoesServiceInterface,
  ) {}

  async criarUm(instituicao: InstituicaoCriadaDto) {
    return await this.criacaoService.criarUm(instituicao);
  }

  async deletarUmPorId(id: number) {
    return await this.remocaoService.deletarUmPorId(id);
  }

  async editarInstituicaoELogoPorId(
    id: number,
    instituicao: InstituicaoEditadaDto,
  ) {
    this.edicaoSerivce.editarInstituicaoELogoPorId(id, instituicao);
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
}
