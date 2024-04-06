import React from "react";
import { Link } from "react-router-dom";
import logo from "../Resources/Img/Logo.png";

function Footer() {
  return (
    <footer className="bg-customPurple lg:pt-10  md:px-10 vsm:px-5 sm:px-5 pt-10 pb-5 max-w-[1440px] mx-auto   ">
      <div className="md:flex md:justify-between mb-16">
        <div className="mb-6 md:mb-0 ">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="w-[238.89px] mb-5 h-[25px] me-3"
              alt="FlowBite Logo"
            />
          </Link>
          <p className="max-w-[413px] leading-[19.2px] text-base font-lato text-white">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className=" font-inter  flex w-[522px] vsm:w-auto lg:h-[141px] justify-between vsm:flex-col lg:ml-10 sm:ml-0  vsm:ml-0 ">
          <div className="">
            <h2 className="mb-2  text-[21px] text-left font-semibold  text-white uppercase">
              Our Technologies
            </h2>
            <ul className=" text-white font-medium text-sm leading-8 ">
              <li className="">
                <Link
                  to="/"
                  className="inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  ReactJS
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  Gatsby
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  NextJS
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  NodeJS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2  text-[21px]  text-left font-semibold vsm:mt-7 text-white uppercase">
              Follow us
            </h2>
            <ul className="text-white font-medium text-sm">
              <li className="">
                <Link
                  to="/"
                  className="leading-8 inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  Social media Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="leading-8 inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  Web & Mobile App{" "}
                  <br className="lg:hidden md:hidden sm:hidden vsm:hidden xl:inline" />{" "}
                  Development
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="leading-8 inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
                >
                  Data & Analytics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className=" border-1 lg:mt-20 border-white-700 sm:mx-auto my-2 lg:w-1/2 md:w-3/4 sm:w-full" />
      <div className="flex font-inter font-medium text-sm justify-center text-white">
        <span className="text-sm">
          <Link
            to="/"
            className="inline-block hover:text-gray-300 transition-transform transform hover:scale-105 mr-5"
          >
            Privacy Policy
          </Link>
          <span className="w-4">|</span>
          <Link
            to="/"
            className="ml-5 inline-block hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            Terms & Conditions
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
