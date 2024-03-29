import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarContaPorId, editarContaPorId } from "../../api";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";
import { ModalCarregando } from "../../../../../Components/Modais/ModalCarregando";
import { ModalSucesso } from "../../../../../Components/Modais/ModalSucesso";

import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { ContaCriada } from "../../../../../types/conta/ContaCriada";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();

  const { isLoading: isCarregandoitemcontaAnterior, data } = useQuery(
    ["ver-uma-conta", id],
    () => buscarContaPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const contaAnterior = data?.data;

  const {
    mutate,
    isLoading: isCarregandoSalvacaoConta,
    isSuccess,
  } = useMutation(
    async (conta: ContaCriada) => await editarContaPorId(id!, conta),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-item-conta");
        queryClient.invalidateQueries("listar-item-conta-por-pagina");
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

  useEffect(() => {
    reset(contaAnterior);
  }, [data]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((conta) => {
          mutate(conta as ContaCriada);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaoConta && <ModalCarregando />}
      {isCarregandoitemcontaAnterior && <ModalCarregando />}
    </>
  );
};
