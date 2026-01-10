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
    logo: '/logo/carrefour.jpeg',
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
    logo: '/logo/dubai islamic bank.jpeg',
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
    logo: '/logo/ubl.jpeg',
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
  },
  {
    name: 'Derma Orchid',
    slug: 'derma-orchid',
    description: 'Aesthetic & Skincare Clinic. Highly qualified team of dermatologists, cosmetologists, and certified aestheticians. Offering a wide range of treatments including laser hair removal, whitening, HIFU, BB Glow, PRP, Hydra Facial, hair transplant, chemical peeling, thread lifting, Botox, fillers, Pico Laser, carbon facial, permanent makeup, tattoo removal, and slimming drips. Ladies only.',
    logo: '/logo/derma orchard.jpg',
    backgroundImage: '/Services/derma orchid web.JPG',
    category: 'Clinic',
    contact: {
      phone: '+92-332-9785371',
      email: 'info@dermaorchid.com'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 55, y: 65 }
    }
  },
  {
    name: 'Aesthetics and Dental Works',
    slug: 'aesthetics-and-dental-works',
    description: 'Dental Clinic & Cosmetic Centre offering comprehensive dental and aesthetic services. Services include Dental Implants/Bridges, Dentures/Crowns, Dental cleaning & whitening, Fixed Braces, Hydrafacial/Chemical peel, PRP for Hair & face, and Full body whitening. Experience expert care for your dental and cosmetic needs.',
    logo: '/logo/aesthetic and dental works.jpg',
    backgroundImage: '/Services/aesthetic n dental work web.JPG',
    category: 'Clinic',
    contact: {
      phone: '+92-333-5545887'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 60, y: 70 }
    }
  },
  {
    name: 'IMC Integrative Medical Center',
    slug: 'imc',
    description: 'Integrative Medical Center offering comprehensive dental care, holistic skin care, and advanced IV therapies. Services include Integrative Dental Care, Holistic Skin Care, Whitening Injections, Glutathione Drips, Skin Brightening Shots, Fat Loss Drips, Stamina Boosters, Immunity Support Drips, IV Probiotics & Peptides, Nutritional Intravenous Therapy, NAD+ Glutathione Therapy, IV for Anti Aging, and Male Hormone Enhancers. Your family dental clinic and skin care destination.',
    logo: '/logo/IMC.jpg',
    backgroundImage: '/Services/imc web.JPG',
    category: 'Clinic',
    contact: {
      phone: '+92-51-6107253',
      location: '2A Floor, Shop # 44-47'
    },
    location: {
      level: 'Second Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 65, y: 75 }
    }
  },
  {
    name: 'Pakistan Currency Exchange',
    slug: 'pakistan-currency-exchange',
    description: 'Professional currency exchange services for all major currencies. We buy and sell currencies at competitive rates. Also offering international money transfer services through Western Union, MoneyGram, and Ria Money Transfer. Convenient and secure currency exchange for all your travel and business needs.',
    logo: '/logo/pakistan currencey exchange.jpg',
    backgroundImage: '/Services/pakistan currency exchange web.JPG',
    category: 'Currency Exchange',
    contact: {
      phone: '+971-50-501-8611'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 70, y: 80 }
    }
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map(service => service.slug);
}

