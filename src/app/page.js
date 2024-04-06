import Hero from "@/components/Main/Hero";
import Navigation from "@/components/Main/Nav/Navigation";


export default function Home() {
  return (
    <section>
      <Navigation />
      <main className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />

      </main>
    </section>
  );
}
