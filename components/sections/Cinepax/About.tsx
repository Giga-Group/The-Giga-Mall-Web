import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";

export default function About() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "90vh", md: "85vh" },
          minHeight: 600,
          overflow: "hidden",
        }}
      >
        {/* Desktop Image */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            inset: 0,
          }}
        >
          <Image
            src="/Cinepax/about-landscape.png"
            alt="Cinepax Cinema Interior"
            fill
            priority
            style={{
              objectFit: "contain",
              objectPosition: "center",
              backgroundColor: "#000",
            }}
          />
        </Box>

        {/* Mobile Image */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            inset: 0,
          }}
        >
          <Image
            src="/Cinepax/mobile-view.jpg"
            alt="Cinepax Cinema Interior Mobile"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>

        {/* Dark Overlay */}
{/* Dark Overlay */}
<Box
  sx={{
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none", // so it doesn’t block clicks
    background: `
      linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 25%),
      linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 25%)
    `,
  }}
/>


        {/* Content */}
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
            height: "74%",
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" }, // Upward on mobile
            pt: { xs: 6, md: 0 }, // Add top padding on mobile
          }}
        >
          <Box sx={{ maxWidth: 450, color: "#ffffff" }}>
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                color: "#D19F3B",
                mb: { xs: 2, md: 4 },
                lineHeight: 1.2,
              }}
            >
              About Cinepax
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                lineHeight: 1.6,
                color: "#f1f1f1",
                mb: { xs: 3, md: 5 },
              }}
            >
              Cinepax Cinemas offers world-class movie experiences with
              cutting-edge sound, comfort seating, and premium visuals.
            </Typography>

            {/* Contact Information */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocationOnIcon sx={{ color: "#D19F3B", fontSize: 26 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Visit Us</Typography>
                  <Typography sx={{ color: "#dddddd" }}>
                    Giga Mall - Cinepax
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AccessTimeIcon sx={{ color: "#D19F3B", fontSize: 26 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Opening Hours
                  </Typography>
                  <Typography sx={{ color: "#dddddd" }}>
                    11:00 AM - 12:00 AM
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneIcon sx={{ color: "#D19F3B", fontSize: 26 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Call Us</Typography>
                  <Typography sx={{ color: "#dddddd" }}>
                    +92 51 111 246 372
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= CALL TO ACTION ================= */}
      <Container maxWidth="lg">
        <Box
          sx={{
            background:
              "linear-gradient(to right, #ffffff 0%, #D19F3B 20%, #B88A2E 50%, #D19F3B 80%, #ffffff 100%)",
            borderRadius: "8px",
            py: { xs: 3, md: 4 },
            px: { xs: 3, md: 4 },
            textAlign: "center",
            mt: { xs: 4, md: 6 },
            mb: { xs: 6, md: 8 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#ffffff",
            }}
          >
            Book your next movie night today!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
