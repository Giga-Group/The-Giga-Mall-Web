'use client';

import { Box } from '@mui/material';
import { StoreDetail } from '@/lib/utils/storeData';
import StoreHero from '@/components/sections/StoreHero';
import StoreLocation from '@/components/sections/StoreLocation';
import DontMissOut from '@/components/sections/DontMissOut';
import DownloadGigaMallApp from '@/components/sections/DownloadGigaMallApp';
import VisitorInfo from '@/components/sections/VisitorInfo';

interface StorePageContentProps {
  store: StoreDetail;
}

const StorePageContent = ({ store }: StorePageContentProps) => {
  return (
    <Box
      sx={{
        // paddingTop: { xs: '90px', md: '100px' },
        backgroundColor: '#ffffff'
      }}
    >
      {/* Store Hero Section */}
      <StoreHero store={store} />

      {/* Store Location Section */}
      <StoreLocation store={store} />

      {/* Don't Miss Out Section */}
      <DontMissOut />

      {/* Download Giga Mall App Section */}
      <DownloadGigaMallApp />

      {/* Visitor Info Section */}
      <VisitorInfo />
    </Box>
  );
};

export default StorePageContent;

