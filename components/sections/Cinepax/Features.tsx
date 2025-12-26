import { Container, Typography, Box } from "@mui/material";
import FeatureCard from "./FeatureCard";
import MovieIcon from "@mui/icons-material/Movie";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Features() {
  const features = [
    { icon: <MovieIcon sx={{ fontSize: 52 }} />, title: "4K Laser Projection", text: "Ultra-sharp 4K visuals with laser technology for brighter, more vibrant colors and deeper contrasts." },
    { icon: <SurroundSoundIcon sx={{ fontSize: 52 }} />, title: "Dolby Atmos Sound", text: "Three-dimensional audio that flows all around you, placing sounds precisely in space for total immersion." },
    { icon: <EventSeatIcon sx={{ fontSize: 52 }} />, title: "Recliner Seating", text: "Plush, powered recliners with extra legroom, personal tables, and privacy dividers for ultimate comfort." },
    { icon: <AccessTimeIcon sx={{ fontSize: 52 }} />, title: "Flexible Showtimes", text: "Morning to late-night screenings, including exclusive early previews and marathon events." },
    { icon: <LocalOfferIcon sx={{ fontSize: 52 }} />, title: "VIP Perks", text: "Loyalty rewards, priority booking, special discounts, and members-only screenings." },
    { icon: <LocationOnIcon sx={{ fontSize: 52 }} />, title: "Prime Locations", text: "Conveniently located in major cities with ample parking and easy access." },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: "2rem", md: "2.8rem" }, color: "#D19F3B", textAlign: "center", mb: { xs: 6, md: 8 } }}>
        Why Choose Cinepax
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: { xs: 4, md: 6 } }}>
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} text={feature.text} />
        ))}
      </Box>
    </Container>
  );
}
