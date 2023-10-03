import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  Query,
} from '@nestjs/common';

import { ContasService } from '../contas.service/contas.service';

import { CriarContaBodyDto } from '../contas.dto/CriarContaBodyDto';
import { CriteriosDePesquisaContaDto } from '../contas.dto/CriteriosDePesquisaContaDto';

@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post()
  async criarUm(@Body() conta: CriarContaBodyDto) {
    return await this.contasService.criarUm(conta);
  }

  @Post('varias')
  async criarVarias(@Body() contas: CriarContaBodyDto[]) {
    return await this.contasService.criarVarias(contas);
  }
  @Get('paginas')
  async buscarTodosPorPagina(
    @Query('numero_pagina') numero_pagina,
    @Query('quantidade_items') quantidade_items,
  ) {
    return await this.contasService.buscarTodosPorPagina(
      numero_pagina,
      quantidade_items,
    );
  }
  @Get('pesquisar/paginas')
  async pesquisarCriteriosPorPagina(@Query() criteriosDeBusca) {
    const criteriosBuscarService: CriteriosDePesquisaContaDto = {
      ...criteriosDeBusca,
      numeroPagina: criteriosDeBusca.numero_pagina,
      quantidadeItemsPagina: criteriosDeBusca.quantidade_items,
    };

    return await this.contasService.pesquisarCriteriosPorPagina(
      criteriosBuscarService,
    );
  }

  @Get('pesquisar')
  async pesquisarPorCriterios(@Query() criteriosDeBusca) {
    const criteriosBuscarService: CriteriosDePesquisaContaDto = {
      ...criteriosDeBusca,
    };

    return await this.contasService.pesquisarPorCriterios(
      criteriosBuscarService,
    );
  }

  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    const idInteiro = Number(id);
    return await this.contasService.buscarUmPorId(idInteiro);
  }

  @Put(':id')
  async editarUmPorId(
    @Param('id') id: string,
    @Body() conta: CriarContaBodyDto,
  ) {
    const idInteiro = Number(id);
    return await this.contasService.editarUmPorId(idInteiro, conta);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    const idInteiro = Number(id);
    return await this.contasService.deletarUmPorId(idInteiro);
  }
}
