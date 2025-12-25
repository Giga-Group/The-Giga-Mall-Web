'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OurPicks from '@/components/sections/OurPicks';
import SearchAndFilter from '@/components/sections/SearchAndFilter';
import StoreGrid from '@/components/sections/StoreGrid';
import DiscoverEventsOffers from '@/components/sections/DiscoverEventsOffers';
import ExploreTheMall from '@/components/sections/ExploreTheMall';
import { Box, Typography } from '@mui/material';
import { Suspense } from 'react';
import type { PickItem } from '@/components/sections/OurPicks/OurPicks';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';

const restaurantPicks: PickItem[] = [
  {
    image: '/cheezious.jpeg',
    name: 'Cheezious',
    slug: 'cheezious'
  },
  {
    image: '/pizzahut.jpeg',
    name: 'Pizza Hut',
    slug: 'pizzahut'
  },
  {
    image: '/wild-wings.jpeg',
    name: 'Wild Wings',
    slug: 'wild-wings'
  }
];

const restaurants: Store[] = [
  { name: 'McDonald\'s', slug: 'mcdonalds' },
  { name: 'Hardee\'s', slug: 'hardees' },
  { name: 'Cheezious', slug: 'cheezious' },
  { name: 'Pizza Hut', slug: 'pizzahut' },
  { name: 'Wild Wings', slug: 'wild-wings' },
  { name: 'Red Apple', slug: 'redapple' },
  { name: 'OPTP', slug: 'optp' },
  { name: 'Chachajee', slug: 'chachajee' },
  { name: 'Simply Sufi', slug: 'simplysufi' },
  { name: 'Rewayat', slug: 'rewayat' },
  { name: 'Spice Factory', slug: 'spicefactory' },
  { name: 'China Grill', slug: 'chinagrill' },
  { name: 'Kababjees', slug: 'kababjees' }
];

export default function DinePage() {
  return (
    <>
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
                fontFamily: '"Playfair Display", "Georgia", serif',
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
    </>
  );
}

