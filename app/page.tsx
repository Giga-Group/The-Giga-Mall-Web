import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LandingVideo from '@/components/sections/LandingVideo';
import TrendingSection from '@/components/sections/TrendingSection';
import FeaturedSection from '@/components/sections/FeaturedSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import NewBrandsSection from '@/components/sections/NewBrandsSection';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LandingVideo />
        <TrendingSection />
        <FeaturedSection />
        <ExperienceSection />
        <NewBrandsSection />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
