'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import Image from 'next/image';
import { FeaturedItem } from '@/types';

const featuredItems: FeaturedItem[] = [
  {
    image: '/alkaram.jpg',
    name: 'Alkaram',
    description: 'Elegant fashion and premium textiles for the modern wardrobe.',
  },
  {
    image: '/almas.jpeg',
    name: 'Almas',
    description: 'Discover timeless elegance with our curated collection of premium fashion.',
  },
  {
    image: '/almirah.jpeg',
    name: 'Almirah',
    description: 'Your destination for contemporary fashion and style essentials.',
  },
  {
    image: '/batik-studio.jpg',
    name: 'Batik Studio',
    description: 'Traditional artistry meets modern fashion in our unique batik collections.',
  },
  {
    image: '/bloon.jpg',
    name: 'Bloon',
    description: 'Fresh styles and vibrant fashion for every occasion.',
  },
  {
    image: '/bonanza.jpeg',
    name: 'Bonanza',
    description: 'Quality clothing and accessories for the whole family.',
  },
  {
    image: '/breakout.jpeg',
    name: 'Breakout',
    description: 'Break free with bold designs and contemporary fashion statements.',
  },
  {
    image: '/cambridge.jpeg',
    name: 'Cambridge',
    description: 'Classic British style meets modern sophistication.',
  },
  {
    image: '/junaid-jamshed.jpeg',
    name: 'Junaid Jamshed',
    description: 'Traditional elegance reimagined for the modern lifestyle.',
  },
  {
    image: '/kayseria.jpeg',
    name: 'Kayseria',
    description: 'Premium fashion and luxury textiles for the sophisticated shopper.',
  },
  {
    image: '/miniso.jpeg',
    name: 'Miniso',
    description: 'Japanese-inspired lifestyle products and accessories for everyday living.',
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isAnimatingRef = useRef(false);
  const autoPlayPausedRef = useRef(false);

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  /* ------------------ CONTROLS ------------------ */

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    setDirection('next');
    isAnimatingRef.current = true;
    setCurrent((c) => (c + 1) % total);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, TRANSITION_MS);
  }, [total]);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    setDirection('prev');
    isAnimatingRef.current = true;
    setCurrent((c) => (c - 1 + total) % total);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, TRANSITION_MS);
  }, [total]);

  /* ------------------ AUTO PLAY ------------------ */
  // ✅ LEFT → CENTER (same movement as left arrow click)
  useEffect(() => {
    const id = setInterval(() => {
      if (!isAnimatingRef.current && !autoPlayPausedRef.current) {
        goPrev(); // 👈 Same movement as clicking left arrow
      }
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, [goPrev]);

  /* ------------------ POSITION LOGIC ------------------ */

  const getPosition = (index: number) => {
    if (direction === 'next') {
      // When going forward: prev (old current) moves left, current (new) comes from right to center
      if (index === current) return 'center';
      if (index === prev) return 'left';
      if (index === next) return 'right';
      return 'hidden';
    } else {
      // When going backward: prev comes from left to center, current moves right
      if (index === current) return 'center';
      if (index === prev) return 'left';
      if (index === next) return 'right';
      return 'hidden';
    }
  };

  const slideStyle = {
    base: {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: { xs: 'calc(100% - 32px)', sm: 'calc(100% - 48px)', md: '94%' },
      height: '100%',
      borderRadius: { xs: 8, sm: 4, md: 10 },
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
        xs: direction === 'next'
          ? 'translateX(-100%) scale(1)' // Current going out when forward
          : direction === 'prev'
          ? 'translateX(-100%) scale(1)' // On mobile, hide completely when coming in
          : 'translateX(-100%) scale(1)', // Always hidden on mobile
        md: direction === 'next'
          ? 'translateX(-180%) scale(0.9)' // Current going out when forward
          : direction === 'prev'
          ? 'translateX(-180%) scale(0.9)' // coming IN on desktop
          : 'translateX(-70%) scale(0.9)',
      },
      opacity: { xs: 0, md: direction === 'next' ? 0 : 0.5 }, // Hidden when going forward
      zIndex: 2,
    },

    right: {
      transform: {
        xs: 'translateX(100%) scale(1)', // Always hidden on mobile
        md: direction === 'next'
          ? 'translateX(180%) scale(0.9)' // Next coming from right when forward
          : direction === 'prev'
          ? 'translateX(80%) scale(0.9)' // Current going out when backward
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
    <Box sx={{ backgroundColor: '#fff' }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
          textTransform: 'uppercase',
          textAlign: { xs: 'center', md: 'left' },
          marginBottom: { xs: '32px', sm: '40px', md: '30px', lg: '50px' },
          marginTop: { xs: '20px', sm: '24px', md: '40px' },
          paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '130px' },
          paddingRight: { xs: '16px', sm: '20px', md: '40px' },
          color: '#D19F3B',
        }}
      >
        FEATURED SECTION
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 680, sm: 640, md: 600, lg: 720 },
          overflow: 'hidden',
          touchAction: 'pan-y', // Allow vertical scrolling but handle horizontal swipes
          mx: 'auto',
          maxWidth: { xs: '100%', md: '95%' },
          px: { xs: 2, sm: 3, md: 0 },
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
        onTouchEnd={() => {
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
                      top: { xs: 8, sm: 10, md: 14 },
                      right: { xs: 8, sm: 12, md: 24 },
                      zIndex: 10,
                      width: { xs: 40, sm: 56, md: 84, lg: 120 },
                      height: 'auto',
                      maxWidth: { xs: 'calc(100% - 80px)', sm: 'none' },
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
                      p: { xs: 1.5, sm: 2, md: 3 },
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
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                        mb: { xs: 0.25, sm: 0.5, md: 1 },
                        lineHeight: { xs: 1.2, md: 1.3 },
                      }}
                    >
                      {featuredItems[index].name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#D19F3B',
                        fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                        lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                        display: { xs: '-webkit-box', md: 'block' },
                        WebkitLineClamp: { xs: 2, md: 'none' },
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
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
                      left: { xs: 4, sm: 8, md: 16 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#D19F3B',
                      width: { xs: 32, sm: 36, md: 48 },
                      height: { xs: 32, sm: 36, md: 48 },
                      minWidth: { xs: 32, sm: 36, md: 48 },
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 1)',
                      },
                      '&:active': {
                        transform: 'translateY(-50%) scale(0.95)',
                      },
                    }}
                  >
                    <ArrowBack sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
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
                      right: { xs: 4, sm: 8, md: 16 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#D19F3B',
                      width: { xs: 32, sm: 36, md: 48 },
                      height: { xs: 32, sm: 36, md: 48 },
                      minWidth: { xs: 32, sm: 36, md: 48 },
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 1)',
                      },
                      '&:active': {
                        transform: 'translateY(-50%) scale(0.95)',
                      },
                    }}
                  >
                    <ArrowForward sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
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
