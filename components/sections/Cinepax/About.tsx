import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";

export default function About() {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            gap: { xs: 4, md: 6 },
            py: { xs: 6, md: 8 },
            minHeight: { xs: "auto", md: 450 },
          }}
        >
          {/* Left Side - Text Content */}
          <Box
            sx={{
              flex: { xs: "1", md: "1" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#000000",
            }}
          >
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
                color: "#333333",
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
                  <Typography sx={{ fontWeight: 600, color: "#000000" }}>
                    Visit Us
                  </Typography>
                  <Typography sx={{ color: "#666666" }}>
                    Giga Mall - Cinepax
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AccessTimeIcon sx={{ color: "#D19F3B", fontSize: 26 }} />
                <Box>
                  <Typography
                    sx={{ fontWeight: 600, color: "#000000" }}
                  >
                    Opening Hours
                  </Typography>
                  <Typography sx={{ color: "#666666" }}>
                    11:00 AM - 12:00 AM
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneIcon sx={{ color: "#D19F3B", fontSize: 26 }} />
                <Box>
                  <Typography sx={{ fontWeight: 600, color: "#000000" }}>
                    Call Us
                  </Typography>
                  <Typography sx={{ color: "#666666" }}>
                    +92 51 111 246 372
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Image */}
          <Box
            sx={{
              flex: { xs: "1", md: "1" },
              position: "relative",
              width: "100%",
              height: { xs: 300, md: 450 },
              minHeight: { xs: 300, md: 450 },
            }}
          >
            <Image
              src="/Cinepax/about-landscape.png"
              alt="Cinepax Cinema Interior"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* ================= CALL TO ACTION ================= */}
      <Container maxWidth="xl">
        <Box
          sx={{
            background:
              "linear-gradient(to right, #ffffff 0%, #D19F3B 20%, #D19F3B 50%, #D19F3B 80%, #ffffff 100%)",
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
