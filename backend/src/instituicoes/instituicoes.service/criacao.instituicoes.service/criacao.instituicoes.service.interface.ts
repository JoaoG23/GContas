import { Injectable } from '@nestjs/common';

import { InstituicaoCriadaDto } from 'src/instituicoes/instituicoes.dto/InstituicaoCriada';

@Injectable()
export abstract class CriacaoInstituicoesServiceInterface {
  abstract tratarSeExisteImagem(imagem: string);
  abstract criarUm(instituicao: InstituicaoCriadaDto);
}
