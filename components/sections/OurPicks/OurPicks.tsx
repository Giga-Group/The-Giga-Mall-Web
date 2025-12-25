'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
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
    image: '/alkaram.jpg',
    name: 'Alkaram',
    slug: 'alkaram'
  },
  {
    image: '/batik-studio.jpg',
    name: 'Batik Studio',
    slug: 'batik-studio'
  },
  {
    image: '/kayseria.jpeg',
    name: 'Kayseria',
    slug: 'kayseria'
  }
];

const OurPicks = ({ picks = defaultPicks, basePath = '/shop' }: OurPicksProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayPausedRef = useRef(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % picks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, picks.length]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + picks.length) % picks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, picks.length]);

  // Auto-scroll every 5 seconds (only on mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning && !autoPlayPausedRef.current) {
        goToNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNext, isTransitioning]);

  const handleTouchStart = (e: React.TouchEvent) => {
    autoPlayPausedRef.current = true;
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart !== null) {
      setTouchEnd(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || touchEnd === null) {
      setTouchStart(null);
      setTouchEnd(null);
      setTimeout(() => {
        autoPlayPausedRef.current = false;
      }, 5000);
      return;
    }

    const delta = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(delta) > minSwipeDistance) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
    setTimeout(() => {
      autoPlayPausedRef.current = false;
    }, 5000);
  };
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

      {/* Mobile Carousel View (xs only) */}
      <Box
        sx={{
          display: { xs: 'block', lg: 'none' },
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Container */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            touchAction: 'pan-y'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              willChange: 'transform'
            }}
          >
            {picks.map((pick, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: '100%',
                  width: '100%',
                  flexShrink: 0,
                  px: 1
                }}
              >
                <Link
                  href={`${basePath}/${pick.slug || pick.name.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '4/3',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:active': {
                        transform: 'scale(0.98)'
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
                        p: 1.5,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#ffffff',
                          fontWeight: 500,
                          fontSize: '0.9rem',
                          textAlign: 'center'
                        }}
                      >
                        {pick.name}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Carousel Indicators */}
        <Box
          sx={{
            display: { xs: 'flex', lg: 'none' },
            justifyContent: 'center',
            gap: 1,
            mt: 2
          }}
        >
          {picks.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              sx={{
                width: currentIndex === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentIndex === index ? '#D19F3B' : '#D19F3B',
                opacity: currentIndex === index ? 1 : 0.3,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Grid View (lg and above) */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'grid' },
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 3,
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
                borderRadius: '12px',
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
                  p: 2,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 500,
                    fontSize: '1.1rem',
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

