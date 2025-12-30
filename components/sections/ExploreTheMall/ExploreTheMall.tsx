'use client';

import { Box, Typography } from '@mui/material';
import { Wifi, CardGiftcard, LocalParking, DeliveryDining } from '@mui/icons-material';
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
          gap: { xs: 3, sm: 4, md: 5, lg: 6 }
        }}
      >
        {/* Left Side - Explore The Mall */}
        <Box
          sx={{
            order: { xs: 1, lg: 1 },
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem', lg: '2.5rem' },
              fontWeight: 400,
              color: '#D19F3B',
              mb: { xs: 1, sm: 1.5, md: 2, lg: 1 },
              letterSpacing: '0.02em',
              textAlign: { xs: 'center', lg: 'left' }
            }}
          >
            Explore The Mall
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '0.9rem' },
              color: '#666666',
              // mb: { xs: 2, sm: 3, md: 4, lg: 2 },
              lineHeight: 1.6,
              textAlign: { xs: 'center', lg: 'left' },
              px: { xs: 1, sm: 0 }
            }}
          >
            Every store covered. Plan your visit with our interactive map.
          </Typography>

          {/* Interactive Map Section */}
          <Box
            sx={{
              width: '100%',
              // mt: { xs: 1, sm: 2, md: 3, lg: 0 },
              overflow: 'hidden',
              borderRadius: { xs: '8px', sm: '12px' }
            }}
          >
            <MallMapStandalone />
          </Box>

          <Link href="/map" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '0.9rem', lg: '0.9rem' },
                color: '#D19F3B',
                fontWeight: 500,
                textDecoration: 'underline',
                cursor: 'pointer',
                // mt: { xs: 2, sm: 2.5, lg: 1.5 },
                display: 'inline-block',
                textAlign: { xs: 'center', lg: 'left' },
                width: { xs: '100%', lg: 'auto' },
                '&:hover': {
                  opacity: 0.7
                }
              }}
            >
              View full map
            </Typography>
          </Link>
        </Box>

        {/* Right Side - Visitor Info */}
        <Box
          sx={{
            order: { xs: 2, lg: 2 },
            display: 'flex',
            flexDirection: 'column',
            mt: { xs: 2, lg: 0 }
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem', lg: '2.5rem' },
              fontWeight: 400,
              color: '#D19F3B',
              mb: { xs: 1, sm: 1.5, md: 2 },
              letterSpacing: '0.02em',
              textAlign: 'left'
            }}
          >
            Visitor info
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem', lg: '0.9rem' },
              color: '#666666',
              mb: { xs: 1.5, sm: 2, md: 2.5 },
              lineHeight: 1.6,
              textAlign: 'left'
            }}
          >
            Located throughout Giga Mall you will find guest service desks where our team will be delighted to assist you with any of your queries or questions.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '0.9rem' },
              color: '#666666',
              mb: { xs: 1.5, sm: 2, md: 2.5 },
              lineHeight: 1.6,
              textAlign: 'left'
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
              mb: { xs: 2, sm: 2.5 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            {[
              { name: 'Free WiFi', icon: <Wifi /> },
              { name: 'Giga gift cards', icon: <CardGiftcard /> },
              { name: 'Valet parking', icon: <LocalParking /> },
              { name: 'Delivery Service', icon: <DeliveryDining /> }
            ].map((service, index) => (
              <Box
                key={index}
                component="li"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '0.85rem', sm: '0.95rem', md: '0.9rem' },
                  color: '#666666',
                  mb: { xs: 1, sm: 1.25 },
                  lineHeight: 1.6,
                  width: '100%'
                }}
              >
                <Box
                  sx={{
                    color: '#D19F3B',
                    mr: { xs: 1.5, sm: 2 },
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }
                  }}
                >
                  {service.icon}
                </Box>
                <Box component="span">{service.name}</Box>
              </Box>
            ))}
          </Box>

          <Link href="/services" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '0.9rem', lg: '0.9rem' },
                color: '#D19F3B',
                fontWeight: 500,
                textDecoration: 'underline',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'inline-block',
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


