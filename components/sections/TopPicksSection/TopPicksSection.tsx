'use client';

import { useEffect, useState, useCallback } from 'react';
import { Box, Typography, IconButton, Button, useMediaQuery, useTheme } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { getMobileBrandImage, getMobileDineImage } from '@/lib/utils/constants';

interface TopPick {
  brand: string;
  image: string;
  link?: string;
}

// Top picks from shop and dine sections
const allTopPicks: TopPick[] = [
  // Shop picks
  {
    brand: 'Alkaram',
    image: '/alkaram.jpg',
    link: '/shop/alkaram'
  },
  {
    brand: 'Batik Studio',
    image: '/batik-studio.jpg',
    link: '/shop/batik-studio'
  },
  {
    brand: 'Kayseria',
    image: '/kayseria.jpeg',
    link: '/shop/kayseria'
  },
  // Dine picks
  {
    brand: 'Cheezious',
    image: '/cheezious.jpeg',
    link: '/dine/cheezious'
  },
  {
    brand: 'Pizza Hut',
    image: '/pizzahut.jpeg',
    link: '/dine/pizzahut'
  },
  {
    brand: 'Wild Wings',
    image: '/wild-wings.jpeg',
    link: '/dine/wild-wings'
  }
];

// Mobile-specific top picks images
const mobileTopPicks: TopPick[] = [
  {
    brand: 'Red Apple',
    image: '/toppick1.JPG',
    link: '#'
  },
  {
    brand: 'OPTP',
    image: '/toppick2.JPG',
    link: '#'
  },
  {
    brand: 'Chachajee',
    image: '/toppick3.JPG',
    link: '#'
  },
  {
    brand: 'Simply Sufi',
    image: '/toppick4.JPG',
    link: '#'
  },
  {
    brand: 'Rewayat',
    image: '/toppick5.JPG',
    link: '#'
  },
  {
    brand: 'Spice Factory',
    image: '/toppick6.JPG',
    link: '#'
  },
  {
    brand: 'China Grill',
    image: '/toppick7.JPG',
    link: '#'
  },
  {
    brand: 'Kababjees',
    image: '/toppick8.JPG',
    link: '#'
  }
];

const TopPicksSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileView = useMediaQuery(theme.breakpoints.down('lg'));
  
  // Helper function to get mobile image based on whether it's a dine or brand item
  const getMobileImage = (item: TopPick) => {
    if (!isMobileView) return item.image;
    // Check if it's a dine item by checking the link
    if (item.link && item.link.startsWith('/dine')) {
      return getMobileDineImage(item.image, item.brand);
    }
    return getMobileBrandImage(item.image, item.brand);
  };
  
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Embla carousel for mobile - continuous slow scroll
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: true, // Enable free dragging for smooth movement
      duration: isMobile ? 30 : 50, // Faster on mobile (lower = faster)
    },
    [Autoplay({ delay: isMobile ? 3000 : 4000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  // Group items into sets of 3 for desktop
  const getCurrentSet = useCallback(() => {
    const sets: TopPick[][] = [];
    for (let i = 0; i < allTopPicks.length; i += 3) {
      sets.push(allTopPicks.slice(i, i + 3));
    }
    return sets[currentSetIndex % sets.length] || [];
  }, [currentSetIndex]);

  const currentSet = getCurrentSet();
  const totalSets = Math.ceil(allTopPicks.length / 3);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSetIndex((prev) => (prev + 1) % totalSets);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSets]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSetIndex((prev) => (prev - 1 + totalSets) % totalSets);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSets]);

  // Auto-scroll every 5 seconds for desktop
  useEffect(() => {
    if (isMobile) return; // Don't auto-scroll on mobile (embla handles it)
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNext, isMobile]);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        px: { xs: 2, sm: 4, md: 6, lg: 10 }
      }}
    >
      {/* TOP PICKS Heading with elegant fashion dividers */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, sm: 3, md: 4 },
          mb: { xs: '32px', sm: '40px', md: '28px' },
          // pt: { xs: 3, sm: 4, md: 5, lg: 0 },
          position: 'relative'
        }}
      >
        {/* Left divider - Elegant geometric design */}
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
              background: 'linear-gradient(90deg, rgba(209, 159, 59, 0) 0%, rgba(209, 159, 59, 0.3) 50%, rgba(209, 159, 59, 0.8) 100%)'
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
          variant="h2"
          sx={{
            fontFamily: '"Quicksand", sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem', lg: '1.2rem' },
            textTransform: 'uppercase',
            textAlign: 'center',
            // letterSpacing: '0.18em',
            color: '#D19F3B',
            position: 'relative',
            px: { xs: 1, sm: 1.5, md: 2 }
          }}
        >
          TOP PICKS
        </Typography>

        {/* Right divider - Elegant geometric design (mirrored) */}
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
              background: 'linear-gradient(270deg, rgba(209, 159, 59, 0) 0%, rgba(209, 159, 59, 0.3) 50%, rgba(209, 159, 59, 0.8) 100%)'
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

      {/* Grid Container */}
      <Box
        sx={{
          position: 'relative',
          maxWidth: '1400px',
          margin: '0 auto',
          minHeight: { xs: '600px', sm: '700px', md: '800px', lg: '700px' }
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={goToPrev}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            position: 'absolute',
            left: { xs: '-20px', sm: '-30px', md: '-40px', lg: '-70px' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: { xs: '36px', sm: '40px', md: '44px' },
            height: { xs: '36px', sm: '40px', md: '44px' },
            borderRadius: '50%',
            backgroundColor: '#D19F3B',
            border: '1px solid #D19F3B',
            '&:hover': {
              backgroundColor: '#D19F3B'
            },
            '&:active': {
              backgroundColor: '#D19F3B'
            },
            '&:disabled': {
              opacity: 0.5,
              cursor: 'not-allowed'
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <ArrowBackIos sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, color: '#ffffff' }} />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={goToNext}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            position: 'absolute',
            right: { xs: '-20px', sm: '-30px', md: '-40px', lg: '-70px' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: { xs: '36px', sm: '40px', md: '44px' },
            height: { xs: '36px', sm: '40px', md: '44px' },
            borderRadius: '50%',
            backgroundColor: '#D19F3B',
            border: '1px solid #D19F3B',
            '&:hover': {
              backgroundColor: '#D19F3B'
            },
            '&:active': {
              backgroundColor: '#D19F3B'
            },
            '&:disabled': {
              opacity: 0.5,
              cursor: 'not-allowed'
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <ArrowForwardIos sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, color: '#ffffff' }} />
        </IconButton>

        {/* Mobile Carousel */}
        {isMobile ? (
          <Box 
            ref={emblaRef} 
            sx={{ 
              overflow: 'hidden', 
              position: 'relative',
              '& .embla__container': {
                transition: 'transform 1.2s ease-in-out', // Slow, smooth continuous movement
              }
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              {mobileTopPicks.map((pick, index) => (
                <Box
                  key={pick.brand + index}
                  sx={{
                    minWidth: '100%',
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: { xs: '530px', sm: '450px' },
                    cursor: 'pointer',
                    '&:hover img': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <Image
                    src={pick.image}
                    alt={pick.brand}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease-in-out'
                    }}
                    sizes="100vw"
                  />
                  
                  {/* Overlay Gradient */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '45%',
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%)',
                      zIndex: 2
                    }}
                  />

                  {/* Brand Name and Button */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      zIndex: 3,
                      width: 'calc(100% - 32px)'
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#D19F3B',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {pick.brand}
                    </Typography>
                    
                    <Button
                      component="a"
                      href={pick.link || '#'}
                      sx={{
                        backgroundColor: 'transparent',
                        border: '1px solid #D19F3B',
                        color: '#D19F3B',
                        padding: '6px 16px',
                        fontSize: '11px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        borderRadius: '0',
                        fontFamily: '"Quicksand", sans-serif',
                        '&:hover': {
                          backgroundColor: 'rgba(209, 159, 59, 0.1)',
                          borderColor: '#D19F3B'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      EXPLORE MORE
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          /* Desktop Grid Layout - 2x2 structure */
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'repeat(2, minmax(350px, 1fr))',
              gap: '24px',
              opacity: isTransitioning ? 0.7 : 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
          {/* Top Left - First item */}
          {currentSet[0] && (
            <Box
              sx={{
                position: 'relative',
                borderRadius: { xs: '4px', sm: '8px' },
                overflow: 'hidden',
                gridColumn: { md: '1 / 2' },
                gridRow: { md: '1 / 2' },
                cursor: 'pointer',
                height: { xs: '250px', sm: '300px', md: '100%' },
                minHeight: { md: '350px' },
                '&:hover img': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <Image
                src={getMobileImage(currentSet[0])}
                alt={currentSet[0].brand}
                fill
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease-in-out'
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '45%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%)',
                  zIndex: 2
                }}
              />

              {/* Brand Name and Button */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '16px', sm: '20px', md: '24px' },
                  left: { xs: '16px', sm: '20px', md: '24px' },
                  zIndex: 3,
                  width: 'calc(100% - 32px)'
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                    fontWeight: 700,
                    color: '#D19F3B',
                    textTransform: 'uppercase',
                    marginBottom: { xs: '10px', sm: '12px', md: '16px' },
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.05em'
                  }}
                >
                  {currentSet[0].brand}
                </Typography>
                
                <Button
                  component="a"
                  href={currentSet[0].link || '#'}
                  sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid #D19F3B',
                    color: '#D19F3B',
                    padding: { xs: '6px 16px', sm: '8px 20px', md: '10px 24px' },
                    fontSize: { xs: '11px', sm: '12px', md: '14px' },
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderRadius: '0',
                    '&:hover': {
                      backgroundColor: 'rgba(209, 159, 59, 0.1)',
                      borderColor: '#D19F3B'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  EXPLORE MORE
                </Button>
              </Box>
            </Box>
          )}

          {/* Right Side - Second item (spans both rows on desktop) */}
          {currentSet[1] && (
            <Box
              sx={{
                position: 'relative',
                borderRadius: { xs: '4px', sm: '8px' },
                overflow: 'hidden',
                gridColumn: { md: '2 / 3' },
                gridRow: { md: '1 / 3' },
                cursor: 'pointer',
                height: { xs: '250px', sm: '300px', md: '100%' },
                minHeight: { md: '700px' },
                '&:hover img': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <Image
                src={getMobileImage(currentSet[1])}
                alt={currentSet[1].brand}
                fill
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease-in-out'
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '45%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%)',
                  zIndex: 2
                }}
              />

              {/* Brand Name and Button */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '16px', sm: '20px', md: '24px' },
                  left: { xs: '16px', sm: '20px', md: '24px' },
                  zIndex: 3,
                  width: 'calc(100% - 32px)'
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                    fontWeight: 700,
                    color: '#D19F3B',
                    textTransform: 'uppercase',
                    marginBottom: { xs: '10px', sm: '12px', md: '16px' },
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.05em'
                  }}
                >
                  {currentSet[1].brand}
                </Typography>
                
                <Button
                  component="a"
                  href={currentSet[1].link || '#'}
                  sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid #D19F3B',
                    color: '#D19F3B',
                    padding: { xs: '6px 16px', sm: '8px 20px', md: '10px 24px' },
                    fontSize: { xs: '11px', sm: '12px', md: '14px' },
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderRadius: '0',
                    '&:hover': {
                      backgroundColor: 'rgba(209, 159, 59, 0.1)',
                      borderColor: '#D19F3B'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  EXPLORE MORE
                </Button>
              </Box>
            </Box>
          )}

          {/* Bottom Left - Third item */}
          {currentSet[2] && (
            <Box
              sx={{
                position: 'relative',
                borderRadius: { xs: '4px', sm: '8px' },
                overflow: 'hidden',
                gridColumn: { md: '1 / 2' },
                gridRow: { md: '2 / 3' },
                cursor: 'pointer',
                height: { xs: '250px', sm: '300px', md: '100%' },
                minHeight: { md: '350px' },
                '&:hover img': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <Image
                src={getMobileImage(currentSet[2])}
                alt={currentSet[2].brand}
                fill
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease-in-out'
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '45%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%)',
                  zIndex: 2
                }}
              />

              {/* Brand Name and Button */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '16px', sm: '20px', md: '24px' },
                  left: { xs: '16px', sm: '20px', md: '24px' },
                  zIndex: 3,
                  width: 'calc(100% - 32px)'
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                    fontWeight: 700,
                    color: '#D19F3B',
                    textTransform: 'uppercase',
                    marginBottom: { xs: '10px', sm: '12px', md: '16px' },
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.05em'
                  }}
                >
                  {currentSet[2].brand}
                </Typography>
                
                <Button
                  component="a"
                  href={currentSet[2].link || '#'}
                  sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid #D19F3B',
                    color: '#D19F3B',
                    padding: { xs: '6px 16px', sm: '8px 20px', md: '10px 24px' },
                    fontSize: { xs: '11px', sm: '12px', md: '14px' },
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderRadius: '0',
                    '&:hover': {
                      backgroundColor: 'rgba(209, 159, 59, 0.1)',
                      borderColor: '#D19F3B'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  EXPLORE MORE
                </Button>
              </Box>
            </Box>
          )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TopPicksSection;
