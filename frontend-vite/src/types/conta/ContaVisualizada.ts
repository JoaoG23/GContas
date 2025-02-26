export type ContaVisualizada = {
  id: number;
  titulo: string;
  instituacao: string;
  login: string;
  senha: string;
  email?: string;
  observacoes?: string;
  instituicoesId?: number;
  instituicoes?: {
    id: number;
    nome: string;
    image: string;
  };
};
