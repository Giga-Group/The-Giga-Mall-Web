'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function StayPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Premium Stay */}
        <Box
          sx={{
            position: 'relative',
            width: '100vw',
            minHeight: { xs: '60vh', md: '70vh', lg: '70vh' },
            paddingTop: { xs: '90px', md: '100px' },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end'
          }}
        >
          {/* Full Width Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0
            }}
          >
            <Image
              src="/stay/stay2.jpeg"
              alt="Luxury Hotel Lobby"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
            />
          </Box>

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '70%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
              zIndex: 1
            }}
          />

          {/* Text Content at Bottom */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto',
              padding: { xs: '40px 20px', sm: '60px 40px', md: '80px 60px', lg: '50px 80px' },
              zIndex: 2
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 400,
                color: '#D19F3B',
                marginBottom: { xs: '16px', md: '20px' },
                letterSpacing: '0.02em',
                lineHeight: 1.2
              }}
            >
              STAY
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 300,
                color: '#D19F3B',
                marginBottom: { xs: '24px', md: '32px' },
                letterSpacing: '0.05em',
                lineHeight: 1.3
              }}
            >
              Perfectly Positioned
            </Typography>

            {/* Simple Divider */}
            <Box
              sx={{
                width: '100%',
                maxWidth: '600px',
                height: '2px',
                backgroundColor: '#D19F3B',
                marginBottom: { xs: '24px', md: '32px' }
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem' },
                fontWeight: 300,
                color: '#D19F3B',
                lineHeight: 1.7,
                maxWidth: '600px',
                opacity: 0.95
              }}
            >
              Indulge in a luxurious stay at one of six nearby hotels. Designed to fulfil all your needs, each hotel promises to make your stay in Dubai a unique and memorable experience.
            </Typography>
          </Box>
        </Box>

        {/* Palace Downtown Section */}
        <Box
          sx={{
            position: 'relative',
            width: '100vw',
            minHeight: { xs: '60vh', md: '70vh', lg: '70vh' },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end'
          }}
        >
          {/* Full Width Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0
            }}
          >
            <Image
              src="/stay/stay3.jpeg"
              alt="Palace Downtown Hotel"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </Box>

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '70%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
              zIndex: 1
            }}
          />

          {/* Text Content at Bottom */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto',
              padding: { xs: '40px 20px', sm: '60px 40px', md: '80px 60px', lg: '50px 80px' },
              zIndex: 2
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 400,
                color: '#D19F3B',
                marginBottom: { xs: '20px', md: '24px' },
                letterSpacing: '0.02em',
                lineHeight: 1.2
              }}
            >
              Palace Downtown
            </Typography>

            {/* Simple Divider */}
            <Box
              sx={{
                width: '100%',
                maxWidth: '600px',
                height: '2px',
                backgroundColor: '#D19F3B',
                marginBottom: { xs: '24px', md: '32px' }
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem', lg: '1.15rem' },
                fontWeight: 300,
                color: '#D19F3B',
                lineHeight: 1.7,
                maxWidth: '600px',
                marginBottom: { xs: '32px', md: '40px' },
                opacity: 0.95
              }}
            >
              Located on the Old Town Island alongside a picturesque lake, The Palace combines opulent Middle Eastern heritage with the vibrant, youthful surrounds of Downtown Dubai.
            </Typography>

            <Button
              component={Link}
              href="#"
              variant="outlined"
              sx={{
                border: '1px solid #D19F3B',
                color: '#D19F3B',
                textTransform: 'uppercase',
                fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                fontWeight: 400,
                letterSpacing: '0.1em',
                padding: { xs: '12px 32px', sm: '14px 40px', md: '16px 48px' },
                borderRadius: 0,
                maxWidth: 'fit-content',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
                '&:hover': {
                  border: '1px solid #D19F3B',
                  color: '#D19F3B',
                  backgroundColor: 'transparent'
                }
              }}
            >
              EXPLORE MORE
            </Button>
          </Box>
        </Box>

        {/* Hotel Section - Split Layout */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: '50vh', md: '60vh', lg: '70vh' },
            backgroundColor: '#ffffff',
            padding: { xs: '20px 0', md: '40px 0', lg: '60px 0' },
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { md: 'center' }
            }}
          >
            {/* Left Side - Image (2/3 width) */}
            <Box
              sx={{
                position: 'relative',
                width: { xs: '100%', md: '66.666%' },
                minHeight: { xs: '300px', md: '400px', lg: '550px' },
                height: { xs: '300px', md: '400px', lg: '550px' },
                overflow: 'hidden',
                marginLeft: { xs: 0, md: '40px', lg: '60px' }
              }}
            >
              <Image
                src="/stay/stay1.jpeg"
                alt="Luxury Hotel"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'grayscale(100%)'
                }}
              />
            </Box>

            {/* Right Side - Text Content (1/3 width) - Overlapping */}
            <Box
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                right: { xs: 0, md: '40px', lg: '60px' },
                width: { xs: '100%', md: '35%', lg: '32%' },
                maxWidth: { md: '500px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: { xs: '40px 20px', sm: '50px 30px', md: '60px 40px', lg: '80px 60px' },
                backgroundColor: '#ffffff',
                boxShadow: { xs: 'none', md: '0 4px 20px rgba(0,0,0,0.1)' },
                marginTop: { xs: '-40px', md: 0 },
                marginLeft: { xs: '20px', md: 0 },
                marginRight: { xs: '20px', md: 0 },
                zIndex: 2
              }}
            >
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                fontWeight: 400,
                color: '#D19F3B',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: { xs: '16px', md: '20px' }
              }}
            >
              LUXURY HOTEL
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 400,
                color: '#D19F3B',
                marginBottom: { xs: '20px', md: '24px' },
                letterSpacing: '0.02em',
                lineHeight: 1.2
              }}
            >
              Mission Impeccable
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem', lg: '1.1rem' },
                fontWeight: 300,
                color: '#D19F3B',
                lineHeight: 1.7,
                marginBottom: { xs: '32px', md: '40px' }
              }}
            >
              Experience unparalleled luxury with a touch of elegance. Our carefully curated hotel selection offers slick, tailored design and world-class amenities. Each property features opulent interiors, premium Italian furnishings, and exceptional service that offers a subtle nod to a sophisticated life of refined comfort.
            </Typography>

            <Button
              component={Link}
              href="#"
              variant="outlined"
              sx={{
                border: '1px solid #D19F3B',
                color: '#ffffff',
                textTransform: 'uppercase',
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                fontWeight: 400,
                letterSpacing: '0.1em',
                padding: { xs: '12px 28px', sm: '14px 36px', md: '16px 44px' },
                borderRadius: 0,
                maxWidth: 'fit-content',
                transition: 'all 0.3s ease',
                backgroundColor: '#D19F3B',
                '&:hover': {
                  border: '1px solid #D19F3B',
                  color: '#D19F3B',
                  backgroundColor: 'transparent'
                }
              }}
            >
              FIND IT AT GIGA MALL
            </Button>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
