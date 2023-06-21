import { MaxWidthLimiterContainer } from "./styles";
import { MaxWidthLimiterProps } from "./types";

export const MaxWidthLimiter = ({ children }: MaxWidthLimiterProps) => {
  return <MaxWidthLimiterContainer>{children}</MaxWidthLimiterContainer>;
};
