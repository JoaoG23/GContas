import { PassportStrategy } from '@nestjs/passport';

import { UnauthorizedException } from '@nestjs/common';

import { Strategy } from 'passport-jwt';
import { AutenticacaoService } from '../autenticacao.service/autenticacao.service';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AutenticacaoService) {
    super();
  }

  async validate(usuario: string, senha: string) {
    const usuarioValidado = await this.authService.validarUsuario(
      usuario,
      senha,
    );

    if (!usuarioValidado) {
      throw new UnauthorizedException();
    }
  }
}
