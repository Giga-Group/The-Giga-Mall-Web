'use client';

import { IconButton } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        backgroundColor: '#e0e0e0',
        color: '#666666',
        width: { xs: '36px', sm: '40px' },
        height: { xs: '36px', sm: '40px' },
        borderRadius: '50%',
        flexShrink: 0,
        '&:hover': {
          backgroundColor: '#d0d0d0',
        },
      }}
    >
      <KeyboardArrowUp sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
    </IconButton>
  );
};

export default ScrollToTop;

