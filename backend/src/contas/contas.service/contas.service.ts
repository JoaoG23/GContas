import { Injectable, NotFoundException } from '@nestjs/common';

import { CriptografiaCryptoInterface } from 'src/utils/criptografias/CriptografiaCrypto/interfaces/CriptografiaCryptoInterface';
import { ContasRepositoriesInterface } from '../interfaces/ContasRepositoriesInterface';
import { ContasVisualizadaPaginacao } from '../interfaces/ContasVisualizadaPaginacao';
import { VisualizarConta } from '../interfaces/VisualizarConta';

import { CriarContaBodyDto } from '../contas.dto/CriarContaBodyDto';
import { CriteriosDePesquisaContaDto } from '../contas.dto/CriteriosDePesquisaContaDto';

@Injectable()
export class ContasService {
  constructor(
    private readonly contasRepositories: ContasRepositoriesInterface,
    private readonly criptografia: CriptografiaCryptoInterface,
  ) {}

  async validarNaoExisteId(id: number) {
    const existeLogin = await this.contasRepositories.buscarUmPorId(id);
    if (!existeLogin) {
      throw new NotFoundException('Esse id não existe');
    }
  }

  async criarUm(conta: CriarContaBodyDto) {
    const contaComAlgunsDadosCriptografados = {
      ...conta,
      senha: await this.criptografia.criptografar(conta.senha),
      login: await this.criptografia.criptografar(conta.login),
      email: await this.criptografia.criptografar(conta.email || ''),
    };

    return await this.contasRepositories.salvar(
      contaComAlgunsDadosCriptografados,
    );
  }

  async criarVarias(contas: CriarContaBodyDto[]) {
    for (const conta of contas) {
      const contaComAlgunsDadosCriptografados = {
        ...conta,
        titulo: conta.instituacao,
        senha: await this.criptografia.criptografar(conta.senha),
        login: await this.criptografia.criptografar(conta.login),
        email: await this.criptografia.criptografar(conta.email || ''),
      };
      await this.contasRepositories.salvar(contaComAlgunsDadosCriptografados);
    }
  }

  async deletarUmPorId(id: number) {
    await this.validarNaoExisteId(id);
    return await this.contasRepositories.deletarUmPorId(id);
  }

  async editarUmPorId(id: number, conta: CriarContaBodyDto) {
    await this.validarNaoExisteId(id);
    const contaComAlgunsDadosCriptografados = {
      ...conta,
      senha: await this.criptografia.criptografar(conta.senha),
      login: await this.criptografia.criptografar(conta.login),
      email: await this.criptografia.criptografar(conta.email || ''),
    };

    return await this.contasRepositories.editarUmPorId(
      id,
      contaComAlgunsDadosCriptografados,
    );
  }

  async buscarUmPorId(id: number) {
    await this.validarNaoExisteId(id);
    const conta = await this.contasRepositories.buscarUmPorId(id);
    return {
      ...conta,
      senha: await this.criptografia.descriptografar(conta.senha),
      login: await this.criptografia.descriptografar(conta.login),
      email: await this.criptografia.descriptografar(conta.email),
    };
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    const paginacao: ContasVisualizadaPaginacao =
      await this.contasRepositories.buscarTodosPorPagina(
        numeroPagina,
        quantidadeItemsPagina,
      );

    const configuracoesPagina = paginacao[0];
    const itemsCriptografados = paginacao[1] || [];

    const itemsPaginaDescriptografados = itemsCriptografados?.map(
      (conta: VisualizarConta) => {
        return {
          ...conta,
          senha: this.criptografia.descriptografar(conta.senha),
          login: this.criptografia.descriptografar(conta.login),
          email: this.criptografia.descriptografar(conta.email),
        };
      },
    );
    return [configuracoesPagina, itemsPaginaDescriptografados];
  }

  async pesquisarCriteriosPorPagina(
    criteriosDeBusca: CriteriosDePesquisaContaDto,
  ) {
    const paginacao: ContasVisualizadaPaginacao =
      await this.contasRepositories.pesquisarCriteriosPorPagina(
        criteriosDeBusca,
      );

    const configuracoesPagina = paginacao[0];
    const itemsCriptografados = paginacao[1] || [];

    const itemsPaginaDescriptografados = itemsCriptografados?.map(
      (conta: VisualizarConta) => {
        return {
          ...conta,
          senha: this.criptografia.descriptografar(conta.senha),
          login: this.criptografia.descriptografar(conta.login),
          email: this.criptografia.descriptografar(conta.email),
        };
      },
    );
    return [configuracoesPagina, itemsPaginaDescriptografados];
  }

  async pesquisarPorCriterios(criteriosDeBusca: CriteriosDePesquisaContaDto) {
    const contas = await this.contasRepositories.pesquisarPorCriterios(
      criteriosDeBusca,
    );

    const contasDescritografadas = contas?.map((conta: VisualizarConta) => {
      return {
        ...conta,
        senha: this.criptografia.descriptografar(conta.senha),
        login: this.criptografia.descriptografar(conta.login),
        email: this.criptografia.descriptografar(conta.email),
      };
    });

    return contasDescritografadas;
  }
}
