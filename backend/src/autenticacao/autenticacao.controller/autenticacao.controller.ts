import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { AutenticacaoServiceInterface } from '../autenticacao.service/AutenticacaoServiceInterface';

import { UsuarioDto } from '../autenticacao.dto/UsuarioDto';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(
    private readonly autenticacaoService: AutenticacaoServiceInterface,
  ) {}

  @Post('/registrar')
  @HttpCode(201)
  registrarUsuario(@Body() usuario: UsuarioDto) {
    return this.autenticacaoService.criarUm(usuario);
  }

  // @Get()
  // listaTodosUsuarios() {
  //   return this.usuariosService.listarTodos();
  // }

  // @Get(':id')
  // listaUmLivro(@Param('id') id: string) {
  //   return this.usuariosService.listarUmPeloId(id);
  // }
  // @Delete(':id')
  // deletarUmUsuario(@Param('id') id: string) {
  //   return this.usuariosService.deletarPeloId(id);
  // }

  // @Put(':id')
  // atualizarUmUsuario(@Param('id') id: string, @Body() data: UsuarioDTO) {
}
