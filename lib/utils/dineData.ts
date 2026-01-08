export interface DineDetail {
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

// Restaurant data - in a real app, this would come from an API
export const dineDetails: DineDetail[] = [
  {
    name: 'Cheezious',
    slug: 'cheezious',
    description: 'Delicious cheesy delights and comfort food favorites. Experience the perfect blend of flavors in every bite.',
    logo: '/logo/cheezious logo.png',
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
  {
    name: 'Pizza Hut',
    slug: 'pizzahut',
    description: 'World-famous pizza with fresh ingredients and signature flavors. Dine in, carry out, or enjoy delivery.',
    logo: '/logo/pizza hut logo.jpg',
    backgroundImage: '/dine/pizzahut.jpeg',
    category: 'Restaurant',
    contact: {
      phone: '+971-50-501-8598'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 30, y: 45 }
    }
  },
  {
    name: 'Wild Wings',
    slug: 'wild-wings',
    description: 'Bold flavors and crispy wings in a vibrant atmosphere. Perfect for sharing with friends and family.',
    logo: '/logo/wings logo.jpg',
    backgroundImage: '/dine/wild-wings.jpeg',
    category: 'Restaurant',
    contact: {
      phone: '+971-50-501-8597'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 35, y: 50 }
    }
  },
  {
    name: 'McDonald\'s',
    slug: 'mcdonalds',
    description: 'I\'m lovin\' it! Enjoy your favorite burgers, fries, and more. Fast, friendly service in a clean, comfortable environment.',
    logo: '/logo/Macdonalds logo.jpg',
    contact: {
      phone: '+971-50-501-8516'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/macdonalds.jpeg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 39, y: 63 }
    }
  },
  {
    name: 'Hardee\'s',
    slug: 'hardees',
    description: 'Made from scratch. Fresh, quality ingredients in every burger, sandwich, and breakfast item. Bold flavors you\'ll love.',
    logo: '/logo/hardees logo.jpg',
    contact: {
      phone: '+971-50-501-8523'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/hardees.jpeg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 64 }
    }
  },
  {
    name: 'Red Apple',
    slug: 'redapple',
    description: 'A delightful dining experience offering fresh and flavorful dishes in a welcoming atmosphere.',
    logo: '/logo/red apple logo.jpg',
    contact: {
      phone: '+971-50-501-8524'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/redapple.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 38, y: 55 }
    }
  },
  {
    name: 'OPTP',
    slug: 'optp',
    description: 'Experience authentic flavors and traditional cuisine in a modern setting.',
    logo: '/logo/optp logo.jpg',
    contact: {
      phone: '+971-50-501-8525'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/optp.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 42, y: 52 }
    }
  },
  {
    name: 'Chachajee',
    slug: 'chachajee',
    description: 'A beloved local favorite serving delicious traditional dishes with a modern twist.',
    logo: '/logo/chachajee logo.jpg',
    contact: {
      phone: '+971-50-501-8526'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/chachajee.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 44, y: 48 }
    }
  },
  {
    name: 'Simply Sufi',
    slug: 'simplysufi',
    description: 'Authentic flavors and traditional recipes served in a warm and inviting atmosphere.',
    logo: '/logo/simplysufi logo.jpg',
    contact: {
      phone: '+971-50-501-8527'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/simplysufi.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 36, y: 57 }
    }
  },
  {
    name: 'Rewayat',
    slug: 'rewayat',
    description: 'Traditional cuisine with a contemporary touch, bringing heritage flavors to your table.',
    logo: '/logo/rewayat logo.jpg',
    contact: {
      phone: '+971-50-501-8528'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/rewayat.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 40, y: 44 }
    }
  },
  {
    name: 'Spice Factory',
    slug: 'spicefactory',
    description: 'Bold flavors and aromatic spices come together to create an unforgettable dining experience.',
    logo: '/logo/spice factory logo.jpg',
    contact: {
      phone: '+971-50-501-8529'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/spicefactory.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 41, y: 56 }
    }
  },
  {
    name: 'China Grill',
    slug: 'chinagrill',
    description: 'Authentic Chinese cuisine with grilled specialties and traditional favorites.',
    logo: '/logo/china grill logo.jpg',
    contact: {
      phone: '+971-50-501-8530'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/chinagrill.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 43, y: 51 }
    }
  },
  {
    name: 'Kababjees',
    slug: 'kababjees',
    description: 'Premium kebabs and grilled specialties made with the finest ingredients and traditional techniques.',
    logo: '/logo/kabab jees logo.jpg',
    contact: {
      phone: '+971-50-501-8531'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/kababjees.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 39, y: 54 }
    }
  },
  {
    name: 'Dry Fruit',
    slug: 'dry-fruit',
    description: 'Premium kebabs and grilled specialties made with the finest ingredients and traditional techniques.',
    contact: {
      phone: '+971-50-501-8531'
    },
    category: 'Restaurant',
    backgroundImage: '/shops/Dry Fruit web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 39, y: 54 }
    }
  },
];

export function getDineBySlug(slug: string): DineDetail | undefined {
  return dineDetails.find(dine => dine.slug === slug);
}

export function getAllDineSlugs(): string[] {
  return dineDetails.map(dine => dine.slug);
}


