import { Injectable } from '@nestjs/common';

import { AutenticaoRepositoryInterface } from '../autenticacao.repository/AutenticaoRepositoryInterface';

import { AutenticacaoServiceInterface } from './AutenticacaoServiceInterface';

import { JwtService } from '@nestjs/jwt';

import { UsuarioDto } from '../autenticacao.dto/UsuarioDto';

@Injectable()
export class AutenticacaoService implements AutenticacaoServiceInterface {
  constructor(
    private autenticacaoRepository: AutenticaoRepositoryInterface,
    private jwtService: JwtService,
  ) {}
  validarUsuario(usuario: string, senha: string) {
    // throw new Error('Method not implemented.');
    return false;
  }
  criarUm(usuario: UsuarioDto) {
    throw new Error('Method not implemented.');
  }
  logar(dadosAutenticacao: any) {
    const payload = {
      id: dadosAutenticacao.id,
      username: dadosAutenticacao.username,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
    // throw new Error('Method not implemented.');
  }
  atualizacaoSenha(atualizacao: object) {
    throw new Error('Method not implemented.');
  }
}
