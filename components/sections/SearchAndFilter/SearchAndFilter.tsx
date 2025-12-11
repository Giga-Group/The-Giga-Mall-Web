'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Search, LocalOffer, CardGiftcard } from '@mui/icons-material';

const SearchAndFilter = () => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [viewBy, setViewBy] = useState('');
  const [showOffersOnly, setShowOffersOnly] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams]);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
        backgroundColor: '#ffffff'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 3 }
        }}
      >
        {/* Row 1: Search and Show Offers Only Checkbox */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: { xs: 2, sm: 3 }
          }}
        >
          {/* Search Bar */}
          <Box sx={{ flex: 1, maxWidth: { md: '400px' } }}>
            <TextField
              fullWidth
              placeholder="Search for shop or brand"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="standard"
              sx={{
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#e0e0e0'
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottomColor: '#bdbdbd'
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#D19F3B'
                }
              }}
              InputProps={{
                endAdornment: (
                  <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>
                    <Search sx={{ color: '#666666' }} />
                  </Box>
                )
              }}
            />
          </Box>

          {/* Show Offers Only Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={showOffersOnly}
                onChange={(e) => setShowOffersOnly(e.target.checked)}
                sx={{
                  color: '#D19F3B',
                  '&.Mui-checked': {
                    color: '#D19F3B'
                  }
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  color: '#333333'
                }}
              >
                Show stores only with offers
              </Typography>
            }
            sx={{ 
              whiteSpace: 'nowrap', 
              alignSelf: { xs: 'flex-start', md: 'flex-end' },
              margin: 0,
              '& .MuiFormControlLabel-label': {
                margin: 0
              }
            }}
          />
        </Box>

        {/* Row 2: Categories on Left, Store Offers Links on Right */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: { xs: 2, sm: 3 }
          }}
        >
          {/* Left Side - Category, Subcategory, View By */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 3 },
              alignItems: { sm: 'flex-end' },
              flex: 1
            }}
          >
            {/* Category Dropdown */}
            <FormControl sx={{ minWidth: { xs: '100%', sm: '150px' }, maxWidth: { sm: '180px' } }} variant="standard">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                value={category}
                label="CATEGORY"
                onChange={(e) => setCategory(e.target.value)}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#e0e0e0'
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottomColor: '#bdbdbd'
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#D19F3B'
                  }
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="fashion-men">Fashion - Men</MenuItem>
                <MenuItem value="fashion-women">Fashion - Women</MenuItem>
                <MenuItem value="fashion-children">Fashion - Children</MenuItem>
                <MenuItem value="beauty">Beauty & Fragrances</MenuItem>
                <MenuItem value="home">Home</MenuItem>
                <MenuItem value="toys">Toys</MenuItem>
              </Select>
            </FormControl>

            {/* Subcategory Dropdown */}
            <FormControl sx={{ minWidth: { xs: '100%', sm: '150px' }, maxWidth: { sm: '180px' } }} variant="standard">
              <InputLabel id="subcategory-label">Subcategory</InputLabel>
              <Select
                labelId="subcategory-label"
                value={subcategory}
                label="SUBCATEGORY"
                onChange={(e) => setSubcategory(e.target.value)}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#e0e0e0'
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottomColor: '#bdbdbd'
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#D19F3B'
                  }
                }}
              >
                <MenuItem value="">All Subcategories</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="watches">Watches</MenuItem>
                <MenuItem value="jewelry">Jewelry</MenuItem>
              </Select>
            </FormControl>

            {/* View By Dropdown */}
            <FormControl sx={{ minWidth: { xs: '100%', sm: '120px' }, maxWidth: { sm: '150px' } }} variant="standard">
              <InputLabel id="viewby-label">View by 0-9</InputLabel>
              <Select
                labelId="viewby-label"
                value={viewBy}
                label="VIEW BY 0-9"
                onChange={(e) => setViewBy(e.target.value)}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#e0e0e0'
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottomColor: '#bdbdbd'
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#D19F3B'
                  }
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="0-9">0-9</MenuItem>
                <MenuItem value="a-f">A-F</MenuItem>
                <MenuItem value="g-l">G-L</MenuItem>
                <MenuItem value="m-r">M-R</MenuItem>
                <MenuItem value="s-z">S-Z</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Right Side - Store Offers Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1.5, sm: 2, md: 3 },
              alignItems: { xs: 'flex-start', md: 'flex-end' }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7
                }
              }}
            >
              <LocalOffer sx={{ color: '#D19F3B', fontSize: { xs: '18px', sm: '20px' } }} />
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  color: '#333333',
                  fontWeight: 500
                }}
              >
                Store Offers
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7
                }
              }}
            >
              <CardGiftcard sx={{ color: '#D19F3B', fontSize: { xs: '18px', sm: '20px' } }} />
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  color: '#333333',
                  fontWeight: 500
                }}
              >
                Accepts Giga Gift Card
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchAndFilter;

