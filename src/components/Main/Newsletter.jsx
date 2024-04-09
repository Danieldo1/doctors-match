import React from "react";

const Newsletter = () => {
  return (
    <div class="bg-primary py-12 px-6 sm:px-8 lg:px-16">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-white mb-4">Newsletter</h2>
        <p class="text-lg text-white mb-6">
          Subscribe to our newsletter and stay up-to-date with our latest news.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            class="bg-white rounded-md py-3 px-4 mr-4 mb-4 sm:mb-0 w-full sm:w-auto flex-grow"
          />
          <button class="bg-white text-primary font-semibold py-3 px-6 rounded-md hover:bg-primary/80 hover:text-white hover:border-b-[1px] hover:border-r-[1px] hover:border-white transition-all duration-300 ease-in">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
