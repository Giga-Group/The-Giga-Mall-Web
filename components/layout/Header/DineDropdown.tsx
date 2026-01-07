'use client';

import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface DineDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// Helper function to convert restaurant name to slug
const restaurantToSlug = (restaurantName: string): string => {
  const restaurantSlugMap: { [key: string]: string } = {
    'ANGELINA': 'angelina',
    'Eataly': 'eataly',
    'Starbucks': 'starbucks',
    'Markette': 'markette',
    "Nando's": 'nandos',
    'Social House': 'social-house',
    'The Cheesecake Factory': 'cheesecake-factory',
    'Fine Dining Collection': 'fine-dining-collection'
  };
  
  return restaurantSlugMap[restaurantName] || restaurantName.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/\./g, '').replace(/'/g, '');
};

// Helper function to convert category name to query parameter
const categoryToQuery = (categoryName: string): string => {
  const categoryMap: { [key: string]: string } = {
    'View All': '',
    'Cafe': 'cafe',
    'Fast Food': 'fast-food',
    'Food & Drink': 'food-drink',
    'Icecream': 'icecream',
    'Restaurant': 'restaurant'
  };
  
  return categoryMap[categoryName] || '';
};

const DineDropdown = ({ isOpen, onMouseEnter, onMouseLeave }: DineDropdownProps) => {
  const router = useRouter();
  
  const dineDropdownData = {
    topPicks: [
      "ANGELINA",
      "Eataly",
      "Starbucks",
      "Nando's",
      "Social House",
      "The Cheesecake Factory",
      "Markette",
      "Fine Dining Collection"
    ],
    categories: [
      "View All",
      "Cafe",
      "Fast Food",
      "Food & Drink",
      "Icecream",
      "Restaurant"
    ],
    occasions: [
      "Breakfast",
      "Brunch",
      "Lunch",
      "Dinner",
      "Family Dining",
      "Business Meeting",
      "Celebration",
      "Quick Bite",
      "Fine Dining",
      "Casual Dining"
    ]
  };

  const handleCategoryClick = (category: string) => {
    const categoryQuery = categoryToQuery(category);
    if (categoryQuery) {
      router.push(`/dine?category=${categoryQuery}`);
    } else {
      router.push('/dine');
    }
  };

  const handleRestaurantClick = (restaurant: string) => {
    const slug = restaurantToSlug(restaurant);
    router.push(`/dine/${slug}`);
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
        {/* Column 1: TOP PICKS */}
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
              letterSpacing: '0.5px',
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            TOP PICKS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', md: '8px', lg: '10px' } }}>
            {dineDropdownData.topPicks.map((restaurant, index) => (
              <Box
                key={index}
                onClick={() => handleRestaurantClick(restaurant)}
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { xs: '13px', md: '14px', lg: '13px' },
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#D19F3B'
                  }
                }}
              >
                {restaurant}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Column 2: CATEGORIES */}
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
              letterSpacing: '0.5px',
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            CATEGORIES
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', md: '8px', lg: '10px' } }}>
            {dineDropdownData.categories.map((category, index) => (
              <Box
                key={index}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { xs: '13px', md: '14px', lg: '13px' },
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
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
              letterSpacing: '0.5px',
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            OCCASIONS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', md: '8px', lg: '10px' } }}>
            {dineDropdownData.occasions.map((occasion, index) => (
              <Box
                key={index}
                component={Link}
                href="/dine"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: { xs: '13px', md: '14px', lg: '13px' },
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
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
              letterSpacing: '0.5px',
              fontFamily: '"Poppins", sans-serif'
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
              src="/dine/macdonalds.jpeg"
              alt="Featured Restaurant"
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
              lineHeight: 1.5,
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            Discover the finest dining experiences at Giga Mall, featuring world-class restaurants and culinary delights...
          </Typography>
          <Box
            component={Link}
            href="/dine"
            sx={{
              color: '#000000',
              textDecoration: 'underline',
              fontSize: { xs: '12px', md: '13px', lg: '13px' },
              fontWeight: 400,
              fontFamily: '"Poppins", sans-serif',
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
          href="/dine"
          variant="outlined"
          sx={{
            border: '1px solid #D19F3B',
            color: '#ffffff',
            textTransform: 'uppercase',
            fontSize: { xs: '12px', md: '13px', lg: '14px' },
            fontWeight: 500,
            fontFamily: '"Poppins", sans-serif',
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
          VIEW ALL RESTAURANTS
        </Button>
      </Box>
    </Box>
  );
};

export default DineDropdown;

