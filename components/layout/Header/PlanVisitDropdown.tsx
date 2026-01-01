"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

interface PlanVisitDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// Only three links now
const planVisitItems = [
  { label: "Opening hours", href: "/opening-hours?tab=opening-hours", icon: <AccessTimeIcon /> },
  { label: "Getting here", href: "/opening-hours?tab=getting-here", icon: <LocationOnIcon /> },
  { label: "Parking", href: "/opening-hours?tab=parking", icon: <LocalParkingIcon /> },
];

const PlanVisitDropdown = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: PlanVisitDropdownProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        setHoveredIndex(null);
        onMouseLeave();
      }}
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        backgroundColor: "#ffffff",
        boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 6 },
      }}
    >
      {/* Container 70% width */}
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { md: 4, lg: 6 },
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left: Links with icons */}
        <Box
          sx={{
            flex: "0 0 40%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "flex-start",
            justifyContent: "center",
            position: "relative",
            paddingRight: "24px",
          }}
        >
          {planVisitItems.map((item, idx) => (
            <Box
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
                transition: "all 0.2s ease",
                width: "100%",
              }}
            >
              {/* Left icon */}
              <Box sx={{ color: hoveredIndex === idx ? "#D19F3B" : "#555" }}>
                {item.icon}
              </Box>

              {/* Link text */}
              <Typography
                component={Link}
                href={item.href}
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: hoveredIndex === idx ? 600 : 400,
                  color: hoveredIndex === idx ? "#D19F3B" : "#000",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  width: "100%",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}

          {/* Fixed arrow appears only on hover */}
          {hoveredIndex !== null && (
            <ArrowForwardIos
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#D19F3B",
                fontSize: 16,
                transition: "opacity 0.2s ease",
                opacity: 1,
              }}
            />
          )}
        </Box>

        {/* Right: Google Map of Giga Mall */}
        <Box
          sx={{
            flex: "0 0 60%",
            borderRadius: "10px",
            overflow: "hidden",
            height: { xs: "200px", md: "250px", lg: "300px" },
            width: "100%",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.183853827374!2d73.06648881521979!3d33.6061543807196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df955f60ce9ff7%3A0x8c5b4b03a06f0310!2sGiga%20Mall%2C%20Rawat%2C%20Rawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704110000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PlanVisitDropdown;
