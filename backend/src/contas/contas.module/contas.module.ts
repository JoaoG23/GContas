import { Module } from '@nestjs/common';

import { CriptografiaCrypto } from 'src/utils/criptografias/CriptografiaCrypto/CriptografiaCrypto';
import { CriptografiaCryptoInterface } from 'src/utils/criptografias/CriptografiaCrypto/interfaces/CriptografiaCryptoInterface';

import { PrismaService } from 'src/database/prisma.service';

import { ContasController } from '../contas.controller/contas.controller';

import { ContasRepositories } from '../contas.repositories/contas.repositories';
import { ContasRepositoriesInterface } from '../contas.repositories/ContasRepositoriesInterface';

import { ContasService } from '../contas.service/contas.service';

@Module({
  controllers: [ContasController],
  providers: [
    ContasService,
    PrismaService,
    CriptografiaCrypto,
    {
      provide: CriptografiaCryptoInterface,
      useClass: CriptografiaCrypto,
    },
    {
      provide: ContasRepositoriesInterface,
      useClass: ContasRepositories,
    },
  ],
})
export class ContasModule {}
