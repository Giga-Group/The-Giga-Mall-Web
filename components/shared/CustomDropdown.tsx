// components/common/CustomDropdown.tsx
'use client';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  sx?: Record<string, unknown>;
  variant?: 'standard' | 'outlined' | 'filled';
  pageType?: 'shop' | 'dine';
}

const CustomDropdown = ({ 
  label, 
  value, 
  options, 
  onChange, 
  sx, 
  pageType = 'shop'
}: CustomDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState<number>(200);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Find the selected option
  const selectedOption = options.find(opt => opt.value === value);
  // If no option is selected, use an empty option (for placeholder)
  const displayText = selectedOption ? selectedOption.label : label;

  // Calculate dynamic width based on content
  useLayoutEffect(() => {
    if (triggerRef.current) {
      const width = triggerRef.current.offsetWidth;
      setDropdownWidth(width);
    }
  }, [displayText]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine colors based on pageType
  const getColors = () => {
    const isOnGoldBackground = pageType === 'dine' || pageType === 'shop';
    
    return {
      textColor: isOnGoldBackground ? '#ffffff' : '#333333',
      placeholderColor: isOnGoldBackground ? 'rgba(255,255,255,0.7)' : '#999999',
      borderColor: isOnGoldBackground ? '#ffffff' : '#e0e0e0',
      hoverBorderColor: isOnGoldBackground ? '#ffffff' : '#D19F3B',
      iconColor: isOnGoldBackground ? '#ffffff' : '#666666',
      activeTextColor: isOnGoldBackground ? '#ffffff' : '#333333',
    };
  };

  const colors = getColors();
  
  // Check if a value is selected (not empty/placeholder)
  const hasValue = value !== '';

  return (
    <Box 
      ref={dropdownRef} 
      sx={{ 
        position: 'relative', 
        minWidth: { sm: "120px" },
        maxWidth: { sm: "180px" },
        ...sx 
      }}
    >
      {/* Dropdown Trigger - Looks like Material-UI Standard input */}
      <Box
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 0',
          borderBottom: `1px solid ${colors.borderColor}`,
          cursor: 'pointer',
          width: '100%',
          minWidth: '120px',
          '&:hover': {
            borderBottomColor: colors.hoverBorderColor,
          },
          transition: 'border-color 0.3s ease',
          position: 'relative',
        }}
      >
        {/* Text display - shows label as placeholder when no value selected */}
        <Typography 
          sx={{ 
            fontSize: '0.875rem',
            color: hasValue ? colors.activeTextColor : colors.placeholderColor,
            fontFamily: '"Poppins", sans-serif',
            position: 'absolute',
            top: 0,
            left: 0,
            right: '24px', // Space for the icon
            transform: 'translateY(8px)',
            transition: 'all 0.2s ease',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {displayText}
        </Typography>
        
        {/* Invisible spacer to maintain height */}
        <Box sx={{ height: '24px', visibility: 'hidden' }}>
          <Typography sx={{ fontSize: '0.875rem' }}>.</Typography>
        </Box>
        
        {/* Dropdown icon */}
        <ExpandMore 
          sx={{ 
            fontSize: '20px', 
            color: colors.iconColor,
            transform: open ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
            transition: 'transform 0.2s, color 0.3s ease',
            position: 'absolute',
            right: 0,
            top: '50%',
          }} 
        />
      </Box>
      
      {/* Dropdown Menu */}
      {open && (
        <Paper
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: 'auto', // Dynamic width
            minWidth: `${dropdownWidth}px`,
            maxWidth: '400px', // Maximum width to prevent overflow
            maxHeight: '300px',
            overflowY: 'auto',
            zIndex: 1500,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            borderRadius: '8px',
            mt: 0.5,
            // Hide scrollbar but keep functionality
            '&::-webkit-scrollbar': {
              display: 'none', // Hide scrollbar for Chrome, Safari, Opera
            },
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
          }}
        >
          <List 
            dense 
            sx={{ 
              p: 0,
              // Prevent text wrapping
              '& .MuiListItemText-root': {
                overflow: 'hidden',
              },
              '& .MuiListItemText-primary': {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
          >
            {/* Always include the placeholder/label option */}
            <ListItem
              key="placeholder"
              onClick={() => {
                onChange('');
                setOpen(false);
              }}
              sx={{
                cursor: 'pointer',
                px: 2,
                py: 1,
                backgroundColor: value === '' ? '#F5F5F5' : 'transparent',
                '&:hover': {
                  backgroundColor: value === '' ? '#E8E8E8' : '#F5F5F5',
                },
                transition: 'background-color 0.2s ease',
                minWidth: `${dropdownWidth}px`,
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: value === '' ? '#333333' : '#666666',
                  fontFamily: '"Poppins", sans-serif',
                  fontStyle: value === '' ? 'normal' : 'normal',
                }}
              />
            </ListItem>
            
            {/* Other options */}
            {options
              .filter(option => option.value !== '') // Filter out empty option since we already added it
              .map((option) => (
                <ListItem
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  sx={{
                    cursor: 'pointer',
                    px: 2,
                    py: 1,
                    backgroundColor: value === option.value ? '#F5F5F5' : 'transparent',
                    '&:hover': {
                      backgroundColor: value === option.value ? '#E8E8E8' : '#F5F5F5',
                    },
                    transition: 'background-color 0.2s ease',
                    minWidth: `${dropdownWidth}px`,
                  }}
                >
                  <ListItemText
                    primary={option.label}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      color: '#333333',
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  />
                </ListItem>
              ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default CustomDropdown;