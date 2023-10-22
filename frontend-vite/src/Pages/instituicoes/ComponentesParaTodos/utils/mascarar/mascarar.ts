export const mascarar = (texto: string) => {
  const primeiraIniciais = texto.substring(0, 2);
  const segundaUltimaLetra = texto.length - 2;
  const ultimaLetra = texto.length;

  const mascara = "******";
  const ultimaIniciais = texto.substring(segundaUltimaLetra, ultimaLetra);

  const senhaMascarada = primeiraIniciais + mascara + ultimaIniciais;
  return senhaMascarada;
};
