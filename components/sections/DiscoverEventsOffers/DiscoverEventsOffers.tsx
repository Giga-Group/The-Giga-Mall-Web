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
        backgroundColor: '#ffffff'
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
            fontFamily: '"Playfair Display", "Georgia", serif',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
            fontWeight: 400,
            color: '#D19F3B',
            mb: { xs: 3, sm: 4, md: 5 },
            letterSpacing: '0.02em'
          }}
        >
          Discover Events & Offers
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 3 },
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            component={Link}
            href="/events"
            variant="outlined"
            sx={{
              border: '1px solid #D19F3B',
              color: '#D19F3B',
              textTransform: 'uppercase',
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
              fontWeight: 500,
              padding: { xs: '10px 30px', sm: '12px 40px', md: '14px 50px' },
              borderRadius: 0,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#D19F3B',
                color: '#ffffff',
                backgroundColor: '#D19F3B'
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
              border: '1px solid #D19F3B',
              color: '#D19F3B',
              textTransform: 'uppercase',
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
              fontWeight: 500,
              padding: { xs: '10px 30px', sm: '12px 40px', md: '14px 50px' },
              borderRadius: 0,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#D19F3B',
                color: '#ffffff',
                backgroundColor: '#D19F3B'
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

