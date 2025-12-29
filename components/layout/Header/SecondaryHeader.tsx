'use client';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';

const SECONDARY_NAV_ITEMS = [
  'CINEPAX',
  'MODEL APARTMENTS',
  'CARREFOUR',
  'OFFERS',
  'EVENTS & EXHIBITIONS',
];

interface SecondaryHeaderProps {
  isHidden?: boolean;
}

const SecondaryHeader = ({ isHidden = false }: SecondaryHeaderProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (isSmallScreen) return null;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#D19F3B',
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        maxHeight: { md: '48px', lg: '52px' },
        marginTop: { md: '90px' },
        opacity: isHidden ? 0 : 1,
        visibility: isHidden ? 'hidden' : 'visible',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { md: 3, lg: 4 },
          padding: { md: '0 24px', lg: '0 40px' },
          maxWidth: '100%',
          overflowX: 'auto',
          height: '100%',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none'
        }}
      >
        {SECONDARY_NAV_ITEMS.map((item, index) => {
          const href =
            item === 'OFFERS'
              ? '/offers'
              : item === 'EVENTS & EXHIBITIONS'
              ? '/events'
              : item === 'CINEPAX'
              ? '/cinepax'
              : item === 'MODEL APARTMENTS'
              ? '/model-apartments'
              : item === 'CARREFOUR'
              ? '/carrefour'
              : '#'
              ;


          return (
            <Box
              key={index}
              component={Link}
              href={href}
              sx={{
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: '"Poppins", sans-serif',
                fontSize: { md: '13px', lg: '14px' },
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                padding: '8px 12px',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                '&:hover': {
                  color: '#ffffff',
                },
              }}
            >
              {item}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SecondaryHeader;

