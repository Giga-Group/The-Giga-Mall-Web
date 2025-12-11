'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

interface DineDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DineDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: DineDropdownProps) => {
  const dineDropdownData = {
    topPicks: [
      "ANGELINA",
      "Eataly",
      "Markette",
      "Nando's",
      "Social House",
      "The Cheesecake Factory"
    ],
    cuisine: [
      "American Cuisine",
      "Bakery",
      "British Food",
      "Chinese",
      "Fast Food",
      "French",
      "Indian Food",
      "Italian",
      "Japanese",
      "Middle Eastern Food",
      "Kids",
      "Healthy"
    ],
    occasions: [
      "Breakfast",
      "Brunch",
      "Lunch",
      "Dinner",
      "Family Dining",
      "Business Meeting",
      "Celebration",
      "Quick Bite",
      "Fine Dining",
      "Casual Dining"
    ]
  };

  if (!isOpen) return null;

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: 'fixed',
        top: { md: '90px' },
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 10000,
        paddingBottom: { md: '40px', lg: '50px' },
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translateY(-10px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          padding: { md: '20px 24px 0', lg: '24px 48px 0' },
          display: 'grid',
          gridTemplateColumns: { md: 'repeat(4, 1fr)' },
          gap: { md: 3, lg: 4 }
        }}
      >
        {/* Column 1: TOP PICKS */}
        <Box
          sx={{
            borderRight: { md: '1px solid #e0e0e0' },
            paddingRight: { md: 3, lg: 4 }
          }}
        >
          <Typography
            sx={{
              fontSize: { md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            TOP PICKS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { md: '8px', lg: '10px' } }}>
            {dineDropdownData.topPicks.map((restaurant, index) => (
              <Box
                key={index}
                component="a"
                href="#"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { md: '14px', lg: '13px' },
                  fontWeight: 400,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#D19F3B'
                  }
                }}
              >
                {restaurant}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Column 2: CUISINE */}
        <Box
          sx={{
            borderRight: { md: '1px solid #e0e0e0' },
            paddingRight: { md: 3, lg: 4 }
          }}
        >
          <Typography
            sx={{
              fontSize: { md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            CUISINE
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { md: '8px', lg: '10px' } }}>
            {dineDropdownData.cuisine.slice(0, 10).map((cuisine, index) => (
              <Box
                key={index}
                component="a"
                href="#"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { md: '14px', lg: '13px' },
                  fontWeight: 400,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#D19F3B'
                  }
                }}
              >
                {cuisine}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Column 3: OCCASIONS */}
        <Box
          sx={{
            borderRight: { md: '1px solid #e0e0e0' },
            paddingRight: { md: 3, lg: 4 }
          }}
        >
          <Typography
            sx={{
              fontSize: { md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            OCCASIONS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { md: '8px', lg: '10px' } }}>
            {dineDropdownData.occasions.map((occasion, index) => (
              <Box
                key={index}
                component="a"
                href="#"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { md: '14px', lg: '13px' },
                  fontWeight: 400,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#D19F3B'
                  }
                }}
              >
                {occasion}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Column 4: IN THE SPOTLIGHT */}
        <Box>
          <Typography
            sx={{
              fontSize: { md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            Featured Restaurant
          </Typography>
          <Box
            sx={{
              width: '100%',
              borderRadius: '4px',
              marginBottom: { md: '16px', lg: '20px' },
              position: 'relative',
              overflow: 'hidden',
              minHeight: '200px'
            }}
          >
            <Image
              src="/2-OK.jpg"
              alt="Featured Restaurant"
              width={300}
              height={300}
              style={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: '100%',
                display: 'block'
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: { md: '12px 24px', lg: '6px 48px' },
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ffffff'
        }}
      >
        <Button
          variant="outlined"
          sx={{
            border: '1px solid #D19F3B',
            color: '#ffffff',
            textTransform: 'uppercase',
            fontSize: { md: '13px', lg: '14px' },
            fontWeight: 500,
            padding: { md: '10px 24px', lg: '2px 570px' },
            borderRadius: 0,
            transition: 'all 0.3s ease',
            backgroundColor: '#D19F3B',
            '&:hover': {
              border: '1px solid #D19F3B',
              color: '#ffffff',
              backgroundColor: '#D19F3B'
            }
          }}
        >
          VIEW ALL RESTAURANTS
        </Button>
      </Box>
    </Box>
  );
};

export default DineDropdown;

