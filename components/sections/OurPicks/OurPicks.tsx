'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export interface PickItem {
  image: string;
  name: string;
  slug?: string;
}

interface OurPicksProps {
  picks?: PickItem[];
  basePath?: string;
}

const defaultPicks: PickItem[] = [
  {
    image: '/picture1.jpg',
    name: 'Almirah',
    slug: 'chloe'
  },
  {
    image: '/23.jpg',
    name: 'Anta',
    slug: 'tommy-hilfiger-kids'
  },
  {
    image: '/346.jpg',
    name: 'Breakout',
    slug: 'longines'
  }
];

const OurPicks = ({ picks = defaultPicks, basePath = '/shop' }: OurPicksProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 3, sm: 4, md: 5 , lg : 0},
        px: { xs: 2, sm: 4, md: 6, lg: 10 }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, sm: 3, md: 4 },
          mb: { xs: 2, sm: 3, md: 4 },
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Left Divider with decorative elements */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            maxWidth: { xs: '80px', sm: '120px', md: '180px' },
            gap: 1
          }}
        >
          {/* Decorative dot */}
          <Box
            sx={{
              width: { xs: '4px', sm: '5px', md: '6px' },
              height: { xs: '4px', sm: '5px', md: '6px' },
              borderRadius: '50%',
              backgroundColor: '#D19F3B',
              flexShrink: 0
            }}
          />
          {/* Curved line */}
          <Box
            sx={{
              flex: 1,
              height: { xs: '2px', sm: '2.5px', md: '3px' },
              background: 'linear-gradient(to right, transparent 0%, #D19F3B 20%, #D19F3B 80%, transparent 100%)',
              borderRadius: '2px',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%) rotate(-45deg)',
                transformOrigin: 'center',
                width: { xs: '8px', sm: '10px', md: '12px' },
                height: { xs: '8px', sm: '10px', md: '12px' },
                border: { xs: '2px', sm: '2.5px', md: '3px' },
                borderColor: '#D19F3B',
                borderRight: 'none',
                borderBottom: 'none',
                borderRadius: '8px 0 0 0'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%) rotate(45deg)',
                transformOrigin: 'center',
                width: { xs: '8px', sm: '10px', md: '12px' },
                height: { xs: '8px', sm: '10px', md: '12px' },
                border: { xs: '2px', sm: '2.5px', md: '3px' },
                borderColor: '#D19F3B',
                borderLeft: 'none',
                borderTop: 'none',
                borderRadius: '0 0 8px 0'
              }
            }}
          />
        </Box>
        
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
            fontWeight: 600,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#D19F3B',
            whiteSpace: 'nowrap',
            position: 'relative',
            px: { xs: 1, sm: 1.5, md: 2 }
          }}
        >
          OUR PICKS
        </Typography>
        
        {/* Right Divider with decorative elements */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            maxWidth: { xs: '80px', sm: '120px', md: '180px' },
            gap: 1
          }}
        >
          {/* Curved line */}
          <Box
            sx={{
              flex: 1,
              height: { xs: '2px', sm: '2.5px', md: '3px' },
              background: 'linear-gradient(to left, transparent 0%, #D19F3B 20%, #D19F3B 80%, transparent 100%)',
              borderRadius: '2px',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%) rotate(-45deg)',
                transformOrigin: 'center',
                width: { xs: '8px', sm: '10px', md: '12px' },
                height: { xs: '8px', sm: '10px', md: '12px' },
                border: { xs: '2px', sm: '2.5px', md: '3px' },
                borderColor: '#D19F3B',
                borderRight: 'none',
                borderTop: 'none',
                borderRadius: '0 0 0 8px'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%) rotate(45deg)',
                transformOrigin: 'center',
                width: { xs: '8px', sm: '10px', md: '12px' },
                height: { xs: '8px', sm: '10px', md: '12px' },
                border: { xs: '2px', sm: '2.5px', md: '3px' },
                borderColor: '#D19F3B',
                borderLeft: 'none',
                borderBottom: 'none',
                borderRadius: '0 8px 0 0'
              }
            }}
          />
          {/* Decorative dot */}
          <Box
            sx={{
              width: { xs: '4px', sm: '5px', md: '6px' },
              height: { xs: '4px', sm: '5px', md: '6px' },
              borderRadius: '50%',
              backgroundColor: '#D19F3B',
              flexShrink: 0
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: { xs: 2, sm: 2.5, md: 3 },
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {picks.map((pick, index) => (
          <Link
            key={index}
            href={`${basePath}/${pick.slug || pick.name.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: { xs: '8px', sm: '12px' },
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Image
                src={pick.image}
                alt={pick.name}
                fill
                style={{ objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 1.5, sm: 2 },
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 500,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    textAlign: 'center'
                  }}
                >
                  {pick.name}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default OurPicks;

