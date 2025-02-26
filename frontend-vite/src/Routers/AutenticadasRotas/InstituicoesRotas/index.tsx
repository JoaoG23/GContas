import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodasInstituicoes } from "../../../Pages/instituicoes/TodasInstituicoes";
import { AdicionarInstituicao } from "../../../Pages/instituicoes/AdicionarInstituicao";
import { EditarInstituicao } from "../../../Pages/instituicoes/EditarInstituicao";
import { DeletarInstituicao } from "../../../Pages/instituicoes/DeletarInstituicoes";
// import { AdicionarConta } from "../../../Pages/instituicoes/AdicionarConta";
// import { EditarConta } from "../../../Pages/instituicoes/EditarConta";
// import { Todosinstituicoes } from "../../../Pages/instituicoes/Todasinstituicoes";
// import { DeletarConta } from "../../../Pages/instituicoes/DeletarConta";

export const InstituicoesRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/instituicoes"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodasInstituicoes />
          </PrivateRoute>
        }
      />
      <Route
        path="instituicoes/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarInstituicao />
          </PrivateRoute>
        }
      />
      <Route
        path="instituicoes/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarInstituicao />
          </PrivateRoute>
        }
      />
      <Route
        path="instituicoes/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarInstituicao />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
