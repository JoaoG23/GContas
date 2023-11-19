import { useQuery } from "react-query";
import React from "react";

import * as Instituicao from "./styles";

import { buscarLogomarcaInstituicaoPorCaminho } from "./api";

import semImage from "./icon_sem_image.svg";

type Props = {
  imageLogomarca: string;
};
export const Logomarca: React.FC<Props> = ({ imageLogomarca }) => {
  const { data: caminhoLogomarca, isLoading } = useQuery(
    ["logomarca-instituicao", imageLogomarca],
    () => buscarLogomarcaInstituicaoPorCaminho(imageLogomarca || "")
  );

  return (
    <div>
      <Instituicao.Logomarca alt="logo" src={caminhoLogomarca || semImage} />
      {/* {isLoading && <SpinnerCarregamento />} */}
    </div>
  );
};
