import React from "react";
import imgOne from "./Resources/Img/image 2.png";
import imgTwo from "./Resources/Img/image 1.png";
import Button from "./Components/Button";

function Home() {
  return (
    <>
      <section className="max-w-[1440px] h-[700px] mx-auto  bg-no-repeat  bg-center bg-[url('./Resources/Img/background.png')] relative aspect-w-16 aspect-h-7 ">
        <div className="md:hidden sm:hidden vsm:hidden lg:block xl:w-[630px] lg:w-[622px] md:left-0 h-[306px] bg-gradient-to-r from-customGreen to-customBlue pt-6  pb-8 pl-10 pr-10 text-white absolute lg:left-20 lg:bottom-10 md:bottom-[0px] sm:bottom-[0px] vsm:bottom-[0px] flex flex-col justify-center vsm:pr-10 ">
          <h1 className="font-inter font-bold text-5xl leading-[48px] vsm:text-3xl mb-5 tracking-wide">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <Button />
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto  min-h-screen flex flex-col items-center lg:py-14 md:py-0  ">
        <div className=" lg:hidden md:left-0 h-[306px] bg-gradient-to-r from-customGreen to-customBlue pt-6  pb-8 pl-10 pr-10 text-white  lg:left-20 lg:bottom-10 md:bottom-[0px] sm:bottom-[0px] vsm:bottom-[0px] flex flex-col justify-center vsm:pr-10 md:bottom-[-306px] sm:bottom-[-306px] vsm:bottom-[-306px]">
          <h1 className="font-inter font-bold text-5xl leading-[48px] vsm:text-3xl mb-5 tracking-wide">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <Button />
        </div>
        <div className=" flex justify-between items-center xl:w-3/4 lg:w-3/4 md:w-full sm:w-full vsm:flex-col mt-10 ">
          <div className="ml-10">
            <img
              src={imgOne}
              className="xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[275px] vsm:w-[275px] vsm:h-[275px]"
              alt="imgOne"
            />
          </div>
          <div className="w-1/2 pl-4 vsm:w-full flex flex-col vsm:items-center md:pr-10 sm:pr-8 vsm:px-6">
            <h1 className="font-Poppins font-semibold text-customPurple text-[27px] leading-33px tracking-[0.4px] text-left mb-6 vsm:text-center">
              Web & Mobile App Development
            </h1>

            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <div className="font-inter font-bold cursor-pointer w-[129px] h-[38px] bg-customOrange flex items-center justify-center rounded-md mt-8  text-white text-sm">
              LEARN MORE
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center xl:w-3/4 lg:w-3/4 md:w-full sm:w-full vsm:flex-col mt-20 ">
          <div className=" vsm:block sm:hidden">
            <img
              src={imgTwo}
              className="xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[275px] vsm:w-[275px] vsm:h-[275px]"
              alt="imgOne"
            />
          </div>
          <div className="w-1/2 pl-4  vsm:w-full flex flex-col vsm:items-center sm:pl-8 vsm:px-6 ">
            <h1 className="font-Poppins font-semibold text-customPurple text-[27px] leading-33px tracking-[0.4px] text-left mb-6 vsm:text-center">
              Digital Strategy Consulting
            </h1>

            <p>
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <div className="font-inter font-bold w-[129px] h-[38px] cursor-pointer bg-customOrange flex items-center justify-center rounded-md mt-8  text-white text-sm">
              LEARN MORE
            </div>
          </div>
          <div className=" vsm:hidden">
            <img
              src={imgTwo}
              className="xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[275px] vsm:w-[275px] vsm:h-[275px]"
              alt="imgOne"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
