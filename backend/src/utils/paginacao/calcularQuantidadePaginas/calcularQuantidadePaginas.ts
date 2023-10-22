export function calcularQuantidadePaginas(
  itemsPorPagina: number,
  quantidadeTotalItems: number,
): number {
  return Math.ceil(quantidadeTotalItems / itemsPorPagina);
}
