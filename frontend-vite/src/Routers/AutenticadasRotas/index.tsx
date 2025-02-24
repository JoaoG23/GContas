import { ContasRotas } from "./ContasRotas";
import { ExportacoesRotas } from "./ExportacoesRotas";
import { InstituicoesRotas } from "./InstituicoesRotas";
import { UsuariosRotas } from "./UsuariosRotas";

const AutenticadasRotas = () => {
  return (
    <>
      <ContasRotas />
      <UsuariosRotas />
      <ExportacoesRotas />
      <InstituicoesRotas />
    </>
  );
};

export default AutenticadasRotas;
