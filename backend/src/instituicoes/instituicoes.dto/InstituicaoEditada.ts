import { IsNotEmpty } from 'class-validator';

export class InstituicaoEditadaDto {
  id?: number;

  @IsNotEmpty({
    message: 'O Campo nome não existe',
  })
  nome: string;
  caminho_imagem?: string;
}
