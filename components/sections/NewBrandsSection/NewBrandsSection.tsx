'use client';

import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import Image from 'next/image';
import { Brand } from '@/types';

const brands: Brand[] = [
  {
    name: "Victoria's Secret",
    image: '/Victoria_s_Secret_Westfield_Stratford_City.jpg'
  },
  {
    name: 'H&M',
    image: '/H and M.jpg'
  },
  {
    name: 'Miniso',
    image: '/minisoo.jpg'
  },
  {
    name: 'Sephora',
    image: '/Sephora_2_1.jpg'
  },
  {
    name: 'Nike',
    image: '/NIKE_-_WMoN.jpg'
  },
  {
    name: 'Adidas',
    image: '/ADIDAS.jpg'
  },
  {
    name: 'Zara',
    image: '/zara-forum6257.jpg'
  },
  {
    name: 'Aesop',
    image: '/Aesop_Westfield_Stratford_City.jpg'
  },
  {
    name: 'Starbucks',
    image: '/Starbucks.jpg'
  },
  {
    name: 'Brand 1',
    image: '/picture1.jpg'
  },
  {
    name: 'Brand 23',
    image: '/23.jpg'
  },
  {
    name: 'Brand 346',
    image: '/346.jpg'
  },
  {
    name: 'Brand 365',
    image: '/365.jpg'
  },
  {
    name: 'Brand 584',
    image: '/584.jpg'
  },
  {
    name: 'Brand 745',
    image: '/745.jpg'
  },
  {
    name: 'Brand 4631',
    image: '/4631.jpg'
  },
  {
    name: 'Brand 6485',
    image: '/6485.jpg'
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
  const scrollingBrands = [...brands, ...brands];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        py: { xs: 4, sm: 6, md: 8 }
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
          marginBottom: { xs: '24px', sm: '32px', md: '40px' },
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
          mb: { xs: 2, sm: 3, md: 4 }
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
          {scrollingBrands.map((brand, index) => (
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
          width: '100%'
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
          {scrollingBrands.map((brand, index) => (
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

