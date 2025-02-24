import React from "react";
import { ContainerInput, NoBorders } from "./styles";

import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues> | any;
  desativar?: boolean;
  requirido?: boolean;
};

export const FileInput: React.FC<Props> = ({
  label,
  name,
  placeholder,
  register,
  desativar = false,
  requirido = true,
}) => {
  return (
    <ContainerInput>
      <label>{label}</label>
      <NoBorders
        readOnly={desativar}
        placeholder={placeholder}
        {...register(name, { required: requirido })}
        type="file"
      ></NoBorders>
    </ContainerInput>
  );
};
