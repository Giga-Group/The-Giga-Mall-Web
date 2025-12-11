'use client';

import { Box, Typography, IconButton } from '@mui/material';
import { LocationOn, Twitter, Facebook } from '@mui/icons-material';
import { StoreDetail } from '@/lib/utils/storeData';

interface StoreLocationProps {
  store: StoreDetail;
}

const StoreLocation = ({ store }: StoreLocationProps) => {
  const handleShare = (platform: 'twitter' | 'facebook') => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = `Check out ${store.name} at Giga Mall!`;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
  };

  // Default location info if not provided
  const locationInfo = store.location || {
    level: 'First Floor',
    parking: 'P2, Grand Parking'
  };

  // Default map position (center of map)
  const mapPosition = store.location?.mapPosition || { x: 50, y: 50 };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: { xs: 4, sm: 5, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left Side - Map */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: '400px', sm: '500px', md: '600px' },
            backgroundColor: '#f5f5f5',
            borderRadius: { xs: '8px', md: '12px' },
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
          }}
        >
          {/* Compass Icon */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: 12, md: 16 },
              left: { xs: 12, md: 16 },
              zIndex: 10,
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '50%',
              color: '#ffffff',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '16px', md: '20px' },
                fontWeight: 600,
                fontFamily: 'monospace',
              }}
            >
              N
            </Typography>
          </Box>

          {/* Map Container */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#f9f9f9',
              backgroundImage: 'radial-gradient(circle at 2px 2px, #e0e0e0 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          >
            {/* Store Pin */}
            <Box
              sx={{
                position: 'absolute',
                left: `${mapPosition.x}%`,
                top: `${mapPosition.y}%`,
                transform: 'translate(-50%, -100%)',
                zIndex: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Pin Icon */}
              <Box
                sx={{
                  width: { xs: 24, md: 32 },
                  height: { xs: 32, md: 40 },
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '70%',
                    backgroundColor: '#1976d2',
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                />
                <Box
                  sx={{
                    width: '100%',
                    height: '30%',
                    backgroundColor: '#1976d2',
                    borderRadius: '0 0 50% 50%',
                    border: '2px solid #ffffff',
                    borderTop: 'none',
                  }}
                />
              </Box>
              
              {/* Store Name Box */}
              <Box
                sx={{
                  marginTop: '4px',
                  padding: { xs: '4px 8px', md: '6px 12px' },
                  backgroundColor: '#000000',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '11px', md: '13px' },
                    fontWeight: 600,
                    color: '#ffffff',
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  }}
                >
                  {store.name}
                </Typography>
              </Box>
            </Box>

            {/* Sample Store Labels (for visual context) */}
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                left: '15%',
                padding: '2px 6px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#666',
                fontFamily: 'monospace',
              }}
            >
              MANGO Man
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '30%',
                left: '25%',
                padding: '2px 6px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#666',
                fontFamily: 'monospace',
              }}
            >
              Sephora
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                padding: '2px 6px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#666',
                fontFamily: 'monospace',
              }}
            >
              ZARA
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '60%',
                left: '30%',
                padding: '2px 6px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#666',
                fontFamily: 'monospace',
              }}
            >
              Starbucks
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '40%',
                left: '40%',
                padding: '2px 6px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#666',
                fontFamily: 'monospace',
              }}
            >
              H&M
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                padding: '2px 6px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '2px',
                fontSize: '10px',
                color: '#666',
                fontFamily: 'monospace',
              }}
            >
              Apple Store
            </Box>
          </Box>
        </Box>

        {/* Right Side - Location Info & Share */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {/* Location Information */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                padding: { xs: '16px', md: '20px' },
                backgroundColor: '#f9f9f9',
                borderRadius: { xs: '8px', md: '12px' },
                border: '1px solid #e0e0e0',
              }}
            >
              <LocationOn
                sx={{
                  color: '#D19F3B',
                  fontSize: { xs: '24px', md: '28px' },
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  color: '#333333',
                  lineHeight: 1.6,
                }}
              >
                Location: {store.name} / Level: {locationInfo.level} / Parking: {locationInfo.parking}
              </Typography>
            </Box>
          </Box>

          {/* Share Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '16px', md: '18px' },
                fontWeight: 600,
                color: '#333333',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              SHARE
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
              }}
            >
              <IconButton
                onClick={() => handleShare('twitter')}
                sx={{
                  backgroundColor: '#1DA1F2',
                  color: '#ffffff',
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  '&:hover': {
                    backgroundColor: '#0d8bd9',
                  },
                }}
              >
                <Twitter sx={{ fontSize: { xs: '24px', md: '28px' } }} />
              </IconButton>
              <IconButton
                onClick={() => handleShare('facebook')}
                sx={{
                  backgroundColor: '#1877F2',
                  color: '#ffffff',
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  '&:hover': {
                    backgroundColor: '#166fe5',
                  },
                }}
              >
                <Facebook sx={{ fontSize: { xs: '24px', md: '28px' } }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreLocation;


