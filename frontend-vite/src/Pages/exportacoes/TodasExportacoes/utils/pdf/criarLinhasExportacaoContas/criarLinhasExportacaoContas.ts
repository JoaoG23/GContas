import { ContaVisualizada } from "../../../../../../types/conta/ContaVisualizada";

export const criarLinhasExportacaoContas = (contas: ContaVisualizada[]) => {
  let linhasContas = [
    ["Título", "Instituição", "Login", "Senha", "E-mail", "Observações"],
  ];

  if (contas) {
    contas?.map((conta: any) => {
      const { titulo, instituacao, login, senha, email, observacoes } = conta;

      let linha: string[] = [
        titulo!,
        instituacao!,
        login!,
        senha!,
        email!,
        observacoes!,
      ];
      linhasContas.push(linha);
    });
  }
  return linhasContas;
};
