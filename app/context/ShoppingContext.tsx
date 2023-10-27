"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductData } from "./types/ProductsData";
import { IProduct } from "../data/interface/IProduct";

const ShoppingContext = createContext<ProductData | undefined>(undefined);

export const ShoppingProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filtered, setFiltered] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shoppingCart, setShoppingCart] = useState<IProduct[]>([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [totalCost, setTotalCost] = useState<number>(0);

  // Foreløpig gjør jeg filtrering på client. Senere kan man legge til kall mot API.
  const filteredList = products.filter((item) =>
    filtered
      ? item.category.toLowerCase().includes(filtered.toLowerCase())
      : true
  );

  const addToCart = (item: IProduct) => {
    setShoppingCart((prevCart) => [...prevCart, item]);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = shoppingCart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setShoppingCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = shoppingCart.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setShoppingCart(updatedCart);
  };

  const deleteFromCart = (id: number) => {
    const updatedCart = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(updatedCart);
  };

  const calculateTotal = () => {
    let total = shoppingCart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

    setTotalCost(parseInt(total));
  };

  useEffect(() => {
    calculateTotal();
  }, [shoppingCart]);

  const contextValue: ProductData = {
    products,
    setProducts,
    setFiltered,
    filteredList,
    shoppingCart,
    setShoppingCart,
    cartIsOpen,
    setCartIsOpen,
    totalCost,
    setTotalCost,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    isLoading,
    setIsLoading,
  };

  return (
    <ShoppingContext.Provider value={contextValue}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error("ShoppingContext needs a ShoppingProvider");
  }
  return context;
};
