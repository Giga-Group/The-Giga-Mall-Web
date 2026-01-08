'use client';

import { Box, Typography } from '@mui/material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MallMapStandalone from '@/components/sections/MallMapStandalone/MallMapStandalone';

export default function MapPage() {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: 'calc(100vh - 180px)',
          pt: { xs: '80px', md: '70px', lg: '20px' },
          pb: { xs: 4, md: 6 },
          px: { xs: 2, sm: 4, md: 6, lg: 10 },
          backgroundColor: '#ffffff',
        }}
      >
        <Box
          sx={{
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 400,
              color: '#D19F3B',
              mb: { xs: 1, sm: 1.5 },
              textAlign: 'center',
              letterSpacing: '0.02em'
            }}
          >
            Find Your Favourite Brand at Giga Mall
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              color: '#666666',
              mb: { xs: 1.5, sm: 2 },
              textAlign: 'center',
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Every store covered. Plan your visit with our interactive map.
          </Typography>

          {/* Interactive Map Section */}
          <Box
            sx={{
              width: '100%',
              mt: { xs: 1, sm: 1.5 },
            }}
          >
            <MallMapStandalone key="map-page" isMapPage={true} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

