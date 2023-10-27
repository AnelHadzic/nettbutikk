"use client";

import CardSkeleton from "@/app/components/products/CardSkeleton";
import Cart from "@/app/components/products/Cart";
import FilterProducts from "@/app/components/products/FilterProducts";
import ShopCard from "@/app/components/products/ShopCard";
import { useShoppingContext } from "@/app/context/ShoppingContext";
import { IProduct } from "@/app/data/interface/IProduct";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center flex-col items-center mt-6">
        <FilterProducts />
      </div>
      <main className="flex flex-col items-center min-h-screen p-4 sm:p-8">
        <button
          onClick={() => router.push("/admin/legg-til-produkter")}
          className="text-white mb-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Legg til produkter
        </button>
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
      const result = (await response.json()) as { data: IProduct[] };

      setProducts(result.data);
      console.log(result.data);
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
              id={item.id}
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
