'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const tabItems = ['OPENING HOURS', 'GETTING HERE'] as const;

// Opening hours data for each category
interface OpeningHours {
  [key: string]: {
    mon: string;
    tues: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
}

const openingHoursData: OpeningHours = {
  'ALL RETAILERS': {
    mon: '10:00 AM - 11:00 PM',
    tues: '10:00 AM - 11:00 PM',
    wed: '10:00 AM - 11:00 PM',
    thu: '10:00 AM - 11:00 PM',
    fri: '10:00 AM - 11:00 PM',
    sat: '10:00 AM - 11:00 PM',
    sun: '10:00 AM - 11:00 PM',
  },
  'RESTAURANTS & FOOD COURTS': {
    mon: '10:00 AM - 11:30 PM',
    tues: '10:00 AM - 11:30 PM',
    wed: '10:00 AM - 11:30 PM',
    thu: '10:00 AM - 11:30 PM',
    fri: '10:00 AM - 12:00 AM',
    sat: '10:00 AM - 12:00 AM',
    sun: '10:00 AM - 11:30 PM',
  },
  'METRO LINK BRIDGE OUTLETS': {
    mon: '10:00 AM - 12:00 AM',
    tues: '10:00 AM - 12:00 AM',
    wed: '10:00 AM - 12:00 AM',
    thu: '10:00 AM - 12:00 AM',
    fri: '10:00 AM - 12:00 AM',
    sat: '10:00 AM - 12:00 AM',
    sun: '10:00 AM - 12:00 AM',
  },
  'SOCIAL DISTRKT RETAILERS': {
    mon: '10:00 AM - 10:00 PM',
    tues: '10:00 AM - 10:00 PM',
    wed: '10:00 AM - 10:00 PM',
    thu: '10:00 AM - 10:00 PM',
    fri: '10:00 AM - 11:00 PM',
    sat: '10:00 AM - 11:00 PM',
    sun: '10:00 AM - 10:00 PM',
  },
  'SAB - PHARMACY AND STARBUCKS COFFEE': {
    mon: '8:00 AM - 12:00 AM',
    tues: '8:00 AM - 12:00 AM',
    wed: '8:00 AM - 12:00 AM',
    thu: '8:00 AM - 12:00 AM',
    fri: '8:00 AM - 12:00 AM',
    sat: '8:00 AM - 12:00 AM',
    sun: '8:00 AM - 12:00 AM',
  },
  'SAB - FUN RIDERS': {
    mon: '10:00 AM - 10:00 PM',
    tues: '10:00 AM - 10:00 PM',
    wed: '10:00 AM - 10:00 PM',
    thu: '10:00 AM - 10:00 PM',
    fri: '10:00 AM - 11:00 PM',
    sat: '10:00 AM - 11:00 PM',
    sun: '10:00 AM - 10:00 PM',
  },
  'SAB - SUPERMARKET': {
    mon: '8:00 AM - 12:00 AM',
    tues: '8:00 AM - 12:00 AM',
    wed: '8:00 AM - 12:00 AM',
    thu: '8:00 AM - 12:00 AM',
    fri: '8:00 AM - 12:00 AM',
    sat: '8:00 AM - 12:00 AM',
    sun: '8:00 AM - 12:00 AM',
  },
  'BANKS': {
    mon: '9:00 AM - 5:00 PM',
    tues: '9:00 AM - 5:00 PM',
    wed: '9:00 AM - 5:00 PM',
    thu: '9:00 AM - 5:00 PM',
    fri: '9:00 AM - 5:00 PM',
    sat: '9:00 AM - 2:00 PM',
    sun: 'Closed',
  },
  'REEL CINEMAS': {
    mon: '10:00 AM - 12:00 AM',
    tues: '10:00 AM - 12:00 AM',
    wed: '10:00 AM - 12:00 AM',
    thu: '10:00 AM - 12:00 AM',
    fri: '10:00 AM - 1:00 AM',
    sat: '10:00 AM - 1:00 AM',
    sun: '10:00 AM - 12:00 AM',
  },
  'MEDICLINIC': {
    mon: '8:00 AM - 10:00 PM',
    tues: '8:00 AM - 10:00 PM',
    wed: '8:00 AM - 10:00 PM',
    thu: '8:00 AM - 10:00 PM',
    fri: '8:00 AM - 10:00 PM',
    sat: '9:00 AM - 6:00 PM',
    sun: '9:00 AM - 6:00 PM',
  },
};

const categoryList = [
  'ALL RETAILERS',
  'RESTAURANTS & FOOD COURTS',
  'METRO LINK BRIDGE OUTLETS',
  'SOCIAL DISTRKT RETAILERS',
  'SAB - PHARMACY AND STARBUCKS COFFEE',
  'SAB - FUN RIDERS',
  'SAB - SUPERMARKET',
  'BANKS',
  'REEL CINEMAS',
  'MEDICLINIC',
];

// Transportation data for "Getting Here" section
interface TransportationData {
  paragraphs: string[];
  linkText?: string;
  linkUrl?: string;
}

const transportationData: Record<string, TransportationData> = {
  'BY METRO': {
    paragraphs: [
      'Getting to Giga Mall using the metro is easy. The nearest metro station is conveniently located within walking distance, with frequent passenger drop-offs daily.',
      'The glass tunnel travelator link between the metro station and Giga Mall is fully temperature controlled, making it a pleasure to walk across while enjoying views of the city.',
      'The metro link bridge is aligned with the mall\'s opening hours, operating from 10 AM to 12 AM on weekdays and extended hours on weekends.',
    ],
    linkText: 'Plan your journey to Giga Mall',
    linkUrl: 'https://www.google.com/maps?q=Giga+Mall+Islamabad',
  },
  'BY BUS': {
    paragraphs: [
      'Giga Mall is easily accessible by bus with multiple bus routes serving the area. The main bus stop is located just a 2-minute walk from the mall entrance.',
      'Several public bus routes connect Giga Mall to major areas of the city, with buses running every 15-20 minutes during peak hours and every 30 minutes during off-peak times.',
      'For your convenience, bus schedules are aligned with mall opening hours. The bus stop features covered waiting areas and real-time arrival information displays.',
    ],
    linkText: 'View bus routes and schedules',
    linkUrl: 'https://www.google.com/maps?q=Giga+Mall+Islamabad',
  },
  'BY CAR': {
    paragraphs: [
      'Giga Mall offers convenient parking facilities with over 5,000 parking spaces available across multiple levels. The parking areas are well-lit, secure, and easily accessible.',
      'Multiple entrances and exits ensure smooth traffic flow. The parking system includes electric vehicle charging stations and designated spaces for families and disabled visitors.',
      'Parking is free for the first 3 hours, with reasonable rates for extended stays. Valet parking services are also available at the main entrance for your convenience.',
    ],
    linkText: 'Get directions to Giga Mall',
    linkUrl: 'https://www.google.com/maps?q=Giga+Mall+Islamabad',
  },
  'BY TAXI – CAREEM – UBER': {
    paragraphs: [
      'Giga Mall is easily reachable via taxi, Careem, or Uber. The designated drop-off and pick-up points are located at the main entrance for quick and convenient access.',
      'Ride-hailing services operate 24/7 in the area, making it easy to get to and from the mall at any time. The drop-off zone is covered and well-marked for easy identification.',
      'For your return journey, simply request a ride from the pick-up point located near the main entrance. Wait times are typically 5-10 minutes during peak hours.',
    ],
    linkText: 'Book a ride to Giga Mall',
    linkUrl: 'https://www.google.com/maps?q=Giga+Mall+Islamabad',
  },
};

const transportationOptions = [
  'BY METRO',
  'BY BUS',
  'BY CAR',
  'BY TAXI – CAREEM – UBER',
];

function OpeningHoursContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('ALL RETAILERS');
  const [selectedTransportation, setSelectedTransportation] = useState('BY METRO');

  // Set initial tab from query param, e.g. ?tab=getting-here
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (!tab) return;

    const index =
      tab === 'getting-here'
        ? 1
        : 0;

    setActiveTab(index);
  }, [searchParams]);

  const getTabSlug = (index: number) => {
    if (index === 1) return 'getting-here';
    return 'opening-hours';
  };

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setActiveTab(value);
    const slug = getTabSlug(value);
    router.replace(`/opening-hours?tab=${slug}`, { scroll: false });
  };

  const isGettingHere = activeTab === 1;

  const heroTitle = isGettingHere
    ? 'Getting here'
    : 'Opening hours';

  // Get the correct image path from "plan your visit" folder
  const getHeroImagePath = (imageName: string) => {
    // Encode the path properly for URLs
    return `/plan your visit/${imageName}`.split('/').map(segment => encodeURIComponent(segment)).join('/');
  };

  const heroImage = isGettingHere
    ? getHeroImagePath('getting-here.jpg')
    : getHeroImagePath('opening-hours.jpg');

  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            // paddingTop: { xs: '90px', md: '100px' },
            minHeight: '100vh',
            backgroundColor: '#ffffff',
          }}
        >
          {/* Hero with background image and title */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '60vh', sm: 320, md: 380, lg: 420 },
              overflow: 'hidden',
            }}
          >
            <Image
              src={heroImage}
              alt={heroTitle}
              fill
              priority
              unoptimized
              style={{ objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.65))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Arvo", serif',
                    fontWeight: 400,
                    color: '#ffffff',
                    fontSize: { xs: '2.4rem', sm: '3rem', md: '3.4rem', lg: '3.8rem' },
                    letterSpacing: '0.04em',
                  }}
                >
                  {heroTitle}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Tabs row */}
          <Box
            sx={{
              borderBottom: '1px solid #e5e5e5',
              backgroundColor: '#ffffff',
            }}
          >
            <Box
              sx={{
                maxWidth: '1400px',
                margin: '0 auto',
                px: { xs: 2, sm: 4, md: 6, lg: 10 },
              }}
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons={false}
                sx={{
                  minHeight: 64,
                  '& .MuiTab-root': {
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: '#777777',
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                  '& .Mui-selected': {
                    color: '#000000',
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#D19F3B',
                    height: 3,
                    bottom: 0,
                  },
                }}
              >
                {tabItems.map((label) => (
                  <Tab
                    key={label}
                    label={label}
                    sx={{
                      textTransform: 'uppercase',
                    }}
                  />
                ))}
              </Tabs>
            </Box>
          </Box>

          {/* Content area */}
          {activeTab === 0 && (
            <Box
              sx={{
                maxWidth: '1400px',
                margin: '0 auto',
                px: { xs: 2, sm: 4, md: 6, lg: 10 },
                py: { xs: 4, md: 6 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 6 },
              }}
            >
              {/* Left categories */}
              <Box
                sx={{
                  flexBasis: { md: '32%' },
                  maxWidth: { md: '32%' },
                  borderTop: '1px solid #f0f0f0',
                }}
              >
                {categoryList.map((item) => (
                  <Box
                    key={item}
                    onClick={() => setSelectedCategory(item)}
                    sx={{
                      borderBottom: '1px solid #f0f0f0',
                      py: 1.5,
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: selectedCategory === item ? '#000000' : '#999999',
                      fontWeight: selectedCategory === item ? 600 : 400,
                      transition: 'color 0.2s ease, font-weight 0.2s ease',
                      '&:hover': {
                        color: '#000000',
                      },
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>

              {/* Right timetable */}
              <Box
                sx={{
                  flex: 1,
                  overflowX: 'auto',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    minWidth: { xs: '100%', sm: 700, md: 800, lg: 600 },
                    width: '100%',
                    borderTop: '1px solid #f0f0f0',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                >
                  {/* Header row */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      backgroundColor: '#ffffff',
                      borderBottom: '1px solid #f5f5f5',
                    }}
                  >
                    {['MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                      <Box
                        key={day}
                        sx={{
                          textAlign: 'center',
                          py: { xs: 1.5, sm: 2, md: 2.5 },
                          px: { xs: 1, sm: 1.5, md: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: '#777777',
                          borderLeft: '1px solid #f5f5f5',
                          '&:first-of-type': {
                            borderLeft: 'none',
                          },
                        }}
                      >
                        {day}
                      </Box>
                    ))}
                  </Box>

                  {/* Hours row */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                    }}
                  >
                    {(['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'] as const).map((day) => {
                      const hours = openingHoursData[selectedCategory]?.[day] || 'Closed';
                      return (
                        <Box
                          key={day}
                          sx={{
                            textAlign: 'center',
                            py: { xs: 1.5, sm: 2, md: 2.5 },
                            px: { xs: 1, sm: 1.5, md: 2 },
                            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                            color: hours === 'Closed' ? '#999999' : '#000000',
                            borderLeft: '1px solid #f9f9f9',
                            '&:first-of-type': {
                              borderLeft: 'none',
                            },
                          }}
                        >
                          {hours}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {activeTab === 1 && (
            <>
              <Box
                sx={{
                  maxWidth: '1400px',
                  margin: '0 auto',
                  px: { xs: 2, sm: 4, md: 6, lg: 10 },
                  py: { xs: 4, md: 6 },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: { xs: 4, md: 6 },
                }}
              >
                {/* Left transport options */}
                <Box
                  sx={{
                    flexBasis: { md: '32%' },
                    maxWidth: { md: '32%' },
                    borderTop: '1px solid #f0f0f0',
                  }}
                >
                  {transportationOptions.map((item) => (
                    <Box
                      key={item}
                      onClick={() => setSelectedTransportation(item)}
                      sx={{
                        borderBottom: '1px solid #f0f0f0',
                        py: 1.5,
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: selectedTransportation === item ? '#000000' : '#999999',
                        fontWeight: selectedTransportation === item ? 600 : 400,
                        transition: 'color 0.2s ease, font-weight 0.2s ease',
                        '&:hover': {
                          color: '#000000',
                        },
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>

                {/* Right description text */}
                <Box
                  sx={{
                    flex: 1,
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    color: '#000000',
                  }}
                >
                  {transportationData[selectedTransportation]?.paragraphs.map((paragraph, index) => (
                    <Typography
                      key={index}
                      component="p"
                      sx={{ mb: 2 }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                  {transportationData[selectedTransportation]?.linkText && (
                    <Typography
                      component="p"
                      sx={{ mb: 2 }}
                    >
                      Click here to {selectedTransportation === 'BY METRO' ? 'plan your journey using the metro' : selectedTransportation === 'BY BUS' ? 'view bus routes and schedules' : selectedTransportation === 'BY CAR' ? 'get directions to Giga Mall' : 'book a ride to Giga Mall'}:
                      {' '}
                      <Box
                        component="a"
                        href={transportationData[selectedTransportation]?.linkUrl || 'https://www.google.com/maps?q=Giga+Mall+Islamabad'}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textDecoration: 'underline',
                          fontWeight: 600,
                          ml: 0.5,
                          color: '#000000',
                        }}
                      >
                        {transportationData[selectedTransportation]?.linkText}
                      </Box>
                      .
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Map */}
              <Box
                sx={{
                  width: '100%',
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Box
                  sx={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    px: { xs: 2, sm: 4, md: 6, lg: 10 },
                    pb: { xs: 4, md: 6 },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: 260, sm: 320, md: 420 },
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    <iframe
                      title="Giga Mall Location"
                      src="https://www.google.com/maps?q=Giga+Mall+Islamabad&output=embed"
                      style={{ border: 0, width: '100%', height: '100%' }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </Box>
                </Box>
              </Box>
            </>
          )}

        </Box>
      </main>
      <Footer />
    </>
  );
}

export default function OpeningHoursPage() {
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
            }}
          >
            <Typography>Loading...</Typography>
          </Box>
        </main>
        <Footer />
      </>
    }>
      <OpeningHoursContent />
    </Suspense>
  );
}


