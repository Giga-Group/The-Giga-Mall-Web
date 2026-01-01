"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiscoverEventsOffers from "@/components/sections/DiscoverEventsOffers";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function EntertainPage() {
  const attractions = [
    {
      title: "KidZania",
      description: "Interactive city for kids to learn n play.",
      image: "/upcoming6.jpg",
    },
    {
      title: "CinePax Cinema",
      description: "Watch your favorite blockbusters in style",
      image: "/Cinepax/c2.jpg",
    },

    {
      title: "Fun City Arcade",
      description: "Exciting games for all ages",
      image: "/2.png",
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

        {/* ================= ENDLESS FUN AWAITS ================= */}
        <Box
          sx={{
            backgroundColor: "#fdfdfd",
            py: { xs: 8, md: 10 },
          }}
        >
          {/* ================= Heading ================= */}
          <Box
            sx={{
              maxWidth: "1600px",
              mx: "auto",
              px: { xs: 3, md: 6 },
              mb: { xs: 6, md: 8 },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2.3rem", md: "3.2rem" },
                fontWeight: 400,
                letterSpacing: "0.12em",
                color: "#D19F3B",
              }}
            >
              Endless Fun Awaits
            </Typography>
          </Box>

          {/* ================= Cards Grid ================= */}
          <Box
            sx={{
              maxWidth: "1600px",
              mx: "auto",
              px: { xs: 2, md: 4 },
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: { xs: 4, md: 2 },
            }}
          >
            {attractions.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />

                {/* Bottom gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: "#ffffff",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* ================= END ENDLESS FUN AWAITS ================= */}

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
              src="/Cinepax/auditorium.jpg"
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
              {/* <Box
                sx={{
                  flexGrow: 10,
                  height: "2px",
                  backgroundColor: "#D19F3B",
                  mr: 2,
                }}
              /> */}
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  fontWeight: 400,
                  color: "#D19F3B",
                  textAlign: "center",
                  letterSpacing: "0.02em",
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
                    {/* <Typography
                      sx={{
                        fontFamily: '"Jost", sans-serif',
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        opacity: 0.95,
                      }}
                    >
                      {item.description}
                    </Typography> */}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* ================= End Delicious Dining ================= */}

        <DiscoverEventsOffers />

        {/* ============== Family Moments at Giga Mall ============== */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "90vh", md: "80vh" },
            display: "flex",
            overflow: "hidden",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* ================= Background Image ================= */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/Cinepax/c1.jpg"
              alt="Family Moments"
              fill
              style={{
                objectFit: "cover",
                transition: "transform 1s ease",
              }}
              priority
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to left, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)",
              }}
            />
          </Box>

          {/* ================= Text Content ================= */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 4, md: 8 },
              zIndex: 2,
              pointerEvents: "auto",
            }}
          >
            <Box
              sx={{
                maxWidth: "550px",
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                borderRadius: "28px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
                px: { xs: 4, md: 6 },
                py: { xs: 5, md: 8 },
              }}
            >
              {/* Heading */}
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 700,
                  mb: 2,
                  color: "#222",
                  lineHeight: 1.2,
                }}
              >
                Family Moments at Giga Mall
              </Typography>

              {/* Subheading */}
              <Typography
                sx={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  fontWeight: 600,
                  color: "#D19F3B",
                  mb: 3,
                }}
              >
                Fun, Joy & Togetherness
              </Typography>

              {/* Paragraph */}
              <Typography
                sx={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                  color: "#444",
                  mb: 5,
                }}
              >
                Explore exciting activities, shopping, and dining experiences
                designed for the whole family. Create unforgettable memories
                together.
              </Typography>

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
                  Plan Your Visit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* ============== End Family Moments at Giga Mall ============== */}
      </main>

      <Footer />
    </>
  );
}
