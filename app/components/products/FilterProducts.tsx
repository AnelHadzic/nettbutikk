import { useShoppingContext } from "@/app/context/ShoppingContext";
import React from "react";

const FilterProducts = () => {
  const { setFiltered } = useShoppingContext();
  return (
    <>
      <p className="mb-2">Filtrer produkter basert på kategorier</p>
      <div className="flex space-x-2 mb-6">
        <button
          type="button"
          onClick={() => setFiltered("")}
          className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Reset
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            className="ml-2"
          >
            <path
              fill="currentColor"
              d="M7.207 2.543a1 1 0 0 1 0 1.414L5.414 5.75h7.836a8 8 0 1 1-8 8a1 1 0 1 1 2 0a6 6 0 1 0 6-6H5.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0Z"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setFiltered("TV")}
          className="flex items-center text-white bg-slate-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          TV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            className="ml-2"
          >
            <path
              fill="currentColor"
              d="M8 21v-2H4q-.825 0-1.413-.588T2 17V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.588 1.413T20 19h-4v2H8Zm-4-4h16V5H4v12Zm0 0V5v12Z"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setFiltered("Gaming")}
          className="flex items-center text-white bg-slate-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Gaming
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 15 15"
            className="ml-2"
          >
            <path
              fill="currentColor"
              d="M13.1 11.5c-.6.3-1.4.1-1.8-.5l-1.1-1.4H4.8L3.7 11c-.5.7-1.4.8-2.1.3c-.5-.4-.7-1-.6-1.5l.7-3.7C1.9 4.9 3 4 4.2 4H7V2.5C7 1.7 7.6 1 8.4 1h3.1c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5.2-.5.4V4h2.8c1.2 0 2.3.9 2.5 2.1l.7 3.7c.1.7-.2 1.4-.9 1.7zM6 6.5C6 5.7 5.3 5 4.5 5S3 5.7 3 6.5S3.7 8 4.5 8S6 7.3 6 6.5zm6 0c0-.3-.2-.5-.5-.5H11v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V6h-.5c-.3 0-.5.2-.5.5s.2.5.5.5h.5v.5c0 .3.2.5.5.5s.5-.2.5-.5V7h.5c.3 0 .5-.2.5-.5z"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setFiltered("Hvitevarer")}
          className="flex items-center text-white bg-slate-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Hvitevarer
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            className="ml-2"
          >
            <g fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M20.994 8.25H3.006c.027-2.636.191-4.104 1.166-5.078C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.975.974 1.139 2.442 1.166 5.078ZM5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm8.75 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                clip-rule="evenodd"
              />
              <path d="M9.75 15a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z" />
              <path
                fill-rule="evenodd"
                d="M3 9.75h18V13c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13V9.75Zm9 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z"
                clip-rule="evenodd"
              />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
};

export default FilterProducts;
