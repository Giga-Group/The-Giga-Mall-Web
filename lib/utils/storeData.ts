export interface StoreDetail {
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

// Store data - in a real app, this would come from an API
export const storeDetails: StoreDetail[] = [
  {
    name: 'Alkaram',
    slug: 'alkaram',
    description: 'Elegant fashion and premium textiles for the modern wardrobe.',
    logo: '/alkaram.jpg',
    backgroundImage: '/alkaram.jpg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8600'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 30, y: 40 }
    }
  },
  {
    name: 'Almas',
    slug: 'almas',
    description: 'Discover timeless elegance with our curated collection of premium fashion.',
    logo: '/almas logo.png',
    backgroundImage: '/almas.jpeg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8601'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 35, y: 45 }
    }
  },
  {
    name: 'Almirah',
    slug: 'almirah',
    description: 'Your destination for contemporary fashion and style essentials.',
    logo: '/almirah logo.png',
    backgroundImage: '/almirah.jpeg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8602'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 40, y: 50 }
    }
  },
  {
    name: 'Batik Studio',
    slug: 'batik-studio',
    description: 'Traditional artistry meets modern fashion in our unique batik collections.',
    backgroundImage: '/batik-studio.jpg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8603'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 25, y: 35 }
    }
  },
  {
    name: 'Bloon',
    slug: 'bloon',
    description: 'Fresh styles and vibrant fashion for every occasion.',
    backgroundImage: '/bloon.jpg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8604'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 45, y: 55 }
    }
  },
  {
    name: 'Bonanza',
    slug: 'bonanza',
    description: 'Quality clothing and accessories for the whole family.',
    backgroundImage: '/bonanza.jpeg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8605'
    },
    location: {
      level: 'Second Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 50, y: 30 }
    }
  },
  {
    name: 'Breakout',
    slug: 'breakout',
    description: 'Break free with bold designs and contemporary fashion statements.',
    logo: '/Breakout logo.png',
    backgroundImage: '/breakout.jpeg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8606'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 55, y: 60 }
    }
  },
  {
    name: 'Cambridge',
    slug: 'cambridge',
    description: 'Classic British style meets modern sophistication.',
    backgroundImage: '/cambridge.jpeg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8607'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 60, y: 40 }
    }
  },
  {
    name: 'Junaid Jamshed',
    slug: 'junaid-jamshed',
    description: 'Traditional elegance reimagined for the modern lifestyle.',
    logo: '/junaid jamshed logo.png',
    backgroundImage: '/junaid-jamshed.jpeg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8608'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 65, y: 50 }
    }
  },
  {
    name: 'Kayseria',
    slug: 'kayseria',
    description: 'Premium fashion and luxury textiles for the sophisticated shopper.',
    logo: '/Kayseria logo.png',
    backgroundImage: '/kayseria.jpeg',
    category: 'Fashion',
    contact: {
      phone: '+971-50-501-8609'
    },
    location: {
      level: 'Second Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 70, y: 35 }
    }
  },
  {
    name: 'Miniso',
    slug: 'miniso',
    description: 'Japanese-inspired lifestyle products and accessories for everyday living.',
    logo: '/miniso logo.png',
    backgroundImage: '/miniso.jpeg',
    category: 'Lifestyle',
    contact: {
      phone: '+971-50-501-8610'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 75, y: 45 }
    }
  },
  {
    name: '12 STOREEZ',
    slug: '12-storeez',
    description: 'An international fashion brand with a clear design DNA and goal to create limited capsules that would easily fit into your life. Perfect cuts, elevated fabrics, attention to detail and composition allow us to provide our customers with a well-curated wardrobe, driven by our client\'s lifestyle rather than trends.',
    contact: {
      phone: '+971-50-501-8579'
    },
    category: 'Fashion',
    backgroundImage: '/1-WL_inside-_2732_x_1436_rijsgy-OK.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 45, y: 25 }
    }
  },
  {
    name: '& Other Stories',
    slug: 'other-stories',
    description: 'Discover unique fashion pieces and accessories that tell your story. Our collections blend contemporary design with timeless elegance.',
    contact: {
      phone: '+971-50-501-8578'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/2-ES---WLaMaquinista_OK.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 35, y: 50 }
    }
  },
  {
    name: 'Aesop',
    slug: 'aesop',
    description: 'Thoughtfully crafted skin, hair, and body care with a signature sensorial touch. Experience premium quality products designed for everyday use.',
    contact: {
      phone: '+971-50-501-8577'
    },
    category: 'Beauty',
    acceptsGiftCard: true,
    backgroundImage: '/Aesop_Westfield_Stratford_City.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 65 }
    }
  },
  {
    name: 'Adidas',
    slug: 'adidas',
    description: 'Sport-inspired streetwear and footwear designed for game changers. Discover the latest in athletic performance and style.',
    contact: {
      phone: '+971-50-501-8576'
    },
    category: 'Sports & Fitness',
    hasOffers: true,
    backgroundImage: '/ADIDAS.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 45, y: 55 }
    }
  },
  {
    name: 'Nike',
    slug: 'nike',
    description: 'Performance meets style with the latest sneakers, sportswear, and innovations. Just Do It.',
    logo: '/NIKE_-_WMoN.jpg',
    contact: {
      phone: '+971-50-501-8575'
    },
    category: 'Sports & Fitness',
    hasOffers: true,
    backgroundImage: '/NIKE_-_WMoN.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 50, y: 55 }
    }
  },
  {
    name: 'Sephora',
    slug: 'sephora',
    description: 'The ultimate beauty playground featuring makeup, skincare, and fragrance icons from around the world.',
    contact: {
      phone: '+971-50-501-8574'
    },
    category: 'Beauty',
    hasOffers: true,
    acceptsGiftCard: true,
    backgroundImage: '/Sephora_2_1.jpg',
    location: {
      level: 'Second Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 25, y: 30 }
    }
  },
  {
    name: 'Zara',
    slug: 'zara',
    description: 'Runway-inspired collections, refreshed weekly, for modern everyday style. Fast fashion that doesn\'t compromise on quality.',
    logo: '/zara-forum6257.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/zara-forum6257.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Starbucks',
    slug: 'starbucks',
    description: 'Your favourite handcrafted beverages, from classic coffees to seasonal specials. Experience the perfect cup every time.',
    contact: {
      phone: '+971-50-501-8572'
    },
    category: 'Food & Beverage',
    backgroundImage: '/Starbucks.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 30, y: 60 }
    }
  },
  {
    name: 'Bvlgari',
    slug: 'bvlgari',
    description: 'Luxury Italian jewelry, watches, and accessories. Timeless elegance meets contemporary design.',
    contact: {
      phone: '+971-50-501-8571'
    },
    category: 'Luxury',
    acceptsGiftCard: true,
    backgroundImage: '/3-Mall-of-Scandinavia-OK.jpg'
  },
  {
    name: 'Cartier',
    slug: 'cartier',
    description: 'French luxury goods manufacturer of jewelry, watches, and accessories. Craftsmanship and elegance since 1847.',
    contact: {
      phone: '+971-50-501-8570'
    },
    category: 'Luxury',
    acceptsGiftCard: true,
    backgroundImage: '/4-WChodov-OK.jpg'
  },
  {
    name: 'CHANEL',
    slug: 'chanel',
    description: 'French luxury fashion house specializing in haute couture, ready-to-wear, luxury goods, and accessories.',
    contact: {
      phone: '+971-50-501-8569'
    },
    category: 'Luxury',
    acceptsGiftCard: true,
    backgroundImage: '/Victoria_s_Secret_Westfield_Stratford_City.jpg'
  },
  {
    name: 'Louis Vuitton',
    slug: 'louis-vuitton',
    description: 'French luxury fashion house and luxury goods company. Known for its LV monogram and leather goods.',
    contact: {
      phone: '+971-50-501-8568'
    },
    category: 'Luxury',
    acceptsGiftCard: true,
    backgroundImage: '/Jok_Air_4TEMPS_CNIT_carrousel_homepage_2732x1436px.jpg'
  },
  {
    name: '100% Capri',
    slug: '100-capri',
    description: 'Discover premium Italian fashion and accessories inspired by the beautiful island of Capri.',
    contact: {
      phone: '+971-50-501-8567'
    },
    category: 'Fashion',
    backgroundImage: '/2-OK.jpg'
  },
  {
    name: '1847 Executive Grooming for Men',
    slug: '1847-executive-grooming',
    description: 'Premium grooming services and products for the modern gentleman. Experience luxury barbering and skincare.',
    contact: {
      phone: '+971-50-501-8566'
    },
    category: 'Grooming',
    backgroundImage: '/DSC05412Food_OK_1.jpg'
  },
  {
    name: 'Chloé',
    slug: 'chloe',
    description: 'French luxury fashion house known for its feminine, bohemian aesthetic and ready-to-wear collections.',
    contact: {
      phone: '+971-50-501-8565'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/DSC07199.jpg'
  },
  {
    name: 'Chopard',
    slug: 'chopard',
    description: 'Swiss luxury watchmaker and jeweler. Crafting timepieces and jewelry with precision and elegance.',
    contact: {
      phone: '+971-50-501-8564'
    },
    category: 'Luxury',
    backgroundImage: '/DSC07836.jpg'
  },
  {
    name: 'Christian Louboutin',
    slug: 'christian-louboutin',
    description: 'French luxury footwear and accessories designer. Famous for red-soled high-heeled shoes.',
    contact: {
      phone: '+971-50-501-8563'
    },
    category: 'Luxury',
    acceptsGiftCard: true,
    backgroundImage: '/DSC07876.jpg'
  },
  {
    name: 'Henry Jacques',
    slug: 'henry-jacques',
    description: 'Luxury French perfumer creating bespoke fragrances with the finest ingredients and craftsmanship.',
    contact: {
      phone: '+971-50-501-8562'
    },
    category: 'Luxury',
    backgroundImage: '/DSC07901.jpg'
  },
  {
    name: 'Level Shoes',
    slug: 'level-shoes',
    description: 'The world\'s largest luxury shoe store. Discover an extensive collection of designer footwear.',
    contact: {
      phone: '+971-50-501-8561'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/DSC08041.jpg'
  },
  {
    name: 'LONGINES',
    slug: 'longines',
    description: 'Swiss luxury watchmaker with over 190 years of tradition. Elegance is an attitude.',
    contact: {
      phone: '+971-50-501-8560'
    },
    category: 'Luxury',
    hasOffers: true,
    backgroundImage: '/DSC08196.jpg'
  },
  {
    name: 'Tiffany & Co.',
    slug: 'tiffany-co',
    description: 'American luxury jewelry and specialty retailer. Known for its distinctive blue boxes and timeless designs.',
    contact: {
      phone: '+971-50-501-8559'
    },
    category: 'Luxury',
    acceptsGiftCard: true,
    backgroundImage: '/Swarovski_in_Scandinavia_2_784e0db59b.webp'
  },
  {
    name: 'Tommy Hilfiger Kids',
    slug: 'tommy-hilfiger-kids',
    description: 'Classic American cool style for kids. Quality clothing that combines comfort and style.',
    contact: {
      phone: '+971-50-501-8558'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/H and M.jpg'
  }
];

export function getStoreBySlug(slug: string): StoreDetail | undefined {
  return storeDetails.find(store => store.slug === slug);
}

export function getAllStoreSlugs(): string[] {
  return storeDetails.map(store => store.slug);
}

