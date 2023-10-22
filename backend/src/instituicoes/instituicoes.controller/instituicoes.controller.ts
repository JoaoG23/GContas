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

import { InstituicoesService } from '../instituicoes.service/instituicoes.service';
import { InstituicaoCriadaDto } from '../instituicoes.dto/InstituicaoCriada';
import { InstituicaoEditadaDto } from '../instituicoes.dto/InstituicaoEditada';

@Controller('instituicoes')
export class InstituicoesController {
  constructor(private readonly instituicoesService: InstituicoesService) {}

  @Get('paginas')
  async buscarTodosPorPagina(
    @Query('numero_pagina') numero_pagina,
    @Query('quantidade_items') quantidade_items,
  ) {
    return await this.instituicoesService.buscarTodosPorPagina(
      numero_pagina,
      quantidade_items,
    );
  }
  @Get('pesquisar/paginas')
  async pesquisarCriteriosPorPagina(@Query() criteriosDeBusca) {
    const criteriosBuscarService: any = {
      ...criteriosDeBusca,
      numeroPagina: criteriosDeBusca.numero_pagina,
      quantidadeItemsPagina: criteriosDeBusca.quantidade_items,
    };

    return await this.instituicoesService.pesquisarCriteriosPorPagina(
      criteriosBuscarService,
    );
  }

  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    const idInteiro = Number(id);
    return await this.instituicoesService.buscarUmPorId(idInteiro);
  }

  @Post()
  async criarUm(@Body() instituicoes: InstituicaoCriadaDto) {
    return await this.instituicoesService.criarUm(instituicoes);
  }

  @Put(':id')
  async editarUmPorId(
    @Param('id') id: string,
    @Body() instituicoes: InstituicaoEditadaDto,
  ) {
    const idInteiro = Number(id);
    return await this.instituicoesService.editarUmPorId(
      idInteiro,
      instituicoes,
    );
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    const idInteiro = Number(id);
    return await this.instituicoesService.deletarUmPorId(idInteiro);
  }
}
