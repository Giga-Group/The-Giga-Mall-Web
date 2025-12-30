import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
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
          src="/Cinepax/c2.jpg"
          alt="Cinepax Cinema Experience"
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
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: { xs: "16px", md: "20px" },
            letterSpacing: "0.02em",
            lineHeight: 1.2,
          }}
        >
          CINEPAX
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: 500,
            color: "#ffffff",
            marginBottom: { xs: "24px", md: "32px" },
            letterSpacing: "0.05em",
            lineHeight: 1.3,
          }}
        >
          A Premium Cinematic Experience
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
            fontFamily: '"Quicksand", sans-serif',
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem", lg: "1.3rem" },
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.7,
            maxWidth: "600px",
            opacity: 0.95,
          }}
        >
          Experience world-class cinema with state-of-the-art visuals, immersive
          sound, and unmatched comfort — where every story comes alive on the
          big screen.
        </Typography>
      </Box>
    </Box>
  );
}
