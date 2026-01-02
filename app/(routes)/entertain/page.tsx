"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiscoverEventsOffers from "@/components/sections/DiscoverEventsOffers";
import MovieIcon from "@mui/icons-material/Movie";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RestaurantIcon from "@mui/icons-material/Restaurant";
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

export default function EntertainPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

// === TOP: Replace the single embla setup with TWO separate ones ===
const autoplayAttractions = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
const [emblaRefAttractions] = useEmblaCarousel(
  { loop: true, align: "start", dragFree: true },
  [autoplayAttractions.current]
);

const autoplayFeatured = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
const [emblaRefFeatured] = useEmblaCarousel(
  { loop: true, align: "start", dragFree: true },
  [autoplayFeatured.current]
);

  const attractions = [
    {
      title: "KidZania",
      description: "Role-play learning experiences for kids.",
      image: "/upcoming6.jpg",
      cta: "Learn More",
      link: "/kidzania",
    },
    {
      title: "Cinepax Cinema",
      description: "Watch the latest blockbusters in luxury.",
      image: "/Cinepax/c2.jpg",
      cta: "Book Tickets",
      link: "/cinema",
    },
    {
      title: "Fun City Arcade",
      description: "Games, rides & fun for all ages.",
      image: "/2.png",
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
              <source src="/Funcity3.mp4" type="video/mp4" />
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
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src="/funcity1.mp4" type="video/mp4" />
            </video>
          </Box>

          {/* Content Container */}
          <Box
            sx={{
              position: "relative",
              zIndex: 3,
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              padding: {
                xs: "20px 20px 30px",
                sm: "30px 40px 40px",
                md: "40px 60px 50px",
                lg: "50px 80px 60px",
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

        {/* ================= ATTRACTIONS & ACTIVITIES ================= */}
        <Box
          id="attractions"
          sx={{ backgroundColor: "#fdfdfd", py: { xs: 8, md: 12 } }}
        >
          <Box sx={{ maxWidth: "1600px", mx: "auto", px: { xs: 3, md: 6 } }}>
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

           {isMobile ? (
  <Box sx={{ overflow: "hidden" }} ref={emblaRefAttractions}>
    <Box sx={{ display: "flex", gap: 2, pb: 2 }}>
      {attractions.map((item) => (
        <Box
          key={item.title}
          sx={{
            flex: "0 0 80%",
            position: "relative",
            aspectRatio: "4/3",
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
              background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              borderRadius: "16px",
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
                mb: 2,
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
              // ================= DESKTOP GRID =================
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    sm: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)",
                  },
                  gap: 4,
                }}
              >
                {attractions.map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      position: "relative",
                      aspectRatio: "4/3",
                      borderRadius: "16px",
                      overflow: "hidden",
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
                          "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                        p: { xs: 2, md: 3 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#D19F3B",
                          fontFamily: '"Arvo", serif',
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.3rem",
                            md: "1.4rem",
                          },
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: '"Poppins", sans-serif',
                          fontSize: {
                            xs: "0.85rem",
                            sm: "0.9rem",
                            md: "0.95rem",
                          },
                          mb: 2,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        {/* ================= End of ATTRACTIONS & ACTIVITIES ================= */}
      
      {/* ================= FEATURED ENTERTAINMENT BRANDS ================= */}
<Box
  sx={{
    backgroundColor: "#ffffff",
    py: { xs: 8, md: 12 },
  }}
>
  <Box
    sx={{
      maxWidth: "1600px",
      mx: "auto",
      px: { xs: 3, md: 6 },
    }}
  >
    {/* Heading */}
    <Typography
      sx={{
        fontFamily: '"Arvo", serif',
        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        fontWeight: 400,
        letterSpacing: "0.08em",
        color: "#D19F3B",
        mb: { xs: 4, md: 6 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      Featured Entertainment
    </Typography>

    {isMobile ? (
      // ================= MOBILE: EMBLA CAROUSEL (same as Attractions) =================
      <Box sx={{ overflow: "hidden" }} ref={emblaRefFeatured}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            pb: 2,
          }}
        >
          {[
            {
              title: "KidZania",
              desc: "An award-winning role-play city where kids learn through play.",
              logo: "/logos/kidzania.png",
              icon: <ChildCareIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
              cta: "Learn More",
              link: "/kidzania",
            },
            {
              title: "Cinepax Cinema",
              desc: "Luxury cinema experience with the latest blockbusters.",
              logo: "/logos/cinepax.png",
              icon: <MovieIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
              cta: "Book Now",
              link: "/cinepax",
            },
            {
              title: "Fun City Arcade",
              desc: "Thrilling games, rides, and family entertainment.",
              logo: "/logos/funcity.png",
              icon: <SportsEsportsIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
              cta: "View Zone",
              link: "/fun-city",
            },
            {
              title: "Dining & Cafés",
              desc: "From gourmet meals to quick snacks for every mood.",
              logo: "/dining-sitting.jpg",
              icon: <RestaurantIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
              cta: "Explore Dining",
              link: "/dine",
            },
          ].map((item) => (
        <Box
          key={item.title}
          sx={{
            flex: "0 0 80%",
            backgroundColor: "#f9f9f9",
            borderRadius: "18px",
            p: 3,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ textAlign: "center" }}>{item.icon}</Box>

          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "1.1rem",
              color: "#222",
              textAlign: "center",
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "#555",
              textAlign: "center",
              mb: 2,
              flexGrow: 1,
            }}
          >
            {item.desc}
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Button
              component={Link}
              href={item.link}
              sx={{
                backgroundColor: "#D19F3B",
                color: "#fff",
                px: 2.5,
                py: 1,
                fontSize: "0.85rem",
                fontWeight: 400,
                fontFamily: '"Poppins", sans-serif',
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#D19F3B",
                },
              }}
            >
              {item.cta}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
) : (
      // ================= DESKTOP: ORIGINAL GRID LAYOUT (unchanged) =================
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: { xs: 4, md: 5 },
        }}
      >
        {[
          {
            title: "KidZania",
            desc: "An award-winning role-play city where kids learn through play.",
            logo: "/logos/kidzania.png",
            icon: <ChildCareIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
            cta: "Learn More",
            link: "/kidzania",
          },
          {
            title: "Cinepax Cinema",
            desc: "Luxury cinema experience with the latest blockbusters.",
            logo: "/logos/cinepax.png",
            icon: <MovieIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
            cta: "Book Now",
            link: "/cinepax",
          },
          {
            title: "Fun City Arcade",
            desc: "Thrilling games, rides, and family entertainment.",
            logo: "/logos/funcity.png",
            icon: <SportsEsportsIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
            cta: "View Zone",
            link: "/fun-city",
          },
          {
            title: "Dining & Cafés",
            desc: "From gourmet meals to quick snacks for every mood.",
            logo: "/dining-sitting.jpg",
            icon: <RestaurantIcon fontSize="large" sx={{ color: "#D19F3B", mb: 2 }} />,
            cta: "Explore Dining",
            link: "/dine",
          },
        ].map((item, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: "18px",
              p: { xs: 3, md: 4 },
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.12)",
              },
            }}
          >
            {item.icon}

            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                color: "#222",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                lineHeight: 1.6,
                color: "#555",
                mb: 3,
              }}
            >
              {item.desc}
            </Typography>

            <Button
              component={Link}
              href={item.link}
              sx={{
                backgroundColor: "#D19F3B",
                color: "#fff",
                px: { xs: 2.5, md: 3 },
                py: { xs: 1, md: 1.25 },
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                fontWeight: 400,
                fontFamily: '"Poppins", sans-serif',
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#D19F3B",
                },
              }}
            >
              {item.cta}
            </Button>
          </Box>
        ))}
      </Box>
    )}
  </Box>
</Box>
{/* ================= END FEATURED ENTERTAINMENT ================= */}
        {/* ================= EVENTS & SPECIAL OFFERS ================= */}
        <DiscoverEventsOffers />
        {/* ================= PLAN YOUR FUN DAY ================= */}
        <Box
          sx={{
            backgroundColor: "#fdfdfd",
            py: { xs: 10, md: 14 },
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
                mb: 8,
              }}
            >
              {[
                {
                  title: "Opening Hours",
                  icon: <AccessTimeIcon fontSize="large" />,
                  link: "/opening-hours",
                },
                {
                  title: "Parking Info",
                  icon: <LocalParkingIcon fontSize="large" />,
                  link: "/opening-hours?tab=parking",
                },
                {
                  title: "Location & Map",
                  icon: <LocationOnIcon fontSize="large" />,
                  link: "/opening-hours?tab=getting-here",
                },
                {
                  title: "Dine",
                  icon: <RestaurantIcon fontSize="large" />,
                  link: "/dine",
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
                mb: 8,
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
                  steps: ["Dinner", "Cinepax Show", "Dessert & Coffee"],
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

            {/* CTA */}
            <Box sx={{ textAlign: "center" }}>
              <Button
                component={Link}
                href="/opening-hours"
                sx={{
                  backgroundColor: "#D19F3B",
                  color: "#fff",
                  px: { xs: 5, md: 6 },
                  py: { xs: 1.5, md: 1.75 },
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1rem" },
                  border: "2px solid #D19F3B",
                  fontWeight: 600,
                  fontFamily: '"Poppins", sans-serif',
                  textTransform: "none",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  transition:
                    "all 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#D19F3B",
                    borderColor: "#D19F3B",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                Plan Your Visit
              </Button>
            </Box>
          </Box>
        </Box>
        {/* ================= END PLAN YOUR FUN DAY ================= */}

        {/* ================= FAMILY MOMENTS & VISIT INFO ================= */}
        <Box
          sx={{
            position: "relative",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* Background Image */}
          <Image
            src="/Cinepax/c1.jpg"
            alt="Family Moments"
            fill
            style={{ objectFit: "cover" }}
          />

          {/* Info Box */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              maxWidth: { xs: "90%", md: "600px" },
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(10px)",
              p: { xs: 3, md: 6 },
              ml: { xs: "auto", md: 8 },
              mr: { xs: "auto", md: 0 },
              borderRadius: "20px",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.8rem" },
                mb: 1,
                textAlign: { xs: "center", md: "left" },
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
                textAlign: { xs: "center", md: "left" },
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
                textAlign: { xs: "center", md: "left" },
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
                  fontSize: "inherit",
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
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Button
                component={Link}
                href="/opening-hours"
                sx={{
                  backgroundColor: "#D19F3B",
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#D19F3B",
                    border: "2px solid #D19F3B",
                  },
                }}
              >
                Start Your Family Day
              </Button>
            </Box>
          </Box>
        </Box>
      </main>

      <Footer />
    </>
  );
}
