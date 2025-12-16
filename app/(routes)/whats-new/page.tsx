'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import Link from 'next/link';
import TopPicksSection from '@/components/sections/TopPicksSection/TopPicksSection';
import FirstLookSection from '@/components/sections/FirstLookSection';
import ExploreTheMall from '@/components/sections/ExploreTheMall';

export default function WhatsNewPage() {
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            paddingTop: { xs: '90px', md: '100px', lg: '50px' },
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
              pb: { xs: 2, sm: 3, md: 4 },
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Playfair Display", "Georgia", serif',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 400,
                color: '#D19F3B',
                textAlign: 'center',
                letterSpacing: '0.02em',
                mb: { xs: 2, sm: 3, md: 4, lg: 2 }
              }}
            >
              What's New
            </Typography>

            {/* Introductory Text */}
            <Typography
              sx={{
                fontFamily: '"Arial", "Helvetica", sans-serif',
                fontSize: { xs: '14px', sm: '16px', md: '14px' },
                fontWeight: 400,
                color: '#666666',
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto',
                lineHeight: 1.6,
                px: { xs: 2, sm: 0 }
              }}
            >
              With our diverse range of shopping, dining and entertainment options, What's New at Giga Mall will keep you up to date on our latest products, events and store openings.
            </Typography>
          </Box>

          {/* Top Picks Section */}
          <TopPicksSection />

          {/* First Look Section */}
          <FirstLookSection />

          {/* Explore The Mall + Visitor Info Section */}
          <ExploreTheMall />
        </Box>
      </main>
      <Footer />
    </>
  );
}


