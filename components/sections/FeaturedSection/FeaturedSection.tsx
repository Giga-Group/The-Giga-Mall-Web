'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import Image from 'next/image';
import { FeaturedItem } from '@/types';

const featuredItems: FeaturedItem[] = [
  {
    image: '/Sephora_2_1.jpg',
    name: 'Sephora',
    description: 'The ultimate beauty playground featuring makeup, skincare, and fragrance icons.'
  },
  {
    image: '/NIKE_-_WMoN.jpg',
    name: 'Nike',
    description: 'Performance meets style with the latest sneakers, sportswear, and innovations.'
  },
  {
    image: '/ADIDAS.jpg',
    name: 'Adidas',
    description: 'Sport-inspired streetwear and footwear designed for game changers.'
  },
  {
    image: '/zara-forum6257.jpg',
    name: 'Zara',
    description: 'Runway-inspired collections, refreshed weekly, for modern everyday style.'
  },
  {
    image: '/Aesop_Westfield_Stratford_City.jpg',
    name: 'Aesop',
    description: 'Thoughtfully crafted skin, hair, and body care with a signature sensorial touch.'
  },
  {
    image: '/Starbucks.jpg',
    name: 'Starbucks',
    description: 'Your favourite handcrafted beverages, from classic coffees to seasonal specials.'
  },
  {
    name: 'Brand 1',
    image: '/picture1.jpg',
    description: 'Discover exceptional quality and style at Brand 1.'
  },
  {
    name: 'Brand 23',
    image: '/23.jpg',
    description: 'Experience premium products and innovative designs.'
  },
  {
    name: 'Brand 346',
    image: '/346.jpg',
    description: 'Elevate your lifestyle with our curated collection.'
  },
  {
    name: 'Brand 365',
    image: '/365.jpg',
    description: 'Style that works for you, every day of the year.'
  },
  {
    name: 'Brand 584',
    image: '/584.jpg',
    description: 'Contemporary designs for the modern shopper.'
  },
  {
    name: 'Brand 745',
    image: '/745.jpg',
    description: 'Quality craftsmanship meets timeless appeal.'
  },
  {
    name: 'Brand 4631',
    image: '/4631.jpg',
    description: 'Innovative products that redefine your experience.'
  },
  {
    name: 'Brand 6485',
    image: '/6485.jpg',
    description: 'Discover trends that set you apart from the rest.'
  }
];

const textFadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const imageFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const INTERVAL_MS = 5000;
const TRANSITION_DURATION = 600; // Reduced from 800ms for snappier feel

const FeaturedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null || isTransitioning) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }

    const deltaX = touchStartX - touchEndX;
    const SWIPE_THRESHOLD = 40;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        // Swiped left → move carousel left (show next item on the right)
        goToPrevious();
      } else {
        // Swiped right → move carousel right (show previous item on the left)
        goToNext();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const total = featuredItems.length;
  const centerIndex = currentIndex;
  const prevIndex = (centerIndex - 1 + total) % total;
  const nextIndex = (centerIndex + 1) % total;

  const goToNext = () => {
    if (isTransitioning) return;
    setSlideDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      // When sliding right, left image becomes center, so we decrement
      setCurrentIndex((currentIndex - 1 + total) % total);
      setSlideDirection('');
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setSlideDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      // When sliding left, right image becomes center, so we increment
      setCurrentIndex((currentIndex + 1) % total);
      setSlideDirection('');
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  useEffect(() => {
    if (isTransitioning) return;
    
    const intervalId = setInterval(() => {
      setSlideDirection('right');
      setIsTransitioning(true);
      setTimeout(() => {
        // When sliding right, left image becomes center, so we decrement
        setCurrentIndex((prev) => (prev - 1 + total) % total);
        setSlideDirection('');
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isTransitioning, total]);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        py: { xs: 4, sm: 5, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: { xs: 3, sm: 4 }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem', lg: '2.6rem' },
          textTransform: 'uppercase',
          textAlign: { xs: 'center', md: 'left' },
          paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '130px' },
          paddingRight: { xs: '16px', sm: '20px', md: '40px' },
          color: '#D19F3B',
          paddingBottom: { xs: 2, sm: 3, md: 4, lg: 5 }
        }}
      >
        FEATURED SECTION
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1, sm: 2, md: 3 },
          px: { xs: 1, sm: 4, md: 6, lg: 10 },
          position: 'relative',
          overflow: 'hidden',
          height: { xs: 480, sm: 480, md: 480, lg: 660 }
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left peek - hidden on mobile, visible from md+ */}
        <Box
          key={`left-${prevIndex}`}
          sx={{
            position: 'relative',
            display: { xs: 'none', sm: 'none', md: 'block' },
            flex: '0 0 auto',
            width: isTransitioning && slideDirection === 'right' 
              ? { xs: '70%', sm: '80%', md: '80%', lg: '95%' }
              : { xs: '56%', sm: '64%', md: '64%', lg: '76%' },
            maxWidth: isTransitioning && slideDirection === 'right'
              ? { xs: '70%', sm: '80%', md: '80%', lg: '95%' }
              : { xs: '56%', sm: '64%', md: '64%', lg: '76%' },
            borderRadius: { xs: '8px', sm: '12px' },
            overflow: 'hidden',
            boxShadow: isTransitioning && slideDirection === 'right'
              ? { xs: '0 6px 20px rgba(0,0,0,0.2)', sm: '0 10px 30px rgba(0,0,0,0.25)' }
              : '0 4px 16px rgba(0,0,0,0.15)',
            transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            transform: isTransitioning && slideDirection === 'right'
              ? { 
                  xs: 'translateX(calc(56% + 8px)) scale(1)',
                  sm: 'translateX(calc(64% + 16px)) scale(1)',
                  md: 'translateX(calc(64% + 24px)) scale(1)',
                  lg: 'translateX(calc(76% + 24px)) scale(1)'
                }
              : isTransitioning && slideDirection === 'left'
              ? 'translateX(-100%) scale(0.8)'
              : 'translateX(0) scale(0.8)',
            zIndex: isTransitioning && slideDirection === 'right' ? 5 : 1,
            opacity: isTransitioning && slideDirection === 'left' ? 0 : (isTransitioning && slideDirection === 'right' ? 1 : 0.5),
            height: isTransitioning && slideDirection === 'right'
              ? { xs: 480, sm: 480, md: 480, lg: 640 }
              : { xs: 384, sm: 384, md: 384, lg: 512 }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              animation: isTransitioning && slideDirection === 'right' 
                ? `${imageFadeIn} ${TRANSITION_DURATION}ms ease-out` 
                : 'none'
            }}
          >
            <Image
              src={featuredItems[prevIndex].image}
              alt="Previous featured brand"
              fill
              style={{ objectFit: 'cover' }}
              priority={isTransitioning && slideDirection === 'right'}
            />
          </Box>
          
          {isTransitioning && slideDirection === 'right' && (
            <>
              <Box
                sx={{
                  pointerEvents: 'none',
                  p: { xs: 2, sm: 2.5, md: 3.5 },
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 80%)',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  color: '#D19F3B',
                  animation: `${textFadeUp} ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    mb: { xs: 0.3, sm: 0.5 },
                    color: '#D19F3B',
                    fontWeight: 'bold'
                  }}
                >
                  {featuredItems[prevIndex].name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    maxWidth: { xs: '95%', sm: '80%' },
                    lineHeight: { xs: 1.4, sm: 1.5 },
                    color: '#D19F3B',
                    fontWeight: 'bold'
                  }}
                >
                  {featuredItems[prevIndex].description}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 10, sm: 12, md: 14 },
                  right: { xs: 10, sm: 16, md: 24 },
                  zIndex: 5,
                  width: { xs: 56, sm: 72, md: 84, lg: 120 },
                  height: 'auto'
                }}
              >
                <Image
                  src="/Giga Mall_.png"
                  alt="Giga Mall"
                  width={120}
                  height={43}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </>
          )}
        </Box>

        {/* Center main image - full width on mobile */}
        <Box
          key={`center-${centerIndex}`}
          sx={{
            position: 'relative',
            flex: '0 1 auto',
            width: isTransitioning && slideDirection === 'right'
              ? { xs: '100%', sm: '100%', md: '64%', lg: '76%' }
              : isTransitioning && slideDirection === 'left'
              ? { xs: '100%', sm: '100%', md: '64%', lg: '76%' }
              : { xs: '100%', sm: '100%', md: '80%', lg: '95%' },
            minWidth: isTransitioning && slideDirection === 'right'
              ? { xs: '100%', sm: '100%', md: '64%', lg: '76%' }
              : isTransitioning && slideDirection === 'left'
              ? { xs: '100%', sm: '100%', md: '64%', lg: '76%' }
              : { xs: '100%', sm: '100%', md: '80%', lg: '95%' },
            maxWidth: isTransitioning && slideDirection === 'right'
              ? { xs: '100%', sm: '100%', md: '64%', lg: '76%' }
              : isTransitioning && slideDirection === 'left'
              ? { xs: '100%', sm: '100%', md: '64%', lg: '76%' }
              : { xs: '100%', sm: '100%', md: '80%' },
            borderRadius: { xs: '12px', sm: '18px' },
            overflow: 'hidden',
            boxShadow: 'none',
            backgroundColor: '#f9f9f9',
            transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            transform: isTransitioning && slideDirection === 'right'
              ? { 
                  xs: 'translateX(0) scale(0.98)',
                  sm: 'translateX(0) scale(0.98)',
                  md: 'translateX(calc(64% + 24px)) scale(0.98)',
                  lg: 'translateX(calc(76% + 24px)) scale(0.98)'
                }
              : isTransitioning && slideDirection === 'left'
              ? { 
                  xs: 'translateX(0) scale(0.98)',
                  sm: 'translateX(0) scale(0.98)',
                  md: 'translateX(calc(-64% - 24px)) scale(0.98)',
                  lg: 'translateX(calc(-76% - 24px)) scale(0.98)'
                }
              : 'translateX(0) scale(1)',
            zIndex: isTransitioning ? 3 : 2,
            opacity: isTransitioning ? 0.4 : 1,
            height: { xs: 480, sm: 480, md: 480, lg: 640 },
            '&:hover': {
              transform: !isTransitioning ? { xs: 'none', sm: 'translateY(-6px) scale(1.01)' } : undefined,
              boxShadow: 'none',
              transition: !isTransitioning ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : undefined
            }
          }}
        >
          <IconButton
            onClick={goToPrevious}
            disabled={isTransitioning}
            sx={{
              position: 'absolute',
              left: { xs: 8, sm: 12, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#D19F3B',
              width: { xs: 36, sm: 44, md: 48 },
              height: { xs: 36, sm: 44, md: 48 },
              opacity: isTransitioning ? 0 : 1,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:disabled': {
                opacity: 0,
                pointerEvents: 'none',
              }
            }}
          >
            <ArrowBack sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
          </IconButton>

          <IconButton
            onClick={goToNext}
            disabled={isTransitioning}
            sx={{
              position: 'absolute',
              right: { xs: 8, sm: 12, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#D19F3B',
              width: { xs: 36, sm: 44, md: 48 },
              height: { xs: 36, sm: 44, md: 48 },
              opacity: isTransitioning ? 0 : 1,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:disabled': {
                opacity: 0,
                pointerEvents: 'none',
              }
            }}
          >
            <ArrowForward sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
          </IconButton>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}
          >
            <Image
              src={featuredItems[centerIndex].image}
              alt={featuredItems[centerIndex].name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>

          {!isTransitioning && (
            <>
              <Box
                key={`text-${currentIndex}`}
                sx={{
                  pointerEvents: 'none',
                  p: { xs: 2, sm: 2.5, md: 3.5 },
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 80%)',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  color: '#D19F3B',
                  animation: `${textFadeUp} ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    mb: { xs: 0.3, sm: 0.5 },
                    color: '#D19F3B',
                    fontWeight: 'bold'
                  }}
                >
                  {featuredItems[centerIndex].name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    maxWidth: { xs: '95%', sm: '80%' },
                    lineHeight: { xs: 1.4, sm: 1.5 },
                    color: '#D19F3B',
                    fontWeight: 'bold'
                  }}
                >
                  {featuredItems[centerIndex].description}
                </Typography>
              </Box>
              <Box
                key={`logo-${currentIndex}`}
                sx={{
                  position: 'absolute',
                  top: { xs: 10, sm: 12, md: 14 },
                  right: { xs: 10, sm: 16, md: 24 },
                  zIndex: 5,
                  width: { xs: 56, sm: 72, md: 84, lg: 120 },
                  height: 'auto'
                }}
              >
                <Image
                  src="/Giga Mall_.png"
                  alt="Giga Mall"
                  width={120}
                  height={43}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </>
          )}
        </Box>

        {/* Right peek - hidden on mobile, visible from md+ */}
        <Box
          key={`right-${nextIndex}`}
          sx={{
            position: 'relative',
            display: { xs: 'none', sm: 'none', md: 'block' },
            flex: '0 0 auto',
            width: isTransitioning && slideDirection === 'left'
              ? { xs: '70%', sm: '80%', md: '80%', lg: '95%' }
              : { xs: '56%', sm: '64%', md: '64%', lg: '76%' },
            maxWidth: isTransitioning && slideDirection === 'left'
              ? { xs: '70%', sm: '80%', md: '80%', lg: '95%' }
              : { xs: '56%', sm: '64%', md: '64%', lg: '76%' },
            borderRadius: { xs: '8px', sm: '12px' },
            overflow: 'hidden',
            boxShadow: isTransitioning && slideDirection === 'left'
              ? { xs: '0 6px 20px rgba(0,0,0,0.2)', sm: '0 10px 30px rgba(0,0,0,0.25)' }
              : '0 4px 16px rgba(0,0,0,0.15)',
            transition: `all ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            transform: isTransitioning && slideDirection === 'left'
              ? { 
                  xs: 'translateX(calc(-56% - 8px)) scale(1)',
                  sm: 'translateX(calc(-64% - 16px)) scale(1)',
                  md: 'translateX(calc(-64% - 24px)) scale(1)',
                  lg: 'translateX(calc(-76% - 24px)) scale(1)'
                }
              : isTransitioning && slideDirection === 'right'
              ? 'translateX(100%) scale(0.8)'
              : 'translateX(0) scale(0.8)',
            zIndex: isTransitioning && slideDirection === 'left' ? 5 : 1,
            opacity: isTransitioning && slideDirection === 'right' ? 0 : (isTransitioning && slideDirection === 'left' ? 1 : 0.5),
            height: isTransitioning && slideDirection === 'left'
              ? { xs: 480, sm: 480, md: 480, lg: 640 }
              : { xs: 384, sm: 384, md: 384, lg: 512 }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              animation: isTransitioning && slideDirection === 'left' 
                ? `${imageFadeIn} ${TRANSITION_DURATION}ms ease-out` 
                : 'none'
            }}
          >
            <Image
              src={featuredItems[nextIndex].image}
              alt="Next featured brand"
              fill
              style={{ objectFit: 'cover' }}
              priority={isTransitioning && slideDirection === 'left'}
            />
          </Box>
          
          {isTransitioning && slideDirection === 'left' && (
            <>
              <Box
                sx={{
                  pointerEvents: 'none',
                  p: { xs: 2, sm: 2.5, md: 3.5 },
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 80%)',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  color: '#D19F3B',
                  opacity: 1,
                  animation: `${textFadeUp} ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    mb: { xs: 0.3, sm: 0.5 },
                    color: '#D19F3B',
                    fontWeight: 'bold'
                  }}
                >
                  {featuredItems[nextIndex].name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.9rem' },
                    maxWidth: { xs: '95%', sm: '80%' },
                    lineHeight: { xs: 1.4, sm: 1.5 },
                    color: '#D19F3B',
                    fontWeight: 'bold'
                  }}
                >
                  {featuredItems[nextIndex].description}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 10, sm: 12, md: 14 },
                  right: { xs: 10, sm: 16, md: 24 },
                  zIndex: 5,
                  width: { xs: 56, sm: 72, md: 84, lg: 120 },
                  height: 'auto'
                }}
              >
                <Image
                  src="/Giga Mall_.png"
                  alt="Giga Mall"
                  width={120}
                  height={43}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedSection;

