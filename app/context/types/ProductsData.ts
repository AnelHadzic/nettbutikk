import { ShoppingItemsType } from "@/app/data/ShoppingItems";
import { Dispatch, SetStateAction } from "react";

export type ProductData = {
  products: ShoppingItemsType[];
  setProducts: Dispatch<SetStateAction<ShoppingItemsType[]>>;
  filteredList: ShoppingItemsType[];
  setFiltered: Dispatch<SetStateAction<string>>;
  shoppingCart: ShoppingItemsType[];
  setShoppingCart: Dispatch<SetStateAction<ShoppingItemsType[]>>;
  cartIsOpen: boolean;
  setCartIsOpen: Dispatch<SetStateAction<boolean>>;
  totalCost: number;
  setTotalCost: Dispatch<SetStateAction<number>>;
  addToCart: (item: ShoppingItemsType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  deleteFromCart: (id: number) => void;
};
