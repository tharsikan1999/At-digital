import React from "react";
import imgOne from "./Resources/Img/image 2.png";
import imgTwo from "./Resources/Img/image 1.png";

function Home() {
  return (
    <div22 className=" w-full min-h-screen flex flex-col items-center py-14 md:px-10 sm:px-10 ">
      <div className=" flex justify-between items-center xl:w-3/4 lg:w-3/4 md:w-full sm:w-full vsm:flex-col ">
        <div className="">
          <img
            src={imgOne}
            className="xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] md:w-[275px] md:h-[275px] vsm:w-[275px] vsm:h-[275px]"
            alt="imgOne"
          />
        </div>
        <div className="w-1/2 pl-4 vsm:w-full flex flex-col vsm:items-center ">
          <h1 className="font-Poppins font-semibold text-customPurple text-[27px] leading-33px tracking-[0.4px] text-left mb-6 vsm:text-center">
            Web & Mobile App Development
          </h1>

          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <div className="w-[129px] h-[38px] bg-customOrange flex items-center justify-center rounded-md mt-8 font-inter font-bold text-white text-sm">
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
        <div className="w-1/2 pl-4  vsm:w-full flex flex-col vsm:items-center ">
          <h1 className="font-Poppins font-semibold text-customPurple text-[27px] leading-33px tracking-[0.4px] text-left mb-6 vsm:text-center">
            Digital Strategy Consulting
          </h1>

          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div className="w-[129px] h-[38px] bg-customOrange flex items-center justify-center rounded-md mt-8 font-inter font-bold text-white text-sm">
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
    </div22>
  );
}

export default Home;
