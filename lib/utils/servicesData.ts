export interface ServiceDetail {
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

// Services data
export const serviceDetails: ServiceDetail[] = [
  {
    name: 'Carrefour',
    slug: 'carrefour',
    description: 'A leading global retail chain offering groceries, fresh produce, household essentials, electronics, and everyday necessities under one roof.',
    backgroundImage: '/Services/Carrefour web.JPG',
    category: 'Grocery',
    contact: {
      phone: '+971-50-501-8610'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 30, y: 40 }
    }
  },
  {
    name: 'D watson',
    slug: 'd-watson',
    description: 'A trusted health and beauty retailer offering skincare, cosmetics, personal care products, and wellness essentials.',
    backgroundImage: '/Services/D watson web.JPG',
    category: 'Beauty',
    contact: {
      phone: '+971-50-501-8610'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 35, y: 45 }
    }
  },
  {
    name: 'Dubai Islamic',
    slug: 'dubai-islamic',
    description: 'Full-service Islamic banking with Sharia-compliant financial solutions. Open your account, apply for loans, and access all banking services.',
    backgroundImage: '/Services/Dubai Islamic Bank web.JPG',
    category: 'Bank',
    contact: {
      phone: '+971-50-501-8610'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 50 }
    }
  },
  {
    name: 'UBL',
    slug: 'ubl',
    description: 'Universal banking services with ATM access. Personal and business banking solutions available.',
    backgroundImage: '/Services/ubl.JPG',
    category: 'Bank',
    contact: {
      phone: '+971-50-501-8610'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 45, y: 55 }
    }
  },
  {
    name: 'Al Raj',
    slug: 'al-raj',
    description: 'Premium banking services with comprehensive financial solutions. Personal and business banking with dedicated customer service.',
    backgroundImage: '/Services/Al Raj web.JPG',
    category: 'Bank',
    contact: {
      phone: '+971-50-501-8610'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 50, y: 60 }
    }
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map(service => service.slug);
}

