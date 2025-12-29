'use client';

import { Box, Typography, Chip } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import { DineDetail } from '@/lib/utils/dineData';
import DineHero from '@/components/sections/DineHero';
import MallMapStandalone from '@/components/sections/MallMapStandalone';
import DontMissOut from '@/components/sections/DontMissOut';
import AppAndVisitorInfo from '@/components/sections/AppAndVisitorInfo';

interface DinePageContentProps {
  dine: DineDetail;
}

const DinePageContent = ({ dine }: DinePageContentProps) => {
  // Default location info if not provided
  const locationInfo = dine.location || {
    level: 'First Floor',
    parking: 'P2, Grand Parking'
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff'
      }}
    >
      {/* Dine Hero Section */}
      <DineHero dine={dine} />

   {/* Dine Location Section - Map and Restaurant Details */}
<Box
  sx={{
    width: '100%',
    backgroundColor: '#ffffff',
    paddingTop: { xs: 4, sm: 6, md: 8, lg: 10 },
    paddingBottom: { xs: 3, sm: 4, md: 5, lg: 6 },
    paddingX: { xs: 2, sm: 3, md: 4, lg: 6 },
  }}
>
  <Box
    sx={{
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
      gap: { xs: 3, sm: 4, md: 5, lg: 6 },
    }}
  >
 {/* Left Side - Map */}
<Box
  sx={{
    width: '100%',
    order: { xs: 2, lg: 1 },
    p: { xs: 3, sm: 4, md: 5, lg: 6 },
    borderRadius: 3,
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    backgroundColor: '#ffffff',
  }}
>
  <MallMapStandalone />
</Box>


    {/* Right Side - Restaurant Details with Card Styling */}
    <Box
      sx={{
        width: '100%',
        p: { xs: 3, sm: 4, md: 5, lg: 6 },
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 3, sm: 3.5, md: 4, lg: 4 },
        order: { xs: 1, lg: 2 },
      }}
    >
      {/* Description */}
      <Typography
        sx={{
          fontFamily: '"Quicksand", sans-serif',
          fontSize: { xs: 14, sm: 15, md: 16, lg: 16 },
          lineHeight: { xs: 1.7, sm: 1.75, md: 1.8, lg: 1.8 },
          color: '#333333',
        }}
      >
        {dine.description}
      </Typography>

      {/* Category */}
      {dine.category && (
        <Box>
          <Typography
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
              fontWeight: 500,
              color: '#D19F3B',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              mb: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 },
            }}
          >
            Category
          </Typography>
          <Chip
            label={dine.category}
            sx={{
              borderRadius: '50px',
              px: 2,
              py: 0.5,
              backgroundColor: '#f5f5f5',
              color: '#333333',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: { xs: 11, sm: 12, md: 12, lg: 13 },
              fontWeight: 500,
              height: { xs: 28, sm: 32, md: 32, lg: 'auto' },
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              },
            }}
          />
        </Box>
      )}

      {/* Location Information */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2 },
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Arvo", serif',
            fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
            fontWeight: 500,
            color: '#D19F3B',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
            mb: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 },
          }}
        >
          Location Details
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 },
          }}
        >
          <LocationOn
            sx={{
              color: '#D19F3B',
              fontSize: { xs: 20, sm: 22, md: 24, lg: 28 },
              flexShrink: 0,
              mt: { xs: 0.25, sm: 0.375, md: 0.5, lg: 0.5 },
              backgroundColor: '#FFF3E0',
              borderRadius: '50%',
              p: 0.5,
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.75, sm: 0.875, md: 1, lg: 1 } }}>
            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                color: '#333333',
                lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.6 },
              }}
            >
              <strong>Level:</strong> {locationInfo.level}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                color: '#333333',
                lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.6 },
              }}
            >
              <strong>Parking:</strong> {locationInfo.parking}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Contact Information */}
      {dine.contact && (dine.contact.phone || dine.contact.email) && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Arvo", serif',
              fontSize: { xs: 16, sm: 17, md: 18, lg: 20 },
              fontWeight: 500,
              color: '#D19F3B',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              mb: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 },
            }}
          >
            Contact Information
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2 } }}>
            {dine.contact.phone && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 } }}>
                <Phone
                  sx={{
                    color: '#D19F3B',
                    fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
                    flexShrink: 0,
                    backgroundColor: '#FFF3E0',
                    borderRadius: '50%',
                    p: 0.5,
                  }}
                />
                <Typography
                  component="a"
                  href={`tel:${dine.contact.phone}`}
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                    color: '#333333',
                    textDecoration: 'none',
                    wordBreak: 'break-word',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: '#D19F3B',
                    },
                  }}
                >
                  {dine.contact.phone}
                </Typography>
              </Box>
            )}

            {dine.contact.email && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 } }}>
                <Email
                  sx={{
                    color: '#D19F3B',
                    fontSize: { xs: 18, sm: 20, md: 22, lg: 24 },
                    flexShrink: 0,
                    backgroundColor: '#FFF3E0',
                    borderRadius: '50%',
                    p: 0.5,
                  }}
                />
                <Typography
                  component="a"
                  href={`mailto:${dine.contact.email}`}
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: 13, sm: 14, md: 15, lg: 16 },
                    color: '#333333',
                    textDecoration: 'none',
                    wordBreak: 'break-word',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: '#D19F3B',
                    },
                  }}
                >
                  {dine.contact.email}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}

      {/* Additional Info Chips */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 1.5, sm: 1.75, md: 2, lg: 2 },
        }}
      >
        {dine.hasOffers && (
          <Chip
            label="Special Offers Available"
            sx={{
              backgroundColor: '#D19F3B',
              color: '#ffffff',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: { xs: 11, sm: 12, md: 12, lg: 13 },
              fontWeight: 500,
              height: { xs: 26, sm: 28, md: 32, lg: 'auto' },
            }}
          />
        )}
        {dine.acceptsGiftCard && (
          <Chip
            label="Accepts Gift Cards"
            sx={{
              backgroundColor: '#D19F3B',
              color: '#ffffff',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: { xs: 11, sm: 12, md: 12, lg: 13 },
              fontWeight: 500,
              height: { xs: 26, sm: 28, md: 32, lg: 'auto' },
            }}
          />
        )}
      </Box>
    </Box>
  </Box>
</Box>

      {/* Don't Miss Out Section */}
      <DontMissOut />

      {/* Download Giga Mall App and Visitor Info Section (Side by Side) */}
      <AppAndVisitorInfo />
    </Box>
  );
};

export default DinePageContent;

