'use client'

import React, { useState } from "react";

const BoxComponent = () => {
  const [activeBox, setActiveBox] = useState(0);

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  const boxData = [
    {
      number: "01",
      title: "Create Account",
      paragraph: "Latter person am secure of estate genius at.",
    },
    {
      number: "02",
      title: "Search Doctor",
      paragraph: "Latter person am secure of estate genius at.",
    },
    {
      number: "03",
      title: "Schedule Appointment",
      paragraph: "Latter person am secure of estate genius at.",
    },
    {
      number: "04",
      title: "Start Consultation",
      paragraph: "Latter person am secure of estate genius at.",
    },
  ];

  return (
    <div className="flex  items-center w-full flex-row flex-wrap justify-center md:justify-between lg:px-20">
      {boxData.map((box, index) => (
        <div
          key={index}
          className={`p-4 cursor-pointer mt-5 aspect-square w-60 h-60 hover:border-b-4 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:opacity-70 ${
            activeBox === index
              ? "border-b-4 border-blue-500 bg-white shadow-lg hover:opacity-100  hover:border-blue-500 "
              : "border-b-4 border-gray-300 bg-gray-50 opacity-40"
          }`}
          onClick={() => handleBoxClick(index)}
        >
          <div className="flex items-center relative justify-between mb-2 pt-10">
            <span className="text-9xl absolute -top-0 right-[50px] font-bold opacity-15">{box.number}</span>
            <h3 className="text-lg text-center font-semibold mt-10">{box.title}</h3>
          </div>
          <p className="text-gray-600">{box.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxComponent;
