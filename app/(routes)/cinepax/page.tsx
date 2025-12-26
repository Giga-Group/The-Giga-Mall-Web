'use client';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Cinepax/Hero";
import About from "@/components/sections/Cinepax/About";
import Gallery from "@/components/sections/Cinepax/Gallery";
import Features from "@/components/sections/Cinepax/Features";
import CTA from "@/components/sections/Cinepax/CTA";
import MoviesEvents from "@/components/sections/Cinepax/MoviesEvents";

export default function CinepaxPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Features />
        <CTA />
        <MoviesEvents />
      </main>
      <Footer />
    </>
  );
}
