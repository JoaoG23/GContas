import { FieldValues, UseFormSetValue } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";

import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";
import { FileInput } from "../../../../../Components/Inputs/FileInput";
import { Logomarca } from "../../images/Logomarca";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
  logo?: string;
};

export const CamposFormularioEditar: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
  logo,
}) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.Campos>
        <Logomarca imageLogomarca={logo!} />
        <Form.UmaColuna>
          <InputDefault
            register={register}
            name="nome"
            label="Nome da Instituição"
            placeholder="Digite um instituição"
          />
          {errors?.nome?.type === "required" && (
            <AlertCampoVazio mensagem="Nome vazio! Por gentileza preencher-o!" />
          )}
          <FileInput
            register={register}
            name="image"
            label="Escolha uma imagem...."
            placeholder="Digite um Imagem"
            requirido={false}
          />
        </Form.UmaColuna>
      </Form.Campos>

      <footer>
        <SecondaryButton>
          <p>Salvar</p>
          <BsCheckCircleFill size={20} />
        </SecondaryButton>
      </footer>
    </Form.Container>
  );
};
