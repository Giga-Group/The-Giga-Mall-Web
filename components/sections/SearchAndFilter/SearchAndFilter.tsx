"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Typography,
  Chip,
  IconButton,
  Drawer,
  Button,
} from "@mui/material";
import {
  Search,
  LocalOffer,
  CardGiftcard,
  FilterList,
  Close,
} from "@mui/icons-material";

interface CategoryOption {
  value: string;
  label: string;
}

interface SearchAndFilterProps {
  pageType?: "shop" | "dine";
  categories?: CategoryOption[];
  subcategories?: CategoryOption[];
  searchPlaceholder?: string;
  offersLabel?: string;
}

const defaultShopCategories: CategoryOption[] = [
  { value: "", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "fashion-men", label: "Fashion - Men" },
  { value: "fashion-women", label: "Fashion - Women" },
  { value: "fashion-children", label: "Fashion - Children" },
  { value: "beauty", label: "Beauty & Fragrances" },
  { value: "home", label: "Home" },
  { value: "toys", label: "Toys" },
];

const defaultDineCategories: CategoryOption[] = [
  { value: "", label: "View All" },
  { value: "cafe", label: "Cafe" },
  { value: "fast-food", label: "Fast Food" },
  { value: "food-drink", label: "Food & Drink" },
  { value: "icecream", label: "Icecream" },
  { value: "restaurant", label: "Restaurant" },
];

const defaultShopSubcategories: CategoryOption[] = [
  { value: "", label: "All Subcategories" },
  { value: "clothing", label: "Clothing" },
  { value: "shoes", label: "Shoes" },
  { value: "accessories", label: "Accessories" },
  { value: "watches", label: "Watches" },
  { value: "jewelry", label: "Jewelry" },
];

const defaultDineSubcategories: CategoryOption[] = [
  { value: "", label: "All Subcategories" },
  { value: "italian", label: "Italian" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
  { value: "indian", label: "Indian" },
  { value: "american", label: "American" },
  { value: "middle-eastern", label: "Middle Eastern" },
];

const SearchAndFilter = ({
  pageType = "shop",
  categories,
  subcategories,
  searchPlaceholder,
  offersLabel,
}: SearchAndFilterProps) => {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [viewBy, setViewBy] = useState("");
  const [showOffersOnly, setShowOffersOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Determine which categories and subcategories to use
  const categoryOptions =
    categories ||
    (pageType === "dine" ? defaultDineCategories : defaultShopCategories);
  const subcategoryOptions =
    subcategories ||
    (pageType === "dine" ? defaultDineSubcategories : defaultShopSubcategories);
  const placeholder =
    searchPlaceholder ||
    (pageType === "dine"
      ? "Search for restaurant"
      : "Search for shop or brand");
  const offersText =
    offersLabel ||
    (pageType === "dine"
      ? "Show restaurants only with offers"
      : "Show stores only with offers");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams]);

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 2, sm: 4 },
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "1400px", lg: "100%" },
          margin: { xs: "0 auto", lg: 0 },
          px: { xs: 2, sm: 4, md: 6, lg: 0 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 3, md: 0 },
        }}
      >
        {/* Mobile: Search Bar with Filter Button */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            gap: 1.5,
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Search Bar - Mobile */}
          <Box sx={{ flex: 1 }}>
            <TextField
              fullWidth
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: "#e0e0e0",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#D19F3B",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#D19F3B",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "14px 16px",
                  fontSize: "0.95rem",
                  color: "#333333",
                  fontFamily: '"Poppins", sans-serif',
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999999",
                  opacity: 1,
                  fontFamily: '"Poppins", sans-serif',
                },
              }}
              InputProps={{
                startAdornment: (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1.5,
                      pr: 1,
                    }}
                  >
                    <Search sx={{ color: "#666666", fontSize: "20px" }} />
                  </Box>
                ),
              }}
            />
          </Box>

          {/* Filter Button - Mobile */}
          <IconButton
            onClick={() => setMobileFilterOpen(true)}
            sx={{
              backgroundColor: "#D19F3B",
              color: "#ffffff",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "#B88A2A",
              },
              boxShadow: "0 2px 8px rgba(209, 159, 59, 0.3)",
            }}
          >
            <FilterList />
          </IconButton>
        </Box>

        {/* Desktop: Row 1: Search and Show Offers Only Checkbox */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 3,
            backgroundColor: { md: "transparent", lg: "#D19F3B" },
            color: { md: "#333333", lg: "#ffffff" },
            px: { md: 0, lg: 22 },
            paddingTop: 4,
            paddingBottom: 2,
            borderRadius: 0,
            width: "100%",
            maxWidth: { lg: "100%" },
          }}
        >
          {/* Search Bar - Desktop */}
          <Box sx={{ flex: 1, maxWidth: { md: "400px", lg: "470px" } }}>
            <TextField
              fullWidth
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="standard"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: { md: "#e0e0e0", lg: "#ffffff" },
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: { md: "#bdbdbd", lg: "#ffffff" },
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: { md: "#D19F3B", lg: "#ffffff" },
                },
                "& .MuiInputBase-input": {
                  color: { md: "#333333", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                },
                "& .MuiInputBase-input::placeholder": {
                  color: { md: "#999999", lg: "rgba(255,255,255,0.8)" },
                  fontFamily: '"Poppins", sans-serif',
                },
              }}
              InputProps={{
                endAdornment: (
                  <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
                    <Search sx={{ color: { md: "#666666", lg: "#ffffff" } }} />
                  </Box>
                ),
              }}
            />
          </Box>

          {/* Show Offers Only Checkbox - Desktop */}
          <FormControlLabel
            control={
              <Checkbox
                checked={showOffersOnly}
                onChange={(e) => setShowOffersOnly(e.target.checked)}
                sx={{
                  color: "#ffffff",
                  "&.Mui-checked": {
                    color: "#ffffff",
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: { md: "#333333", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {offersText}
              </Typography>
            }
            sx={{
              whiteSpace: "nowrap",
              alignSelf: "flex-end",
              margin: 0,
              "& .MuiFormControlLabel-label": {
                margin: 0,
              },
            }}
          />
        </Box>

        {/* Mobile Filter Drawer */}
        <Drawer
          anchor="bottom"
          open={mobileFilterOpen}
          onClose={() => setMobileFilterOpen(false)}
          PaperProps={{
            sx: {
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              maxHeight: "85vh",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Drawer Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: 2,
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#333333",
                }}
              >
                Filters
              </Typography>
              <IconButton
                onClick={() => setMobileFilterOpen(false)}
                sx={{
                  color: "#666666",
                }}
              >
                <Close />
              </IconButton>
            </Box>

            {/* Show Offers Only Checkbox - Mobile */}
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showOffersOnly}
                    onChange={(e) => setShowOffersOnly(e.target.checked)}
                    sx={{
                      color: "#D19F3B",
                      "&.Mui-checked": {
                        color: "#D19F3B",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: "#333333",
                      fontWeight: 500,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {offersText}
                  </Typography>
                }
              />
            </Box>

            {/* Category Section - Mobile Drawer */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#333333",
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Categories
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                {categoryOptions.map((cat) => (
                  <Chip
                    key={cat.value}
                    label={cat.label}
                    onClick={() => {
                      setCategory(cat.value);
                      setMobileFilterOpen(false);
                    }}
                    sx={{
                      backgroundColor:
                        category === cat.value ? "#D19F3B" : "#f5f5f5",
                      color: category === cat.value ? "#ffffff" : "#333333",
                      fontWeight: category === cat.value ? 600 : 400,
                      fontSize: "0.9rem",
                      height: "40px",
                      cursor: "pointer",
                      borderRadius: "10px",
                      fontFamily: '"Poppins", sans-serif',
                      "&:hover": {
                        backgroundColor:
                          category === cat.value ? "#B88A2A" : "#e0e0e0",
                      },
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Subcategory Section - Mobile Drawer */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#333333",
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Subcategories
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                {subcategoryOptions.map((subcat) => (
                  <Chip
                    key={subcat.value}
                    label={subcat.label}
                    onClick={() => {
                      setSubcategory(subcat.value);
                      setMobileFilterOpen(false);
                    }}
                    sx={{
                      backgroundColor:
                        subcategory === subcat.value ? "#D19F3B" : "#f5f5f5",
                      color:
                        subcategory === subcat.value ? "#ffffff" : "#333333",
                      fontWeight: subcategory === subcat.value ? 600 : 400,
                      fontSize: "0.9rem",
                      height: "40px",
                      cursor: "pointer",
                      borderRadius: "10px",
                      fontFamily: '"Poppins", sans-serif',
                      "&:hover": {
                        backgroundColor:
                          subcategory === subcat.value ? "#B88A2A" : "#e0e0e0",
                      },
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* View By Section - Mobile Drawer */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#333333",
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                View By
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                {[
                  { value: "", label: "All" },
                  { value: "0-9", label: "0-9" },
                  { value: "a-f", label: "A-F" },
                  { value: "g-l", label: "G-L" },
                  { value: "m-r", label: "M-R" },
                  { value: "s-z", label: "S-Z" },
                ].map((option) => (
                  <Chip
                    key={option.value}
                    label={option.label}
                    onClick={() => {
                      setViewBy(option.value);
                      setMobileFilterOpen(false);
                    }}
                    sx={{
                      backgroundColor:
                        viewBy === option.value ? "#D19F3B" : "#f5f5f5",
                      color: viewBy === option.value ? "#ffffff" : "#333333",
                      fontWeight: viewBy === option.value ? 600 : 400,
                      fontSize: "0.9rem",
                      height: "40px",
                      cursor: "pointer",
                      borderRadius: "10px",
                      fontFamily: '"Poppins", sans-serif',
                      "&:hover": {
                        backgroundColor:
                          viewBy === option.value ? "#B88A2A" : "#e0e0e0",
                      },
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Store Offers Links - Mobile Drawer */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                pt: 2,
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
              >
                <LocalOffer sx={{ color: "#D19F3B", fontSize: "22px" }} />
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: "#333333",
                    fontWeight: 400,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Store Offers
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
              >
                <CardGiftcard sx={{ color: "#D19F3B", fontSize: "22px" }} />
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: "#333333",
                    fontWeight: 400,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Accepts Giga Gift Card
                </Typography>
              </Box>
            </Box>

            {/* Apply Button - Mobile Drawer */}
            <Button
              variant="contained"
              fullWidth
              onClick={() => setMobileFilterOpen(false)}
              sx={{
                backgroundColor: "#D19F3B",
                color: "#ffffff",
                py: 1.5,
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#B88A2A",
                },
                mt: 2,
              }}
            >
              Apply Filters
            </Button>
          </Box>
        </Drawer>

        {/* Row 2: Categories on Left, Store Offers Links on Right - Desktop Only */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 3,
            backgroundColor: { md: "transparent", lg: "#D19F3B" },
            color: { md: "#333333", lg: "#ffffff" },
            px: { md: 0, lg: 22 },
            paddingBottom: 6,
            borderRadius: 0,
            width: "100%",
            maxWidth: { lg: "100%" },
          }}
        >
          {/* Left Side - Category, Subcategory, View By */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { sm: "row" },
              gap: { sm: 3 },
              alignItems: { sm: "flex-end" },
              flex: 1,
            }}
          >
            {/* Category Dropdown */}
            <FormControl
              sx={{ minWidth: { sm: "150px" }, maxWidth: { sm: "180px" } }}
              variant="standard"
            >
              <InputLabel
                id="category-label"
                sx={{
                  fontSize: { sm: "0.875rem" },
                  color: { sm: "#666666", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Category
              </InputLabel>
              <Select
                labelId="category-label"
                value={category}
                label="Category"
                MenuProps={{
                  disableScrollLock: true,
                }}
                onChange={(e) => setCategory(e.target.value)}
                sx={{
                  "&:before": {
                    borderBottomColor: { xs: "#e0e0e0", lg: "#ffffff" },
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottomColor: { xs: "#bdbdbd", lg: "#ffffff" },
                  },
                  "&:after": {
                    borderBottomColor: { xs: "#D19F3B", lg: "#ffffff" },
                  },
                  fontSize: { sm: "0.875rem" },
                  color: { sm: "#333333", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                  "& .MuiSvgIcon-root": {
                    color: { sm: "#333333", lg: "#ffffff" },
                  },
                }}
              >
                {categoryOptions.map((cat) => (
                  <MenuItem
                    key={cat.value}
                    value={cat.value}
                    sx={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {cat.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Subcategory Dropdown */}
            <FormControl
              sx={{ minWidth: { sm: "150px" }, maxWidth: { sm: "180px" } }}
              variant="standard"
            >
              <InputLabel
                id="subcategory-label"
                sx={{
                  fontSize: { sm: "0.875rem" },
                  color: { sm: "#666666", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Subcategory
              </InputLabel>
              <Select
                labelId="subcategory-label"
                value={subcategory}
                label="Subcategory"
                 MenuProps={{
                  disableScrollLock: true,
                }}
                onChange={(e) => setSubcategory(e.target.value)}
                sx={{
                  "&:before": {
                    borderBottomColor: { xs: "#e0e0e0", lg: "#ffffff" },
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottomColor: { xs: "#bdbdbd", lg: "#ffffff" },
                  },
                  "&:after": {
                    borderBottomColor: { xs: "#D19F3B", lg: "#ffffff" },
                  },
                  fontSize: { sm: "0.875rem" },
                  color: { sm: "#333333", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                  "& .MuiSvgIcon-root": {
                    color: { sm: "#333333", lg: "#ffffff" },
                  },
                }}
              >
                {subcategoryOptions.map((subcat) => (
                  <MenuItem
                    key={subcat.value}
                    value={subcat.value}
                    sx={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {subcat.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* View By Dropdown */}
            <FormControl
              sx={{ minWidth: { sm: "120px" }, maxWidth: { sm: "150px" } }}
              variant="standard"
            >
              <InputLabel
                id="viewby-label"
                sx={{
                  fontSize: { sm: "0.875rem" },
                  color: { sm: "#666666", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                View by 0-9
              </InputLabel>
              <Select
                labelId="viewby-label"
                value={viewBy}
                label="View by 0-9"
                 MenuProps={{
                  disableScrollLock: true,
                }}
                onChange={(e) => setViewBy(e.target.value)}
                sx={{
                  "&:before": {
                    borderBottomColor: { xs: "#e0e0e0", lg: "#ffffff" },
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottomColor: { xs: "#bdbdbd", lg: "#ffffff" },
                  },
                  "&:after": {
                    borderBottomColor: { xs: "#D19F3B", lg: "#ffffff" },
                  },
                  fontSize: { sm: "0.875rem" },
                  color: { sm: "#333333", lg: "#ffffff" },
                  fontFamily: '"Poppins", sans-serif',
                  "& .MuiSvgIcon-root": {
                    color: { sm: "#333333", lg: "#ffffff" },
                  },
                }}
              >
                <MenuItem value="" sx={{ fontFamily: '"Poppins", sans-serif' }}>
                  All
                </MenuItem>
                <MenuItem
                  value="0-9"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  0-9
                </MenuItem>
                <MenuItem
                  value="a-f"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  A-F
                </MenuItem>
                <MenuItem
                  value="g-l"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  G-L
                </MenuItem>
                <MenuItem
                  value="m-r"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  M-R
                </MenuItem>
                <MenuItem
                  value="s-z"
                  sx={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  S-Z
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Right Side - Store Offers Links - Desktop Only */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <LocalOffer
                sx={{
                  color: { md: "#D19F3B", lg: "#ffffff" },
                  fontSize: "20px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: { md: "#333333", lg: "#ffffff" },
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Store Offers
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <CardGiftcard
                sx={{
                  color: { md: "#D19F3B", lg: "#ffffff" },
                  fontSize: "20px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: { md: "#333333", lg: "#ffffff" },
                  fontWeight: 400,
                  fontFamily: '"Poppins", sans-serif',
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
