'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import Image from 'next/image';
import { FeaturedItem } from '@/types';

const featuredItems: FeaturedItem[] = [
  {
    image: '/Sephora_2_1.jpg',
    name: 'Sephora',
    description: 'The ultimate beauty playground featuring makeup, skincare, and fragrance icons.',
  },
  {
    image: '/NIKE_-_WMoN.jpg',
    name: 'Nike',
    description: 'Performance meets style with the latest sneakers, sportswear, and innovations.',
  },
  {
    image: '/ADIDAS.jpg',
    name: 'Adidas',
    description: 'Sport-inspired streetwear and footwear designed for game changers.',
  },
  {
    image: '/zara-forum6257.jpg',
    name: 'Zara',
    description: 'Runway-inspired collections, refreshed weekly, for modern everyday style.',
  },
];

const textFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const INTERVAL_MS = 5000;
const TRANSITION_MS = 600;

export default function FeaturedSection() {
  const total = featuredItems.length;

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('prev'); // 👈 default LEFT → CENTER
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isAnimatingRef = useRef(false);
  const autoPlayPausedRef = useRef(false);

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  /* ------------------ CONTROLS ------------------ */

  const goNext = () => {
    if (isAnimatingRef.current) return;
    setDirection('next');
    setIsAnimating(true);
    isAnimatingRef.current = true;
    setCurrent((c) => (c + 1) % total);
    setTimeout(() => {
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, TRANSITION_MS);
  };

  const goPrev = () => {
    if (isAnimatingRef.current) return;
    setDirection('prev');
    setIsAnimating(true);
    isAnimatingRef.current = true;
    setCurrent((c) => (c - 1 + total) % total);
    setTimeout(() => {
      setIsAnimating(false);
      isAnimatingRef.current = false;
    }, TRANSITION_MS);
  };

  /* ------------------ AUTO PLAY ------------------ */
  // ✅ LEFT → CENTER (same movement as left arrow click)
  useEffect(() => {
    const id = setInterval(() => {
      if (!isAnimatingRef.current && !autoPlayPausedRef.current) {
        goPrev(); // 👈 Same movement as clicking left arrow
      }
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  /* ------------------ POSITION LOGIC ------------------ */

  const getPosition = (index: number) => {
    if (index === current) return 'center';
    if (index === prev) return 'left';
    if (index === next) return 'right';
    return 'hidden';
  };

  const slideStyle = {
    base: {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: { xs: '100%', md: '94%' },
      height: '100%',
      borderRadius: { xs: 6, md: 10 },
      overflow: 'hidden',
      transformOrigin: 'center',
      transition: `transform ${TRANSITION_MS}ms ease, opacity ${TRANSITION_MS}ms ease`,
    },

    center: {
      transform: 'translateX(-50%) scale(1)',
      opacity: 1,
      zIndex: 3,
    },

    left: {
      transform: {
        xs: direction === 'prev'
          ? 'translateX(-100%) scale(1)' // On mobile, hide completely when coming in
          : 'translateX(-100%) scale(1)', // Always hidden on mobile
        md: direction === 'prev'
          ? 'translateX(-180%) scale(0.9)' // coming IN on desktop
          : 'translateX(-70%) scale(0.9)',
      },
      opacity: { xs: 0, md: 0.5 }, // Hidden on mobile, visible on desktop
      zIndex: 2,
    },

    right: {
      transform: {
        xs: direction === 'prev'
          ? 'translateX(100%) scale(1)' // Always hidden on mobile
          : 'translateX(100%) scale(1)', // Always hidden on mobile
        md: direction === 'prev'
          ? 'translateX(80%) scale(0.9)'
          : 'translateX(180%) scale(0.9)', // going OUT on desktop
      },
      opacity: { xs: 0, md: 0.5 }, // Hidden on mobile, visible on desktop
      zIndex: 2,
    },

    hidden: {
      opacity: 0,
      pointerEvents: 'none',
      zIndex: 1,
    },
  };

  /* ------------------ RENDER ------------------ */

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 0 }, backgroundColor: '#fff' }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: { xs: 3, md: 4 },
          color: '#D19F3B',
          fontFamily: 'Georgia',
          fontWeight: 700,
          letterSpacing: '0.1em',
          fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
        }}
      >
        FEATURED SECTION
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 480, lg: 640 },
          overflow: 'hidden',
          touchAction: 'pan-y', // Allow vertical scrolling but handle horizontal swipes
          mx: 'auto',
          maxWidth: { xs: '100%', md: '95%' },
        }}
        onTouchStart={(e) => {
          autoPlayPausedRef.current = true; // Pause auto-play on touch
          setTouchStart(e.touches[0].clientX);
          setTouchEnd(null);
        }}
        onTouchMove={(e) => {
          if (touchStart !== null) {
            setTouchEnd(e.touches[0].clientX);
          }
        }}
        onTouchEnd={(e) => {
          if (!touchStart || touchEnd === null) {
            setTouchStart(null);
            setTouchEnd(null);
            // Resume auto-play after a delay
            setTimeout(() => {
              autoPlayPausedRef.current = false;
            }, INTERVAL_MS);
            return;
          }
          
          const delta = touchStart - touchEnd;
          const minSwipeDistance = 50;
          
          if (Math.abs(delta) > minSwipeDistance) {
            if (delta > 0) {
              goNext(); // Swiped left → show next
            } else {
              goPrev(); // Swiped right → show previous
            }
          }
          
          setTouchStart(null);
          setTouchEnd(null);
          
          // Resume auto-play after a delay
          setTimeout(() => {
            autoPlayPausedRef.current = false;
          }, INTERVAL_MS);
        }}
      >
        {[prev, current, next].map((index) => {
          const pos = getPosition(index);

          return (
            <Box key={index} sx={{ ...slideStyle.base, ...slideStyle[pos] }}>
              <Image
                src={featuredItems[index].image}
                alt={featuredItems[index].name}
                fill
                priority={pos === 'center'}
                style={{ objectFit: 'cover' }}
              />

              {pos === 'center' && (
                <>
                  {/* Giga Mall Logo */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 10, sm: 12, md: 14 },
                      right: { xs: 12, sm: 16, md: 24 },
                      zIndex: 10,
                      width: { xs: 48, sm: 72, md: 84, lg: 120 },
                      height: 'auto',
                      maxWidth: { xs: 'calc(100% - 24px)', sm: 'none' },
                      boxSizing: 'border-box',
                    }}
                  >
                    <Image
                      src="/Giga Mall_.png"
                      alt="Giga Mall"
                      width={120}
                      height={43}
                      style={{ 
                        objectFit: 'contain', 
                        width: '100%', 
                        height: 'auto', 
                        maxWidth: '100%',
                        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))'
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 2, md: 3 },
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 85%)',
                      animation: `${textFadeUp} 500ms ease`,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#D19F3B',
                        fontFamily: 'Georgia',
                        fontWeight: 'bold',
                        letterSpacing: '0.08em',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                        mb: { xs: 0.5, md: 1 },
                      }}
                    >
                      {featuredItems[index].name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#D19F3B',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                        lineHeight: { xs: 1.4, md: 1.5 },
                      }}
                    >
                      {featuredItems[index].description}
                    </Typography>
                  </Box>

                  <IconButton
                    onClick={() => {
                      autoPlayPausedRef.current = true;
                      goPrev();
                      setTimeout(() => {
                        autoPlayPausedRef.current = false;
                      }, INTERVAL_MS);
                    }}
                    sx={{
                      position: 'absolute',
                      left: { xs: 8, md: 16 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#D19F3B',
                      width: { xs: 36, md: 48 },
                      height: { xs: 36, md: 48 },
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 1)',
                      },
                      '&:active': {
                        transform: 'translateY(-50%) scale(0.95)',
                      },
                    }}
                  >
                    <ArrowBack sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      autoPlayPausedRef.current = true;
                      goNext();
                      setTimeout(() => {
                        autoPlayPausedRef.current = false;
                      }, INTERVAL_MS);
                    }}
                    sx={{
                      position: 'absolute',
                      right: { xs: 8, md: 16 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#D19F3B',
                      width: { xs: 36, md: 48 },
                      height: { xs: 36, md: 48 },
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 1)',
                      },
                      '&:active': {
                        transform: 'translateY(-50%) scale(0.95)',
                      },
                    }}
                  >
                    <ArrowForward sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </IconButton>
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
