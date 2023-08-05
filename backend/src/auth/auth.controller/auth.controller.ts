import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { CriarUsuariosBodyDto } from 'src/usuarios/usuarios.dto/CriarUsuarioBodyDto';

import { Public } from '../constants/SetMetadata';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async logar(@Body() usuario: CriarUsuariosBodyDto) {
    const { email, senha } = usuario;
    return await this.authService.validarLogin(email, senha);
  }

}
