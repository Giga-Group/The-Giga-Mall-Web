'use client';

import { Box, Drawer, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/utils/constants';

const SECONDARY_NAV_ITEMS = [
  'EXHIBITIONS',
  'FASHION SHOWS',
  'CELEBRATIONS',
  'MODEL APARTMENTS',
  'CARREFOUR',
  'OFFERS',
  'EVENTS'
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  if (!isSmallScreen) return null;

  const getMainNavHref = (item: string) => {
    switch (item) {
      case "What's New":
        return '/whats-new';
      case 'Shop':
        return '/shop';
      case 'Dine':
        return '/dine';
      // case 'Stay':
      //   return '/stay';
      case 'Entertain':
        return '/entertain';
      case 'Services':
        return '/services';
      case 'Plan your visit':
        return '/opening-hours';
      default:
        return '#';
    }
  };

  const getSecondaryNavHref = (item: string) => {
    switch (item) {
      case 'OFFERS':
        return '/offers';
      case 'EVENTS':
        return '/events';
      default:
        return '#';
    }
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: '100vw',
          backgroundColor: '#ffffff',
          boxShadow: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        {/* Header with close button and title */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              color: '#000000',
              padding: '8px',
            }}
          >
            <Close />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            GIGA MALL
          </Typography>
          <Box sx={{ width: '40px' }} /> {/* Spacer for centering */}
        </Box>

        {/* Main Navigation Items - White Background */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            width: '100%',
          }}
        >
          {NAV_ITEMS
            .filter((item) => item !== 'Stay') // Filter out Stay items
            .map((item, index) => (
            <Box
              key={index}
              component={Link}
              href={getMainNavHref(item)}
              onClick={onClose}
              sx={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                color: '#000000',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                },
                '&:active': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>

        {/* Secondary Navigation Items - Golden Background */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#D19F3B',
            width: '100%',
            flex: 1,
          }}
        >
          {SECONDARY_NAV_ITEMS.map((item, index) => (
            <Box
              key={index}
              component={Link}
              href={getSecondaryNavHref(item)}
              onClick={onClose}
              sx={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&:active': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;

