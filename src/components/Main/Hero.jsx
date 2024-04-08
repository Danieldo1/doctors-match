import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-4 max-w-md md:w-1/2">
        <div>
          <h1 className="text-sm md:text-lg font-light">Meet With</h1>
          <h2 className="text-5xl md:text-8xl font-[300]">Our Best</h2>
          <h3 className="text-6xl md:text-9xl font-[300] text-primary -mt-3">
            Doctors
          </h3>
          <h4 className="text-4xl md:text-7xl font-[300] text-primary">
            Online
          </h4>
        </div>
        <div className="max-w-[16rem] md:max-w-xl z-[5]">
          <p className="text-sm md:text-lg font-light leading-tight">
            Connect with millions of doctors online. Chat with them and get a
            second opinion. All in one place. Stop waiting. Start treating.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="default">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      {/* Div with image and gradient */}
      <div className="relative w-full md:w-1/2">
        <div className=" flex justify-center items-center overflow-hidden md:overflow-visible">
          <div className="absolute top-0 md:top-[-54px] right-2 lg:-right-40 w-[80%] h-[114%] md:h-[117%] custom:h-[120%] lg:h-[120%] bg-gradient-to-r from-blue-300/70 to-transparent skew-x-[-3deg]"></div>
          <div className="w-full h-full ">
            <Image
              src="/hero.png"
              alt="Hero"
              fill
              className=" object-cover mt-10 ml-5 lg:ml-10 xl:ml-20 2xl:ml-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
