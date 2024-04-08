"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardComponent = () => {
  const cards = [
    {
      image: "doctor.jpg",
      name: "Dr. Andrew",
      profession: "Surgeon",
      rating: 5,
      description:
        "And excellence partiality estimating terminated day everything.",
    },
    {
      image: "doctor.jpg",
      name: "Dr. Brown",
      profession: "Oncologist",
      rating: 5,
      description:
        "And excellence partiality estimating terminated day everything.",
    },
    // Add more card objects as needed
  ];

  return (
    <div className="bg-gray-50">
      <div className="flex pt-10 relative z-[5] pb-10 justify-center items-center flex-col gap-4 bg-gray-50 w-full">
        <h2 className="text-3xl md:text-5xl font-[400]">
          Meet Our Top Doctors
        </h2>
        <p className="text-sm md:text-lg text-gray-500 -mt-3 font-[300]">
          Get ready to be in hands of most caring doctors.
        </p>
      </div>
      <div className="relative">
        <div className="pt-20 overflow-x-hidden">
          <Carousel className="bg-gray-200  ">
            <CarouselContent className="mt-20 w-full max-w-sm md:max-w-full">
              {cards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  <Card className="mx-auto ml-5 bg-white rounded-lg shadow-md relative -top-40 z-10">
                    <CardHeader className="">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{card.name}</CardTitle>
                      <CardDescription>{card.profession}</CardDescription>
                      <div className="flex mb-2">
                        {Array(card.rating)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              &#9733;
                            </span>
                          ))}
                      </div>
                      <CardDescription>{card.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Schedule Appointment
                      </button>
                      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
                        View Details
                      </button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
