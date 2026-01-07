'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OurPicks from '@/components/sections/OurPicks';
import SearchAndFilter from '@/components/sections/SearchAndFilter';
import StoreGrid from '@/components/sections/StoreGrid';
import DiscoverEventsOffers from '@/components/sections/DiscoverEventsOffers';
import ExploreTheMall from '@/components/sections/ExploreTheMall';
import { FilterProvider } from '@/lib/contexts/FilterContext';
import { dineDetails } from '@/lib/utils/dineData';
import type { PickItem } from '@/components/sections/OurPicks/OurPicks';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';
import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';

// Convert dineDetails to Store format for StoreGrid
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

export default function DinePage() {
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
              Restaurant Directory
            </Typography>
          </Box>

          {/* Our Picks Section */}
          <OurPicks picks={restaurantPicks} basePath="/dine" />

          {/* Search and Filter Section */}
          <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading filters...</Box>}>
            <SearchAndFilter pageType="dine" />
          </Suspense>

          {/* Store Grid Section */}
          <StoreGrid items={restaurants} basePath="/dine" />

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

