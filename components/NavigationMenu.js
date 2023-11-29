"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavigationMenu() {
  const pathname = usePathname()

  const [openMenuNavbar, setOpenMenuNavbar] = React.useState(false);
  const toggleMenuNavbar = () => {
    setOpenMenuNavbar(!openMenuNavbar);
  };

  const menuList = [
    {
      title: "Home",
      direct: "/",
      key: "home",
      active: true,
    },
    {
      title: "Services",
      direct: "/services",
      key: "services",
      active: true,
    },
    {
      title: "About",
      direct: "/about",
      key: "about",
      active: true,
    },
    {
      title: "Contact",
      direct: "/contact",
      key: "contact",
      active: true,
    },
  ];
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WebDev
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black hover:text-blue-500 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center dark:text-white dark:hover:text-blue-500 "
          >
            Login
          </button>
          <button
            onClick={toggleMenuNavbar}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:scale-110 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-300 ease-in-out"
            aria-controls="navbar-sticky"
            aria-expanded={openMenuNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:block ${
            openMenuNavbar
              ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
              : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 font-medium rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuList.map((value, key) => {
              return(
              <li key={key}>
                <Link
                  href={`${value.direct}`}
                  className={`${pathname === value.direct ? 'block bg-blue-200 scale-110 p-0' : ''
                }block py-2 px-3 text-gray-900 rounded md:w-32 md:text-center hover:bg-gray-200 md:hover:bg-gray-200 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300 ease-in-out hover:scale-110`}
                  aria-current="page"
                >
                  {value.title}
                </Link>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
