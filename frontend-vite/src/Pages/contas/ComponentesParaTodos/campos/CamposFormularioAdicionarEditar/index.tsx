import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { useElementoStore } from "../../../../../stores/useElementoStore/useElementoStore";
import { useSubelementoStore } from "../../../../../stores/useSubelementoStore/useSubelementoStore";
import { useTiposStore } from "../../../../../stores/useTiposStore/useTiposStore";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { SublementoSelect } from "../../../../../Components/selects/SubelementoSelect";
import { ElementoSelect } from "../../../../../Components/selects/ElementoSelect";

import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";
import { TiposSelect } from "../../../../../Components/selects/TiposSelect";
import { SubtiposSelect } from "../../../../../Components/selects/SubtiposSelect";
import { LocaisSelect } from "../../../../../Components/selects/LocaisSelect";
import { TipoDespesaSelect } from "../../../../../Components/selects/TipoDespesaSelect";
import { DecimalInput } from "../../../../../Components/Inputs/DecimalInput";

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
                name="titulo"
                label="Titulo da conta"
                placeholder="Digite um titulo indentificador"
              />
              {errors?.titulo?.type === "required" && (
                <AlertCampoVazio mensagem="Titulo vazio! Por gentileza preencher-o!" />
              )}
            </div>
            <div>
              <InputDefault
                register={register}
                name="instituacao"
                label="Instituação"
                placeholder="Digite a instituição"
              />
              {errors?.instituacao?.type === "required" && (
                <AlertCampoVazio mensagem="Instituação vazio! Por gentileza preencher-o!" />
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
            <div>
              <InputDefault
                requirido={false}
                register={register}
                name="email"
                label="E-mail"
                placeholder="Opcional! caso precise de recupera dados..."
              />
            </div>
          </main>
        </Form.UmaColuna>

        <Form.ObservacoesLinha>
          <div>
            <InputDefault
              requirido={false}
              type="text"
              name="observacoes"
              register={register}
              label="Opcional a observação..."
            />
          </div>
        </Form.ObservacoesLinha>
      </Form.Campos>
      <footer>
        <SecondaryButton>Salvar +</SecondaryButton>
      </footer>
    </Form.Container>
  );
};
