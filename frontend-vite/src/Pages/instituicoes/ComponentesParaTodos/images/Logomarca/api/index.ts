import { endpoint } from "../../../../../../services/endpoint";

export async function buscarLogomarcaInstituicaoPorCaminho(logomarca: string) {
  const resposta = await endpoint.get(`/instituicoes/logo/${logomarca}`, {
    responseType: "blob",
  });
  return URL.createObjectURL(resposta?.data);
}
