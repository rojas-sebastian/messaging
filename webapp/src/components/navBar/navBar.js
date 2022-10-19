import React from "react";
import { Link } from "react-router-dom";
import "flowbite";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-row justify-between mx-auto">
        <Link
          className="flex self-center text-xl font-semibold whitespace-nowrap  dark:text-white"
          to="/"
        >
          <img
            className="mr-3 h-6 sm:h-9"
            src="https://lahaus.imgix.net/static/branding/logo-lahaus-full.svg?auto=compress,format&amp;dpr=2"
            alt="LaHaus logo"
          ></img>
        </Link>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-row-reverse p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="block py-2 pr-4 pl-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                to="/history"
              >
                history
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
