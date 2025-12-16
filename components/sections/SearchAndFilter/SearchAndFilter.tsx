'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Typography, Chip } from '@mui/material';
import { Search, LocalOffer, CardGiftcard } from '@mui/icons-material';

interface CategoryOption {
  value: string;
  label: string;
}

interface SearchAndFilterProps {
  pageType?: 'shop' | 'dine';
  categories?: CategoryOption[];
  subcategories?: CategoryOption[];
  searchPlaceholder?: string;
  offersLabel?: string;
}

const defaultShopCategories: CategoryOption[] = [
  { value: '', label: 'All Categories' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'fashion-men', label: 'Fashion - Men' },
  { value: 'fashion-women', label: 'Fashion - Women' },
  { value: 'fashion-children', label: 'Fashion - Children' },
  { value: 'beauty', label: 'Beauty & Fragrances' },
  { value: 'home', label: 'Home' },
  { value: 'toys', label: 'Toys' }
];

const defaultDineCategories: CategoryOption[] = [
  { value: '', label: 'View All' },
  { value: 'cafe', label: 'Cafe' },
  { value: 'fast-food', label: 'Fast Food' },
  { value: 'food-drink', label: 'Food & Drink' },
  { value: 'icecream', label: 'Icecream' },
  { value: 'restaurant', label: 'Restaurant' }
];

const defaultShopSubcategories: CategoryOption[] = [
  { value: '', label: 'All Subcategories' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'watches', label: 'Watches' },
  { value: 'jewelry', label: 'Jewelry' }
];

const defaultDineSubcategories: CategoryOption[] = [
  { value: '', label: 'All Subcategories' },
  { value: 'italian', label: 'Italian' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'indian', label: 'Indian' },
  { value: 'american', label: 'American' },
  { value: 'middle-eastern', label: 'Middle Eastern' }
];

const SearchAndFilter = ({ 
  pageType = 'shop',
  categories,
  subcategories,
  searchPlaceholder,
  offersLabel
}: SearchAndFilterProps) => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [viewBy, setViewBy] = useState('');
  const [showOffersOnly, setShowOffersOnly] = useState(false);

  // Determine which categories and subcategories to use
  const categoryOptions = categories || (pageType === 'dine' ? defaultDineCategories : defaultShopCategories);
  const subcategoryOptions = subcategories || (pageType === 'dine' ? defaultDineSubcategories : defaultShopSubcategories);
  const placeholder = searchPlaceholder || (pageType === 'dine' ? 'Search for restaurant' : 'Search for shop or brand');
  const offersText = offersLabel || (pageType === 'dine' ? 'Show restaurants only with offers' : 'Show stores only with offers');

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
              placeholder={placeholder}
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
                {offersText}
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

        {/* Mobile Category Section - Horizontal Scrollable Chips */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: '100%',
            overflowX: 'auto',
            pb: 1,
            '&::-webkit-scrollbar': {
              height: '4px'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#D19F3B',
              borderRadius: '2px'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#333333',
              mb: 1.5,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Categories
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              pb: 0.5,
              minWidth: 'max-content'
            }}
          >
            {categoryOptions.map((cat) => (
              <Chip
                key={cat.value}
                label={cat.label}
                onClick={() => setCategory(cat.value)}
                sx={{
                  backgroundColor: category === cat.value ? '#D19F3B' : '#f5f5f5',
                  color: category === cat.value ? '#ffffff' : '#333333',
                  fontWeight: category === cat.value ? 600 : 400,
                  fontSize: '0.875rem',
                  height: '36px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: category === cat.value ? '#B88A2A' : '#e0e0e0'
                  },
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Mobile Subcategory Section - Horizontal Scrollable Chips */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: '100%',
            overflowX: 'auto',
            pb: 1,
            '&::-webkit-scrollbar': {
              height: '4px'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#D19F3B',
              borderRadius: '2px'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#333333',
              mb: 1.5,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Subcategories
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              pb: 0.5,
              minWidth: 'max-content'
            }}
          >
            {subcategoryOptions.map((subcat) => (
              <Chip
                key={subcat.value}
                label={subcat.label}
                onClick={() => setSubcategory(subcat.value)}
                sx={{
                  backgroundColor: subcategory === subcat.value ? '#D19F3B' : '#f5f5f5',
                  color: subcategory === subcat.value ? '#ffffff' : '#333333',
                  fontWeight: subcategory === subcat.value ? 600 : 400,
                  fontSize: '0.875rem',
                  height: '36px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: subcategory === subcat.value ? '#B88A2A' : '#e0e0e0'
                  },
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Mobile View By Section - Horizontal Scrollable Chips */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: '100%',
            overflowX: 'auto',
            pb: 1,
            '&::-webkit-scrollbar': {
              height: '4px'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#D19F3B',
              borderRadius: '2px'
            }
          }}
        >
          <Typography
            sx={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#333333',
              mb: 1.5,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            View By
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              pb: 0.5,
              minWidth: 'max-content'
            }}
          >
            {[
              { value: '', label: 'All' },
              { value: '0-9', label: '0-9' },
              { value: 'a-f', label: 'A-F' },
              { value: 'g-l', label: 'G-L' },
              { value: 'm-r', label: 'M-R' },
              { value: 's-z', label: 'S-Z' }
            ].map((option) => (
              <Chip
                key={option.value}
                label={option.label}
                onClick={() => setViewBy(option.value)}
                sx={{
                  backgroundColor: viewBy === option.value ? '#D19F3B' : '#f5f5f5',
                  color: viewBy === option.value ? '#ffffff' : '#333333',
                  fontWeight: viewBy === option.value ? 600 : 400,
                  fontSize: '0.875rem',
                  height: '36px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: viewBy === option.value ? '#B88A2A' : '#e0e0e0'
                  },
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </Box>
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
              display: { xs: 'none', sm: 'flex' },
              flexDirection: { sm: 'row' },
              gap: { sm: 3 },
              alignItems: { sm: 'flex-end' },
              flex: 1
            }}
          >
            {/* Category Dropdown */}
            <FormControl sx={{ minWidth: { sm: '150px' }, maxWidth: { sm: '180px' } }} variant="standard">
              <InputLabel id="category-label" sx={{ fontSize: { sm: '0.875rem' } }}>Category</InputLabel>
              <Select
                labelId="category-label"
                value={category}
                label="Category"
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
                  },
                  fontSize: { sm: '0.875rem' }
                }}
              >
                {categoryOptions.map((cat) => (
                  <MenuItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Subcategory Dropdown */}
            <FormControl sx={{ minWidth: { sm: '150px' }, maxWidth: { sm: '180px' } }} variant="standard">
              <InputLabel id="subcategory-label" sx={{ fontSize: { sm: '0.875rem' } }}>Subcategory</InputLabel>
              <Select
                labelId="subcategory-label"
                value={subcategory}
                label="Subcategory"
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
                  },
                  fontSize: { sm: '0.875rem' }
                }}
              >
                {subcategoryOptions.map((subcat) => (
                  <MenuItem key={subcat.value} value={subcat.value}>
                    {subcat.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* View By Dropdown */}
            <FormControl sx={{ minWidth: { sm: '120px' }, maxWidth: { sm: '150px' } }} variant="standard">
              <InputLabel id="viewby-label" sx={{ fontSize: { sm: '0.875rem' } }}>View by 0-9</InputLabel>
              <Select
                labelId="viewby-label"
                value={viewBy}
                label="View by 0-9"
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
                  },
                  fontSize: { sm: '0.875rem' }
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

