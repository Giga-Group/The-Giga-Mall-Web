import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DinePageClient from '@/components/sections/DinePageClient';
import { dineDetails } from '@/lib/utils/dineData';
import type { PickItem } from '@/components/sections/OurPicks/OurPicks';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';

// Convert dineDetails to Store format for StoreGrid - this runs on the server
const restaurants: Store[] = dineDetails.map(dine => ({
  name: dine.name,
  slug: dine.slug,
  hasOffers: dine.hasOffers,
  acceptsGiftCard: dine.acceptsGiftCard,
  category: dine.category,
}));

// Get top picks for restaurants
const restaurantPicks: PickItem[] = [
  {
    image: '/dine/cheezious.jpeg',
    name: 'Cheezious',
    slug: 'cheezious'
  },
  {
    image: '/dine/pizzahut.jpeg',
    name: 'Pizza Hut',
    slug: 'pizzahut'
  },
  {
    image: '/dine/wild-wings.jpeg',
    name: 'Wild Wings',
    slug: 'wild-wings'
  }
];

// Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function DinePage() {
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            paddingTop: '90px',
            minHeight: '100vh',
            backgroundColor: '#ffffff'
          }}
          className="md:pt-[100px] lg:pt-[40px]"
        >
          {/* Main Title */}
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingBottom: '16px'
            }}
            className="sm:px-4 md:px-6 lg:px-10 sm:pb-3 md:pb-4"
          >
            <h1
              style={{
                fontFamily: '"Arvo", serif',
                fontSize: '2rem',
                fontWeight: 400,
                color: '#D19F3B',
                textAlign: 'center',
                letterSpacing: '0.02em',
                margin: 0
              }}
              className="sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]"
            >
              Restaurant Directory
            </h1>
          </div>

          {/* Client component with FilterProvider */}
          <DinePageClient restaurants={restaurants} restaurantPicks={restaurantPicks} />
        </div>
      </main>
      <Footer />
    </>
  );
}

