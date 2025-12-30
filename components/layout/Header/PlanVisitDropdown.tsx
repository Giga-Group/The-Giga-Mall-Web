'use client';

import { Box } from '@mui/material';
import Link from 'next/link';

interface PlanVisitDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PlanVisitDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: PlanVisitDropdownProps) => {
  const planVisitItems = [
    { label: "Opening hours", href: "/opening-hours" },
    { label: "Getting here", href: "/opening-hours?tab=getting-here" },
    { label: "Giga Extension", href: "/opening-hours?tab=opening-hours" },
    { label: "Parking", href: "/opening-hours?tab=parking" }
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
        padding: { md: '20px 0', lg: '24px 0' },
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
          padding: { md: '0 24px', lg: '0 48px' },
          display: 'flex',
          flexDirection: 'column',
          // gap: { md: '12px', lg: '2px' }
        }}
      >
        {planVisitItems.map((item, index) => (
          <Box
            key={index}
            component={Link}
            href={item.href}
            sx={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: { md: '14px', lg: '16px' },
              fontWeight: 400,
              fontFamily: '"Poppins", sans-serif',
              padding: { md: '8px 0', lg: '10px 0' },
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#D19F3B'
              }
            }}
          >
            {item.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PlanVisitDropdown;


