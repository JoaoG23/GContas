import * as Red from "./styles";
type Props = {
  children?: any;
};
export const RedFont: React.FC<Props> = ({ children }) => {
  return <Red.Red>{children}</Red.Red>;
};
