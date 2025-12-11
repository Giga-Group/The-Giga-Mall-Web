'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

interface StayDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const StayDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: StayDropdownProps) => {
  const stayOptions = [
    { 
      image: "/3-Mall-of-Scandinavia-OK.jpg", 
      description: "Palace Downtown" 
    },
    { 
      image: "/1-WL_inside-_2732_x_1436_rijsgy-OK.jpg", 
      description: "Luxury Experience" 
    },
    { 
      image: "/2-ES---WLaMaquinista_OK.jpg", 
      description: "Premium Stay" 
    }
  ];

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
        paddingBottom: { md: '60px', lg: '70px' },
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
          gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          gap: { md: 3, lg: 4 }
        }}
      >
        {stayOptions.map((option, index) => (
          <Box
            key={index}
            component="a"
            href="#"
            sx={{
              textDecoration: 'none',
              color: '#000000',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                '& .stay-image': {
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
                },
                '& .stay-description': {
                  color: '#D19F3B'
                }
              }
            }}
          >
            <Box
              className="stay-image"
              sx={{
                width: '100%',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: { md: '300px', lg: '200px' },
                marginBottom: { md: '12px', lg: '16px' },
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'box-shadow 0.2s ease'
              }}
            >
              <Image
                src={option.image}
                alt={option.description}
                fill
                style={{ 
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </Box>
            <Typography
              className="stay-description"
              sx={{
                fontSize: { md: '16px', lg: '18px' },
                fontWeight: 500,
                textAlign: 'center',
                transition: 'color 0.2s ease',
                lineHeight: 1.4
              }}
            >
              {option.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: { md: '12px 24px', lg: '12px 48px' },
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
            padding: { md: '10px 60px', lg: '2px 600px' },
            borderRadius: 0,
            transition: 'all 0.3s ease',
            backgroundColor: '#D19F3B',
            minWidth: { md: '300px', lg: '400px' },
            '&:hover': {
              border: '1px solid #b5832f',
              color: '#ffffff',
              backgroundColor: '#b5832f'
            }
          }}
        >
          VIEW ALL HOTELS
        </Button>
      </Box>
    </Box>
  );
};

export default StayDropdown;

