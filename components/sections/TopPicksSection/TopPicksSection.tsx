'use client';

import { useEffect, useState, useCallback } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';

interface TopPick {
  brand: string;
  image: string;
  link?: string;
}

// Group items into sets of 3 for the grid layout
const allTopPicks: TopPick[] = [
  // Set 1
  {
    brand: 'LONGINES',
    image: '/_F1A0822.jpg',
    link: '/shop/longines'
  },
  {
    brand: 'CHANEL',
    image: '/WESTFIELD_CENTURY_CITY_TAYLOR_SWIFT_2.jpg',
    link: '/shop/chanel'
  },
  {
    brand: 'GIUSEPPE ZANOTTI',
    image: '/DSC07901.jpg',
    link: '/shop/giuseppe-zanotti'
  },
  // Set 2
  {
    brand: 'H&M',
    image: '/H and M.jpg',
    link: '/shop/hm'
  },
  {
    brand: 'ZARA',
    image: '/zara-forum6257.jpg',
    link: '/shop/zara'
  },
  {
    brand: 'NIKE',
    image: '/NIKE_-_WMoN.jpg',
    link: '/shop/nike'
  },
  // Set 3
  {
    brand: 'ADIDAS',
    image: '/ADIDAS.jpg',
    link: '/shop/adidas'
  },
  {
    brand: 'SEPHORA',
    image: '/Sephora_2_1.jpg',
    link: '/shop/sephora'
  },
  {
    brand: 'VICTORIA\'S SECRET',
    image: '/Victoria_s_Secret_Westfield_Stratford_City.jpg',
    link: '/shop/victorias-secret'
  }
];

const TopPicksSection = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Group items into sets of 3
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

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

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
            fontFamily: '"Arial", "Helvetica", sans-serif',
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
          disabled={isTransitioning}
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
            backgroundColor: '#E5E5E5',
            border: '1px solid #e0e0e0',
            '&:hover': {
              backgroundColor: '#d0d0d0'
            },
            '&:disabled': {
              opacity: 0.5,
              cursor: 'not-allowed'
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <ArrowBackIos sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, color: '#000000' }} />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={goToNext}
          disabled={isTransitioning}
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
            backgroundColor: '#E5E5E5',
            border: '1px solid #e0e0e0',
            '&:hover': {
              backgroundColor: '#d0d0d0'
            },
            '&:disabled': {
              opacity: 0.5,
              cursor: 'not-allowed'
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <ArrowForwardIos sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' }, color: '#000000' }} />
        </IconButton>

        {/* Grid Layout - 2x2 structure */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr'
            },
            gridTemplateRows: {
              xs: 'repeat(3, minmax(250px, 1fr))',
              md: 'repeat(2, minmax(350px, 1fr))'
            },
            gap: { xs: '16px', sm: '20px', md: '24px' },
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
                src={currentSet[0].image}
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
                    fontFamily: '"Arial", "Helvetica", sans-serif',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                    fontWeight: 700,
                    color: '#ffffff',
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
                    border: '1px solid #ffffff',
                    color: '#ffffff',
                    padding: { xs: '6px 16px', sm: '8px 20px', md: '10px 24px' },
                    fontSize: { xs: '11px', sm: '12px', md: '14px' },
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderRadius: '0',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: '#ffffff'
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
                src={currentSet[1].image}
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
                    fontFamily: '"Arial", "Helvetica", sans-serif',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                    fontWeight: 700,
                    color: '#ffffff',
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
                    border: '1px solid #ffffff',
                    color: '#ffffff',
                    padding: { xs: '6px 16px', sm: '8px 20px', md: '10px 24px' },
                    fontSize: { xs: '11px', sm: '12px', md: '14px' },
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderRadius: '0',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: '#ffffff'
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
                src={currentSet[2].image}
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
                    fontFamily: '"Arial", "Helvetica", sans-serif',
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                    fontWeight: 700,
                    color: '#ffffff',
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
                    border: '1px solid #ffffff',
                    color: '#ffffff',
                    padding: { xs: '6px 16px', sm: '8px 20px', md: '10px 24px' },
                    fontSize: { xs: '11px', sm: '12px', md: '14px' },
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    borderRadius: '0',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: '#ffffff'
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
      </Box>
    </Box>
  );
};

export default TopPicksSection;
