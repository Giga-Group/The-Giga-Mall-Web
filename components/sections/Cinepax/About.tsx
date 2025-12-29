import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 8 },
          alignItems: "center",
        }}
      >
        {/* Image Section with Hover Effect */}
        <Box
          sx={{
            width: { xs: "100%", md: "80%" },
            height: { xs: 320, sm: 400, md: 450 },
            position: "relative",
            borderRadius: { xs: "16px", md: "24px" },
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
            transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
            "&:hover": {
              transform: "translateY(-12px)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.25)",
            },
          }}
        >
          <Image
            src="/Cinepax/c1.jpg"
            alt="Cinepax Premium Interior"
            fill
            priority
            style={{
              objectFit: "cover",
              transition: "transform 0.8s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          {/* Optional subtle overlay on hover */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(209,159,59,0.1) 0%, transparent 50%)",
              opacity: 0,
              transition: "opacity 0.5s ease",
              pointerEvents: "none",
              "&:hover": { opacity: 1 },
            }}
          />
        </Box>

        {/* Text Content */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: "2.2rem", md: "3rem" },
              color: "#D19F3B",
              mb: { xs: 4, md: 5 },
              lineHeight: 1.2,
              letterSpacing: "0.02em",
            }}
          >
            Welcome to Cinepax
          </Typography>

          {[
            "Cinepax is a premier cinema destination crafted for unforgettable movie-going experiences. Featuring cutting-edge projection, immersive surround sound, and thoughtfully designed seating.",
            "From the latest blockbusters to timeless classics, Cinepax blends comfort, technology, and ambiance seamlessly. Our theaters are designed to transport you into the heart of every story.",
            "Step into a world where luxury meets entertainment — welcome to the future of cinema.",
          ].map((text, index) => (
            <Box key={index} sx={{ mb: { xs: 3, md: 4 } }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Jost", "Mulish", sans-serif',
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  color: "#444",
                  textAlign: { xs: "left", md: "justify" },
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}