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
    logo: '/logo/almirah.jpg',
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
    logo: '/logo/batik studio.jpg',
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
    logo: '/logo/bloon.jpg',
    backgroundImage: '/shops/bloon web.jpg',
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
    backgroundImage: '/shops/kayseria web.jpeg',
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
    logo: '/logo/1st step.jpg',
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
    logo: '/logo/almirah.jpg',
    backgroundImage: '/shops/Gadgets Mobile web.jpeg',
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
    logo: '/logo/bonanza satrangi.jpg',
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
    // logo: '/logo/pop nosh.jpg',
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
    // logo: '/logo/location.jpg',
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
    // logo: '/logo/1st step.jpg',
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
    logo: '/logo/almirah.jpg',
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
    logo: '/logo/zero.jpg',
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
    logo: '/logo/rivaj.jpg',
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
    description: 'A bag store offering a wide selection of bags, backpacks, and luggage. Discover quality bags for travel, work, and everyday use.',
    // logo: '/logo/location.jpg',
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
    description: 'A jewelry and gift shop offering fine jewelry, accessories, and gift items. Discover elegant jewelry pieces and thoughtful gifts for every occasion.',
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
    description: 'A clothing brand offering stylish apparel for men and women. Discover contemporary fashion with modern designs and quality fabrics.',
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
    backgroundImage: '/shops/Little Explorer web.jpeg',
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

    logo: '/logo/location.jpg',
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
    description: 'A clothing brand offering trendy and stylish apparel. Discover contemporary fashion with modern designs for everyday wear.',
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
    description: 'A mobile accessories store offering phone cases, chargers, cables, headphones, and mobile gadgets. Discover quality accessories for your mobile devices.',
    logo: '/logo/Mr kazi.jpg',
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
    logo: '/logo/rivaj.jpg',
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
    logo: '/logo/style and comfort.jpg',
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
    logo: '/logo/sveston.jpg',
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
    logo: '/logo/tech studio.jpg',
    backgroundImage: '/shops/Tech Studio mobile.JPG',
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
    description: 'A footwear and fashion accessories brand offering sleek designs with everyday comfort and style.',
    logo: '/logo/zero.jpg',
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
    name: 'F Optical and Watch',
    slug: 'f-optical-and-watch',
    description: 'An optical and watch store offering prescription glasses, sunglasses, and stylish timepieces. Find the perfect eyewear and watch to complement your style.',
    logo: '/logo/F optical and watch.jpg',
    backgroundImage: '/shops/f optical and watch web.JPG',
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
    name: 'Foot and Leather',
    slug: 'foot-and-leather',
    description: 'A footwear and leather goods store offering quality shoes, bags, and leather accessories. Discover durable and stylish leather products for everyday use.',
    logo: '/logo/foot and leathers.jpg',
    backgroundImage: '/shops/foot and leather web.JPG',
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
  // {
  //   name: 'IMC',
  //   slug: 'imc',
  //   description: 'A footwear and fashion accessories brand offering sleek designs with everyday comfort.',
  //   logo: '/logo/IMC.jpg',
  //   backgroundImage: '/shops/imc web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
  {
    name: 'H n H Decor',
    slug: 'h-n-h-decor',
    description: 'A home décor and furnishings store offering decorative items, furniture, and interior design accessories. Transform your living space with stylish home essentials.',
    logo: '/logo/H&H decore.jpg',
    backgroundImage: '/shops/h n h decor web.JPG',
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
    name: 'Kapok',
    slug: 'kapok',
    description: 'A lifestyle and home goods store offering quality products for modern living. Discover a curated selection of home essentials and lifestyle items.',
    logo: '/logo/kapok.jpg',
    backgroundImage: '/shops/kapok web.JPG',
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
  // {
  //   name: 'King Coffee',
  //   slug: 'king-coffee',
  //   description: 'A footwear and fashion accessories brand offering sleek designs with everyday comfort.',
  //   logo: '/logo/king coffe.jpg',
  //   backgroundImage: '/shops/king coffee web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
  {
    name: 'Melon Box',
    slug: 'melon-box',
    description: 'A lifestyle store offering a variety of products and essentials for everyday needs. Discover quality items at great value.',
    backgroundImage: '/shops/melon box web.JPG',
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
    name: 'Mi',
    slug: 'mi',
    description: 'A mobile and accessories store offering smartphones, phone cases, chargers, cables, and mobile gadgets. Discover quality mobile devices and accessories.',
    logo: '/logo/MI.jpg',
    backgroundImage: '/shops/mi web.JPG',
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
    name: 'Mr Game',
    slug: 'mr-game',
    description: 'A gaming and entertainment store offering video games, gaming accessories, and entertainment products. Discover the latest games and gaming gear.',
    logo: '/logo/mr games.jpg',
    backgroundImage: '/shops/mr game web.JPG',
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
    name: 'Pound Store',
    slug: 'pound-store',
    description: 'A discount variety store offering affordable household items, kitchenware, and everyday essentials. Great value on a wide range of products.',
    logo: '/logo/pound stoore.jpg',
    backgroundImage: '/shops/pound store web.JPG',
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
    name: 'Rohi Reet',
    slug: 'rohi-reet',
    description: 'A fashion and lifestyle store offering traditional and contemporary clothing and accessories. Discover elegant designs for every occasion.',
    logo: '/logo/rohi reet.jpg',
    backgroundImage: '/shops/rohi reet web.JPG',
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
    name: 'Silver Stition',
    slug: 'silver-stition',
    description: 'A jewelry store specializing in silver jewelry, accessories, and decorative items. Discover elegant silver pieces for every occasion.',
    logo: '/logo/silverstation.jpg',
    backgroundImage: '/shops/silverstition web.JPG',
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
    name: 'Sport Snation',
    slug: 'sport-snation',
    description: 'A sports and athletic store offering sports apparel, footwear, and equipment. Find everything you need for your active lifestyle.',
    logo: '/logo/sport snation.jpg',
    backgroundImage: '/shops/sport snation web.JPG',
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
    name: 'Speed Sport',
    slug: 'speed-sports',
    description: 'A footwear and fashion accessories brand offering sleek designs with everyday comfort.',
    // logo: '/logo/sport snation.jpg',
    backgroundImage: '/shops/sport snation web.JPG',
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
  // {
  //   name: 'Sweet and Salt',
  //   slug: 'sweet-and-salt',
  //   description: 'A footwear and fashion accessories brand offering sleek designs with everyday comfort.',
  //   logo: '/logo/sweet and salt.jpg',
  //   backgroundImage: '/shops/sweet and salt web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
  {
    name: 'Just Fragrance',
    slug: 'just-fragrance',
    description: 'A fragrance brand offering a wide range of perfumes and scents inspired by international blends.',
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
    description: 'A variety store offering different items including clocks, decorative pieces, home décor, and various household essentials. Discover a wide range of products for your home and lifestyle.',
    logo: '/logo/Haroons.jpg',
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
  // {
  //   name: 'Jelly Fish',
  //   slug: 'jelly-factory',
  //   description: 'A fun and trendy store offering toys, gifts, novelty items, and colorful products for kids and families.',
  //   logo: '/logo/jelly factory.jpeg',
  //   backgroundImage: '/shops/Jelly Factory web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
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
    logo: '/logo/THE linen company.jpg',
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
    name: 'Brand City',
    slug: 'brand-city',
    description: 'A multi-brand fashion destination offering a wide range of trendy apparel, footwear, and accessories for all ages.',
    logo: '/logo/brand city.jpeg', backgroundImage: '/shops/Brand City web.JPG', category: 'Lifestyle', contact: { phone: '+971-50-501-8610' }, location: { level: 'Ground Floor', parking: 'P1, Main Parking', mapPosition: { x: 75, y: 45 } }
  },

  {
    name: 'Bata',
    slug: 'bata',
    description: 'A globally recognized footwear brand offering affordable, durable, and stylish shoes for men, women, and children. Quality footwear for everyday wear.',
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
    description: 'A children\'s footwear brand specializing in comfortable and durable shoes for kids. Quality footwear designed for growing feet.',
    logo: '/logo/1st step.jpg',
    backgroundImage: '/shops/1st step web.JPG',
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
    description: 'A sportswear and athletic footwear brand offering performance shoes, apparel, and accessories. Discover athletic gear for sports and active lifestyle.',
    logo: '/logo/addidas.jpg',
    backgroundImage: '/shops/addidas web.JPG',
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
    description: 'A handbag and footwear store for women offering elegant handbags, purses, and stylish shoes. Discover quality bags and footwear with contemporary designs.',
    logo: '/logo/adoro.jpg',
    backgroundImage: '/shops/adoro web.JPG',
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
    description: 'A sportswear and athletic footwear brand offering performance shoes and athletic gear. Discover quality sports footwear and activewear.',
    logo: '/logo/anta.jpg',
    backgroundImage: '/shops/anta web.JPG',
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
    description: 'A footwear brand offering quality shoes for men and women. Discover stylish and comfortable footwear with modern designs.',
    logo: '/logo/apavi.jpg',
    backgroundImage: '/shops/apavi web.JPG',
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
  // {
  //   name: 'Baskin Robin',
  //   slug: 'baskin-robin',
  //   description: 'An ice cream and dessert store offering a wide variety of premium ice cream flavors, sundaes, and delicious ice cream cakes. Experience the joy of 31 flavors and more.',
  //   // logo: '/logo/BR BASKIN.jpg',
  //   backgroundImage: '/shops/baskin robin 2 web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
  {
    name: 'Charcoal',
    slug: 'charcoal',
    description: 'A footwear brand offering stylish and contemporary shoes for men and women. Discover quality footwear with modern designs.',
    logo: '/logo/charcol.jpg',
    backgroundImage: '/shops/charcoal web.JPG',
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
    name: 'Coppelia',
    slug: 'coppelia',
    description: 'A jewelry store offering fine jewelry, accessories, and elegant pieces. Discover quality jewelry with timeless designs for every occasion.',
    logo: '/logo/coppelia.jpg',
    backgroundImage: '/shops/coppelia web.JPG',
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
    name: 'Courger',
    slug: 'cougar',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/cougar.jpg',
    backgroundImage: '/shops/couger web.JPG',
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
    name: 'Crocs',
    slug: 'crocs',
    description: 'A lifestyle brand offering comfortable footwear including clogs, sandals, and slippers, plus apparel like jackets and shirts. Discover versatile and comfortable products for men, women, and children.',
    logo: '/logo/crocs.jpg',
    backgroundImage: '/shops/crocs web.JPG',
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
    name: 'Cross Stitch',
    slug: 'cross-stitch',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    // logo: '/logo/crocs.jpg',
    backgroundImage: '/shops/cross stitch web.JPG',
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
    name: 'Dari Mooch',
    slug: 'dari-mooch',
    description: 'A grooming and personal care brand specializing in beard and mustache care products. Discover quality grooming essentials, oils, and accessories for men.',
    logo: '/logo/dahri mouch.jpg',
    backgroundImage: '/shops/dari mooch web.JPG',
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
    name: 'Engine',
    slug: 'engine',
    description: 'A clothing brand offering stylish apparel for men and women. Discover contemporary fashion with modern designs and quality fabrics.',
    logo: '/logo/engine.jpg',
    backgroundImage: '/shops/engine web.JPG',
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
    name: 'Equator',
    slug: 'equator',
    description: 'A clothing brand offering stylish apparel for men and women. Discover contemporary fashion including shirts, jackets, and casual wear with modern designs.',
    logo: '/logo/equator.jpg',
    backgroundImage: '/shops/equator web.JPG',
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
    name: 'Ethnic',
    slug: 'ethnic',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/ethnc.jpg',
    backgroundImage: '/shops/ethnc web.JPG',
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
    name: 'Focus',
    slug: 'focus',
    description: 'A clothing brand offering stylish apparel for men and women. Discover contemporary fashion with modern designs and quality fabrics.',
    logo: '/logo/focus.jpg',
    backgroundImage: '/shops/focus web.JPG',
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
    name: 'FPL',
    slug: 'fpl',
    description: 'A clothing brand offering stylish apparel for men and women. Discover contemporary fashion with modern designs and quality fabrics.',
    logo: '/logo/FPL.jpg',
    backgroundImage: '/shops/fpl web.JPG',
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
    name: 'Goshes',
    slug: 'goshes',
    description: 'A footwear brand offering quality shoes for men and women. Discover stylish and comfortable footwear with modern designs.',
    logo: '/logo/coshes.jpg',
    backgroundImage: '/shops/Goshes web.JPG',
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
    name: 'Gulzari',
    slug: 'gulzari',
    description: 'An optical store offering prescription glasses, sunglasses, and eye care services. Find quality eyewear from top brands including Prada, Giorgio Armani, Ray-Ban, and Porsche.',
    logo: '/logo/gulzari optics.jpg',
    backgroundImage: '/shops/gulzari web.JPG',
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
    name: 'Hussain Jewelers',
    slug: 'hussain-jewelers',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/hussain jewellers.jpg',
    backgroundImage: '/shops/haseen jewelers web.JPG',
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
    name: 'Hopscotch',
    slug: 'hopscotch',
    description: 'A children\'s clothing and accessories store offering colorful and playful apparel for kids. Discover fun designs and comfortable outfits for little ones.',
    logo: '/logo/hopscotch.jpg',
    backgroundImage: '/shops/hopscotch web.JPG',
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
    name: 'Hub',
    slug: 'hub',
    description: 'A lifestyle and accessories store offering a variety of products for modern living. Discover quality items and everyday essentials.',
    logo: '/logo/hub.jpg',
    backgroundImage: '/shops/hub web.JPG',
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
    name: 'Hunza Emporium',
    slug: 'hunza-emporium',
    description: 'A specialty store offering traditional handicrafts, textiles, and cultural items from the Hunza region. Discover authentic artisanal products and unique finds.',
    logo: '/logo/hunza emporium.jpg',
    backgroundImage: '/shops/hunza emporium web.JPG',
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
    name: 'Hush Puppies',
    slug: 'hush-puppies',
    description: 'A footwear brand specializing in comfortable casual shoes for men, women, and children. Discover quality footwear known for comfort and style.',
    logo: '/logo/hush dog.jpg',
    backgroundImage: '/shops/hush puppies web.JPG',
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
    name: 'Insignia',
    slug: 'insignia',
    description: 'A footwear brand offering quality shoes for men and women. Discover stylish and comfortable footwear with contemporary designs.',
    logo: '/logo/insignia.jpg',
    backgroundImage: '/shops/insignia web.JPG',
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
    name: 'J. Fragrance and Costmetics',
    slug: 'j.-fragrances-and-costmetics',
    description: 'A beauty and fragrance store offering perfumes, cosmetics, and personal care products. Discover premium fragrances and beauty essentials.',
    logo: '/logo/J. frag.jpg',
    backgroundImage: '/shops/J-fragrance and costmetics web.JPG',
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
    name: 'Jafferjees',
    slug: 'jaffer-jees',
    description: 'A handbag store offering a wide selection of bags, purses, and accessories. Discover quality handbags with elegant designs for every occasion.',
    logo: '/logo/jaffer jees.jpg',
    backgroundImage: '/shops/jafferjees web.JPG',
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
    name: 'Jc Buckman',
    slug: 'jc-buckman',
    description: 'A lifestyle and accessories store offering quality products for everyday needs. Discover stylish essentials and functional items.',
    logo: '/logo/juice fruity.jpg',
    backgroundImage: '/shops/jc buckman web.JPG',
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
  // {
  //   name: 'Juice Fruity',
  //   slug: 'juice-friuty',
  //   description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
  //   logo: '/logo/juice fruity.jpg',
  //   backgroundImage: '/shops/juice fruity web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
  {
    name: 'Julke',
    slug: 'julke',
    description: 'A lifestyle and accessories store offering quality products for modern living. Discover stylish essentials and everyday items.',
    backgroundImage: '/shops/julke web.JPG',
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
    name: 'KefDiamonds',
    slug: 'kef-diamonds',
    description: 'A premium jewelry store specializing in diamonds and fine jewelry. Discover exquisite diamond collections and elegant jewelry pieces.',
    logo: '/logo/zero.jpg',
    backgroundImage: '/shops/kef diamonds web.JPG',
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
    name: 'Khaadi',
    slug: 'khaadi',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/khadi.jpg',
    backgroundImage: '/shops/khadi web.JPG',
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
    name: 'Khusa Factory',
    slug: 'khusa-factory',
    description: 'A traditional footwear store specializing in handcrafted khussa and jutti shoes. Discover intricately designed traditional footwear with ethnic patterns.',
    logo: '/logo/khussa factory.jpg',
    backgroundImage: '/shops/khusa factory web.JPG',
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
  
  // {
  //   name: 'King Corn',
  //   slug: 'king-corn',
  //   description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
  //   logo: '/logo/king corn.jpg',
  //   backgroundImage: '/shops/king corn web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
  {
    name: 'Lady Privacy',
    slug: 'lady-privacy',
    description: 'A women\'s fashion and accessories store offering elegant clothing and accessories. Discover stylish pieces designed for the modern woman.',
    backgroundImage: '/shops/lady privacy web.JPG',
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
    name: 'Limelight',
    slug: 'limelight',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/lime light.jpg',
    backgroundImage: '/shops/limelite web.JPG',
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
    name: 'Lullusar',
    slug: 'lullusar',
    description: 'A lifestyle and accessories store offering quality products for modern living. Discover stylish essentials and everyday items.',
    logo: '/logo/lulusar.jpg',
    backgroundImage: '/shops/lullusar web.JPG',
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
    name: 'Maria B',
    slug: 'maria-b-2',
    description: 'A premium fashion brand offering elegant clothing and accessories for women. Discover sophisticated designs and contemporary style.',
    logo: '/logo/MARIA B.jpg',
    backgroundImage: '/shops/maria b 2 web.JPG',
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
    name: 'Mayblline',
    slug: 'maybelline',
    description: 'A cosmetics and beauty store offering makeup, skincare, and personal care products. Discover quality beauty essentials and cosmetics.',
    logo: '/logo/maybelline.jpg',
    backgroundImage: '/shops/maybelline web.JPG',
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
    name: 'Miracle',
    slug: 'miracle',
    description: 'A lifestyle and accessories store offering quality products for everyday needs. Discover stylish essentials and functional items.',
    logo: '/logo/mircel.jpg',
    backgroundImage: '/shops/miracle web.JPG',
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
    name: 'Mocciani',
    slug: 'mocciani',
    description: 'A footwear brand offering stylish and comfortable shoes. Discover quality footwear designed for everyday wear and special occasions.',
    logo: '/logo/mocciani.jpg',
    backgroundImage: '/shops/mocciani web.JPG',
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
    name: 'Monark',
    slug: 'monark',
    description: 'A footwear brand offering quality shoes for men, women, and children. Discover stylish and durable footwear for every occasion.',
    logo: '/logo/monark.jpg',
    backgroundImage: '/shops/monark web.JPG',
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
    name: 'MTJ Fragrance',
    slug: 'mtj-fragrance',
    description: 'A fragrance store offering premium perfumes and colognes for men and women. Discover exclusive scents and gift sets.',
    logo: '/logo/MTJ.jpg',
    backgroundImage: '/shops/mtj fragrance web.JPG',
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
    name: 'Nizam Watch House',
    slug: 'nizam-watch-house',
    description: 'A watch store offering premium timepieces and watch accessories. Discover elegant watches for men and women.',
    logo: '/logo/nizam watch.jpg',
    backgroundImage: '/shops/nizam watch house web.JPG',
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
    name: 'Royal Tag',
    slug: 'royal-tag',
    description: 'A lifestyle and accessories store offering quality products for everyday needs. Discover stylish essentials and functional items.',
    logo: '/logo/royal tag.jpg',
    backgroundImage: '/shops/royal tag web.JPG',
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
    name: 'Sapphire',
    slug: 'sapphire',
    description: 'A jewelry store offering fine gemstone jewelry, including sapphires and other precious stones. Discover elegant jewelry pieces and accessories.',
    logo: '/logo/sapphire.jpg',
    backgroundImage: '/shops/royal tag web.JPG',
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
    name: 'Saya',
    slug: 'saya',
    description: 'A lifestyle and accessories store offering quality products for everyday needs. Discover stylish essentials and functional items.',
    logo: '/logo/saya.jpg',
    backgroundImage: '/shops/saya web.JPG',
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
    name: 'Scents and Stories',
    slug: 'scents-and-stories',
    description: 'A fragrance boutique offering premium perfumes and colognes with unique stories. Discover exclusive scents and gift sets for men and women.',
    logo: '/logo/scents n stories.jpg',
    backgroundImage: '/shops/scents and stories web.JPG',
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
    name: 'Skechers',
    slug: 'skechers',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/skecher.jpg',
    backgroundImage: '/shops/sketchers web.JPG',
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
    name: 'Sona Chandi',
    slug: 'sona-chandi',
    description: 'A jewelry store specializing in gold and silver jewelry. Discover traditional and contemporary jewelry pieces with elegant craftsmanship.',
    backgroundImage: '/shops/sona chandi web.JPG',
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
    name: 'Style in Shoes',
    slug: 'style-in-shoes',
    description: 'A footwear store offering stylish and comfortable shoes for men, women, and children. Discover quality footwear for every occasion.',
    logo: '/logo/style in shoes.jpg',
    backgroundImage: '/shops/speed sports web.JPG',
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
    name: 'Svesto',
    slug: 'svesto',
    description: 'A watch brand offering stylish timepieces that combine modern design with reliable performance. Discover elegant watches for men and women.',
    logo: '/logo/sveston.jpg',
    backgroundImage: '/shops/svesto web.JPG',
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
    name: 'Swarovski',
    slug: 'swarovski',
    description: 'A luxury crystal and jewelry store offering exquisite crystal figurines, jewelry, and accessories. Discover premium crystal products and elegant designs.',
    logo: '/logo/swaro visky.jpg',
    backgroundImage: '/shops/swarovski web.JPG',
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
    name: 'Syed Royal Optics',
    slug: 'syed-royal-optics',
    description: 'An optical store offering prescription glasses, sunglasses, and eye care services. Find the perfect eyewear to match your style and vision needs.',
    logo: '/logo/syed royal optics.jpg',
    backgroundImage: '/shops/syed royal optics web.JPG',
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
    name: 'Tagheuer',
    slug: 'tagheuer',
    description: 'A luxury watch brand offering premium Swiss timepieces. Discover precision-engineered watches combining elegance with performance.',
    logo: '/logo/tag heuer.jpg',
    backgroundImage: '/shops/tagheuer web.JPG',
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
    name: 'Tayyab Jewelers',
    slug: 'tayyab-jewelers',
    description: 'A premium jewelry store offering fine gold, diamond, and gemstone collections. Discover elegant jewelry pieces with exquisite craftsmanship.',
    logo: '/logo/tayyab.jpg',
    backgroundImage: '/shops/tayyab jewelers web.JPG',
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
    name: 'Tesoro',
    slug: 'tesoro',
    description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
    logo: '/logo/tesoro.jpg',
    backgroundImage: '/shops/tesoro web.JPG',
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
    name: 'The Body Shop',
    slug: 'the-body-shop',
    description: 'A beauty and skincare store offering natural and ethically sourced cosmetics, skincare, and personal care products. Discover quality beauty essentials.',
    logo: '/logo/the body shop.jpg',
    backgroundImage: '/shops/the body shop web.JPG',
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
  // {
  //   name: 'The Hortins',
  //   slug: 'the-hortins',
  //   description: 'A globally recognized footwear brand offering stylish, durable, and affordable shoes for men, women, and children.',
  //   logo: '',
  //   backgroundImage: '/shops/tim hortins web.JPG',
  //   category: 'Lifestyle',
  //   contact: {
  //     phone: '+971-50-501-8610'
  //   },
  //   location: {
  //     level: 'Ground Floor',
  //     parking: 'P1, Main Parking',
  //     mapPosition: { x: 75, y: 45 }
  //   }
  // },
  {
    name: 'Ultra Club',
    slug: 'ultra-club',
    description: 'A footwear brand offering quality shoes for men and women. Discover stylish and comfortable footwear with modern designs.',
    logo: '/logo/ultra club.jpg',
    backgroundImage: '/shops/ultra club web.JPG',
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
    name: 'Wasim Badami by Hemani',
    slug: 'wasim-badami-by-hemani',
    description: 'A jewelry and accessories store offering fine jewelry and fashion accessories. Discover elegant pieces designed by Wasim Badami.',
    logo: '/logo/wasim badami.jpg',
    backgroundImage: '/shops/wasim badami by hemani mobile.JPG',
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
    name: 'Abc Fragrance',
    slug: 'abc-fragrance',
    description: 'A fragrance store offering premium perfumes and colognes for men and women. Discover exclusive scents and gift sets.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/abc fragrance web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'AMD',
    slug: 'amd',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    logo: '/logo/MARIA B.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/amd web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Amir',
    slug: 'amir',
    description: 'A fashion brand offering elegant clothing and accessories. Discover sophisticated designs for contemporary style.',
    logo: '/logo/kayseria logo.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/amir 2 web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Bareeze',
    slug: 'bareeze',
    description: 'A premium fashion brand offering quality clothing and textiles. Discover elegant designs and premium fabrics for men and women.',
    logo: '/logo/junaid jamshed logo.png',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/bareeze web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Batik',
    slug: 'batik',
    description: 'A fashion brand specializing in traditional batik designs and contemporary clothing. Discover unique patterns and modern styles.',
    logo: '/logo/batik studio logo.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/batik web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Beech Tree',
    slug: 'beech-tree',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday style.',
    // logo: '/logo/bonanza satrangi.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/beech tree web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Bonanza Satrangi Beauty',
    slug: 'bonanza-satrangi-beauty',
    description: 'A beauty and cosmetics store offering makeup, skincare, and personal care products. Discover quality beauty essentials from Bonanza Satrangi.',
    // logo: '/logo/bonanza satrangi.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/bonanza satrangi beauty web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Borjan',
    slug: 'borjan',
    description: 'A footwear brand offering stylish and comfortable shoes, bags, and accessories. Discover quality leather products for men and women.',
    logo: '/logo/monark.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/borjan web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Brackets',
    slug: 'brackets',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    logo: '/logo/MARIA B.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/brackets web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Charizma',
    slug: 'charizma',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    logo: '/logo/junaid jamshed logo.png',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/charizma web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Chinyere',
    slug: 'chinyere',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/chinyere web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Chunri',
    slug: 'chunri',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/chunri web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Corio',
    slug: 'corio',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/corio web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Dinners',
    slug: 'dinners',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/dinners web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Dynasty',
    slug: 'dynasty',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/dynasty web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'ECS',
    slug: 'ecs',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/ecs web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Edenrobe',
    slug: 'edenrobe',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/eden robe web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Elegant',
    slug: 'elegant',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/elegant web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Excel',
    slug: 'excel',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/excel web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Furor',
    slug: 'furor',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/furor web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Generation',
    slug: 'generation',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/generation web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Hi Volts',
    slug: 'hi-volts',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/hi volts web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Ideas',
    slug: 'ideas',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/ideas web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Jiyas Creation',
    slug: 'jiyas-creation',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/jiyas creation web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  
  {
    name: 'Lawrancepur',
    slug: 'lawrancepur',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/lawrancepur web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Little People',
    slug: 'little-people',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/little people web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Logo',
    slug: 'logo',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    logo: '/logo/Breakout logo.png',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/logo web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'M/Basic',
    slug: 'm-basic',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/m basic web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Maria B',
    slug: 'maria-b',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    logo: '/logo/MARIA B.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/maria b web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Minnie Minors',
    slug: 'minnie-minors',
    description: 'A vibrant children\'s clothing store offering a wide selection of colorful apparel and accessories for kids. Discover fun designs, characters, and stylish outfits perfect for little ones.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Kids & Baby',
    hasOffers: true,
    backgroundImage: '/shops/minnie minors web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Mona',
    slug: 'mona',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    logo: '/logo/monark.jpg',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/mona web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Nakoosh',
    slug: 'nakoosh',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/nakoosh web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Nishat',
    slug: 'nishat',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/nishat web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Oaks',
    slug: 'oaks',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/oaks web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'One',
    slug: 'one',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/one web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Out Fitters',
    slug: 'out-fitters',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-50-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/outfitters web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Revolution London',
    slug: 'revolution-london',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/revolution london web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'RTH',
    slug: 'rth',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/rth web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Sana Safinaz',
    slug: 'sana-safinaz',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/sana safinaz web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Siraj Sons Silver Shop',
    slug: 'siraj-sons-silver-shop',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/siraj sons silver shop web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Sohaye',
    slug: 'sohaye',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/sohaye web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Sowearg',
    slug: 'sowearg',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/sowearg web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Stylo',
    slug: 'stylo',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/stylo web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Swiss Arabia',
    slug: 'swiss-arabia',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/swiss arabia web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Threads and Motys',
    slug: 'threads-and-motys',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/threads and motys web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Tiny Years',
    slug: 'tiny-years',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/tiny years web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Toy Club',
    slug: 'toy-club',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/toy club web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Umaiza',
    slug: 'umaiza',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/umaiza web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Uniworth',
    slug: 'uniworth',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/uniworth web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Unze',
    slug: 'unze',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/unze web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Vereity Bags and Costmetics',
    slug: 'vereity-bags-and-costmetics',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/vereity bags and costmetics web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Zeen',
    slug: 'zeen',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/zeen web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Zubaidas',
    slug: 'zubaidas',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/zubaidas web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
 
  {
    name: '361',
    slug: '361',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/.jpp',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/361 web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'a and i',
    slug: 'a-and-i',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/.jpp',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/a and i web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Ali Baba',
    slug: 'ali-baba',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/.jpp',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/alibaba web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Anamta Fateh',
    slug: 'anamta-fateh',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/.jpp',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/anamta fateh web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Anaya Jewelery',
    slug: 'anaya-jewelery',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/.jpp',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/anaya jewelery web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Apavi Shoes',
    slug: 'apavi-shoes',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/logo/apavi.jpg',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/apavi shoes web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Bling Collection',
    slug: 'bling-collection',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/.jpp',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/bling collection web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Dare to Dazzle',
    slug: 'dare-to-dazzle',
    description: 'A fashion brand offering contemporary clothing and accessories. Discover stylish designs for modern everyday wear.',
    // logo: '/.jpp',
    contact: {
      phone: '+971-501-8573'
    },
    category: 'Fashion',
    hasOffers: true,
    backgroundImage: '/shops/minime kids web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 20, y: 50 }
    }
  },
  {
    name: 'Designer Vault',
    slug: 'designer-vault',
    description: 'A luxury boutique offering authentic designer handbags, shoes, clothing, and accessories from top fashion houses including Burberry, Hermes, Versace, Gucci, Chanel, Dior, and more.',
    contact: {
      phone: '+971-50-501-8611'
    },
    category: 'Luxury Fashion',
    backgroundImage: '/shops/designer vault web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 80, y: 95 }
    }
  },
  {
    name: 'Dollar House',
    slug: 'dollar-house',
    description: 'A variety store offering a wide range of affordable household items, kitchenware, home décor, and general merchandise at great value prices.',
    contact: {
      phone: '+971-50-501-8612'
    },
    category: 'Variety Store',
    backgroundImage: '/shops/dollar house web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 81, y: 96 }
    }
  },
  {
    name: 'Dollar World',
    slug: 'dollar-world',
    description: 'Welcome to elegance. A discount variety store offering big value at small prices, featuring kitchenware, home goods, decorative items, and everyday essentials.',
    contact: {
      phone: '+971-50-501-8613'
    },
    category: 'Variety Store',
    backgroundImage: '/shops/dollar world web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 82, y: 97 }
    }
  },
  {
    name: 'Good Life',
    slug: 'good-life',
    description: 'A footwear and lifestyle store offering a wide selection of colorful slippers, sandals, and accessories. Discover comfortable and stylish options for everyday living.',
    contact: {
      phone: '+971-50-501-8614'
    },
    category: 'Footwear',
    backgroundImage: '/shops/good life web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 83, y: 98 }
    }
  },
  {
    name: 'Irha\'s Kids',
    slug: 'irhas-kids',
    description: 'A vibrant children\'s store offering a wide range of baby and kids\' products including clothing, accessories, feeding bottles, baby care items, backpacks, and colorful essentials for little ones.',
    contact: {
      phone: '+971-50-501-8615'
    },
    category: 'Kids & Baby',
    backgroundImage: '/shops/irhas kids web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 84, y: 99 }
    }
  },
  {
    name: 'Jockey',
    slug: 'jockey',
    description: 'Premium innerwear and apparel brand offering comfortable, high-quality underwear, t-shirts, and casual wear for men and women. Discover classic styles and modern designs.',
    contact: {
      phone: '+971-50-501-8616'
    },
    category: 'Fashion',
    backgroundImage: '/shops/jockey web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 85, y: 100 }
    }
  },
  {
    name: 'Just for Men',
    slug: 'just-for-men',
    description: 'A men\'s accessories store specializing in ties, belts, cufflinks, hats, and other fashion accessories. Discover a wide selection of stylish accessories to complete your look.',
    contact: {
      phone: '+971-50-501-8617'
    },
    category: 'Fashion Accessories',
    backgroundImage: '/shops/just for men web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 86, y: 101 }
    }
  },
  {
    name: 'Kundan',
    slug: 'kundan',
    description: 'A traditional footwear store specializing in intricately designed juttis, khussas, and embellished flat shoes. Discover a wide selection of colorful, embroidered, and beaded traditional footwear perfect for weddings, festivals, and celebrations.',
    contact: {
      phone: '+971-50-501-8618'
    },
    category: 'Footwear',
    backgroundImage: '/shops/kundan web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 87, y: 102 }
    }
  },
  {
    name: 'Leisure Club',
    slug: 'leisure-club',
    description: 'A family clothing store offering a wide range of casual wear, traditional attire, and modern fashion for men, women, and children. Discover vibrant collections including winter collections, new arrivals, and seasonal styles for the whole family.',
    contact: {
      phone: '+971-50-501-8619'
    },
    category: 'Fashion',
    backgroundImage: '/shops/leisure club.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 88, y: 103 }
    }
  },
  {
    name: 'Mip.j Store',
    slug: 'mipj-store',
    description: 'A jewelry and accessories store offering a wide selection of necklaces, earrings, rings, bracelets, and handbags. Specializing in professional ear and nose piercing services. Discover elegant gold and silver-toned jewelry with colorful stones, perfect for any occasion.',
    contact: {
      phone: '+971-50-501-8620'
    },
    category: 'Jewelry & Accessories',
    backgroundImage: '/shops/mip.j web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 89, y: 104 }
    }
  },
  {
    name: 'MIRAAL',
    slug: 'miral',
    description: 'A boutique specializing in abayas and jewelry. Discover a wide selection of elegant abayas in various colors and styles, along with beautiful gold and silver jewelry pieces including necklaces, earrings, bracelets, and rings. Perfect for modest fashion and special occasions.',
    contact: {
      phone: '+971-50-501-8621'
    },
    category: 'Fashion & Jewelry',
    backgroundImage: '/shops/miral web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 90, y: 105 }
    }
  },
  {
    name: 'The North Face',
    slug: 'north-face',
    description: 'A leading outdoor apparel and gear brand offering high-performance jackets, clothing, footwear, and accessories. Discover technical outerwear, hiking boots, backpacks, and gear designed for exploration and adventure. Never stop exploring.',
    contact: {
      phone: '+971-50-501-8622'
    },
    category: 'Outdoor & Sports',
    backgroundImage: '/shops/north face web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 91, y: 106 }
    }
  },
  {
    name: 'Originals of London',
    slug: 'originals-of-london',
    description: 'A luxury fashion retailer offering all the latest fashion brands from around the world. Discover authentic designer items including handbags, footwear, clothing, and accessories from top luxury brands such as Burberry, Gucci, Prada, Hermes, Fendi, Kenzo, Versace, Balmain, and more.',
    contact: {
      phone: '+971-50-501-8623'
    },
    category: 'Luxury Fashion',
    backgroundImage: '/shops/original web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 92, y: 107 }
    }
  },
  {
    name: 'QUMAS',
    slug: 'qumas',
    description: 'A boutique specializing in traditional and artisanal textiles, accessories, and decorative items. Discover a wide selection of handcrafted fabrics, scarves, woven baskets, wall hangings, and unique decorative pieces. Perfect for those seeking authentic, handcrafted goods.',
    contact: {
      phone: '+971-50-501-8624'
    },
    category: 'Fashion & Home Decor',
    backgroundImage: '/shops/qumas web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 93, y: 108 }
    }
  },
  {
    name: 'Roll Over',
    slug: 'roll-over',
    description: 'A modern children\'s and youth clothing store offering stylish and comfortable apparel. Discover a wide range of jackets, shirts, pants, jeans, and accessories for kids and teens. Available in stores and online with regular sales and promotions.',
    contact: {
      phone: '+971-50-501-8625'
    },
    category: 'Kids & Youth Fashion',
    backgroundImage: '/shops/roll over web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 94, y: 109 }
    }
  },
  {
    name: 'Scents and Secrets',
    slug: 'scents-and-secrets',
    description: 'A fragrance boutique offering a wide selection of perfumes and colognes for men and women. Discover premium fragrances, gift sets, and exclusive scents from various brands. Find your perfect signature scent in a welcoming, well-lit environment.',
    contact: {
      phone: '+971-50-501-8626'
    },
    category: 'Beauty & Fragrances',
    backgroundImage: '/shops/scents and secrets web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 95, y: 110 }
    }
  },
  {
    name: 'Tiny Tots',
    slug: 'tiny-tots',
    description: 'A children\'s clothing store offering a vibrant collection of apparel and accessories for kids aged 0 to 14 years. Discover colorful sweaters, shirts, dresses, and accessories with fun designs and characters. Regular sales and promotions available.',
    contact: {
      phone: '+971-50-501-8627'
    },
    category: 'Kids & Baby',
    backgroundImage: '/shops/tiny tots web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 96, y: 111 }
    }
  },
  {
    name: 'Time & Space Collection',
    slug: 'time-space-collection',
    description: 'A fashion accessories boutique offering a wide selection of handbags, footwear, watches, wallets, perfumes, and jewelry. Discover stylish accessories for every occasion, featuring various designs and brands in a well-organized, inviting environment.',
    contact: {
      phone: '+971-50-501-8628'
    },
    category: 'Fashion Accessories',
    backgroundImage: '/shops/time and space web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 97, y: 112 }
    }
  },
  {
    name: 'Toy Land',
    slug: 'toy-land',
    description: 'A vibrant toy store offering a vast selection of toys and children\'s products. Discover dolls, action figures, plush toys, toy vehicles, playsets, games, and educational toys. Perfect for kids of all ages with a wide variety of brands and categories.',
    contact: {
      phone: '+971-50-501-8629'
    },
    category: 'Toys & Games',
    backgroundImage: '/shops/toy land web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 98, y: 113 }
    }
  },
  {
    name: 'Zebaish',
    slug: 'zebaish',
    description: 'A vibrant clothing and fabric store offering a wide selection of colorful textiles, traditional garments, and ready-to-wear fashion. Discover beautiful fabrics for salwar kameez, sarees, dupattas, and other traditional attire, along with ready-made garments featuring intricate patterns, embroidery, and embellishments.',
    contact: {
      phone: '+971-50-501-8630'
    },
    category: 'Fashion',
    backgroundImage: '/shops/zebaish web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 99, y: 114 }
    }
  },
  {
    name: 'Designer Vault',
    slug: 'designer-vault',
    description: 'A luxury boutique offering authentic designer handbags, shoes, clothing, and accessories from top fashion houses including Burberry, Hermes, Versace, Gucci, Chanel, Dior, and more.',
    contact: {
      phone: '+971-50-501-8611'
    },
    category: 'Luxury Fashion',
    backgroundImage: '/shops/designer vault web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 80, y: 95 }
    }
  },
  {
    name: 'Dollar House',
    slug: 'dollar-house',
    description: 'A variety store offering a wide range of affordable household items, kitchenware, home décor, and general merchandise at great value prices.',
    contact: {
      phone: '+971-50-501-8612'
    },
    category: 'Variety Store',
    backgroundImage: '/shops/dollar house web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 81, y: 96 }
    }
  },
  {
    name: 'Dollar World',
    slug: 'dollar-world',
    description: 'Welcome to elegance. A discount variety store offering big value at small prices, featuring kitchenware, home goods, decorative items, and everyday essentials.',
    contact: {
      phone: '+971-50-501-8613'
    },
    category: 'Variety Store',
    backgroundImage: '/shops/dollar world web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 82, y: 97 }
    }
  },
  {
    name: 'Good Life',
    slug: 'good-life',
    description: 'A footwear and lifestyle store offering a wide selection of colorful slippers, sandals, and accessories. Discover comfortable and stylish options for everyday living.',
    contact: {
      phone: '+971-50-501-8614'
    },
    category: 'Footwear',
    backgroundImage: '/shops/good life web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 83, y: 98 }
    }
  },
  {
    name: 'Irha\'s Kids',
    slug: 'irhas-kids',
    description: 'A vibrant children\'s store offering a wide range of baby and kids\' products including clothing, accessories, feeding bottles, baby care items, backpacks, and colorful essentials for little ones.',
    contact: {
      phone: '+971-50-501-8615'
    },
    category: 'Kids & Baby',
    backgroundImage: '/shops/irhas kids web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 84, y: 99 }
    }
  },
  {
    name: 'Jockey',
    slug: 'jockey',
    description: 'Premium innerwear and apparel brand offering comfortable, high-quality underwear, t-shirts, and casual wear for men and women. Discover classic styles and modern designs.',
    contact: {
      phone: '+971-50-501-8616'
    },
    category: 'Fashion',
    backgroundImage: '/shops/jockey web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 85, y: 100 }
    }
  },
  {
    name: 'Just for Men',
    slug: 'just-for-men',
    description: 'A men\'s accessories store specializing in ties, belts, cufflinks, hats, and other fashion accessories. Discover a wide selection of stylish accessories to complete your look.',
    contact: {
      phone: '+971-50-501-8617'
    },
    category: 'Fashion Accessories',
    backgroundImage: '/shops/just for men web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 86, y: 101 }
    }
  },
  {
    name: 'Kundan',
    slug: 'kundan',
    description: 'A traditional footwear store specializing in intricately designed juttis, khussas, and embellished flat shoes. Discover a wide selection of colorful, embroidered, and beaded traditional footwear perfect for weddings, festivals, and celebrations.',
    contact: {
      phone: '+971-50-501-8618'
    },
    category: 'Footwear',
    backgroundImage: '/shops/kundan web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 87, y: 102 }
    }
  },
  {
    name: 'Leisure Club',
    slug: 'leisure-club',
    description: 'A family clothing store offering a wide range of casual wear, traditional attire, and modern fashion for men, women, and children. Discover vibrant collections including winter collections, new arrivals, and seasonal styles for the whole family.',
    contact: {
      phone: '+971-50-501-8619'
    },
    category: 'Fashion',
    backgroundImage: '/shops/leisure club.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 88, y: 103 }
    }
  },
  {
    name: 'Mip.j Store',
    slug: 'mipj-store',
    description: 'A jewelry and accessories store offering a wide selection of necklaces, earrings, rings, bracelets, and handbags. Specializing in professional ear and nose piercing services. Discover elegant gold and silver-toned jewelry with colorful stones, perfect for any occasion.',
    contact: {
      phone: '+971-50-501-8620'
    },
    category: 'Jewelry & Accessories',
    backgroundImage: '/shops/mip.j web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 89, y: 104 }
    }
  },
  {
    name: 'MIRAAL',
    slug: 'miral',
    description: 'A boutique specializing in abayas and jewelry. Discover a wide selection of elegant abayas in various colors and styles, along with beautiful gold and silver jewelry pieces including necklaces, earrings, bracelets, and rings. Perfect for modest fashion and special occasions.',
    contact: {
      phone: '+971-50-501-8621'
    },
    category: 'Fashion & Jewelry',
    backgroundImage: '/shops/miral web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 90, y: 105 }
    }
  },
  {
    name: 'The North Face',
    slug: 'north-face',
    description: 'A leading outdoor apparel and gear brand offering high-performance jackets, clothing, footwear, and accessories. Discover technical outerwear, hiking boots, backpacks, and gear designed for exploration and adventure. Never stop exploring.',
    contact: {
      phone: '+971-50-501-8622'
    },
    category: 'Outdoor & Sports',
    backgroundImage: '/shops/north face web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 91, y: 106 }
    }
  },
  {
    name: 'Originals of London',
    slug: 'originals-of-london',
    description: 'A luxury fashion retailer offering all the latest fashion brands from around the world. Discover authentic designer items including handbags, footwear, clothing, and accessories from top luxury brands such as Burberry, Gucci, Prada, Hermes, Fendi, Kenzo, Versace, Balmain, and more.',
    contact: {
      phone: '+971-50-501-8623'
    },
    category: 'Luxury Fashion',
    backgroundImage: '/shops/original web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 92, y: 107 }
    }
  },
  {
    name: 'QUMAS',
    slug: 'qumas',
    description: 'A boutique specializing in traditional and artisanal textiles, accessories, and decorative items. Discover a wide selection of handcrafted fabrics, scarves, woven baskets, wall hangings, and unique decorative pieces. Perfect for those seeking authentic, handcrafted goods.',
    contact: {
      phone: '+971-50-501-8624'
    },
    category: 'Fashion & Home Decor',
    backgroundImage: '/shops/qumas web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 93, y: 108 }
    }
  },
  {
    name: 'Roll Over',
    slug: 'roll-over',
    description: 'A modern children\'s and youth clothing store offering stylish and comfortable apparel. Discover a wide range of jackets, shirts, pants, jeans, and accessories for kids and teens. Available in stores and online with regular sales and promotions.',
    contact: {
      phone: '+971-50-501-8625'
    },
    category: 'Kids & Youth Fashion',
    backgroundImage: '/shops/roll over web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 94, y: 109 }
    }
  },
  {
    name: 'Scents and Secrets',
    slug: 'scents-and-secrets',
    description: 'A fragrance boutique offering a wide selection of perfumes and colognes for men and women. Discover premium fragrances, gift sets, and exclusive scents from various brands. Find your perfect signature scent in a welcoming, well-lit environment.',
    contact: {
      phone: '+971-50-501-8626'
    },
    category: 'Beauty & Fragrances',
    backgroundImage: '/shops/scents and secrets web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 95, y: 110 }
    }
  },
  {
    name: 'Tiny Tots',
    slug: 'tiny-tots',
    description: 'A children\'s clothing store offering a vibrant collection of apparel and accessories for kids aged 0 to 14 years. Discover colorful sweaters, shirts, dresses, and accessories with fun designs and characters. Regular sales and promotions available.',
    contact: {
      phone: '+971-50-501-8627'
    },
    category: 'Kids & Baby',
    backgroundImage: '/shops/tiny tots web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 96, y: 111 }
    }
  },
  {
    name: 'Time & Space Collection',
    slug: 'time-space-collection',
    description: 'A fashion accessories boutique offering a wide selection of handbags, footwear, watches, wallets, perfumes, and jewelry. Discover stylish accessories for every occasion, featuring various designs and brands in a well-organized, inviting environment.',
    contact: {
      phone: '+971-50-501-8628'
    },
    category: 'Fashion Accessories',
    backgroundImage: '/shops/time and space web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 97, y: 112 }
    }
  },
  {
    name: 'Toy Land',
    slug: 'toy-land',
    description: 'A vibrant toy store offering a vast selection of toys and children\'s products. Discover dolls, action figures, plush toys, toy vehicles, playsets, games, and educational toys. Perfect for kids of all ages with a wide variety of brands and categories.',
    contact: {
      phone: '+971-50-501-8629'
    },
    category: 'Toys & Games',
    backgroundImage: '/shops/toy land web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 98, y: 113 }
    }
  },
  {
    name: 'Zebaish',
    slug: 'zebaish',
    description: 'A vibrant clothing and fabric store offering a wide selection of colorful textiles, traditional garments, and ready-to-wear fashion. Discover beautiful fabrics for salwar kameez, sarees, dupattas, and other traditional attire, along with ready-made garments featuring intricate patterns, embroidery, and embellishments.',
    contact: {
      phone: '+971-50-501-8630'
    },
    category: 'Fashion',
    backgroundImage: '/shops/zebaish web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 99, y: 114 }
    }
  },
 
];

export function getStoreBySlug(slug: string): StoreDetail | undefined {
  return storeDetails.find(store => store.slug === slug);
}

export function getAllStoreSlugs(): string[] {
  return storeDetails.map(store => store.slug);
}
