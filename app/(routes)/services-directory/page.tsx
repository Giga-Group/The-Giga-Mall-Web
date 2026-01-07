'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchAndFilter from '@/components/sections/SearchAndFilter';
import StoreGrid from '@/components/sections/StoreGrid';
import DiscoverEventsOffers from '@/components/sections/DiscoverEventsOffers';
import ExploreTheMall from '@/components/sections/ExploreTheMall';
import { FilterProvider } from '@/lib/contexts/FilterContext';
import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';
import { serviceDetails } from '@/lib/utils/servicesData';

const services: Store[] = serviceDetails.map(service => ({
  name: service.name,
  slug: service.slug,
  hasOffers: service.hasOffers,
  acceptsGiftCard: service.acceptsGiftCard,
  category: service.category,
}));

export default function ServicesDirectoryPage() {
  return (
    <FilterProvider>
      <Header />
      <main>
        <Box
          sx={{
            paddingTop: { xs: '90px', md: '100px', lg: '40px' },
            minHeight: '100vh',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Main Title */}
          <Box
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              pb: { xs: 2, sm: 3, md: 4 }
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 400,
                color: '#D19F3B',
                textAlign: 'center',
                letterSpacing: '0.02em'
              }}
            >
              Services Directory
            </Typography>
          </Box>

          {/* Search and Filter Section */}
          <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading filters...</Box>}>
            <SearchAndFilter 
              pageType="shop"
              categories={[
                { value: '', label: 'All Categories' },
                { value: 'bank', label: 'Banks' },
                { value: 'atm', label: 'ATMs' },
                { value: 'grocery', label: 'Grocery Stores' },
                { value: 'perfume', label: 'Perfume Shops' },
                { value: 'kiosk', label: 'Kiosks & Small Cabins' }
              ]}
              subcategories={[
                { value: '', label: 'All Subcategories' }
              ]}
              searchPlaceholder="Search for services, banks, or shops"
              offersLabel="Show services with offers only"
            />
          </Suspense>

          {/* Store Grid Section */}
          <StoreGrid items={services} basePath="/services-directory" />

          {/* Discover Events & Offers Section */}
          <DiscoverEventsOffers />

          {/* Explore The Mall & Visitor Info Section */}
          <ExploreTheMall />
        </Box>
      </main>
      <Footer />
    </FilterProvider>
  );
}

