import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Events />
      <Gallery />
      <About />
    </main>
  );
}
