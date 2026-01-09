'use client';

import { Box, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import { Phone } from '@mui/icons-material';
import Image from 'next/image'; 
import { DineDetail } from '@/lib/utils/dineData';
import { getMobileDineImage } from '@/lib/utils/constants';

interface DineHeroProps {
  dine: DineDetail;
}
//Test
// Helper function to get logo path from dine slug - matches StoreGrid logic
const getDineLogo = (slug?: string): string | null => {
  if (!slug) return null;
  
  // Map of slug to logo filename - matching StoreGrid
  const logoMap: Record<string, string> = {
    'macdonalds': '/logo/Macdonalds logo.jpg',
    'mcdonalds': '/logo/Macdonalds logo.jpg',
    'hardees': '/logo/hardees logo.jpg',
    'pizzahut': '/logo/pizza hut logo.jpg',
    'pizza-hut': '/logo/pizza hut logo.jpg',
    'cheezious': '/logo/cheezious logo.jpg',
    'wild-wings': '/logo/wings logo.jpg',
    'redapple': '/logo/red apple logo.jpg',
    'optp': '/logo/optp logo.jpg',
    'chachajee': '/logo/chachajee logo.jpg',
    'simplysufi': '/logo/simplysufi logo.jpg',
    'rewayat': '/logo/rewayat logo.jpg',
    'spicefactory': '/logo/spice factory logo.jpg',
    'chinagrill': '/logo/china grill logo.jpg',
    'kababjees': '/logo/kabab jees logo.jpg',
  };
  
  return logoMap[slug] || null;
};

const DineHero = ({ dine }: DineHeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  
  // Get mobile or desktop image based on screen size
  const backgroundImageSrc = dine.backgroundImage 
    ? (isMobile ? getMobileDineImage(dine.backgroundImage, dine.name, dine.slug) : dine.backgroundImage)
    : null;
  
  // Get logo from StoreGrid mapping, fallback to dine.logo if available
  let logoPath = getDineLogo(dine.slug) || dine.logo || null;
  
  // Check if logo path is valid (not empty, not just .jpg, etc.)
  if (logoPath) {
    const trimmedPath = logoPath.trim();
    if (trimmedPath === '/logo/.jpg' || trimmedPath === '/.jpg' || trimmedPath.endsWith('/.jpg') || trimmedPath.endsWith('/.png') || !trimmedPath) {
      logoPath = null;
    }
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '100vh', sm: '65vh', md: '70vh', lg: '75vh' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: '#f5f5f5'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)',
            zIndex: 2,
          }
        }}
      >
        {backgroundImageSrc ? (
          <Image
            src={backgroundImageSrc}
            alt={dine.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="100vw"
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#1a1a1a',
            }}
          />
        )}
      </Box>

      {/* Content Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: { xs: '20px 20px 30px', sm: '30px 40px 40px', md: '40px 60px 50px', lg: '50px 80px 60px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          gap: { xs: 3, md: 6, lg: 8 }
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: '100px', sm: '120px', md: '150px', lg: '180px' },
            height: { xs: '100px', sm: '120px', md: '150px', lg: '180px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {logoPath ? (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: { xs: '12px', sm: '15px', md: '18px', lg: '20px' },
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Image
                src={logoPath}
                alt={dine.name}
                fill
                sizes="(max-width: 600px) 100px, (max-width: 960px) 120px, (max-width: 1280px) 150px, 180px"
                style={{ objectFit: 'contain' }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  color: '#ffffff',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                {dine.name.charAt(0)}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 3 },
            maxWidth: { xs: '100%', md: '600px', lg: '700px' }
          }}
        >
          {/* Description */}
          <Typography
            sx={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '17px' },
              lineHeight: { xs: 1.6, md: 1.7 },
              color: '#ffffff',
              fontWeight: 400
            }}
          >
            {dine.description}
          </Typography>

          {/* Contact Information */}
          {dine.contact.phone && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                marginTop: { xs: 1, md: 2 },
                paddingTop: { xs: 2, md: 3 },
                borderTop: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '12px', sm: '13px', md: '14px' },
                  color: '#ffffff',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                CONTACT
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5
                }}
              >
                <Phone
                  sx={{
                    fontSize: { xs: '18px', sm: '20px' },
                    color: '#ffffff'
                  }}
                />
                <Link
                  href={`tel:${dine.contact.phone}`}
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: '14px', sm: '15px', md: '16px' },
                    color: '#ffffff',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.8,
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {dine.contact.phone}
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DineHero;

