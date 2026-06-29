import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Philosophy from "@/sections/Philosophy";
import SignatureDishes from "@/sections/SignatureDishes";
import Experience from "@/sections/Experience";
import ChefSelection from "@/sections/ChefSelection";
import Gallery from "@/sections/Gallery";
import Reservation from "@/sections/Reservation";
import Location from "@/sections/Location";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#F6F3EE]">
      <Navbar />
      <Hero />
      <Philosophy />
      <SignatureDishes />
      <Experience />
      <ChefSelection />
      <Gallery />
      <Reservation />
      <Location />
      <Footer />
    </main>
  );
}