import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { links } from "../../data";
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <header className="z-[900] absolute w-full text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href={"/"}>
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <Logo className="w-12 h-12" />

            <span className="ml-3 text-xl">Gamari</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {links.map((item) => (
            <Link href={item.link} key={item.link}>
              <a className="mr-5 hover:text-gray-900 hover:scale-110 hover:cursor-pointer">
                {item.title}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
