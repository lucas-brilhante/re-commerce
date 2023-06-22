import { Item } from "../../components/ItemCard";

export type Product = Item & {quantity: number}

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
  __v: number;
}
