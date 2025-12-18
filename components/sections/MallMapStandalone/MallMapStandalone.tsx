'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ZoomIn, ZoomOut } from '@mui/icons-material';
import { storeDetails, StoreDetail } from '@/lib/utils/storeData';

const MallMapStandalone = () => {
  const [hoveredStore, setHoveredStore] = useState<StoreDetail | null>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMapFocused, setIsMapFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3;
  const ZOOM_STEP = 0.2;

  // Load SVG content
  useEffect(() => {
    fetch('/Giga mall Ground Floor-01.svg')
      .then((res) => res.text())
      .then((text) => {
        setSvgContent(text);
      })
      .catch((err) => console.error('Error loading SVG:', err));
  }, []);

  // Make text elements interactive after SVG loads
  useEffect(() => {
    if (!svgRef.current || !svgContent) return;

    let cleanupFunctions: Array<() => void> = [];

    // Wait for SVG to render
    const timeoutId = setTimeout(() => {
      const svgElement = svgRef.current;
      if (!svgElement) return;

      const textElements = svgElement.querySelectorAll('text');

      // Create a mapping of store names (normalized) to store data
      const storeMap = new Map<string, StoreDetail>();
      storeDetails.forEach((store) => {
        // Normalize store names for matching (remove extra spaces, convert to uppercase)
        const normalizedName = store.name
          .toUpperCase()
          .trim()
          .replace(/\s+/g, ' ');
        storeMap.set(normalizedName, store);
      });

      textElements.forEach((textEl) => {
        const tspan = textEl.querySelector('tspan');
        if (!tspan) return;

        const textContent = tspan.textContent?.trim().toUpperCase();
        if (!textContent) return;

        // Try to find matching store
        let matchedStore: StoreDetail | undefined;
        
        // Direct match
        matchedStore = storeMap.get(textContent);
        
        // Try partial matches (e.g., "ADIDAS" matches "Adidas")
        if (!matchedStore) {
          storeMap.forEach((store, normalizedName) => {
            if (
              !matchedStore &&
              (normalizedName.includes(textContent) ||
                textContent.includes(normalizedName))
            ) {
              matchedStore = store;
            }
          });
        }

        if (matchedStore) {
          // Add ID and make interactive
          textEl.setAttribute('data-store-slug', matchedStore.slug);
          textEl.setAttribute('data-store-name', matchedStore.name);
          textEl.style.cursor = 'pointer';
          textEl.style.transition = 'fill 0.2s ease';

          // Add hover handlers
          const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as SVGTextElement;
            const storeName = target.getAttribute('data-store-name');
            const storeSlug = target.getAttribute('data-store-slug');
            
            if (storeName && storeSlug) {
              const store = storeDetails.find((s) => s.slug === storeSlug);
              if (store) {
                setHoveredStore(store);
                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  setHoverPosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }
              }
            }
            
            // Highlight the text
            target.style.fill = '#D19F3B';
            target.style.fontWeight = 'bold';
          };

          const handleMouseLeave = (e: MouseEvent) => {
            const target = e.target as SVGTextElement;
            target.style.fill = '';
            target.style.fontWeight = '';
            setHoveredStore(null);
          };

          const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              setHoverPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }
          };

          textEl.addEventListener('mouseenter', handleMouseEnter);
          textEl.addEventListener('mouseleave', handleMouseLeave);
          textEl.addEventListener('mousemove', handleMouseMove);

          // Store cleanup function
          cleanupFunctions.push(() => {
            textEl.removeEventListener('mouseenter', handleMouseEnter);
            textEl.removeEventListener('mouseleave', handleMouseLeave);
            textEl.removeEventListener('mousemove', handleMouseMove);
          });
        }
      });
    }, 100);

    // Cleanup timeout and event listeners
    return () => {
      clearTimeout(timeoutId);
      cleanupFunctions.forEach((cleanup) => cleanup());
      cleanupFunctions = [];
    };
  }, [svgContent]);

  // Filter stores that have map positions on Ground Floor
  const storesWithPositions = storeDetails.filter(
    (store) => store.location?.mapPosition && store.location?.level === 'Ground Floor'
  );

  // Handle map focus
  const handleMapClick = () => {
    setIsMapFocused(true);
  };

  // Handle click outside map
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsMapFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Zoom functions
  const handleZoomIn = () => {
    if (!isMapFocused) return;
    setZoom((prev) => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    if (!isMapFocused) return;
    setZoom((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  };

  const handleReset = () => {
    if (!isMapFocused) return;
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    if (!isMapFocused) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setZoom((prev) => Math.max(MIN_ZOOM, Math.min(prev + delta, MAX_ZOOM)));
  };

  // Pan functionality
  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    // Only allow panning if not clicking on store circles or text elements
    const target = e.target as SVGElement;
    if (e.button === 0 && target.tagName !== 'circle' && target.tagName !== 'text' && target.tagName !== 'tspan') {
      setIsMapFocused(true);
      setIsDragging(true);
      setDragStart({ 
        x: e.clientX - pan.x,
        y: e.clientY - pan.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHoverPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }

    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle store hover
  const handleStoreHover = (store: StoreDetail, e: React.MouseEvent<SVGElement>) => {
    setHoveredStore(store);
    handleMouseMove(e);
  };

  const handleStoreLeave = () => {
    setHoveredStore(null);
  };

  // Calculate viewBox based on zoom and pan
  const SVG_WIDTH = 1160;
  const SVG_HEIGHT = 742.67;
  const viewBoxWidth = SVG_WIDTH / zoom;
  const viewBoxHeight = SVG_HEIGHT / zoom;
  const centerX = SVG_WIDTH / 2;
  const centerY = SVG_HEIGHT / 2;
  const viewBoxX = centerX - viewBoxWidth / 2 - pan.x / zoom;
  const viewBoxY = centerY - viewBoxHeight / 2 - pan.y / zoom;

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Zoom Controls */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '8px',
            padding: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <IconButton
            onClick={handleZoomIn}
            disabled={zoom >= MAX_ZOOM || !isMapFocused}
            size="small"
            sx={{
              color: isMapFocused ? '#D19F3B' : '#ccc',
              '&:hover': { backgroundColor: 'rgba(209, 159, 59, 0.1)' },
              '&.Mui-disabled': { color: '#ccc' },
            }}
            title={!isMapFocused ? 'Click on map to enable zoom' : 'Zoom In'}
          >
            <ZoomIn />
          </IconButton>
          <IconButton
            onClick={handleZoomOut}
            disabled={zoom <= MIN_ZOOM || !isMapFocused}
            size="small"
            sx={{
              color: isMapFocused ? '#D19F3B' : '#ccc',
              '&:hover': { backgroundColor: 'rgba(209, 159, 59, 0.1)' },
              '&.Mui-disabled': { color: '#ccc' },
            }}
            title={!isMapFocused ? 'Click on map to enable zoom' : 'Zoom Out'}
          >
            <ZoomOut />
          </IconButton>
        </Box>

        {/* SVG Map Container */}
        <Box
          onClick={handleMapClick}
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '400px', sm: '500px', md: '600px', lg: '430px' },
            overflow: 'hidden',
            cursor: isDragging ? 'grabbing' : 'grab',
            outline: isMapFocused ? '2px solid #D19F3B' : 'none',
            outlineOffset: '-2px',
            transition: 'outline 0.2s ease',
          }}
        >
          {/* Background SVG */}
          <Box
            component="svg"
            ref={svgRef}
            viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
            preserveAspectRatio="xMidYMid meet"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            sx={{
              width: '100%',
              height: '100%',
              display: 'block',
            }}
          >
            {/* Inline SVG Content */}
            {svgContent && (
              <g
                dangerouslySetInnerHTML={{
                  __html: svgContent
                    .replace(/<svg[^>]*>/, '')
                    .replace(/<\/svg>$/, '')
                    .replace(/xmlns[^=]*="[^"]*"/gi, '')
                }}
              />
            )}
            {/* Interactive Store Zones */}
            {storesWithPositions.map((store) => {
              const pos = store.location?.mapPosition;
              if (!pos) return null;

              // Convert percentage to SVG coordinates
              const x = (pos.x / 100) * SVG_WIDTH;
              const y = (pos.y / 100) * SVG_HEIGHT;
              const isHovered = hoveredStore?.slug === store.slug;

              return (
                <g key={store.slug}>
                  {/* Invisible hover area */}
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill="transparent"
                    stroke={isHovered ? '#D19F3B' : 'transparent'}
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={(e) => handleStoreHover(store, e)}
                    onMouseLeave={handleStoreLeave}
                  />
                  
                  {/* Store indicator dot */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? '6' : '4'}
                    fill={isHovered ? '#D19F3B' : '#1976d2'}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    style={{ 
                      pointerEvents: 'none',
                      transition: 'r 0.2s ease',
                    }}
                  />
                </g>
              );
            })}
          </Box>
        </Box>

        {/* Hover Tooltip */}
        {hoveredStore && (
          <Box
            sx={{
              position: 'absolute',
              left: `${hoverPosition.x}px`,
              top: `${hoverPosition.y - 50}px`,
              transform: 'translateX(-50%)',
              zIndex: 1000,
              pointerEvents: 'none',
              backgroundColor: '#D19F3B',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: '6px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              whiteSpace: 'nowrap',
              fontSize: '0.9375rem',
              fontWeight: 600,
              fontFamily: '"Playfair Display", "Georgia", serif',
              // Arrow pointing down
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #D19F3B',
              },
            }}
          >
            {hoveredStore.name}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MallMapStandalone;

