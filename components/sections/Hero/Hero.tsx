'use client';

import { Box, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '93vh',
        minHeight: { xs: '500px', sm: '550px', md: '600px' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background video with logo animation */}
      <Box
        component="video"
        src="/logo animations.mp4"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)',
          zIndex: 2
        }}
      />

      {/* Headline pinned to bottom, with Valuxe-style treatment */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 3,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pb: { xs: 2, sm: 2.5, md: 3 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Valuxe"',
            fontStyle: 'normal',
            fontWeight: 400,
            color: '#D19F3B',
            fontSize: { xs: '1.4rem', sm: '2rem', md: '2.4rem', lg: '2.8rem' },
            lineHeight: { xs: '1.2', sm: '1.25', md: '1.3' },
            textAlign: 'center',
            textTransform: 'none',
            padding: { xs: '10px 18px', sm: '12px 28px', md: '14px 36px' },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 0,
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          Visit Giga Mall At Giga City, DHA Islamabad
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;

