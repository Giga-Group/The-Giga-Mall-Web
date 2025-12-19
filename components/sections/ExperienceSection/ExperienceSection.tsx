'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const images = [
    { src: '/20241019_WestfieldDays-JoniIsraeli-053-SWR60051-retouche-OK.jpg', position: 'top-center' },
    { src: '/Westfield_Days_2024_Tag-1_052_OK.jpg', position: 'top-right' },
    { src: '/DSC05412Food_OK_1.jpg', position: 'middle-right' },
    { src: '/c_Dragan_Dok_WF_DZ_0811-6445.jpg', position: 'bottom-right' },
    { src: '/ASC_2024_3.jpg', position: 'bottom-center' },
    { src: '/EU_US_-_Good_Festival.jpg', position: 'middle-left' },
    { src: '/WESTFIELD_CENTURY_CITY_TAYLOR_SWIFT_2.jpg', position: 'top-left' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      const inView = sectionTop <= 0 && sectionBottom > windowHeight;
      setIsInView(inView);

      let progress = 0;
      
      if (inView) {
        const scrolledPast = Math.abs(sectionTop);
        const animationDistance = windowHeight * 3;
        progress = Math.min(Math.max(scrolledPast / animationDistance, 0), 1);
        
        if (progress >= 1) {
          setAnimationCompleted(true);
        }
      } else {
        progress = 0;
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getImagePosition = (position: string, progress: number) => {
    const rawProgress = Math.max(0, Math.min(1, progress));
    const imageProgress = rawProgress;
    
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
    
    const distance = Math.max(viewportWidth, viewportHeight) * 0.6;
    
    let startX = 0;
    let startY = 0;
    if (position === 'top-center') {
      startY = -distance;
    } else if (position === 'top-right') {
      startX = distance * 0.7;
      startY = -distance * 0.7;
    } else if (position === 'middle-right') {
      startX = distance;
    } else if (position === 'bottom-right') {
      startX = distance * 0.7;
      startY = distance * 0.7;
    } else if (position === 'bottom-center') {
      startY = distance * (1.2);
    } else if (position === 'middle-left') {
      startX = -distance;
    } else if (position === 'top-left') {
      startX = -distance * 0.7;
      startY = -distance * 0.7;
    }
    
    const finalX = 0;
    const finalY = 0;
    
    const currentX = startX + (finalX - startX) * imageProgress;
    const currentY = startY + (finalY - startY) * imageProgress;
    
    const scale = 1;
    
    return {
      top: '50%',
      left: '50%',
      transform: `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) scale(${scale})`,
      transition: 'none'
    };
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        width: '95vw',
        maxWidth: '100vw',
        height: '400vh',
        minHeight: '400vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: { xs: '40px 20px', md: '80px 40px', lg: '0px 40px' },
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${Math.max(0.3, 1 - scrollProgress * 0.7)})`,
          zIndex: 1,
          textAlign: 'center',
          pointerEvents: 'none',
          opacity: isInView ? 1 : 0,
          visibility: isInView ? 'visible' : 'hidden',
          width: '100%',
          maxWidth: '100vw'
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '76px' },
            lineHeight: { xs: '2.4rem', sm: '3rem', md: '4.2rem', lg: '77px' },
            textTransform: 'uppercase',
            color: 'rgb(209, 159, 59)',
            // letterSpacing: '0.02em',
            whiteSpace: 'pre-line'
          }}
        >
          {`10M VISITORS,
240+ BRANDS,
LIMITLESS CHOICES,
1 UNFORGETTABLE
EXPERIENCE`}
        </Typography>
      </Box>

      {(isInView || animationCompleted) && images.map((image, index) => {
        const position = getImagePosition(image.position, scrollProgress);
        return (
          <Box
            key={index}
            sx={{
              position: 'fixed',
              ...position,
              width: { xs: '150px', sm: '220px', md: '280px', lg: '200px' },
              height: { xs: '150px', sm: '220px', md: '280px', lg: '200px' },
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'transparent',
              boxShadow: scrollProgress > 0.5 ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
              zIndex: 20 + index,
              pointerEvents: 'none',
              filter: 'none',
              backdropFilter: 'none',
            }}
          >
            <Image 
              src={image.src} 
              alt={`Experience ${index + 1}`} 
              fill
              style={{ objectFit: 'cover', display: 'block' }}
              onError={(e) => {
                console.error(`Image ${index + 1} failed to load:`, image.src);
                (e.target as HTMLImageElement).style.display = 'none';
              }} 
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ExperienceSection;

