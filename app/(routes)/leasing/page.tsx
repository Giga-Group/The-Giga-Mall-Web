'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Typography, TextField, Button } from '@mui/material';
import Image from 'next/image';

const features = [
  '24/7 Security and CCTV Surveillance',
  '24/7 Electricity and Power Backup Options',
  'Dedicated Lifts',
  'Centralized HVAC System',
  'Dedicated Parking in basements',
  'The prime location of Main GT Road, DHA Phase II, Islamabad',
  'Hi-tech Safety System',
  'Easily accessible to world-class shopping mall Giga Mall',
  'Beautiful Mosque',
  'Kitchen and Dining Area',
  'Business Opportunities',
  'Presentable Public Waiting Areas',
  'Conference Rooms',
  'Housekeeping and Facility Management Services',
  'Access to all Internet Service Providers(ISPs)',
  'Best for any kind of business',
];

export default function LeasingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    squareFeet: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Leasing form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      squareFeet: '',
      message: '',
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            width: '100vw',
            minHeight: { xs: '40vh', md: '45vh', lg: '50vh' },
            paddingTop: { xs: '90px', md: '100px' },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          >
            <Image
              src="/lease picture.jpg"
              alt="Giga Mall Leasing"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
          </Box>

          {/* Overlay Gradient */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
              zIndex: 1,
            }}
          />
          {/* Black Gradient at Bottom */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
              zIndex: 2,
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '1400px',
              width: '100%',
              padding: { xs: '40px 20px', sm: '60px 40px', md: '80px 60px', lg: '100px 80px' },
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 400,
                color: '#D19F3B',
                marginBottom: { xs: '20px', md: '24px' },
                letterSpacing: '0.02em',
                lineHeight: 1.2,
              }}
            >
              Leasing at Giga Mall
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 300,
                color: '#D19F3B',
                letterSpacing: '0.05em',
                lineHeight: 1.3,
              }}
            >
              Prime Office Space Available
            </Typography>
          </Box>
        </Box>

        {/* Description Section - Centered */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#ffffff',
            padding: { xs: '48px 16px', sm: '64px 24px', md: '80px 40px', lg: '100px 60px' },
            paddingBottom: { xs: '32px', sm: '40px', md: '48px' },
          }}
        >
          <Box
            sx={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontWeight: 400,
                fontSize: { xs: '28px', sm: '32px', md: '36px', lg: '40px' },
                color: '#D19F3B',
                letterSpacing: '0.02em',
                marginBottom: 2,
              }}
            >
              Lease Your Shop Now in Giga Mall
            </Typography>
            <Box
              sx={{
                width: '60px',
                height: '2px',
                backgroundColor: '#D19F3B',
                margin: '0 auto 32px',
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '15px', sm: '16px', md: '17px' },
                color: '#333333',
                lineHeight: 1.8,
                marginBottom: 2,
              }}
            >
              Boost your business by getting an office in Giga Mall World Trade Center Islamabad!
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '15px', sm: '16px', md: '17px' },
                color: '#333333',
                lineHeight: 1.8,
                marginBottom: 2,
              }}
            >
              Office space available for rent on <strong>Corporate 4th Floor</strong> above Giga Mall Floors ranging from <strong>500 to 5000+ sq. ft.</strong> at affordable rates with unmatched facilities.
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
                fontSize: { xs: '15px', sm: '16px', md: '17px' },
                color: '#333333',
                lineHeight: 1.8,
              }}
            >
              Kindly fill out the form below and our Leasing Representative will contact you shortly for detailed information.
            </Typography>
          </Box>
        </Box>

        {/* Features and Form Section - Side by Side */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#ffffff',
            padding: { xs: '0 16px 48px', sm: '0 24px 64px', md: '0 40px 80px', lg: '0 60px 100px' },
          }}
        >
          <Box
            sx={{
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                lg: '1fr 1fr'
              },
              gap: { xs: 4, md: 5, lg: 6 },
            }}
          >
            {/* Left Side - Facilities & Features */}
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Arvo", serif',
                  fontWeight: 400,
                  fontSize: { xs: '28px', sm: '32px', md: '36px', lg: '40px' },
                  color: '#D19F3B',
                  textAlign: { xs: 'center', lg: 'left' },
                  letterSpacing: '0.02em',
                  marginBottom: 2,
                }}
              >
                Facilities & Features
              </Typography>
              <Box
                sx={{
                  width: '60px',
                  height: '2px',
                  backgroundColor: '#D19F3B',
                  margin: { xs: '0 auto 32px', lg: '0 0 32px 0' },
                }}
              />

              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                }}
              >
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      paddingLeft: { xs: '20px', sm: '24px' },
                      position: 'relative',
                      '&::before': {
                        content: '"•"',
                        position: 'absolute',
                        left: 0,
                        color: '#D19F3B',
                        fontSize: { xs: '20px', sm: '24px' },
                        lineHeight: 1.5,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Georgia, "Times New Roman", Times, serif',
                        fontSize: { xs: '15px', sm: '16px', md: '17px' },
                        color: '#333333',
                        lineHeight: 1.7,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right Side - Form Section */}
            <Box>

              {/* Form */}
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  padding: { xs: '32px 24px', sm: '40px 32px', md: '48px 40px' },
                  borderRadius: '8px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(209, 159, 59, 0.1)',
                }}
              >
                {/* Decorative gradient background - matching footer */}
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
                <Typography
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: '"Arvo", serif',
                    fontWeight: 400,
                    fontSize: { xs: '24px', sm: '28px', md: '32px' },
                    color: '#D19F3B',
                    marginBottom: { xs: 3, md: 4 },
                    letterSpacing: '0.02em',
                  }}
                >
                  Leasing Inquiry Form
                </Typography>

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 2.5, md: 3 },
                }}
              >
                <TextField
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      backgroundColor: '#fafafa',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(209, 159, 59, 0.3)',
                        borderWidth: '1.5px',
                      },
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                        },
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                          borderWidth: '2px',
                        },
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                      '&.Mui-focused': {
                        color: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    },
                  }}
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      backgroundColor: '#fafafa',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(209, 159, 59, 0.3)',
                        borderWidth: '1.5px',
                      },
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                        },
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                          borderWidth: '2px',
                        },
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                      '&.Mui-focused': {
                        color: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    },
                  }}
                />
                <TextField
                  name="phone"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      backgroundColor: '#fafafa',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(209, 159, 59, 0.3)',
                        borderWidth: '1.5px',
                      },
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                        },
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                          borderWidth: '2px',
                        },
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                      '&.Mui-focused': {
                        color: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    },
                  }}
                />
                <TextField
                  name="company"
                  label="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      backgroundColor: '#fafafa',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(209, 159, 59, 0.3)',
                        borderWidth: '1.5px',
                      },
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                        },
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                          borderWidth: '2px',
                        },
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                      '&.Mui-focused': {
                        color: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    },
                  }}
                />
                <TextField
                  name="squareFeet"
                  label="Required Square Feet"
                  value={formData.squareFeet}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      backgroundColor: '#fafafa',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(209, 159, 59, 0.3)',
                        borderWidth: '1.5px',
                      },
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                        },
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                          borderWidth: '2px',
                        },
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                      '&.Mui-focused': {
                        color: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    },
                  }}
                />
                <TextField
                  name="message"
                  label="Additional Message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      backgroundColor: '#fafafa',
                      transition: 'all 0.3s ease',
                      '& fieldset': {
                        borderColor: 'rgba(209, 159, 59, 0.3)',
                        borderWidth: '1.5px',
                      },
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                        },
                      },
                      '&.Mui-focused': {
                        backgroundColor: '#ffffff',
                        '& fieldset': {
                          borderColor: '#D19F3B',
                          borderWidth: '2px',
                        },
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                      '&.Mui-focused': {
                        color: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#D19F3B',
                    color: '#ffffff',
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    fontSize: { xs: '15px', sm: '16px' },
                    fontWeight: 500,
                    padding: { xs: '14px 40px', sm: '16px 48px', md: '18px 56px' },
                    textTransform: 'none',
                    borderRadius: '4px',
                    marginTop: 1,
                    boxShadow: '0 4px 12px rgba(209, 159, 59, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#b88a2e',
                      boxShadow: '0 6px 20px rgba(209, 159, 59, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Submit Leasing Inquiry
                </Button>
              </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}

