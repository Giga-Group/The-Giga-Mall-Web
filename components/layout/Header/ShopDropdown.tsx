'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ShopDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// Helper function to convert brand name to slug
const brandToSlug = (brandName: string): string => {
  const brandSlugMap: { [key: string]: string } = {
    'Alkaram': 'alkaram',
    'Almas': 'almas',
    'Almirah': 'almirah',
    'Batik Studio': 'batik-studio',
    'Bloon': 'bloon',
    'Bonanza': 'bonanza',
    'Breakout': 'breakout',
    'Cambridge': 'cambridge',
    'Junaid Jamshed': 'junaid-jamshed',
    'Kayseria': 'kayseria',
    'Miniso': 'miniso'
  };
  
  return brandSlugMap[brandName] || brandName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/\./g, '');
};

// Helper function to convert category name to query parameter
const categoryToQuery = (categoryName: string): string => {
  const categoryMap: { [key: string]: string } = {
    'Electronics': 'electronics',
    'Fashion - Children': 'fashion-children',
    'Beauty & Fragrances': 'beauty',
    'Fashion - Men': 'fashion-men',
    'Fashion - Women': 'fashion-women',
    'Home': 'home',
    'New Stores': '',
    'Toys': 'toys'
  };
  
  return categoryMap[categoryName] || '';
};

const ShopDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: ShopDropdownProps) => {
  const router = useRouter();
  
  const shopDropdownData = {
    featuredCategories: [
      "Electronics",
      "Fashion - Children",
      "Beauty & Fragrances",
      "Fashion - Men",
      "Fashion - Women",
      "Home",
      "New Stores",
      "Toys"
    ],
    brands: [
      "Alkaram",
      "Almas",
      "Almirah",
      "Batik Studio",
      "Bloon",
      "Bonanza",
      "Breakout",
      "Cambridge",
      "Junaid Jamshed",
      "Kayseria",
      "Miniso"
    ],
    occasions: [
      "Anniversary",
      "Back to School",
      "Birthday",
      "Eid",
      "Festive Season",
      "Gifts for Her",
      "Gifts for Him",
      "Housewarming",
      "Souvenirs",
      "Travel",
      "Wedding"
    ]
  };

  const handleCategoryClick = (category: string) => {
    const categoryQuery = categoryToQuery(category);
    if (categoryQuery) {
      router.push(`/shop?category=${categoryQuery}`);
    } else {
      router.push('/shop');
    }
  };

  const handleBrandClick = (brand: string) => {
    const slug = brandToSlug(brand);
    router.push(`/shop/${slug}`);
  };

  if (!isOpen) return null;

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: 'fixed',
        top: { xs: '60px', md: '90px' },
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 10000,
        paddingBottom: { xs: '60px', md: '40px', lg: '50px' },
        maxHeight: { xs: 'calc(100vh - 60px)', md: 'auto' },
        overflowY: { xs: 'auto', md: 'visible' },
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translateY(-10px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          padding: { xs: '16px', md: '20px 24px 0', lg: '24px 48px 0' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: 3, md: 3, lg: 4 }
        }}
      >
        {/* Column 1: FEATURED CATEGORIES */}
        <Box
          sx={{
            borderRight: { xs: 'none', sm: '1px solid #e0e0e0', md: '1px solid #e0e0e0' },
            paddingRight: { xs: 0, md: 3, lg: 4 },
            paddingBottom: { xs: 2, md: 0 },
            borderBottom: { xs: '1px solid #e0e0e0', sm: 'none' }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { xs: '10px', md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            FEATURED CATEGORIES
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', md: '8px', lg: '10px' } }}>
            {shopDropdownData.featuredCategories.map((category, index) => (
              <Box
                key={index}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { xs: '13px', md: '14px', lg: '13px' },
                  fontWeight: 400,
                  transition: 'color 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#D19F3B'
                  }
                }}
              >
                {category}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Column 2: BRAND */}
        <Box
          sx={{
            borderRight: { xs: 'none', sm: '1px solid #e0e0e0', md: '1px solid #e0e0e0' },
            paddingRight: { xs: 0, md: 3, lg: 4 },
            paddingBottom: { xs: 2, md: 0 },
            borderBottom: { xs: '1px solid #e0e0e0', sm: 'none' }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { xs: '10px', md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            BRAND
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', md: '8px', lg: '10px' } }}>
            {shopDropdownData.brands.map((brand, index) => (
              <Box
                key={index}
                onClick={() => handleBrandClick(brand)}
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { xs: '13px', md: '14px', lg: '13px' },
                  fontWeight: 400,
                  transition: 'color 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#D19F3B'
                  }
                }}
              >
                {brand}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Column 3: OCCASIONS */}
        <Box
          sx={{
            borderRight: { xs: 'none', sm: '1px solid #e0e0e0', md: '1px solid #e0e0e0' },
            paddingRight: { xs: 0, md: 3, lg: 4 },
            paddingBottom: { xs: 2, md: 0 },
            borderBottom: { xs: '1px solid #e0e0e0', sm: 'none' }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { xs: '10px', md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            OCCASIONS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', md: '8px', lg: '10px' } }}>
            {shopDropdownData.occasions.map((occasion, index) => (
              <Box
                key={index}
                component={Link}
                href="/shop"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { xs: '13px', md: '14px', lg: '13px' },
                  fontWeight: 400,
                  transition: 'color 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#D19F3B'
                  }
                }}
              >
                {occasion}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Column 4: IN THE SPOTLIGHT */}
        <Box
          sx={{
            paddingBottom: { xs: 2, md: 0 }
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '13px', md: '14px', lg: '16px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: { xs: '10px', md: '12px', lg: '16px' },
              letterSpacing: '0.5px'
            }}
          >
            IN THE SPOTLIGHT
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
              marginBottom: { xs: '12px', md: '16px', lg: '20px' },
              position: 'relative',
              maxHeight: { xs: '150px', md: '200px' },
              overflow: 'hidden'
            }}
          >
            <Image
              src="/6485.jpg"
              alt="Chinatown"
              width={400}
              height={200}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: '12px', md: '13px', lg: '13px' },
              color: '#000000',
              marginBottom: { xs: '10px', md: '12px', lg: '12px' },
              lineHeight: 1.5
            }}
          >
            Charizma is the latest addition to Giga Mall, located on the first floor opposite the Giga Cinepax...
          </Typography>
          <Box
            component={Link}
            href="/shop"
            sx={{
              color: '#000000',
              textDecoration: 'underline',
              fontSize: { xs: '12px', md: '13px', lg: '13px' },
              fontWeight: 400,
              transition: 'color 0.2s ease',
              cursor: 'pointer',
              '&:hover': {
                color: '#D19F3B'
              }
            }}
          >
            Learn More
          </Box>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          bottom: 0,
          left: 0,
          right: 0,
          padding: { xs: '12px 16px', md: '12px 24px', lg: '6px 48px' },
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          borderTop: { xs: '1px solid #e0e0e0', md: 'none' }
        }}
      >
        <Button
          component={Link}
          href="/shop"
          variant="outlined"
          sx={{
            border: '1px solid #D19F3B',
            color: '#ffffff',
            textTransform: 'uppercase',
            fontSize: { xs: '12px', md: '13px', lg: '14px' },
            fontWeight: 500,
            padding: { xs: '10px 20px', md: '10px 24px', lg: '2px 600px' },
            borderRadius: 0,
            transition: 'all 0.3s ease',
            backgroundColor: '#D19F3B',
            width: { xs: '100%', lg: 'auto' },
            '&:hover': {
              border: '1px solid #D19F3B',
              color: '#ffffff',
              backgroundColor: '#D19F3B'
            }
          }}
        >
          VIEW ALL SHOPS
        </Button>
      </Box>
    </Box>
  );
};

export default ShopDropdown;

