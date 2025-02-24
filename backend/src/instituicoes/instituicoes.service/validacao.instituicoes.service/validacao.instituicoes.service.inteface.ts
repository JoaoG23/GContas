import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ValidacaoInstituicoesServiceInteface {
  abstract validarNaoExisteId(id: number);
}
