'use client';

import { useState, Suspense, useCallback, useEffect, useRef } from 'react';
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
    image: '/offers/bonanza_satrangi_2.png',
    dates: '01 Jan - 31 Jan 2026',
    title: 'Bonanza Satrangi',
    description: 'Get up to 50% off on premium fashion and beauty products! Discover exclusive deals on clothing, makeup, and accessories from Bonanza Satrangi. Limited time offer.',
    slug: 'bonanza-satrangi',
    type: 'beauty'
  },
  {
    id: 2,
    image: '/offers/breakout.png',
    dates: '15 Dec - 31 Dec 2025',
    title: 'Breakout Sale of Year',
    description: 'Score amazing deals on fashion and lifestyle products. Up to 40% off on selected items including the latest collections and trendy pieces.',
    slug: 'breakout-sale-of-year',
    type: 'fashion'
  },
  {
    id: 3,
    image: '/offers/bloom.png',
    dates: '10 Dec - 25 Dec 2025',
    title: 'Bloom Holiday Special',
    description: 'Celebrate the holidays with Bloom! Enjoy special discounts on fashion, accessories, and lifestyle products. Perfect for your holiday shopping.',
    slug: 'bloom-holiday-special',
    type: 'fashion'
  },
  {
    id: 4,
    image: '/offers/kayseria.png',
    dates: '05 Dec - 20 Dec 2025',
    title: 'Kayseria Fashion Week Sale',
    description: 'Refresh your wardrobe with Kayseria\'s latest collections at unbeatable prices. Discover trendy pieces for every occasion with exclusive discounts.',
    slug: 'kayseria-fashion-week',
    type: 'fashion'
  },
  {
    id: 5,
    image: '/offers/Junaid.png',
    dates: '20 Dec - 05 Jan 2026',
    title: 'Junaid Jamshaid Sales',
    description: 'Pamper yourself with premium fashion and lifestyle products. Special offers on Junaid Jamshaid\'s signature collections for elegant and stylish looks.',
    slug: 'junaid-jamshaid-sales',
    type: 'beauty'
  },
  {
    id: 6,
    image: '/offers/hardees.png',
    dates: '01 Dec - 31 Dec 2025',
    title: 'Hardees Holiday Big Sale',
    description: 'Satisfy your cravings with Hardees\'s holiday specials! Enjoy amazing deals on burgers, fries, and meals. Buy one get one free on selected items.',
    slug: 'hardees-holiday-big-sale',
    type: 'dining'
  },
  {
    id: 7,
    image: '/offers/cheezious.png',
    dates: '12 Dec - 28 Dec 2025',
    title: 'Cheezious Special Offer',
    description: 'Indulge in Cheezious special offers! Enjoy delicious cheesy delights with exclusive discounts. Discover mouth-watering pizzas and cheesy treats at special prices.',
    slug: 'cheezious-special-offer',
    type: 'dining'
  },
  {
    id: 8,
    image: '/offers/mcdonalds.png',
    dates: '08 Dec - 24 Dec 2025',
    title: 'McDonalds Super Savings',
    description: 'Enjoy super savings at McDonald\'s! Get amazing deals on your favorite burgers, fries, and meals. Special pricing on combo meals and limited-time offers.',
    slug: 'mcdonalds-super-savings',
    type: 'dining'
  },
  {
    id: 9,
    image: '/offers/pizzahut.png',
    dates: '15 Dec - 30 Dec 2025',
    title: 'Pizza Hut Buy 1 Get 1',
    description: 'Enjoy Pizza Hut&apos;s amazing buy one get one offer! Get your favorite pizzas, sides, and drinks with exclusive deals. Perfect for sharing with family and friends.',
    slug: 'pizzahut-buy-1-get-1',
    type: 'dining'
  },
  {
    id: 10,
    image: '/offers/wildwing.png',
    dates: '15 Dec - 30 Dec 2025',
    title: 'Wild Wing Special Offer',
    description: 'Savor the flavor at Wild Wing! Enjoy amazing deals on wings, burgers, and more. Special offers on combo meals and signature dishes.',
    slug: 'wildwing-special-offer',
    type: 'dining'
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
  
  // Carousel state for mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayPausedRef = useRef(false);

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

  // Carousel navigation functions
  const goToNext = useCallback(() => {
    if (isTransitioning || filteredOffers.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % filteredOffers.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, filteredOffers.length]);

  const goToPrev = useCallback(() => {
    if (isTransitioning || filteredOffers.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + filteredOffers.length) % filteredOffers.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, filteredOffers.length]);

  // Auto-scroll for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning && !autoPlayPausedRef.current && filteredOffers.length > 0) {
        goToNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNext, isTransitioning, filteredOffers.length]);

  // Touch handlers for mobile carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    autoPlayPausedRef.current = true;
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart !== null) {
      setTouchEnd(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || touchEnd === null) {
      setTouchStart(null);
      setTouchEnd(null);
      setTimeout(() => {
        autoPlayPausedRef.current = false;
      }, 5000);
      return;
    }

    const delta = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(delta) > minSwipeDistance) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
    setTimeout(() => {
      autoPlayPausedRef.current = false;
    }, 5000);
  };

  // Reset carousel index when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [searchQuery, offerType]);

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
                fontFamily: '"Arvo", serif',
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
                  fontFamily: '"Arvo", serif',
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

            {/* Mobile Carousel View */}
            <Box
              sx={{
                display: { xs: 'block', sm: 'none' },
                position: 'relative',
                width: '100%',
                overflow: 'hidden'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Box
                sx={{
                  display: 'flex',
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
                  willChange: 'transform'
                }}
              >
                {filteredOffers.map((offer) => (
                  <Box
                    key={offer.id}
                    sx={{
                      minWidth: '100%',
                      width: '100%',
                      flexShrink: 0,
                      px: 1
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:active': {
                          transform: 'scale(0.98)'
                        }
                      }}
                    >
                      {/* Offer Image */}
                      <Box
                        sx={{
                          position: 'relative',
                          width: '100%',
                          height: '280px',
                          overflow: 'hidden',
                          backgroundColor: '#f5f5f5'
                        }}
                      >
                        <Image
                          src={offer.image}
                          alt={offer.title}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                      </Box>

                      {/* Offer Content */}
                      <Box
                        sx={{
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1
                        }}
                      >
                        {/* Dates */}
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            color: '#666666',
                            mb: 1,
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
                            fontFamily: '"Arvo", serif',
                            fontSize: '1.1rem',
                            fontWeight: 400,
                            color: '#000000',
                            mb: 1.5,
                            lineHeight: 1.3,
                            flexGrow: 1
                          }}
                        >
                          {offer.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          sx={{
                            fontSize: '0.85rem',
                            color: '#666666',
                            mb: 2,
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
                            fontSize: '0.85rem',
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
                  </Box>
                ))}
              </Box>

              {/* Navigation Dots */}
              {filteredOffers.length > 1 && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1,
                    mt: 3
                  }}
                >
                  {filteredOffers.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => {
                        if (!isTransitioning) {
                          setIsTransitioning(true);
                          setCurrentIndex(index);
                          setTimeout(() => setIsTransitioning(false), 500);
                        }
                      }}
                      sx={{
                        width: currentIndex === index ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: currentIndex === index ? '#D19F3B' : '#D19F3B80',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#D19F3B'
                        }
                      }}
                    />
                  ))}
                </Box>
              )}

            </Box>

            {/* Desktop/Tablet Grid View */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'grid' },
                gridTemplateColumns: {
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)'
                },
                gap: { sm: 4, md: 5 }
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
                      height: { sm: '200px', md: '220px' },
                      overflow: 'hidden',
                      backgroundColor: '#f5f5f5'
                    }}
                  >
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </Box>

                  {/* Offer Content */}
                  <Box
                    sx={{
                      padding: { sm: '24px', md: '28px' },
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1
                    }}
                  >
                    {/* Dates */}
                    <Typography
                      sx={{
                        fontSize: { sm: '0.8rem', md: '0.85rem' },
                        color: '#666666',
                        mb: 1.5,
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
                        fontFamily: '"Arvo", serif',
                        fontSize: { sm: '1.2rem', md: '1.3rem' },
                        fontWeight: 400,
                        color: '#000000',
                        mb: 2,
                        lineHeight: 1.3,
                        flexGrow: 1
                      }}
                    >
                      {offer.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: { sm: '0.9rem', md: '0.95rem' },
                        color: '#666666',
                        mb: 2.5,
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
                        fontSize: { sm: '0.9rem', md: '0.95rem' },
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

            {/* Load More Button - Only for Desktop/Tablet */}
            {hasMore && (
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'center',
                  mt: { sm: 5, md: 6 }
                }}
              >
                <Button
                  onClick={handleLoadMore}
                  variant="outlined"
                  sx={{
                    border: '1px solid #D19F3B',
                    color: '#D19F3B',
                    textTransform: 'uppercase',
                    fontSize: { sm: '0.8rem', md: '0.85rem' },
                    fontWeight: 400,
                    fontFamily: '"Poppins", sans-serif',
                    letterSpacing: '0.1em',
                    padding: { sm: '14px 50px', md: '16px 60px' },
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

