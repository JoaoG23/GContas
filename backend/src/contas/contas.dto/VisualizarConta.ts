export class VisualizarConta {
  id: number;
  titulo: string;
  instituacao: string;
  login: string;
  senha: string;
  email?: string;
  observacoes?: string;
  createdAt: Date;
  updatedAt: Date;
  instituicoesId?: number;
}
