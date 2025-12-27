'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DiscoverEventsOffers from '@/components/sections/DiscoverEventsOffers';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function EntertainPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Entertain */}
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
              src="/6485.jpg"
              alt="Entertainment"
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
              ENTERTAIN
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
              Endless Fun & Excitement
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
              Discover a world of entertainment at Giga Mall. From state-of-the-art cinemas to thrilling activities, experience unforgettable moments that bring joy and excitement to your visit.
            </Typography>
          </Box>
        </Box>

        {/* Entertainment Options Grid */}
        <Box
          sx={{
            width: '100vw',
            backgroundColor: '#ffffff'
          }}
        >
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                width: '100vw'
              }}
            >
              {[
                { 
                  name: "KidZania", 
                  image: "/6485.jpg",
                  description: "An interactive edutainment center where children can role-play real-world jobs and activities in a kid-sized city."
                },
                { 
                  name: "Dubai Ice Rink", 
                  image: "/DSC07199.jpg",
                  description: "Experience the thrill of ice skating in the heart of Dubai with state-of-the-art facilities and professional coaching."
                },
                { 
                  name: "Reel Cinemas", 
                  image: "/DSC07836.jpg",
                  description: "Enjoy the latest blockbusters in luxury with premium seating, cutting-edge sound systems, and immersive experiences."
                },
                { 
                  name: "Trampo Extreme", 
                  image: "/DSC07876.jpg",
                  description: "Jump, flip, and bounce your way through an exciting trampoline park with various activities for all ages."
                },
                { 
                  name: "Hysteria", 
                  image: "/DSC07901.jpg",
                  description: "An adrenaline-pumping escape room experience that challenges your problem-solving skills and teamwork."
                },
                { 
                  name: "Play DXB", 
                  image: "/DSC08041.jpg",
                  description: "A modern gaming arcade featuring the latest video games, virtual reality experiences, and interactive entertainment."
                },
                { 
                  name: "Soft Play", 
                  image: "/DSC08196.jpg",
                  description: "A safe and fun play area designed for younger children with soft structures, slides, and interactive elements."
                },
                { 
                  name: "House of Hype", 
                  image: "/23.jpg",
                  description: "A vibrant entertainment hub featuring live performances, music events, and exciting social experiences."
                },
                { 
                  name: "Boo Boo Laand", 
                  image: "/256+.jpg",
                  description: "A family-friendly entertainment center with exciting rides, games, and activities for children of all ages."
                }
              ].map((option, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    width: { xs: '100%', md: '50vw' },
                    minHeight: { xs: '400px', md: '500px', lg: '600px' },
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  {/* Image */}
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
                      src={option.image}
                      alt={option.name}
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
                      height: '60%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                      zIndex: 1
                    }}
                  />

                  {/* Content Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: { xs: '20px', sm: '24px', md: '28px', lg: '32px' },
                      zIndex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: { xs: '12px', md: '16px' }
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Arvo", serif',
                        fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' },
                        fontWeight: 400,
                        color: '#D19F3B',
                        lineHeight: 1.2
                      }}
                    >
                      {option.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem' },
                        fontWeight: 300,
                        color: '#D19F3B',
                        lineHeight: 1.6,
                        opacity: 0.95,
                        maxWidth: '90%'
                      }}
                    >
                      {option.description}
                    </Typography>

                    <Button
                      component={Link}
                      href="#"
                      variant="outlined"
                      sx={{
                        border: '1px solid #D19F3B',
                        color: '#D19F3B',
                        textTransform: 'uppercase',
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                        fontWeight: 400,
                        letterSpacing: '0.1em',
                        padding: { xs: '10px 24px', sm: '12px 28px', md: '14px 32px' },
                        borderRadius: 0,
                        maxWidth: 'fit-content',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'transparent',
                        mt: { xs: '4px', md: '8px' },
                        '&:hover': {
                          border: '1px solid #D19F3B',
                          color: '#D19F3B',
                          backgroundColor: 'transparent'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Discover Events & Offers Section */}
        <DiscoverEventsOffers />
      </main>
      <Footer />
    </>
  );
}

