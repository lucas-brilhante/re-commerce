import { useEffect, useState } from "react";
import { Item } from "../../components/ItemCard";
import { api } from "../../services";
import { CartResponse } from "../useCart/types";
import { Cart } from "./types";

// The Api doesn't give us the information of items inside the cart,
// so this hook is a workaround to pick that using extra request

export const useDetailedCart = (data?: CartResponse) => {
  const [cart, setCart] = useState<Cart>();
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    try {
      if (!data) return;
      const fetchCart = async () => {
        setIsloading(true);
        const requests = data?.products.map(async (product) => ({
          ...(await api.get<Item>(`/products/${product.productId}`)).data,
          quantity: product.quantity,
        }));

        if (!requests) return;

        const cartItens = await Promise.all(requests);
        setIsloading(false);
        setCart({ ...data, products: cartItens });
      };
      fetchCart();
    } catch (error) {
      setError(error as Error);
      setIsloading(false);
    }
  }, [data]);

  return {
    cart,
    isLoading,
    error,
  };
};
