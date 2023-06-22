import { createContext } from "react";
import { useCart } from "../../hooks/useCart";
import { CartContextValues, CartProviderProps } from "./types";

export const CartContext = createContext<CartContextValues>({
  cart: undefined,
  isLoading: true,
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const cartProps = useCart();
  return (
    <CartContext.Provider value={cartProps}>{children}</CartContext.Provider>
  );
};
