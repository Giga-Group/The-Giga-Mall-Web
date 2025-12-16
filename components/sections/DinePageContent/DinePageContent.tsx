'use client';

import { Box } from '@mui/material';
import { DineDetail } from '@/lib/utils/dineData';
import DineHero from '@/components/sections/DineHero';
import DineLocation from '@/components/sections/DineLocation';
import DontMissOut from '@/components/sections/DontMissOut';

interface DinePageContentProps {
  dine: DineDetail;
}

const DinePageContent = ({ dine }: DinePageContentProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff'
      }}
    >
      {/* Dine Hero Section */}
      <DineHero dine={dine} />

      {/* Dine Location Section */}
      <DineLocation dine={dine} />

      {/* Don't Miss Out Section */}
      <DontMissOut />
    </Box>
  );
};

export default DinePageContent;

