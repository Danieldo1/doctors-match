import React from 'react'
import IntroCount from './IntroCount';


const stats = [
  { number: "25356", description: "Patients Served" },
  { number: "6050", description: "Consultations this week" },
  { number: "22", description: "Locations" },
  { number: "95", description: "Success Rate", isPercentage: true },
];

const Intro = () => {
  return (
    <section className='mt-10'>
      <div className="flex p-10  flex-col gap-4 bg-gray-200 w-full h-full pt-16 ">
        <h2 className="text-3xl md:text-5xl text-center font-[400] ">
          Our stats show that we have the best patients.
        </h2>
        <p className="text-sm md:text-lg text-gray-500 -mt-3 text-center font-[300]">
          Just look at what we have been doing.
        </p>
      </div>
      <IntroCount stats={stats} />
    </section>
  );
}

export default Intro