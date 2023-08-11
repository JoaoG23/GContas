import React from "react";
import * as Cards from "./styles";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};
export const CardList: React.FC<Props> = ({ children }) => {
  return <Cards.Container>{children}</Cards.Container>;
};
