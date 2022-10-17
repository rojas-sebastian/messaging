import React from "react";
import { Link } from "react-router-dom";

//https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-3 bg-green-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            LaHaus
          </Link>
        </div>
        <div
          className="lg:flex flex-grow items-center"
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to="/create"
              >
                create
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
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

{
  /* <nav>
  <div>
    <ul>
      <li>
        <Link to="/create">create</Link>
      </li>
      <li>
        <Link to="/history">history</Link>
      </li>
    </ul>
  </div>
</nav>; */
}
