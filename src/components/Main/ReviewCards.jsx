'use client';

import { Card, CardContent, CardDescription } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const ReviewCards = () => {
  const reviews = [
    {
      text: "DoctorMatch made finding the right doctor for my needs a breeze. Their user-friendly platform and extensive database of qualified professionals made the process incredibly convenient.",
      author: "Emily Johnson",
    },
    {
      text: "I was hesitant at first, but DoctorMatch exceeded my expectations. Their team helped me find a compassionate specialist who truly understood my concerns.",
      author: "Michael Davis",
    },
    {
      text: "As a busy professional, I appreciated DoctorMatch's efficient service. They saved me valuable time by providing a curated list of highly-rated doctors in my area.",
      author: "Sarah Thompson",
    },
    {
      text: "DoctorMatch's commitment to patient satisfaction is evident in their personalized approach. They truly listened to my needs and provided tailored recommendations.",
      author: "David Wilson",
    },
    {
      text: "I can't thank DoctorMatch enough for their exceptional service. They connected me with a top-notch doctor who provided the care and guidance I desperately needed.",
      author: "Jessica Brown",
    },
    {
      text: "Finding the right specialist can be daunting, but DoctorMatch made the process seamless. Their platform is user-friendly, and their customer support is outstanding.",
      author: "Robert Anderson",
    },
    {
      text: "DoctorMatch's commitment to patient satisfaction is truly remarkable. They listened to my specific needs and provided personalized recommendations that exceeded my expectations.",
      author: "Samantha Taylor",
    },
    {
      text: "I highly recommend DoctorMatch to anyone seeking quality healthcare. Their dedication to connecting patients with the best doctors is unparalleled.",
      author: "Matthew Martinez",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <Carousel
        className="mx-auto max-w-3xl md:max-w-5xl"
        loop={true}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        stopOnInteraction={true}
       
      >
        <CarouselContent className="">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="relative basis-[80%] md:basis-1/2">
              <Card
                className={`p-6 w-[276px] aspect-square h-[276px]  flex flex-col justify-around ${
                  index === 4 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <CardContent>
                  <CardDescription>{review.text}</CardDescription>
                </CardContent>
                <div className="text-sm text-gray-600">{review.author}</div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ReviewCards;
