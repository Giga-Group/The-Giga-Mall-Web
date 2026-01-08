import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/sections/ContactSection';
import LandingVideo from '@/components/sections/LandingVideo';

// Code split below-the-fold sections for better initial load performance
const TrendingSection = dynamic(() => import('@/components/sections/TrendingSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const FeaturedSection = dynamic(() => import('@/components/sections/FeaturedSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const NewBrandsSection = dynamic(() => import('@/components/sections/NewBrandsSection'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});

const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <div style={{ minHeight: '500px' }} />,
});

// Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

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
      <ContactSection />
      <Footer />
    </>
  );
}
