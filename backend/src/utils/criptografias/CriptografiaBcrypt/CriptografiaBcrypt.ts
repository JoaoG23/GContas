import * as bcrypt from 'bcrypt';

export class CriptografiaBcrypt {
  verificarSenhasCombinam(senhaEntrada: string, hashBancoDados: string) {
    return bcrypt.compare(senhaEntrada, hashBancoDados);
  }
  criptografarSenha(senhaEntrada: string) {
    const salts = 10;
    return bcrypt.hash(senhaEntrada, salts);
  }
}
