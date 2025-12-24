'use client';

import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import Image from 'next/image';
import { Brand } from '@/types';

// Brands for first carousel (left to right)
const brandsRow1: Brand[] = [
  {
    name: 'Cheezious',
    image: '/cheezious.jpeg'
  },
  {
    name: 'McDonalds',
    image: '/macdonalds.jpeg'
  },
  {
    name: 'Wild Wings',
    image: '/wild-wings.jpeg'
  },
  {
    name: 'Hardees',
    image: '/hardees.jpeg'
  },
  {
    name: 'Pizza Hut',
    image: '/pizzahut.jpeg'
  },
  {
    name: 'Alkaram',
    image: '/alkaram.jpg'
  },
  {
    name: 'Almas',
    image: '/almas.jpeg'
  },
  {
    name: 'Almirah',
    image: '/almirah.jpeg'
  },
  {
    name: 'Bareeze',
    image: '/bareeze.jpeg'
  },
  {
    name: 'Batik Studio',
    image: '/batik-studio.jpg'
  },
];

// Brands for second carousel (right to left)
const brandsRow2: Brand[] = [
  {
    name: 'Bloon',
    image: '/bloon.jpg'
  },
  {
    name: 'Bonanza',
    image: '/bonanza.jpeg'
  },
  {
    name: 'Breakout',
    image: '/breakout.jpeg'
  },
  {
    name: 'Cambridge',
    image: '/cambridge.jpeg'
  },
  {
    name: 'Junaid Jamshed',
    image: '/junaid-jamshed.jpeg'
  },
  {
    name: 'Kayseria',
    image: '/kayseria.jpeg'
  },
  {
    name: 'Little Explorer',
    image: '/little-explorer.jpeg'
  },
  {
    name: 'Miniso',
    image: '/miniso.jpeg'
  },
  {
    name: 'Cheezious',
    image: '/cheezious.jpeg'
  },
  {
    name: 'McDonalds',
    image: '/macdonalds.jpeg'
  },
];

const marqueeRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const marqueeLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const NewBrandsSection = () => {
  const scrollingBrandsRow1 = [...brandsRow1, ...brandsRow1];
  const scrollingBrandsRow2 = [...brandsRow2, ...brandsRow2];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 4, sm: 4, md: 6, lg: 8, xl: 10 },
        minHeight: { xs: '90vh', sm: 'auto', md: 'auto' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start' }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
          textTransform: 'uppercase',
          textAlign: { xs: 'center', md: 'left' },
          marginBottom: { xs: '54px', sm: '32px', md: '40px' },
          paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '130px' },
          paddingRight: { xs: '16px', sm: '20px', md: '40px' },
          color: '#D19F3B'
        }}
      >
        ICONIC BRANDS AT GIGA
      </Typography>

      {/* First Row - Scrolling Right */}
      <Box
        sx={{
          overflow: 'hidden',
          width: '100%',
          mb: { xs: 0, sm: 0, md: 2 },
          flex: { xs: '0.25 0.25 auto', sm: '0 0 auto', md: '0 0 auto' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            animation: `${marqueeRight} 45s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}
        >
          {scrollingBrandsRow1.map((brand, index) => (
            <Box
              key={`row1-${brand.name}-${index}`}
              sx={{
                flex: '0 0 auto',
                minWidth: { xs: '200px', sm: '220px', md: '360px' },
                maxWidth: { xs: '200px', sm: '240px', md: '360px' },
                mx: { xs: 1.5, sm: 2, md: 2.5 },
                borderRadius: { xs: '12px', md: '10px' },
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
                backgroundColor: '#f9f9f9',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: { xs: '280px', sm: '260px', md: '360px' },
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)'
                }
              }}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Second Row - Scrolling Left */}
      <Box
        sx={{
          overflow: 'hidden',
          width: '100%',
          flex: { xs: '1 1 auto', sm: '0 0 auto', md: '0 0 auto' },
          mb: { xs: 0, sm: 0, md: 0, lg: 0 }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            animation: `${marqueeLeft} 45s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}
        >
          {scrollingBrandsRow2.map((brand, index) => (
            <Box
              key={`row2-${brand.name}-${index}`}
              sx={{
                flex: '0 0 auto',
                minWidth: { xs: '200px', sm: '220px', md: '360px' },
                maxWidth: { xs: '200px', sm: '240px', md: '360px' },
                mx: { xs: 1.5, sm: 2, md: 2.5 },
                borderRadius: { xs: '12px', md: '10px' },
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
                backgroundColor: '#f9f9f9',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: { xs: '280px', sm: '260px', md: '360px' },
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)'
                }
              }}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NewBrandsSection;

