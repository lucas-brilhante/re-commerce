import { CartResponse } from "../../hooks/useCart/types";

export interface CartContextValues {
  cart: CartResponse | undefined;
  isLoading: boolean;
}

export interface CartProviderProps {
  children: React.ReactNode;
}
