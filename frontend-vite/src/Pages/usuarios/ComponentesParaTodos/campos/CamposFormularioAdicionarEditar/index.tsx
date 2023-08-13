import { BsCheckCircleFill } from "react-icons/bs";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";

import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
};

export const CamposFormulario: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
}) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.Campos>
        <Form.UmaColuna>
          <main>
            <div>
              <InputDefault
                register={register}
                name="nome"
                label="Nome"
                placeholder="Digite o Nome"
              />
              {errors?.nome?.type === "required" && (
                <AlertCampoVazio mensagem="Nome vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <InputDefault
                register={register}
                name="login"
                label="Login de usuário"
                placeholder="Digite o usuário"
              />
              {errors?.login?.type === "required" && (
                <AlertCampoVazio mensagem="Login vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <InputDefault
                register={register}
                name="senha"
                label="Senha"
                placeholder="Digite a senha"
              />
              {errors?.senha?.type === "required" && (
                <AlertCampoVazio mensagem="Senha vazio! Por gentileza preencher-o!" />
              )}
            </div>
          </main>
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
