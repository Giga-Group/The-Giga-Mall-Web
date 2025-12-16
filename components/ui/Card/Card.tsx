'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CardProps } from '@/types';

const Card = ({ 
  data, 
  variant = 'trending', 
  isHeroVideo = false,
  showOverlay = true,
  showLogo = true 
}: CardProps) => {
  const isTrending = variant === 'trending';
  const isBrand = variant === 'brand';

  if (isBrand) {
    const brandData = 'name' in data ? data : null;
    if (!brandData) return null;
    
    return (
      <>
        <Box
          sx={{
            width: '100%',
            height: { 
              xs: `calc((100vw - 32px) / 1.1 * 0.80)`,
              sm: `calc((100vw - 48px) / 1.5 * 1.0)`,
              md: `calc((100vw - 80px) / 2.2 * 1.5)`,
              lg: `calc((100vw - 80px) / 2 * 1.6)`,
              xl: '425px'
            },
            borderRadius: { xs: '0', sm: '4px', md: '4px' },
            overflow: 'hidden',
            marginBottom: { xs: '8px', sm: '10px', md: '12px' },
            position: 'relative',
            '& img': {
              transition: 'transform 0.3s ease-in-out',
            },
            '&:hover img': {
              transform: 'scale(1.05)'
            }
          }}
        >
          <Image 
            src={brandData.image} 
            alt={brandData.name} 
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: '1.9rem', sm: '1.25rem', md: '1.5rem', lg: '22px' },
            fontWeight: 700,
            textAlign: { xs: 'left', sm: 'center', md: 'left' },
            color: '#000000',
            padding: { xs: '0 4px', sm: '0', md: '0' }
          }}
        >
          {brandData.name}
        </Typography>
      </>
    );
  }

  const trendingData = 'title' in data ? data : null;
  if (!trendingData) return null;

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '2px',
        overflow: 'hidden',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        '&:hover': {
          '& .card-image-container img': {
            transform: 'scale(1.05)'
          },
          '& .card-image-container video': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      <Box
        className="card-image-container"
        sx={{
          width: '100%',
          height: { xs: '280px', sm: '320px', md: '380px', lg: '420px' },
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: '#000000',
          position: 'relative'
        }}
      >
        {('isVideo' in trendingData && trendingData.isVideo) ? (
          <>
            <motion.video
              layoutId={isHeroVideo ? "heroVideo" : undefined}
              layout={isHeroVideo}
              autoPlay
              muted
              loop
              playsInline
              transition={isHeroVideo ? {
                layout: {
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1]
                },
                default: {
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              } : undefined}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <source src={('video' in trendingData ? trendingData.video : '') || ''} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </>
        ) : (
          <>
            <Image 
              src={trendingData.image || ''} 
              alt={trendingData.title || ''}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }}
            />
            {showOverlay && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: { xs: '100px', sm: '110px', md: '120px', lg: '130px' },
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.3) 70%, transparent 100%)',
                  zIndex: 5,
                  pointerEvents: 'none'
                }}
              />
            )}
            {showLogo && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '12px', md: '16px', lg: '20px' },
                  left: { xs: '12px', md: '16px', lg: '20px' },
                  zIndex: 10,
                  width: { xs: '60px', sm: '70px', md: '80px', lg: '90px' },
                  height: 'auto'
                }}
              >
                <Image 
                  src="/Giga Mall_.png" 
                  alt="Giga Mall Logo" 
                  width={90}
                  height={30}
                  style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.7))' }}
                />
              </Box>
            )}
          </>
        )}
      </Box>

      {!('isVideo' in trendingData && trendingData.isVideo) && (
        <Box
          sx={{
            padding: { xs: '16px', md: '20px', lg: '24px' },
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.7rem', md: '0.8rem', lg: '0.85rem' },
              fontWeight: 600,
              color: '#666666',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: { xs: '6px', md: '8px' },
              lineHeight: 1.2
            }}
          >
            {isTrending ? 'Giga Mall' : ('category' in trendingData ? trendingData.category : '')}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem', lg: '1.25rem' },
              fontWeight: 700,
              color: '#000000',
              lineHeight: 1.3,
              marginBottom: { xs: '8px', md: '12px' },
              flexGrow: 1
            }}
          >
            {trendingData.title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.85rem', md: '0.9rem', lg: '0.95rem' },
              fontWeight: 400,
              color: '#666666',
              lineHeight: 1.4
            }}
          >
            {('dates' in trendingData ? trendingData.dates : '')}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Card;

