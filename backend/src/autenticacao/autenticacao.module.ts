import { Module } from '@nestjs/common';
import { JwtService, JwtModule } from '@nestjs/jwt';

import { PrismaService } from 'src/database/PrismaService';
import { AutenticacaoService } from './autenticacao.service/autenticacao.service';
import { AutenticacaoController } from './autenticacao.controller/autenticacao.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'joao',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AutenticacaoController],
  providers: [AutenticacaoService, PrismaService, JwtService],
})
export class AutenticacaoModule {}
