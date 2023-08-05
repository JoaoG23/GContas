import { Injectable } from '@nestjs/common';
import { CriarUsuariosBodyDto } from '../usuarios.dto/CriarUsuarioBodyDto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsuariosRepositories {
  constructor(private readonly prismaService: PrismaService) {}

  async salvar(usuario: CriarUsuariosBodyDto) {
    return await this.prismaService.usuarios.create({
      data: usuario,
    });
  }
  async buscarUmPorEmail(email: string) {
    return await this.prismaService.usuarios.findFirst({
      where: { email },
    });
  }
}
