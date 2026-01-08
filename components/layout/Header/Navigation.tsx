'use client';

import { Box } from '@mui/material';
import Link from 'next/link';

interface NavigationProps {
  navItems: string[];
  onShopHover: () => void;
  onDineHover: () => void;
  // onStayHover: () => void;
  onServicesHover: () => void;
  // onEntertainHover: () => void;
  // onPlanVisitHover: () => void;
  onClearHover: () => void;
  isSmallScreen: boolean;
}

const Navigation = ({ navItems, onShopHover, onDineHover, /* onStayHover, */ onServicesHover, /* onEntertainHover, onPlanVisitHover, */ onClearHover, isSmallScreen }: NavigationProps) => {
  if (isSmallScreen) return null;

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: { md: 2, lg: 3 },
      flex: 1,
      justifyContent: 'center',
      mx: { md: 2, lg: 4 }
    }}>
      {navItems
        .filter((item) => item !== 'Stay') // Filter out Stay items
        .map((item, index) => {
        const href =
          item === "What's New"
            ? '/whats-new'
            : item === 'Shop'
            ? '/shop'
            : item === 'Dine'
            ? '/dine'
            // : item === 'Stay'
            // ? '/stay'
            : item === 'Entertain'
            ? '/entertain'
            : item === 'Services'
            ? '/services-directory'
            : item === 'Plan your visit'
            ? '/opening-hours'
            : item === 'Visitors Guide'
            ? '/visitors-guide'
            : '#';

        const hasDropdown =
          item === 'Shop' ||
          item === 'Dine' ||
          item === 'Services';
          // item === 'Stay' ||
          // item === 'Entertain' ||
          // item === 'Plan your visit';

        return (
        <Box
          key={index}
          component={Link}
          href={href}
          onMouseEnter={() => {
            if (item === 'Shop') onShopHover();
            if (item === 'Dine') onDineHover();
            // if (item === 'Stay') onStayHover();
            if (item === 'Services') onServicesHover();
            // if (item === 'Entertain') onEntertainHover();
            // if (item === 'Plan your visit') onPlanVisitHover();

            // For items without dropdowns (e.g., What's New, Visitors Guide, Entertain, Plan your visit), clear any open dropdown
            if (!hasDropdown) {
              onClearHover();
            }
          }}
          sx={{
            position: 'relative',
            color: '#000000',
            textDecoration: 'none',
            fontFamily: '"Poppins", sans-serif',
            fontSize: { md: '14px', lg: '16px' },
            fontWeight: 500,
            padding: '8px 12px',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '0%',
              height: '2px',
              backgroundColor: '#D19F3B',
              transition: 'width 0.3s ease-in-out',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '0%',
              height: '2px',
              backgroundColor: '#D19F3B',
              transition: 'width 0.3s ease-in-out',
            },
            '&:hover': {
              color: '#D19F3B',
              '&::before': {
                width: '100%',
              },
              '&::after': {
                width: '100%',
              },
            },
          }}
        >
          {item}
        </Box>
      )})}
    </Box>
  );
};

export default Navigation;

