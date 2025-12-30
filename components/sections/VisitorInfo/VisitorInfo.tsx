'use client';

import { Box, Typography } from '@mui/material';
import { Wifi, CardGiftcard, LocalParking, LocalShipping } from '@mui/icons-material';
import Link from 'next/link';

const VisitorInfo = () => {
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
          Visitor info
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Quicksand", sans-serif',
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
            fontFamily: '"Quicksand", sans-serif',
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
          {[
            { name: 'Free WiFi', icon: Wifi },
            { name: 'Emaar gift cards', icon: CardGiftcard },
            { name: 'Valet parking', icon: LocalParking },
            { name: 'Delivery Service', icon: LocalShipping }
          ].map((service) => {
            const IconComponent = service.icon;
            return (
              <Box
                key={service.name}
                component="li"
                sx={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem', lg: '0.9rem' },
                  fontWeight: 400,
                  color: '#000000',
                  lineHeight: 1.6,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <IconComponent
                  sx={{
                    color: '#D19F3B',
                    fontSize: { xs: '18px', sm: '20px', md: '20px' },
                    flexShrink: 0
                  }}
                />
                {service.name}
              </Box>
            );
          })}
        </Box>

        {/* View all services link */}
        <Link
          href="#"
          style={{
            textDecoration: 'none',
            color: '#000000',
            fontFamily: '"Poppins", sans-serif',
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
  );
};

export default VisitorInfo;

