export function calcularQuantidadePaginas(
  itemsPorPagina: number,
  quantidadeTotalItems: number,
) {
  return Math.ceil(quantidadeTotalItems / itemsPorPagina);
}
