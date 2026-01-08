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

interface ShopPageClientProps {
  stores: Store[];
}

export default function ShopPageClient({ stores }: ShopPageClientProps) {
  return (
    <FilterProvider>
      {/* Our Picks Section */}
      <OurPicks />

      {/* Search and Filter Section */}
      <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading filters...</Box>}>
        <SearchAndFilter />
      </Suspense>

      {/* Store Grid Section */}
      <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading stores...</Box>}>
        <StoreGrid items={stores} basePath="/shop" />
      </Suspense>

      {/* Discover Events & Offers Section */}
      <DiscoverEventsOffers />

      {/* Explore The Mall & Visitor Info Section */}
      <ExploreTheMall />
    </FilterProvider>
  );
}

