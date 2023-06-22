import { Product } from "../../../hooks/useDetailedCart";

export interface ProductItemProps {
  item: Product;
}

export interface UpdateItemParams {
  cartId: number;
  userId: number;
  itemId: number;
  quantity: number;
}
