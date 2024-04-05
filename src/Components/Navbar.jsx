import React, { useState } from "react";
import logo from "../Resources/Img/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customPurple max-w-[1440px] mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img
            src={logo}
            className="w-238.89 h-25 mb-3 opacity-100"
            alt="AT Digital Logo"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2  justify-center text-sm w-[31px] h-[24px]  md:hidden dark:text-gray-400"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
          style={{
            gap: "0px",
            borderRadius: "5px 0px 0px 0px",
            opacity: "0px",
          }}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className=" text-white"
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
          )}
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-inter font-medium text-white text-body1 leading-body1 flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 rounded  md:p-0 dark:text-white"
                aria-current="page"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3  md:border-0 md:p-0 dark:text-white "
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3  md:border-0 md:p-0 dark:text-white "
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="block py-2 px-3  md:border-0 md:p-0 dark:text-white "
              >
                CAREERS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
