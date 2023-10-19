"use client";
import ShopCard from "@/app/components/products/ShopCard";
import { ShoppingContext } from "@/app/context/ShoppingContext";
import { ShoppingData, ShoppingItemsType } from "@/app/data/ShoppingItems";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingItemsType[]>([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [totalCost, setTotalCost] = useState<number>(0);

  const addToCart = (item: ShoppingItemsType) => {
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

  return (
    <>
      <ShoppingContext.Provider value={{ shoppingCart, setShoppingCart }}>
        <main className="flex min-h-screen flex-col justify-center items-center p-24">
          <button onClick={() => setCartIsOpen(!cartIsOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.005 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3Zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2v-2Zm2-2h6V6a3 3 0 0 0-6 0v2Z"
              />
            </svg>
          </button>
          {cartIsOpen && (
            <ShoppingCart
              cartIsOpen={cartIsOpen}
              setCartIsOpen={setCartIsOpen}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              totalCost={totalCost}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteFromCart={deleteFromCart}
            />
          )}

          <div className="grid grid-cols-2 gap-4">
            {ShoppingData.map((item) => (
              <>
                <ShopCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  addToCart={() => addToCart(item)}
                />
              </>
            ))}
          </div>
        </main>
      </ShoppingContext.Provider>
    </>
  );
};

const ShoppingCart = ({
  cartIsOpen,
  setCartIsOpen,
  shoppingCart,
  setShoppingCart,
  totalCost,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
}) => {
  return (
    <>
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-100 h-screen p-4 overflow-y-auto transition-transform ${
          cartIsOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white dark:bg-gray-800`}
        tabIndex="-1"
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
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mb-6"></div>
        <hr />
        <div className="mb-6"></div>
        {shoppingCart != "" ? (
          <>
            {shoppingCart.map((item: ShoppingItemsType) => (
              <>
                <div className="mb-3"></div>
                <p>
                  {item.title} ({item.price}kr)
                </p>

                <input
                  value={item.quantity}
                  className="w-12 px-3 py-1 text-center text-gray-700 border-t border-b border-gray-300"
                />
                {/* Add quantity +1 */}
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
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <rect width="36" height="36" x="6" y="6" rx="3" />
                      <path stroke-linecap="round" d="M24 16v16m-8-8h16" />
                    </g>
                  </svg>
                </button>
                {/* Subtract quantity -1 */}
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
                {/* Delete from the state shoppingCart*/}
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
              </>
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

export default Page;
