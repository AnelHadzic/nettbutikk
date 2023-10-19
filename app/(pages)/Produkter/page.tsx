"use client";

import Cart from "@/app/components/products/Cart";
import ShopCard from "@/app/components/products/ShopCard";
import {
  ShoppingProvider,
  useShoppingContext,
} from "@/app/context/ShoppingContext";
import { ShoppingDatabase } from "@/app/data/ShoppingItems";
import React from "react";

const Page = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-center items-center p-24">
        <ShoppingContent />
      </main>
    </>
  );
};

const ShoppingContent = () => {
  const { addToCart } = useShoppingContext();

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {ShoppingDatabase.map((item) => (
          <React.Fragment key={item.id}>
            <ShopCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              addToCart={() => addToCart(item)}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

const ShoppingCart = () => {
  const { cartIsOpen } = useShoppingContext();
  return <>{cartIsOpen && <Cart />}</>;
};

export default Page;
