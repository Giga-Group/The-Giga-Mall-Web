'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MovieIcon from '@mui/icons-material/Movie';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

interface EntertainDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const entertainOptions = [
  { name: "KidZania", image: "/6485.jpg", icon: <EmojiPeopleIcon /> },
  { name: "Dubai Ice Rink", image: "/DSC07199.jpg", icon: <AcUnitIcon /> },
  { name: "Reel Cinemas", image: "/DSC07836.jpg", icon: <MovieIcon /> },
  { name: "Hysteria", image: "/DSC07901.jpg", icon: <TheaterComedyIcon /> },
];

const EntertainDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: EntertainDropdownProps) => {
  // default to 0 so first item image always shows
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  if (!isOpen) return null;

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => { setHoveredIndex(0); onMouseLeave(); }} // reset to first item
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        boxShadow: '0 12px 36px rgba(0,0,0,0.15)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 6 },
      }}
    >
      {/* Container 70% width */}
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { md: 4, lg: 6 },
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Left: Links with icons */}
        <Box
          sx={{
            flex: '0 0 40%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'flex-start',
            justifyContent: 'center',
            position: 'relative',
            paddingRight: '24px',
          }}
        >
          {entertainOptions.map((option, idx) => (
            <Box
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%',
              }}
            >
              {/* Left Icon */}
              <Box sx={{ color: hoveredIndex === idx ? '#D19F3B' : '#555' }}>
                {option.icon}
              </Box>

              {/* Link text */}
              <Typography
                sx={{
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: hoveredIndex === idx ? 600 : 400,
                  color: hoveredIndex === idx ? '#D19F3B' : '#000',
                  transition: 'all 0.2s ease',
                  width: '100%',
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {option.name}
              </Typography>
            </Box>
          ))}

          {/* Fixed arrow appears only on hover */}
          {hoveredIndex !== null && (
            <ArrowForwardIos
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#D19F3B',
                fontSize: 16,
                transition: 'opacity 0.2s ease',
                opacity: 1,
              }}
            />
          )}
        </Box>

        {/* Right: Image Preview */}
        <Box
          sx={{
            flex: '0 0 60%',
            position: 'relative',
            height: { xs: '200px', md: '250px', lg: '300px' },
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}
        >
          {/* Always show image for hoveredIndex */}
          <Image
            src={entertainOptions[hoveredIndex].image}
            alt={entertainOptions[hoveredIndex].name}
            fill
            style={{ objectFit: 'cover', transition: 'all 0.3s ease' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EntertainDropdown;
