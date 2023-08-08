import { IsNotEmpty, MaxLength } from 'class-validator';

export class CriarUsuariosBodyDto {
  @IsNotEmpty({
    message: 'O Campo nome não existe',
  })
  @MaxLength(50, {
    message: 'Nome está acima de 100 caracteres',
  })
  nome?: string;

  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  login: string;

  @IsNotEmpty({
    message: 'O Campo senha não existe',
  })
  senha: string;
}
