"use client";

import CardSkeleton from "@/app/components/products/CardSkeleton";
import Cart from "@/app/components/products/Cart";
import FilterProducts from "@/app/components/products/FilterProducts";
import ShopCard from "@/app/components/products/ShopCard";
import { useShoppingContext } from "@/app/context/ShoppingContext";
import { ShoppingItemsType } from "@/app/data/ShoppingItems";
import React, { useEffect } from "react";

const Page = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-center items-center p-24">
        <FilterProducts />
        <ShoppingContent />
      </main>
    </>
  );
};

const ShoppingContent = () => {
  const { filteredList, addToCart, isLoading, setProducts, setIsLoading } =
    useShoppingContext();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/products", {
        method: "GET",
      });
      const result = (await response.json()) as { data: ShoppingItemsType[] };

      setProducts(result.data);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="grid grid-cols-3 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {filteredList.map((item) => (
          <React.Fragment key={item.id}>
            <ShopCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              imgLink={item.imgLink}
              addToCart={() => addToCart(item)}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Page;
