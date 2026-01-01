'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Modal,
  Fade,
  Backdrop,
  Paper,
  IconButton,
  Container,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import MovieEventCard from "./MovieEventCard";
import MovieCarousel from "./MovieCarousal";

// Tabs
const tabs = ["Now Showing", "Coming Soon"] as const;
type TabType = (typeof tabs)[number];

// Sample movie data
type MovieCardData = {
  image: string;
  label?: string;
  title: string;
  details: string;
  buttonText: string;
};

const movieData: Record<TabType, MovieCardData[]> = {
  "Now Showing": [
    { image: "/avatar.jpeg", title: "Avatar", details: "Action • Adventure • Sci-Fi • 3h 17m", buttonText: "Book Now" },
    { image: "/anacona_1.jpg", title: "Anaconda", details: "Action • Comedy • Horror • 1h 39m", buttonText: "Book Now" },
    { image: "/marty supreme_1.jpg", title: "Marty Supreme", details: "Drama • Sport • 2h 30m", buttonText: "Book Now" },
    { image: "/gladiator II.jpg", title: "Gladiator II", details: "Action • Drama • Epic • 2h 45m", buttonText: "Book Now" },
  ],
  "Coming Soon": [
    { image: "/greenland2_1.jpg", title: "Greenland 2: Migration", details: "Action • Thriller • January 9, 2026", buttonText: "Get Notified" },
    { image: "/the bone temple_1.jpg", title: "28 Years Later: The Bone Temple", details: "Horror • January 16, 2026", buttonText: "Get Notified" },
    { image: "/primate_1.jpg", title: "Primate", details: "Horror • Sci-Fi • January 2026", buttonText: "Get Notified" },
    { image: "/avatar 3.jpg", title: "Avatar 3", details: "Action • Adventure • Sci-Fi • December 2026", buttonText: "Get Notified" },
  ],
};

// Giga Mall Info
const GIGA_MALL_INFO = {
  name: "Giga Mall",
  address: "Main GT Road, DHA Phase II, Rawalpindi",
  phone: "+92 51 111 626 384",
  parking: true,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Cinepax+Giga+Mall+Rawalpindi",
};

// ---------------------- Mobile Carousel ----------------------
type FeaturedSectionMobileProps = {
  items: MovieCardData[];
  onItemClick: (item: MovieCardData) => void;
};

const TRANSITION_MS = 500;

function FeaturedSectionMobile({ items, onItemClick }: FeaturedSectionMobileProps) {
  const total = items.length;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const isAnimatingRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    setDirection("next");
    isAnimatingRef.current = true;
    setCurrent((c) => (c + 1) % total);
    setTimeout(() => (isAnimatingRef.current = false), TRANSITION_MS);
  }, [total]);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    setDirection("prev");
    isAnimatingRef.current = true;
    setCurrent((c) => (c - 1 + total) % total);
    setTimeout(() => (isAnimatingRef.current = false), TRANSITION_MS);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [goNext]);

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  const getPosition = (index: number) => {
    if (index === current) return "center";
    if (index === prevIndex) return "left";
    if (index === nextIndex) return "right";
    return "hidden";
  };

  const slideStyle = {
    base: {
      position: "absolute" as const,
      top: 0,
      left: "50%",
      width: "90%",
      height: "100%",
      transition: `transform ${TRANSITION_MS}ms ease, opacity ${TRANSITION_MS}ms ease`,
      borderRadius: 12,
      overflow: "hidden",
    },
    center: { transform: "translateX(-50%) scale(1)", opacity: 1, zIndex: 3 },
    left: { transform: "translateX(-150%) scale(0.9)", opacity: 0, zIndex: 2 },
    right: { transform: "translateX(50%) scale(0.9)", opacity: 0, zIndex: 2 },
    hidden: { opacity: 0, pointerEvents: "none", zIndex: 1 },
  };

  return (
    <Box
      sx={{ position: "relative", width: "100%", height: 400 }}
      onTouchStart={(e) => (touchStartRef.current = e.touches[0].clientX)}
      onTouchMove={(e) => (touchEndRef.current = e.touches[0].clientX)}
      onTouchEnd={() => {
        if (touchStartRef.current !== null && touchEndRef.current !== null) {
          const delta = touchStartRef.current - touchEndRef.current;
          if (Math.abs(delta) > 50) {
            delta > 0 ? goNext() : goPrev();
          }
        }
        touchStartRef.current = null;
        touchEndRef.current = null;
      }}
    >
      {[prevIndex, current, nextIndex].map((index) => {
        const pos = getPosition(index);
        const item = items[index];
        return (
          <Box
            key={index}
            sx={{ ...slideStyle.base, ...slideStyle[pos], cursor: "pointer" }}
            onClick={() => onItemClick(item)}
          >
            <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
            {pos === "center" && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: 16 }}>{item.title}</Typography>
                <Typography sx={{ fontSize: 14 }}>{item.details}</Typography>
              </Box>
            )}
          </Box>
        );
      })}

      {/* Arrows */}
      <IconButton
        onClick={goPrev}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.9)",
          color: "#D19F3B",
          "&:hover": { background: "rgba(255,255,255,1)" },
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={goNext}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.9)",
          color: "#D19F3B",
          "&:hover": { background: "rgba(255,255,255,1)" },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

// ---------------------- Main Component ----------------------
export default function MoviesEvents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [activeTab, setActiveTab] = useState<TabType>("Now Showing");
  const [openModal, setOpenModal] = useState(false);
  const [openViewAllModal, setOpenViewAllModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieCardData | null>(null);

  const currentData = movieData[activeTab] ?? [];

  const handleOpenModal = (movie: MovieCardData) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMovie(null);
  };
  const handleOpenViewAllModal = () => setOpenViewAllModal(true);
  const handleCloseViewAllModal = () => setOpenViewAllModal(false);

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
      {/* Tabs */}
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, mb: { xs: 6, md: 8 } }}>
        {tabs.map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: "1.1rem", md: "1.4rem" },
              fontWeight: 600,
              color: activeTab === tab ? "#D19F3B" : "#666",
              textTransform: "none",
              position: "relative",
              pb: 1,
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -14,
                left: 0,
                width: activeTab === tab ? "100%" : "0",
                height: "3px",
                backgroundColor: "#D19F3B",
                transition: "width 0.4s ease",
              },
              "&:hover": { color: "#D19F3B", bgcolor: "transparent" },
            }}
          >
            {tab}
          </Button>
        ))}
      </Box>

      {/* Desktop Grid */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: { xs: 4, md: 6 },
        }}
      >
        {currentData.map((item, index) => (
          <MovieEventCard
            key={index}
            image={item.image}
            label={item.label}
            title={item.title}
            details={item.details}
            buttonText={item.buttonText}
            onButtonClick={() => handleOpenModal(item)}
          />
        ))}
      </Box>

      {/* Mobile Carousel */}
<Box sx={{ display: { xs: "block", md: "none" }, mb: 4 }}>
  <MovieCarousel items={currentData} onItemClick={handleOpenModal} />
</Box>

      {/* View All Button */}
      <Box sx={{ textAlign: "center", mt: { xs: 8, lg: 5 } }}>
        <Button
          onClick={handleOpenViewAllModal}
          variant="outlined"
          sx={{
            border: "2px solid #D19F3B",
            color: "#D19F3B",
            px: 6,
            py: 1,
            borderRadius: 0,
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.4s ease",
            "&:hover": {
              bgcolor: "#D19F3B",
              color: "white",
              transform: "translateY(-4px)",
              boxShadow: "0 12px 24px rgba(209, 159, 59, 0.3)",
            },
          }}
        >
          View All {activeTab}
        </Button>
      </Box>

      {/* View All Modal */}
      <Modal open={openViewAllModal} onClose={handleCloseViewAllModal} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500 } }}>
        <Fade in={openViewAllModal}>
          <Paper
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "95%", sm: "80%", md: "800px" },
              maxHeight: "90vh",
              overflow: "auto",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: { xs: 3, md: 5 },
              borderRadius: "16px",
              outline: "none",
            }}
          >
            <IconButton onClick={handleCloseViewAllModal} sx={{ position: "absolute", right: 16, top: 16, color: "#666" }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h3" sx={{ fontFamily: '"Arvo", serif', fontWeight: 700, color: "#D19F3B", textAlign: "center", mb: 3, fontSize: { xs: "2.2rem", md: "2.8rem" } }}>
              All {activeTab} at Giga Mall
            </Typography>
            <Typography sx={{ fontFamily: '"Quicksand", sans-serif', textAlign: "center", color: "#666", mt: 4 }}>
              Full listings coming soon for Cinepax Giga Mall, Rawalpindi.
            </Typography>
          </Paper>
        </Fade>
      </Modal>

      {/* Movie Modal */}
      <Modal open={openModal} onClose={handleCloseModal} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500 } }}>
        <Fade in={openModal}>
          <Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: "90%", sm: "80%", md: "700px" }, maxHeight: "90vh", overflow: "auto", bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: "16px", outline: "none" }}>
            <IconButton onClick={handleCloseModal} sx={{ position: "absolute", right: 12, top: 12 }}>
              <CloseIcon />
            </IconButton>

            {selectedMovie && (
              <>
                <Typography variant="h4" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, color: "#D19F3B", mb: 3, textAlign: "center" }}>
                  {selectedMovie.title}
                </Typography>
                <Box sx={{ mb: 4, p: 3, bgcolor: "rgba(209,159,59,0.08)", borderRadius: "12px" }}>
                  <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, color: "#D19F3B", mb: 2 }}>
                    Location: Cinepax Giga Mall, Rawalpindi
                  </Typography>
                  <Typography sx={{ fontFamily: '"Quicksand", sans-serif', mb: 1, color: "#333" }}>
                    <strong>Address:</strong> {GIGA_MALL_INFO.address}
                  </Typography>
                  <Typography sx={{ fontFamily: '"Quicksand", sans-serif', mb: 2, color: "#333" }}>
                    <strong>Contact:</strong> {GIGA_MALL_INFO.phone}
                  </Typography>
                  {GIGA_MALL_INFO.parking && (
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ bgcolor: "#D19F3B", color: "white", px: 2, py: 0.8, borderRadius: "6px", fontSize: "0.9rem", fontWeight: 600 }}>
                        PARKING AVAILABLE
                      </Box>
                    </Box>
                  )}
                  <Button component="a" href={GIGA_MALL_INFO.mapUrl} target="_blank" rel="noopener" variant="outlined" sx={{ borderColor: "#D19F3B", color: "#D19F3B", "&:hover": { bgcolor: "#D19F3B", color: "white" } }}>
                    View on Google Maps
                  </Button>
                </Box>
              </>
            )}
          </Paper>
        </Fade>
      </Modal>
    </Container>
  );
}
