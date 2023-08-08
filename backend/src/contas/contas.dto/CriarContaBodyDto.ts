import { IsNotEmpty } from 'class-validator';

export class CriarContaBodyDto {
  @IsNotEmpty({
    message: 'O Campo titulo não existe',
  })
  titulo: string;

  @IsNotEmpty({
    message: 'O Campo instituacao não existe',
  })
  instituacao: string;

  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  login: string;

  @IsNotEmpty({
    message: 'O Campo senha não existe',
  })
  senha: string;

  email?: string;
  observacoes?: string;
}
