'use client';

import { Box, Container, Typography, Link, Collapse } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';
import ScrollToTop from '@/components/shared/ScrollToTop';
import Logo from '@/components/shared/Logo';

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        padding: { xs: '32px 16px', sm: '40px 24px', md: '60px 24px 10px' },
        borderTop: '1px solid #D19F3B',
      }}
    >
      {/* Decorative gradient & line background */}
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(12, 1fr)',
              lg: '48.666667% 23% 1fr'
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box sx={{ gridColumn: { xs: '1', md: 'span 5', lg: 'auto' } }}>
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '13px', sm: '14px' },
                lineHeight: { xs: 1.5, sm: 1.6 },
                color: '#333333',
                marginBottom: { xs: 1.5, md: 2 },

              }}
            >
              <strong>Discover the Giga Mall Experience</strong>
              <br /><br />
              Giga Mall is your premier shopping and entertainment destination. Designed to bring together the best in fashion, food, leisure, and events, our mall offers an exceptional experience—all in one place.
            </Typography>

            <Collapse in={showMore}>
              <Typography
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  lineHeight: { xs: 1.5, sm: 1.6 },
                  color: '#333333',
                  marginBottom: { xs: 1.5, md: 2 },
                }}
              >
                <strong>A Complete Shopping Destination</strong>
                <br /><br />
                At Giga Mall, you&apos;ll find top brands, unique retail stores, and a curated mix of local and international favorites. Whether you&apos;re updating your wardrobe, searching for the latest trends, or simply exploring, we make every shopping trip convenient and enjoyable.
                <br /><br />
                Our mall is built for comfort and efficiency. With modern facilities, a shopper-friendly layout, and smart services like click-and-collect and easy parking, your visit is as seamless as it is exciting. Whether you&apos;re stopping by for something quick or planning a full day out, Giga Mall has everything you need.
                <br /><br />
                <strong>More Than Just Shopping</strong>
                <br /><br />
                Giga Mall is also a vibrant entertainment hub. From dining with friends and family to enjoying events and activities, there&apos;s always something happening. Our beautifully designed spaces make every visit memorable—whether you&apos;re relaxing, socializing, or discovering something new.
                <br /><br />
                Choose from a diverse selection of restaurants offering local flavors alongside global favorites. Every meal is crafted to offer quality, comfort, and style.
                <br /><br />
                <strong>At the Heart of the Community</strong>
                <br /><br />
                Giga Mall is more than a destination—it&apos;s a place where the community comes together. As a center of inspiration, entertainment, and connection, we strive to deliver memorable experiences that enrich everyday life.
                <br /><br />
                <strong>Visit Giga Mall</strong>
                <br /><br />
                Explore everything Giga Mall has to offer and experience a world of shopping, dining, and entertainment—all under one roof.
              </Typography>
            </Collapse>

            <Link
              component="button"
              onClick={() => setShowMore(!showMore)}
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                textDecoration: 'underline',
                color: '#333333',
                fontSize: { xs: '13px', sm: '14px' },
                cursor: 'pointer',
                border: 'none',
                background: 'none',
                padding: 0,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {showMore ? 'Show less' : 'Show more'}
            </Link>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                marginTop: { xs: 2, md: 4 },
                marginBottom: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: '250px', sm: '300px', md: '375px', lg: '750px' },
                  maxWidth: '100%',
                  margin: '0px',
                  position: 'relative',
                  height: { xs: '75px', sm: '90px', md: '112px', lg: '350px' },
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Logo width={750} height={350} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            marginTop: { xs: 2, md: 0 },
            gridColumn: { xs: '1', md: 'span 4', lg: 'auto' }
          }}>
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' },
                color: '#333333',
                marginBottom: { xs: 1.5, md: 2 },
              }}
            >
              Legal Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 } }}>
              <Link
                href="#"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Terms and conditions
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Privacy Notice
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Legal Notice
              </Link>
            </Box>
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '13px', sm: '14px' },
                color: '#666666',
                marginTop: { xs: 2, md: 'auto' },
              }}
            >
              © 2025, Giga Mall
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            marginTop: { xs: 2, md: 0 },
            gridColumn: { xs: '1', md: 'span 3', lg: 'auto' }
          }}>
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' },
                color: '#333333',
                marginBottom: { xs: 1.5, md: 2 },
              }}
            >
              About Giga Mall
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 }, marginBottom: { xs: 2, md: 3 } }}>
              <Link
                href="#"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Giga Mall Corporate
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Settings <ChevronRight sx={{ fontSize: { xs: '14px', sm: '16px' }, marginLeft: 0.5 }} />
              </Link>
              <Link
                href="#"
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontSize: { xs: '13px', sm: '14px' },
                  color: '#333333',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Settings <ChevronRight sx={{ fontSize: { xs: '14px', sm: '16px' }, marginLeft: 0.5 }} />
              </Link>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 }, marginTop: { xs: 0, md: 'auto' }, paddingBottom: 0 }}>
              <Box
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  transition: 'opacity 0.2s',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              >
                <Box
                  sx={{
                    height: { xs: '40px', sm: '50px' },
                    width: { xs: '120px', sm: '150px' },
                    position: 'relative'
                  }}
                >
                  <Image
                    src="/AppStore_Badge_US_English.svg"
                    alt="Download on the App Store"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: { xs: 'space-between', sm: 'flex-start' }, gap: { xs: 1, sm: 2 } }}>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: 'block',
                    transition: 'opacity 0.2s',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: '40px', sm: '50px' },
                      width: { xs: '120px', sm: '150px' },
                      position: 'relative'
                    }}
                  >
                    <Image
                      src="/GooglePlay_Badge_EN-US_English.svg"
                      alt="GET IT ON Google Play"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Box>
                
                <ScrollToTop />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;