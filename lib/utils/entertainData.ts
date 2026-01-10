export interface EntertainDetail {
  name: string;
  slug: string;
  description: string;
  logo?: string;
  backgroundImage?: string;
  contact: {
    phone?: string;
    email?: string;
    location?: string;
  };
  location?: {
    level?: string;
    parking?: string;
    mapPosition?: {
      x: number;
      y: number;
    };
  };
  hasOffers?: boolean;
  acceptsGiftCard?: boolean;
  category?: string;
}

// Entertain data - in a real app, this would come from an API
export const entertainDetails: EntertainDetail[] = [
  {
    name: 'Cinapex',
    slug: 'cinepax',
    description: 'Cinepax is awesome',
    // logo: '/logo/cheezious logo.png',
    backgroundImage: '',
    category: 'Fast Food',
    contact: {
      phone: '+971-50-501-8599'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 25, y: 40 }
    }
  },
  
  {
    name: 'Bowling Alley',
    slug: 'bowling-alley',
    description: 'Bowling is awesome',
    logo: '',
    backgroundImage: '/dine/cheezious.jpeg',
    category: 'Fast Food',
    contact: {
      phone: '+971-50-501-8599'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 25, y: 40 }
    }
  },
  
];

export function getEntertainBySlug(slug: string): EntertainDetail | undefined {
  return entertainDetails.find(entertain => entertain.slug === slug);
}

export function getAllEntertainSlugs(): string[] {
  return entertainDetails.map(entertain => entertain.slug);
}


