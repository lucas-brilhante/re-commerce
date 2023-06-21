import { ContentContainer } from "./styles";
import { ContentProps } from "./types";

export const Content = ({ children }: ContentProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};
