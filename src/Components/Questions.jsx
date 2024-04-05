import React, { useState } from "react";

function Questions() {
  const [isCollapsed, setIsCollapsed] = useState({
    one: true,
    two: true,
    three: true,
  });

  const toggleCollapse = (item) => {
    setIsCollapsed({
      ...isCollapsed,
      [item]: !isCollapsed[item],
    });
  };

  return (
    <div className="container max-w-[896px] xl:w-[846px] lg:[896px]  my-24 lg:my-0 md:my-0 sm:px-8 vsm:px-6 mx-auto vsm:px-6 ">
      <section className="mb-32">
        <h2
          className="text-customPurple  text-[27px] mb-8 pl-6 text-3xl font-semibold leading-8 text-center"
          style={{
            fontFamily: "Poppins",
            letterSpacing: "0.4px",
          }}
        >
          Frequently asked questions
        </h2>

        <div id="accordionFlushExample">
          <div className="rounded-none bg-lightPurple mb-5">
            <h2
              className={`mb-0 ${
                isCollapsed.one ? "text-black" : "text-customPurple"
              } font-medium`}
              id="flush-headingOne"
            >
              <button
                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none [!data-te-collapse-collapsed]:text-primary [!data-te-collapse-collapsed]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[!data-te-collapse-collapsed]:text-primary-400"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                onClick={() => toggleCollapse("one")}
              >
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?{" "}
                <span className="ml-auto text-2xl">
                  {isCollapsed.one ? "\u002B" : "\u2212"}
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className={`!visible border-0 ${isCollapsed.one ? "hidden" : ""}`}
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingOne"
              data-te-parent="#accordionFlushExample"
            >
              <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </div>
            </div>
          </div>
          <div className="rounded-none bg-lightPurple mb-5">
            <h2
              className={`mb-0 ${
                isCollapsed.two ? "text-black" : "text-customPurple"
              } font-medium`}
              id="flush-headingTwo"
            >
              <button
                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none [!data-te-collapse-collapsed]:text-primary [!data-te-collapse-collapsed]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[!data-te-collapse-collapsed]:text-primary-400"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                onClick={() => toggleCollapse("two")}
              >
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?{" "}
                <span className="ml-auto text-2xl">
                  {isCollapsed.two ? "\u002B" : "\u2212"}
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className={`!visible border-0 ${isCollapsed.two ? "hidden" : ""}`}
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingTwo"
              data-te-parent="#accordionFlushExample"
            >
              <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </div>
            </div>
          </div>

          <div className="rounded-none bg-lightPurple">
            <h2
              className={`mb-0 ${
                isCollapsed.three ? "text-black" : "text-customPurple"
              } font-medium`}
              id="flush-headingThree"
            >
              <button
                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none [!data-te-collapse-collapsed]:text-primary [!data-te-collapse-collapsed]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[!data-te-collapse-collapsed]:text-primary-400"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                onClick={() => toggleCollapse("three")}
              >
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?{" "}
                <span className="ml-auto text-2xl">
                  {isCollapsed.three ? "\u002B" : "\u2212"}
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className={`!visible border-0 ${
                isCollapsed.three ? "hidden" : ""
              }`}
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingThree"
              data-te-parent="#accordionFlushExample"
            >
              <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Questions;
