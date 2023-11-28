import { FieldValues, UseFormRegister } from "react-hook-form";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ImSearch } from "react-icons/im";

import * as Form from "./styles";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { SelectInstituicoes } from "../../inputs/SelectInstituicao";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: UseFormRegister<FieldValues>;
};

export const FormularioPesquisa: React.FC<Props> = ({ onSubmit, register }) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <h2>Formulário pesquisa</h2>
      <Form.ContainerPesquisa>
        <SelectInstituicoes
          requirido={false}
          register={register}
          name="instituicoes"
          label="Instituição"
        />
        <InputDefault
          requirido={false}
          register={register}
          placeholder="Digite a Título"
          name="titulo"
          label="Titulo"
        />
        <SecondaryButton>
          <p>Pesquisar</p>
          <ImSearch color="#fff" size={20} />
        </SecondaryButton>
      </Form.ContainerPesquisa>
    </Form.Container>
  );
};
