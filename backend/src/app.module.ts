import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { ContasModule } from './contas/contas.module';

@Module({
  imports: [AuthModule, ContasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
