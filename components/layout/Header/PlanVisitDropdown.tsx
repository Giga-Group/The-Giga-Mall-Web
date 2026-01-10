"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface PlanVisitDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const planVisitItems = [
  {
    label: "Opening hours",
    href: "/opening-hours?tab=opening-hours",
    icon: <AccessTimeIcon />,
  },
  {
    label: "Getting here",
    href: "/opening-hours?tab=getting-here",
    icon: <LocationOnIcon />,
  },
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
        position: "fixed",
        top: "80px", // Adjust to match your navbar height
        left: 0,
        right: 0,
        backgroundColor: "#ffffff",
        boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        px: { xs: 2, md: 25 },
        py: { xs: 4, md: 4 },
      }}
    >
      {/* Left-aligned links */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%", lg: "40%" },
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          alignItems: "flex-start",
        }}
      >
        {planVisitItems.map((item, idx) => (
          <Box
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              py: 1,
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                color: hoveredIndex === idx ? "#D19F3B" : "#555",
                fontSize: { xs: 28, md: 32 },
              }}
            >
              {item.icon}
            </Box>

            {/* Link Text */}
            <Typography
              component={Link}
              href={item.href}
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                fontWeight: hoveredIndex === idx ? 600 : 500,
                color: hoveredIndex === idx ? "#D19F3B" : "#000",
                fontFamily: '"Poppins", sans-serif',
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PlanVisitDropdown;
