import React from 'react'
import ReviewCards from './ReviewCards';

const Testimonials = () => {
  return (
    <div className="flex p-10  flex-col gap-4 bg-gray-50 w-full h-full pt-16 ">
      <h2 className="text-3xl md:text-5xl text-center font-[400] ">
       What our customers say about DoctorMatch
      </h2>
      <ReviewCards />
    </div>
  );
}

export default Testimonials