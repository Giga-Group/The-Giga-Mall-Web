'use client';

import { FilterProvider } from '@/lib/contexts/FilterContext';
import OurPicks from '@/components/sections/OurPicks';
import SearchAndFilter from '@/components/sections/SearchAndFilter';
import StoreGrid from '@/components/sections/StoreGrid';
import DiscoverEventsOffers from '@/components/sections/DiscoverEventsOffers';
import ExploreTheMall from '@/components/sections/ExploreTheMall';
import { Box } from '@mui/material';
import { Suspense } from 'react';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';
import type { PickItem } from '@/components/sections/OurPicks/OurPicks';

interface DinePageClientProps {
  restaurants: Store[];
  restaurantPicks: PickItem[];
}

export default function DinePageClient({ restaurants, restaurantPicks }: DinePageClientProps) {
  return (
    <FilterProvider>
      {/* Our Picks Section */}
      <OurPicks picks={restaurantPicks} basePath="/dine" />

      {/* Search and Filter Section */}
      <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading filters...</Box>}>
        <SearchAndFilter pageType="dine" />
      </Suspense>

      {/* Store Grid Section */}
      <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading restaurants...</Box>}>
        <StoreGrid items={restaurants} basePath="/dine" />
      </Suspense>

      {/* Discover Events & Offers Section */}
      <DiscoverEventsOffers />

      {/* Explore The Mall & Visitor Info Section */}
      <ExploreTheMall />
    </FilterProvider>
  );
}

