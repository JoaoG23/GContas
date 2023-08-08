import * as CryptoJS from 'crypto-js';

import { CriptografiaCryptoInterface } from './interfaces/CriptografiaCryptoInterface';

export class CriptografiaCrypto implements CriptografiaCryptoInterface {
  private readonly segredoChave = 'joao';

  criptografar(itemParaCriptografa: string) {
    const criptogrado = CryptoJS.AES.encrypt(
      itemParaCriptografa,
      this.segredoChave,
    ).toString();
    // const cipher = crypto.createCipheriv(
    //   'aes-192-ecb',
    //   this.chaveSegredo,
    //   null,
    //   // this.iv,
    // );
    // let encriptado = cipher.update(itemParaCriptografa, this.hex, 'utf-8');
    // encriptado += cipher.final(this.hex);
    return criptogrado;
  }

  descriptografar(itemParaDecriptografa: string) {
    const bytes = CryptoJS.AES.decrypt(
      itemParaDecriptografa,
      this.segredoChave,
    );
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText;
  }
}
