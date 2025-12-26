import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CTA() {
  return (
    <Box sx={{ width: "100%", py: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 4, md: 6, lg: 10 }, backgroundColor: "#D19F3B" }}>
      <Box sx={{ maxWidth: "1400px", margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" }, fontWeight: 400, color: "#ffffff", mb: { xs: 4, sm: 5, md: 6 }, letterSpacing: "0.02em" }}>
          Ready for the Ultimate Cinema Experience?
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: 3, sm: 4 }, justifyContent: "center", alignItems: "center" }}>
          <Button component={Link} href="#" variant="outlined" sx={{ border: "2px solid #ffffff", color: "#ffffff", textTransform: "uppercase", fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" }, fontWeight: 500, fontFamily: '"Jost", sans-serif', padding: { xs: "14px 40px", sm: "16px 50px", md: "18px 60px" }, borderRadius: 0, letterSpacing: "0.1em", transition: "all 0.4s ease", "&:hover": { backgroundColor: "#ffffff", color: "#D19F3B", borderColor: "#ffffff", transform: "translateY(-3px)" } }}>
            View Showtimes
          </Button>

          <Button component={Link} href="#" variant="outlined" sx={{ border: "2px solid #ffffff", color: "#ffffff", textTransform: "uppercase", fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" }, fontWeight: 500, fontFamily: '"Jost", sans-serif', padding: { xs: "14px 40px", sm: "16px 50px", md: "18px 60px" }, borderRadius: 0, letterSpacing: "0.1em", transition: "all 0.4s ease", "&:hover": { backgroundColor: "#ffffff", color: "#D19F3B", borderColor: "#ffffff", transform: "translateY(-3px)" } }}>
            Discover Offers
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
