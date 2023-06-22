import { api } from "../../../services";
import { UpdateItemParams } from "./types";

export const updateItem = ({
  cartId,
  itemId,
  quantity,
  userId,
}: UpdateItemParams) => {
  return api.put(`carts/${cartId}`, {
    userId,
    products: [{ productId: itemId, quantity }],
  });
};


