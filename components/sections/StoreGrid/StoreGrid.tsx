'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export interface Store {
  name: string;
  slug?: string;
  hasOffers?: boolean;
  acceptsGiftCard?: boolean;
}

interface StoreGridProps {
  items?: Store[];
  basePath?: string;
}

// Helper function to get logo path from store slug
const getStoreLogo = (slug?: string): string | null => {
  if (!slug) return null;
  
  // Map of slug to logo filename - prioritizing dedicated logo files
  const logoMap: Record<string, string> = {
    // Shop logos - using dedicated logo files
    'alkaram': '/alkaram logo.jpg',
    'almas': '/almas logo.png',
    'almirah': '/almirah logo.png',
    'batik-studio': '/batik studio logo.jpg',
    'bloon': '/bloon logo.jpg',
    'bonanza': '/bonanza satrangi logo.jpg',
    'breakout': '/Breakout logo.png',
    'cambridge': '/cambridge logo.jpg',
    'junaid-jamshed': '/junaid jamshed logo.png',
    'kayseria': '/kayseria logo.jpg',
    'miniso': '/miniso logo.jpg',
    'nike': '/NIKE_-_WMoN.jpg',
    'zara': '/zara-forum6257.jpg',
    'other-stories': '/2-ES---WLaMaquinista_OK.jpg',
    '100-capri': '/2-OK.jpg',
    '12-storeez': '/1.png',
    '1847-executive-grooming': '/DSC05412Food_OK_1.jpg',
    // Restaurant/Dine logos
    'macdonalds': '/macdonalds logo.jpg',
    'mcdonalds': '/macdonalds logo.jpg',
    'hardees': '/hardees logo.jpg',
    'pizzahut': '/pizza hut logo.jpg',
    'pizza-hut': '/pizza hut logo.jpg',
    'cheezious': '/cheezious logo.jpg',
    'wild-wings': '/wings logo.jpg',
    'redapple': '/red apple logo.jpg',
    'optp': '/optp logo.jpg',
    'chachajee': '/chachajee logo.jpg',
    'simplysufi': '/simplysufi logo.jpg',
    'rewayat': '/rewayat logo.jpg',
    'spicefactory': '/spice factory logo.jpg',
    'chinagrill': '/china grill logo.jpg',
    'kababjees': '/kabab jees logo.jpg',
  };
  
  return logoMap[slug] || null;
};

// Sample store data - in a real app, this would come from an API
const defaultStores: Store[] = [
  { name: 'Alkaram', slug: 'alkaram' },
  { name: 'Almas', slug: 'almas' },
  { name: 'Almirah', slug: 'almirah' },
  { name: 'Batik Studio', slug: 'batik-studio' },
  { name: 'Bloon', slug: 'bloon' },
  { name: 'Bonanza', slug: 'bonanza' },
  { name: 'Breakout', slug: 'breakout' },
  { name: 'Cambridge', slug: 'cambridge' },
  { name: 'Junaid Jamshed', slug: 'junaid-jamshed' },
  { name: 'Kayseria', slug: 'kayseria' },
  { name: 'Miniso', slug: 'miniso' }
];

const StoreGrid = ({ items = defaultStores, basePath = '/shop' }: StoreGridProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [visibleCount, setVisibleCount] = useState(10); // Default for desktop
  const itemsPerPage = 5;
  
  // Initialize visible count based on mobile/desktop
  useEffect(() => {
    if (isMobile) {
      setVisibleCount(6); // Show only 6 items on mobile initially
    } else {
      setVisibleCount(10); // Show all items on desktop
    }
  }, [isMobile]);

  const handleLoadMore = () => {
    if (isMobile) {
      // On mobile, show all items when "Show More" is clicked
      setVisibleCount(items.length);
    } else {
      // On desktop, use the existing pagination logic
      setVisibleCount(prev => prev + itemsPerPage);
    }
  };

  // Determine which stores to show
  const visibleStores = items.slice(0, visibleCount);
  
  // Check if we need to show "Show More" button
  // On mobile: show button if there are more than 6 items and not all are visible
  // On desktop: show button if there are more items to load
  const hasMore = isMobile 
    ? (items.length > 6 && visibleCount < items.length)
    : (visibleCount < items.length);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
        backgroundColor: '#ffffff'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)'
            },
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            mb: { xs: 3, sm: 4 }
          }}
        >
          {visibleStores.map((store, index) => {
            const logoPath = getStoreLogo(store.slug || store.name.toLowerCase().replace(/\s+/g, '-'));
            
            return (
              <Link
                key={index}
                href={`${basePath}/${store.slug || store.name.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      borderColor: '#D19F3B',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  {logoPath ? (
                    <Image
                      src={logoPath}
                      alt={store.name}
                      fill
                      sizes="(max-width: 600px) 50vw, (max-width: 960px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      style={{
                        objectFit: 'contain',
                        padding: '12px'
                      }}
                    />
                  ) : (
                    <Typography
                      className="store-name"
                      sx={{
                        fontFamily: 'Georgia, serif',
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                        color: '#333333',
                        fontWeight: 400,
                        lineHeight: 1.4,
                        wordBreak: 'break-word',
                        transition: 'color 0.3s ease',
                        padding: { xs: 1.5, sm: 2 },
                        textAlign: 'center'
                      }}
                    >
                      {store.name}
                    </Typography>
                  )}
                </Box>
              </Link>
            );
          })}
        </Box>

        {/* Show More Button */}
        {hasMore && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 3, sm: 4 }
            }}
          >
            <Button
              onClick={handleLoadMore}
              variant="outlined"
              sx={{
                border: '1px solid #D19F3B',
                color: '#D19F3B',
                textTransform: 'uppercase',
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                fontWeight: 500,
                padding: { xs: '10px 40px', sm: '12px 50px' },
                borderRadius: 0,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#D19F3B',
                  color: '#ffffff',
                  backgroundColor: '#D19F3B'
                }
              }}
            >
              {isMobile && visibleCount === 6 ? 'Show More' : 'Load More'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StoreGrid;