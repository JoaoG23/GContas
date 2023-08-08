import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller/contas.controller';

import { PrismaService } from 'src/database/prisma.service';
import { ContasService } from './contas.service/contas.service';

import { ContasRepositoriesInterface } from './interfaces/ContasRepositoriesInterface';
import { ContasRepositories } from './contas.repositories/contas.repositories';

import { CriptografiaCrypto } from 'src/utils/criptografias/CriptografiaCrypto/CriptografiaCrypto';
import { CriptografiaCryptoInterface } from 'src/utils/criptografias/CriptografiaCrypto/interfaces/CriptografiaCryptoInterface';

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
