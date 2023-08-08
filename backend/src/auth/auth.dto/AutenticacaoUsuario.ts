import { IsNotEmpty } from 'class-validator';

export class AutenticacaoUsuario {
  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  login: string;

  @IsNotEmpty({
    message: 'O Campo senha não existe',
  })
  senha: string;
}
