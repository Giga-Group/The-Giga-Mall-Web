'use client';

import { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Paper, Divider } from '@mui/material';
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NextLink from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
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
      email: '',
      password: '',
    };

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Handle login logic here
      console.log('Login submitted:', formData);
      // You can add your authentication logic here
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
              Welcome Back
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                color: '#666666',
                lineHeight: 1.6,
              }}
            >
              Sign in to your account to continue
            </Typography>
          </Box>

          {/* Login Form */}
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
              {/* Email Field */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <AccountCircle
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

              {/* Password Field */}
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
                    Password
                  </Typography>
                </Box>
                <TextField
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  placeholder="Enter your password"
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

              {/* Forgot Password Link */}
              <Box sx={{ textAlign: 'right', mb: 4 }}>
                <Link
                  component={NextLink}
                  href="#"
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '0.9rem',
                    color: '#D19F3B',
                    textDecoration: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Forgot Password?
                </Link>
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
                Sign In
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

              {/* Sign Up Link */}
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '0.95rem',
                    color: '#666666',
                    mb: 1,
                  }}
                >
                  Don&apos;t have an account?
                </Typography>
                <Link
                  component={NextLink}
                  href="/signup"
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
                  Sign Up Now
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

