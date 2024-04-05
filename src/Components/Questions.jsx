import React, { useState } from "react";

function Questions() {
  const [faqs, setFaqs] = useState([
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, soluta!",
      isOpen: false,
    },
    {
      question: "Quisquam repudiandae quam nam dolore?",
      answer:
        "Quisquam repudiandae quam nam dolore! Eum libero esse autem magni quam.",
      isOpen: false,
    },
    {
      question: "Iure distinctio est accusantium similique?",
      answer:
        "Iure distinctio est accusantium similique? Consequatur rem eaque unde!",
      isOpen: false,
    },
  ]);

  const toggleCollapse = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="container max-w-[896px] xl:w-[846px] lg:[896px] my-24 lg:my-0 md:my-0 sm:px-8 mx-auto vsm:px-6 relative z-10">
      <section className="mb-32">
        <h2 className="text-customPurple text-[27px] mb-8 pl-6 text-3xl font-semibold leading-8 text-center">
          Frequently asked questions
        </h2>

        <div id="accordionFlushExample">
          {faqs.map((faq, index) => (
            <div className="rounded-none bg-lightPurple mb-5" key={index}>
              <h2
                className={`mb-0 ${
                  faq.isOpen ? "text-black" : "text-customPurple"
                } font-medium`}
              >
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none [!data-te-collapse-collapsed]:text-primary [!data-te-collapse-collapsed]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[!data-te-collapse-collapsed]:text-primary-400"
                  type="button"
                  onClick={() => toggleCollapse(index)}
                >
                  {faq.question}{" "}
                  <span className="ml-auto text-2xl">
                    {faq.isOpen ? "\u002D" : "\u002B"}
                  </span>
                </button>
              </h2>
              <div
                className={`py-4 px-5 text-customBlack font-normal ${
                  faq.isOpen ? "" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Questions;
