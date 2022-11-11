import React from "react";

import { MenuIcon } from "@heroicons/react/solid";

const Sample01 = () => {
  return (
    <div className="max-w-[2000px] mx-auto text-neutral-900 dark:text-neutral-200 bg-white dark:border-neutral-800">
      <nav className="p-4 mx-auto bg-amber-400">
        <div className="container flex items-center justify-between mx-auto">
          <a
            href="#"
            aria-label="Go to homepage"
            className="rounded-sm focus:outline-none focus-visible:ring-4 ring-offset-4 lg:top-9"
          >
            {/* <img src="/" alt="logo" className="w-48 md:w-64 lg:w-72" /> */}
          </a>

          <button
            id="menu"
            className="rounded-sm lg:hidden focus:outline-none focus-visible:ring-4 ring-offset-4"
          >
            <MenuIcon className="w-6 h-6 " />
          </button>

          <div
            role="menubar"
            className="absolute left-0 right-0 flex flex-col gap-4 p-6 text-lg text-center shadow-xl top-10 bg-amber-400"
          >
            <a href="#" role="menuitem" className="px-6 py-1 ">
              Home
            </a>
            <a href="#" role="menuitem">
              Home
            </a>
            <a href="#" role="menuitem">
              Home
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sample01;
