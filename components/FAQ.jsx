import React, { useRef, useState } from "react";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

function FAQ({ data }) {
  const [expandedCards, setExpandedCards] = useState(Array(data.length).fill(false));

  // Toggle function to expand/collapse each card
  const handleToggle = (index) => {
    setExpandedCards((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

  return (
    <div className="flex flex-col lg:w-[80%] mx-auto gap-5 p-5 w-screen">
      {data.map((single, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          className="p-5 w-[100%] border-b-2 border-[#222] flex flex-col items-start gap-5 cursor-pointer"
        >
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-5 items-center">
              <h1 className="font-p_md text-xl md:text-2xl tracking-wider">
                {single.heading}
              </h1>
            </div>
            <p>{expandedCards[index] ? <FaCircleChevronUp className="text-xl md:text-2xl"/> : <FaCircleChevronDown className="text-xl md:text-2xl"/>}</p>
          </div>

          <div
            className={`overflow-hidden ${
              expandedCards[index] ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="font-mont tracking-wider opacity-100">
              {single.para}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
