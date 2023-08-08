import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../auth.service';

import { Public } from '../constants/SetMetadata';
import { AutenticacaoUsuario } from '../auth.dto/AutenticacaoUsuario';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async logar(@Body() autenticacaoUsuario: AutenticacaoUsuario) {
    const { login, senha } = autenticacaoUsuario;
    return await this.authService.validarLogin(login, senha);
  }
}
