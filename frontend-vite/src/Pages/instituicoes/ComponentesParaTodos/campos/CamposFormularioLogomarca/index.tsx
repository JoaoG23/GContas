import { Control, FieldValues, UseFormSetValue } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";

import { FileInput } from "../../../../../Components/Inputs/FileInput";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: Control<FieldValues>;
  errors: any;
  setValue?: UseFormSetValue<FieldValues>;
};

export const CamposFormularioLogomarca: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
  setValue,
}) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.Campos>
        <FileInput
          register={register}
          requirido={false}
          name="caminho_imagem"
          label="Upload Image"
          placeholder="Upload Image"
        />
      </Form.Campos>

      <footer>
        <SecondaryButton>
          <p>Upload</p>
          <BsCheckCircleFill size={20} />
        </SecondaryButton>
      </footer>
    </Form.Container>
  );
};
