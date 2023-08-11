import { Route, Routes } from "react-router-dom";

import PrivateRoute from "../Auth/PrivateRouter";
import { ContasRotas } from "./ContasRotas";

const AutenticadasRotas = () => {
  return (
    <>
      <ContasRotas />
    </>
  );
};

export default AutenticadasRotas;
