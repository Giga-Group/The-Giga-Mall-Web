"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ModelApartmentsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Model Apartments */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: "100vh", md: "70vh", lg: "70vh" },
            paddingTop: { xs: "90px", md: "100px" },
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* Full Width Image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Image
              src="/stay/stay1.jpeg"
              alt="Model Apartments"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
          </Box>

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "70%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
              zIndex: 1,
            }}
          />

          {/* Text Content at Bottom */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              padding: {
                xs: "40px 20px",
                sm: "60px 40px",
                md: "80px 60px",
                lg: "50px 80px",
              },
              zIndex: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                fontWeight: 400,
                color: "#D19F3B",
                marginBottom: { xs: "16px", md: "20px" },
                letterSpacing: "0.02em",
                lineHeight: 1.2,
              }}
            >
              MODEL APARTMENTS
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                fontWeight: 300,
                color: "#D19F3B",
                marginBottom: { xs: "24px", md: "32px" },
                letterSpacing: "0.05em",
                lineHeight: 1.3,
              }}
            >
              Exquisite Living Spaces
            </Typography>

            {/* Simple Divider */}
            <Box
              sx={{
                width: "100%",
                maxWidth: "600px",
                height: "2px",
                backgroundColor: "#D19F3B",
                marginBottom: { xs: "24px", md: "32px" },
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.2rem",
                  lg: "1.3rem",
                },
                fontWeight: 300,
                color: "#D19F3B",
                lineHeight: 1.7,
                maxWidth: "600px",
                opacity: 0.95,
              }}
            >
              Discover our stunning model apartments, showcasing the finest in
              modern living. Each space is thoughtfully designed to inspire and
              reflect the epitome of luxury and comfort.
            </Typography>
          </Box>
        </Box>

        {/* Second Section - Split Layout (Image Left, Text Right) */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: "50vh", md: "60vh", lg: "70vh" },
            backgroundColor: "#ffffff",
            padding: { xs: 0, md: "40px 0", lg: "60px 0" },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { md: "center" },
            }}
          >
            {/* Left Side - Image (2/3 width) */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "66.666%" },
                minHeight: { xs: "300px", md: "400px", lg: "550px" },
                height: { xs: "300px", md: "400px", lg: "550px" },
                overflow: "hidden",
                marginLeft: { xs: 0, md: "40px", lg: "60px" },
                marginTop: { xs: "60px", md: 0 }, // Pull image up to overlap with card
                order: { xs: 2, md: 1 },
                zIndex: 1,
              }}
            >
              <Image
                src="/stay/stay6.jpg"
                alt="Model Apartment Interior"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>

            {/* Right Side - Text Content (1/3 width) - Positioned to the right */}
            <Box
              sx={{
                // Use absolute only for lg and above
                position: { xs: "relative", md: "relative", lg: "absolute" },
                top: {
                  xs: "auto",
                  md: "auto",
                  lg: "45%",
                },
                transform: {
                  xs: "none",
                  md: "none",
                  lg: "translateY(-50%)",
                },
                right: { xs: 0, md: 0, lg: "60px" }, // Position to right on mobile
                width: { xs: "93%", sm: "55%", md: "100%", lg: "32%" }, // Narrower width on mobile
                maxWidth: { md: "500px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-start",
                  lg: "center",
                },
                gap: { xs: "16px", md: "18px", lg: "20px" },
                padding: {
                  xs: "25px 20px",
                  sm: "35px 30px",
                  md: "60px 40px",
                  lg: "80px 60px",
                },
                backgroundColor: "#ffffff",
                boxShadow: {
                  xs: "0 10px 30px rgba(0,0,0,0.12)",
                  md: "0 4px 20px rgba(0,0,0,0.1)",
                },
                marginTop: { xs: 0, md: 0 },
                marginLeft: { xs: "auto", md: 0 },
                marginBottom: { xs: "-100px", md: 0 },
                order: { xs: 1, md: 2 },
                zIndex: 2,
                border: "1px solid rgba(209, 159, 59, 0.1)",
                textAlign: "left",
                alignSelf: { xs: "flex-end", md: "auto" },
              }}
            >
              {/* Heading */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
                  fontWeight: 400,
                  color: "#D19F3B",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: { xs: "12px", md: "10px", lg: "0px" },
                }}
              >
                LUXURY APARTMENTS
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.8rem",
                    md: "2.5rem",
                    lg: "2.5rem",
                  },
                  fontWeight: 400,
                  color: "#D19F3B",
                  marginBottom: { xs: "16px", md: "24px", lg: "24px" },
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                Designed for Excellence
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.9rem",
                    md: "1.05rem",
                    lg: "1.1rem",
                  },
                  fontWeight: 300,
                  color: "#D19F3B",
                  lineHeight: 1.6,
                  marginBottom: { xs: "20px", md: "40px", lg: "40px" },
                }}
              >
                Experience unparalleled luxury with a touch of elegance. Our
                model apartments showcase sleek, tailored design and world-class
                amenities. Each space features opulent interiors, premium
                furnishings, and exceptional attention to detail that offers a
                subtle nod to a sophisticated life of refined comfort.
              </Typography>

              <Button
                component={Link}
                href="#"
                variant="outlined"
                sx={{
                  border: "1px solid #D19F3B",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  padding: {
                    xs: "8px 20px",
                    sm: "10px 28px",
                    md: "16px 44px",
                  },
                  borderRadius: 0,
                  maxWidth: "fit-content",
                  transition: "all 0.3s ease",
                  backgroundColor: "#D19F3B",
                  "&:hover": {
                    border: "1px solid #D19F3B",
                    color: "#D19F3B",
                    backgroundColor: "transparent",
                  },
                }}
              >
                FIND IT AT GIGA MALL
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Third Section - Additional Showcase */}
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            minHeight: { xs: "100vh", md: "70vh", lg: "70vh" },
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* Full Width Image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Image
              src="/stay/stay4.jpeg"
              alt="Model Apartment Showcase"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "70%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
              zIndex: 1,
            }}
          />

          {/* Text Content at Bottom */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              padding: {
                xs: "40px 20px",
                sm: "60px 40px",
                md: "80px 60px",
                lg: "50px 80px",
              },
              zIndex: 2,
            }}
          >
            <Typography
              variant="h2"
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
                marginBottom: { xs: "20px", md: "24px" },
                letterSpacing: "0.02em",
                lineHeight: 1.2,
              }}
            >
              Your Dream Home Awaits
            </Typography>

            {/* Simple Divider */}
            <Box
              sx={{
                width: "100%",
                maxWidth: "600px",
                height: "2px",
                backgroundColor: "#D19F3B",
                marginBottom: { xs: "24px", md: "32px" },
              }}
            />

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.1rem",
                  lg: "1.15rem",
                },
                fontWeight: 300,
                color: "#D19F3B",
                lineHeight: 1.7,
                maxWidth: "600px",
                marginBottom: { xs: "32px", md: "40px" },
                opacity: 0.95,
              }}
            >
              Visit our model apartments to experience the perfect blend of
              luxury, comfort, and style. Each space tells a story of
              sophisticated living and timeless elegance.
            </Typography>

            <Button
              component={Link}
              href="#"
              variant="outlined"
              sx={{
                border: "1px solid #D19F3B",
                color: "#D19F3B",
                textTransform: "uppercase",
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                fontWeight: 400,
                letterSpacing: "0.1em",
                padding: { xs: "12px 32px", sm: "14px 40px", md: "16px 48px" },
                borderRadius: 0,
                maxWidth: "fit-content",
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                "&:hover": {
                  border: "1px solid #D19F3B",
                  color: "#D19F3B",
                  backgroundColor: "transparent",
                },
              }}
            >
              SCHEDULE A VISIT
            </Button>
          </Box>
        </Box>

        {/* Fourth Section - Split Layout (Text Left, Image Right) */}
        {/* Fourth Section - Split Layout (Text Left, Image Right) */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: "50vh", md: "60vh", lg: "70vh" },
            backgroundColor: "#ffffff",
            padding: { xs: "0", md: "40px 0", lg: "60px 0" },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { md: "center" },
            }}
          >
            {/* Right Side - Image (2/3 width) */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "66.666%" },
                minHeight: { xs: "300px", md: "400px", lg: "550px" },
                height: { xs: "300px", md: "400px", lg: "550px" },
                overflow: "hidden",
                marginRight: { xs: 0, md: "40px", lg: "60px" },
                marginLeft: { xs: 0, md: "auto" },
                marginTop: { xs: "68px", md: 0 }, // Pull image up to overlap with card
                order: { xs: 2, md: 2 }, // Image appears second on mobile
                zIndex: 1,
              }}
            >
              <Image
                src="/stay/stay8.jpg"
                alt="Luxury Model Apartment"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>

            {/* Left Side - Text Content - Same styling as second section */}
        <Box
  sx={{
    // Desktop: absolute positioning
    position: { xs: "relative", md: "absolute" },
    left: { xs: "0%", md: "40px", lg: "60px" },
    // Adjust top position to move card higher (more space from bottom)
    top: { xs: "auto", md: "40%", lg: "40%" }, // Changed from default to 40%
    transform: {
      xs: "none",
      md: "translateY(-50%)",
      lg: "translateY(-50%)",
    },
    width: { xs: "93%", sm: "55%", md: "35%", lg: "32%" },
    maxWidth: { md: "500px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: {
      xs: "flex-start",
      md: "center",
    },
    gap: { xs: "16px", md: "18px", lg: "20px" },
    padding: {
      xs: "25px 20px",
      sm: "35px 30px",
      md: "60px 40px",
      lg: "80px 60px",
    },
    backgroundColor: "#ffffff",
    boxShadow: {
      xs: "0 10px 30px rgba(0,0,0,0.12)",
      md: "0 4px 20px rgba(0,0,0,0.1)",
    },
    marginTop: { xs: 0, md: 0 },
    marginRight: { xs: "auto", md: 0 },
    marginBottom: { xs: "-100px", md: 0 },
    order: { xs: 1, md: 1 },
    zIndex: 2,
    border: "1px solid rgba(209, 159, 59, 0.1)",
    textAlign: "left",
    alignSelf: { xs: "flex-start", md: "auto" },
  }}
>
  <Typography
    variant="h6"
    sx={{
      fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
      fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
      fontWeight: 400,
      color: "#D19F3B",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      // marginBottom: { xs: "12px", md: "20px" },
      // Add space from top on desktop
      marginTop: { xs: 0, md: "20px", lg: "45px" }, // Added this line
    }}
  >
    PREMIUM LIVING
  </Typography>

  <Typography
    variant="h2"
    sx={{
      fontFamily: '"Arvo", serif',
      fontSize: {
        xs: "1.5rem", // Same as second section mobile
        sm: "1.8rem",
        md: "2.5rem",
        lg: "2.5rem",
      },
      fontWeight: 400,
      color: "#D19F3B",
      marginBottom: { xs: "16px", md: "24px", lg: "24px" },
      letterSpacing: "0.02em",
      lineHeight: 1.2,
    }}
  >
    Premium Living Experience
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontFamily: '"Jost", "Mulish", system-ui, sans-serif',
      fontSize: {
        xs: "0.8rem", // Same as second section mobile
        sm: "0.9rem",
        md: "1.05rem",
        lg: "1.1rem",
      },
      fontWeight: 300,
      color: "#D19F3B",
      lineHeight: 1.6, // Same as second section
      marginBottom: { xs: "20px", md: "40px", lg: "40px" },
    }}
  >
    Step into a world of refined elegance where every detail has
    been carefully curated. Our model apartments feature
    sophisticated design, premium finishes, and spacious layouts
    that redefine modern living.
  </Typography>

  <Button
    component={Link}
    href="#"
    variant="outlined"
    sx={{
      border: "1px solid #D19F3B",
      color: "#ffffff",
      textTransform: "uppercase",
      fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
      fontWeight: 400,
      letterSpacing: "0.1em",
      padding: {
        xs: "8px 20px",
        sm: "10px 28px",
        md: "16px 44px",
      },
      borderRadius: 0,
      maxWidth: "fit-content",
      transition: "all 0.3s ease",
      backgroundColor: "#D19F3B",
      "&:hover": {
        border: "1px solid #D19F3B",
        color: "#D19F3B",
        backgroundColor: "transparent",
      },
    }}
  >
    EXPLORE MORE
  </Button>
</Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
