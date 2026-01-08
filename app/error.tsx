'use client';

import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 4,
        textAlign: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Arvo", serif',
          fontSize: { xs: '3rem', md: '4rem' },
          fontWeight: 700,
          color: '#D19F3B',
          mb: 2,
        }}
      >
        Oops! Something went wrong
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Quicksand", sans-serif',
          fontSize: { xs: '1rem', md: '1.2rem' },
          color: '#666666',
          mb: 4,
          maxWidth: '600px',
        }}
      >
        We're sorry, but something unexpected happened. Please try again or return to the homepage.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={reset}
          sx={{
            backgroundColor: '#D19F3B',
            color: '#ffffff',
            padding: '12px 32px',
            fontSize: '1rem',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: '#b88a2f',
            },
          }}
        >
          Try Again
        </Button>
        
        <Button
          component={Link}
          href="/"
          variant="outlined"
          sx={{
            borderColor: '#D19F3B',
            color: '#D19F3B',
            padding: '12px 32px',
            fontSize: '1rem',
            textTransform: 'uppercase',
            '&:hover': {
              borderColor: '#b88a2f',
              color: '#b88a2f',
            },
          }}
        >
          Go Home
        </Button>
      </Box>
    </Box>
  );
}

