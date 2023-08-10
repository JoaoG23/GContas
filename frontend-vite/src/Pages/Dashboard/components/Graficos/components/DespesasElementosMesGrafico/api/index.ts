import { endpoint } from "../../../../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorElementoUsuarios = async () => {
  const resposta = await endpoint.get(
    `/estatistica/elementos/despesas_elemento/${idUsuario}`
  );
  return resposta;
};
