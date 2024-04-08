'use client'
import React from 'react'
import CountUp from "react-countup";

const IntroCount = ({ stats }) => {
  return (
    <div className="flex flex-row justify-evenly p-5 gap-4 bg-gray-300 w-full h-full md:px-10 pb-16">
      {stats.map((stat, index) => (
        <div key={stat.description} className="flex flex-col items-center">
          <h3 className="text-3xl md:text-5xl font-[300]">
            {stat.isPercentage ? (
              <CountUp end={stat.number} duration={2.75} suffix="%" />
            ) : (
              <CountUp end={stat.number} duration={2.75} />
            )}
          </h3>
          <p className="text-xs md:text-base font-[300] text-gray-500 text-center">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default IntroCount