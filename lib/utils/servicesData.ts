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

// Services data - banks, grocery stores, perfume shops, and kiosks
export const serviceDetails: ServiceDetail[] = [
  // Banks
  {
    name: 'HBL Bank',
    slug: 'hbl-bank',
    description: 'Full-service banking with ATM facilities. Open your account, apply for loans, and access all banking services.',
    category: 'Bank',
    contact: {
      phone: '+92-51-111-425-225'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 20, y: 30 }
    }
  },
  {
    name: 'MCB Bank',
    slug: 'mcb-bank',
    description: 'Comprehensive banking solutions including savings accounts, current accounts, and investment services.',
    category: 'Bank',
    contact: {
      phone: '+92-51-111-622-622'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 25, y: 35 }
    }
  },
  {
    name: 'UBL Bank',
    slug: 'ubl-bank',
    description: 'Universal banking services with ATM access. Personal and business banking solutions available.',
    category: 'Bank',
    contact: {
      phone: '+92-51-111-825-825'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 30, y: 40 }
    }
  },
  {
    name: 'Allied Bank',
    slug: 'allied-bank',
    description: 'Complete banking services with 24/7 ATM facilities. Account opening and financial advisory services.',
    category: 'Bank',
    contact: {
      phone: '+92-51-111-225-225'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 35, y: 45 }
    }
  },
  {
    name: 'ATM - HBL',
    slug: 'atm-hbl',
    description: '24/7 ATM facility for cash withdrawals, balance inquiries, and other banking transactions.',
    category: 'ATM',
    contact: {
      phone: '+92-51-111-425-225'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 50 }
    }
  },
  {
    name: 'ATM - MCB',
    slug: 'atm-mcb',
    description: 'Convenient ATM location for cash withdrawals and account services available 24/7.',
    category: 'ATM',
    contact: {
      phone: '+92-51-111-622-622'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 45, y: 55 }
    }
  },
  // Grocery Stores
  {
    name: 'Al-Fatah',
    slug: 'al-fatah',
    description: 'Premium grocery store offering a wide range of imported and local products. Fresh produce, dairy, and household essentials.',
    category: 'Grocery',
    contact: {
      phone: '+92-51-123-4567'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 50, y: 60 }
    }
  },
  {
    name: 'Imtiaz Super Market',
    slug: 'imtiaz-super-market',
    description: 'One-stop shop for all your grocery needs. Fresh fruits, vegetables, meat, and daily essentials at competitive prices.',
    category: 'Grocery',
    contact: {
      phone: '+92-51-234-5678'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 55, y: 65 }
    }
  },
  {
    name: 'Chase Value',
    slug: 'chase-value',
    description: 'Value grocery store with everyday low prices on groceries, household items, and personal care products.',
    category: 'Grocery',
    contact: {
      phone: '+92-51-345-6789'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 60, y: 70 }
    }
  },
  // Perfume Shops
  {
    name: 'Ajmal Perfumes',
    slug: 'ajmal-perfumes',
    description: 'Luxury fragrances and perfumes from around the world. Discover your signature scent from our extensive collection.',
    category: 'Perfume',
    contact: {
      phone: '+92-51-456-7890'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 65, y: 25 }
    },
    acceptsGiftCard: true
  },
  {
    name: 'Rasasi Perfumes',
    slug: 'rasasi-perfumes',
    description: 'Premium Arabic and international perfumes. Exclusive fragrances and gift sets available.',
    category: 'Perfume',
    contact: {
      phone: '+92-51-567-8901'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 70, y: 30 }
    },
    acceptsGiftCard: true
  },
  {
    name: 'Swiss Arabian',
    slug: 'swiss-arabian',
    description: 'Luxury perfumes and fragrances. Experience the finest scents from Swiss Arabian collection.',
    category: 'Perfume',
    contact: {
      phone: '+92-51-678-9012'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 75, y: 35 }
    },
    acceptsGiftCard: true
  },
  {
    name: 'Al Haramain Perfumes',
    slug: 'al-haramain-perfumes',
    description: 'Authentic Arabic perfumes and oud collections. Traditional and modern fragrances for men and women.',
    category: 'Perfume',
    contact: {
      phone: '+92-51-789-0123'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 80, y: 40 }
    },
    acceptsGiftCard: true
  },
  // Kiosks & Small Cabins
  {
    name: 'Mobile Accessories Kiosk',
    slug: 'mobile-accessories-kiosk',
    description: 'Phone cases, chargers, screen protectors, and all mobile accessories. Quick service and competitive prices.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-890-1234'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 15, y: 20 }
    }
  },
  {
    name: 'SIM Card Kiosk',
    slug: 'sim-card-kiosk',
    description: 'SIM card activation and mobile services. Get connected with the best mobile network deals.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-901-2345'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 20, y: 25 }
    }
  },
  {
    name: 'Watch Repair Kiosk',
    slug: 'watch-repair-kiosk',
    description: 'Professional watch repair and battery replacement services. Quick and reliable service for all watch brands.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-012-3456'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 25, y: 30 }
    }
  },
  {
    name: 'Key Cutting Kiosk',
    slug: 'key-cutting-kiosk',
    description: 'Key duplication and cutting services. Fast and accurate key making for all types of keys.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-123-4567'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 30, y: 35 }
    }
  },
  {
    name: 'Gift Wrapping Kiosk',
    slug: 'gift-wrapping-kiosk',
    description: 'Professional gift wrapping services. Make your gifts look perfect with our expert wrapping service.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-234-5678'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 35, y: 40 }
    }
  },
  {
    name: 'Phone Recharge Kiosk',
    slug: 'phone-recharge-kiosk',
    description: 'Mobile top-up and recharge services for all networks. Quick and convenient mobile balance recharge.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-345-6789'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 45 }
    }
  },
  {
    name: 'Sunglasses Kiosk',
    slug: 'sunglasses-kiosk',
    description: 'Trendy sunglasses and eyewear. Latest styles and designs for men and women at affordable prices.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-456-7890'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 45, y: 50 }
    }
  },
  {
    name: 'Snacks & Beverages Kiosk',
    slug: 'snacks-beverages-kiosk',
    description: 'Quick snacks, beverages, and refreshments. Perfect for a quick bite while shopping.',
    category: 'Kiosk',
    contact: {
      phone: '+92-51-567-8901'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 50, y: 55 }
    }
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map(service => service.slug);
}

