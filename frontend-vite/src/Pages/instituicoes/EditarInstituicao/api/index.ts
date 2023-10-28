import { endpoint } from "../../../../services/endpoint";
import { InstituicaoCriada } from "../../../../types/instituicao/InstituicaoCriada";


export async function editarInstituicaoPorId(
  id: string,
  instituicao: InstituicaoCriada
) {
  const logomarca = instituicao?.image!;
  const formData = new FormData();
  formData.append("logo", logomarca[0]);
  formData.append("nome", instituicao?.nome!);

  const resposta = await endpoint.put(`/instituicoes/logo/${id}`, formData, {
    onUploadProgress(progressEvent) {
      console.log(progressEvent.progress * 100);
    },
    headers: {
      "Custom-Header": "value",
      "Content-Type": "multipart/form-data",
    },
  });
  return resposta;
}

export async function buscarInstituicaoPorId(id: string) {
  const resposta = await endpoint.get(`/instituicoes/${id}`);
  return resposta;
}
