import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller/usuarios.controller';

import { UsuariosService } from './usuarios.service/usuarios.service';

import { PrismaService } from 'src/database/prisma.service';

import { UsuariosRepositories } from './usuarios.repositories/usuarios.repositories';
import { UsuariosRepositoriesInterface } from './interfaces/UsuariosRepositoriesInterface';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [
    PrismaService,
    UsuariosService,
    {
      provide: UsuariosRepositoriesInterface,
      useClass: UsuariosRepositories,
    },
  ],
  exports: [UsuariosService],
})
export class UsuariosModule {}
