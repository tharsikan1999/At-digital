import React, { useState } from "react";
import logo from "../Resources/Img/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customPurple max-w-[1440px] mx-auto xl:pr-10 md:pr-5 sm:pr-0">
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
          className="inline-flex items-center p-2 justify-center text-sm w-[40px] h-[40px] md:hidden dark:text-gray-400"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
          style={{
            gap: "0px",
            borderRadius: "0px 5px 0px 0px",
            opacity: "0px",
          }}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg
              className="w-16 h-16 text-black"
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
              className="text-white"
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
          className={`fixed inset-0 z-10 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          } md:hidden`}
        >
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="h-full bg-white fixed top-0 right-0 w-screen shadow-md transform transition-transform ease-in-out duration-300">
            <div className="flex justify-end mt-4 mr-4">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-10 h-10 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="mt-8 font-medium font-inter">
              <li>
                <Link
                  to="/"
                  className="block py-2  sm:mb-4  vsm:mb-4 px-3 text-black hover:text-gray-300 transition-transform transform hover:scale-105"
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 sm:mb-4 vsm:mb-4 px-3  font-inter text-black hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2  px-3 sm:mb-4 vsm:mb-4 text-black hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2  px-3 sm:mb-4 vsm:mb-4 text-black hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="block py-2 px-3  sm:mb-4 vsm:mb-4 text-black hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  CAREERS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden font-inter font-medium md:flex md:items-center md:justify-end md:flex-1 lg:w-auto">
          <ul className="md:flex md:space-x-8">
            <li>
              <Link
                to="/services"
                className="text-white hover:text-gray-300 transition-transform transform hover:scale-105"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 transition-transform transform hover:scale-105"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 transition-transform transform hover:scale-105"
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="text-white hover:text-gray-300 transition-transform transform hover:scale-105"
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
