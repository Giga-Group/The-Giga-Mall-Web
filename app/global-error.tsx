'use client';

import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html>
      <body>
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
            Something went wrong
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
            A critical error occurred. Please refresh the page or contact support if the problem persists.
          </Typography>

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
        </Box>
      </body>
    </html>
  );
}

