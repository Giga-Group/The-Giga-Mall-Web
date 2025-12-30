import { useState } from "react";
import { Box, Typography, Button, Select, MenuItem, FormControl } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function BookTickets() {
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedShowtime, setSelectedShowtime] = useState("1:00 PM");

  const movies = [
    "Avatar",
    "Anaconda",
    "Marty Supreme",
    "Gladiator II",
  ];

  const showtimes = ["1:00 PM", "3:30 PM", "7:00 PM", "10:30 PM"];

  const getTodayDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        bgcolor: "#ffffff",
        position: "relative",
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Title with horizontal lines */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(0,0,0,0.2), transparent)",
              maxWidth: "200px",
            }}
          />
          <Typography
            sx={{
              fontFamily: '"Arvo", serif',
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              color: "#D19F3B",
              mx: { xs: 3, md: 4 },
              textAlign: "center",
            }}
          >
            Book Your Tickets
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to left, transparent, rgba(0,0,0,0.2), transparent)",
              maxWidth: "200px",
            }}
          />
        </Box>

        {/* Date Selection and Movie Dropdown */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 3, sm: 4 },
            mb: { xs: 5, md: 6 },
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: "center",
          }}
        >
          {/* Date Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              onClick={() => setSelectedDate("today")}
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: selectedDate === "today" ? "#ffffff" : "#666",
                bgcolor: selectedDate === "today" ? "#D19F3B" : "#f5f5f5",
                borderRadius: "8px",
                px: { xs: 3, md: 4 },
                // py: { xs: 1.2, md: 1.5 },
                textTransform: "none",
                border: selectedDate === "today" ? "1px solid #D19F3B" : "1px solid #e0e0e0",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: selectedDate === "today" ? "#B88A2E" : "#eeeeee",
                  borderColor: selectedDate === "today" ? "#B88A2E" : "#d0d0d0",
                },
              }}
            >
              Today
              <Typography
                component="span"
                sx={{
                  ml: 1,
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
                  opacity: 0.7,
                  fontWeight: 400,
                }}
              >
                {getTodayDate()}
              </Typography>
            </Button>
            <Button
              onClick={() => setSelectedDate("tomorrow")}
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: selectedDate === "tomorrow" ? "#ffffff" : "#666",
                bgcolor: selectedDate === "tomorrow" ? "#D19F3B" : "#f5f5f5",
                borderRadius: "8px",
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                textTransform: "none",
                border: selectedDate === "tomorrow" ? "1px solid #D19F3B" : "1px solid #e0e0e0",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: selectedDate === "tomorrow" ? "#B88A2E" : "#eeeeee",
                  borderColor: selectedDate === "tomorrow" ? "#B88A2E" : "#d0d0d0",
                },
              }}
            >
              Tomorrow
              <Typography
                component="span"
                sx={{
                  ml: 1,
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
                  opacity: 0.7,
                  fontWeight: 400,
                }}
              >
                {getTomorrowDate()}
              </Typography>
            </Button>
          </Box>

          {/* Movie Dropdown */}
          <FormControl
            sx={{
              minWidth: { xs: "100%", sm: "300px" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                bgcolor: "#f5f5f5",
                color: "#333",
                fontFamily: '"Poppins", sans-serif',
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: "#bdbdbd",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D19F3B",
                },
              },
            }}
          >
            <Select
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
              displayEmpty
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                color: "#333",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: { xs: "0.9rem", md: "1rem" },
                "& .MuiSelect-select": {
                  padding: { xs: "12px 14px", md: "14px 16px" },
                },
                "& .MuiSvgIcon-root": {
                  color: "#666",
                },
              }}
            >
              <MenuItem value="" disabled sx={{ fontFamily: '"Poppins", sans-serif', color: "#999" }}>
                Select Movie
              </MenuItem>
              {movies.map((movie) => (
                <MenuItem
                  key={movie}
                  value={movie}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    color: "#333",
                    "&:hover": {
                      bgcolor: "rgba(209, 159, 59, 0.1)",
                    },
                  }}
                >
                  {movie}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Showtime Buttons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, md: 3 },
            justifyContent: "center",
          }}
        >
          {showtimes.map((time) => (
            <Button
              key={time}
              onClick={() => setSelectedShowtime(time)}
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: selectedShowtime === time ? "#ffffff" : "#666",
                bgcolor: selectedShowtime === time ? "#D19F3B" : "#f5f5f5",
                borderRadius: "8px",
                px: { xs: 3, md: 4 },
                // py: { xs: 1.2, md: 1.5 },
                textTransform: "none",
                border: selectedShowtime === time ? "1px solid #D19F3B" : "1px solid #e0e0e0",
                transition: "all 0.3s ease",
                minWidth: { xs: "120px", md: "140px" },
                "&:hover": {
                  bgcolor: selectedShowtime === time ? "#B88A2E" : "#eeeeee",
                  borderColor: selectedShowtime === time ? "#B88A2E" : "#d0d0d0",
                },
              }}
            >
              {time}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

