'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface StayDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const StayDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: StayDropdownProps) => {
  if (!isOpen) return null;

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: 'fixed',
        top: { xs: '60px', md: '90px' },
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 10000,
        paddingBottom: { xs: '20px', md: '25px', lg: '30px' },
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
          maxWidth: '1300px',
          width: '100%',
          margin: '0 auto',
          padding: { xs: '15px 16px', md: '20px 24px', lg: '25px 32px' },
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center'
        }}
      >
        <Box
          component={Link}
          href="/stay"
          sx={{
            textDecoration: 'none',
            color: '#000000',
            transition: 'transform 0.2s ease',
            maxWidth: { xs: '100%', md: '300px', lg: '320px' },
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '12px', md: '16px' },
            alignItems: 'left',
            '&:hover': {
              transform: 'translateY(-2px)',
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
              minHeight: { xs: '180px', md: '200px', lg: '220px' },
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'box-shadow 0.2s ease'
            }}
          >
            <Image
              src="/2-ES---WLaMaquinista_OK.jpg"
              alt="Premium Stay"
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
              fontSize: { xs: '18px', md: '20px', lg: '22px' },
              fontWeight: 500,
              textAlign: 'center',
              transition: 'color 0.2s ease',
              lineHeight: 1.4
            }}
          >
            Premium Stay
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StayDropdown;
