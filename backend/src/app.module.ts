import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AppService } from './app.service';

import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@Module({
  imports: [AutenticacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
