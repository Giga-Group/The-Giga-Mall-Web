'use client';

import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface FirstLookItem {
  title: string;
  description: string;
  image: string;
}

const firstLookItems: FirstLookItem[] = [
  {
    title: 'Quaid e Azam Day Celebration',
    description: 'Stay tuned for exciting updates and news from Giga Mall.',
    image: '/up coming/upcoming10.jpg'
  },
  {
    title: 'New Year 2026 Celebration',
    description: 'Stay tuned for exciting updates and news from Giga Mall.',
    image: '/up coming/upcoming8.jpg'
  },
  // {
  //   title: 'UPCOMING EVENT 1',
  //   description: 'Stay tuned for exciting updates and news from Giga Mall.',
  //   image: '/upcoming1.jpg'
  // },
  {
    title: 'Tribal Beats 2025',
    description: 'Stay tuned for exciting updates and news from Giga Mall.',
    image: '/up coming/upcoming2.JPG'
  },
  // {
  //   title: 'UPCOMING EVENT 3',
  //   description: 'Stay tuned for exciting updates and news from Giga Mall.',
  //   image: '/upcoming3.jpg'
  // },
  {
    title: 'Goldcrest Poolside',
    description: 'Stay tuned for exciting updates and news from Giga Mall.',
    image: '/up coming/upcoming4.jpg'
  },
  {
    title: 'Shop with joy',
    description: 'Stay tuned for exciting updates and news from Giga Mall.',
    image: '/up coming/upcoming5.jpg'
  },
  {
    title: 'Fun And Learning',
    description: 'Stay tuned for exciting updates and news from Giga Mall.',
    image: '/up coming/upcoming6.jpg'
  },
  {
    title: 'Hub of Shopping',
    description: 'Stay tuned for exciting updates and news from Giga Mall.',
    image: '/up coming/upcoming7.jpg'
  },
  
  // {
  //   title: 'UPCOMING EVENT 9',
  //   description: 'Stay tuned for exciting updates and news from Giga Mall.',
  //   image: '/upcoming9.jpg'
  // },
];

const FirstLookSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

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
            fontFamily: '"Quicksand", sans-serif',
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
          UPCOMING EVENTS AND NEWS
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

      {/* Cards row - Carousel for mobile, Grid for desktop */}
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Mobile Carousel */}
        {isMobile ? (
          <>
            <Box
              ref={emblaRef}
              sx={{
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 4
                }}
              >
                {firstLookItems.map((item, index) => (
                  <Box
                    key={item.title + index}
                    sx={{
                      minWidth: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      px: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: 280,
                        height: 280,
                        mb: 3,
                        position: 'relative',
                        flexShrink: 0
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="280px"
                        style={{
                          objectFit: index <= 6 ? 'contain' : 'cover'
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '0.8rem',
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
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '0.8rem',
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
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '0.8rem',
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
          </>
        ) : (
          /* Desktop Grid */
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(3, 1fr)'
              },
              columnGap: { sm: 6, md: 8 },
              rowGap: { sm: 8 }
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
                    width: { sm: 320, md: 360 },
                    height: { sm: 320, md: 360 },
                    mb: 3,
                    position: 'relative'
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 60vw, 360px"
                    style={{
                      objectFit: index <= 6 ? 'contain' : 'cover'
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { sm: '0.85rem', md: '0.9rem' },
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
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { sm: '0.85rem' },
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
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { sm: '0.8rem' },
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
        )}
      </Box>
    </Box>
  );
};

export default FirstLookSection;


