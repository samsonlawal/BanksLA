import { React, useState } from "react";
import "./Faq.css";
import { Minus } from "react-feather";
import { Plus } from "react-feather";
import pattern from "../Images/pattern.png";

import { RiQuestionnaireLine } from "react-icons/ri";

export default function Faq(props) {
  const [selected, setSelected] = useState(null);
  const items = props.items;

  const open = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div
      className="bg-black h-fit w-full py-28 flex flex-col justify-center items-center px-4 md:px-20 lg:px-30"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="w-full flex flex-col lg:flex-row lg:justify-between">
        <h1 className="text-white font-semibold text-4xl text-center lg:w-120 lg:text-5xl lg:text-left font-mont">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <div className="flex flex-row justify-center align-top gap-x-2">
          <hr className="w-60 border-gray-500 border-1 mt-4 hidden lg:flex" />
          <p className="text-gray-300 text-lg text-center py-4 md:py-0 lg:w-96 lg:text-left font-open">
            Find answers to common questions most of our guests inquire about.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-12 w-full">
        {items.map((item, i) => (
          <div
            className="w-full border-b-2 border-gray-400 flex flex-col justify-center items-center h-fit my-6 font-medium"
            key={item.id}
            onClick={() => open(i)}
          >
            <div className="w-full flex flex-row justify-between items-center">
              <button
                // key={item.id}
                className={`h-16 text-base w-full text-white text-left rounded-xl flex flex-row justify-between items-center font-mont ${
                  selected === i ? "active" : ""
                }`}
              >
                {item.question}
              </button>

              <button className="text-white">
                {" "}
                {selected === i ? (
                  <RiQuestionnaireLine
                    className="ml-8 text-primary"
                    size={20}
                  />
                ) : (
                  <RiQuestionnaireLine className="ml-8" size={20} />
                )}{" "}
              </button>
            </div>

            <div className={`panel  ${selected === i ? "open" : "close"}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-white font-bold text-3xl text-center mt-20 font-mont">
        Have more <span className="text-primary">questions?</span>
      </h1>
      <button className="bg-white hover:bg-primary hover:text-white text-black w-fit text-lg font-medium px-10 py-4 my-10 font-mont">
        Chat with us
      </button>
    </div>
  );
}
