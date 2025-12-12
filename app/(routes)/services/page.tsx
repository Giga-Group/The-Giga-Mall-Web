'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore, ShoppingBag, DirectionsBus, Luggage, HelpOutline, Mosque } from '@mui/icons-material';

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'elite-personal-shopping',
    title: 'Elite Personal Shopping',
    description: 'Experience personalized shopping assistance with our elite personal shopping service. Our expert stylists will help you find the perfect items tailored to your style and preferences.',
    icon: <ShoppingBag />
  },
  {
    id: 'concierge-service',
    title: 'Concierge Service',
    description: 'Our dedicated concierge team is here to assist you with any inquiries, directions, recommendations, or special requests to make your visit to Giga Mall seamless and enjoyable.'
  },
  {
    id: 'shop-deliver',
    title: 'Shop & Deliver',
    description: 'Shop at your convenience and have your purchases delivered directly to your location. Our shop and deliver service ensures your items reach you safely and on time.'
  },
  {
    id: 'directories',
    title: 'Directories',
    description: 'Find your way around Giga Mall with our comprehensive directory services. Locate stores, restaurants, entertainment venues, and facilities with ease using our interactive directories.'
  },
  {
    id: 'wifi',
    title: 'WiFi',
    description: 'Stay connected throughout your visit with our complimentary high-speed WiFi service available throughout Giga Mall. Connect seamlessly and enjoy free internet access.'
  },
  {
    id: 'in-mall-chauffeur',
    title: 'In-Mall Chauffeur',
    description: 'Enjoy the convenience of our in-mall chauffeur service. Get assistance with your shopping bags and navigate the mall comfortably with our dedicated service.'
  },
  {
    id: 'taxi-services',
    title: 'Taxi Services',
    description: 'Need a ride? Our taxi service desk can help you arrange transportation. Conveniently located taxi services are available to take you to your next destination.'
  },
  {
    id: 'public-transport',
    title: 'Public Transport',
    description: 'Giga Mall is easily accessible via public transportation. Find information about bus routes, metro connections, and other public transport options to reach us conveniently.',
    icon: <DirectionsBus />
  },
  {
    id: 'prayer-rooms',
    title: 'Prayer Rooms',
    description: 'For the courtesy of guests, Giga Mall has multiple prayer rooms for men and women located across the destination. Prayer Rooms can be found on every level of the mall. For directions guests can approach our Concierge Desk, follow navigation on Giga Mall App or use the Touchmaps.',
    icon: <Mosque />
  },
  {
    id: 'personalized-touch',
    title: 'Personalized Touch',
    description: 'Experience personalized service tailored to your needs. Our team provides customized assistance to ensure your visit meets all your expectations and preferences.'
  },
  {
    id: 'travelers-delight',
    title: 'Travelers Delight',
    description: 'Special services for travelers including luggage storage, currency exchange, travel information, and assistance with travel-related needs to make your visit convenient.',
    icon: <Luggage />
  },
  {
    id: 'lost-found',
    title: 'Lost & Found',
    description: 'Lost something during your visit? Our Lost & Found service is here to help. Report lost items or check for found belongings at our dedicated desk.',
    icon: <HelpOutline />
  }
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | false>('prayer-rooms');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            paddingTop: { xs: '90px', md: '100px' },
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            pb: { xs: 4, md: 6, lg: 8 }
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              pt: { xs: 4, sm: 5, md: 6 },
              pb: { xs: 3, sm: 4, md: 5 }
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Playfair Display", "Georgia", serif',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.2rem' },
                fontWeight: 400,
                color: '#000000',
                marginBottom: { xs: 2, md: 3 },
                letterSpacing: '0.02em',
                lineHeight: 1.3
              }}
            >
              Discover the exceptional services available at Giga Mall.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 300,
                color: '#333333',
                lineHeight: 1.7,
                maxWidth: '800px'
              }}
            >
              Stop by the nearest Concierge Desk to enhance your shopping experience, making it smooth and truly memorable.
            </Typography>
          </Box>

          {/* Services Accordion */}
          <Box
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
              px: { xs: 2, sm: 4, md: 6, lg: 10 }
            }}
          >
            {services.map((service) => (
              <Accordion
                key={service.id}
                expanded={expanded === service.id}
                onChange={handleChange(service.id)}
                sx={{
                  boxShadow: 'none',
                  borderBottom: '1px solid #e0e0e0',
                  '&:before': {
                    display: 'none'
                  },
                  '&.Mui-expanded': {
                    margin: 0
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: '#000000' }} />}
                  sx={{
                    padding: { xs: '16px 0', md: '20px 0' },
                    minHeight: 'auto',
                    '&.Mui-expanded': {
                      minHeight: 'auto'
                    },
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                      '&.Mui-expanded': {
                        margin: 0
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 2, md: 3 },
                      width: '100%'
                    }}
                  >
                    {service.icon && (
                      <Box
                        sx={{
                          color: '#000000',
                          fontSize: { xs: '24px', md: '28px' },
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {service.icon}
                      </Box>
                    )}
                    <Typography
                      sx={{
                        fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem' },
                        fontWeight: 400,
                        color: '#000000',
                        flex: 1
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: { xs: '0 0 20px 0', md: '0 0 24px 0' },
                    paddingLeft: { xs: 0, md: service.icon ? '56px' : 0 }
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                      fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                      fontWeight: 300,
                      color: '#666666',
                      lineHeight: 1.7
                    }}
                  >
                    {service.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}

