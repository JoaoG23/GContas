import { IsNotEmpty } from 'class-validator';

export class InstituicaoCriadaDto {
  id?: number;
  @IsNotEmpty({
    message: 'O Campo nome não existe',
  })
  nome: string;
  image?: string;
}
