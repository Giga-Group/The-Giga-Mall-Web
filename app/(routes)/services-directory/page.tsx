import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesPageClient from '@/components/sections/ServicesPageClient';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';
import { serviceDetails } from '@/lib/utils/servicesData';

// Convert serviceDetails to Store format - this runs on the server
const services: Store[] = serviceDetails.map(service => ({
  name: service.name,
  slug: service.slug,
  hasOffers: service.hasOffers,
  acceptsGiftCard: service.acceptsGiftCard,
  category: service.category,
}));

// Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function ServicesDirectoryPage() {
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
              Services Directory
            </h1>
          </div>

          {/* Client component with FilterProvider */}
          <ServicesPageClient services={services} />
        </div>
      </main>
      <Footer />
    </>
  );
}

