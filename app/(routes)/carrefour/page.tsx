"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Box, Typography, Container, Divider, Button } from "@mui/material";
import Image from "next/image";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HomeIcon from "@mui/icons-material/Home";
import DevicesIcon from "@mui/icons-material/Devices";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StoreIcon from "@mui/icons-material/Store";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function CarrefourPage() {
  // Carousel state for "Why Shop at Carrefour" section
  const [whyShopIndex, setWhyShopIndex] = useState(0);
  const whyShopTouchStart = useRef<number | null>(null);
  const whyShopTouchEnd = useRef<number | null>(null);
  const whyShopAutoPlayPaused = useRef(false);

  // Carousel state for "What We Offer" section
  const [whatOfferIndex, setWhatOfferIndex] = useState(0);
  const whatOfferTouchStart = useRef<number | null>(null);
  const whatOfferTouchEnd = useRef<number | null>(null);
  const whatOfferAutoPlayPaused = useRef(false);

  const whyShopItems = [
    {
      icon: CategoryIcon,
      title: "Extensive Product Range",
      description: "From fresh produce and groceries to electronics, clothing, and household items, Carrefour Giga Mall offers an unparalleled selection of products to meet all your shopping needs.",
    },
    {
      icon: LocalOfferIcon,
      title: "Best Value & Promotions",
      description: "Enjoy competitive prices and exclusive promotions at Carrefour Giga Mall, ensuring you get the best value for your money on every visit.",
    },
    {
      icon: VerifiedIcon,
      title: "Quality Guaranteed",
      description: "At Carrefour Giga Mall, we maintain the highest quality standards, ensuring that every product meets our rigorous quality checks before reaching our shelves.",
    },
    {
      icon: LocationOnIcon,
      title: "Prime Location at Giga Mall",
      description: "Strategically located within Giga Mall in DHA Islamabad, Carrefour offers easy access with ample parking facilities, making your shopping experience convenient and hassle-free.",
    },
  ];

  const whatOfferItems = [
    {
      icon: LocalGroceryStoreIcon,
      title: "Fresh Groceries & Produce",
      description: "Daily fresh fruits, vegetables, meat, dairy, and all your grocery essentials at Carrefour Giga Mall",
    },
    {
      icon: HomeIcon,
      title: "Home & Living",
      description: "Complete range of household items, home decor, and living essentials available at Giga Mall",
    },
    {
      icon: DevicesIcon,
      title: "Electronics & Appliances",
      description: "Latest electronics, gadgets, and home appliances at competitive prices in Giga Mall",
    },
  ];

  const handleWhyShopSwipe = useCallback((direction: "left" | "right") => {
    if (direction === "left") {
      setWhyShopIndex((prev) => (prev + 1) % whyShopItems.length);
    } else {
      setWhyShopIndex((prev) => (prev - 1 + whyShopItems.length) % whyShopItems.length);
    }
  }, [whyShopItems.length]);

  const handleWhatOfferSwipe = useCallback((direction: "left" | "right") => {
    if (direction === "left") {
      setWhatOfferIndex((prev) => (prev + 1) % whatOfferItems.length);
    } else {
      setWhatOfferIndex((prev) => (prev - 1 + whatOfferItems.length) % whatOfferItems.length);
    }
  }, [whatOfferItems.length]);

  // Auto-play for "Why Shop" carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!whyShopAutoPlayPaused.current) {
        setWhyShopIndex((prev) => (prev + 1) % whyShopItems.length);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [whyShopItems.length]);

  // Auto-play for "What We Offer" carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!whatOfferAutoPlayPaused.current) {
        setWhatOfferIndex((prev) => (prev + 1) % whatOfferItems.length);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [whatOfferItems.length]);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "100vh", md: "60vh", lg: "70vh" },
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          >
            <Image
              src="/carrefour6.jpg"
              alt="Carrefour"
              fill
              priority
              quality={100}
              sizes="100vw"
              style={{
                objectFit: "cover",
                imageRendering: "auto",
                transition: "transform 0.6s ease-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              loading="eager"
            />
          </Box>

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)",
              zIndex: 2,
            }}
          />

          {/* Content - Centered */}
          <Box
            sx={{
              position: "relative",
              zIndex: 3,
              textAlign: "center",
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "4.5rem",
                  lg: "5.5rem",
                },
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Carrefour
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                color: "#ffffff",
                mt: { xs: 2, md: 3 },
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              Your One-Stop Shopping Destination
            </Typography>
          </Box>
        </Box>

        <Container
          maxWidth="xl"
          sx={{ py: { xs: 4, md: 8 }, px: { xs: 1.5, sm: 2, md: 4 } }}
        >
          {/* About Section - Split Layout (Text Left, Image Right) */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              minHeight: "40vh",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" }, order: { xs: 2, md: 1 } }}>
              {/* Left Content */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 3 },
                  alignItems: "flex-start",
                }}
              >
                {/* Icon and Title Row (Mobile) / Icon Only (Desktop) */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    gap: { xs: 2, md: 0 },
                    alignItems: { xs: "center", md: "flex-start" },
                    flexShrink: 0,
                  }}
                >
                  {/* Grocery Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: { xs: 0, md: 1 },
                    }}
                  >
                    <LocalGroceryStoreIcon
                      sx={{
                        fontSize: { xs: 48, sm: 56, md: 64 },
                        color: "#D19F3B",
                      }}
                    />
                  </Box>

                  {/* Title (Mobile only - next to icon) */}
                  <Typography
                    variant="h2"
                    sx={{
                      display: { xs: "block", md: "none" },
                      fontSize: { xs: "1.5rem", sm: "2.2rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      fontFamily: '"Arvo", serif',
                      mb: 0,
                    }}
                  >
                    Fresh Grocery and Items
                  </Typography>
                </Box>

                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  {/* Title (Desktop only) */}
                  <Typography
                    variant="h2"
                    sx={{
                      display: { xs: "none", md: "block" },
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Arvo", serif',
                    }}
                  >
                    Fresh Grocery and Items
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Quicksand", sans-serif',
                    }}
                  >
                    Discover a wide selection of fresh grocery and bakery items at
                  Carrefour Giga Mall. From daily fresh fruits and vegetables to
                  freshly baked bread, pastries, and confectionery, we offer
                  premium quality products to meet all your grocery and bakery needs.
                  Visit us for the freshest ingredients and baked goods, ensuring
                  quality and freshness for you and your family.
                  </Typography>
                </Box>
              </Box>

              {/* Divider BELOW the whole section */}
              <Divider
                sx={{
                  mt: { xs: 3, md: 4, lg: 12 },
                  // borderColor: "#000",
                  width: "100%",
                  height: "88px",                 
                  border: "none",               
                  background: 
                    "linear-gradient(to right, #D19F3B 0%, rgba(209,159,59,0.6) 40%, rgba(209,159,59,0) 100%)",
                }}
        
              />
            </Box>

            {/* Right Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "250px", md: "400px", lg: "400px" },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                flexShrink: 0,
                order: { xs: 1, md: 2 },
              }}
            >
              <Image
                src="/carrefour4.jpg"
                alt="Carrefour at Giga Mall"
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              {/* Gradient overlay on the left side */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 1.9) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 1,
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Box>

          {/* Your Shopping Destination Section - Image Left, Text Right */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              minHeight: "40vh",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "250px", md: "400px", lg: "400px" },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                flexShrink: 0,
                order: { xs: 1, md: 1 },
              }}
            >
              <Image
                src="/carrefour3.jpg"
                alt="Carrefour at Giga Mall"
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              {/* Gradient overlay on the right side */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to left, rgba(255, 255, 255, 1.9) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 1,
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box sx={{ width: { xs: "100%", md: "50%" }, order: { xs: 2, md: 2 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 3 },
                  alignItems: "flex-start",
                }}
              >
                {/* Icon and Title Row (Mobile) / Icon Only (Desktop) */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    gap: { xs: 2, md: 0 },
                    alignItems: { xs: "center", md: "flex-start" },
                    flexShrink: 0,
                  }}
                >
                  {/* Store Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: { xs: 0, md: 1 },
                    }}
                  >
                    <StoreIcon
                      sx={{
                        fontSize: { xs: 48, sm: 56, md: 64 },
                        color: "#D19F3B",
                      }}
                    />
                  </Box>

                  {/* Title (Mobile only - next to icon) */}
                  <Typography
                    variant="h2"
                    sx={{
                      display: { xs: "block", md: "none" },
                      fontSize: { xs: "1.5rem", sm: "2.2rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      fontFamily: '"Arvo", serif',
                      mb: 0,
                    }}
                  >
                    Your Shopping Destination
                  </Typography>
                </Box>

                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  {/* Title (Desktop only) */}
                  <Typography
                    variant="h2"
                    sx={{
                      display: { xs: "none", md: "block" },
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Arvo", serif',
                    }}
                  >
                    Your Shopping Destination
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Quicksand", sans-serif',
                      mb: { xs: 2, md: 3 },
                    }}
                  >
                    At Carrefour Giga Mall, we pride ourselves on offering a
                    comprehensive shopping experience that caters to all your daily
                    needs. Our spacious store layout ensures easy navigation through
                    our well-organized departments, making your shopping trip
                    efficient and enjoyable.
                   
                  </Typography>

                  {/* <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Quicksand", sans-serif',
                    }}
                  >
                    Whether you&apos;re stocking up on groceries, looking for the
                    latest electronics, or searching for household essentials,
                    Carrefour at Giga Mall has everything you need. Our commitment
                    to quality and customer satisfaction makes us the preferred
                    choice for shoppers in Islamabad.
                  </Typography> */}
                </Box>
              </Box>

              {/* Divider BELOW the whole section */}
              <Divider
                sx={{
                  mt: { xs: 3, md: 4, lg: 12 },
                  width: "100%",
                  height: "88px",                 
                  border: "none",               
                  background: 
                    "linear-gradient(to right, transparent 0%, rgba(209,159,59,0.6) 60%, #D19F3B 100%)",
                }}
              />
            </Box>
          </Box>

          {/* Features Section */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              width: { xs: "100%", md: "70%" },
              margin: "0 auto",
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 400,
                color: "#D19F3B",
                mb: { xs: 2, md: 3 },
                fontFamily: '"Arvo", serif',
                textAlign: "center",
              }}
            >
              Why Shop at Carrefour Giga Mall?
            </Typography>
            {/* Mobile Carousel */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "relative",
                mt: 4,
                overflow: "hidden",
              }}
              onTouchStart={(e) => {
                whyShopAutoPlayPaused.current = true;
                whyShopTouchStart.current = e.touches[0].clientX;
              }}
              onTouchMove={(e) => {
                whyShopTouchEnd.current = e.touches[0].clientX;
              }}
              onTouchEnd={() => {
                if (whyShopTouchStart.current !== null && whyShopTouchEnd.current !== null) {
                  const delta = whyShopTouchStart.current - whyShopTouchEnd.current;
                  if (Math.abs(delta) > 50) {
                    handleWhyShopSwipe(delta > 0 ? "left" : "right");
                  }
                }
                whyShopTouchStart.current = null;
                whyShopTouchEnd.current = null;
                // Resume auto-play after 5 seconds
                setTimeout(() => {
                  whyShopAutoPlayPaused.current = false;
                }, 5000);
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  transform: `translateX(-${whyShopIndex * 100}%)`,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {whyShopItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Box
                      key={index}
                      sx={{
                        minWidth: "100%",
                        textAlign: "center",
                        px: 2,
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: 50,
                          color: "#D19F3B",
                          mb: 2,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#D19F3B",
                          mb: 1,
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          lineHeight: 1.7,
                          color: "#333",
                          fontFamily: '"Quicksand", sans-serif',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              
              {/* Navigation Dots */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mt: 3,
                }}
              >
                {whyShopItems.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      whyShopAutoPlayPaused.current = true;
                      setWhyShopIndex(index);
                      setTimeout(() => {
                        whyShopAutoPlayPaused.current = false;
                      }, 5000);
                    }}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: index === whyShopIndex ? "#D19F3B" : "#ccc",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Desktop Grid */}
            <Box
              sx={{
                display: { xs: "none", md: "grid" },
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 4,
                mt: 6,
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <CategoryIcon
                  sx={{
                    fontSize: 60,
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Extensive Product Range
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  From fresh produce and groceries to electronics, clothing, and
                  household items, Carrefour Giga Mall offers an unparalleled
                  selection of products to meet all your shopping needs.
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <LocalOfferIcon
                  sx={{
                    fontSize: 60,
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Best Value & Promotions
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  Enjoy competitive prices and exclusive promotions at Carrefour
                  Giga Mall, ensuring you get the best value for your money on
                  every visit.
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <VerifiedIcon
                  sx={{
                    fontSize: 60,
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Quality Guaranteed
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  At Carrefour Giga Mall, we maintain the highest quality
                  standards, ensuring that every product meets our rigorous
                  quality checks before reaching our shelves.
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <LocationOnIcon
                  sx={{
                    fontSize: 60,
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Prime Location at Giga Mall
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  Strategically located within Giga Mall in DHA Islamabad,
                  Carrefour offers easy access with ample parking facilities,
                  making your shopping experience convenient and hassle-free.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Electronics and Appliances Section - Split Layout (Text Left, Image Right) */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              minHeight: "50vh",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" }, order: { xs: 2, md: 1 } }}>
              {/* Left Content */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 3 },
                  alignItems: "flex-start",
                }}
              >
                {/* Icon and Title Row (Mobile) / Icon Only (Desktop) */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    gap: { xs: 2, md: 0 },
                    alignItems: { xs: "center", md: "flex-start" },
                    flexShrink: 0,
                  }}
                >
                  {/* Electronics Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: { xs: 0, md: 1 },
                    }}
                  >
                    <DevicesIcon
                      sx={{
                        fontSize: { xs: 48, sm: 56, md: 64 },
                        color: "#D19F3B",
                      }}
                    />
                  </Box>

                  {/* Title (Mobile only - next to icon) */}
                  <Typography
                    variant="h2"
                    sx={{
                      display: { xs: "block", md: "none" },
                      fontSize: { xs: "1.8rem", sm: "2.2rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      fontFamily: '"Arvo", serif',
                      mb: 0,
                    }}
                  >
                    Electronics and Appliances
                  </Typography>
                </Box>

                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  {/* Title (Desktop only) */}
                  <Typography
                    variant="h2"
                    sx={{
                      display: { xs: "none", md: "block" },
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Arvo", serif',
                    }}
                  >
                    Electronics and Appliances
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Quicksand", sans-serif',
                    }}
                  >
                    Explore our extensive collection of electronics and appliances at
                    Carrefour Giga Mall. From  latest smartphones, laptops, and
                    tablets to home appliances including refrigerators, washing machines,
                    and kitchen essentials, we offer  products from leading
                    brands. Find everything you need to upgrade your home and lifestyle
                    with competitive prices and expert service.
                  </Typography>
                </Box>
              </Box>

              {/* Divider BELOW the whole section */}
              <Divider
                sx={{
                  mt: { xs: 3, md: 4, lg: 12 },
                  // borderColor: "#000",
                  width: "100%",
                  height: "88px",                 
                  border: "none",               
                  background: 
                    "linear-gradient(to right, #D19F3B 0%, rgba(209,159,59,0.6) 40%, rgba(209,159,59,0) 100%)",
                }}
        
              />
            </Box>

            {/* Right Side - Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "250px", md: "400px", lg: "400px" },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                flexShrink: 0,
                order: { xs: 1, md: 2 },
              }}
            >
              <Image
                src="/carrefour9.jpg"
                alt="Electronics and Appliances at Carrefour"
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              {/* Gradient overlay on the left side */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 1.9) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 1,
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Box>

          {/* Image Section 2 - Split Layout */}
        

          {/* Services Section */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              width: { xs: "100%", md: "70%" },
              margin: "0 auto",
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 400,
                color: "#D19F3B",
                mb: { xs: 2, md: 3 },
                fontFamily: '"Arvo", serif',
                textAlign: "center",
              }}
            >
              What We Offer at Carrefour Giga Mall
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "#333",
                fontFamily: '"Quicksand", sans-serif',
                textAlign: "center",
                mb: { xs: 4, md: 6 },
              }}
            >
              Carrefour Giga Mall provides a complete shopping experience with a
              wide range of services and departments designed to make your visit
              to Giga Mall convenient, enjoyable, and efficient.
            </Typography>
            {/* Mobile Carousel */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "relative",
                overflow: "hidden",
              }}
              onTouchStart={(e) => {
                whatOfferAutoPlayPaused.current = true;
                whatOfferTouchStart.current = e.touches[0].clientX;
              }}
              onTouchMove={(e) => {
                whatOfferTouchEnd.current = e.touches[0].clientX;
              }}
              onTouchEnd={() => {
                if (whatOfferTouchStart.current !== null && whatOfferTouchEnd.current !== null) {
                  const delta = whatOfferTouchStart.current - whatOfferTouchEnd.current;
                  if (Math.abs(delta) > 50) {
                    handleWhatOfferSwipe(delta > 0 ? "left" : "right");
                  }
                }
                whatOfferTouchStart.current = null;
                whatOfferTouchEnd.current = null;
                // Resume auto-play after 5 seconds
                setTimeout(() => {
                  whatOfferAutoPlayPaused.current = false;
                }, 5000);
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  transform: `translateX(-${whatOfferIndex * 100}%)`,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {whatOfferItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Box
                      key={index}
                      sx={{
                        minWidth: "100%",
                        textAlign: "center",
                        px: 2,
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: 50,
                          color: "#D19F3B",
                          mb: 2,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#D19F3B",
                          mb: 1,
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          color: "#666",
                          fontFamily: '"Quicksand", sans-serif',
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              
              {/* Navigation Dots */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mt: 3,
                }}
              >
                {whatOfferItems.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      whatOfferAutoPlayPaused.current = true;
                      setWhatOfferIndex(index);
                      setTimeout(() => {
                        whatOfferAutoPlayPaused.current = false;
                      }, 5000);
                    }}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: index === whatOfferIndex ? "#D19F3B" : "#ccc",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Desktop Grid */}
            <Box
              sx={{
                display: { xs: "none", md: "grid" },
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 4,
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <LocalGroceryStoreIcon
                  sx={{
                    fontSize: 60,
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Fresh Groceries & Produce
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "#666",
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  Daily fresh fruits, vegetables, meat, dairy, and all your
                  grocery essentials at Carrefour Giga Mall
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <HomeIcon
                  sx={{
                    fontSize: 60,
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Home & Living
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "#666",
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  Complete range of household items, home decor, and living
                  essentials available at Giga Mall
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <DevicesIcon
                  sx={{
                    fontSize: 60,
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Electronics & Appliances
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "#666",
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  Latest electronics, gadgets, and home appliances at
                  competitive prices in Giga Mall
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Visit Us Section */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
              alignItems: { md: "center" },
            }}
          >
            {/* Left Side - Text Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 400,
                  color: "#D19F3B",
                  mb: { xs: 2, md: 3 },
                  fontFamily: '"Arvo", serif',
                }}
              >
                Visit Carrefour at Giga Mall
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  color: "#333",
                  fontFamily: '"Quicksand", sans-serif',
                  mb: { xs: 3, md: 4 },
                }}
              >
                Experience the ultimate shopping convenience at Carrefour Giga
                Mall. Whether you&apos;re looking for daily groceries, household
                essentials, or the latest products, Carrefour at Giga Mall is your
                one-stop destination. Visit us today and discover why we&apos;re
                the preferred shopping choice for families in Islamabad.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  mb: 2,
                  flexWrap: "wrap",
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.8rem" },
                    color: "#D19F3B",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1.15rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 1.4,
                  }}
                >
                  Location: Carrefour, Giga Mall, Giga City, DHA Islamabad
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  mb: 3,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<DirectionsIcon />}
                  href="https://www.google.com/maps/dir/?api=1&destination=Carrefour+Giga+Mall+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#D19F3B",
                    color: "#ffffff",
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 600,
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.2, md: 1.5 },
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#b8892f",
                    },
                  }}
                >
                  Directions
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LocalOfferIcon />}
                  href="/offers"
                  sx={{
                    borderColor: "#D19F3B",
                    color: "#D19F3B",
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 600,
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.2, md: 1.5 },
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#b8892f",
                      color: "#b8892f",
                      backgroundColor: "rgba(209, 159, 59, 0.1)",
                    },
                  }}
                >
                  Browse Offers
                </Button>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "#666",
                  fontFamily: '"Quicksand", sans-serif',
                }}
              >
                Open daily with convenient shopping hours
              </Typography>
            </Box>

            {/* Right Side - Map */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "300px", md: "400px", lg: "450px" },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #e0e0e0",
                flexShrink: 0,
              }}
            >
              <iframe
                title="Carrefour Giga Mall Location"
                src="https://www.google.com/maps?q=Carrefour+Giga+Mall+Islamabad&output=embed"
                style={{ border: 0, width: "100%", height: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Box>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}