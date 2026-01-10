'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import { Public, Menu, Navigation as NavigationIcon } from '@mui/icons-material';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import Navigation from './Navigation';
import ShopDropdown from './ShopDropdown';
import DineDropdown from './DineDropdown';
// import StayDropdown from './StayDropdown';
// import EntertainDropdown from './EntertainDropdown';
// import PlanVisitDropdown from './PlanVisitDropdown';
import ServicesDropdown from './ServicesDropdown';
import SecondaryHeader from './SecondaryHeader';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '@/lib/utils/constants';

const Header = () => {
  const theme = useTheme();
  const muiIsSmallScreen = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  // Default to mobile view to prevent flash on initial load
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  
  useEffect(() => {
    // Update after mount to match actual screen size
    setIsSmallScreen(muiIsSmallScreen);
  }, [muiIsSmallScreen]);
  const [shopHovered, setShopHovered] = useState(false);
  const [dineHovered, setDineHovered] = useState(false);
  // const [stayHovered, setStayHovered] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  // const [entertainHovered, setEntertainHovered] = useState(false);
  // const [planVisitHovered, setPlanVisitHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clearAllDropdowns = () => {
    setShopHovered(false);
    setDineHovered(false);
    // setStayHovered(false);
    setServicesHovered(false);
    // setEntertainHovered(false);
    // setPlanVisitHovered(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        zIndex: 9999
      }}
      onMouseLeave={clearAllDropdowns}
    >
      <AppBar 
        position="fixed"
        sx={{ 
          position: 'fixed !important',
          top: '0 !important',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          boxShadow: isSmallScreen ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
          borderBottom: 'none',
          zIndex: '9999 !important',
          width: '100%',
          maxWidth: '100vw',
          margin: 0,
          padding: 0,
          overflow: 'visible',
          transition: isSmallScreen ? 'none' : 'box-shadow 0.3s ease-in-out',
          backdropFilter: 'blur(0px)',
          display: 'block',
          visibility: 'visible',
          opacity: 1,
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
      {/* Decorative corner gradients to match footer & featured section */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.9,
          backgroundImage: `
            radial-gradient(circle at top left, rgba(209, 159, 59, 0.4), transparent 55%),
            radial-gradient(circle at bottom right, rgba(209, 159, 59, 0.4), transparent 65%)
          `,
          backgroundBlendMode: 'soft-light, normal',
        }}
      />
      <Toolbar sx={{ 
        justifyContent: isSmallScreen ? 'center' : 'space-between',
        padding: { xs: '0 12px', sm: '0 16px', md: '0 24px' },
        minHeight: { xs: '60px !important', md: '90px !important' },
        transition: 'padding 0.3s ease-in-out',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Hamburger Menu Icon - Mobile Only */}
        {isSmallScreen && (
          <IconButton
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            sx={{
              position: 'absolute',
              left: '12px',
              color: '#D19F3B',
              padding: '8px',
              zIndex: 1,
            }}
          >
            <Menu sx={{ fontSize: '28px', color: '#D19F3B' }} />
          </IconButton>
        )}

        {/* Logo - Centered on Mobile */}
        <Box 
          component={Link}
          href="/"
          sx={{ 
            height: { xs: '36px', sm: '44px', md: '56px', lg: '60px' },
            width: { xs: 'auto', sm: 'auto', md: 'auto' },
            maxWidth: { xs: '120px', sm: '140px', md: '180px' },
            cursor: 'pointer',
            userSelect: 'none',
            flexShrink: 1,
            transition: 'opacity 0.3s ease-in-out',
            opacity: 1,
            position: isSmallScreen ? 'absolute' : 'relative',
            left: isSmallScreen ? '50%' : 'auto',
            transform: isSmallScreen ? 'translateX(-50%)' : 'none',
            display: 'flex',
            alignItems: 'center',
            zIndex: 1
          }}
        >
          <Logo 
            width={180} 
            height={60} 
            priority 
          />
        </Box>

        <Navigation 
          navItems={NAV_ITEMS}
          onShopHover={() => {
            setShopHovered(true);
            setDineHovered(false);
            // setStayHovered(false);
            setServicesHovered(false);
            // setEntertainHovered(false);
            // setPlanVisitHovered(false);
          }}
          onDineHover={() => {
            setShopHovered(false);
            setDineHovered(true);
            // setStayHovered(false);
            setServicesHovered(false);
            // setEntertainHovered(false);
            // setPlanVisitHovered(false);
          }}
          // onStayHover={() => {
          //   setShopHovered(false);
          //   setDineHovered(false);
          //   setStayHovered(true);
          //   setServicesHovered(false);
          //   setEntertainHovered(false);
          //   setPlanVisitHovered(false);
          // }}
          onServicesHover={() => {
            setShopHovered(false);
            setDineHovered(false);
            // setStayHovered(false);
            setServicesHovered(true);
            // setEntertainHovered(false);
            // setPlanVisitHovered(false);
          }}
          // onEntertainHover={() => {
          //   // Dropdown hidden for now
          // }}
          // onPlanVisitHover={() => {
          //   // Dropdown hidden for now
          // }}
          onClearHover={clearAllDropdowns}
          isSmallScreen={isSmallScreen}
        />

        {isSmallScreen ? (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1, sm: 1.5 }, 
            flexShrink: 0,
            minWidth: 0,
            position: 'absolute',
            right: '12px',
            zIndex: 1
          }}>
            <IconButton
              component={Link}
              href="/projects"
              sx={{
                backgroundColor: '#D19F3B',
                color: '#ffffff',
                borderRadius: '50%',
                padding: { xs: '8px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { xs: '40px' },
                minHeight: { xs: '40px' },
                width: { xs: '40px' },
                height: { xs: '40px' },
                '&:hover': {
                  backgroundColor: '#D19F3B',
                },
                '&:active': {
                  backgroundColor: '#D19F3B',
                },
              }}
            >
              <Public sx={{ 
                fontSize: { xs: '20px' },
                display: 'block',
                color: '#ffffff'
              }} />
            </IconButton>

            <IconButton
              component={Link}
              href="/map"
              sx={{
                border: '1px solid #D19F3B',
                borderRadius: { xs: '28px' },
                padding: { xs: '6px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { xs: '40px' },
                minHeight: { xs: '40px' },
                width: { xs: '40px' },
                height: { xs: '40px' },
                backgroundColor: '#D19F3B',
                visibility: 'visible',
                opacity: 1,
                '&:hover': {
                  backgroundColor: '#D19F3B',
                },
              }}
            >
              <NavigationIcon sx={{ 
                color: '#ffffff', 
                fontSize: { xs: '22px' },
                display: 'block',
                visibility: 'visible',
                opacity: 1
              }} />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { sm: 1.5, md: 2 }, flexShrink: 0 }}>
            <Button
              component={Link}
              href="/projects"
              variant="contained"
              endIcon={<Public />}
              sx={{
                backgroundColor: '#D19F3B',
                color: '#ffffff',
                borderRadius: '28px',
                padding: { sm: '10px 16px', md: '10px 20px' },
                textTransform: 'none',
                fontFamily: '"Poppins", sans-serif',
                fontSize: { sm: '14px', md: '16px' },
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#D19F3B',
                },
              }}
            >
              Projects by Giga Group
            </Button>

            <IconButton
              component={Link}
              href="/map"
              sx={{
                border: '1px solid #D19F3B',
                borderRadius: '28px',
                padding: { sm: '8px' },
                display: 'flex',
                flexShrink: 0,
                minWidth: { sm: '40px' },
                minHeight: { sm: '40px' },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <NavigationIcon sx={{ 
                color: '#D19F3B',
                fontSize: { sm: '26px', md: '28px' },
                display: 'block'
              }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>

    <ShopDropdown 
      isOpen={shopHovered && !isSmallScreen}
      onMouseEnter={() => {
        setShopHovered(true);
        setDineHovered(false);
        // setStayHovered(false);
        setServicesHovered(false);
        // setEntertainHovered(false);
        // setPlanVisitHovered(false);
      }}
      onMouseLeave={() => setShopHovered(false)}
    />

    <DineDropdown 
      isOpen={dineHovered && !isSmallScreen}
      onMouseEnter={() => {
        setShopHovered(false);
        setDineHovered(true);
        // setStayHovered(false);
        setServicesHovered(false);
        // setEntertainHovered(false);
        // setPlanVisitHovered(false);
      }}
      onMouseLeave={() => setDineHovered(false)}
    />

    <ServicesDropdown 
      isOpen={servicesHovered && !isSmallScreen}
      onMouseEnter={() => {
        setShopHovered(false);
        setDineHovered(false);
        // setStayHovered(false);
        setServicesHovered(true);
        // setEntertainHovered(false);
        // setPlanVisitHovered(false);
      }}
      onMouseLeave={() => setServicesHovered(false)}
    />

    {/* <StayDropdown 
      isOpen={stayHovered && !isSmallScreen}
      onMouseEnter={() => {
        setShopHovered(false);
        setDineHovered(false);
        setStayHovered(true);
        setEntertainHovered(false);
        setPlanVisitHovered(false);
      }}
      onMouseLeave={() => setStayHovered(false)}
    /> */}

    {/* <EntertainDropdown 
      isOpen={entertainHovered && !isSmallScreen}
      onMouseEnter={() => {
        setShopHovered(false);
        setDineHovered(false);
        // setStayHovered(false);
        setEntertainHovered(true);
        setPlanVisitHovered(false);
      }}
      onMouseLeave={() => setEntertainHovered(false)}
    /> */}

    {/* <PlanVisitDropdown 
      isOpen={planVisitHovered && !isSmallScreen}
      onMouseEnter={() => {
        setShopHovered(false);
        setDineHovered(false);
        // setStayHovered(false);
        setEntertainHovered(false);
        setPlanVisitHovered(true);
      }}
      onMouseLeave={() => setPlanVisitHovered(false)}
    /> */}
    
    <SecondaryHeader 
      isHidden={
        (shopHovered || dineHovered || servicesHovered /* || stayHovered */ /* || entertainHovered || planVisitHovered */) && !isSmallScreen
      }
    />
    
    <MobileMenu 
      isOpen={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    />
    </Box>
  );
};

export default Header;
