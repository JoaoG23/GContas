import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";
import { ExportacoesDadosContas } from "../../../Pages/exportacoes/TodasExportacoes";

export const ExportacoesRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/exportacoes"
        element={
          <PrivateRoute redirectTo={"/"}>
            <ExportacoesDadosContas />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
