import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";

export default function About() {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 8 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Left Section - Text Content */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "#D19F3B",
                mb: { xs: 3, md: 4 },
                lineHeight: 1.2,
              }}
            >
              About Cinepax
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "#444",
                mb: { xs: 4, md: 5 },
              }}
            >
              Cinepax Cinemas offers world-class movie experiences with cutting-edge sound, comfort seating, and premium visuals.
            </Typography>

            {/* Contact Information */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2.5, md: 3 } }}>
              {/* Visit Us */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocationOnIcon sx={{ color: "#D19F3B", fontSize: { xs: 24, md: 28 } }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#222",
                      mb: 0.5,
                    }}
                  >
                    Visit Us
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#666",
                    }}
                  >
                    Giga Mall - Cinepax
                  </Typography>
                </Box>
              </Box>

              {/* Opening Hours */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AccessTimeIcon sx={{ color: "#D19F3B", fontSize: { xs: 24, md: 28 } }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#222",
                      mb: 0.5,
                    }}
                  >
                    Opening Hours
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#666",
                    }}
                  >
                    11:00 AM - 12:00 AM
                  </Typography>
                </Box>
              </Box>

              {/* Call Us */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneIcon sx={{ color: "#D19F3B", fontSize: { xs: 24, md: 28 } }} />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#222",
                      mb: 0.5,
                    }}
                  >
                    Call Us
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      color: "#666",
                    }}
                  >
                    +92 51 111 246 372
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Image */}
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            {/* Cinema Interior Image */}
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, sm: 400, md: 500 },
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/Cinepax/auditorium.jpg"
                alt="Cinepax Cinema Interior"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Call to Action Banner */}
        <Box
          sx={{
            background: "linear-gradient(to right, #ffffff 0%, #D19F3B 20%, #B88A2E 50%, #D19F3B 80%, #ffffff 100%)",
            borderRadius: "8px",
            py: { xs: 3, md: 4 },
            px: { xs: 3, md: 4 },
            textAlign: "center",
            mt: { xs: 4, md: 6 },
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
              textAlign: "center",
            }}
          >
            Book your next movie night today!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}