'use client';

import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

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

// Sample store data - in a real app, this would come from an API
const defaultStores: Store[] = [
  { name: '& Other Stories', slug: 'other-stories', hasOffers: true },
  { name: '100% Capri', slug: '100-capri' },
  { name: '12 STOREEZ', slug: '12-storeez' },
  { name: '1847 Executive Grooming for Men', slug: '1847-executive-grooming' },
  { name: 'Aesop', slug: 'aesop', acceptsGiftCard: true },
  { name: 'Adidas', slug: 'adidas', hasOffers: true },
  { name: 'Bvlgari', slug: 'bvlgari', acceptsGiftCard: true },
  { name: 'Cartier', slug: 'cartier', acceptsGiftCard: true },
  { name: 'Chloé', slug: 'chloe', hasOffers: true },
  { name: 'Chopard', slug: 'chopard' },
  { name: 'Christian Louboutin', slug: 'christian-louboutin', acceptsGiftCard: true },
  { name: 'CHANEL', slug: 'chanel', acceptsGiftCard: true },
  { name: 'Henry Jacques', slug: 'henry-jacques' },
  { name: 'Level Shoes', slug: 'level-shoes', hasOffers: true },
  { name: 'Louis Vuitton', slug: 'louis-vuitton', acceptsGiftCard: true },
  { name: 'LONGINES', slug: 'longines', hasOffers: true },
  { name: 'Nike', slug: 'nike', hasOffers: true },
  { name: 'Sephora', slug: 'sephora', hasOffers: true, acceptsGiftCard: true },
  { name: 'Starbucks', slug: 'starbucks' },
  { name: 'Tiffany & Co.', slug: 'tiffany-co', acceptsGiftCard: true },
  { name: 'Tommy Hilfiger Kids', slug: 'tommy-hilfiger-kids', hasOffers: true },
  { name: 'Zara', slug: 'zara', hasOffers: true }
];

const StoreGrid = ({ items = defaultStores, basePath = '/shop' }: StoreGridProps) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const itemsPerPage = 12;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  const visibleStores = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

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
          {visibleStores.map((store, index) => (
            <Link
              key={index}
              href={`${basePath}/${store.slug || store.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  minHeight: { xs: '60px', sm: '70px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  '&:hover': {
                    borderColor: '#D19F3B',
                    backgroundColor: '#fafafa',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '& .store-name': {
                      color: '#D19F3B'
                    }
                  }
                }}
              >
                <Typography
                  className="store-name"
                  sx={{
                    fontFamily: 'Georgia, serif',
                    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                    color: '#333333',
                    fontWeight: 400,
                    lineHeight: 1.4,
                    wordBreak: 'break-word',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {store.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>

        {/* Load More Button */}
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
                border: '1px solid #e0e0e0',
                color: '#333333',
                textTransform: 'uppercase',
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                fontWeight: 500,
                padding: { xs: '10px 40px', sm: '12px 50px' },
                borderRadius: 0,
                backgroundColor: '#fafafa',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#D19F3B',
                  color: '#ffffff',
                  backgroundColor: '#D19F3B'
                }
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StoreGrid;

