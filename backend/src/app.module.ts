import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
// import { NestPgpromiseModule } from 'nestjs-pgpromise';

import { AppService } from './app.service';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { InstituicoesModule } from './instituicoes/instituicoes.module/instituicoes.module';
import { ContasModule } from './contas/contas.module/contas.module';
// import { BackupModule } from './database/backups/backup.rotinas/backup.module/backup.module';

@Module({
  imports: [
    // NestPgpromiseModule.register({
    //   connection: process.env.DATABASE_URL,
    // }),
    AuthModule,
    ContasModule,
    InstituicoesModule,
    ScheduleModule.forRoot(),
    // BackupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
