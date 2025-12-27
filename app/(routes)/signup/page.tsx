'use client';

import { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Paper, Divider } from '@mui/material';
import { Lock, Email, Person, Phone, Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NextLink from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // Handle signup logic here
      console.log('Signup submitted:', formData);
      // You can add your registration logic here
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: 'calc(100vh - 180px)',
          pt: { xs: '100px', md: '120px', lg: '60px' },
          pb: { xs: 6, md: 8 },
          px: { xs: 2, sm: 4 },
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '500px', md: '550px' },
          }}
        >
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
            <Typography
              sx={{
                fontFamily: '"Arvo", serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 400,
                color: '#D19F3B',
                mb: 1,
                letterSpacing: '0.02em',
              }}
            >
              Create Account
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                color: '#666666',
                lineHeight: 1.6,
              }}
            >
              Join Giga Mall and enjoy exclusive benefits
            </Typography>
          </Box>

          {/* Signup Form */}
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 3,
              border: '1px solid rgba(209, 159, 59, 0.2)',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Person
                    sx={{
                      color: '#D19F3B',
                      mr: 1,
                      fontSize: '20px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#333333',
                    }}
                  >
                    Full Name
                  </Typography>
                </Box>
                <TextField
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Enter your full name"
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: '"Quicksand", sans-serif',
                      '& fieldset': {
                        borderColor: errors.fullName ? '#d32f2f' : 'rgba(209, 159, 59, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#D19F3B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                    '& .MuiFormHelperText-root': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                  }}
                />
              </Box>

              {/* Email Field */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Email
                    sx={{
                      color: '#D19F3B',
                      mr: 1,
                      fontSize: '20px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#333333',
                    }}
                  >
                    Email Address
                  </Typography>
                </Box>
                <TextField
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Enter your email"
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: '"Quicksand", sans-serif',
                      '& fieldset': {
                        borderColor: errors.email ? '#d32f2f' : 'rgba(209, 159, 59, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#D19F3B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                    '& .MuiFormHelperText-root': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                  }}
                />
              </Box>

              {/* Phone Field */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Phone
                    sx={{
                      color: '#D19F3B',
                      mr: 1,
                      fontSize: '20px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#333333',
                    }}
                  >
                    Phone Number
                  </Typography>
                </Box>
                <TextField
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Enter your phone number"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: '"Quicksand", sans-serif',
                      '& fieldset': {
                        borderColor: errors.phone ? '#d32f2f' : 'rgba(209, 159, 59, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#D19F3B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                    '& .MuiFormHelperText-root': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                  }}
                />
              </Box>

              {/* Password Field */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Lock
                    sx={{
                      color: '#D19F3B',
                      mr: 1,
                      fontSize: '20px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#333333',
                    }}
                  >
                    Password
                  </Typography>
                </Box>
                <TextField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Create a password"
                  error={!!errors.password}
                  helperText={errors.password}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{
                          minWidth: 'auto',
                          padding: '4px',
                          color: '#666666',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#D19F3B',
                          },
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ fontSize: '20px' }} />
                        ) : (
                          <Visibility sx={{ fontSize: '20px' }} />
                        )}
                      </Button>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: '"Quicksand", sans-serif',
                      '& fieldset': {
                        borderColor: errors.password ? '#d32f2f' : 'rgba(209, 159, 59, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#D19F3B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                    '& .MuiFormHelperText-root': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                  }}
                />
              </Box>

              {/* Confirm Password Field */}
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Lock
                    sx={{
                      color: '#D19F3B',
                      mr: 1,
                      fontSize: '20px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#333333',
                    }}
                  >
                    Confirm Password
                  </Typography>
                </Box>
                <TextField
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Confirm your password"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        sx={{
                          minWidth: 'auto',
                          padding: '4px',
                          color: '#666666',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#D19F3B',
                          },
                        }}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff sx={{ fontSize: '20px' }} />
                        ) : (
                          <Visibility sx={{ fontSize: '20px' }} />
                        )}
                      </Button>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      fontFamily: '"Quicksand", sans-serif',
                      '& fieldset': {
                        borderColor: errors.confirmPassword ? '#d32f2f' : 'rgba(209, 159, 59, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#D19F3B',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D19F3B',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                    '& .MuiFormHelperText-root': {
                      fontFamily: '"Quicksand", sans-serif',
                    },
                  }}
                />
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#D19F3B',
                  color: '#ffffff',
                  py: 1.5,
                  borderRadius: 2,
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  mb: 3,
                  boxShadow: '0 4px 12px rgba(209, 159, 59, 0.3)',
                  '&:hover': {
                    backgroundColor: '#b88d2f',
                    boxShadow: '0 6px 16px rgba(209, 159, 59, 0.4)',
                  },
                }}
              >
                Create Account
              </Button>

              <Divider sx={{ my: 3, borderColor: 'rgba(209, 159, 59, 0.2)' }}>
                <Typography
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '0.85rem',
                    color: '#999999',
                    px: 2,
                  }}
                >
                  OR
                </Typography>
              </Divider>

              {/* Sign In Link */}
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '0.95rem',
                    color: '#666666',
                    mb: 1,
                  }}
                >
                  Already have an account?
                </Typography>
                <Link
                  component={NextLink}
                  href="/login"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '1rem',
                    color: '#D19F3B',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign In
                </Link>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

