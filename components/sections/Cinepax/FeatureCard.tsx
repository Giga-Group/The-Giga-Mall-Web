import { Box, Typography } from "@mui/material";

export default function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Box sx={{ textAlign: "center", px: { xs: 2, md: 3 } }}>
      <Box sx={{ color: "#1a237e", mb: 3, display: "flex", justifyContent: "center" }}>
        {icon}
      </Box>
      <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: "1.4rem", md: "1.6rem" }, color: "#222", mb: 2 }}>
        {title}
      </Typography>
      <Typography sx={{ fontFamily: '"Jost", sans-serif', fontSize: "1.05rem", color: "#444", lineHeight: 1.7 }}>
        {text}
      </Typography>
    </Box>
  );
}
