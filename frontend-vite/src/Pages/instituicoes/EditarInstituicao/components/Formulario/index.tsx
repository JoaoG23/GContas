import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { InstituicaoCriada } from "../../../../../types/instituicao/InstituicaoCriada";
import { InstituicaoVisualizada } from "../../../../../types/instituicao/InstituicaoVisualizada";

import { buscarInstituicaoPorId, editarInstituicaoPorId } from "../../api";

import { CamposFormularioEditar } from "../../../ComponentesParaTodos/campos/CamposFormularioEditar";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();

  const { isLoading: isCarregandoInstituicaoAnterior, data } = useQuery(
    ["ver-uma-instituicao", id],
    () => buscarInstituicaoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const instituicaoAnterior: InstituicaoVisualizada = data?.data;

  const {
    mutate,
    isLoading: isCarregandoSalvacaoInstituicao,
    isSuccess,
  } = useMutation(
    async (instituicao: InstituicaoCriada) =>
      await editarInstituicaoPorId(id!, instituicao),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("ver-uma-instituicao");
        queryClient.invalidateQueries("logomarca-instituicao");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const logomarca = instituicaoAnterior?.image;

  useEffect(() => {
    reset(instituicaoAnterior);
  }, [data]);

  return (
    <>
      <CamposFormularioEditar
        onSubmit={handleSubmit((instituicao) => {
          mutate(instituicao as InstituicaoCriada);
        })}
        register={register}
        control={control}
        errors={errors}
        logo={logomarca}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoInstituicaoAnterior && <ModalCarregando />}
      {isCarregandoSalvacaoInstituicao && <ModalCarregando />}
    </>
  );
};
