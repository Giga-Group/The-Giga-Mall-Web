'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const tabItems = ['OPENING HOURS', 'GETTING HERE', 'PARKING'] as const;

function OpeningHoursContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(0);

  // Set initial tab from query param, e.g. ?tab=getting-here
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (!tab) return;

    const index =
      tab === 'getting-here'
        ? 1
        : tab === 'parking'
        ? 2
        : 0;

    setActiveTab(index);
  }, [searchParams]);

  const getTabSlug = (index: number) => {
    if (index === 1) return 'getting-here';
    if (index === 2) return 'parking';
    return 'opening-hours';
  };

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setActiveTab(value);
    const slug = getTabSlug(value);
    router.replace(`/opening-hours?tab=${slug}`, { scroll: false });
  };

  const isGettingHere = activeTab === 1;
  const isParking = activeTab === 2;

  const heroTitle = isGettingHere
    ? 'Getting here'
    : isParking
    ? 'Parking'
    : 'Opening hours';

  const heroBreadcrumb = isGettingHere
    ? 'Home · Getting here'
    : isParking
    ? 'Home · Parking'
    : 'Home · Opening hours';

  const heroImage = isGettingHere
    ? '/DSC07199.jpg'
    : isParking
    ? '/DSC08041.jpg'
    : '/WESTFIELD_CENTURY_CITY_TAYLOR_SWIFT_2.jpg';

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
              height: { xs: 260, sm: 320, md: 380, lg: 420 },
              overflow: 'hidden',
            }}
          >
            <Image
              src={heroImage}
              alt={heroTitle}
              fill
              priority
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
                  variant="h6"
                  sx={{
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontSize: { xs: '0.75rem', sm: '0.8rem' },
                    mb: 1,
                  }}
                >
                  {heroBreadcrumb}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Playfair Display", "Georgia", serif',
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
                {[
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
                ].map((item, idx) => (
                  <Box
                    key={item}
                    sx={{
                      borderBottom: '1px solid #f0f0f0',
                      py: 1.5,
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: idx === 0 ? '#000000' : '#999999',
                      fontWeight: idx === 0 ? 600 : 400,
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
                }}
              >
                <Box
                  sx={{
                    minWidth: 600,
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
                          py: 1.5,
                          fontSize: '0.75rem',
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

                  {/* Hours rows */}
                  {[
                    { label: '10:00 AM' },
                    { label: '11:00 PM' },
                  ].map((row, rowIndex) => (
                    <Box
                      key={rowIndex}
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        borderBottom: rowIndex === 1 ? 'none' : '1px solid #f9f9f9',
                      }}
                    >
                      {Array.from({ length: 7 }).map((_, colIndex) => (
                        <Box
                          key={colIndex}
                          sx={{
                            textAlign: 'center',
                            py: 1.25,
                            fontSize: '0.8rem',
                            color: '#000000',
                            borderLeft: '1px solid #f9f9f9',
                            '&:first-of-type': {
                              borderLeft: 'none',
                            },
                          }}
                        >
                          {row.label}
                        </Box>
                      ))}
                    </Box>
                  ))}
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
                  {['BY METRO', 'BY BUS', 'BY CAR', 'BY TAXI – CAREEM – UBER'].map((item, idx) => (
                    <Box
                      key={item}
                      sx={{
                        borderBottom: '1px solid #f0f0f0',
                        py: 1.5,
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: idx === 0 ? '#000000' : '#999999',
                        fontWeight: idx === 0 ? 600 : 400,
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
                  <Typography
                    component="p"
                    sx={{ mb: 2 }}
                  >
                    Getting to Giga Mall using the metro is easy. The nearest metro station is conveniently
                    located within walking distance, with frequent passenger drop-offs daily.
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ mb: 2 }}
                  >
                    The glass tunnel travelator link between the metro station and Giga Mall is fully
                    temperature controlled, making it a pleasure to walk across while enjoying views of the
                    city.
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ mb: 2 }}
                  >
                    The metro link bridge is aligned with the mall&apos;s opening hours, operating from 10 AM
                    to 12 AM on weekdays and extended hours on weekends.
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ mb: 2 }}
                  >
                    Click here to plan your journey using the metro:
                    {' '}
                    <Box
                      component="a"
                      href="https://www.google.com/maps?q=Giga+Mall+Islamabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textDecoration: 'underline',
                        fontWeight: 600,
                        ml: 0.5,
                        color: '#000000',
                      }}
                    >
                      Plan your journey to Giga Mall
                    </Box>
                    .
                  </Typography>
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

          {activeTab === 2 && (
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
              {/* Left parking options */}
              <Box
                sx={{
                  flexBasis: { md: '32%' },
                  maxWidth: { md: '32%' },
                  borderTop: '1px solid #f0f0f0',
                }}
              >
                {['AVAILABLE PARKING', 'FIND MY CAR', 'VALET PARKING'].map((item, idx) => (
                  <Box
                    key={item}
                    sx={{
                      borderBottom: '1px solid #f0f0f0',
                      py: 1.5,
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: idx === 0 ? '#000000' : '#c0c0c0',
                      fontWeight: idx === 0 ? 600 : 400,
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>

              {/* Right parking list */}
              <Box
                sx={{
                  flex: 1,
                }}
              >
                {[
                  { name: 'Fashion Parking', slots: 2690, status: 'Available' },
                  { name: 'Cinema Parking', slots: 4371, status: 'Available' },
                  { name: 'Zabeel Parking', slots: 2144, status: 'Available' },
                  { name: 'Fountain Views', slots: 2200, status: 'Available' },
                ].map((p, idx) => (
                  <Box
                    key={p.name}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.2fr) minmax(0, 1.2fr) auto' },
                      alignItems: 'center',
                      gap: { xs: 1.5, md: 2 },
                      py: 2.5,
                      borderBottom: idx === 3 ? 'none' : '1px solid #f0f0f0',
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: '"Playfair Display", "Georgia", serif',
                        fontSize: { xs: '1.2rem', md: '1.4rem' },
                        fontWeight: 400,
                      }}
                    >
                      {p.name}
                    </Typography>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: '0.95rem',
                      }}
                    >
                      Slots:{p.slots}
                      {' '}
                      |
                      {' '}
                      Status:
                      {' '}
                      <Box
                        component="span"
                        sx={{
                          color: '#188038',
                        }}
                      >
                        {p.status}
                      </Box>
                    </Typography>
                    <Box
                      component="button"
                      sx={{
                        justifySelf: { xs: 'flex-start', md: 'flex-end' },
                        border: '1px solid #000000',
                        backgroundColor: 'transparent',
                        padding: '10px 28px',
                        fontSize: '0.75rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease, color 0.2s ease',
                        '&:hover': {
                          backgroundColor: '#000000',
                          color: '#ffffff',
                        },
                      }}
                    >
                      Show on map
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
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


