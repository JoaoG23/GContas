import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';

import { CriarContaBodyDto } from '../contas.dto/CriarContaBodyDto';
import { CriteriosDePesquisaContaDto } from '../contas.dto/CriteriosDePesquisaContaDto';

import { ContasRepositoriesInterface } from '../interfaces/ContasRepositoriesInterface';

@Injectable()
export class ContasRepositories implements ContasRepositoriesInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async contarTodos() {
    return await this.prismaService.contas.count({});
  }

  async contarTodosPorCriterio(criteriosDeBusca: CriteriosDePesquisaContaDto) {
    const { login, instituacao, titulo } = criteriosDeBusca;
    const contagem: number = await this.prismaService.contas.count({
      where: {
        AND: [
          {
            instituacao: {
              contains: instituacao,
            },
          },
          {
            login: {
              contains: login,
            },
          },
          {
            titulo: {
              contains: titulo,
            },
          },
        ],
      },
    });

    return contagem;
  }

  async pesquisarPorCriterios(criteriosDeBusca: CriteriosDePesquisaContaDto) {
    const { instituacao, login, titulo } = criteriosDeBusca;

    return await this.prismaService.contas.findMany({
      where: {
        AND: [
          {
            instituacao: {
              contains: instituacao,
            },
          },
          {
            login: {
              contains: login,
            },
          },
          {
            titulo: {
              contains: titulo,
            },
          },
        ],
      },
      select: {
        id: true,
        titulo: true,
        instituacao: true,
        login: true,
        senha: true,
        email: true,
        observacoes: true,
      },
    });
  }

  async pesquisarCriteriosPorPagina(
    criteriosDeBusca: CriteriosDePesquisaContaDto,
  ) {
    const { numeroPagina, quantidadeItemsPagina, instituacao, login, titulo } =
      criteriosDeBusca;

    const quantidadeTotalRegistros = await this.contarTodosPorCriterio(
      criteriosDeBusca,
    );
    const itemsPorPagina = Number(quantidadeItemsPagina);

    const totalQuantidadePaginas = await calcularQuantidadePaginas(
      itemsPorPagina,
      quantidadeTotalRegistros,
    );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.contas.findMany({
      where: {
        AND: [
          {
            instituacao: {
              contains: instituacao,
            },
          },
          {
            login: {
              contains: login,
            },
          },
          {
            titulo: {
              contains: titulo,
            },
          },
        ],
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
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

    const itemsPagina = await this.prismaService.contas.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarUmPorId(id: number) {
    const conta = await this.prismaService.contas.findFirst({
      where: { id },
    });
    return conta ? conta : null;
  }

  async deletarUmPorId(id: number) {
    return await this.prismaService.contas.delete({
      where: { id },
    });
  }

  async editarUmPorId(id: number, conta: CriarContaBodyDto) {
    return await this.prismaService.contas.update({
      where: { id },
      data: conta,
    });
  }

  async salvar(conta: CriarContaBodyDto) {
    return await this.prismaService.contas.create({
      data: conta,
    });
  }
}
