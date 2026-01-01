'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import Image from "next/image";

// Types
type MovieCardData = {
  image: string;
  label?: string;
  title: string;
  details: string;
  buttonText: string;
};

type MovieCarouselProps = {
  items: MovieCardData[];
  onItemClick: (item: MovieCardData) => void;
};

const TRANSITION_MS = 300;

export default function MovieCarousel({ items, onItemClick }: MovieCarouselProps) {
  const total = items.length;
  const [current, setCurrent] = useState(0);
  const isAnimatingRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrent((c) => (c + 1) % total);
    setTimeout(() => (isAnimatingRef.current = false), TRANSITION_MS);
  }, [total]);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
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
      borderRadius: 0, // sharp edges
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
            if (delta > 0) {
              goNext();
            } else {
              goPrev();
            }
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

      {/* Navigation Arrows */}
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
