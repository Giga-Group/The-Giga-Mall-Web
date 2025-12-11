'use client';

import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 3, md: 4 },
        backgroundColor: '#ffffff'
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
          fontWeight: 700,
          color: '#333333',
          marginBottom: 2
        }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          color: '#666666',
          marginBottom: 4,
          textAlign: 'center'
        }}
      >
        Store not found
      </Typography>
      <Button
        component={Link}
        href="/shop"
        variant="contained"
        sx={{
          backgroundColor: '#D19F3B',
          color: '#ffffff',
          padding: { xs: '10px 30px', md: '12px 40px' },
          fontSize: { xs: '14px', md: '16px' },
          textTransform: 'none',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: '#b5832f'
          }
        }}
      >
        Back to Store Directory
      </Button>
    </Box>
  );
}

