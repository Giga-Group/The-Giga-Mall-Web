'use client';

import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: { xs: '90px', md: '100px' },
            px: { xs: 2, sm: 4 },
            backgroundColor: '#ffffff'
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              fontWeight: 400,
              color: '#D19F3B',
              mb: 2
            }}
          >
            404
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              fontWeight: 500,
              color: '#333333',
              mb: 3,
              textAlign: 'center'
            }}
          >
            Service Not Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              color: '#666666',
              mb: 4,
              textAlign: 'center',
              maxWidth: '500px'
            }}
          >
            The service you&apos;re looking for doesn&apos;t exist or has been moved.
          </Typography>
          <Button
            component={Link}
            href="/services-directory"
            variant="contained"
            sx={{
              backgroundColor: '#D19F3B',
              color: '#ffffff',
              textTransform: 'uppercase',
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              fontWeight: 500,
              fontFamily: '"Poppins", sans-serif',
              padding: { xs: '10px 30px', sm: '12px 40px' },
              borderRadius: 0,
              '&:hover': {
                backgroundColor: '#B88A2A'
              }
            }}
          >
            Back to Services Directory
          </Button>
        </Box>
      </main>
      <Footer />
    </>
  );
}

