import { CriptografiaCrypto } from './CriptografiaCrypto';
import { CriptografiaCryptoInterface } from './interfaces/CriptografiaCryptoInterface';

describe('CriptografiaCrypto', () => {
  const criptografiaCrypto: CriptografiaCryptoInterface =
    new CriptografiaCrypto();

  describe('Quando for enviado item existente na variavel (nome)', () => {
    test('Criptografe o nome e retorna sua criptografia após método (criptografar) ser execultado', async () => {
      const nome = 'joao';

      const critografado = await criptografiaCrypto.criptografar(nome);
      expect(critografado).toBeTruthy();
      expect(critografado).not.toBe('');
      expect(critografado).not.toBeNull();
    });
  });

  describe('Após item variavel (nome) ser encriptado', () => {
    test('retorne item descriptografado após o método (descriptografar) ser executado', async () => {
      const nome = 'juliana';
      const critografado = criptografiaCrypto.criptografar(nome);
      const descriptografado = criptografiaCrypto.descriptografar(critografado);

      expect(descriptografado).toBeTruthy();
      expect(descriptografado).toBe(nome);
      expect(descriptografado).not.toBe('');
      expect(descriptografado).not.toBeNull();
    });
  });
});
