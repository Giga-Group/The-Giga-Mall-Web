
  "use client";

  import { useState, useRef, useEffect, useCallback, useMemo } from "react";
  import { Box, IconButton, FormControl, Select, MenuItem } from "@mui/material";
  import { ZoomIn, ZoomOut } from "@mui/icons-material";
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
        // Top-left curved entry
        { x: 6.9, y: 24},
        { x: 7.7, y: 23.8 },
        
        // Top horizontal
        { x: 7.7, y: 29.7 },
        { x: 14.2, y: 29.7 },
        { x: 14.2, y: 35.8 },
        { x: 14.7, y: 35.8 },
        { x: 14.7, y: 45.29 },
        { x: 9.9, y: 45.29 },
        { x: 9.9, y: 42.29 },
        { x: 4.52, y: 42.29 },
        { x: 4.4, y: 30 },
        { x: 4.6, y: 28 },
        { x: 5.3, y: 25.3, r: 10 },
    
        // // Right vertical down
        // { x: 14.2, y: 36.5 },
        // { x: 14.9, y: 36.5 },
        // { x: 14.9, y: 45.1 },
    
        // // Bottom horizontal
        // { x: 9.7, y: 45.1 },
    
        // // Bottom inner corner
        // { x: 9.7, y: 42.4 },
        // { x: 4.9, y: 42.4 },
    
        // // Left vertical up (curve transition)
        // { x: 4.7, y: 34.6 },
        // { x: 4.7, y: 32.2 },
    
        // // Inner notch near passage
        // { x: 4.9, y: 28.4, r: 10 }
      ]
    },

    "LIME LIGHT": {
      points: [
        { x: 77.6, y: 38.2 },
        { x: 78.2, y: 37.2 },
        { x: 85.4, y: 37.2, r: 12 },
        { x: 90.2, y: 46, r: 10 },
        { x: 92, y: 50.2 },
        { x: 77.6, y: 50.2 },
      ],
    },
    "KHAADI":{
      points: [
        { x: 77.4, y: 50.5 },
        { x: 92, y: 50.4 },
        { x: 94.4, y: 56 },
        { x: 97.9, y: 67.2 },
        { x: 78.2, y: 67.2 },
        { x: 78.2, y: 61.4 },
        { x: 77.4, y: 61.4 },

        
        // { x: 78.2, y: 67.2 },
      ],
    },

    "Jafeer Jees": {
      points: [
        { x: 49.2, y: 28.4 },
        { x: 51.7, y: 29.5 },
        { x: 51.7, y: 36.4 },
        { x: 49.2, y: 36.4 },
        // { x: 49.5, y: 35.9 },
      ],
    },

    Addidas: {
      points: [
        { x: 51.8, y: 29.5 },
        { x: 54.4, y: 30.3 },
        { x: 54.4, y: 36.5 },
        { x: 51.8, y: 36.5 },
      ],
    },
    "Hussain Jewlers": {
      points: [
        { x: 54.6, y: 30.3 },
        { x: 56.8, y: 30.1 },
        { x: 56.8, y: 36.3 },
        { x: 54.6, y: 36.3 },
        // { x: 55.3, y: 35.9 },
        // { x: 57.7, y: 36 },
      ],
    },
    "COUGAR":{
      points: [
        { x: 62.7, y: 35.2     },
        { x: 66.3, y: 35.2 },
        { x: 66.3, y: 44 },
        { x: 62.3, y: 44 },
        { x: 62.3, y: 35.8 },
        { x: 62.7 , y: 35.8 },
      ],
    },
    "MOCCIANI":{
      points: [
        { x: 67.8, y: 34.5 },
        { x: 70.5, y: 34.5 },
        { x: 70.5, y: 44 }, 
        { x: 67.8, y: 44 },
      ],
    },
    "ADORO":{
      points: [
        { x: 70.6, y: 35.9 },
        { x: 72, y: 35.9 },
        { x: 72, y: 38.4 },
        { x: 73.6, y: 38.4 },
        { x: 73.5, y: 43.8 }, 
        { x: 70.6, y: 43.8 }, 
  
      ],
    },
    FPL: {
      points: [
        { x: 4.67, y: 42.7 },
        { x: 9.6, y: 42.7 },
        { x: 9.6, y: 51.4 },

        { x: 5.5, y: 51.4 },
        { x: 5.2, y: 49 },
      ],
    },
    ETHNIC: {
      points: [
        { x: 5.45, y: 51.7 },
        { x: 9.7, y: 51.7 },
        { x: 9.7, y: 49.7 },
        { x: 14.7, y: 49.7 },
        { x: 14.7, y: 52.4 },
        { x: 14.5, y: 52.4 },
        { x: 14.5, y: 59.9 },
        { x: 14.2, y: 59.9 },
        { x: 14.2, y: 66 },
        { x: 9.2, y: 65.9 },
        { x: 8, y: 64.5 },
        { x: 8, y: 64.2 },
        // { x: 9.2, y: 65.9, },
        { x: 7.86, y: 64 },

        // { x: 14.4, y: 63.4 },
        // { x: 10, y: 63.4, r: 14 },
        // { x: 8.2, y: 63.2, r: 10 },
        // { x: 6.3, y: 56.7 },
      ],
    },
    NAQSH:{
      points: [
        { x: 16.8, y: 53.9 },
          { x: 19.4, y: 53.9 },
          { x: 19.4, y: 61 },
          { x: 16.8, y: 61 },
        
      ],
    },
    HUSHPUPPIES: {
      points: [
        { x: 19.4, y: 53.9 },
        { x: 20.7, y: 53.9 },
        { x: 20.7, y: 63 },
        { x: 19.4, y: 63 },
      ],
    },
    TESRO:{
      points: [
        { x: 20.7, y: 53.9 },
        { x: 22, y: 53.9 },
        { x: 22, y: 63 },
        { x: 20.7, y: 63 },
      ],  
    },
    HOPNOTCH:{
      points: [
        { x: 22.2, y: 53.9 },
        { x: 24.8, y: 53.9 },
        { x: 24.8, y: 63 },
        { x: 22.2, y: 63 },
      ],
    },
    INSIGNIA:{
      points: [
        { x: 24.8, y: 53.9 },
        { x: 27.4, y: 53.9 },
        { x: 27.4, y: 67 },
        { x: 24.8, y: 67 },
      ],
    },
    CINNABON:{
      points: [
        { x: 27.5, y: 53.9 },
        { x: 30.2, y: 53.9 },
        { x: 30.2, y: 59.2 },
        { x: 28.9, y: 59.2 },
        { x: 28.9, y: 63.5 },
        { x: 27.5, y: 63.5 },
      ],
    },
    ANTA:{
      points: [
        { x: 28.9, y: 59.2 },
        { x: 30.2, y: 59.2 },
        { x: 30.2, y: 66 },
        { x: 28.9, y: 67 },
        { x: 27.7, y: 67.4 },
        { x: 27.7, y: 63.4 },
        { x: 28.9, y: 63.4 },
        // { x: 28.9, y: 63.5 },
      ],
    },
    HIMANI:{
      points: [
        { x: 30.2, y: 61.2 },
        { x: 31.6, y: 61.2 },
        { x: 31.6, y: 64.9 },
        { x: 30.7, y: 65.45 },
        { x: 30.2, y: 65.9 },
        // { x: 30.2, y: 63.4 },
      ],
    },
    "KEF DIAMOND":{
      points: [
        { x: 35.5, y: 61.2 },
        { x: 38.2, y: 61.2 },
        { x: 38.2, y: 66 },
        { x: 37.5, y: 65.6 },
        { x: 37, y: 65.3 },
        { x: 35.5, y: 64.8 },
        // { x: 35.5, y: 66.5 },
      ],
    },
    JULKE:{
      points: [
        { x: 38.3, y: 61.2 },
        { x: 40.8, y: 61.2 },
        { x: 40.8, y: 67.2 },
        { x: 40, y: 67.15 , r: 10 },
        { x: 38.3, y: 66 },
    
        // { x: 35.5, y: 66.5 },
      ],
    }, 
    HUB:{
      points: [
        { x: 40.9, y: 61.2 },
        { x: 43.4, y: 61.2 },
        { x: 43.4, y: 67 },
        { x: 40.9, y: 67 },
        
      ],
    },
    "BODY SHOP":{
      points: [
        { x: 51.8, y: 61.2 },
        { x: 54.3, y: 61.2 },
        { x: 54.3, y: 66.3 },
        { x: 53 , y: 67 },
        { x: 51.8, y: 67.3 },
      ],
    },
    "TAG HEUER":{
      points: [
        { x: 54.4, y: 61.2 },
        { x: 55.7, y: 61.2 },
        { x: 55.7, y: 65.2 },
        { x: 54.4, y: 66.4 },
      ],
    },
    "SWAROVSKI":{
      points: [
        { x: 55.7, y: 61.2 },
        { x: 57.0, y: 61.2 },
        { x: 57.0, y: 64.8 },
        { x: 55.7, y: 65.2 },
      ],
    },
    "TIM HORTON":{
      points: [
        { x: 60.1, y: 61.2 },
       
        { x: 62.2, y: 61.4 },
        { x: 65.1, y: 62.8 },
        { x: 65.1, y: 67.1 },
        { x: 64, y: 67 },
        { x: 63.5, y: 66.8 },
        { x: 63.2, y: 66.6 },
        { x: 60.1, y: 65 },
      ],
    },
    "MARIA B":{
      points: [
        { x: 62.2, y: 53.7 },
        { x: 65.2, y: 53.7 },
        { x: 65.2, y: 62.8 },
        { x: 62.2, y: 61.4 },
        
        // { x: 67.2, y: 61.2 },
        // { x: 67.2, y: 61.4 },
        // { x: 70.1, y: 62.8 },
        // { x: 70.1, y: 67.1 },
        // { x: 69, y: 67 },
        // { x: 68.5, y: 66.8 },
        // { x: 68.2, y: 66.6 },
        // { x: 65.1, y: 65 },
      ],
    },
    "LEVIS DOCKERS":{
      points: [
        { x: 65.2, y: 53.7 },
        { x: 67.8, y: 53.7 },
        { x: 67.8, y: 62.8 },
        { x: 65.2, y: 62.8 },
      ],
    },
    "SKECHERS":{
      points: [
        { x: 67.8, y: 53.7 },
        { x: 70.4, y: 53.7 },
        { x: 70.4, y: 62.8 },
        { x: 67.8, y: 62.8 },
      ],
    },
    "BATIK STUDIO":{
      points: [
        { x: 70.4, y: 53.7 },
        { x: 73.1, y: 53.7 },
        { x: 73.3, y: 54.2 },
        { x: 73.3, y: 61 },
        { x: 70.4, y: 61 },
      ],
    },
    SAYA: {
      points: [
        { x: 18.2, y: 29.5 },
        { x: 19.8, y: 32.1 },
        { x: 19.8, y: 42.4 },
        { x: 16, y: 42.4 },
        { x: 16, y: 35.4 },
        { x: 14.37, y: 35.4 },
        { x: 14.37, y: 29.5 },
        // { x: 17.8, y: 36 },
        // { x: 14.4, y: 36 },
        // { x: 15.8, y: 36 },
        // { x: 16, y: 36 },
        // { x: 16, y: 36.1 },
        // { x: 16.2, y: 36.1 },
        // { x: 16.2, y: 42.7 },
        // { x: 20.5, y: 42.7 },
        // { x: 20.5, y: 33.5 },
      ],
    },
    Services: {
      points: [
        { x: 25, y: 23.9 },
        { x: 27.4, y: 23.9 },
        { x: 27.4, y: 30.7 },
        { x: 25, y: 30.7 },
      ],
    },
    "Cross Stitch": {
      points: [
        { x: 25, y: 30.7 },
        { x: 27.5, y: 30.7 },
        { x: 27.5, y: 44 },
        { x: 23.7, y: 44 },
        { x: 23.7, y: 35 },
        { x: 25, y: 35 },
        // { x: 27, y: 30.7 },
        // // { x: 23.5, y: 35 },
        // { x: 22.1, y: 35 },
        // { x: 22.1, y: 42.6 },
        // { x: 26.2, y: 42.6 },
        // { x: 26.2, y: 31.2 },
      ],
    },
    Almirah: {
      points: [
        { x: 27.5, y: 23.9 },
        { x: 30, y: 23.9 },
        { x: 30, y: 43.7 },
        { x: 27.5, y: 43.7 },
        
      ],
    },
    "Sports Plus": {
      points: [
        { x: 30.2, y: 23.8 }, 
        { x: 35.5, y: 24.2 },       
        { x: 35.5, y: 36.7 },
        { x: 30.2, y: 36.7 },
      ],
    },
    "Speed Sport": {
      points: [
        { x: 35.6, y: 24.2 },
        { x: 38.2, y: 24.2 },
        { x: 38.2, y: 36.5 },
        { x: 35.6, y: 36.5 },
      ],
    },
    Equator: {
      points: [
        { x: 38.3, y: 24.3 },
        { x: 40.9, y: 24.4 },
        { x: 40.9, y: 36.6 },
        { x: 38.3, y: 36.6 },
      ],
    },
    Engine: {
      points: [
        { x: 41, y: 24.4 },
        { x: 43.4, y: 24.5 },
        { x: 43.4, y: 36.6 },
        { x: 41, y: 36.6 },
      ],
    },
    Lulusa: {
      points: [
        { x: 47.2, y: 30.8 },
        { x: 49, y: 30.8 },
        { x: 49, y: 36.5 },
        { x: 47.2, y: 36.5 },
      ],
    },
  Monark: {
      points: [
        { x: 40.8, y: 40.5 },
        { x: 46.3, y: 40.5 },
        { x: 46.3, y: 46 },
        { x: 40.8, y: 46 },
      ],
    },
  Charcol: {
      points: [
        { x: 40.8, y: 46.1 },
        { x: 46.3, y: 46.1 },
        { x: 46.3, y: 51.2 },
        { x: 40.8, y: 51.2 },
      ],
    },
    
  Breakout: {
      points: [
        { x: 40.8, y: 51.3 },
        { x: 46.3, y: 51.3 },
        { x: 46.3, y: 56.9 },
        { x: 40.8, y: 56.9 },
      ],
    },
    // Shop: {
    //   points: [
    //     { x: 49.5, y: 49.5 },
    //     { x: 52.4, y: 49.5 },
    //     { x: 52.4, y: 54.2 },
    //     { x: 49.5, y: 54.2 },
    //   ],
    // },
    'Ultra Club': {
      points: [
        { x: 51.8, y: 51.5 },
        { x: 54.7, y: 51.5 },
        { x: 54.7, y: 56.9 },
        { x: 51.8, y: 56.9 },
      ],
    },
    'Royal Tag': {
      points: [
        { x: 49.2, y: 40.6 }, 
        { x: 54.7, y: 40.6 },
        { x: 54.7, y: 46.3 },
        { x: 49.2, y: 46.3 },
      ],
    },
    '1st Step': {
      points: [
        { x: 54.7, y: 46.3 },
        { x: 49.2, y: 46.3 },
        { x: 49.2, y: 51.2 },
        { x: 54.7, y: 51.2 },
        
      ],
    },
    Focus: {
      points: [
        { x: 46.4, y: 40.6 },
        { x: 49, y: 40.6 },
        { x: 49, y: 48.5 },
        { x: 46.4, y: 48.5 },
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

  // -------------------- OFFSET SYSTEM --------------------
  // Function to apply offset to points
  const offsetPoints = (points: Point[], dx: number, dy: number): Point[] =>
    points.map((p) => ({
      ...p,
      x: p.x + dx,
      y: p.y + dy,
    }));

  // Define offsets per shop (in percentage units)
  const SHOP_OFFSETS: Record<string, { dx: number; dy: number }> = {
    SAPPHIRE: { dx: 2.4, dy: 1.26 }, // 5px right, 2px down (converted to %)
    FPL: { dx: 2.4, dy: 1.26 },
    ETHNIC: { dx: 2.4, dy: 1.27 },
    SAYA: { dx: 2.4, dy: 1.27 },
    // Add more shop offsets here as needed:
    "LIME LIGHT": { dx: -2.3, dy: 0.3 },
    "KHAADI": { dx: -2.3, dy: -0.3 },
  };

  // Helper to get final points with offset applied
  const getShopPoints = (shopName: string, points: Point[]): Point[] => {
    const offset = SHOP_OFFSETS[shopName];
    if (!offset) return points;

    return offsetPoints(points, offset.dx, offset.dy);
  };

  // Helper to convert SVG coordinates to screen coordinates
  const svgToScreen = (
    svgX: number,
    svgY: number,
    svgElement: SVGSVGElement,
    viewBoxX: number,
    viewBoxY: number,
    viewBoxWidth: number,
    viewBoxHeight: number
  ) => {
    const rect = svgElement.getBoundingClientRect();
    const scaleX = rect.width / viewBoxWidth;
    const scaleY = rect.height / viewBoxHeight;
    
    const screenX = (svgX - viewBoxX) * scaleX + rect.left;
    const screenY = (svgY - viewBoxY) * scaleY + rect.top;
    
    return { x: screenX, y: screenY };
  };

  // -------------------- COMPONENT --------------------
  const MallMapStandalone = () => {
    const [hoveredShop, setHoveredShop] = useState<string | null>(null);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isMapFocused, setIsMapFocused] = useState(false);
    const [selectedFloor, setSelectedFloor] = useState("Ground");
    const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number; shop: string } | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const [svgContent, setSvgContent] = useState<string>("");

    const MIN_ZOOM = 0.8;  // Limited zoom out
    const MAX_ZOOM = 4;    // Increased zoom in limit (was 2.5)
    const ZOOM_STEP = 0.15;

    // SVG original dimensions (matching viewBox of UP DN GROUND FLOOR PLAN.svg)
    const SVG_WIDTH = 1250.67;
    const SVG_HEIGHT = 658.67;

    // -------------------- LOAD SVG --------------------
    useEffect(() => {
      fetch("/svgs/UP DN GROUND FLOOR PLAN.svg")
        .then((res) => res.text())
        .then(setSvgContent)
        .catch(console.error);
    }, []);

    // -------------------- VIEWBOX --------------------
    const viewBoxWidth = SVG_WIDTH / zoom;
    const viewBoxHeight = SVG_HEIGHT / zoom;
    // Allow panning at all zoom levels - pan is in screen coordinates, convert to SVG coordinates
    const viewBoxX = (SVG_WIDTH - viewBoxWidth) / 2 - pan.x;
    const viewBoxY = (SVG_HEIGHT - viewBoxHeight) / 2 - pan.y;
        // Memoize shop paths to avoid recalculation on every render
        // Paths don't change with zoom/pan, only viewBox changes
        const shopPaths = useMemo(() => {
          return Object.entries(SHOP_AREAS).map(([shop, area]) => {
            const adjustedPoints = getShopPoints(shop, area.points);
            const scaledPoints = adjustedPoints.map((p) => ({
              x: (p.x / 100) * SVG_WIDTH,
              y: (p.y / 100) * SVG_HEIGHT,
              r: p.r,
            }));
            const pathD = buildPathWithCornerRadii(scaledPoints);
            return { shop, pathD, scaledPoints };
          });
        }, []); // Paths are constant, no need to recalculate
        // Update tooltip position when zoom or pan changes (optimized with requestAnimationFrame)
        useEffect(() => {
          if (!hoveredShop || !svgRef.current) return;
          
          let animationFrameId: number;
          
          const updateTooltipPosition = () => {
            const shopArea = SHOP_AREAS[hoveredShop];
            if (!shopArea) return;
            
            const adjustedPoints = getShopPoints(hoveredShop, shopArea.points);
            const scaledPoints = adjustedPoints.map((p) => ({
              x: (p.x / 100) * SVG_WIDTH,
              y: (p.y / 100) * SVG_HEIGHT,
            }));
            const centerX = scaledPoints.reduce((sum, p) => sum + p.x, 0) / scaledPoints.length;
            const centerY = scaledPoints.reduce((sum, p) => sum + p.y, 0) / scaledPoints.length;
            
            const screenPos = svgToScreen(
              centerX,
              centerY,
              svgRef.current!,
              viewBoxX,
              viewBoxY,
              viewBoxWidth,
              viewBoxHeight
            );
            
            setTooltipPosition({
              x: screenPos.x,
              y: screenPos.y,
              shop: hoveredShop
            });
          };
          
          animationFrameId = requestAnimationFrame(updateTooltipPosition);
          
          return () => {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
            }
          };
        }, [zoom, pan, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight, hoveredShop]);
    // -------------------- INTERACTIONS --------------------
    // Disabled wheel zoom - zoom only via buttons
    const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
      // Disabled - no zoom on scroll
      e.stopPropagation();
    };

    const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
      if (e.button !== 0) return;
      e.preventDefault();  // Prevent text selection
      e.stopPropagation();
      setIsMapFocused(true);
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    };

    const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
      if (!isDragging) return;
      e.preventDefault();  // Prevent text selection while dragging
      e.stopPropagation();
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleZoomIn = (e: React.MouseEvent) => {
      e.stopPropagation();
      setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP));
      setIsMapFocused(true);
    };

    const handleZoomOut = (e: React.MouseEvent) => {
      e.stopPropagation();
      setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP));
      setIsMapFocused(true);
    };

    // Handle click outside to unfocus and prevent text selection globally when dragging
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsMapFocused(false);
        }
      };

      const handleMouseMoveGlobal = (e: MouseEvent) => {
        if (isDragging) {
          e.preventDefault(); // Prevent text selection while dragging
        }
      };

      const handleSelectStart = (e: Event) => {
        if (isDragging || isMapFocused) {
          e.preventDefault(); // Prevent text selection
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mousemove", handleMouseMoveGlobal);
      document.addEventListener("selectstart", handleSelectStart);
      
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousemove", handleMouseMoveGlobal);
        document.removeEventListener("selectstart", handleSelectStart);
      };
    }, [isDragging, isMapFocused]);

    // -------------------- RENDER --------------------
    return (
      <Box 
          ref={containerRef} 
          sx={{ 
            width: "100%",
            position: "relative",
            border: "2px solid #D19F3B",
            borderRadius: 2,
            overflow: "visible",
            backgroundColor: "#f9f9f9",
            boxShadow: isMapFocused 
              ? "0 6px 16px rgba(209, 159, 59, 0.3)" 
              : "0 4px 12px rgba(0,0,0,0.1)",
            transition: "all 0.2s ease-in-out",
            userSelect: "none",  // Prevent text selection
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            boxSizing: "border-box", // Prevent border from affecting width
            // Use outline for focus state to avoid width changes
            outline: isMapFocused ? "1px solid #D19F3B" : "none",
            outlineOffset: "-1px", // Overlap with border
          }}
          onMouseEnter={() => setIsMapFocused(true)}
          onMouseLeave={() => {
            setIsMapFocused(false);
            // Also clear hover state when leaving the entire map component
            setHoveredShop(null);
            setTooltipPosition(null);
          }}
          onWheel={(e) => {
            // Allow normal page scroll - zoom is disabled
            e.stopPropagation();
          }}
        >
        {/* Floor Selection Dropdown - Top Left */}
        <Box
          sx={{
            position: "absolute",
            left: 16,
            top: 16,
            zIndex: 1000,
            maxWidth: "calc(100% - 32px)", // ADD THIS LINE - prevents overflow
          }}
        >
          <FormControl
            size="small"
            sx={{
              minWidth: 150,
              maxWidth: "100%",
              backgroundColor: "#ffffff",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                "& fieldset": {
                  borderColor: "#D19F3B",
                },
                "&:hover fieldset": {
                  borderColor: "#B88A2A",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#D19F3B",
                },
              },
            }}
          >
            <Select
              value={selectedFloor}
              onChange={(e) => setSelectedFloor(e.target.value)}
              MenuProps={{  // ADD THIS ENTIRE MenuProps OBJECT
                disablePortal: true,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                PaperProps: {
                  sx: {
                    maxHeight: 200,
                    maxWidth: "200px",
                    overflow: "auto",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  },
                },
                disableScrollLock: true,
              }}
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: "0.95rem",
                color: "#333333",
                "& .MuiSelect-select": {
                  padding: "8px 14px",
                },
              }}
            >
              <MenuItem value="Ground">Ground</MenuItem>
              <MenuItem value="Lower Ground" disabled>
                Lower Ground (Coming Soon)
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Zoom Controls - Top Right */}
        <Box
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <IconButton
            onClick={handleZoomIn}
            disabled={zoom >= MAX_ZOOM}
            sx={{
              backgroundColor: "#D19F3B",
              color: "#ffffff",
              width: { xs: 40, sm: 44 },
              height: { xs: 40, sm: 44 },
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#B88A2A",
              },
              "&:disabled": {
                backgroundColor: "#cccccc",
                color: "#888888",
              },
            }}
          >
            <ZoomIn sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
          <IconButton
            onClick={handleZoomOut}
            disabled={zoom <= MIN_ZOOM}
            sx={{
              backgroundColor: "#D19F3B",
              color: "#ffffff",
              width: { xs: 40, sm: 44 },
              height: { xs: 40, sm: 44 },
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#B88A2A",
              },
              "&:disabled": {
                backgroundColor: "#cccccc",
                color: "#888888",
              },
            }}
          >
            <ZoomOut sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
        </Box>

        <Box sx={{ position: "relative", height: { xs: 400, sm: 500, md: 600, lg: 700 } }}>
          <Box
            component="svg"
            ref={svgRef}
            viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={(e) => {
              handleMouseUp();
              // Clear hover state when mouse leaves SVG (but don't stop propagation to allow container handler)
              setHoveredShop(null);
              setTooltipPosition(null);
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMapFocused(true);
            }}
            sx={{
              width: "100%",
              height: "100%",
              cursor: isDragging ? "grabbing" : (isMapFocused ? "grab" : "default"),
              outline: isMapFocused ? "none" : "none",
              userSelect: "none",  // Prevent text selection in SVG
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
              // Prevent text selection on all SVG elements
              "& *": {
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              },
            }}
          >
            {/* BASE SVG MAP */}
            {svgContent && (
              <g
                style={{ userSelect: "none", pointerEvents: "none" }}
                dangerouslySetInnerHTML={{
                  __html: svgContent
                    .replace(/<svg[^>]*>/, "")
                    .replace(/<\/svg>$/, "")
                    .replace(/<text/g, '<text style="user-select: none; -webkit-user-select: none;"')
                    .replace(/<tspan/g, '<tspan style="user-select: none; -webkit-user-select: none;"'),
                }}
              />
            )}

            {/* -------- SHOP SHAPES (PATHS WITH MIXED RADII) -------- */}
            {shopPaths.map(({ shop, pathD, scaledPoints }) => {
              const active = hoveredShop === shop;

              // Calculate center point of the shop polygon
              const centerX = scaledPoints.reduce((sum, p) => sum + p.x, 0) / scaledPoints.length;
              const centerY = scaledPoints.reduce((sum, p) => sum + p.y, 0) / scaledPoints.length;

              return (
                <g key={shop}>
                  {/* Invisible hover area */}
                  <path
                    d={pathD}
                    fill="transparent"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setHoveredShop(shop);
                      if (svgRef.current) {
                        const screenPos = svgToScreen(
                          centerX,
                          centerY,
                          svgRef.current,
                          viewBoxX,
                          viewBoxY,
                          viewBoxWidth,
                          viewBoxHeight
                        );
                        setTooltipPosition({
                          x: screenPos.x,
                          y: screenPos.y,
                          shop: shop
                        });
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.stopPropagation();
                      setHoveredShop(null);
                      setTooltipPosition(null);
                    }}
                  />

                  {/* Highlight */}
                  {active && (
                    <path
                      d={pathD}
                      fill="rgba(209,159,59,0.55)"
                      stroke="#D19F3B"
                      strokeWidth={3}
                      pointerEvents="none"
                    />
                  )}
                </g>
              );
            })}
          </Box>
        </Box>
        {/* Custom Absolute-Positioned Tooltip */}
        {tooltipPosition && (
          <Box
            sx={{
              position: "fixed",
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: "translate(-50%, calc(-100% + 15px))", // Move downward (adjust 20px as needed) // Position above center with gap for arrow
              zIndex: 10000,
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Tooltip body */}
            <Box
              sx={{
                backgroundColor: "#D19F3B",
                color: "#ffffff",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "10px",
                fontWeight: "600",
                letterSpacing: "0.3px",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              {tooltipPosition.shop}
            </Box>
            {/* Arrow pointing down */}
            <Box
              sx={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "8px solid #D19F3B",
                marginTop: "-1px", // Slight overlap to connect with body
              }}
            />
          </Box>
        )}
      </Box>
    );
  };

  export default MallMapStandalone;
