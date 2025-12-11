'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

interface EntertainDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const EntertainDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: EntertainDropdownProps) => {
  const entertainOptions = [
    { name: "KidZania", image: "/6485.jpg" },
    { name: "Dubai Ice Rink", image: "/DSC07199.jpg" },
    { name: "Reel Cinemas", image: "/DSC07836.jpg" },
    { name: "Trampo Extreme", image: "/DSC07876.jpg" },
    { name: "Hysteria", image: "/DSC07901.jpg" },
    { name: "Play DXB", image: "/DSC08041.jpg" },
    { name: "Soft Play", image: "/DSC08196.jpg" },
    { name: "House of Hype", image: "/23.jpg" },
    { name: "Boo Boo Laand", image: "/256+.jpg" },
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
          padding: { md: '20px 24px 0', lg: '24px 48px 0' }
        }}
      >
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              md: 'repeat(4, 1fr)', 
              lg: 'repeat(5, 1fr)' 
            },
            gap: { md: 2, lg: 3 }
          }}
        >
          {entertainOptions.map((option, index) => (
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
                  '& .entertain-image': {
                    boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
                  },
                  '& .entertain-title': {
                    color: '#D19F3B'
                  }
                }
              }}
            >
              <Box
                className="entertain-image"
                sx={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: { md: '8px', lg: '10px' },
                  position: 'relative',
                  backgroundColor: '#f5f5f5',
                  transition: 'box-shadow 0.2s ease'
                }}
              >
                <Image
                  src={option.image}
                  alt={option.name}
                  fill
                  sizes="(max-width: 768px) 25vw, 20vw"
                  style={{ 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </Box>
              <Typography
                className="entertain-title"
                sx={{
                  fontSize: { md: '12px', lg: '13px' },
                  fontWeight: 400,
                  textAlign: 'center',
                  transition: 'color 0.2s ease',
                  lineHeight: 1.4
                }}
              >
                {option.name}
              </Typography>
            </Box>
          ))}
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
          VIEW ALL ENTERTAINMENT
        </Button>
      </Box>
    </Box>
  );
};

export default EntertainDropdown;

