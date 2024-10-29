import { Product } from "./Product";



export interface GlobalCartState {
  id: number;
  item: Product;
  quantity: number;
}
