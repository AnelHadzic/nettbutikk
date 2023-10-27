import { IProduct } from "@/app/data/interface/IProduct";
import { Dispatch, SetStateAction } from "react";

export type ProductData = {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  filteredList: IProduct[];
  setFiltered: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  shoppingCart: IProduct[];
  setShoppingCart: Dispatch<SetStateAction<IProduct[]>>;
  cartIsOpen: boolean;
  setCartIsOpen: Dispatch<SetStateAction<boolean>>;
  totalCost: number;
  setTotalCost: Dispatch<SetStateAction<number>>;
  addToCart: (item: IProduct) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  deleteFromCart: (id: number) => void;
};
