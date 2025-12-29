'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const DiscoverEventsOffers = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
        backgroundColor: '#D19F3B'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Arvo", serif',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
            fontWeight: 400,
            color: '#ffffff',
            mb: { xs: 3, sm: 4, md: 5 },
            letterSpacing: '0.02em'
          }}
        >
          Discover Events & Offers
        </Typography>

        <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: { xs: 'wrap', sm: 'nowrap' },
    gap: { xs: 1.5, sm: 2, md: 3 },
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }}
>
  <Button
    component={Link}
    href="/events"
    variant="outlined"
    sx={{
      border: '1px solid #ffffff',
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: { 
        xs: '0.75rem',  // Smaller font on very small screens
        sm: '0.85rem',   // Slightly larger on small screens
        md: '0.9rem',    // Medium on tablet
        lg: '1rem'       // Full size on desktop
      },
      fontWeight: 500,
      padding: { 
        xs: '8px 16px',   // Compact padding on mobile
        sm: '10px 24px',  // Slightly more on small screens
        md: '12px 32px',  // Medium padding
        lg: '14px 40px'   // Full padding on desktop
      },
      borderRadius: 0,
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap', // Prevent text from wrapping
      minWidth: { xs: '120px', sm: '140px', md: '160px' }, // Responsive minimum width
      flexShrink: 0, // Prevent buttons from shrinking too much
      '&:hover': {
        borderColor: '#ffffff',
        color: '#D19F3B',
        backgroundColor: '#ffffff'
      }
    }}
  >
    Discover Events
  </Button>

  <Button
    component={Link}
    href="/offers"
    variant="outlined"
    sx={{
      border: '1px solid #ffffff',
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: { 
        xs: '0.75rem',
        sm: '0.85rem',
        md: '0.9rem',
        lg: '1rem'
      },
      fontWeight: 500,
      padding: { 
        xs: '8px 16px',
        sm: '10px 24px',
        md: '12px 32px',
        lg: '14px 40px'
      },
      borderRadius: 0,
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      minWidth: { xs: '120px', sm: '140px', md: '160px' },
      flexShrink: 0,
      '&:hover': {
        borderColor: '#ffffff',
        color: '#D19F3B',
        backgroundColor: '#ffffff'
      }
    }}
  >
    Discover Offers
  </Button>
</Box>
      </Box>
    </Box>
  );
};

export default DiscoverEventsOffers;

