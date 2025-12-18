'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import MallMapStandalone from '../MallMapStandalone';

const ExploreTheMall = () => {
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
        {/* Left Side - Explore The Mall */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
              fontWeight: 400,
              color: '#D19F3B',
              mb: { xs: 1.5, sm: 2 },
              letterSpacing: '0.02em'
            }}
          >
            Explore The Mall
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '0.9rem' },
              color: '#666666',
              mb: { xs: 3, sm: 4 },
              lineHeight: 1.6
            }}
          >
            Every store covered. Plan your visit with our interactive map.
          </Typography>

          {/* Interactive Map Section */}
          <Box
            sx={{
              width: '100%',
              mt: { xs: 2, sm: 3 },
            }}
          >
            <MallMapStandalone />
          </Box>
        </Box>

        {/* Right Side - Visitor Info */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Playfair Display", "Georgia", serif',
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
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '0.9rem' },
              color: '#666666',
              mb: { xs: 2, sm: 2.5 },
              lineHeight: 1.6
            }}
          >
            Located throughout Giga Mall you will find guest service desks where our team will be delighted to assist you with any of your queries or questions.
          </Typography>

          <Typography
            sx={{
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

export default ExploreTheMall;


