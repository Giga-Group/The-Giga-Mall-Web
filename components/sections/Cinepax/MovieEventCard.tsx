import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
        },
      }}
    >
      <Box sx={{ position: "relative", height: { xs: 260, md: 320 } }}>
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

      <Box sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "1.4rem", md: "1.6rem" },
            color: "#222",
            mb: 2,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Jost", sans-serif',
            fontSize: "1rem",
            color: "#555",
            mb: 4,
            lineHeight: 1.7,
            flexGrow: 1,
          }}
        >
          {details}
        </Typography>

        <Button
          onClick={onButtonClick}
          variant="outlined"
          endIcon={<ArrowForwardIcon sx={{ fontSize: "18px !important" }} />}
          sx={{
            alignSelf: "flex-start",
            border: "2px solid #D19F3B",
            color: "#D19F3B",
            fontFamily: '"Jost", sans-serif',
            fontWeight: 500,
            fontSize: "0.95rem",
            letterSpacing: "0.08em",
            textTransform: "none",
            borderRadius: 0,
            px: 4,
            py: 1.4,
            transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            "&:hover": {
              bgcolor: "#D19F3B",
              color: "white",
              borderColor: "#D19F3B",
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