import { ExportacoesDadosContas } from "../../Pages/exportacoes/TodasExportacoes";
import { ContasRotas } from "./ContasRotas";
import { ExportacoesRotas } from "./ExportacoesRotas";
import { UsuariosRotas } from "./UsuariosRotas";

const AutenticadasRotas = () => {
  return (
    <>
      <ContasRotas />
      <UsuariosRotas />
      <ExportacoesRotas />
    </>
  );
};

export default AutenticadasRotas;
