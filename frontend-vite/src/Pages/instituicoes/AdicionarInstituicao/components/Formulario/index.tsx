import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ErrorResposta } from "../../../../../types/Respostas/ErrorResposta/ErroResposta";
// import { InstituicaoCriada } from "../../../../../types/instituicao/InstituicaoCriada";

import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";

import { adicionarInstituicao } from "../../api";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";
// import { CamposFormularioLogomarca } from "../../../ComponentesParaTodos/campos/CamposFormularioLogomarca";

import { Container } from "./styles";
import { SpinnerCarregamento } from "../../../../../Components/spinners/SpinnerCarregamento";
import { InstituicaoCriada } from "../../../../../types/instituicao/InstituicaoCriada";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: adicionarMutate,
    isLoading: isLoadingAdicionar,
    isSuccess,
  } = useMutation(
    async (instituicao: InstituicaoCriada) =>
      await adicionarInstituicao(instituicao),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-instituicoes");
        queryClient.invalidateQueries("listar-instituicoes-por-pagina");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InstituicaoCriada>({});

  return (
    <Container>
      <CamposFormulario
        onSubmit={handleSubmit((instituicao) => {
          adicionarMutate(instituicao as InstituicaoCriada);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isLoadingAdicionar && <SpinnerCarregamento />}

      {isSuccess && <ModalSucesso />}
      {isLoadingAdicionar && <ModalCarregando />}
    </Container>
  );
};
