export interface TrendingItem {
  image: string;
  category: string;
  title: string;
  dates: string;
  video?: string;
  isVideo?: boolean;
}

export interface FeaturedItem {
  image: string;
  name: string;
  description: string;
}

export interface Brand {
  name: string;
  image: string;
}

export interface CardProps {
  data: TrendingItem | FeaturedItem | Brand;
  variant?: 'trending' | 'brand';
  isHeroVideo?: boolean;
  showOverlay?: boolean;
  showLogo?: boolean;
}

