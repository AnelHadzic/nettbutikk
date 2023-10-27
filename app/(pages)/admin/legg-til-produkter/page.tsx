"use client";
import { Product } from "@/app/data/FakeDatabase/Product";
import { ICategory } from "@/app/data/interface/ICategory";
import { IProduct } from "@/app/data/interface/IProduct";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [newProduct, setNewProduct] = useState<IProduct>({
    id: Product.length + 1,
    title: "",
    description: "",
    price: 0,
    category: "",
    quantity: 1,
    imgLink: "",
  });

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const API_URL = `http://localhost:3000/api/categories`;
        const response = await axios.get(API_URL);
        setCategories(response.data.data);
      } catch (error) {
        setError("Failed to fetch categories.");
      }
    };
    fetchCategories();
  }, []);

  const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const API_URL = `http://localhost:3000/api/products`;
      const response = await axios.post(API_URL, newProduct);
      setStatus("Velykket");
    } catch (error) {
      setError("Noe gikk galt");
    }
  };

  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-4 sm:p-8">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-6">
            Trykk på Produkter i navigasjon for å se at den kom med i listen,
            men på grunn av at det blir kun lagret i minnen, kan du ikke gå inn
            i produkter[id] siden, da det blir slettet fra minnen. Jeg har ikke
            wrappa noe fra context i produkter[id]{" "}
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Legg til nye produkter
          </h5>
          {status && <p className="text-green-500">{status}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-6"></div>
          <form onSubmit={addProduct}>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Produkt navn:
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) =>
                  setNewProduct((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Beskrivelse:
              </label>
              <input
                type="text"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pris:
              </label>
              <input
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    price: Number(e.target.value),
                  }))
                }
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kategori:
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }))
                }
              >
                <option value="">Velg en kategori</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="imgURL"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                URL Bilde:
              </label>
              <input
                type="text"
                id="imgURL"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    imgLink: e.target.value,
                  }))
                }
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;
