'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const DownloadGigaMallApp = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: { xs: 6, sm: 8, md: 10 },
        paddingTop: { xs: 8, sm: 10, md: 12 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Arvo", serif',
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
              width: { xs: '220px', sm: '260px', md: '300px', lg: '340px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Image
              src="/mobile screen.png"
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
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '0.9rem' },
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1.6,
              }}
            >
              With so much to discover, Giga Mall  123app is your pocket-sized guide to making the most of your visit. Available for both iOS and Android, the simple-to-use app offers personalised content, the latest news and events, real-time parking information, and much more.
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
    </Box>
  );
};

export default DownloadGigaMallApp;

