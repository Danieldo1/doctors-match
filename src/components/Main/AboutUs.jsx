import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex p-10 relative flex-col justify-center items-center gap-4 bg-gray-50 w-full h-full pt-16 ">
      {/* About Us Text */}
      <div className="flex flex-col p-10 backdrop-blur-sm bg-white/30 absolute top-[-15px] md:top-40 left-[-10px] md:left-10 lg:left-20 xl:left-40 z-[3] max-w-sm  md:max-w-md rounded-sm">
        <h2 className="text-3xl md:text-5xl  font-[400] ">About Us</h2>
        <p className="text-sm md:text-lg text-gray-500 mt-10 font-[300]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <button className="flex items-center gap-2 mt-10">
          Read more <ArrowRight />
        </button>
      </div>
      {/* Images */}
      <div className="md:ml-40">
        <div className=" w-full h-full">
          {/* Doctor Image */}
          <Image
            src="/doctor.jpg"
            alt="doctor"
            width={1000}
            height={1000}
            className="z-[2] relative"
          />
          {/* Texture Image */}
          <div className="relative bottom-16 -left-5 w-full h-full z-0">
            <Image
              src="/texture.png"
              alt="texture"
              width={100}
              height={100}
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
