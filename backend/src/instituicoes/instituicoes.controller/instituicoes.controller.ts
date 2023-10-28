import { FileInterceptor } from '@nestjs/platform-express';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  Query,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { InstituicoesService } from '../instituicoes.service/instituicoes.service';
import { InstituicaoCriadaDto } from '../instituicoes.dto/InstituicaoCriada';
import { InstituicaoEditadaDto } from '../instituicoes.dto/InstituicaoEditada';

import { multerConfigUploadLogo } from '../instituicoes.utils/multer/multerConfigUploadLogo';

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
  @Get('logo/:logoname')
  async buscarLogomarcaPorLogoname(
    @Res() res: Response,
    @Param('logoname') logoname: string,
  ) {
    res.sendFile(logoname, { root: './uploads/logos' });
  }

  @Post()
  @UseInterceptors(FileInterceptor('logo', multerConfigUploadLogo()))
  async criarUm(
    @Body() instituicoes: InstituicaoCriadaDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { nome } = instituicoes;
    const instituicaoComImage = {
      nome,
      image: file?.filename,
    };

    return await this.instituicoesService.criarUm(instituicaoComImage);
  }

  // @Post('upload/logo')
  // @UseInterceptors(FileInterceptor('logo', multerConfig()))
  // async uploadLogo(
  //   @Res() res: Response,
  //   @UploadedFile() file: Express.Multer.File,
  // ) {
  //   if (!file) {
  //     throw new BadRequestException('Arquivo não é imagem');
  //   }
  //   return res.sendFile(file.filename, { root: './uploads/logos' });
  // }

  @Put('logo/:id')
  @UseInterceptors(FileInterceptor('logo', multerConfigUploadLogo()))
  async editarInstituicaoELogoPorPorId(
    @Param('id') id: string,
    @Body() instituicoes: InstituicaoEditadaDto,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    const idInteiro = Number(id);
    const nomeImagem = file?.filename;

    const { nome } = instituicoes;
    const instituicaoComImage = {
      nome,
      image: nomeImagem,
    };

    return await this.instituicoesService.editarInstituicaoELogoPorId(
      idInteiro,
      instituicaoComImage,
    );
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    const idInteiro = Number(id);
    return await this.instituicoesService.deletarUmPorId(idInteiro);
  }
}
