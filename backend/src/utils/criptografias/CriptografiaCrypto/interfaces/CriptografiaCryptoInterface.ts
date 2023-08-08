export abstract class CriptografiaCryptoInterface {
  abstract criptografar(itemParaCriptografa: string);
  abstract descriptografar(
    itemParaDecriptografa: NodeJS.ArrayBufferView | string,
  );
}
