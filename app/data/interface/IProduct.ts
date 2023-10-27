import { ICategory } from "./ICategory";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  imgLink: string;
}
