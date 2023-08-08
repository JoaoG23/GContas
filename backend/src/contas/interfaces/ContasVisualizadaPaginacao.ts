import { VisualizarConta } from './VisualizarConta';

export interface ContasVisualizadaPaginacao {
  data: {
    totalQuantidadePaginas?: number;
    quantidadeTotalRegistros?: number;
  };
  items: VisualizarConta[];
}
