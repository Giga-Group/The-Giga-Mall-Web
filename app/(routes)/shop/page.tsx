import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShopPageClient from '@/components/sections/ShopPageClient';
import { storeDetails } from '@/lib/utils/storeData';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';

// Convert storeDetails to Store format for StoreGrid - this runs on the server
const stores: Store[] = storeDetails.map(store => ({
  name: store.name,
  slug: store.slug,
  hasOffers: store.hasOffers,
  acceptsGiftCard: store.acceptsGiftCard,
  category: store.category,
}));

// Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function ShopPage() {
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
              Store Directory
            </h1>
          </div>

          {/* Client component with FilterProvider */}
          <ShopPageClient stores={stores} />
        </div>
      </main>
      <Footer />
    </>
  );
}
