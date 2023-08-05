import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validarLogin(email, senhaValidada) {
    const usuario = await this.usuariosService.buscarUmPorEmail(email);
    if (usuario?.senha !== senhaValidada) {
      throw new UnauthorizedException();
    }
    const payload = { sub: usuario.id, email: usuario.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
