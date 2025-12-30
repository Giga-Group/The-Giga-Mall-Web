import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const galleryImages = [
  { src: "/Cinepax/screen.jpg", alt: "Cinepax Premium Auditorium" },
  { src: "/Cinepax/auditorium.jpg", alt: "Cinepax Luxury Lounge & Seating" },
  // Add more images here
];

export default function Gallery() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography sx={{ fontFamily: '"Arvo", serif', fontWeight: 700, fontSize: { xs: "2.2rem", md: "3rem" }, color: "#D19F3B", textAlign: "center", mb: { xs: 6, md: 8 }, letterSpacing: "0.02em" }}>
        Inside Cinepax
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: { xs: 3, sm: 4, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
        {galleryImages.map((image, index) => (
          <Box key={index} sx={{ position: "relative", height: { xs: 320, sm: 420, md: 500 }, overflow: "hidden", borderRadius: "8px", boxShadow: "0 12px 32px rgba(0,0,0,0.2)", transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)", "&:hover": { transform: "translateY(-12px)", boxShadow: "0 24px 48px rgba(0,0,0,0.3)" } }}>
            <Image src={image.src} alt={image.alt} fill style={{ objectFit: "cover", transition: "transform 0.9s ease" }} onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")} onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} priority={index === 0} />
          </Box>
        ))}
      </Box>

      <Typography sx={{ fontFamily: '"Quicksand", sans-serif', fontSize: { xs: "1rem", md: "1.1rem" }, color: "#666", textAlign: "center", mt: { xs: 4, md: 6 }, fontStyle: "italic", maxWidth: "800px", mx: "auto", lineHeight: 1.7 }}>
        Immerse yourself in luxury — state-of-the-art screens, plush recliners, and an ambiance designed for the ultimate movie experience.
      </Typography>
    </Container>
  );
}
