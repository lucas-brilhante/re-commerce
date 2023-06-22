import { api } from "../../services";
import { AddItemToCardParams } from "./types";

export const addItemToCard = ({ itemId, quantity }: AddItemToCardParams) => {
  return api.post("/carts", {
    userId: 1,
    products: [{ productId: itemId, quantity }],
  });
};
