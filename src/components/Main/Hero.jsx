import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 ">
        <div className="flex flex-col gap-4 max-w-md">
          <div>
            <h1 className="text-sm md:text-lg font-light">Meet With</h1>
            <h2 className="text-5xl md:text-8xl font-[300]">Our Best</h2>
            <h3 className="text-6xl md:text-9xl font-[300]  text-primary -mt-3">
              Doctors
            </h3>
            <h4 className="text-4xl md:text-7xl font-[300]  text-primary">
              Online
            </h4>
          </div>
          <div className="max-w-[16rem] md:max-w-xl z-[5]">
            <p className="text-sm md:text-lg font-light leading-tight">
              Connect with millions of doctors online. Chat with them and get a
              second opinion.All in one place. Stop waiting. Start treating.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="default">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 md:top-0 left-6 md:left-0 w-full">
        <div className="w-[110%] md:w-full h-full flex justify-center items-center overflow-hidden md:overflow-visible">
          <div className="relative ">
            <div className="absolute top-[-70px] md:top-[-100px] -right-5 lg:-right-40 w-1/2 h-[130%] md:h-[117.6%] custom:h-[115%] lg:h-[114%]  bg-gradient-to-r from-blue-300/70 to-transparent skew-x-[-3deg]"></div>
            <Image
              src="/hero.png"
              alt="Hero"
              width={1000}
              height={1000}
              className="relative ml-28 lg:ml-40 xl:ml-60 2xl:ml-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
