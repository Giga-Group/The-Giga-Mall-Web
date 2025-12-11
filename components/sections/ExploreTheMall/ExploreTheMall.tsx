'use client';

import { useState } from 'react';
import { Box, Typography, Button, Select, MenuItem, FormControl, IconButton } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown, MyLocation } from '@mui/icons-material';
import Link from 'next/link';

const ExploreTheMall = () => {
  const [selectedFloor, setSelectedFloor] = useState('ground');

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

          {/* Map Container */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '300px', sm: '400px', md: '500px' },
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #e0e0e0',
              mb: 2
            }}
          >
            {/* Floor Selector */}
            <Box
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                zIndex: 10
              }}
            >
              <FormControl
                variant="standard"
                sx={{
                  minWidth: 150,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  px: 1.5,
                  py: 0.5
                }}
              >
                <Select
                  value={selectedFloor}
                  onChange={(e) => setSelectedFloor(e.target.value)}
                  sx={{
                    '&:before': { display: 'none' },
                    '&:after': { display: 'none' },
                    '& .MuiSelect-select': {
                      padding: '4px 8px',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    },
                    '& .MuiSelect-icon': {
                      right: 8
                    }
                  }}
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem value="ground">Ground Floor</MenuItem>
                  <MenuItem value="first">First Floor</MenuItem>
                  <MenuItem value="second">Second Floor</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Map Controls */}
            <Box
              sx={{
                position: 'absolute',
                top: 70,
                left: 16,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '4px'
              }}
            >
              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  color: '#333333'
                }}
              >
                <KeyboardArrowUp />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  color: '#333333'
                }}
              >
                <KeyboardArrowDown />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  color: '#333333'
                }}
              >
                <MyLocation />
              </IconButton>
            </Box>

            {/* Placeholder Map */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e8e8e8',
                backgroundImage: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}
            >
              <Typography
                sx={{
                  color: '#999999',
                  fontSize: '0.9rem'
                }}
              >
                Interactive Map
              </Typography>
            </Box>
          </Box>

          <Link href="/map" style={{ textDecoration: 'none' }}>
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
              View interactive map
            </Typography>
          </Link>
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


