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
    logo: '/logo/alkaram logo.jpg',
    backgroundImage: '/shops/alkaram.jpg',
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
    logo: '/logo/almas logo.png',
    backgroundImage: '/shops/almas.jpeg',
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
    logo: '/logo/almirah logo.png',
    backgroundImage: '/shops/almirah.jpeg',
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
    logo: '/logo/batik studio logo.jpg',
    backgroundImage: '/shops/batik-studio.jpg',
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
    logo: '/logo/bloon logo.jpg',
    backgroundImage: '/shops/bloon.jpg',
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
    logo: '/logo/bonanza satrangi logo.jpg',
    backgroundImage: '/shops/bonanza.jpeg',
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
    logo: '/logo/Breakout logo.png',
    backgroundImage: '/shops/breakout.jpeg',
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
    logo: '/logo/cambridge logo.jpg',
    backgroundImage: '/shops/cambridge.jpeg',
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
    logo: '/logo/junaid jamshed logo.png',
    backgroundImage: '/shops/junaid-jamshed.jpeg',
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
    logo: '/logo/kayseria logo.jpg',
    backgroundImage: '/shops/kayseria.jpeg',
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
    logo: '/logo/miniso logo.jpg',
    backgroundImage: '/shops/miniso.jpeg',
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
    name: 'Babys Day Out',
    slug: 'babys-day-out',
    description: 'A kids’ store offering toys, games, and fun activities designed to engage and entertain children of all ages.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Babysdayoutweb.JPG',
    category: 'Lifestyle',
    contact: { phone: '+971-50-501-8610' },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 75, y: 45 }
    }
  },
  {
    name: 'Gadgets Mobile',
    slug: 'gadgets-mobile',
    description: 'A mobile and electronics store offering the latest smartphones, accessories, and tech gadgets.',
    logo: '/logo/.jpg',
    backgroundImage: '/Gadgets Mobile web.JPG',
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
    name: 'Bonanza Satrangi',
    slug: 'bonanza-satrangi',
    description: 'A leading fashion brand offering stylish and vibrant apparel for men, women, and children.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/bonanza.jpeg',
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
    name: 'Aroma Concepts',
    slug: 'aroma-concepts',
    description: 'A fragrance and home scents store offering perfumes, candles, and aromatic products.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Aroma Concepts web.JPG',
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
    name: 'Eastern Art and HandiCraft',
    slug: 'eastern-art-and-handicraft',
    description: 'A handicraft store showcasing traditional art, décor, and handmade cultural pieces.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Eastern Art and HandiCraft web.JPG',
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
    name: 'Taana Baana',
    slug: 'taana-baana',
    description: 'A textile and fashion brand offering premium fabrics, ethnic wear, and custom tailoring services.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Taana Baana web.JPG',
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
    name: 'Alpha Accessories',
    slug: 'alpha-accessories',
    description: 'A fashion accessories store offering bags, jewelry, and trendy everyday essentials.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Alpha Accessories web.JPG',
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
    name: 'Ximi Vogue',
    slug: 'ximi-vogue',
    description: 'A lifestyle and accessories brand offering affordable and fashionable products for all ages.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Ximi Vogue web.JPG',
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
    name: 'Glamor',
    slug: 'glamor',
    description: 'A beauty and cosmetics store providing makeup, skincare, and personal care products.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Glamor web.JPG',
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
    name: 'Thai Zone',
    slug: 'thai-zone',
    description: 'A dining outlet offering authentic Thai cuisine with fresh ingredients and traditional flavors.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Thai Zone web.JPG',
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
    name: 'Tajik',
    slug: 'tajik',
    description: 'A footwear and fashion accessories store offering comfortable and stylish designs.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Tajik web.JPG',
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
    name: 'Sams Abaya',
    slug: 'sams-abaya',
    description: 'A women’s fashion store specializing in elegant abayas and modest wear with contemporary designs.',
    logo: '/logo/.jpg',
    backgroundImage: "/shops/Sam's Abaya web.JPG",
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
    name: 'Zamin Jewelers',
    slug: 'zamin-jewelers',
    description: 'A premium jewelry store offering exquisite gold, diamond, and gemstone collections.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Zamin Jewelers web.JPG',
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
    name: 'Traditional Khusa',
    slug: 'traditional-khusa',
    description: 'A footwear store offering traditional handcrafted khusa shoes with ethnic designs.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Traditional Khusa web.JPG',
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
    name: 'Taarkashi',
    slug: 'taarkashi',
    description: 'A decorative art store specializing in intricate taarkashi artwork and handicrafts.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Taarkashi web.JPG',
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
    name: 'The Time Zone',
    slug: 'the-time-zone',
    description: 'A watch store offering premium and stylish timepieces for men and women.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/The Time Zone web.JPG',
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
    name: 'Mehran Jewellers',
    slug: 'mehran-jewellers',
    description: 'A renowned jewelry brand offering gold, diamond, and bridal collections with elegant craftsmanship.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Mehran Jewellers web.JPG',
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
    name: 'Little Explorer',
    slug: 'little-explorer',
    description: 'A kids-focused store offering educational toys, games, and activities designed to inspire learning and creativity.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Little Explorer web.JPG',
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
    name: 'Location',
    slug: 'location',
    description: 'A fashion retail brand offering modern apparel and accessories with a focus on contemporary style.',

    logo: '/logo/.jpg',
    backgroundImage: '/shops/Location web.JPG',
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
    name: 'Majhurat',
    slug: 'majhurat',
    description: 'A traditional jewelry store specializing in classic gold designs and timeless craftsmanship.',
    logo: '/logo/majhurat.jpeg',
    backgroundImage: '/shops/Majhurat web.JPG',
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
    name: 'Milli Shoes',
    slug: 'milli-shoes',
    description: 'A popular footwear brand offering stylish, comfortable, and affordable shoes for everyday wear.',
    logo: '/logo/milli.jpeg',
    backgroundImage: '/shops/Milli web.JPG',
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
    name: 'Mini Try',
    slug: 'mini-try',
    description: 'A trendy accessories and essentials store offering small lifestyle products, gifts, and daily-use items.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Mini Try web.JPG',
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
    name: 'Mr Kazi',
    slug: 'mr-kazi',
    description: 'A men’s fashion brand offering traditional and modern wear including formal, casual, and ethnic clothing.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Mr Kazi web.JPG',
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
    name: 'NDURE',
    slug: 'ndure',
    description: 'A leading footwear brand offering fashionable and durable shoes for men and women.',
    logo: '/logo/ndure.jpeg',
    backgroundImage: '/shops/Ndure web.JPG',
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
    name: 'Readers Point',
    slug: 'readers-point',
    description: 'A bookstore offering a wide range of books, stationery, magazines, and reading essentials.',
    logo: '/logo/readers point.jpeg',
    backgroundImage: '/shops/Readers Point web.JPG',
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
    name: 'Rivaj',
    slug: 'rivaj',
    description: 'A beauty brand offering affordable cosmetics, skincare, and personal care products.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Rivaj web.JPG',
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
    name: 'Saeed Ghani',
    slug: 'saeed-ghani',
    description: 'A heritage herbal brand offering natural skincare, haircare, and wellness products.',
    logo: '/logo/saeed ghani.jpeg',
    backgroundImage: '/shops/Saeed Ghani web.JPG',
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
    name: 'Service',
    slug: 'service',
    description: 'A convenience and service store providing everyday solutions and customer support essentials.',
    logo: '/logo/service.jpeg',
    backgroundImage: '/shops/Service web.JPG',
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
    name: 'Style and Comfort',
    slug: 'style-and-comfort',
    description: 'A home and lifestyle store offering furniture, décor, and products focused on comfort and design.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Style and Comfort web.JPG',
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
    name: 'Sveston',
    slug: 'sveston',
    description: 'A watch brand offering stylish timepieces that combine modern design with reliable performance.',
    logo: '/logo/sveston.jpeg',
    backgroundImage: '/shops/Sveston web.JPG',
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
    name: 'Tech Studio',
    slug: 'tech-studio',
    description: 'A technology store offering mobile accessories, gadgets, and electronic solutions.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Tech Studio web.JPG',
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
    name: 'Younique',
    slug: 'younique',
    description: 'A fashion and accessories brand offering trendy styles designed to stand out.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Younique web.JPG',
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
    name: 'Zero',
    slug: 'zero',
    description: 'A footwear and fashion accessories brand offering sleek designs with everyday comfort.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Zero web.JPG',
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
    name: 'Balochistan Dry Fruit Marchent',
    slug: 'balochistan-dry-fruit-marchent',
    description: 'A specialty store offering premium quality dry fruits, nuts, and traditional healthy snacks.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Balochistan Dry Fruit Marchent web.JPG',
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
    name: 'Just Fragrance',
    slug: 'just-fragrance',
    description: 'A fragrance brand offering a wide range of perfumes and scents inspired by international blends.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Just Fragrance web.JPG',
    category: 'Lifestyle',
    contact: {
      phone: '+971-50-501-8610'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 75, y: 45 }
    }
  }, {
    name: 'Haroons',
    slug: 'haroons',
    description: 'A well-known fashion and fabric store offering quality clothing, textiles, and accessories for all occasions.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Haroons web.JPG',
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
    name: 'Jelly Fish',
    slug: 'jelly-factory',
    description: 'A fun and trendy store offering toys, gifts, novelty items, and colorful products for kids and families.',
    logo: '/logo/jelly factory.jpeg',
    backgroundImage: '/shops/Jelly Fish web.JPG',
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
    name: 'Johri',
    slug: 'johri',
    description: 'A traditional jewelry brand specializing in finely crafted gold and gemstone pieces with classic designs.',

    logo: '/logo/johri.jpeg',
    backgroundImage: '/shops/Johri web.JPG',
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
    name: 'Kohinoor Jewels',
    slug: 'kohinoor-jewels',
    description: 'A premium jewelry store offering exquisite gold, diamond, and bridal collections with elegant craftsmanship.',

    logo: '/logo/kohinoor jewelers.jpeg',
    backgroundImage: '/shops/Kohinoor Jewels web.JPG',
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
    name: 'The Linen Company',
    slug: 'the-linen-company',
    description: 'A home furnishing brand offering premium bed linens, towels, and textile essentials for modern living.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Linen web.JPG',
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
    name: 'Friends Home',
    slug: 'friends-home',
    description: 'A home essentials store offering kitchenware, household items, décor, and everyday products for comfortable living.',
    logo: '/logo/friends home.jpeg',
    backgroundImage: '/shops/Friends Home web.JPG',
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
    name: 'Dry Fruit',
    slug: 'dry-fruit',
    description: 'Japanese-inspired lifestyle products and accessories for everyday living.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/Dry Fruit web.JPG',
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
    name: 'Diamond Crown',
    slug: 'diamond-crown',
    description: 'An elegant jewelry brand offering finely crafted gold, diamond, and gemstone pieces for timeless style and special occasions.',
    logo: '/logo/diamond crown.jpeg',
    backgroundImage: '/shops/Diamond Crown web.JPG',
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
    name: 'D Watson',
    slug: 'd-watson',
    description: 'A trusted health and beauty retailer offering skincare, cosmetics, personal care products, and wellness essentials.',
    logo: '/logo/.jpg',
    backgroundImage: '/shops/D watson web.JPG',
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
    name: 'Carrefour',
    slug: 'carrefour',
    description: 'A leading global retail chain offering groceries, fresh produce, household essentials, electronics, and everyday necessities under one roof.',
    logo: '/logo/carrefour.jpeg',
    backgroundImage: '/shops/Carrefour web.JPG',
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
    name: 'Brand City',
    slug: 'brand-city',
    description: 'A multi-brand fashion destination offering a wide range of trendy apparel, footwear, and accessories for all ages.',
    logo: '/logo/brand city.jpeg', backgroundImage: '/shops/Brand City web.JPG', category: 'Lifestyle', contact: { phone: '+971-50-501-8610' }, location: { level: 'Ground Floor', parking: 'P1, Main Parking', mapPosition: { x: 75, y: 45 } }
  },

  {
    name: 'Bata',
    slug: 'bata',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/Bata web.JPG',
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
    name: '1st Step',
    slug: '1st-step',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/1st step web.JPG',
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
    name: 'Addidas',
    slug: 'addidas',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/addidas web.JPG',
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
    name: 'Adoro',
    slug: 'adoro',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/adoro web.JPG',
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
    name: 'Almirah',
    slug: 'almirah',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/almirah web.JPG',
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
    name: 'Anta',
    slug: 'anta',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/anta web.JPG',
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
    name: 'Apavi',
    slug: 'apavi',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/apavi web.JPG',
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
    name: 'Baskin Robin',
    slug: 'baskin-robin',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/baskin robin 2 web.JPG',
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
    name: 'Batik Studio',
    slug: 'batik-studio-3',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/bata.jpeg',
    backgroundImage: '/shops/GroundFloor/batik studio web.JPG',
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
