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
  { name: 'ANGELINA', slug: 'angelina' },
  { name: 'Eataly', slug: 'eataly' },
  { name: 'Starbucks', slug: 'starbucks' },
  { name: 'Nando\'s', slug: 'nandos' },
  { name: 'Social House', slug: 'social-house' },
  { name: 'The Cheesecake Factory', slug: 'cheesecake-factory' },
  { name: 'Markette', slug: 'markette' },
  { name: 'Pizza Express', slug: 'pizza-express' },
  { name: 'Shake Shack', slug: 'shake-shack' },
  { name: 'Tim Hortons', slug: 'tim-hortons' },
  { name: 'Cinnabon', slug: 'cinnabon' },
  { name: 'Baskin Robbins', slug: 'baskin-robbins' },
  { name: 'Cold Stone Creamery', slug: 'cold-stone-creamery' },
  { name: 'Dunkin\'', slug: 'dunkin' },
  { name: 'KFC', slug: 'kfc' },
  { name: 'Subway', slug: 'subway' },
  { name: 'Burger King', slug: 'burger-king' },
  { name: 'Papa John\'s', slug: 'papa-johns' },
  { name: 'Domino\'s Pizza', slug: 'dominos-pizza' },
  { name: 'Costa Coffee', slug: 'costa-coffee' },
  { name: 'Gloria Jean\'s Coffees', slug: 'gloria-jeans-coffees' }
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

