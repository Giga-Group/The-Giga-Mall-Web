import { useState } from "react";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MovieEventCard from "./MovieEventCard";

type MovieCardData = {
  image: string;
  label?: string;
  title: string;
  details: string;
  buttonText: string;
};

const nowShowingMovies: MovieCardData[] = [
  {
    image: "/avatar.jpeg",
    title: "Avatar",
    details: "Action • Adventure • Sci-Fi • 3h 17m",
    buttonText: "Book Now",
  },
  {
    image: "/anacona.jpg",
    title: "Anaconda",
    details: "Action • Comedy • Horror • 1h 39m",
    buttonText: "Book Now",
  },
  {
    image: "/mart_supreme.jpg",
    title: "Marty Supreme",
    details: "Drama • Sport • 2h 30m",
    buttonText: "Book Now",
  },
  {
    image: "/gladiator 2.jpg",
    title: "Gladiator II",
    details: "Action • Drama • Epic • 2h 45m",
    buttonText: "Book Now",
  },
];

const GIGA_MALL_INFO = {
  name: "Giga Mall",
  address: "Main GT Road, DHA Phase II, Rawalpindi",
  phone: "+92 51 111 626 384",
  parking: true,
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Cinepax+Giga+Mall+Rawalpindi",
};

export default function NowShowing() {
  const [openModal, setOpenModal] = useState(false);
  const [openViewAllModal, setOpenViewAllModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieCardData | null>(null);

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
      {/* Movie Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(auto-fill, minmax(280px, 1fr))", md: "repeat(4, 1fr)" },
          gap: { xs: 4, md: 6 },
        }}
      >
        {nowShowingMovies.map((item, index) => (
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
          View All Now Showing
        </Button>
      </Box>

      {/* View All Modal */}
      <Modal open={openViewAllModal} onClose={handleCloseViewAllModal} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500 } }}>
        <Fade in={openViewAllModal}>
          <Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: "95%", sm: "80%", md: "800px" }, maxHeight: "90vh", overflow: "auto", bgcolor: "background.paper", boxShadow: 24, p: { xs: 3, md: 5 }, borderRadius: "16px", outline: "none" }}>
            <IconButton onClick={handleCloseViewAllModal} sx={{ position: "absolute", right: 16, top: 16, color: "#666" }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h3" sx={{ fontFamily: '"Arvo", serif', fontWeight: 700, color: "#D19F3B", textAlign: "center", mb: 3, fontSize: { xs: "2.2rem", md: "2.8rem" } }}>
              All Now Showing at Giga Mall
            </Typography>
            <Typography sx={{ fontFamily: '"Quicksand", sans-serif', textAlign: "center", color: "#666", mt: 4 }}>
              Full listings coming soon for Cinepax Giga Mall, Rawalpindi.
            </Typography>
          </Paper>
        </Fade>
      </Modal>

      {/* Showtime Selection Modal */}
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

                {/* Giga Mall Info Box */}
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ bgcolor: "#D19F3B", color: "white", px: 2, py: 0.8, borderRadius: "6px", fontSize: "0.9rem", fontWeight: 600 }}>
                      PARKING AVAILABLE
                    </Box>
                  </Box>
                  <Button
                    component="a"
                    href={GIGA_MALL_INFO.mapUrl}
                    target="_blank"
                    rel="noopener"
                    variant="outlined"
                    sx={{
                      borderColor: "#D19F3B",
                      color: "#D19F3B",
                      "&:hover": { bgcolor: "#D19F3B", color: "white" },
                    }}
                  >
                    View on Google Maps
                  </Button>
                </Box>

                <Box sx={{ textAlign: "center", mt: 4 }}>
                  <Typography variant="h6" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, mb: 3, color: "#333" }}>
                    Available Showtimes (Sample)
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                    {["2:00 PM", "5:30 PM", "8:45 PM", "11:00 PM"].map((time) => (
                      <Button
                        key={time}
                        variant="outlined"
                        sx={{
                          borderColor: "#D19F3B",
                          color: "#D19F3B",
                          minWidth: "120px",
                          "&:hover": { bgcolor: "#D19F3B", color: "white" },
                        }}
                      >
                        {time}
                      </Button>
                    ))}
                  </Box>
                </Box>

                <Typography sx={{ fontFamily: '"Quicksand", sans-serif', textAlign: "center", mt: 6, color: "#888", fontStyle: "italic", fontSize: "0.9rem" }}>
                  Online booking system coming soon. Stay tuned!
                </Typography>
              </>
            )}
          </Paper>
        </Fade>
      </Modal>
    </Container>
  );
}

