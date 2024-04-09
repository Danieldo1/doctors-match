'use client'

import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const AboutUs = () => {
  const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "start start"],
});
const scale = useSpring(scrollYProgress);

  return (
    <div
      ref={ref}
      className="flex p-10 relative flex-col justify-center items-center gap-4 bg-gray-50 w-full h-full pt-16 "
    >
      {/* About Us Text */}
      <motion.div
        style={{ scale }}
        className="flex flex-col p-10 backdrop-blur-sm bg-white/30 absolute top-[-15px] md:top-40 left-[-10px] md:left-10 lg:left-20 xl:left-40 z-[3] max-w-sm  md:max-w-md rounded-sm"
      >
        <h2 className="text-3xl md:text-5xl  font-[400] ">About Us</h2>
        <p className="text-sm md:text-lg text-gray-800 md:text-gray-600 mt-10 font-[500] md:font-[300]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <button className="flex items-center justify-center gap-2 mt-10 text-black hover:text-primary transition-all duration-300 ease-in">
          Read more <ArrowRight className="w-4 h-4 " />
        </button>
      </motion.div>
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
