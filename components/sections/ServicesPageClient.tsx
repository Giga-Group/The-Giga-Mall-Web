'use client';

import { FilterProvider } from '@/lib/contexts/FilterContext';
import SearchAndFilter from '@/components/sections/SearchAndFilter';
import StoreGrid from '@/components/sections/StoreGrid';
import DiscoverEventsOffers from '@/components/sections/DiscoverEventsOffers';
import ExploreTheMall from '@/components/sections/ExploreTheMall';
import { Box } from '@mui/material';
import { Suspense } from 'react';
import type { Store } from '@/components/sections/StoreGrid/StoreGrid';

interface ServicesPageClientProps {
  services: Store[];
}

export default function ServicesPageClient({ services }: ServicesPageClientProps) {
  return (
    <FilterProvider>
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
      <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading services...</Box>}>
        <StoreGrid items={services} basePath="/services-directory" />
      </Suspense>

      {/* Discover Events & Offers Section */}
      <DiscoverEventsOffers />

      {/* Explore The Mall & Visitor Info Section */}
      <ExploreTheMall />
    </FilterProvider>
  );
}

