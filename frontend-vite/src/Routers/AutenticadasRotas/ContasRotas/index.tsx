import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";
import { AdicionarConta } from "../../../Pages/contas/AdicionarConta";
import { EditarConta } from "../../../Pages/contas/EditarConta";
import { TodosContas } from "../../../Pages/contas/TodasContas";

export const ContasRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/contas"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosContas />
          </PrivateRoute>
        }
      />
      <Route
        path="/contas/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarConta />
          </PrivateRoute>
        }
      />
      <Route
        path="/contas/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarConta />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
