"use client";
import { useShoppingContext } from "@/app/context/ShoppingContext";
import { IProduct } from "@/app/data/interface/IProduct";
import React from "react";

const ShoppingCart = () => {
  const {
    cartIsOpen,
    setCartIsOpen,
    shoppingCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    setShoppingCart,
    totalCost,
  } = useShoppingContext();
  return (
    <>
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-100 h-screen p-4 overflow-y-auto transition-transform ${
          cartIsOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Handlekurv
        </h5>
        <button
          onClick={() => setCartIsOpen(!cartIsOpen)}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mb-6"></div>
        <hr />
        <div className="mb-6"></div>
        {shoppingCart.length > 0 ? (
          <>
            {shoppingCart.map((item: IProduct) => (
              <React.Fragment key={item.id}>
                <div className="mb-3"></div>
                <p>{item.title}</p>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Antall: {item.quantity}
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                  {item.price}kr
                </span>

                <button onClick={() => increaseQuantity(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="#00a36c"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <rect width="36" height="36" x="6" y="6" rx="3" />
                      <path strokeLinecap="round" d="M24 16v16m-8-8h16" />
                    </g>
                  </svg>
                </button>
                <button onClick={() => decreaseQuantity(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#2986cc"
                      d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"
                    />
                  </svg>
                </button>
                <button onClick={() => deleteFromCart(item.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#c00"
                      d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
                    />
                  </svg>
                </button>
                <div className="mb-3"></div>
                <hr />
              </React.Fragment>
            ))}
            <p>Total: {totalCost}kr</p>
            <div className="mb-6"></div>
            <button
              onClick={() => console.log(shoppingCart)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Kjøp
            </button>
            <button
              onClick={() => setShoppingCart([])}
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Slett handlekurv
            </button>
          </>
        ) : (
          <p>Handlekurven er tom</p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
