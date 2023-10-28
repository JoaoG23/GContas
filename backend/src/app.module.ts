import { Module } from '@nestjs/common';

import { AppService } from './app.service';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { InstituicoesModule } from './instituicoes/instituicoes.module/instituicoes.module';
import { ContasModule } from './contas/contas.module/contas.module';

@Module({
  imports: [AuthModule, ContasModule, InstituicoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
