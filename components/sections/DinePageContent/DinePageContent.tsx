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
            gap: { xs: 3, sm: 4, md: 5, lg: 8 },
          }}
        >
          {/* Left Side - Map */}
          <Box
            sx={{
              width: '100%',
              order: { xs: 2, lg: 1 },
            }}
          >
            <MallMapStandalone />
          </Box>

          {/* Right Side - Restaurant Details */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 3, sm: 3.5, md: 4, lg: 4 },
              order: { xs: 1, lg: 2 },
            }}
          >
            {/* Description */}
            <Box
              sx={{
                paddingTop: { xs: 0, lg: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '16px' },
                  lineHeight: { xs: 1.6, sm: 1.65, md: 1.7, lg: 1.7 },
                  color: '#333333',
                }}
              >
                {dine.description}
              </Typography>
            </Box>

            {/* Category */}
            {dine.category && (
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Arvo", serif',
                    fontSize: { xs: '16px', sm: '17px', md: '18px', lg: '20px' },
                    fontWeight: 400,
                    color: '#D19F3B',
                    mb: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 },
                  }}
                >
                  Category
                </Typography>
                <Chip
                  label={dine.category}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    color: '#333333',
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '13px' },
                    fontWeight: 500,
                    height: { xs: '28px', sm: '32px', md: '32px', lg: 'auto' },
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
                  fontSize: { xs: '16px', sm: '17px', md: '18px', lg: '20px' },
                  fontWeight: 400,
                  color: '#D19F3B',
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
                    fontSize: { xs: '20px', sm: '22px', md: '24px', lg: '28px' },
                    flexShrink: 0,
                    mt: { xs: 0.25, sm: 0.375, md: 0.5, lg: 0.5 },
                  }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.75, sm: 0.875, md: 1, lg: 1 } }}>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '13px', sm: '14px', md: '15px', lg: '16px' },
                      color: '#333333',
                      lineHeight: { xs: 1.5, sm: 1.55, md: 1.6, lg: 1.6 },
                    }}
                  >
                    <strong>Level:</strong> {locationInfo.level}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '13px', sm: '14px', md: '15px', lg: '16px' },
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
                    fontSize: { xs: '16px', sm: '17px', md: '18px', lg: '20px' },
                    fontWeight: 400,
                    color: '#D19F3B',
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
                          fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' },
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        component="a"
                        href={`tel:${dine.contact.phone}`}
                        sx={{
                          fontFamily: '"Quicksand", sans-serif',
                          fontSize: { xs: '13px', sm: '14px', md: '15px', lg: '16px' },
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
                          fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' },
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        component="a"
                        href={`mailto:${dine.contact.email}`}
                        sx={{
                          fontFamily: '"Quicksand", sans-serif',
                          fontSize: { xs: '13px', sm: '14px', md: '15px', lg: '16px' },
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

            {/* Additional Info */}
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
                    fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '13px' },
                    fontWeight: 500,
                    height: { xs: '26px', sm: '28px', md: '32px', lg: 'auto' },
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
                    fontSize: { xs: '11px', sm: '12px', md: '12px', lg: '13px' },
                    fontWeight: 500,
                    height: { xs: '26px', sm: '28px', md: '32px', lg: 'auto' },
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

