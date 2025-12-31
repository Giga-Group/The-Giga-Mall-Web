"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DiscoverEventsOffers from "@/components/sections/DiscoverEventsOffers";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Image from "next/image";

export default function EntertainPage() {
  const attractions = [
    {
      title: "KidZania",
      description:
        "Interactive city for kids to learn n play.",
      image: "/kidzania.jpg",
    },
    {
      title: "CinePax Cinema",
      description:
        "Watch your favorite blockbusters in style",
      image: "/cinepax.jpg",
    },
    {
      title: "Ice Rink",
      description:
        "Glide and skate like a pro",
      image: "/ice_rink.jpg",
    },
    {
      title: "Fun City Arcade",
      description:
        "Exciting games for all ages",
      image: "/funcity.jpg",
    },
  ];

  const events = [
    {
      title: "Drum Circle",
      description: "Join a rhythmic celebration of beats and music for all ages.",
      image: "/event1.jpg",
    },
    {
      title: "XX Factor UGC Battle",
      description:
        "Witness local talents compete in an electrifying user-generated content battle.",
      image: "/event2.jpg",
    },
    {
      title: "Christmas Celebration",
      description:
        "Enjoy festive fun with lights, music, and family-friendly activities.",
      image: "/event3.jpg",
    },
    {
      title: "Santa Meet & Greet",
      description:
        "Bring the kids to meet Santa and capture unforgettable holiday moments.",
      image: "/event4.jpg",
    },
  ];

  const familyMoments = [
    {
      title: "Family Bowling",
      description: "Bond and have fun with exciting bowling lanes for all ages.",
      image: "/family1.jpg",
    },
    {
      title: "Photo Memories",
      description:
        "Capture your unforgettable moments at Giga Mall’s scenic spots.",
      image: "/family2.jpg",
    },
    {
      title: "Mini Golf",
      description: "Enjoy friendly competition in our indoor mini golf area.",
      image: "/family3.jpg",
    },
  ];

  const diningOptions = [
    {
      title: "Gourmet Pizza",
      description:
        "Savor freshly baked pizzas with authentic flavors for the whole family.",
      image: "/dining1.jpg",
    },
    {
      title: "Asian Delights",
      description:
        "Taste exquisite Asian cuisine crafted by professional chefs.",
      image: "/dining2.jpg",
    },
    {
      title: "Dessert Heaven",
      description:
        "Indulge in a variety of sweet treats, cakes, and ice creams.",
      image: "/dining3.jpg",
    },
  ];

  const kidsPlayland = [
    {
      title: "Soft Play Area",
      description:
        "Safe and fun soft play zones for toddlers and young children.",
      image: "/kids1.jpg",
    },
    {
      title: "Adventure Slides",
      description: "Thrilling slides and climbing frames for energetic kids.",
      image: "/kids2.jpg",
    },
    {
      title: "Interactive Games",
      description: "Engaging games that stimulate learning and creativity.",
      image: "/kids3.jpg",
    },
  ];

  // Reusable Card Section
  const CardSection = ({ title, description, items, bgColor }: any) => (
    <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: bgColor }}>
      <Box sx={{ textAlign: "center", mb: 12 }}>
        <Typography
          sx={{
            fontFamily: '"Arvo", serif',
            fontSize: { xs: "2.5rem", md: "3.8rem" },
            color: "#D19F3B",
            fontWeight: 700,
            textShadow: "2px 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Jost", sans-serif',
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "#555",
            maxWidth: "850px",
            mx: "auto",
            lineHeight: 1.8,
            mt: 2,
          }}
        >
          {description}
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 2, md: 6 } }}
      >
        {items.map((item: any, idx: number) => (
          <Grid sx={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Arvo", serif',
                    color: "#D19F3B",
                    mb: 1,
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Jost", sans-serif',
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
         {/* ================= HERO SECTION ================= */}
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: { xs: "100vh", md: "90vh" },
            paddingTop: { xs: "90px", md: "100px" },
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {/* Mobile Video */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              inset: 0,
              height: "100vh",
              zIndex: 0,
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/Funcity Reel.mp4" type="video/mp4" />
            </video>
          </Box>

          {/* Desktop Image */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          >
            <Image
              src="/6485.jpg"
              alt="Entertainment at Giga Mall"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)",
              zIndex: 1,
            }}
          />

          {/* Hero Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: "1400px",
              mx: "auto",
              px: { xs: 2, sm: 4, md: 6 },
              pb: { xs: 6, md: 10 },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: "2.8rem", sm: "3.8rem", md: "4.5rem" },
                color: "#D19F3B",
                letterSpacing: "0.12em",
                mb: 2,
                lineHeight: 1.1,
              }}
            >
              ENTERTAIN & EXPLORE
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                color: "#ffffff",
                maxWidth: "720px",
                lineHeight: 1.8,
                opacity: 0.95,
                mb: 5,
              }}
            >
              Dive into an unforgettable experience with world-class cinema,
              award-winning family adventures, thrilling fun zones, and
              exquisite dining — all under one roof at Islamabad’s premier
              entertainment destination.
            </Typography>

            {/* Tags: hidden on mobile */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              sx={{ mb: 4, display: { xs: "none", md: "flex" } }}
            >
              {["CINEMA", "FAMILY FUN", "ADVENTURE", "SAFE & SECURE"].map(
                (item) => (
                  <Box
                    key={item}
                    sx={{
                      border: "1px solid rgba(209,159,59,0.6)",
                      color: "#D19F3B",
                      px: 3,
                      py: 1,
                      fontSize: "0.8rem",
                      letterSpacing: "0.22em",
                      fontFamily: '"Jost", sans-serif',
                      borderRadius: "999px",
                    }}
                  >
                    {item}
                  </Box>
                )
              )}
            </Stack>

            <Button
              sx={{
                backgroundColor: "#D19F3B",
                color: "#000",
                px: { xs: 4, md: 6 },
                py: { xs: 1, md: 1.8 },
                fontSize: { xs: "0.9rem", md: "1rem" },
                borderRadius: "999px",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#fff", color: "#D19F3B" },
              }}
            >
              Explore Attractions
            </Button>
          </Box>
        </Box>

        {/* PREMIUM ATTRACTIONS GRID */}
        <CardSection
          title="Endless Fun Awaits"
          description="Discover world-class entertainment, family-friendly adventures, and thrilling experiences under one roof."
          items={attractions}
          bgColor="#fef9f4"
        />

        {/* UPCOMING EVENTS */}
        <CardSection
          title="Upcoming Events"
          description="Join us for exclusive events, live shows, and festive celebrations that bring joy and memories for the whole family."
          items={events}
          bgColor="#fff5e6"
        />

        {/* FAMILY MOMENTS */}
        <CardSection
          title="Family Moments"
          description="Create unforgettable memories with fun-filled activities and experiences the whole family will enjoy."
          items={familyMoments}
          bgColor="#fef9f4"
        />

        {/* DELICIOUS DINING */}
        <CardSection
          title="Delicious Dining"
          description="Savor world-class flavors and delightful dishes from our exquisite restaurants."
          items={diningOptions}
          bgColor="#fff5e6"
        />

        {/* KIDS PLAYLAND */}
        <CardSection
          title="Kids Playland"
          description="Safe, exciting, and interactive play zones designed to keep your little ones engaged and happy."
          items={kidsPlayland}
          bgColor="#fef9f4"
        />

        <DiscoverEventsOffers />
      </main>

      <Footer />
    </>
  );
}
