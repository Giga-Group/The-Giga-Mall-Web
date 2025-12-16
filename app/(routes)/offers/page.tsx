'use client';

import { useState, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExploreTheMall from '@/components/sections/ExploreTheMall';
import { Box, Typography, TextField, Select, MenuItem, FormControl, Button, Link as MuiLink } from '@mui/material';
import { Search, KeyboardArrowDown } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

interface Offer {
  id: number;
  image: string;
  dates: string;
  title: string;
  description: string;
  slug: string;
  type?: string;
}

const allOffers: Offer[] = [
  {
    id: 1,
    image: '/Sephora_2_1.jpg',
    dates: '01 Jan - 31 Jan 2026',
    title: 'Sephora Beauty Bonanza',
    description: 'Get up to 50% off on premium beauty products! Discover exclusive deals on makeup, skincare, and fragrances from top brands. Limited time offer.',
    slug: 'sephora-beauty-bonanza',
    type: 'beauty'
  },
  {
    id: 2,
    image: '/NIKE_-_WMoN.jpg',
    dates: '15 Dec - 31 Dec 2025',
    title: 'Nike End of Year Sale',
    description: 'Score amazing deals on athletic wear and footwear. Up to 40% off on selected items including the latest sneaker releases and sportswear collections.',
    slug: 'nike-end-year-sale',
    type: 'fashion'
  },
  {
    id: 3,
    image: '/ADIDAS.jpg',
    dates: '10 Dec - 25 Dec 2025',
    title: 'Adidas Holiday Special',
    description: 'Celebrate the holidays with Adidas! Enjoy special discounts on performance gear, streetwear, and accessories. Perfect for your active lifestyle.',
    slug: 'adidas-holiday-special',
    type: 'fashion'
  },
  {
    id: 4,
    image: '/zara-forum6257.jpg',
    dates: '05 Dec - 20 Dec 2025',
    title: 'Zara Fashion Week Sale',
    description: 'Refresh your wardrobe with Zara&apos;s latest collections at unbeatable prices. Discover trendy pieces for every occasion with exclusive discounts.',
    slug: 'zara-fashion-week',
    type: 'fashion'
  },
  {
    id: 5,
    image: '/Aesop_Westfield_Stratford_City.jpg',
    dates: '20 Dec - 05 Jan 2026',
    title: 'Aesop Skincare Essentials',
    description: 'Pamper yourself with premium skincare products. Special offers on Aesop&apos;s signature formulations for radiant, healthy-looking skin.',
    slug: 'aesop-skincare-essentials',
    type: 'beauty'
  },
  {
    id: 6,
    image: '/Starbucks.jpg',
    dates: '01 Dec - 31 Dec 2025',
    title: 'Starbucks Holiday Drinks',
    description: 'Warm up this winter with Starbucks&apos; seasonal beverages. Buy one get one free on selected holiday drinks and enjoy festive flavors.',
    slug: 'starbucks-holiday-drinks',
    type: 'dining'
  },
  {
    id: 7,
    image: '/Victoria_s_Secret_Westfield_Stratford_City.jpg',
    dates: '12 Dec - 28 Dec 2025',
    title: 'Victoria&apos;s Secret Lingerie Sale',
    description: 'Shop the ultimate lingerie collection with exclusive discounts. Discover elegant pieces and intimate apparel at special prices.',
    slug: 'victorias-secret-sale',
    type: 'fashion'
  },
  {
    id: 8,
    image: '/Swarovski_in_Scandinavia_2_784e0db59b.webp',
    dates: '08 Dec - 24 Dec 2025',
    title: 'Swarovski Crystal Collection',
    description: 'Sparkle this holiday season with Swarovski&apos;s exquisite crystal jewelry. Special pricing on selected pieces including limited edition designs.',
    slug: 'swarovski-crystal-collection',
    type: 'jewelry'
  },
  {
    id: 9,
    image: '/Nespresso_2.jpg',
    dates: '15 Dec - 30 Dec 2025',
    title: 'Nespresso Coffee Machine Offer',
    description: 'Elevate your coffee experience with Nespresso machines and capsules. Exclusive bundle deals and complimentary accessories with purchase.',
    slug: 'nespresso-coffee-offer',
    type: 'electronics'
  }
];

const offerTypes = [
  { value: 'all', label: 'All Offer Types' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'beauty', label: 'Beauty' },
  { value: 'dining', label: 'Dining' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'jewelry', label: 'Jewelry' },
  { value: 'home', label: 'Home & Living' }
];

function OffersContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [offerType, setOfferType] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredOffers = allOffers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         offer.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = offerType === 'all' || offer.type === offerType;
    return matchesSearch && matchesType;
  });

  const visibleOffers = filteredOffers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredOffers.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            paddingTop: { xs: '90px', md: '100px', lg: '40px' },
            minHeight: '100vh',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Breadcrumbs and Title */}
          <Box
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              pb: { xs: 2, sm: 3, md: 4 }
            }}
          >
            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Playfair Display", "Georgia", serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 400,
                color: '#D19F3B',
                textAlign: 'center',
                letterSpacing: '0.02em'
              }}
            >
              Offers
            </Typography>
          </Box>

          {/* Search and Filter Section */}
          <Box
            sx={{
              width: '100%',
              py: { xs: 3, sm: 4 },
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e0e0e0',
              borderBottom: '1px solid #e0e0e0'
            }}
          >
            <Box
              sx={{
                maxWidth: '1240px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 3 },
                alignItems: { xs: 'stretch', sm: 'center' }
              }}
            >
              {/* Search Input */}
              <TextField
                placeholder="Search for an offer"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    backgroundColor: '#ffffff',
                    '& fieldset': {
                      borderColor: '#e0e0e0'
                    },
                    '&:hover fieldset': {
                      borderColor: '#D19F3B'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#D19F3B'
                    }
                  },
                  '& .MuiInputBase-input': {
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    padding: { xs: '12px 14px', sm: '14px 16px' }
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <Box sx={{ mr: 1, color: '#666666' }}>
                      <Search sx={{ fontSize: { xs: '20px', sm: '22px' } }} />
                    </Box>
                  )
                }}
              />

              {/* Offer Type Filter */}
              <FormControl
                sx={{
                  minWidth: { xs: '100%', sm: '250px' },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    backgroundColor: '#ffffff',
                    '& fieldset': {
                      borderColor: '#e0e0e0'
                    },
                    '&:hover fieldset': {
                      borderColor: '#D19F3B'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#D19F3B'
                    }
                  }
                }}
              >
                <Select
                  value={offerType}
                  onChange={(e) => setOfferType(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDown}
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    '& .MuiSelect-select': {
                      padding: { xs: '12px 14px', sm: '14px 16px' }
                    }
                  }}
                >
                  {offerTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Offers Grid Section */}
          <Box
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              py: { xs: 4, sm: 5, md: 6 }
            }}
          >
            {/* ALL OFFERS Heading with Dividers */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: { xs: 3, sm: 4, md: 5 },
                gap: { xs: 2, sm: 3, md: 4 }
              }}
            >
              {/* Left Divider */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth: { xs: '80px', sm: '100px', md: '150px' },
                  height: '1px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(to right, transparent 0%, #D19F3B 50%, transparent 100%)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    width: '12px',
                    height: '12px',
                    border: '2px solid #D19F3B',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    transform: 'translateX(50%)',
                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 1), 0 0 0 6px rgba(209, 159, 59, 0.3)'
                  }
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Playfair Display", "Georgia", serif',
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' },
                  fontWeight: 400,
                  color: '#D19F3B',
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap'
                }}
              >
                ALL OFFERS
              </Typography>

              {/* Right Divider */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth: { xs: '80px', sm: '100px', md: '150px' },
                  height: '1px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(to left, transparent 0%, #D19F3B 50%, transparent 100%)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    width: '12px',
                    height: '12px',
                    border: '2px solid #D19F3B',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 1), 0 0 0 6px rgba(209, 159, 59, 0.3)'
                  }
                }}
              />
            </Box>

            {/* Offers Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)'
                },
                gap: { xs: 3, sm: 4, md: 5 }
              }}
            >
              {visibleOffers.map((offer) => (
                <Box
                  key={offer.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  {/* Offer Image */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: '250px', sm: '280px', md: '300px' },
                      overflow: 'hidden'
                    }}
                  >
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Offer Content */}
                  <Box
                    sx={{
                      padding: { xs: '20px', sm: '24px', md: '28px' },
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1
                    }}
                  >
                    {/* Dates */}
                    <Typography
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                        color: '#666666',
                        mb: { xs: 1, sm: 1.5 },
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {offer.dates}
                    </Typography>

                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Playfair Display", "Georgia", serif',
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                        fontWeight: 400,
                        color: '#000000',
                        mb: { xs: 1.5, sm: 2 },
                        lineHeight: 1.3,
                        flexGrow: 1
                      }}
                    >
                      {offer.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                        color: '#666666',
                        mb: { xs: 2, sm: 2.5 },
                        lineHeight: 1.6
                      }}
                    >
                      {offer.description}
                    </Typography>

                    {/* Find out more link */}
                    <MuiLink
                      component={Link}
                      href={`/offers/${offer.slug}`}
                      sx={{
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                        color: '#D19F3B',
                        fontWeight: 500,
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        alignSelf: 'flex-start',
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                          opacity: 0.7
                        }
                      }}
                    >
                      Find out more
                    </MuiLink>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Load More Button */}
            {hasMore && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: { xs: 4, sm: 5, md: 6 }
                }}
              >
                <Button
                  onClick={handleLoadMore}
                  variant="outlined"
                  sx={{
                    border: '1px solid #000000',
                    color: '#000000',
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    padding: { xs: '12px 40px', sm: '14px 50px', md: '16px 60px' },
                    borderRadius: 0,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#D19F3B',
                      backgroundColor: '#D19F3B',
                      color: '#ffffff'
                    }
                  }}
                >
                  Load More
                </Button>
              </Box>
            )}
          </Box>

          {/* Explore The Mall & Visitor Info Section */}
          <ExploreTheMall />
        </Box>
      </main>
      <Footer />
    </>
  );
}

export default function OffersPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main>
          <Box
            sx={{
              minHeight: '100vh',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: { xs: '90px', md: '100px' }
            }}
          >
            <Typography>Loading...</Typography>
          </Box>
        </main>
        <Footer />
      </>
    }>
      <OffersContent />
    </Suspense>
  );
}

