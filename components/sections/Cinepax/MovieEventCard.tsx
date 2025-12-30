import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function MovieEventCard({
  image,
  label,
  title,
  details,
  buttonText,
  onButtonClick, // New prop
}: {
  image: string;
  label?: string;
  title: string;
  details: string;
  buttonText: string;
  onButtonClick: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "rgba(0,0,0,0.04)",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
        },
      }}
    >
      <Box sx={{ position: "relative", height: { xs: 380, md: 450 }, width: "100%", overflow: "hidden" }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
        {label && (
          <Box
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              bgcolor: "#D19F3B",
              color: "white",
              px: 2,
              py: 0.8,
              borderRadius: "6px",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            {label}
          </Box>
        )}
      </Box>

      <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: { xs: "1.1rem", md: "1.2rem" },
            color: "#222",
            mb: 1.5,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Quicksand", sans-serif',
            fontSize: { xs: "0.85rem", md: "0.9rem" },
            color: "#555",
            mb: 3,
            lineHeight: 1.6,
            flexGrow: 1,
          }}
        >
          {details}
        </Typography>

        <Button
          onClick={onButtonClick}
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#D19F3B",
            color: "white",
            border: "2px solid #D19F3B",
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: { xs: "0.8rem", md: "0.85rem" },
            letterSpacing: "0.05em",
            textTransform: "none",
            borderRadius: 0,
            py: 1,
            justifyContent: "center",
            transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            "&:hover": {
              bgcolor: "#B88A2E",
              borderColor: "#B88A2E",
              transform: "translateY(-3px)",
              boxShadow: "0 8px 20px rgba(209, 159, 59, 0.3)",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}