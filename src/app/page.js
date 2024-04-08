import AboutUs from "@/components/Main/AboutUs";
import Hero from "@/components/Main/Hero";
import Intro from "@/components/Main/Intro";
import Navigation from "@/components/Main/Nav/Navigation";
import Steps from "@/components/Main/Steps";


export default function Home() {
  return (
    <section className="overflow-hidden">
      <Navigation />
      <main className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <Hero />
      </main>
      <Intro />
      <AboutUs />
      <Steps />
    </section>
  );
}
