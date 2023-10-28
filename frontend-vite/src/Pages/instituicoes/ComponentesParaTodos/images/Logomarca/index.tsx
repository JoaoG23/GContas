import { useQuery } from "react-query";
import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";

import * as Instituicao from "./styles";

import { buscarLogomarcaInstituicaoPorCaminho } from "./api";

import { ErrorResposta } from "../../../../../types/Respostas/ErrorResposta/ErroResposta";

import { SpinnerCarregamento } from "../../../../../Components/spinners/SpinnerCarregamento";

type Props = {
  imageLogomarca: string;
};
export const Logomarca: React.FC<Props> = ({ imageLogomarca }) => {
  const { data: caminhoLogomarca, isLoading } = useQuery(
    ["logomarca-instituicao", imageLogomarca],
    () => buscarLogomarcaInstituicaoPorCaminho(imageLogomarca || ""),
    {
      onError: (error: ErrorResposta) => {
        console.log("🚀 ~ file: index.tsx:22 ~ error:", error);
      },
    }
  );
  return (
    <div>
      <Instituicao.Logomarca alt="logo" src={caminhoLogomarca} />
      {isLoading && <SpinnerCarregamento />}
    </div>
  );
};
