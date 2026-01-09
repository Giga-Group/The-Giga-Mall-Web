'use client';

import { useState } from 'react';
import { Box, Container, Typography, Link, TextField, Button } from '@mui/material';
import { Phone, Email, LocationOn, Facebook, Instagram, Twitter } from '@mui/icons-material';
import NextLink from 'next/link';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        padding: { xs: '48px 16px', sm: '64px 24px', md: '80px 24px', lg: '100px 24px' },
        borderTop: '1px solid #D19F3B',
        width: '100%',
      }}
    >
      {/* Decorative gradient & line background - more subtle */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.2,
          backgroundImage: `
            radial-gradient(circle at top left, rgba(209, 159, 59, 0.15), transparent 60%),
            radial-gradient(circle at bottom right, rgba(209, 159, 59, 0.15), transparent 70%)
          `,
          backgroundBlendMode: 'soft-light, normal',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', marginBottom: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: '"Arvo", serif',
              fontWeight: 400,
              fontSize: { xs: '28px', sm: '32px', md: '36px', lg: '40px' },
              color: '#D19F3B',
              letterSpacing: '0.02em',
              marginBottom: 1,
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              width: '60px',
              height: '2px',
              backgroundColor: '#D19F3B',
              margin: '0 auto',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1.2fr 1fr'
            },
            gap: { xs: 5, md: 6, lg: 8 },
          }}
        >
          {/* Left Side - Contact Form */}
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              padding: { xs: '32px 24px', sm: '40px 32px', md: '48px 40px' },
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(209, 159, 59, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              },
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
                fontSize: { xs: '24px', sm: '26px', md: '28px' },
                color: '#D19F3B',
                marginBottom: { xs: 3, md: 4 },
                letterSpacing: '0.02em',
              }}
            >
              Get in Touch
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
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
                label="Name"
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
                    fontFamily: '"Quicksand", sans-serif',
                    '&.Mui-focused': {
                      color: '#D19F3B',
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: '"Quicksand", sans-serif',
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
                    fontFamily: '"Quicksand", sans-serif',
                    '&.Mui-focused': {
                      color: '#D19F3B',
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: '"Quicksand", sans-serif',
                  },
                }}
              />
              <TextField
                name="phone"
                label="Phone"
                value={formData.phone}
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
                    fontFamily: '"Quicksand", sans-serif',
                    '&.Mui-focused': {
                      color: '#D19F3B',
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: '"Quicksand", sans-serif',
                  },
                }}
              />
              <TextField
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={5}
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
                    fontFamily: '"Quicksand", sans-serif',
                    '&.Mui-focused': {
                      color: '#D19F3B',
                    },
                  },
                  '& .MuiInputBase-input': {
                    fontFamily: '"Quicksand", sans-serif',
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
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '15px', sm: '16px' },
                  fontWeight: 500,
                  padding: { xs: '10px 24px', sm: '12px 32px', md: '14px 40px' },
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
                Send Message
              </Button>
            </Box>

            {/* Leasing Query Section */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                marginTop: { xs: 4, md: 5 },
                paddingTop: { xs: 3, md: 4 },
                borderTop: '1px solid rgba(209, 159, 59, 0.2)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  color: '#333333',
                  marginBottom: { xs: 2, md: 2.5 },
                  lineHeight: 1.6,
                }}
              >
                If you want to contact for leasing query then click here
              </Typography>
              <Button
                component={NextLink}
                href="/leasing"
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: '#D19F3B',
                  color: '#D19F3B',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: '14px', sm: '15px' },
                  fontWeight: 500,
                  padding: { xs: '10px 24px', sm: '12px 32px', md: '14px 40px' },
                  textTransform: 'none',
                  borderRadius: '4px',
                  borderWidth: '1.5px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#D19F3B',
                    backgroundColor: '#D19F3B',
                    color: '#ffffff',
                    borderWidth: '1.5px',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(209, 159, 59, 0.3)',
                  },
                }}
              >
                Click here for leasing
              </Button>
            </Box>
          </Box>

          {/* Right Side - Contact Information */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
            {/* Contact Info Block - Single Card */}
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                padding: { xs: '28px', sm: '32px', md: '36px' },
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid rgba(209, 159, 59, 0.1)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderColor: 'rgba(209, 159, 59, 0.3)',
                },
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
                  fontSize: { xs: '24px', sm: '26px', md: '28px' },
                  color: '#D19F3B',
                  marginBottom: { xs: 3, md: 4 },
                  letterSpacing: '0.02em',
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3 } }}>
                {/* Phone */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      width: { xs: '48px', sm: '52px' },
                      height: { xs: '48px', sm: '52px' },
                      borderRadius: '50%',
                      backgroundColor: 'rgba(209, 159, 59, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Phone
                      sx={{
                        fontSize: { xs: '22px', sm: '24px' },
                        color: '#D19F3B',
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: { xs: '12px', sm: '13px' },
                        color: '#999999',
                        marginBottom: 0.5,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Phone
                    </Typography>
                    <Link
                      href="tel:+923001234567"
                      sx={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: { xs: '15px', sm: '16px' },
                        color: '#333333',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#D19F3B',
                        },
                      }}
                    >
                      +92 300 123 4567
                    </Link>
                  </Box>
                </Box>

                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      width: { xs: '48px', sm: '52px' },
                      height: { xs: '48px', sm: '52px' },
                      borderRadius: '50%',
                      backgroundColor: 'rgba(209, 159, 59, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Email
                      sx={{
                        fontSize: { xs: '22px', sm: '24px' },
                        color: '#D19F3B',
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: { xs: '12px', sm: '13px' },
                        color: '#999999',
                        marginBottom: 0.5,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Email
                    </Typography>
                    <Link
                      href="mailto:info@gigamall.com"
                      sx={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: { xs: '15px', sm: '16px' },
                        color: '#333333',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#D19F3B',
                        },
                      }}
                    >
                      info@gigamall.com
                    </Link>
                  </Box>
                </Box>

                {/* Address */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box
                    sx={{
                      width: { xs: '48px', sm: '52px' },
                      height: { xs: '48px', sm: '52px' },
                      borderRadius: '50%',
                      backgroundColor: 'rgba(209, 159, 59, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LocationOn
                      sx={{
                        fontSize: { xs: '22px', sm: '24px' },
                        color: '#D19F3B',
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: { xs: '12px', sm: '13px' },
                        color: '#999999',
                        marginBottom: 0.5,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Address
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: { xs: '15px', sm: '16px' },
                        color: '#333333',
                        lineHeight: 1.7,
                        fontWeight: 500,
                      }}
                    >
                      Giga City, DHA Phase 5<br />
                      Islamabad, Pakistan
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Opening Hours */}
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                padding: { xs: '24px', sm: '28px' },
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid rgba(209, 159, 59, 0.1)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
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
                  fontSize: { xs: '18px', sm: '20px' },
                  color: '#D19F3B',
                  marginBottom: { xs: 2, md: 2.5 },
                  letterSpacing: '0.02em',
                }}
              >
                Opening Hours
              </Typography>
              <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '14px', sm: '15px' },
                      color: '#333333',
                      fontWeight: 600,
                      marginBottom: 0.5,
                    }}
                  >
                    Monday - Thursday
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '14px', sm: '15px' },
                      color: '#666666',
                    }}
                  >
                    10:00 AM - 10:00 PM
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '14px', sm: '15px' },
                      color: '#333333',
                      fontWeight: 600,
                      marginBottom: 0.5,
                    }}
                  >
                    Friday - Sunday
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '14px', sm: '15px' },
                      color: '#666666',
                    }}
                  >
                    10:00 AM - 11:00 PM
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Social Media */}
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                padding: { xs: '24px', sm: '28px' },
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid rgba(209, 159, 59, 0.1)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
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
                  fontSize: { xs: '18px', sm: '20px' },
                  color: '#D19F3B',
                  marginBottom: { xs: 2, md: 2.5 },
                  letterSpacing: '0.02em',
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'row', gap: 2.5, alignItems: 'center' }}>
                <Link
                  href="#"
                  sx={{
                    width: { xs: '44px', sm: '48px' },
                    height: { xs: '44px', sm: '48px' },
                    borderRadius: '50%',
                    backgroundColor: 'rgba(209, 159, 59, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D19F3B',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#D19F3B',
                      color: '#ffffff',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 12px rgba(209, 159, 59, 0.3)',
                    },
                  }}
                >
                  <Facebook sx={{ fontSize: { xs: '20px', sm: '22px' } }} />
                </Link>
                <Link
                  href="#"
                  sx={{
                    width: { xs: '44px', sm: '48px' },
                    height: { xs: '44px', sm: '48px' },
                    borderRadius: '50%',
                    backgroundColor: 'rgba(209, 159, 59, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D19F3B',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#D19F3B',
                      color: '#ffffff',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 12px rgba(209, 159, 59, 0.3)',
                    },
                  }}
                >
                  <Instagram sx={{ fontSize: { xs: '20px', sm: '22px' } }} />
                </Link>
                <Link
                  href="#"
                  sx={{
                    width: { xs: '44px', sm: '48px' },
                    height: { xs: '44px', sm: '48px' },
                    borderRadius: '50%',
                    backgroundColor: 'rgba(209, 159, 59, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D19F3B',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#D19F3B',
                      color: '#ffffff',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 12px rgba(209, 159, 59, 0.3)',
                    },
                  }}
                >
                  <Twitter sx={{ fontSize: { xs: '20px', sm: '22px' } }} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;

