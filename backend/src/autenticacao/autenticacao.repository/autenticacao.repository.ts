import { Injectable, ConflictException } from '@nestjs/common';

// import { PrismaService } from 'src/database/PrismaService';

import { UsuarioDto } from '../autenticacao.dto/UsuarioDto';

import { AutenticaoRepositoryInterface } from './AutenticaoRepositoryInterface';

@Injectable()
export class AutenticaoRepository implements AutenticaoRepositoryInterface {
  //   constructor(private prisma: PrismaService) {}

  async findByUsername(username: string) {
    throw new Error('Method not implemented.');
  }
  async save(usuario: UsuarioDto) {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string) {
    throw new Error('Method not implemented.');
  }
}
