'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const DontMissOut = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: { xs: 6, sm: 8, md: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 4, md: 5 },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            fontWeight: 400,
            color: '#D19F3B',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Don&apos;t miss out
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: { xs: '100%', sm: '600px', md: '700px' },
          }}
        >
          <Button
            component={Link}
            href="/entertain"
            variant="outlined"
            sx={{
              border: '1px solid #000000',
              color: '#000000',
              textTransform: 'uppercase',
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '0.7rem' },
              fontWeight: 400,
              fontFamily: 'Arial, sans-serif',
              padding: { xs: '12px 40px', sm: '14px 50px', md: '16px 60px', lg: '16px 30px' },
              borderRadius: 0,
              transition: 'all 0.3s ease',
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '200px', sm: '250px', md: '280px', lg: '200px' },
              '&:hover': {
                borderColor: '#D19F3B',
                backgroundColor: '#D19F3B',
                color: '#ffffff',
              }
            }}
          >
            Discover Events
          </Button>

          <Button
            component={Link}
            href="/shop"
            variant="outlined"
            sx={{
              border: '1px solid #000000',
              color: '#000000',
              textTransform: 'uppercase',
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '0.7rem' },
              fontWeight: 400,
              fontFamily: 'Arial, sans-serif',
              padding: { xs: '12px 40px', sm: '14px 50px', md: '16px 20px', lg: '16px 30px' },
              borderRadius: 0,
              transition: 'all 0.3s ease',
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '200px', sm: '250px', md: '280px', lg: '220px' },
              '&:hover': {
                borderColor: '#D19F3B',
                backgroundColor: '#D19F3B',
                color: '#ffffff',
              }
            }}
          >
            Discover Offers
          </Button>
        </Box>

        {/* Two Column Section: Download App and Visitor Info */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
            width: '100%',
            // marginTop: { xs: 4, md: 6 },
          }}
        >
          {/* Download Giga Mall App Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                fontWeight: 400,
                color: '#D19F3B',
                lineHeight: 1.2,
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
              }}
            >
              {/* Mobile Screen Image Only */}
              <Box
                sx={{
                  // flexShrink: 0,
                  width: { xs: '220px', sm: '260px', md: '300px', lg: '340px' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
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

              {/* Text Content and Badges - Right Side */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '0.9rem' },
                    fontWeight: 400,
                    color: '#000000',
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

          {/* Visitor Info Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                fontWeight: 400,
                color: '#D19F3B',
                lineHeight: 1.2,
              }}
            >
              Visitor info
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Arial, sans-serif',
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '0.9rem' },
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.6,
              }}
            >
              Located throughout Giga Mall you will find eight guest service desks where our team will be delighted to assist you with any of your queries or questions.
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Arial, sans-serif',
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '0.9rem' },
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.6,
              }}
            >
              To make your experience exceptional, make the most of our range of services, including -
            </Typography>

            {/* Services List */}
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {['Free WiFi', 'Emaar gift cards', 'Valet parking', 'Delivery Service'].map((service) => (
                <Box
                  key={service}
                  component="li"
                  sx={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '0.9rem' },
                    fontWeight: 400,
                    color: '#000000',
                    lineHeight: 1.6,
                    display: 'flex',
                    alignItems: 'flex-start',
                    '&::before': {
                      content: '"-"',
                      marginRight: '8px',
                    },
                  }}
                >
                  {service}
                </Box>
              ))}
            </Box>

            {/* View all services link */}
            <Link
              href="#"
              style={{
                textDecoration: 'none',
                color: '#000000',
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                textDecorationLine: 'underline',
                alignSelf: 'flex-start',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              View all services.
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DontMissOut;

