import React, { createContext } from "react";
import { ShoppingItemsType } from "../data/ShoppingItems";

export const ShoppingContext = createContext<{
  shoppingCart: ShoppingItemsType[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingItemsType[]>>;
}>({
  shoppingCart: [],
  setShoppingCart: () => {},
});
