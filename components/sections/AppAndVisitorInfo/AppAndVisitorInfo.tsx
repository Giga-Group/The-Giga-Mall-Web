'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const AppAndVisitorInfo = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
        backgroundColor: '#ffffff'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 4, sm: 5, md: 6 }
        }}
      >
        {/* Left Side - Download Giga Mall App */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
              fontWeight: 400,
              color: '#D19F3B',
              mb: { xs: 1.5, sm: 2 },
              letterSpacing: '0.02em'
            }}
          >
            Download Giga Mall App
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'flex-start',
              rowGap: { xs: 3, lg: 0 },
              columnGap: { lg: 4 },
              mb: { xs: 2, sm: 3 },
            }}
          >
            {/* Mobile Screen Image Only */}
            <Box
              sx={{
                width: { xs: '220px', sm: '260px', md: '300px', lg: '340px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexShrink: 0,
              }}
            >
              <Image
                src="/mobile%20screen.png"
                alt="Giga Mall app screen preview"
                width={340}
                height={780}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              />
            </Box>

            {/* Text Content and Badges */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '0.9rem' },
                  color: '#666666',
                  lineHeight: 1.6,
                }}
              >
                With so much to discover, Giga Mall app is your pocket-sized guide to making the most of your visit. Available for both iOS and Android, the simple-to-use app offers personalised content, the latest news and events, real-time parking information, and much more.
              </Typography>

              {/* App Store Badges */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  flexWrap: 'wrap',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                <Link
                  href="#"
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                  }}
                >
                  <Image
                    src="/AppStore_Badge_US_English.svg"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    style={{ objectFit: 'contain' }}
                  />
                </Link>

                <Link
                  href="#"
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                  }}
                >
                  <Image
                    src="/GooglePlay_Badge_EN-US_English.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Side - Visitor Info */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
              fontWeight: 400,
              color: '#D19F3B',
              mb: { xs: 1.5, sm: 2 },
              letterSpacing: '0.02em'
            }}
          >
            Visitor info
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '0.9rem' },
              color: '#666666',
              mb: { xs: 2, sm: 2.5 },
              lineHeight: 1.6
            }}
          >
            Located throughout Giga Mall you will find eight guest service desks where our team will be delighted to assist you with any of your queries or questions.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '0.9rem' },
              color: '#666666',
              mb: { xs: 2, sm: 2.5 },
              lineHeight: 1.6
            }}
          >
            To make your experience exceptional, make the most of our range of services, including -
          </Typography>

          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              mb: { xs: 2, sm: 2.5 }
            }}
          >
            {[
              'Free WiFi',
              'Giga gift cards',
              'Valet parking',
              'Delivery Service'
            ].map((service, index) => (
              <Box
                key={index}
                component="li"
                sx={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '0.9rem' },
                  color: '#666666',
                  mb: 1,
                  lineHeight: 1.6,
                  '&:before': {
                    content: '"-"',
                    marginRight: 1,
                    color: '#666666'
                  }
                }}
              >
                {service}
              </Box>
            ))}
          </Box>

          <Link href="/services" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '0.9rem', lg: '0.9rem' },
                color: '#D19F3B',
                fontWeight: 500,
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7
                }
              }}
            >
              View all services
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default AppAndVisitorInfo;

