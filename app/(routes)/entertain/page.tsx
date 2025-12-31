"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiscoverEventsOffers from "@/components/sections/DiscoverEventsOffers";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Image from "next/image";

export default function EntertainPage() {
  const attractions = [
    {
      title: "KidZania",
      description: "Interactive city for kids to learn n play.",
      image: "/23.jpg",
    },
    {
      title: "CinePax Cinema",
      description: "Watch your favorite blockbusters in style",
      image: "/cinepax.jpg",
    },
    {
      title: "Ice Rink",
      description: "Glide and skate like a pro",
      image: "/ice_rink.jpg",
    },
    {
      title: "Fun City Arcade",
      description: "Exciting games for all ages",
      image: "/funcity.jpg",
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
            width: "100vw",
            height: { xs: "100vh", md: "90vh" },
            paddingTop: { xs: "90px", md: "100px" },
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* Mobile Video */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              inset: 0,
              height: "100vh",
              zIndex: 0,
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/Funcity Reel.mp4" type="video/mp4" />
            </video>
          </Box>

          {/* Desktop Image */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/Full_Version_1" type="video/mp4" />
            </video>
          </Box>

          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)",
              zIndex: 1,
            }}
          />

          {/* Hero Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: "1400px",
              mx: "auto",
              px: { xs: 2, sm: 4, md: 6 },
              pb: { xs: 6, md: 10 },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2.8rem", sm: "3.8rem", md: "4.5rem" },
                color: "#D19F3B",
                letterSpacing: "0.12em",
                mb: 2,
                lineHeight: 1.1,
              }}
            >
              ENTERTAIN & EXPLORE
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                color: "#ffffff",
                maxWidth: "720px",
                lineHeight: 1.8,
                opacity: 0.95,
                mb: 5,
              }}
            >
              Dive into an unforgettable experience with world-class cinema,
              award-winning family adventures, thrilling fun zones, and
              exquisite dining — all under one roof at Islamabad’s premier
              entertainment destination.
            </Typography>

            {/* Tags: hidden on mobile */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              sx={{ mb: 4, display: { xs: "none", md: "flex" } }}
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
                    }}
                  >
                    {item}
                  </Box>
                )
              )}
            </Stack>

            <Button
              sx={{
                backgroundColor: "#D19F3B",
                color: "#000",
                px: { xs: 4, md: 6 },
                py: { xs: 1, md: 1.8 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                borderRadius: "999px",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#fff", color: "#D19F3B" },
              }}
            >
              Explore Attractions
            </Button>
          </Box>
        </Box>
        {/* ================= END HERO SECTION ================= */}

        {/* ================= ENDLESS FUN AWAITS ================= */}
        <Box sx={{ py: { xs: 10, md: 8 }, backgroundColor: "#fff" }}>
          {/* Heading */}
          <Box
            sx={{ position: "relative", mb: { xs: 6, md: 10 }, width: "100%" }}
          >
            {/* Long line from left edge of screen to heading start */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%", // align with heading text vertically
                width: "8%", // same as heading margin-left
                height: "2px",
                backgroundColor: "#D19F3B",
                zIndex: 0,
              }}
            />

            {/* Small decorative line aligned to same end point */}
            <Box
              sx={{
                position: "absolute",
                left: 0, // starts from left edge
                top: "40%", // slightly above heading
                width: "8%", // same as long line width
                height: "4px", // thicker small line
                backgroundColor: "#D19F3B",
                zIndex: 0,
              }}
            />

            {/* Heading text */}
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2.3rem", md: "3rem" },
                letterSpacing: "0.15em",
                color: "#000",
                fontWeight: 600,
                ml: "8%", // aligns heading with cards
                position: "relative",
                zIndex: 1,
              }}
            >
              ENDLESS FUN AWAITS
            </Typography>
          </Box>

          {/* Square Cards Grid */}
          <Box
            sx={{
              maxWidth: "1400px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {attractions.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    "&:hover": { transform: "scale(1.08)" },
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)",
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 2,
                    p: 3,
                    color: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Arvo", serif',
                      fontSize: "1.25rem",
                      letterSpacing: "0.08em",
                      color: "#D19F3B",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      opacity: 0.95,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* ================= END ENDLESS FUN AWAITS ================= */}

        {/* ================= Kids Play Land Adventure ================= */}
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: { xs: "70vh", md: "55vh" },
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* ================= Left Image ================= */}
          <Box
            sx={{
              flexBasis: "50%",
              position: "relative",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/projects/cpr.jpg"
              alt="Kids Play Land Left"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Blend overlay → fades to center */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.45) 100%)",
                zIndex: 1,
              }}
            />
          </Box>

          {/* ================= Right Image ================= */}
          <Box
            sx={{
              flexBasis: "50%",
              position: "relative",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/projects/cpr.jpg"
              alt="Kids Play Land Right"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Blend overlay → fades to center */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.45) 100%)",
                zIndex: 1,
              }}
            />
          </Box>

          {/* ================= Center Text Overlay ================= */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
              px: { xs: 2, md: 6 },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                width: { xs: "95%", md: "55%" },
                maxWidth: "900px",
                height: "100%",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",

                p: { xs: 4, md: 8 },
                pointerEvents: "auto",

                /* Solid background (important) */
                backgroundColor: "rgba(255,255,255,0.95)",

                /* 🔥 TRUE EDGE DISSOLVE */
                WebkitMaskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        rgba(0,0,0,0.3) 8%,
        rgba(0,0,0,0.75) 20%,
        black 40%,
        black 60%,
        rgba(0,0,0,0.75) 80%,
        rgba(0,0,0,0.3) 92%,
        transparent 100%
      )
    `,
                maskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        rgba(0,0,0,0.3) 8%,
        rgba(0,0,0,0.75) 20%,
        black 40%,
        black 60%,
        rgba(0,0,0,0.75) 80%,
        rgba(0,0,0,0.3) 92%,
        transparent 100%
      )
    `,

                backdropFilter: "blur(14px)",

                /* No card look */
                borderRadius: 0,

                /* Gentle internal softness */
                boxShadow: "inset 0 0 60px rgba(255,255,255,0.35)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Kids Playland Adventure
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 600,
                  color: "#D19F3B",
                  mb: 2,
                }}
              >
                Safe, Fun & Exciting
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  mb: 4,
                  color: "#333",
                }}
              >
                A wonderland of slides, ball pits, and activities for the little
                ones.
              </Typography>

              <Button
                sx={{
                  backgroundColor: "#D19F3B",
                  color: "#000",
                  px: { xs: 3, md: 6 },
                  py: { xs: 1, md: 1.5 },
                  fontWeight: 600,
                  width: "fit-content",
                  mx: "auto",
                  borderRadius: "999px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#D19F3B",
                  },
                }}
              >
                Plan Your Visit
              </Button>
            </Box>
          </Box>
        </Box>
        {/* ================= End Kids Play Land Adventure ================= */}

        {/* ================= Delicious Dining ================= */}
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            minHeight: { xs: "70vh", md: "55vh" },
            display: "flex",
            overflow: "hidden",
            backgroundColor: "#fff",
            py: { xs: 8, md: 12 },
          }}
        >
          {/* Right Side: Image as background */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "50%" },
              position: "absolute", // absolute to go behind text/cards
              top: 0,
              right: 0,
              width: { xs: "100%", md: "70%" },
              height: "100%",
              zIndex: 0, // behind content
            }}
          >
            <Image
              src="/projects/cpr.jpg"
              alt="Delicious Dining"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Gradient overlay for blending with text */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 1) 30%, rgba(255,255,255,0) 70%)",
                zIndex: 0,
              }}
            />
          </Box>

          {/* Left Side: Text Overlay + Cards */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "50%" },
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 4, md: 8 },
              zIndex: 2, // above the image
            }}
          >
            {/* Heading with decorative lines */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 4,
                width: { xs: "90%", md: "50%", maxWidth: "600px" },
              }}
            >
              {/* Left line */}
              <Box
                sx={{
                  flexGrow: 10,
                  height: "2px",
                  backgroundColor: "#D19F3B",
                  mr: 2,
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  fontWeight: 700,
                  textAlign: "left",
                  whiteSpace: "nowrap",
                }}
              >
                Delicious Dining
              </Typography>
            </Box>

            {/* Cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 5, // slightly bigger gap for larger cards
                justifyContent: "center", // center the grid under the heading
              }}
            >
              {[
                {
                  title: "Gourmet Delights",
                  description: "Exquisite dishes crafted by top chefs",
                  image: "/projects/cpr_3.jpg",
                },
                {
                  title: "Family Friendly",
                  description: "Meals everyone in the family will enjoy",
                  image: "/projects/cpr_2.jpg",
                },
                {
                  title: "Cafe & Snacks",
                  description: "Quick bites and drinks for every mood",
                  image: "/projects/cpr_1.jpg",
                },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: "relative",
                    aspectRatio: "1 / 1", // keep square
                    width: { xs: "100%", sm: "250px", md: "300px" }, // increased width
                    borderRadius: "22px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "translateY(-10px)" },
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                      "&:hover": { transform: "scale(1.08)" },
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)",
                      zIndex: 1,
                    }}
                  />

                  {/* Text Content */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      zIndex: 2,
                      p: 3,
                      color: "#fff",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Arvo", serif',
                        fontSize: "1.25rem",
                        letterSpacing: "0.08em",
                        color: "#D19F3B",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        opacity: 0.95,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* ================= End Delicious Dining ================= */}

        {/* ================= Experience Cinepax ================= */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "60vh", md: "70vh" },
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* Left Image */}
          <Box
            sx={{
              flex: "1 1 50%",
              position: "relative",
              height: "100%",
            }}
          >
            <Image
              src="/Cinepax/auditorium.jpg"
              alt="Cinepax Left"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Left Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
                zIndex: 1,
              }}
            />

            {/* Left Gradient Fade to center */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "50%",
                height: "100%",
                background:
                  "linear-gradient(to left, rgba(242, 239, 239, 0.93) 0%, rgba(0, 0, 0, 0.11) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </Box>

          {/* Right Image */}
          {/* <Box
            sx={{
              flex: "1 1 50%",
              position: "relative",
              height: "100%",
            }}
          >
            <Image
              src="/Cinepax/c3.jpg"
              alt="Cinepax Right"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Right Gradient Fade from center
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                background:
                  "linear-gradient(to right, rgba(242, 239, 239, 0.93) 0%, rgba(0, 0, 0, 0.11) 100%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
          </Box>  */}

          {/* Text Overlay at top */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              zIndex: 3,
              px: { xs: 4, md: 8 },
              pt: { xs: 6, md: 10 },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: { xs: 1.5, md: 2 },
                color: "#fff",
              }}
            >
              Experience CINEPAX
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: "1.6rem", md: "2rem" },
                fontWeight: 600,
                color: "#D19F3B",
                mb: { xs: 2, md: 3 },
              }}
            >
              Luxury Cinema Experience
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: "#fff",
                mb: { xs: 3, md: 4 },
                maxWidth: { xs: "100%", md: "600px" },
              }}
            >
              Enjoy the latest movies with VIP seats & 3D Screens.
            </Typography>

            <Button
              sx={{
                backgroundColor: "#D19F3B",
                color: "#000",
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontWeight: 600,
                borderRadius: "999px",
                "&:hover": { backgroundColor: "#fff", color: "#D19F3B" },
              }}
            >
              Book Tickets
            </Button>
          </Box>
        </Box>
        {/* ================= End Experience Cinepax ================= */}

        {/* ============== Upcoming Events & Activities ==============*/}
        <Box sx={{ py: { xs: 10, md: 8 }, backgroundColor: "#fff" }}>
          {/* Heading */}
          <Box
            sx={{ position: "relative", mb: { xs: 6, md: 10 }, width: "100%" }}
          >
            {/* Heading text */}
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2.3rem", md: "3rem" },
                letterSpacing: "0.15em",
                color: "#000",
                fontWeight: 600,
                ml: "8%", // aligns heading with cards
                position: "relative",
                zIndex: 1,
              }}
            >
              Upcoming Events & Activities
            </Typography>
          </Box>

          {/* Square Cards Grid */}
          <Box
            sx={{
              maxWidth: "1400px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {attractions.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "translateY(-10px)" },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    "&:hover": { transform: "scale(1.08)" },
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)",
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    zIndex: 2,
                    p: 3,
                    color: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Arvo", serif',
                      fontSize: "1.25rem",
                      letterSpacing: "0.08em",
                      color: "#D19F3B",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"Jost", sans-serif',
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      opacity: 0.95,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* ============== End Upcoming Events & Activities ==============*/}
        <DiscoverEventsOffers />

        {/* ============== Family Moments at Giga Mall ==============*/}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: "90vh", md: "80vh" },
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* ================= Left Background Image ================= */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50%",
              height: "100%",
              zIndex: 0,
              "&:hover img": { transform: "scale(1.05)" },
              overflow: "hidden",
            }}
          >
            <Image
              src="/Cinepax/c1.jpg"
              alt="Family Left"
              fill
              style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
              priority
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 80%)",
              }}
            />
          </Box>

          {/* ================= Right Background Image ================= */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              zIndex: 0,
              "&:hover img": { transform: "scale(1.05)" },
              overflow: "hidden",
            }}
          >
            <Image
              src="/Cinepax/c2.jpg"
              alt="Family Right"
              fill
              style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
              priority
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 80%)",
              }}
            />
          </Box>

          {/* ================= Center Overlay ================= */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", md: "55%" },
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: "28px",
              p: { xs: 4, md: 6 },
              textAlign: "center",
              zIndex: 2,
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              transition: "transform 0.5s ease",
              "&:hover": { transform: "translate(-50%, -50%) scale(1.02)" },
            }}
          >
            {/* ================= Heading ================= */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 2, md: 3 },
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#D19F3B",
                  mr: 2,
                  borderRadius: "2px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  color: "#333",
                  textShadow: "0 3px 6px rgba(0,0,0,0.15)",
                }}
              >
                Family Moments at Giga Mall
              </Typography>
              <Box
                sx={{
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#D19F3B",
                  ml: 2,
                  borderRadius: "2px",
                }}
              />
            </Box>

            {/* ================= Tagline ================= */}
            <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: "1rem", md: "1.3rem" },
                fontWeight: 500,
                color: "#555",
                mb: { xs: 3, md: 4 },
              }}
            >
              Our favorite place for family fun
            </Typography>

            {/* ================= Two Static Cards ================= */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                gap: { xs: 4, md: 6 },
              }}
            >
              {[1, 2].map((idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "220px" },
                    aspectRatio: "1 / 1",
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Static Card Image */}
                  <Box
                    sx={{ position: "relative", width: "100%", height: "100%" }}
                  >
                    <Image
                      src={`/Cinepax/family_card_${idx}.jpg`}
                      alt={`Family Card ${idx}`}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </Box>

                  {/* Overlay Gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
                      zIndex: 1,
                    }}
                  />

                  {/* Text Content */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      zIndex: 2,
                      p: 2,
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Arvo", serif',
                        fontSize: "1.1rem",
                        color: "#D19F3B",
                        mb: 0.5,
                      }}
                    >
                      Plan your Entertainment Day!
                    </Typography>
                    <Box
                      sx={{
                        height: "2px",
                        width: "40px",
                        backgroundColor: "#D19F3B",
                        mx: "auto",
                        borderRadius: "2px",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* ============== End Family Moments at Giga Mall ==============*/}
      </main>

      <Footer />
    </>
  );
}
