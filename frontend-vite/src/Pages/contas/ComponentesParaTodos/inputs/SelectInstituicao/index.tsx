import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import * as Selects from "./styles";

import { buscarTodasInstituicoes } from "./api";

import { SpinnerCarregamento } from "../../../../../Components/spinners/SpinnerCarregamento";

import { InstituicaoVisualizada } from "../../../../../types/instituicao/InstituicaoVisualizada";
import { AxiosError } from "axios";

type Props<T = unknown> = {
  label?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  opcoes?: T[];
};

export const SelectInstituicoes: React.FC<Props<unknown>> = ({
  label,
  name,
  register,
  desativar = false,
  opcoes = [],
  requirido = true,
}) => {
  const { isLoading, data } = useQuery(
    "todos-instituicoes",
    buscarTodasInstituicoes,
    {
      onError: (error: AxiosError) => {
        toast.error(`Houve um error: ${error?.response?.data}`);
      },
    }
  );

  const instituicoes = data?.data || opcoes;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>
      <Selects.Container
        aria-label=""
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value="">Selecione a instituição</option>
        {instituicoes?.map((instituicao: InstituicaoVisualizada) => (
          <option key={instituicao?.id} value={instituicao?.nome}>
            {instituicao?.nome}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
