import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsuariosService } from '../usuarios.service/usuarios.service';

import { CriarUsuariosBodyDto } from '../usuarios.dto/CriarUsuarioBodyDto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criarUm(@Body() usuario: CriarUsuariosBodyDto) {
    return await this.usuariosService.criarUm(usuario);
  }

  @Get()
  async buscarTodosPorPagina(
    @Query('numero_pagina') numero_pagina,
    @Query('quantidade_items') quantidade_items,
  ) {
    return await this.usuariosService.buscarTodosPorPagina(
      numero_pagina,
      quantidade_items,
    );
  }
  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    const idInteiro = Number(id);
    return await this.usuariosService.buscarUmPorId(idInteiro);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    const idInteiro = Number(id);
    return await this.usuariosService.deletarUmPorId(idInteiro);
  }
}
