"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ExpandMore,
  ShoppingBag,
  DirectionsBus,
  Luggage,
  HelpOutline,
  Mosque,
  AccessTime,
  LocationOn,
  LocalParking,
} from "@mui/icons-material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import NearMeIcon from "@mui/icons-material/NearMe";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const services: Service[] = [
  {
    id: "opening-hours",
    title: "Opening Hours",
    description:
      "Giga Mall is open daily from 10 AM to 12 AM. We operate extended hours on weekends and holidays. For specific holiday schedules and special events, please check our website or contact our concierge desk.",
    icon: <AccessTime />,
  },
  {
    id: "getting-here",
    title: "Getting Here",
    description:
      "Giga Mall is conveniently located in DHA Islamabad and is easily accessible by car, metro, bus, or taxi. The nearest metro station is within walking distance with a temperature-controlled travelator link. Multiple bus routes serve the area, and we offer ample parking facilities.",
    icon: <LocationOn />,
  },
  {
    id: "parking",
    title: "Parking",
    description:
      "Giga Mall offers convenient parking facilities with over 5,000 parking spaces available across multiple levels. The parking areas are well-lit, secure, and easily accessible. Valet parking services are also available for your convenience.",
    icon: <LocalParking />,
  },
  {
    id: "elite-personal-shopping",
    title: "Elite Personal Shopping",
    description:
      "Experience personalized shopping assistance with our elite personal shopping service. Our expert stylists will help you find the perfect items tailored to your style and preferences.",
    icon: <ShoppingBag />,
  },
  {
    id: "concierge-service",
    title: "Concierge Service",
    description:
      "Our dedicated concierge team is here to assist you with any inquiries, directions, recommendations, or special requests to make your visit to Giga Mall seamless and enjoyable.",
    icon: <SupportAgentIcon />,
  },
  {
    id: "shop-deliver",
    title: "Shop & Deliver",
    description:
      "Shop at your convenience and have your purchases delivered directly to your location. Our shop and deliver service ensures your items reach you safely and on time.",
    icon: <DeliveryDiningIcon />,
  },
  {
    id: "directories",
    title: "Directories",
    description:
      "Find your way around Giga Mall with our comprehensive directory services. Locate stores, restaurants, entertainment venues, and facilities with ease using our interactive directories.",
    icon: <NearMeIcon />,
  },
  {
    id: "wifi",
    title: "WiFi",
    description:
      "Stay connected throughout your visit with our complimentary high-speed WiFi service available throughout Giga Mall. Connect seamlessly and enjoy free internet access.",
    icon: <WifiIcon />,
  },
  {
    id: "in-mall-chauffeur",
    title: "In-Mall Chauffeur",
    description:
      "Enjoy the convenience of our in-mall chauffeur service. Get assistance with your shopping bags and navigate the mall comfortably with our dedicated service.",
    icon: <AirportShuttleIcon />,
  },
  {
    id: "taxi-services",
    title: "Taxi Services",
    description:
      "Need a ride? Our taxi service desk can help you arrange transportation. Conveniently located taxi services are available to take you to your next destination.",
    icon: <LocalTaxiIcon />,
  },
  {
    id: "public-transport",
    title: "Public Transport",
    description:
      "Giga Mall is easily accessible via public transportation. Find information about bus routes, metro connections, and other public transport options to reach us conveniently.",
    icon: <DirectionsBus />,
  },
  {
    id: "prayer-rooms",
    title: "Prayer Rooms",
    description:
      "For the courtesy of guests, Giga Mall has multiple prayer rooms for men and women located across the destination. Prayer Rooms can be found on every level of the mall. For directions guests can approach our Concierge Desk, follow navigation on Giga Mall App or use the Touchmaps.",
    icon: <Mosque />,
  },
  {
    id: "personalized-touch",
    title: "Personalized Touch",
    description:
      "Experience personalized service tailored to your needs. Our team provides customized assistance to ensure your visit meets all your expectations and preferences.",
    icon: <AutoAwesomeIcon />,
  },
  {
    id: "travelers-delight",
    title: "Travelers Delight",
    description:
      "Special services for travelers including luggage storage, currency exchange, travel information, and assistance with travel-related needs to make your visit convenient.",
    icon: <Luggage />,
  },
  {
    id: "lost-found",
    title: "Lost & Found",
    description:
      "Lost something during your visit? Our Lost & Found service is here to help. Report lost items or check for found belongings at our dedicated desk.",
    icon: <HelpOutline />,
  },
];

// Helper function to get image path from visitor guide folder
const getVisitorGuideImagePath = (imageName: string) => {
  return `/visitor guide/${imageName}`.split('/').map(segment => encodeURIComponent(segment)).join('/');
};

const serviceHighlights = [
  {
    description:
      "Kindly wear respectful clothing. Shoulders and knees should be covered.",
    image: getVisitorGuideImagePath("service-pic-1.png"),
  },
  {
    description: "No overt displays of affection to avoid public attention",
    image: getVisitorGuideImagePath("service-pic-2.png"),
  },
  {
    description: "Pet-free Mall.",
    image: getVisitorGuideImagePath("service-pic-3.png"),
  },
  {
    description: "Smoking in designated areas including E-cigarette",
    image: getVisitorGuideImagePath("service-pic-4.png"),
  },
  {
    description: "Safe practices only",
    image: getVisitorGuideImagePath("service-pic-5.png"),
  },
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<string | false>("opening-hours");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Embla carousel for mobile
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: "#ffffff",
            pb: { xs: 4, md: 6, lg: 8 },
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              maxWidth: "1400px",
              margin: "0 auto",
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              pt: { xs: 4, sm: 5, md: 6 },
              pb: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.2rem",
                  md: "2.8rem",
                  lg: "3.2rem",
                },
                fontWeight: 400,
                color: "#000000",
                marginBottom: { xs: 2, md: 3 },
                letterSpacing: "0.02em",
                lineHeight: 1.3,
              }}
            >
              Visitor&apos;s Guide to Giga Mall.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: 300,
                color: "#333333",
                lineHeight: 1.7,
                maxWidth: "800px",
              }}
            >
              Discover essential information, services, and guidelines to make your visit to Giga Mall smooth and truly memorable.
            </Typography>
          </Box>

          {/* Services Accordion */}
          <Box
            sx={{
              maxWidth: "1400px",
              margin: "0 auto",
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
            }}
          >
            {services.map((service) => (
              <Accordion
                key={service.id}
                expanded={expanded === service.id}
                onChange={handleChange(service.id)}
                sx={{
                  boxShadow: "none",
                  borderBottom: "1px solid #e0e0e0",
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: "#000000" }} />}
                  sx={{
                    padding: { xs: "16px 0", md: "20px 0" },
                    minHeight: "auto",
                    "&.Mui-expanded": {
                      minHeight: "auto",
                    },
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 2, md: 3 },
                      width: "100%",
                    }}
                  >
                    {service.icon && (
                      <Box
                        sx={{
                          color: "#000000",
                          fontSize: { xs: "24px", md: "28px" },
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {service.icon}
                      </Box>
                    )}
                    <Typography
                      sx={{
                        fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                        fontSize: {
                          xs: "1rem",
                          sm: "1.1rem",
                          md: "1.2rem",
                          lg: "1.3rem",
                        },
                        fontWeight: 400,
                        color: "#000000",
                        flex: 1,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: { xs: "0 0 20px 0", md: "0 0 24px 0" },
                    paddingLeft: { xs: 0, md: service.icon ? "56px" : 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                      fontWeight: 300,
                      color: "#666666",
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Services Highlights */}
          <Box
            sx={{
              maxWidth: "1400px",
              margin: "0 auto",
              px: { xs: 2, sm: 4, md: 6, lg: 10 },
              mt: { xs: 6, md: 8 },
            }}
          >
            {isMobile ? (
              // Mobile carousel
              <Box ref={emblaRef} sx={{ overflow: "hidden" }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {serviceHighlights.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: "0 0 80%", // slide width
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: "12px",
                        py: 2,
                        // backgroundColor: "#f9f9f9",
                      }}
                    >
                      {/* Image */}
                      <Box
                        sx={{
                          width: 140,
                          height: 140,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          // mb: 0.5,
                        }}
                      >
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.description}
                          sx={{
                            width: "50%",
                            height: "50%",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </Box>

                      {/* Description */}
                      <Typography
                        sx={{
                          fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                          fontSize: "0.95rem",
                          fontWeight: 300,
                          color: "#555555",
                          lineHeight: 1.6,
                          maxWidth: 200,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : (
              // Grid for tablet/desktop
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(5, 1fr)",
                  },
                  gap: { xs: 3, md: 4 },
                  justifyItems: "center",
                }}
              >
                {serviceHighlights.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* Image container */}
                    <Box
                      sx={{
                        width: { xs: 120, sm: 140, md: 160 },
                        height: { xs: 120, sm: 140, md: 160 },
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // mb: 1,
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.description}
                        sx={{
                          width: "50%",
                          height: "50%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </Box>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                        fontSize: "0.95rem",
                        fontWeight: 300,
                        color: "#555555",
                        lineHeight: 1.6,
                        maxWidth: "220px",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
