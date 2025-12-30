'use client';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Cinepax/Hero";
import MoviesEvents from "@/components/sections/Cinepax/MoviesEvents";
import BookTickets from "@/components/sections/Cinepax/BookTickets";
import UltimateExperience from "@/components/sections/Cinepax/UltimateExperience";
import About from "@/components/sections/Cinepax/About";

export default function CinepaxPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MoviesEvents />
        <BookTickets />
        <UltimateExperience />
        <About />
      </main>
      <Footer />
    </>
  );
}
