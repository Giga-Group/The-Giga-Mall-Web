'use client';

import { useMediaQuery as useMUIMediaQuery, useTheme } from '@mui/material';

export const useMediaQuery = () => {
  const theme = useTheme();
  const isSmallScreen = useMUIMediaQuery(theme.breakpoints.down('md'));
  const isMediumScreen = useMUIMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMUIMediaQuery(theme.breakpoints.up('lg'));

  return {
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  };
};

