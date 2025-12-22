'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const DontMissOut = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: { xs: 6, sm: 8, md: 10 },
        paddingTop: { xs: 8, sm: 10, md: 12 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 4, md: 5 },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            fontWeight: 400,
            color: '#D19F3B',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Don&apos;t miss out
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: { xs: '100%', sm: '600px', md: '700px' },
          }}
        >
          <Button
            component={Link}
            href="/entertain"
            variant="outlined"
            sx={{
              border: '1px solid #000000',
              color: '#000000',
              textTransform: 'uppercase',
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '0.7rem' },
              fontWeight: 400,
              fontFamily: 'Arial, sans-serif',
              padding: { xs: '12px 40px', sm: '14px 50px', md: '16px 60px', lg: '16px 30px' },
              borderRadius: 0,
              transition: 'all 0.3s ease',
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '200px', sm: '250px', md: '280px', lg: '200px' },
              '&:hover': {
                borderColor: '#D19F3B',
                backgroundColor: '#D19F3B',
                color: '#ffffff',
              }
            }}
          >
            Discover Events
          </Button>

          <Button
            component={Link}
            href="/shop"
            variant="outlined"
            sx={{
              border: '1px solid #000000',
              color: '#000000',
              textTransform: 'uppercase',
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '0.7rem' },
              fontWeight: 400,
              fontFamily: 'Arial, sans-serif',
              padding: { xs: '12px 40px', sm: '14px 50px', md: '16px 20px', lg: '16px 30px' },
              borderRadius: 0,
              transition: 'all 0.3s ease',
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '200px', sm: '250px', md: '280px', lg: '220px' },
              '&:hover': {
                borderColor: '#D19F3B',
                backgroundColor: '#D19F3B',
                color: '#ffffff',
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

export default DontMissOut;

