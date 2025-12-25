'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

export default function CarrefourPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '50vh', md: '60vh', lg: '70vh' },
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
              src="/carrefour5.jpg"
              alt="Carrefour"
              fill
              priority
              quality={100}
              sizes="100vw"
              style={{ 
                objectFit: 'cover',
                imageRendering: 'auto',
              }}
              loading="eager"
            />
          </Box>

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)',
              zIndex: 2,
            }}
          />

          {/* Content - Centered */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 3,
              textAlign: 'center',
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Jost", sans-serif',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Carrefour
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Muli", sans-serif',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                color: '#ffffff',
                mt: { xs: 2, md: 3 },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              Your One-Stop Shopping Destination
            </Typography>
          </Box>
        </Box>

        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1.5, sm: 2, md: 4 } }}>
          {/* About Section - Split Layout (Image Left, Text Right) */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 6 },
              alignItems: { md: 'center' },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: '300px', md: '500px', lg: '600px' },
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src="/carrefour4.jpg"
                alt="Carrefour at Giga Mall"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>

            {/* Right Side - Text Content */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  fontWeight: 400,
                  color: '#D19F3B',
                  mb: { xs: 2, md: 3 },
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                Carrefour at Giga Mall
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  color: '#333',
                  fontFamily: '"Muli", sans-serif',
                }}
              >
                Carrefour at Giga Mall brings you the ultimate shopping experience in the heart of DHA Islamabad. 
                As one of the premier hypermarket chains in Pakistan, our Giga Mall location offers an extensive 
                selection of quality products ranging from fresh groceries and household essentials to electronics, 
                clothing, and more. Conveniently located within Giga Mall, Carrefour provides easy access to all 
                your shopping needs in one place, making it the perfect destination for families and individuals 
                seeking quality, variety, and value.
              </Typography>
            </Box>
          </Box>

          {/* Image Section 1 - Split Layout (Text Left, Image Right) */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 6 },
              alignItems: { md: 'center' },
            }}
          >
            {/* Left Side - Text Content */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  fontWeight: 400,
                  color: '#D19F3B',
                  mb: { xs: 2, md: 3 },
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                Your Shopping Destination
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  color: '#333',
                  fontFamily: '"Muli", sans-serif',
                  mb: { xs: 2, md: 3 },
                }}
              >
                At Carrefour Giga Mall, we pride ourselves on offering a comprehensive shopping experience that 
                caters to all your daily needs. Our spacious store layout ensures easy navigation through our 
                well-organized departments, making your shopping trip efficient and enjoyable.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  color: '#333',
                  fontFamily: '"Muli", sans-serif',
                }}
              >
                Whether you're stocking up on groceries, looking for the latest electronics, or searching for 
                household essentials, Carrefour at Giga Mall has everything you need. Our commitment to quality 
                and customer satisfaction makes us the preferred choice for shoppers in Islamabad.
              </Typography>
            </Box>

            {/* Right Side - Image */}
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: '300px', md: '500px', lg: '600px' },
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image
                src="/carrefour3.jpg"
                alt="Carrefour at Giga Mall"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* Features Section */}
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: '100%', md: '70%' }, margin: '0 auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 400,
                color: '#D19F3B',
                mb: { xs: 2, md: 3 },
                fontFamily: '"Jost", sans-serif',
                textAlign: 'center',
              }}
            >
              Why Shop at Carrefour Giga Mall?
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: { xs: 3, md: 4 },
                mt: { xs: 4, md: 6 },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Extensive Product Range
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                    lineHeight: 1.7,
                    color: '#333',
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  From fresh produce and groceries to electronics, clothing, and household items, Carrefour 
                  Giga Mall offers an unparalleled selection of products to meet all your shopping needs.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Best Value & Promotions
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                    lineHeight: 1.7,
                    color: '#333',
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  Enjoy competitive prices and exclusive promotions at Carrefour Giga Mall, ensuring you get 
                  the best value for your money on every visit.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Quality Guaranteed
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                    lineHeight: 1.7,
                    color: '#333',
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  At Carrefour Giga Mall, we maintain the highest quality standards, ensuring that every 
                  product meets our rigorous quality checks before reaching our shelves.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Prime Location at Giga Mall
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.05rem' },
                    lineHeight: 1.7,
                    color: '#333',
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  Strategically located within Giga Mall in DHA Islamabad, Carrefour offers easy access with 
                  ample parking facilities, making your shopping experience convenient and hassle-free.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Image Section 2 - Split Layout */}
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 4 },
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: '300px', md: '400px' },
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Image
                src="/carrefour2.jpg"
                alt="Carrefour Shopping"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: '300px', md: '400px' },
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Image
                src="/carrefour3.jpg"
                alt="Carrefour Products"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* Services Section */}
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: '100%', md: '70%' }, margin: '0 auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 400,
                color: '#D19F3B',
                mb: { xs: 2, md: 3 },
                fontFamily: '"Jost", sans-serif',
                textAlign: 'center',
              }}
            >
              What We Offer at Carrefour Giga Mall
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: '#333',
                fontFamily: '"Muli", sans-serif',
                textAlign: 'center',
                mb: { xs: 4, md: 6 },
              }}
            >
              Carrefour Giga Mall provides a complete shopping experience with a wide range of services and 
              departments designed to make your visit to Giga Mall convenient, enjoyable, and efficient.
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: { xs: 3, md: 4 },
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Fresh Groceries & Produce
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    lineHeight: 1.6,
                    color: '#666',
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  Daily fresh fruits, vegetables, meat, dairy, and all your grocery essentials at Carrefour Giga Mall
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Home & Living
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    lineHeight: 1.6,
                    color: '#666',
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  Complete range of household items, home decor, and living essentials available at Giga Mall
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.2rem' },
                    fontWeight: 600,
                    color: '#1a237e',
                    mb: 1,
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  Electronics & Appliances
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    lineHeight: 1.6,
                    color: '#666',
                    fontFamily: '"Muli", sans-serif',
                  }}
                >
                  Latest electronics, gadgets, and home appliances at competitive prices in Giga Mall
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Visit Us Section */}
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: '100%', md: '70%' }, margin: '0 auto', textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 400,
                color: '#D19F3B',
                mb: { xs: 2, md: 3 },
                fontFamily: '"Jost", sans-serif',
              }}
            >
              Visit Carrefour at Giga Mall
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: '#333',
                fontFamily: '"Muli", sans-serif',
                mb: { xs: 3, md: 4 },
              }}
            >
              Experience the ultimate shopping convenience at Carrefour Giga Mall. Whether you're looking for 
              daily groceries, household essentials, or the latest products, Carrefour at Giga Mall is your 
              one-stop destination. Visit us today and discover why we're the preferred shopping choice for 
              families in Islamabad.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                fontWeight: 600,
                color: '#1a237e',
                fontFamily: '"Jost", sans-serif',
                mb: 1,
              }}
            >
              Location: Carrefour, Giga Mall, Giga City, DHA Islamabad
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: '#666',
                fontFamily: '"Muli", sans-serif',
              }}
            >
              Open daily with convenient shopping hours
            </Typography>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}

