"use client";

import { Card, CardContent, CardDescription } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

const ReviewCards = () => {
const [api, setApi] = useState();
 const [current, setCurrent] = useState(0);
 const [count, setCount] = useState(0);

 useEffect(() => {
   if (!api) {
     return;
   }

   setCount(api.scrollSnapList().length);
   setCurrent(api.selectedScrollSnap() + 1);

   api.on("select", () => {
     setCurrent(api.selectedScrollSnap() + 1);
   });
 }, [api]);

  const reviews = [
    {
      text: "DoctorMatch made finding the right doctor for my needs a breeze. Their user-friendly platform and extensive database of qualified professionals made the process incredibly convenient.",
      author: "Emily Johnson",
      rating: 5,
    },
    {
      text: "I was hesitant at first, but DoctorMatch exceeded my expectations. Their team helped me find a compassionate specialist who truly understood my concerns.",
      author: "Michael Davis",
      rating: 4.5,
    },
    {
      text: "As a busy professional, I appreciated DoctorMatch's efficient service. They saved me valuable time by providing a curated list of highly-rated doctors in my area.",
      author: "Sarah Thompson",
      rating: 4,
    },
    {
      text: "DoctorMatch's commitment to patient satisfaction is evident in their personalized approach. They truly listened to my needs and provided tailored recommendations.",
      author: "David Wilson",
      rating: 3.5,
    },
    {
      text: "I can't thank DoctorMatch enough for their exceptional service. They connected me with a top-notch doctor who provided the care and guidance I desperately needed.",
      author: "Jessica Brown",
      rating: 5,
    },
    {
      text: "Finding the right specialist can be daunting, but DoctorMatch made the process seamless. Their platform is user-friendly, and their customer support is outstanding.",
      author: "Robert Anderson",
      rating: 4.5,
    },
    {
      text: "DoctorMatch's commitment to patient satisfaction is truly remarkable. They listened to my specific needs and provided personalized recommendations that exceeded my expectations.",
      author: "Samantha Taylor",
      rating: 5,
    },
    {
      text: "I highly recommend DoctorMatch to anyone seeking quality healthcare. Their dedication to connecting patients with the best doctors is unparalleled.",
      author: "Matthew Martinez",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <Carousel
        className="mx-auto max-w-3xl md:max-w-5xl"
        loop={true}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        stopOnInteraction={true}
        setApi={setApi}
      >
        <CarouselContent className="">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="relative basis-[80%] md:basis-1/2"
            >
              <Card
                className={`border-0 p-6 w-[276px] aspect-square h-[276px]  flex flex-col justify-around ${
                  index === current - 1
                    ? "bg-white shadow-sm scale-110 -translate-y-6 transition-all duration-500 ease-in-out "
                    : "bg-gray-50 shadow-[0]"
                }`}
              >
                <CardContent>
                  <CardDescription>{review.text}</CardDescription>
                  <div className="flex mb-2">
                    {Array(Math.max(0, Math.round(review.rating)))
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          &#9733;
                        </span>
                      ))}
                  </div>
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
