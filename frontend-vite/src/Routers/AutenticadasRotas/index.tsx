import { Route, Routes } from "react-router-dom";

import PrivateRoute from "../Auth/PrivateRouter";

const AutenticadasRotas = () => {
  return (
    <>
      <Routes>
        <Route
          path="/usuario_logado"
          element={
            <PrivateRoute redirectTo={"/"}>
              <div>Teste</div>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AutenticadasRotas;
