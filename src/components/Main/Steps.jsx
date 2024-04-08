import React from 'react'
import BoxComponent from './BoxComponent';

const Steps = () => {
  return (
    <div>
      <div className='flex p-10 justify-center items-center flex-col gap-4 bg-gray-50 w-full h-full py-16'>
        <h2 className="text-3xl md:text-5xl font-[400] ">How it Works</h2>
        <p className="text-sm md:text-lg text-gray-500 -mt-3 font-[300]">
          Its as easy as 1 2 3, to get your online doctor.
        </p>
      <BoxComponent />
      </div>
    </div>
  );
}

export default Steps