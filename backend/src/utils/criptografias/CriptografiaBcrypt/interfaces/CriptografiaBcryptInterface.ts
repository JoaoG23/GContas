export abstract class CriptografiaBcryptInterface {
  abstract verificarSenhasCombinam(
    senhaEntrada: string,
    hashBancoDados: string,
  );
  abstract criptografarSenha(senhaEntrada: string);
}
