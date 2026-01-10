"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Link, useMediaQuery, useTheme } from "@mui/material";
import { Phone } from "@mui/icons-material";
import Image from "next/image";
import { StoreDetail, storeDetails } from "@/lib/utils/storeData";
import { getMobileBrandImage } from "@/lib/utils/constants";
import { serviceDetails } from "@/lib/utils/servicesData";

interface StoreHeroProps {
  store: StoreDetail;
}

// Helper function to get logo path from store slug - matches StoreGrid logic
const getStoreLogo = (slug?: string): string | null => {
  if (!slug) return null;

  // First, try to get logo from storeDetails
  const storeDetail = storeDetails.find(store => store.slug === slug);
  if (storeDetail?.logo) {
    // Check if logo path is valid (not empty, not just .jpg, etc.)
    const logoPath = storeDetail.logo.trim();
    // Filter out invalid paths like '/logo/.jpg', '/.jpg', or paths ending with '/.jpg' or '/.png'
    if (logoPath && 
        logoPath !== '/logo/.jpg' && 
        logoPath !== '/.jpg' && 
        !logoPath.endsWith('/.jpg') && 
        !logoPath.endsWith('/.png') &&
        logoPath.length > 5) { // Ensure it's a real path, not just a placeholder
      return logoPath;
    }
  }

  // Also check serviceDetails for services
  const serviceDetail = serviceDetails.find(service => service.slug === slug);
  if (serviceDetail?.logo) {
    // Check if logo path is valid (not empty, not just .jpg, etc.)
    const logoPath = serviceDetail.logo.trim();
    // Filter out invalid paths like '/logo/.jpg', '/.jpg', or paths ending with '/.jpg' or '/.png'
    if (logoPath && 
        logoPath !== '/logo/.jpg' && 
        logoPath !== '/.jpg' && 
        !logoPath.endsWith('/.jpg') && 
        !logoPath.endsWith('/.png') &&
        logoPath.length > 5) { // Ensure it's a real path, not just a placeholder
      return logoPath;
    }
  }

  // Map of slug to logo filename - prioritizing dedicated logo files
  const logoMap: Record<string, string> = {
    // Shop logos - using dedicated logo files
    'alkaram': '/logo/alkaram logo.jpg',
    'almas': '/logo/almas logo.png',
    'almirah': '/logo/almirah logo.png',
    'batik-studio': '/logo/batik studio logo.jpg',
    'bloon': '/logo/bloon logo.jpg',
    'bonanza': '/logo/bonanza satrangi logo.jpg',
    'breakout': '/logo/Breakout logo.png',
    'cambridge': '/logo/cambridge logo.jpg',
    'junaid-jamshed': '/logo/junaid jamshed logo.png',
    'kayseria': '/logo/kayseria logo.jpg',
    'miniso': '/logo/miniso logo.jpg',
    // Restaurant/Dine logos
    'macdonalds': '/logo/Macdonalds logo.jpg',
    'mcdonalds': '/logo/Macdonalds logo.jpg',
    'hardees': '/logo/hardees logo.jpg',
    'pizzahut': '/logo/pizza hut logo.jpg',
    'pizza-hut': '/logo/pizza hut logo.jpg',
    'cheezious': '/logo/cheezious logo.jpg',
    'wild-wings': '/logo/wings logo.jpg',
    'redapple': '/logo/red apple logo.jpg',
    'optp': '/logo/optp logo.jpg',
    'chachajee': '/logo/chachajee logo.jpg',
    'simplysufi': '/logo/simplysufi logo.jpg',
    'rewayat': '/logo/rewayat logo.jpg',
    'spicefactory': '/logo/spice factory logo.jpg',
    'chinagrill': '/logo/china grill logo.jpg',
    'kababjees': '/logo/kabab jees logo.jpg',
  };

  return logoMap[slug] || null;
};

const StoreHero = ({ store }: StoreHeroProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"), { noSsr: true });

  // Use state to ensure server and client render the same initially (desktop version)
  const [backgroundImageSrc, setBackgroundImageSrc] = useState<string | null>(
    store.backgroundImage || null
  );
  const [objectPosition, setObjectPosition] = useState<string>("50% 12%");

  // Update image source and position after hydration to match actual screen size
  useEffect(() => {
    if (store.backgroundImage) {
      setBackgroundImageSrc(
        isMobile
          ? getMobileBrandImage(store.backgroundImage, store.name, store.slug)
          : store.backgroundImage
      );
      setObjectPosition(isMobile ? "center center" : "50% 12%");
    }
  }, [isMobile, store.backgroundImage, store.name, store.slug]);

  // Get logo from StoreGrid mapping, fallback to store.logo if available
  // Validate logo path to ensure it's not an invalid placeholder
  const getValidLogoPath = (): string | null => {
    const path = getStoreLogo(store.slug) || store.logo || null;
    
    if (!path) return null;
    
    const trimmedPath = path.trim();
    
    // Check for invalid paths: empty, just extensions, or placeholder paths
    if (
      !trimmedPath ||
      trimmedPath === '/logo/.jpg' ||
      trimmedPath === '/.jpg' ||
      trimmedPath === '/logo/.png' ||
      trimmedPath === '/.png' ||
      trimmedPath.endsWith('/.jpg') ||
      trimmedPath.endsWith('/.png') ||
      trimmedPath.length <= 5 // Too short to be a real path
    ) {
      return null;
    }
    
    return trimmedPath;
  };

  const logoPath = getValidLogoPath();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "100vh", sm: "60vh", md: "65vh", lg: "70vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
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
                {backgroundImageSrc ? (
          <Image
            src={backgroundImageSrc}
            alt={store.name}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: objectPosition,
              transform: "scale(1)",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#1a1a1a",
            }}
          />
        )}
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
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: { xs: 3, md: 6, lg: 8 },
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100px", sm: "120px", md: "150px", lg: "180px" },
            height: { xs: "100px", sm: "120px", md: "150px", lg: "180px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {logoPath ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={logoPath}
                alt={store.name}
                fill
                sizes="(max-width: 600px) 100px, (max-width: 960px) 120px, (max-width: 1280px) 150px, 180px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid #ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  color: "#ffffff",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                {store.name.charAt(0)}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Text Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 },
            maxWidth: { xs: "100%", md: "600px", lg: "700px" },
          }}
        >
          {/* Description */}
          <Typography
            sx={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px" },
              lineHeight: { xs: 1.6, md: 1.7 },
              color: "#ffffff",
              fontWeight: 400,
            }}
          >
            {store.description}
          </Typography>

          {/* Contact Information */}
          {store.contact.phone && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginTop: { xs: 1, md: 2 },
                paddingTop: { xs: 2, md: 3 },
                borderTop: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  color: "#ffffff",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                CONTACT
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Phone
                  sx={{
                    fontSize: { xs: "18px", sm: "20px" },
                    color: "#ffffff",
                  }}
                />
                <Link
                  href={`tel:${store.contact.phone}`}
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 0.8,
                      textDecoration: "underline",
                    },
                  }}
                >
                  {store.contact.phone}
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default StoreHero;