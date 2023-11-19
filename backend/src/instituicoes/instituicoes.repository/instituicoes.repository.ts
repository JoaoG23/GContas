import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';

import { InstituicoesRepositoriesInterface } from './instituicoes.repository.Interface';

import { CriterioDePesquisaInstituicaoDto } from '../instituicoes.dto/InstituicaoPesquisa';
import { InstituicaoCriadaDto } from '../instituicoes.dto/InstituicaoCriada';
import { InstituicaoEditadaDto } from '../instituicoes.dto/InstituicaoEditada';

@Injectable()
export class InstituicoesRepositories
  implements InstituicoesRepositoriesInterface
{
  constructor(private readonly prismaService: PrismaService) {}

  async contarTodosPorCriterio(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  ) {
    const { nome } = criteriosDeBusca;

    const contagem: number = await this.prismaService.instituicoes.count({
      where: {
        nome: {
          contains: nome,
        },
      },
    });
    return contagem;
  }

  async contarTodos() {
    return await this.prismaService.instituicoes.count({});
  }

  async pesquisarCriteriosPorPagina(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  ) {
    const { numeroPagina, quantidadeItemsPagina, nome } = criteriosDeBusca;

    const quantidadeTotalRegistros: number = await this.contarTodosPorCriterio(
      criteriosDeBusca,
    );
    const itemsPorPagina = Number(quantidadeItemsPagina);

    const totalQuantidadePaginas: number = calcularQuantidadePaginas(
      itemsPorPagina,
      quantidadeTotalRegistros,
    );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.instituicoes.findMany({
      where: {
        nome: {
          contains: nome,
        },
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarTodos() {
    return await this.prismaService.instituicoes.findMany({
      select: {
        id: true,
        nome: true,
        image: true,
      },
    });
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    const quantidadeTotalRegistros = await this.contarTodos();
    const itemsPorPagina = Number(quantidadeItemsPagina);

    const totalQuantidadePaginas = await calcularQuantidadePaginas(
      quantidadeTotalRegistros,
      itemsPorPagina,
    );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.instituicoes.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarUmPorId(id: number) {
    const instituicoes = await this.prismaService.instituicoes.findFirst({
      where: { id },
    });
    return instituicoes ? instituicoes : null;
  }

  async deletarUmPorId(id: number) {
    return await this.prismaService.instituicoes.delete({
      where: { id },
    });
  }

  async editarUmPorId(id: number, instituicoes: InstituicaoEditadaDto) {
    return await this.prismaService.instituicoes.update({
      where: { id },
      data: instituicoes,
    });
  }

  async salvar(instituicoes: InstituicaoCriadaDto) {
    return await this.prismaService.instituicoes.create({
      data: instituicoes,
    });
  }
}
