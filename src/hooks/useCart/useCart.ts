import { notification } from "antd";
import useSWR from "swr";
import { fetcher } from "../../services";
import { CartResponse } from "./types";

export const useCart = () => {
  const { data, error, isLoading } = useSWR<CartResponse>(`/carts/1`, fetcher);

  if (error) {
    notification.error({
      message: "Error",
      description: (error as Error).message,
    });
  }

  return {
    cart: data,
    isLoading,
  };
};
