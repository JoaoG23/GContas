import { PrismaService } from 'src/database/prisma.service';
import { Module } from '@nestjs/common';

import { InstituicoesController } from '../instituicoes.controller/instituicoes.controller';
import { InstituicoesService } from '../instituicoes.service/instituicoes.service';

import { InstituicoesRepositoriesInterface } from '../instituicoes.repository/instituicoes.repository.Interface';
import { InstituicoesRepositories } from '../instituicoes.repository/instituicoes.repository';

import { EdicaoInstituicoesServiceInterface } from '../instituicoes.service/edicao.instituicoes.service/edicao.instituicoes.service.interface';
import { EdicaoInstituicoesService } from '../instituicoes.service/edicao.instituicoes.service/edicao.instituicoes.service';

import { ValidacaoInstituicoesServiceInteface } from '../instituicoes.service/validacao.instituicoes.service/validacao.instituicoes.service.inteface';
import { ValidacaoInstituicoesService } from '../instituicoes.service/validacao.instituicoes.service/validacao.instituicoes.service';

import { RemocaoInstituicoesServiceInterface } from '../instituicoes.service/remocao.instituicoes.service/remocao.instituicoes.service.interface';
import { RemocaoInstituicoesService } from '../instituicoes.service/remocao.instituicoes.service/remocao.instituicoes.service';

import { CriacaoInstituicoesServiceInterface } from '../instituicoes.service/criacao.instituicoes.service/criacao.instituicoes.service.interface';
import { CriacaoInstituicoesService } from '../instituicoes.service/criacao.instituicoes.service/criacao.instituicoes.service';

@Module({
  controllers: [InstituicoesController],
  providers: [
    InstituicoesService,
    PrismaService,
    {
      provide: InstituicoesRepositoriesInterface,
      useClass: InstituicoesRepositories,
    },
    {
      provide: EdicaoInstituicoesServiceInterface,
      useClass: EdicaoInstituicoesService,
    },
    {
      provide: ValidacaoInstituicoesServiceInteface,
      useClass: ValidacaoInstituicoesService,
    },
    {
      provide: RemocaoInstituicoesServiceInterface,
      useClass: RemocaoInstituicoesService,
    },
    {
      provide: CriacaoInstituicoesServiceInterface,
      useClass: CriacaoInstituicoesService,
    },
  ],
})
export class InstituicoesModule {}
