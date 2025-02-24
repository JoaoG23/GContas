import { ContaVisualizada } from "../../../../../../types/conta/ContaVisualizada";

export const criarLinhasExportacaoContas = (contas: ContaVisualizada[]) => {
  let linhasContas = [
    ["Título", "Instituição", "Login", "Senha", "E-mail", "Observações"],
  ];

  if (contas) {
    contas?.map((conta: ContaVisualizada) => {
      const { titulo, instituicoes, login, senha, email, observacoes } = conta;

      const nomeInstituicao = instituicoes?.nome;
      let linha: string[] = [
        titulo!,
        nomeInstituicao!,
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
