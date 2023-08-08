import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller/usuarios.controller';

import { UsuariosService } from './usuarios.service/usuarios.service';

import { PrismaService } from 'src/database/prisma.service';

import { UsuariosRepositories } from './usuarios.repositories/usuarios.repositories';
import { UsuariosRepositoriesInterface } from './interfaces/UsuariosRepositoriesInterface';
import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';

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
    {
      provide: CriptografiaBcryptInterface,
      useClass: CriptografiaBcrypt,
    },
  ],
  exports: [UsuariosService],
})
export class UsuariosModule {}
