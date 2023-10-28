import { Injectable } from '@nestjs/common';

import { InstituicaoEditadaDto } from 'src/instituicoes/instituicoes.dto/InstituicaoEditada';

@Injectable()
export abstract class EdicaoInstituicoesServiceInterface {
  abstract atualizarLogomarcaPorIdInstituicao(
    id: number,
    instituicao: InstituicaoEditadaDto,
  );
  abstract editarInstituicaoELogoPorId(
    id: number,
    instituicao: InstituicaoEditadaDto,
  );
}
