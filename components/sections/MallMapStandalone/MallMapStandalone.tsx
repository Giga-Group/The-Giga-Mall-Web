"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Box } from "@mui/material";

// -------------------- TYPES --------------------
type Point = {
  x: number; // %
  y: number; // %
  r?: number;
};

type ShopArea = {
  points: Point[];
};

// -------------------- SHOP POLYGON DEFINITIONS --------------------
const SHOP_AREAS: Record<string, ShopArea> = {
  SAPPHIRE: {
    points: [
      { x: 5.2, y: 26.7, r: 20 },
      { x: 7.4, y: 26 },
      { x: 7.4, y: 31 },
      { x: 14.2, y: 31 },
      { x: 14.2, y: 36.4 },
      { x: 14.8, y: 36.4 },
      { x: 14.8, y: 45 },
      { x: 9.8, y: 45 },
      { x: 9.8, y: 42.3 },
      { x: 4.1, y: 42.3 },
      { x: 3.8, y: 34.5 },
      { x: 3.9, y: 34 },
      { x: 3.9, y: 32 },
      { x: 4, y: 30, r: 10 },
    ],
  },

  "LIME LIGHT": {
    points: [
      { x: 77.6, y: 38.2 },
      { x: 78.2, y: 37.2 },
      { x: 86.3, y: 37.2, r: 12 },
      { x: 92, y: 46, r: 10 },
      { x: 93, y: 48.3 },
      { x: 77.6, y: 48.3 },
    ],
  },

  "Jafeer Jees": {
    points: [
      { x: 49.5, y: 28.8 },
      { x: 52.2, y: 30 },
      { x: 52.2, y: 35.9 },
      { x: 50, y: 35.9 },
      { x: 49.5, y: 35.9 },
    ],
  },

  Addidas: {
    points: [
      { x: 52.5, y: 30.2 },
      { x: 55, y: 30.6 },
      { x: 55, y: 36 },
      { x: 52.5, y: 36 },
    ],
  },
  "Hussain Jewlers": {
    points: [
      { x: 57.7, y: 30.5 },
      { x: 55.3, y: 30.7 },
      { x: 55.3, y: 35.9 },
      { x: 57.7, y: 36 },
    ],
  },
  FPL: {
    points: [
      { x: 4.12, y: 42.7 },
      { x: 9.6, y: 42.7 },
      { x: 9.6, y: 50.4 },

      { x: 5.1, y: 50.4 },
      { x: 4.8, y: 49 },
    ],
  },
  ETHNIC: {
    points: [
      { x: 5.1, y: 50.8 },
      { x: 9.6, y: 50.8 },
      { x: 9.6, y: 49.2 },
      { x: 14.8, y: 49.2 },
      { x: 14.8, y: 51.4 },
      { x: 14.6, y: 51.4 },
      { x: 14.6, y: 58.2 },
      { x: 14.3, y: 58.5 },

      { x: 14.4, y: 63.4 },
      { x: 10, y: 63.4, r: 14 },
      { x: 8.2, y: 63.2, r: 10 },
      { x: 6.3, y: 56.7 },
    ],
  },
  SAYA: {
    points: [
      { x: 18.5, y: 31.2 },
      { x: 17.8, y: 31.1 },
      { x: 17.8, y: 36 },
      { x: 16, y: 36 },
      { x: 16, y: 36.1 },
      { x: 16.2, y: 36.1 },
      { x: 16.2, y: 42.7 },
      { x: 20.5, y: 42.7 },
      { x: 20.5, y: 33.5 },
    ],
  },
  Services: {
    points: [
      { x: 23.3, y: 24.7 },
      { x: 23.3, y: 30.7 },
      { x: 26.2, y: 30.7 },
      { x: 26.2, y: 24.7 },
    ],
  },
  "Cross Stitch": {
    points: [
      { x: 23.5, y: 31.2 },
      { x: 23.5, y: 35 },
      { x: 22.1, y: 35 },
      { x: 22.1, y: 42.6 },
      { x: 26.2, y: 42.6 },
      { x: 26.2, y: 31.2 },
    ],
  },
  Almirah: {
    points: [
      { x: 26.3, y: 24.7 },
      { x: 28.9, y: 24.7 },
      { x: 28.9, y: 42.6 },
      { x: 26.3, y: 42.6 },
    ],
  },
  "Sports Plus": {
    points: [
      { x: 29, y: 25 },
      { x: 34.7, y: 25.3 },
      { x: 34.7, y: 36 },
      { x: 29, y: 36 },
    ],
  },
  "Speed Sport": {
    points: [
      { x: 35, y: 25.2 },
      { x: 37.7, y: 25.3 },
      { x: 37.7, y: 36 },
      { x: 35, y: 36 },
    ],
  },
  Equator: {
    points: [
      { x: 37.8, y: 25.2 },
      { x: 40.6, y: 25.3 },
      { x: 40.6, y: 36 },
      { x: 37.8, y: 36 },
    ],
  },
  Engine: {
    points: [
      { x: 40.7, y: 25.2 },
      { x: 43.4, y: 25.3 },
      { x: 43.4, y: 36 },
      { x: 40.7, y: 36 },
    ],
  },
 Monark: {
    points: [
      { x: 40.5, y: 40 },
      { x: 46.4, y: 40 },
      { x: 46.4, y: 44.5 },
      { x: 40.5, y: 44.5 },
    ],
  },
 Charcol: {
    points: [
      { x: 40.5, y: 45 },
      { x: 46.4, y: 45 },
      { x: 46.4, y: 49.2 },
      { x: 40.5, y: 49.2 },
    ],
  },
  
 Breakout: {
    points: [
      { x: 40.5, y: 49.5 },
      { x: 46.4, y: 49.5 },
      { x: 46.4, y: 54.2 },
      { x: 40.5, y: 54.2 },
    ],
  },
  'Break Out': {
    points: [
      { x: 40.5, y: 49.5 },
      { x: 46.4, y: 49.5 },
      { x: 46.4, y: 54.2 },
      { x: 40.5, y: 54.2 },
    ],
  },
   Shop: {
    points: [
      { x: 49.5, y: 49.5 },
      { x: 52.4, y: 49.5 },
      { x: 52.4, y: 54.2 },
      { x: 49.5, y: 54.2 },
    ],
  },
  'Ultra Club': {
    points: [
      { x: 52.5, y: 49.5 },
      { x: 55.4, y: 49.5 },
      { x: 55.4, y: 54.2 },
      { x: 52.5, y: 54.2 },
    ],
  },
  'Royal Tag': {
    points: [
      { x: 49.5, y: 40 },
      { x: 55.4, y: 40 },
      { x: 55.4, y: 44.5 },
      { x: 49.5, y: 44.5 },
    ],
  },
   '1st Step': {
    points: [
      { x: 49.5, y: 44.9 },
      { x: 55.4, y: 44.9 },
      { x: 55.4, y: 49 },
      { x: 49.5, y: 49 },
    ],
  },
  Focus: {
    points: [
      { x: 49.5, y: 44.9 },
      { x: 55.4, y: 44.9 },
      { x: 55.4, y: 49 },
      { x: 49.5, y: 49 },
    ],
  }
};

function buildPathWithCornerRadii(
  points: { x: number; y: number; r?: number }[]
) {
  if (points.length < 2) return "";

  const d: string[] = [];
  const total = points.length;

  const get = (i: number) => points[(i + total) % total];

  for (let i = 0; i < total; i++) {
    const prev = get(i - 1);
    const curr = get(i);
    const next = get(i + 1);

    const r = curr.r ?? 0;

    const vx1 = curr.x - prev.x;
    const vy1 = curr.y - prev.y;
    const vx2 = next.x - curr.x;
    const vy2 = next.y - curr.y;

    const len1 = Math.hypot(vx1, vy1);
    const len2 = Math.hypot(vx2, vy2);

    const radius = Math.min(r, len1 / 2, len2 / 2);

    const p1x = curr.x - (vx1 / len1) * radius;
    const p1y = curr.y - (vy1 / len1) * radius;

    const p2x = curr.x + (vx2 / len2) * radius;
    const p2y = curr.y + (vy2 / len2) * radius;

    if (i === 0) {
      d.push(`M ${p1x} ${p1y}`);
    } else {
      d.push(`L ${p1x} ${p1y}`);
    }

    if (radius > 0) {
      d.push(`Q ${curr.x} ${curr.y} ${p2x} ${p2y}`);
    } else {
      d.push(`L ${curr.x} ${curr.y}`);
    }
  }

  d.push("Z");
  return d.join(" ");
}

// -------------------- COMPONENT --------------------
const MallMapStandalone = () => {
  const [hoveredShop, setHoveredShop] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMapFocused, setIsMapFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  
  // Cache SVG content to avoid refetching on remount
  const svgCache = useRef<string | null>(null);

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3;
  const ZOOM_STEP = 0.2;

  // SVG original dimensions
  const SVG_WIDTH = 1160;
  const SVG_HEIGHT = 742.67;

  // -------------------- LOAD SVG (with caching) --------------------
  useEffect(() => {
    // Use cached SVG if available
    if (svgCache.current) {
      setSvgContent(svgCache.current);
      return;
    }
    
    // Fetch SVG only if not cached
    fetch("/Giga mall Ground Floor-01.svg")
      .then((res) => res.text())
      .then((text) => {
        svgCache.current = text; // Cache the SVG content
        setSvgContent(text);
      })
      .catch(console.error);
  }, []);

  // -------------------- MEMOIZED SHOP PATHS --------------------
  // Memoize expensive path calculations to avoid recalculating on every render
  const memoizedShopPaths = useMemo(() => {
    return Object.entries(SHOP_AREAS).map(([shop, area]) => {
      // Scale points to SVG size
      const scaledPoints = area.points.map((p) => ({
        x: (p.x / 100) * SVG_WIDTH,
        y: (p.y / 100) * SVG_HEIGHT,
        r: p.r,
      }));

      // Build rounded path
      const pathD = buildPathWithCornerRadii(scaledPoints);

      // Calculate center for label
      const centerX =
        scaledPoints.reduce((sum, p) => sum + p.x, 0) /
        scaledPoints.length;
      const centerY =
        scaledPoints.reduce((sum, p) => sum + p.y, 0) /
        scaledPoints.length;

      return {
        shop,
        pathD,
        centerX,
        centerY,
      };
    });
  }, []); // Only calculate once on mount

  // -------------------- VIEWBOX --------------------
  const viewBoxWidth = SVG_WIDTH / zoom;
  const viewBoxHeight = SVG_HEIGHT / zoom;
  const viewBoxX = SVG_WIDTH / 2 - viewBoxWidth / 2 - pan.x / zoom;
  const viewBoxY = SVG_HEIGHT / 2 - viewBoxHeight / 2 - pan.y / zoom;

  // -------------------- INTERACTIONS --------------------
  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    if (!isMapFocused) return;
    e.preventDefault();

    setZoom((z) =>
      Math.max(
        MIN_ZOOM,
        Math.min(MAX_ZOOM, z + (e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP))
      )
    );
  };

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  // -------------------- RENDER --------------------
  return (
    <Box ref={containerRef} sx={{ width: "100%", position: "relative" }}>
      <Box sx={{ position: "relative", height: { xs: 300, sm: 400, md: 450, lg: 500 } }}>
        <Box
          component="svg"
          ref={svgRef}
          viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={() => setIsMapFocused(true)}
          sx={{
            width: "100%",
            height: "100%",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {/* BASE SVG MAP */}
          {svgContent && (
            <g
              dangerouslySetInnerHTML={{
                __html: svgContent
                  .replace(/<svg[^>]*>/, "")
                  .replace(/<\/svg>$/, ""),
              }}
            />
          )}

          {/* -------- SHOP SHAPES (PATHS WITH MIXED RADII) - Memoized -------- */}
          {memoizedShopPaths.map(({ shop, pathD, centerX, centerY }) => {
            const active = hoveredShop === shop;

            return (
              <g key={shop}>
                {/* Invisible hover area */}
                <path
                  d={pathD}
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredShop(shop)}
                  onMouseLeave={() => setHoveredShop(null)}
                />

                {/* Highlight + label */}
                {active && (
                  <>
                    <path
                      d={pathD}
                      fill="rgba(209,159,59,0.55)"
                      stroke="#D19F3B"
                      strokeWidth={3}
                      pointerEvents="none"
                    />

                    {/* Label with background */}
                    {/* <g pointerEvents="none">
                      <rect
                        x={centerX - 45}
                        y={centerY - 14}
                        width={90}
                        height={28}
                        rx={6}
                        ry={6}
                        fill="#D19F3B"
                      /> */}

                      <text
                        x={centerX}
                        y={centerY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#ffffff"
                        fontSize={18}
                        fontWeight="700"
                        style={{
                          textShadow: "0 2px 4px rgba(0,0,0,0.7)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {shop}
                      </text>
                    {/* </g> */}
                  </>
                )}
              </g>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default MallMapStandalone;
