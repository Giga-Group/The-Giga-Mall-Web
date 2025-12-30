import { Box, Typography, Container } from "@mui/material";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import EventIcon from "@mui/icons-material/Event";

export default function UltimateExperience() {
  const features = [
    {
      icon: <SurroundSoundIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "Dolby Atmos Sound",
    },
    {
      icon: <EventSeatIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "Luxury Recliner Seats",
    },
    {
      icon: <ThreeDRotationIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "3D & IMAX Screens",
    },
    {
      icon: <LocalDiningIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "Snack Bar & Combos",
    },
    {
      icon: <PhoneAndroidIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "Online Booking",
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "VIP Lounge",
    },
    {
      icon: <LocalParkingIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "Free Parking",
    },
    {
      icon: <EventIcon sx={{ fontSize: { xs: 48, md: 52 } }} />,
      title: "Private Events",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        bgcolor: "#ffffff",
      }}
    >
      <Container maxWidth="xl">
        {/* Title */}
        <Typography
          sx={{
            fontFamily: '"Arvo", serif',
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.8rem" },
            color: "#D19F3B",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          The Ultimate Cinema Experience
        </Typography>

        {/* Feature Boxes */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, md: 2.5 },
                px: { xs: 2, md: 3 },
                py: { xs: 2.5, md: 3.5 },
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#D19F3B",
                  boxShadow: "0 4px 12px rgba(209, 159, 59, 0.1)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  color: "#D19F3B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: { xs: "48px", md: "52px" },
                  flexShrink: 0,
                }}
              >
                {feature.icon}
              </Box>

              {/* Text */}
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  color: "#222",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

