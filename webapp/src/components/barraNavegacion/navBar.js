import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div class="container flex flex-wrap justify-between items-center mx-auto ">
        <Link
          class="self-center text-xl font-semibold whitespace-nowrap"
          to="/"
        >
          <img
            src="https://lahaus.imgix.net/static/branding/logo-lahaus-full.svg?auto=compress,format&amp;dpr=2"
            alt="LaHaus logo"
          ></img>
        </Link>
        <div
          class="w-full md:block md:w-fit sm:block sm:w-fit"
          id="navbar-default"
        >
          <ul className="flex flex-row p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 sm:flex-row sm:space-x-4 sm:mt-0 sm:text-sm sm:font-normal sm:border-0 sm:bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
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
