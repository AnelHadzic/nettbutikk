/* eslint-disable @next/next/no-img-element */
"use client";
import { IProduct } from "@/app/data/interface/IProduct";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: number } }) => {
  const productId = params.id;

  const [productData, setProductData] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const API_URL = `http://localhost:3000/api/products/${productId}`;
        const response = await axios.get(API_URL);
        console.log(response.data.data);
        setProductData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
    console.log(productData);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-4 sm:p-8">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={productData?.imgLink}
            alt={productData?.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productData?.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {productData?.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
