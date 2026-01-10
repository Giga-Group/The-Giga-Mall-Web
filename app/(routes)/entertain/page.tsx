"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiscoverEventsOffers from "@/components/sections/DiscoverEventsOffers";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";

import {
  useTheme,
  useMediaQuery,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion} from "framer-motion";
import { Suspense } from "react";
import { FilterProvider } from "@/lib/contexts/FilterContext";
import SearchAndFilter from "@/components/sections/SearchAndFilter";
import StoreGrid from "@/components/sections/StoreGrid";
import type { Store } from "@/components/sections/StoreGrid/StoreGrid";

// Entertainment items for grid display - converted to Store format
const entertainmentItems: Store[] = [
  {
    name: "Cinepax Cinema",
    slug: "cinepax",
    logo: "/logo/Vrkings.jpg", // Placeholder - update with actual logo if available
    category: "cinema",
  },
  {
    name: "Bowling Alley",
    slug: "bowling-alley",
    category: "sports",
  },
  {
    name: "VI Rides Arcade",
    slug: "vi-rides",
    logo: "/logo/Virides.jpg",
    category: "arcade",
  },
  {
    name: "VR Kings",
    slug: "vr-kings",
    logo: "/logo/Vrkings.jpg",
    category: "arcade",
  },
  {
    name: "Funcity",
    slug: "funcity",
    category: "family",
  },
  {
    name: "SpaceCraft",
    slug: "spacecraft",
    category: "cinema",
  },
];

export default function EntertainPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // === TOP: Replace the single embla setup with TWO separate ones ===
  const autoplayAttractions = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [emblaRefAttractions] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplayAttractions.current]
  );

  // const autoplayFeatured = useRef(
  //   Autoplay({ delay: 3000, stopOnInteraction: false })
  // );
  // const [emblaRefFeatured] = useEmblaCarousel(
  //   { loop: true, align: "start", dragFree: true },
  //   [autoplayFeatured.current]
  // );

  const attractions = [
    {
      title: "Bowling",
      description: "Role-play learning experiences for kids.",
      image: "/Entertain/bowling 3.jpg",
      cta: "Learn More",
      link: "/kidzania",
    },
    {
      title: "SpaceCraft",
      description: "Watch the latest blockbusters in luxury.",
      image: "/Entertain/SpaceCraft Horizontal.jpg",
      cta: "Book Tickets",
      link: "/cinema",
    },
    {
      title: "Vi Rides",
      description: "Games, rides & fun for all ages.",
      image: "/Entertain/Vi Rides Horizontal.jpg",
      cta: "View Arcade Zone",
      link: "/fun-city",
    },
    {
      title: "VR Kings",
      description: "Games, rides & fun for all ages.",
      image: "/Entertain/VR Kings Horizontal.jpg",
      cta: "View Arcade Zone",
      link: "/fun-city",
    },
  ];

  const attractionsmv = [
    {
      title: "Bowling",
      description: "Role-play learning experiences for kids.",
      image: "/Entertain/bowling 4.jpg",
      cta: "Learn More",
      link: "/kidzania",
    },
    {
      title: "SpaceCraft",
      description: "Watch the latest blockbusters in luxury.",
      image: "/Entertain/SpaceCraft Vertical.jpg",
      cta: "Book Tickets",
      link: "/cinema",
    },
    {
      title: "VI Rides",
      description: "Games, rides & fun for all ages.",
      image: "/Entertain/Vi Rides Vertical.jpg",
      cta: "View Arcade Zone",
      link: "/fun-city",
    },
    {
      title: "VR Kings",
      description: "Games, rides & fun for all ages.",
      image: "/Entertain/VR Kings Vertical.jpg",
      cta: "View Arcade Zone",
      link: "/fun-city",
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        {/* ================= HERO SECTION ================= */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "95vh", sm: "65vh", md: "65vh", lg: "75vh" },
            marginTop: { xs: "50px", md: 0 },
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "#000",
          }}
        >
          {/* Mobile Background Video */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)",
                zIndex: 2,
              },
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/video/Funcity Reel mobile view.mp4" type="video/mp4" />
            </video>
          </Box>

          {/* Desktop Background Video */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)",
                zIndex: 2,
              },
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/video/funcity1.mp4" type="video/mp4" />
            </video>
          </Box>

          {/* Content Container */}
          <Box
            sx={{
              position: "relative",
              zIndex: 3, 
              width: "100%",
              maxWidth: "1400px",
              margin: {
                xs: "0 auto",
                sm: "0 auto",
                md: "0 auto",
                lg: "0 120px",
                xl: "0 120px",
              },
              padding: {
                xs: "20px 20px 30px", 
                sm: "30px 40px 40px",
                md: "0px 0px 50px",
                lg: "0px 0px 60px",
              },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                fontWeight: 700,
                color: "#D19F3B",
                letterSpacing: "0.12em",
                lineHeight: 1.2,
                marginBottom: { xs: "8px", md: "0px" },
              }}
            >
              ENTERTAIN & EXPLORE
            </Typography>

            {/* CTA Button */}
            <Box sx={{ marginTop: { xs: 2, md: 0 } }}>
              <Button
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  backgroundColor: "#D19F3B",
                  color: "#ffffffff",
                  px: { xs: 4, md: 6 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  borderRadius: "6px",
                  fontWeight: 600,
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#D19F3B",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(209,159,59,0.3)",
                  },
                }}
              >
                Explore Attractions
              </Button>
            </Box>
          </Box>
        </Box>
        {/* ================= END HERO SECTION ================= */}
        
       {/* ================= ENTERTAINMENT & ATTRACTIONS GRID SECTION ================= */}
<Box
  sx={{
    backgroundColor: "#ffffff",
    position: "relative",
  }}
>
  {/* Section Heading */}
  <Box
    sx={{
      maxWidth: "1400px",
      margin: "0 auto",
      px: { xs: 2, sm: 4, md: 6, lg: 10 },
      pt: { xs: 3, sm: 4, md: 5 },
      pb: { xs: 2, sm: 3 },
    }}
  >
    <Typography
      sx={{
        fontFamily: '"Arvo", serif',
        fontSize: { xs: "1.8rem", md: "2.5rem" },
        color: "#D19F3B",
        textAlign: "center",
      }}
    >
      Entertain Directory
    </Typography>
  </Box>

  {/* FilterProvider wrapper for search and filter functionality */}
  <FilterProvider>
    {/* Search and Filter Section - Full Width */}
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading filters...</Box>}>
        <SearchAndFilter 
          pageType="shop"
          categories={[
            { value: '', label: 'All Categories' },
            { value: 'cinema', label: 'Cinema' },
            { value: 'arcade', label: 'Arcade & Gaming' },
            { value: 'sports', label: 'Sports & Recreation' },
            { value: 'family', label: 'Family Entertainment' }
          ]}
          subcategories={[
            { value: '', label: 'All Subcategories' }
          ]}
          searchPlaceholder="Search for entertainment or attractions"
          offersLabel="Show entertainment with offers only"
        />
      </Suspense>
    </Box>

    {/* Store Grid Section */}
    <Suspense fallback={<Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>Loading entertainment...</Box>}>
      <StoreGrid items={entertainmentItems} basePath="/entertain" />
    </Suspense>
  </FilterProvider>
</Box>
{/* ================= END ENTERTAINMENT & ATTRACTIONS GRID SECTION ================= */}
       {/* ================= ATTRACTIONS & ACTIVITIES ================= */}
<Box
  id="attractions"
  sx={{
    backgroundColor: "#fdfdfd",
    py: { xs: 8, md: 8 },
    overflow: "hidden",
  }}
>
  <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 3, md: 6 } }}>
    {/* HEADING - WITH ZOOM ANIMATION - ADD A KEY HERE */}
    <motion.div
      key="attractions-heading" // ADD THIS
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Typography
        sx={{
          fontFamily: '"Arvo", serif',
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
          color: "#D19F3B",
          mb: { xs: 4, md: 6 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Attractions & Activities
      </Typography>
    </motion.div>
    {/* ... rest of your attractions section code ... */}

            {/* ================= MOBILE CAROUSEL ================= */}
            {isMobile ? (
              <Box sx={{ overflow: "hidden" }} ref={emblaRefAttractions}>
                <Box sx={{ display: "flex", gap: 2, pb: 2 }}>
                  {attractionsmv.map((item) => (
                    <Box
                      key={item.title}
                      sx={{
                        flex: "0 0 80%",
                        position: "relative",
                        aspectRatio: "4/6",
                        borderRadius: "16px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover", borderRadius: "16px" }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#D19F3B",
                            fontFamily: '"Arvo", serif',
                            fontSize: "1.2rem",
                            mb: 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: "0.85rem",
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : (
              /* ================= DESKTOP SPLIT LAYOUT WITH ANIMATIONS ================= */
              <Box
                sx={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "1fr 1.3fr 1fr",
                  gap: 5,
                  alignItems: "center",
                  minHeight: "450px",
                }}
              >
                {/* LEFT IMAGES WITH SLIDE-IN ANIMATION */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {attractions.slice(0, 2).map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      style={{ width: "100%" }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: 460,
                          aspectRatio: "6/3.9",
                          overflow: "hidden",
                          borderRadius: "0 50% 50% 0",
                          boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                          cursor: "pointer",

                          "&:hover .overlay": {
                            transform: "scaleX(1)",
                          },
                          "&:hover .overlayText": {
                            opacity: 1,
                            transform: "translateX(0)",
                          },
                          "&:hover img": {
                            transform: "scale(1.08)",
                          },
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.6s ease",
                          }}
                        />

                        {/* OVERLAY */}
                        <Box
                          className="overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.45)",
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.45s ease",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            className="overlayText"
                            sx={{
                              color: "#fff",
                              textAlign: "center",
                              opacity: 0,
                              transform: "translateX(-20px)",
                              transition: "all 0.4s ease 0.15s",
                              px: 3,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: '"Arvo", serif',
                                fontSize: "1.6rem",
                                fontWeight: "600",
                                color: "#D19F3B",
                                mb: 1,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: "1rem" }}>
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                {/* CENTER SPACE - EMPTY FOR OVERLAY POSITIONING */}
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* This space is left empty for the text overlay */}
                </Box>

                {/* RIGHT IMAGES WITH SLIDE-IN ANIMATION */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {attractions.slice(2, 4).map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      style={{ width: "100%" }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: 460,
                          aspectRatio: "6/3.9",
                          overflow: "hidden",
                          borderRadius: "50% 0 0 50%",
                          boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
                          cursor: "pointer",

                          "&:hover .overlay": {
                            transform: "scaleX(1)",
                          },
                          "&:hover .overlayText": {
                            opacity: 1,
                            transform: "translateX(0)",
                          },
                          "&:hover img": {
                            transform: "scale(1.08)",
                          },
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.6s ease",
                          }}
                        />

                        {/* OVERLAY */}
                        <Box
                          className="overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.45)",
                            transform: "scaleX(0)",
                            transformOrigin: "right",
                            transition: "transform 0.45s ease",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            className="overlayText"
                            sx={{
                              color: "#fff",
                              textAlign: "center",
                              opacity: 0,
                              transform: "translateX(20px)",
                              transition: "all 0.4s ease 0.15s",
                              px: 3,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: '"Arvo", serif',
                                fontSize: "1.4rem",
                                fontWeight: "600",
                                color: "#D19F3B",
                                mb: 1,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: "0.9rem" }}>
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                {/* CENTER TEXT AREA - FIXED POSITIONING WITH ANIMATION */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                    width: "55%",
                    maxWidth: "900px",
                    minHeight: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: { md: 8, lg: 12 },
                    py: { md: 8, lg: 10 },
                  }}
                >
                  {/* Side Gradient to hide edges */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 1,
                      pointerEvents: "none",
                      background: `
                linear-gradient(to right, rgba(227, 230, 28, 0) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.0) 100%)
              `,
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: "5%",
                      background: `
                radial-gradient(circle, rgba(209,159,59,0.15) 0%, transparent 70%)
              `,
                      filter: "blur(50px)",
                      zIndex: 1,
                    }}
                  />

                  {/* Main Text Container with Zoom Animation */}
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{
                      position: "relative",
                      zIndex: 2,
                      width: "100%",
                      maxWidth: "700px",
                      margin: "0 auto",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        width: "100%",
                        p: { md: 6, lg: 8 },
                        borderRadius: "24px",
                        border: "none",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Poppins", sans-serif',
                          fontSize: { md: "1.4rem", lg: "1.4rem" },
                          color: "#D19F3B",
                          lineHeight: 1.9,
                          letterSpacing: "0.4px",
                          fontWeight: 400,
                          mb: 3,
                        }}
                      >
                        Experience cinema, arcades, kids zones, and
                        unforgettable moments — thoughtfully designed to bring
                        families and friends together at
                      </Typography>

                      <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ display: "block" }}
                      >
                        <Box
                          component="span"
                          sx={{
                            color: "#D19F3B",
                            fontFamily: '"Arvo", serif',
                            fontWeight: 700,
                            fontSize: { md: "1.8rem", lg: "2.2rem" },
                            display: "block",
                            mt: 3,
                            textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                          }}
                        >
                          Giga Mall
                        </Box>
                      </motion.div>
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        {/* ================= END ATTRACTIONS & ACTIVITIES ================= */}
        {/* ================= EVENTS & SPECIAL OFFERS ================= */}
        <DiscoverEventsOffers />
        {/* ================= PLAN YOUR FUN DAY ================= */}
        <Box
          sx={{
            backgroundColor: "#fdfdfd",
            py: { xs: 10, md: 5 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Optional decorative background shapes */}
          <Box
            sx={{
              position: "absolute",
              top: -50,
              right: -100,
              width: 300,
              height: 300,
              bgcolor: "#FFE6B3",
              borderRadius: "50%",
              opacity: 0.3,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "relative",
              maxWidth: "1600px",
              mx: "auto",
              px: { xs: 3, md: 6 },
              zIndex: 1,
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "#D19F3B",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Plan Your Fun Day
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                color: "#555",
                maxWidth: "720px",
                mb: 6,
                mx: { xs: "auto", md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Make the most of your visit with easy planning, helpful tips, and
              tailored experiences for every group.
            </Typography>

            {/* Info Blocks */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 4,
                mb: 4,
              }}
            >
              {[
                {
                  title: "Opening Hours",
                  icon: <AccessTimeIcon fontSize="large" />,
                  link: "/opening-hours",
                },
                {
                  title: "Location & Map",
                  icon: <LocationOnIcon fontSize="large" />,
                  link: "/opening-hours?tab=getting-here",
                },
                {
                  title: "Tickets & Pricing",
                  icon: <ConfirmationNumberIcon fontSize="large" />, // example icon
                  link: "/cinepax",
                },
                {
                  title: "Events & Shows",
                  icon: <EventIcon fontSize="large" />, // example icon
                  link: "/events",
                },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  component={Link}
                  href={item.link}
                  sx={{
                    textDecoration: "none",
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    p: { xs: 3, md: 4 },
                    textAlign: "center",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.03)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2, color: "#D19F3B" }}>{item.icon}</Box>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                      fontWeight: 600,
                      color: "#222",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Mini Itineraries */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(3, 1fr)",
                },
                gap: 5,
              }}
            >
              {[
                {
                  title: "Family with Kids (3–8)",
                  steps: ["KidZania Play", "Family Lunch", "Sweet Treats"],
                },
                {
                  title: "Teens & Friends",
                  steps: [
                    "Arcade Battles",
                    "Food Court Hangout",
                    "Movie Night",
                  ],
                },
                {
                  title: "Movie Night",
                  steps: ["Cinepax Show", "Dessert & Coffee"],
                },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",
                    p: { xs: 3, md: 4 },
                    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Arvo", serif',
                      fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
                      color: "#D19F3B",
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {item.steps.map((step, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.9rem",
                          md: "0.95rem",
                        },
                        color: "#444",
                        mb: 1,
                      }}
                    >
                      {i + 1}. {step}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* ================= END PLAN YOUR FUN DAY ================= */}
        {/* ================= FAMILY MOMENTS & VISIT INFO ================= */}
        <Box
          sx={{
            position: "relative",
            minHeight: "90vh",
            backgroundColor: "#f5f5f5",
            pt: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-end", md: "center" }, // bottom on mobile, center on desktop
          }}
        >
          {/* Background Image */}
          <Image
            src="/Entertain/Funcity Horizontal.jpg"
            alt="Family Moments"
            fill
            style={{ objectFit: "cover" }}
          />

          {/* Inner container */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
              alignItems: { xs: "flex-end", md: "center" },
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
              px: { xs: 2, md: 0 },
              gap: { xs: 0, md: 8 },
            }}
          >
            {/* Info Box */}
            <Box
              sx={{
                maxWidth: { xs: "90%", md: "500px" },
                p: { xs: 3, md: 6 },
                ml: { xs: "auto", md: 8 },
                mr: { xs: "auto", md: 0 },
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.95)",
                WebkitMaskImage: {
                  xs: "none",
                  md: `linear-gradient(
            to right,
            black 0%,
            black 82%,
            rgba(0,0,0,0.95) 86%,
            rgba(0,0,0,0.75) 90%,
            rgba(0,0,0,0.45) 94%,
            rgba(0,0,0,0.15) 97%,
            transparent 100%
          )`,
                },
                maskImage: {
                  xs: "none",
                  md: `linear-gradient(
            to right,
            black 0%,
            black 82%,
            rgba(0,0,0,0.95) 86%,
            rgba(0,0,0,0.75) 90%,
            rgba(0,0,0,0.45) 94%,
            rgba(0,0,0,0.15) 97%,
            transparent 100%
          )`,
                },
                backdropFilter: "blur(10px)",
                overflow: "hidden",
                mb: { xs: 4, md: 0 }, // spacing below text on mobile
              }}
            >
              {/* Heading */}
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: { xs: "1.8rem", sm: "2rem", md: "2.8rem" },
                  mb: 1,
                  color: "#D19F3B",
                  fontWeight: 550,
                  textAlign: { xs: "left", md: "left" },
                }}
              >
                Family Moments at Giga Mall
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  color: "#D19F3B",
                  fontWeight: 600,
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  mb: 2,
                  textAlign: { xs: "left", md: "left" },
                }}
              >
                Fun, Joy & Togetherness
              </Typography>

              {/* Body Text */}
              <Typography
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                  mb: 3,
                  color: "#444",
                  textAlign: { xs: "left", md: "left" },
                }}
              >
                Enjoy cinema, games, dining, and unforgettable experiences
                designed for the whole family.
              </Typography>

              {/* Visit Info Links */}
              <Stack spacing={1} mb={3}>
                <Link
                  href="/opening-hours"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#222",
                    textDecoration: "none",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      color: "#D19F3B",
                      fontSize: { xs: 20, sm: 22, md: 24 },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                    }}
                  >
                    Opening Hours
                  </Typography>
                </Link>

                <Link
                  href="/opening-hours?tab=parking"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#222",
                    textDecoration: "none",
                  }}
                >
                  <LocalParkingIcon
                    sx={{
                      color: "#D19F3B",
                      fontSize: { xs: 20, sm: 22, md: 24 },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                    }}
                  >
                    Parking Information
                  </Typography>
                </Link>

                <Link
                  href="/opening-hours?tab=getting-here"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#222",
                    textDecoration: "none",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      color: "#D19F3B",
                      fontSize: { xs: 20, sm: 22, md: 24 },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
                    }}
                  >
                    Location & Map
                  </Typography>
                </Link>
              </Stack>

              {/* CTA */}
              <Box sx={{ textAlign: { xs: "left", md: "left" } }}>
                <Button
                  component={Link}
                  href="/opening-hours"
                  sx={{
                    backgroundColor: "#D19F3B",
                    color: "#fff",
                    border: "1px solid #D19F3B",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#D19F3B",
                      border: "1px solid #D19F3B",
                    },
                  }}
                >
                  Start Your Family Day
                </Button>
              </Box>
            </Box>

            {/* ================= Desktop Cards ================= */}
            <Box
              sx={{
                display: { xs: "none", md: "grid" },
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 4,
                position: "absolute",
                bottom: 0,
                right: 56,
                zIndex: 2,
              }}
            >
              {[
                {
                  title: "Cinema",
                  subtitle: "Latest Blockbusters",
                  image: "/Entertain/SpaceCraft Horizontal.jpg",
                },
                {
                  title: "Dining",
                  subtitle: "Family Dining",
                  image: "/Entertain/SpaceCraft Horizontal.jpg",
                },
                {
                  title: "Play Area",
                  subtitle: "Kids Adventure",
                  image: "/Entertain/SpaceCraft Horizontal.jpg",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    width: 260,
                    height: 240,
                    borderRadius: "24px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",

                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 28px 70px rgba(0,0,0,0.38)",
                    },

                    "&:hover .overlay": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 70%)",
                    }}
                  />

                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      px: 3,
                      pb: 3,
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: "#fff",
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </>
  );
}
