import AboutUs from "@/components/Main/AboutUs";
import CardComponent from "@/components/Main/CardComponent";
import Footer from "@/components/Main/Footer";
import Hero from "@/components/Main/Hero";
import Intro from "@/components/Main/Intro";
import Navigation from "@/components/Main/Nav/Navigation";
import Newsletter from "@/components/Main/Newsletter";
import Steps from "@/components/Main/Steps";
import TestimonialCards from "@/components/Main/TestimonialCards";



export default function Home() {
  return (
    <section>
      <Navigation />
      <main className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <Hero />
      </main>
      <div className="overflow-hidden">
        <Intro />
        <AboutUs />
        <Steps />
      </div>
      <CardComponent />
      <TestimonialCards />
      <Newsletter />
      <Footer />
    </section>
  );
}
