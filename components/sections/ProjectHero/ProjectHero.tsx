'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ProjectHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  logo?: string;
}

const ProjectHero = ({
  title,
  backgroundImage,
}: ProjectHeroProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              imageRendering: 'auto',
            }}
            loading="eager"
            unoptimized={false}
          />
        ) : (
          <Box sx={{ width: '100%', height: '100%', backgroundColor: '#1a1a1a' }} />
        )}
      </Box>

      {/* Content - Centered */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontFamily: '"Arvo", serif',
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectHero;