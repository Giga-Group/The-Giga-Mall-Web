'use client';

import { useState, Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ExploreTheMall from '@/components/sections/ExploreTheMall';
import { Box, Typography, TextField, Select, MenuItem, FormControl, Button, Link as MuiLink } from '@mui/material';
import { Search, KeyboardArrowDown } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: number;
  image: string;
  dates: string;
  title: string;
  description: string;
  slug: string;
  type?: string;
}

const allEvents: Event[] = [
  {
    id: 1,
    image: '/trending1.jpg',
    dates: '6th September 2025',
    title: '6th September Defence Day Celebration',
    description: 'Join us in honoring our nation\'s heroes with a special Defence Day celebration. Experience patriotic displays, cultural performances, and community activities that pay tribute to the brave defenders of our country.',
    slug: 'defence-day-celebration',
    type: 'entertainment'
  },
  {
    id: 2,
    image: '/trending8.jpg',
    dates: '15th March 2025',
    title: 'Eid ul Adha Celebration',
    description: 'Celebrate the spirit of sacrifice and togetherness with our grand Eid ul Adha festivities. Enjoy special performances, traditional activities, and a joyful atmosphere for the entire family.',
    slug: 'eid-ul-adha-celebration',
    type: 'entertainment'
  },
  {
    id: 3,
    image: '/trending3.jpg',
    dates: '14th August 2025',
    title: '14th August Independence Day Celebration',
    description: 'Celebrate Pakistan\'s Independence Day with pride and joy. Join us for flag hoisting ceremonies, patriotic performances, cultural displays, and special activities that honor our nation\'s freedom.',
    slug: 'independence-day-celebration',
    type: 'entertainment'
  },
  {
    id: 4,
    image: '/trending31.jpg',
    dates: '1st January 2025 - 31st December 2025',
    title: 'Giga Mall 5th Anniversary Celebration',
    description: 'Marking five incredible years of excellence! Join us throughout the year as we celebrate Giga Mall\'s 5th anniversary with special events, exclusive offers, and memorable experiences for all our valued visitors.',
    slug: 'giga-mall-5th-anniversary',
    type: 'entertainment'
  },
  {
    id: 5,
    image: '/trending13.jpg',
    dates: '18th May 2025',
    title: 'Mothers Day Celebration',
    description: 'Honor the most important women in our lives with a special Mother\'s Day celebration. Enjoy heartwarming activities, special performances, and create beautiful memories with your loved ones.',
    slug: 'mothers-day-celebration',
    type: 'family'
  },
  {
    id: 6,
    image: '/trending17.jpg',
    dates: '1st January 2025 - 31st December 2025',
    title: 'MOU Signing Ceremony With The Last Tribe',
    description: 'Witness a significant partnership milestone as Giga Mall signs a Memorandum of Understanding with The Last Tribe. This collaboration brings exciting new experiences and opportunities to our visitors.',
    slug: 'mou-signing-ceremony',
    type: 'culture'
  },
  {
    id: 7,
    image: '/trending 19.JPG',
    dates: '1st January 2025 - 31st December 2025',
    title: 'Giga Tribal Beats 2025',
    description: 'Experience the rhythm and energy of Giga Tribal Beats 2025! Immerse yourself in vibrant cultural performances, traditional music, and dynamic entertainment that celebrates our rich heritage.',
    slug: 'giga-tribal-beats-2025',
    type: 'entertainment'
  }
];

const eventTypes = [
  { value: 'all', label: 'All Event Types' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'dining', label: 'Dining' },
  { value: 'culture', label: 'Culture' },
  { value: 'family', label: 'Family' },
  { value: 'fashion', label: 'Fashion' }
];

function EventsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventType, setEventType] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = eventType === 'all' || event.type === eventType;
    return matchesSearch && matchesType;
  });

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

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
              Events
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
                placeholder="Search for an event"
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

              {/* Event Type Filter */}
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
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDown}
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    '& .MuiSelect-select': {
                      padding: { xs: '12px 14px', sm: '14px 16px' }
                    }
                  }}
                >
                  {eventTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Events Grid Section */}
          <Box
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              py: { xs: 4, sm: 5, md: 6 }
            }}
          >
            {/* ALL EVENTS Heading with Dividers */}
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
                ALL EVENTS
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

            {/* Events Grid */}
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
              {visibleEvents.map((event) => (
                <Box
                  key={event.id}
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
                  {/* Event Image */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: '250px', sm: '280px', md: '300px' },
                      overflow: 'hidden'
                    }}
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>

                  {/* Event Content */}
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
                      {event.dates}
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
                      {event.title}
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
                      {event.description}
                    </Typography>

                    {/* Find out more link */}
                    <MuiLink
                      component={Link}
                      href={`/events/${event.slug}`}
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
                    border: '1px solid #D19F3B',
                    color: '#D19F3B',
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

export default function EventsPage() {
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
      <EventsContent />
    </Suspense>
  );
}

