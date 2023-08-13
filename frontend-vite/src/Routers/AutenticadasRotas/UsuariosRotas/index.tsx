import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";
import { TodosUsuarios } from "../../../Pages/usuarios/TodosUsuarios";
import { AdicionarUsuario } from "../../../Pages/usuarios/AdicionarUsuario";
import { DeletarUsuario } from "../../../Pages/usuarios/DeletarUsuario";

export const UsuariosRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/usuarios"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosUsuarios />
          </PrivateRoute>
        }
      />
      <Route
        path="usuarios/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="usuarios/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarUsuario />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
