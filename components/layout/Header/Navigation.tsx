'use client';

import { Box } from '@mui/material';
import Link from 'next/link';

interface NavigationProps {
  navItems: string[];
  onShopHover: () => void;
  onDineHover: () => void;
  onStayHover: () => void;
  onEntertainHover: () => void;
  onPlanVisitHover: () => void;
  isSmallScreen: boolean;
}

const Navigation = ({ navItems, onShopHover, onDineHover, onStayHover, onEntertainHover, onPlanVisitHover, isSmallScreen }: NavigationProps) => {
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
      {navItems.map((item, index) => (
        <Box
          key={index}
          component={Link}
          href={item === 'Shop' ? '/shop' : item === 'Dine' ? '/dine' : item === 'Stay' ? '/stay' : item === 'Entertain' ? '/entertain' : '#'}
          onMouseEnter={() => {
            if (item === "Shop") onShopHover();
            if (item === "Dine") onDineHover();
            if (item === "Stay") onStayHover();
            if (item === "Entertain") onEntertainHover();
            if (item === "Plan your visit") onPlanVisitHover();
          }}
          sx={{
            position: 'relative',
            color: '#000000',
            textDecoration: 'none',
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
      ))}
    </Box>
  );
};

export default Navigation;

