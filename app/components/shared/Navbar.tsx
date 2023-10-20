"use client";
import {
  ShoppingProvider,
  useShoppingContext,
} from "@/app/context/ShoppingContext";
import { useRouter } from "next/navigation";
import ShoppingCart from "../products/Cart";

const Navbar = () => {
  const { setCartIsOpen, cartIsOpen, shoppingCart } = useShoppingContext();
  const router = useRouter();
  return (
    <>
      <ShoppingCart />{" "}
      <nav className="bg-slate-800 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center font-bold ... text-white">
            ANELSHOP
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
              <li>
                <button
                  type="button"
                  className="flex items-center text-white bg-slate-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => router.push("/")}
                >
                  Hjem
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    className="ml-2"
                  >
                    <path
                      fill="currentColor"
                      d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center text-white bg-slate-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => router.push("/Produkter")}
                >
                  Produkter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 14 14"
                    className="ml-2"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m13.25 9.36l-3.89 3.89a.75.75 0 0 1-1.06 0L1.79 6.74a.36.36 0 0 1-.11-.29l.59-3.84a.37.37 0 0 1 .34-.34l3.84-.59a.36.36 0 0 1 .29.11l6.51 6.51a.75.75 0 0 1 0 1.06ZM4.03 4.03L.53.53"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center text-white bg-slate-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => setCartIsOpen(!cartIsOpen)}
                >
                  Handlekurv
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    className="ml-2"
                  >
                    <path
                      fill="currentColor"
                      d="M7.005 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3Zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2v-2Zm2-2h6V6a3 3 0 0 0-6 0v2Z"
                    />
                  </svg>
                  {shoppingCart.length > 0 ? (
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                      {shoppingCart.length}
                    </span>
                  ) : null}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
    </>
  );
};

export default Navbar;
