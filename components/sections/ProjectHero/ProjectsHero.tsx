'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ProjectsHero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        // height: '60vh',
        height: { xs: '100vh', sm: '100vh', md: '60vh' },
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
        <Image
          src="/projects/projects_page.jpg" 
          alt="Projects"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: {
            xs: '20px',
            sm: '30px 40px',
            md: '40px 60px',
            lg: '50px 80px',
          },
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Arvo", serif',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
            fontWeight: 700,
            color: '#ffffff',
            // textTransform: 'uppercase',
          }}
        >
          Projects
        </Typography>

        <Typography
          sx={{
            marginTop: { xs: 2, md: 3 },
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: '"Quicksand", sans-serif',
            fontSize: { xs: '14px', sm: '15px', md: '16px' },
            lineHeight: 1.7,
            color: '#ffffff',
          }}
        >
          Discover our curated portfolio of premium digital and architectural
          experiences.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectsHero;
