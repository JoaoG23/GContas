import { useMemo, useState } from "react";
import { mascarar } from "../../utils/mascarar/mascarar";

const mascararEDesmascararTexto = (texto: string, isMascarada: boolean) => {
  if (!isMascarada) {
    return mascarar(texto);
  }
  return texto;
};

export const useMascaraTexto = (texto: string) => {
  const [mostrarTexto, setMostrarTexto] = useState<boolean>(false);

  const textoConta = texto;

  const textoMascarada = useMemo(
    () => mascararEDesmascararTexto(textoConta, mostrarTexto),
    [mostrarTexto]
  );
  return {
    textoMascarada,
    setMostrarTexto,
    mostrarTexto,
  };
};
