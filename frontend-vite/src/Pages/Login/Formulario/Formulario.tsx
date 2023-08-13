import { AxiosResponse } from "axios";
import { BsPersonFillAdd } from "react-icons/bs";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { pegarUsuarioSessao } from "../../../utils/pegarUsuarioSessao";

import { logarUsuario } from "../api";

import { FormularioStyle } from "./styles";

import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";

import { LoginUsuario } from "../../../types/autenticacao/LoginUsuario";
import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (dadosUsuario: LoginUsuario) => await logarUsuario(dadosUsuario),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: (dados: AxiosResponse) => {
        const usuario = dados?.data;
        toast.success("Login Realizado com sucesso");
        pegarUsuarioSessao(usuario);
        navegarAtePaginaDepoisTempo(navigate, "/contas");
        navegarAtePaginaDepoisTempo(navigate, 0);
      },
    }
  );
  return (
    <FormularioStyle>
      <CamposFormulario
        funcaoSubmit={(usuario: LoginUsuario) => {
          mutate(usuario);
        }}
      />
      {isLoading && <SpinnerCarregamento />}
    </FormularioStyle>
  );
};
