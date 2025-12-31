"use client";

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
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "50vh", md: "60vh", lg: "70vh" },
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
                fontFamily: '"Jost", sans-serif',
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "4.5rem",
                  lg: "5.5rem",
                },
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Carrefour
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Muli", sans-serif',
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
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              {/* Left Content */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 3 },
                  alignItems: "flex-start",
                }}
              >
                {/* Grocery Icon */}
                <Box
                  sx={{
                    flexShrink: 0,
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

                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Jost", sans-serif',
                    }}
                  >
                    Fresh Grocery and Items
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Muli", sans-serif',
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
                {/* Store Icon */}
                <Box
                  sx={{
                    flexShrink: 0,
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

                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Jost", sans-serif',
                    }}
                  >
                    Your Shopping Destination
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Muli", sans-serif',
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
                      fontFamily: '"Muli", sans-serif',
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
                fontFamily: '"Jost", sans-serif',
                textAlign: "center",
              }}
            >
              Why Shop at Carrefour Giga Mall?
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: { xs: 3, md: 4 },
                mt: { xs: 4, md: 6 },
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <CategoryIcon
                  sx={{
                    fontSize: { xs: 50, md: 60 },
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Extensive Product Range
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Muli", sans-serif',
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
                    fontSize: { xs: 50, md: 60 },
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Best Value & Promotions
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Muli", sans-serif',
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
                    fontSize: { xs: 50, md: 60 },
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Quality Guaranteed
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Muli", sans-serif',
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
                    fontSize: { xs: 50, md: 60 },
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Prime Location at Giga Mall
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    lineHeight: 1.7,
                    color: "#333",
                    fontFamily: '"Muli", sans-serif',
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
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              {/* Left Content */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 3 },
                  alignItems: "flex-start",
                }}
              >
                {/* Electronics Icon */}
                <Box
                  sx={{
                    flexShrink: 0,
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

                {/* Text Content */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                      fontWeight: 400,
                      color: "#D19F3B",
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Jost", sans-serif',
                    }}
                  >
                    Electronics and Appliances
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Muli", sans-serif',
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
                fontFamily: '"Jost", sans-serif',
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
                fontFamily: '"Muli", sans-serif',
                textAlign: "center",
                mb: { xs: 4, md: 6 },
              }}
            >
              Carrefour Giga Mall provides a complete shopping experience with a
              wide range of services and departments designed to make your visit
              to Giga Mall convenient, enjoyable, and efficient.
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: { xs: 3, md: 4 },
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <LocalGroceryStoreIcon
                  sx={{
                    fontSize: { xs: 50, md: 60 },
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Fresh Groceries & Produce
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.6,
                    color: "#666",
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  Daily fresh fruits, vegetables, meat, dairy, and all your
                  grocery essentials at Carrefour Giga Mall
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <HomeIcon
                  sx={{
                    fontSize: { xs: 50, md: 60 },
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Home & Living
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.6,
                    color: "#666",
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  Complete range of household items, home decor, and living
                  essentials available at Giga Mall
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <DevicesIcon
                  sx={{
                    fontSize: { xs: 50, md: 60 },
                    color: "#D19F3B",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Electronics & Appliances
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.6,
                    color: "#666",
                    fontFamily: '"Muli", sans-serif',
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
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                Visit Carrefour at Giga Mall
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.7,
                  color: "#333",
                  fontFamily: '"Muli", sans-serif',
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
                    fontSize: { xs: "1.1rem", sm: "1.15rem", md: "1.2rem" },
                    fontWeight: 600,
                    color: "#D19F3B",
                    fontFamily: '"Jost", sans-serif',
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
                    fontFamily: '"Jost", sans-serif',
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
                    fontFamily: '"Jost", sans-serif',
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
                  fontFamily: '"Muli", sans-serif',
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