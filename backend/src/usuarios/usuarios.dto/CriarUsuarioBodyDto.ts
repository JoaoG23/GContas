import { IsNotEmpty } from 'class-validator';

export class CriarUsuariosBodyDto {
  @IsNotEmpty({
    message: 'O Campo email não existe',
  })
  email: string;

  @IsNotEmpty({
    message: 'O Campo senha não existe',
  })
  senha: string;
}
