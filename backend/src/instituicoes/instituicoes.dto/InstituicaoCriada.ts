import { IsNotEmpty } from 'class-validator';

export class InstituicaoCriadaDto {
  @IsNotEmpty({
    message: 'O Campo nome não existe',
  })
  nome: string;
  caminho_imagem?: string;
}
