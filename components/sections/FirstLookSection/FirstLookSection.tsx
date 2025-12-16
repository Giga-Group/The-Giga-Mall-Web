'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

interface FirstLookItem {
  title: string;
  description: string;
  image: string;
}

const firstLookItems: FirstLookItem[] = [
  {
    title: 'MARCO VERONESE AT FTNFT PHYGITAL SPACE!',
    description:
      'From October 5 to November 5, visitors to the ftNFT Phygital Space can...',
    image: '/20241019_WestfieldDays-JoniIsraeli-053-SWR60051-retouche-OK.jpg'
  },
  {
    title: 'SECRET GARDEN NEW MENU.',
    description: 'Time to create delicious memories.',
    image: '/DSC05412Food_OK_1.jpg'
  },
  {
    title: 'PARFUMS DE MARLY UNVEILS ALTHAÏR.',
    description:
      'A singular new trail brimming with contrast that is rooted in French h...',
    image: '/EU_US_-_Good_Festival.jpg'
  },
  {
    title: 'KURT GEIGER X MATTHEW WILLIAMSON COLLECTION',
    description:
      'Discover Kurt Geiger X Matthew Williamson Collaboration and enjoy quil...',
    image: '/Westfield_Days_2024_Tag-1_052_OK.jpg'
  },
  {
    title: 'BLOOMINGDALES KILIAN PARIS 15 YEARS EXCLUSIVE',
    description:
      "Join Kilian Paris' celebration of its 15-year anniversary with a limit...",
    image: '/ASC_2024_3.jpg'
  }
];

const FirstLookSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 6, sm: 8, md: 10 }
      }}
    >
      {/* Heading with elegant dividers (same style as Top Picks) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, sm: 3, md: 4 },
          mb: { xs: '32px', sm: '40px', md: '28px' },
          position: 'relative'
        }}
      >
        {/* Left divider */}
        <Box
          sx={{
            flex: { xs: 1, sm: 1.2, md: 1.5 },
            maxWidth: { xs: '100px', sm: '180px', md: '240px' },
            height: '2px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            '&::before': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '100%',
              height: '1px',
              background:
                'linear-gradient(90deg, rgba(209, 159, 59, 0) 0%, rgba(209, 159, 59, 0.3) 50%, rgba(209, 159, 59, 0.8) 100%)'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              right: { xs: '-4px', sm: '-5px', md: '-6px' },
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
              width: { xs: '8px', sm: '10px', md: '12px' },
              height: { xs: '8px', sm: '10px', md: '12px' },
              backgroundColor: '#D19F3B',
              borderRadius: '2px'
            }
          }}
        >
          {/* Decorative dots */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '4px', sm: '6px', md: '8px' },
              marginRight: { xs: '12px', sm: '16px', md: '20px' }
            }}
          >
            <Box
              sx={{
                width: { xs: '3px', sm: '4px', md: '5px' },
                height: { xs: '3px', sm: '4px', md: '5px' },
                borderRadius: '50%',
                backgroundColor: '#D19F3B',
                opacity: 0.4
              }}
            />
            <Box
              sx={{
                width: { xs: '3px', sm: '4px', md: '5px' },
                height: { xs: '3px', sm: '4px', md: '5px' },
                borderRadius: '50%',
                backgroundColor: '#D19F3B',
                opacity: 0.6
              }}
            />
            <Box
              sx={{
                width: { xs: '3px', sm: '4px', md: '5px' },
                height: { xs: '3px', sm: '4px', md: '5px' },
                borderRadius: '50%',
                backgroundColor: '#D19F3B',
                opacity: 0.8
              }}
            />
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: '"Arial", "Helvetica", sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: {
              xs: '1.2rem',
              sm: '1.5rem',
              md: '1.8rem',
              lg: '1.2rem'
            },
            textTransform: 'uppercase',
            textAlign: 'center',
            color: '#D19F3B',
            position: 'relative',
            px: { xs: 1, sm: 1.5, md: 2 }
          }}
        >
          FIRST LOOK
        </Typography>

        {/* Right divider (mirrored) */}
        <Box
          sx={{
            flex: { xs: 1, sm: 1.2, md: 1.5 },
            maxWidth: { xs: '100px', sm: '180px', md: '240px' },
            height: '2px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '100%',
              height: '1px',
              background:
                'linear-gradient(270deg, rgba(209, 159, 59, 0) 0%, rgba(209, 159, 59, 0.3) 50%, rgba(209, 159, 59, 0.8) 100%)'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              left: { xs: '-4px', sm: '-5px', md: '-6px' },
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
              width: { xs: '8px', sm: '10px', md: '12px' },
              height: { xs: '8px', sm: '10px', md: '12px' },
              backgroundColor: '#D19F3B',
              borderRadius: '2px'
            }
          }}
        >
          {/* Decorative dots */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '4px', sm: '6px', md: '8px' },
              marginLeft: { xs: '12px', sm: '16px', md: '20px' }
            }}
          >
            <Box
              sx={{
                width: { xs: '3px', sm: '4px', md: '5px' },
                height: { xs: '3px', sm: '4px', md: '5px' },
                borderRadius: '50%',
                backgroundColor: '#D19F3B',
                opacity: 0.8
              }}
            />
            <Box
              sx={{
                width: { xs: '3px', sm: '4px', md: '5px' },
                height: { xs: '3px', sm: '4px', md: '5px' },
                borderRadius: '50%',
                backgroundColor: '#D19F3B',
                opacity: 0.6
              }}
            />
            <Box
              sx={{
                width: { xs: '3px', sm: '4px', md: '5px' },
                height: { xs: '3px', sm: '4px', md: '5px' },
                borderRadius: '50%',
                backgroundColor: '#D19F3B',
                opacity: 0.4
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Cards row */}
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)'
          },
          columnGap: { xs: 4, sm: 6, md: 8 },
          rowGap: { xs: 6, sm: 8 }
        }}
      >
        {firstLookItems.map((item, index) => (
          <Box
            key={item.title + index}
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                width: { xs: 180, sm: 200, md: 220 },
                height: { xs: 180, sm: 200, md: 220 },
                mb: 3,
                position: 'relative'
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 60vw, 220px"
                style={{
                  objectFit: 'cover'
                }}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: '"Arial", "Helvetica", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.10em',
                color: '#000000',
                lineHeight: 1.5,
                mb: 1.5,
                maxWidth: 320
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Arial", "Helvetica", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.85rem' },
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.6,
                mb: 2,
                maxWidth: 320
              }}
            >
              {item.description}
            </Typography>

            <Button
              disableRipple
              sx={{
                fontFamily: '"Arial", "Helvetica", sans-serif',
                fontSize: { xs: '0.8rem', sm: '0.8rem' },
                fontWeight: 400,
                textTransform: 'none',
                letterSpacing: '0.18em',
                color: '#000000',
                padding: 0,
                minWidth: 'auto',
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline'
                }
              }}
            >
              Find out more
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FirstLookSection;


