import { Module } from '@nestjs/common';
import { InstituicoesController } from '../instituicoes.controller/instituicoes.controller';
import { InstituicoesService } from '../instituicoes.service/instituicoes.service';
import { PrismaService } from 'src/database/prisma.service';
import { InstituicoesRepositoriesInterface } from '../instituicoes.repository/instituicoes.repository.Interface';
import { InstituicoesRepositories } from '../instituicoes.repository/instituicoes.repository';

@Module({
  controllers: [InstituicoesController],
  providers: [
    InstituicoesService,
    PrismaService,
    {
      provide: InstituicoesRepositoriesInterface,
      useClass: InstituicoesRepositories,
    },
  ],
})
export class InstituicoesModule {}
