'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterState {
  searchQuery: string;
  category: string;
  subcategory: string;
  viewBy: string;
  showOffersOnly: boolean;
}

interface FilterContextType {
  filters: FilterState;
  setSearchQuery: (query: string) => void;
  setCategory: (category: string) => void;
  setSubcategory: (subcategory: string) => void;
  setViewBy: (viewBy: string) => void;
  setShowOffersOnly: (show: boolean) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const initialFilters: FilterState = {
  searchQuery: '',
  category: '',
  subcategory: '',
  viewBy: '',
  showOffersOnly: false,
};

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const setSearchQuery = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const setCategory = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const setSubcategory = (subcategory: string) => {
    setFilters(prev => ({ ...prev, subcategory }));
  };

  const setViewBy = (viewBy: string) => {
    setFilters(prev => ({ ...prev, viewBy }));
  };

  const setShowOffersOnly = (show: boolean) => {
    setFilters(prev => ({ ...prev, showOffersOnly: show }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setSearchQuery,
        setCategory,
        setSubcategory,
        setViewBy,
        setShowOffersOnly,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}

