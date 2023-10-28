import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class RemocaoInstituicoesServiceInterface {
  abstract deletarUmPorId(id: number);
}
