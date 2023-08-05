import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from '../usuarios.service/usuarios.service';

import { CriarUsuariosBodyDto } from '../usuarios.dto/CriarUsuarioBodyDto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criarUm(@Body() usuario: CriarUsuariosBodyDto) {
    return await this.usuariosService.criarUm(usuario);
  }
}
