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
        justifyContent: 'center',
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
                gap: { xs: 3, lg: 4 },
                alignItems: { xs: 'center', lg: 'flex-start' },
              }}
            >
              {/* Phone Mockups - Left Side */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '180px', sm: '220px', md: '260px', lg: '280px' },
                  height: { xs: '360px', sm: '440px', md: '520px', lg: '420px' },
                  flexShrink: 0,
                }}
              >
                {/* Black Android Phone (Behind) */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '20px', sm: '25px', md: '30px', lg: '40px' },
                    top: { xs: '20px', sm: '25px', md: '30px', lg: '40px' },
                    width: { xs: '140px', sm: '170px', md: '200px', lg: '220px' },
                    height: { xs: '280px', sm: '340px', md: '400px', lg: '340px' },
                    backgroundColor: '#1a1a1a',
                    borderRadius: { xs: '18px', sm: '22px', md: '26px', lg: '28px' },
                    border: { xs: '6px', sm: '7px', md: '8px' },
                    borderColor: '#000000',
                    borderStyle: 'solid',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#2a2a2a',
                      borderRadius: { xs: '12px', sm: '15px', md: '18px', lg: '20px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      color: '#ffffff',
                      textAlign: 'center',
                      padding: 1,
                    }}
                  >
                    App Screen
                  </Box>
                </Box>

                {/* White iPhone (Front) */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: { xs: '140px', sm: '170px', md: '200px', lg: '220px' },
                    height: { xs: '280px', sm: '340px', md: '400px', lg: '340px' },
                    backgroundColor: '#ffffff',
                    borderRadius: { xs: '18px', sm: '22px', md: '26px', lg: '28px' },
                    border: { xs: '6px', sm: '7px', md: '8px' },
                    borderColor: '#000000',
                    borderStyle: 'solid',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f5f5f5',
                      borderRadius: { xs: '12px', sm: '15px', md: '18px', lg: '20px' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      color: '#000000',
                      textAlign: 'center',
                      padding: 1,
                    }}
                  >
                    App Screen
                  </Box>
                </Box>
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

