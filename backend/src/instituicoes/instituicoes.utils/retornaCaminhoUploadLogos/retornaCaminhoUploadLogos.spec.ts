import * as path from 'node:path';
import { retornaCaminhoUploadLogos } from './retornaCaminhoUploadLogos';

describe('retornaCaminhoUploadLogos', () => {
  describe('Quando funcao execultada', () => {
    test('Deverá retorna o caminho de upload/logomarcas', () => {
      const retorno = retornaCaminhoUploadLogos();
      const caminhoEsperado = 'uploads/logos';
      expect(retorno).toBe(caminhoEsperado);
    });
  });
});
