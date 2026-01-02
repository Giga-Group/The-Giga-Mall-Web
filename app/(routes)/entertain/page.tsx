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
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function EntertainPage() {
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

            {/* Description */}
            {/* <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px" },
                lineHeight: { xs: 1.6, md: 1.7 },
                color: "#ffffff",
                fontWeight: 400,
                maxWidth: { xs: "100%", md: "720px", lg: "800px" },
                opacity: 0.95,
              }}
            >
              Dive into an unforgettable experience with world-class cinema,
              award-winning family adventures, thrilling fun zones, and
              exquisite dining — all under one roof at Islamabad's premier
              entertainment destination.
            </Typography> */}

            {/* Tags: hidden on mobile */}
            {/* <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              sx={{
                marginTop: { xs: 1, md: 2 },
                display: { xs: "none", md: "flex" },
              }}
            >
              {["CINEMA", "FAMILY FUN", "ADVENTURE", "SAFE & SECURE"].map(
                (item) => (
                  <Box
                    key={item}
                    sx={{
                      border: "1px solid rgba(209,159,59,0.6)",
                      color: "#D19F3B",
                      px: 3,
                      py: 1,
                      fontSize: "0.8rem",
                      letterSpacing: "0.22em",
                      fontFamily: '"Jost", sans-serif',
                      borderRadius: "999px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(209,159,59,0.1)",
                        borderColor: "#D19F3B",
                      },
                    }}
                  >
                    {item}
                  </Box>
                )
              )}
            </Stack> */}

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
          <Box sx={{ maxWidth: "1600px", mx: "auto", px: 4 }}>
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2.2rem", md: "3.2rem" },
                color: "#D19F3B",
                mb: 6,
              }}
            >
              Attractions & Activities
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
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
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#D19F3B",
                        fontFamily: '"Arvo", serif',
                        fontSize: "1.4rem",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "0.95rem",
                        fontFamily: '"Poppins", sans-serif',
                        mb: 2,
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Button
                      component={Link}
                      href={item.link}
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        fontFamily: '"Poppins", sans-serif',
                        backgroundColor: "#D19F3B",
                        color: "#fff",
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
        </Box>

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
        fontSize: { xs: "2rem", md: "3rem" },
        fontWeight: 400,
        letterSpacing: "0.08em",
        color: "#D19F3B",
        mb: { xs: 4, md: 6 },
      }}
    >
      Featured Entertainment
    </Typography>

    {/* Brand Tiles */}
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
      p: 4,
      textAlign: "center",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.12)",
      },
    }}
  >
    {/* Render the Icon */}
    {item.icon}

    <Typography
      sx={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: "1.3rem",
        color: "#222",
        mb: 1,
      }}
    >
      {item.title}
    </Typography>

    <Typography
      sx={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: "0.95rem",
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
        px: 3,
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
        fontSize: { xs: "2.2rem", md: "3rem" },
        fontWeight: 400,
        letterSpacing: "0.05em",
        color: "#D19F3B",
        mb: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      Plan Your Fun Day
    </Typography>

    <Typography
      sx={{
        fontFamily: '"Jost", sans-serif',
        fontSize: "1rem",
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
        { title: "Opening Hours", icon: <AccessTimeIcon fontSize="large" />, link: "/opening-hours" },
        { title: "Parking Info", icon: <LocalParkingIcon fontSize="large" />, link: "/opening-hours?tab=parking" },
        { title: "Location & Map", icon: <LocationOnIcon fontSize="large" />, link: "/opening-hours?tab=getting-here" },
        { title: "Dine", icon: <RestaurantIcon fontSize="large" />, link: "/dine" },
      ].map((item, idx) => (
        <Box
          key={idx}
          component={Link}
          href={item.link}
          sx={{
            textDecoration: "none",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            p: 4,
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
              fontSize: "1rem",
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
          steps: ["Arcade Battles", "Food Court Hangout", "Movie Night"],
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
            p: 4,
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
              fontSize: "1.25rem",
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
                fontSize: "0.95rem",
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
          px: 6,
          py: 1.75,
          fontSize: "1rem",
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
      maxWidth: "600px",
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(10px)",
      p: { xs: 4, md: 6 },
      ml: { xs: 2, md: 8 },
      borderRadius: "20px",
    }}
  >
    <Typography
      sx={{
        fontFamily: '"Arvo", serif',
        fontSize: { xs: "2rem", md: "2.8rem" },
        mb: 1,
      }}
    >
      Family Moments at Giga Mall
    </Typography>

    <Typography
      sx={{
        color: "#D19F3B",
        fontWeight: 600,
        mb: 2,
      }}
    >
      Fun, Joy & Togetherness
    </Typography>

    <Typography sx={{ mb: 3 }}>
      Enjoy cinema, games, dining, and unforgettable experiences designed
      for the whole family.
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
        <AccessTimeIcon sx={{ color: "#D19F3B" }} />
        Opening Hours
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
        <LocalParkingIcon sx={{ color: "#D19F3B" }} />
        Parking Information
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
        <LocationOnIcon sx={{ color: "#D19F3B" }} />
        Location & Map
      </Link>

      {/* <Link
        href="/visit"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#222",
          textDecoration: "none",
        }}
      >
        <FamilyRestroomIcon sx={{ color: "#D19F3B" }} />
        Family Tips
      </Link> */}
    </Stack>

    {/* CTA */}
    <Button
      component={Link}
      href="/opening-hours"
      sx={{
        backgroundColor: "#D19F3B",
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
        px: 4,
        py: 1.5,
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
      </main>

      <Footer />
    </>
  );
}
