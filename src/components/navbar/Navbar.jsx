import React from "react";
import {BsPersonCircle} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar relative h-12 w-full flex items-center">
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full ml-7">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className=" focus:ring-0 ring-0 focus:border-violet-800 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10"
            placeholder="Search..."
            required=""
          />
        </div>
      </form>
      <div className="items absolute right-8">
        <div className="item flex items-center">
          <span className="text-gray-600 mr-2">John Doe</span>
          <BsPersonCircle className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
