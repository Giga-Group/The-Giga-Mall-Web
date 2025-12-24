'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ProjectHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
  logo?: string;
}

const ProjectHero = ({
  title,
  description,
  backgroundImage,
  logo,
}: ProjectHeroProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)',
            zIndex: 2,
          },
        }}
      >
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            quality={100} // Set maximum quality (default is 75)
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              // Add these for better rendering
              imageRendering: 'auto',
            }}
            // Add these props for better quality control
            loading="eager"
            unoptimized={false} // Set to true if you want to disable optimization
          />
        ) : (
          <Box sx={{ width: '100%', height: '100%', backgroundColor: '#1a1a1a' }} />
        )}
      </Box>

      {/* Content - Keep as is */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1200px',
          margin: '0 auto',
          px: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 3 },
        }}
      >
        {/* Logo (optional) */}
        {logo && (
          <Box
            sx={{
              width: { xs: '100px', sm: '120px', md: '150px', lg: '180px' },
              height: { xs: '100px', sm: '120px', md: '150px', lg: '180px' },
              mb: 3,
            }}
          >
            <Image
              src={logo}
              alt={title}
              width={180}
              height={180}
              quality={100}
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Box>
        )}

        <Typography
          sx={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            fontWeight: 700,
            color: '#ffffff',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '17px' },
            lineHeight: 1.7,
            color: '#ffffff',
            fontWeight: 400,
            maxWidth: '800px',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectHero;