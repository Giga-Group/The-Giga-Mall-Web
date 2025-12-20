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
    backgroundImage: '/cheezious.jpeg',
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
    backgroundImage: '/pizzahut.jpeg',
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
    backgroundImage: '/wild-wings.jpeg',
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
    name: 'ANGELINA',
    slug: 'angelina',
    description: 'Experience the authentic taste of Paris at ANGELINA. Known for our legendary hot chocolate and exquisite pastries, we bring French elegance to every dining experience.',
    logo: '/service potrait.jpg',
    contact: {
      phone: '+971-50-501-8501'
    },
    category: 'Fine Dining',
    backgroundImage: '/service landscape.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 35, y: 45 }
    }
  },
  {
    name: 'Eataly',
    slug: 'eataly',
    description: 'A celebration of Italian food culture. Discover authentic Italian ingredients, dine at our restaurants, and experience the best of Italy all under one roof.',
    contact: {
      phone: '+971-50-501-8502'
    },
    category: 'Restaurant',
    backgroundImage: '/2-OK.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 55 }
    }
  },
  {
    name: 'Starbucks',
    slug: 'starbucks',
    description: 'Your favourite handcrafted beverages, from classic coffees to seasonal specials. Experience the perfect cup every time in a welcoming atmosphere.',
    contact: {
      phone: '+971-50-501-8503'
    },
    category: 'Cafe',
    backgroundImage: '/Starbucks.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 30, y: 60 }
    }
  },
  {
    name: 'Nando\'s',
    slug: 'nandos',
    description: 'Flame-grilled PERi-PERi chicken with Portuguese-African heritage. Experience bold flavors and a vibrant atmosphere perfect for any occasion.',
    contact: {
      phone: '+971-50-501-8504'
    },
    category: 'Restaurant',
    backgroundImage: '/DSC05412Food_OK_1.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 45, y: 40 }
    }
  },
  {
    name: 'Social House',
    slug: 'social-house',
    description: 'A modern dining destination where great food meets great company. Enjoy contemporary cuisine in a stylish, social atmosphere.',
    contact: {
      phone: '+971-50-501-8505'
    },
    category: 'Restaurant',
    backgroundImage: '/2-ES---WLaMaquinista_OK.jpg',
    location: {
      level: 'Second Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 50, y: 35 }
    }
  },
  {
    name: 'The Cheesecake Factory',
    slug: 'cheesecake-factory',
    description: 'Extensive menu featuring over 200 dishes, including our legendary cheesecakes. A dining experience like no other with something for everyone.',
    contact: {
      phone: '+971-50-501-8506'
    },
    category: 'Restaurant',
    backgroundImage: '/3-Mall-of-Scandinavia-OK.jpg',
    location: {
      level: 'Second Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 55, y: 30 }
    }
  },
  {
    name: 'Markette',
    slug: 'markette',
    description: 'Fresh, locally-sourced ingredients meet innovative culinary techniques. A market-style dining experience with an emphasis on quality and flavor.',
    contact: {
      phone: '+971-50-501-8507'
    },
    category: 'Restaurant',
    backgroundImage: '/4-WChodov-OK.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 38, y: 50 }
    }
  },
  {
    name: 'Pizza Express',
    slug: 'pizza-express',
    description: 'Authentic Italian pizzas made fresh daily with premium ingredients. Experience the taste of Italy in every bite.',
    contact: {
      phone: '+971-50-501-8508'
    },
    category: 'Restaurant',
    backgroundImage: '/DSC07199.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 42, y: 58 }
    }
  },
  {
    name: 'Shake Shack',
    slug: 'shake-shack',
    description: 'Premium burgers, hot dogs, frozen custard, shakes, beer, wine & more. Made with the finest ingredients and served with a smile.',
    contact: {
      phone: '+971-50-501-8509'
    },
    category: 'Fast Food',
    backgroundImage: '/DSC07836.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 35, y: 65 }
    }
  },
  {
    name: 'Tim Hortons',
    slug: 'tim-hortons',
    description: 'Canada\'s favorite coffee and donuts. Start your day right with our signature coffee, fresh donuts, and delicious breakfast options.',
    contact: {
      phone: '+971-50-501-8510'
    },
    category: 'Cafe',
    backgroundImage: '/DSC07876.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 28, y: 62 }
    }
  },
  {
    name: 'Cinnabon',
    slug: 'cinnabon',
    description: 'World-famous cinnamon rolls, baked fresh throughout the day. Indulge in our signature rolls with cream cheese frosting.',
    contact: {
      phone: '+971-50-501-8511'
    },
    category: 'Food & Drink',
    backgroundImage: '/DSC07901.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 32, y: 48 }
    }
  },
  {
    name: 'Baskin Robbins',
    slug: 'baskin-robbins',
    description: '31 flavors of premium ice cream and frozen treats. Discover your favorite flavor or try something new every day of the month.',
    contact: {
      phone: '+971-50-501-8512'
    },
    category: 'Icecream',
    backgroundImage: '/DSC08041.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 33, y: 58 }
    }
  },
  {
    name: 'Cold Stone Creamery',
    slug: 'cold-stone-creamery',
    description: 'Premium ice cream made fresh daily and mixed on frozen granite stones. Customize your creation with your favorite mix-ins.',
    contact: {
      phone: '+971-50-501-8513'
    },
    category: 'Icecream',
    backgroundImage: '/DSC08196.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 36, y: 52 }
    }
  },
  {
    name: 'Dunkin\'',
    slug: 'dunkin',
    description: 'America runs on Dunkin\'. Enjoy our signature coffee, donuts, and breakfast sandwiches to fuel your day.',
    contact: {
      phone: '+971-50-501-8514'
    },
    category: 'Cafe',
    backgroundImage: '/Starbucks.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 31, y: 61 }
    }
  },
  {
    name: 'KFC',
    slug: 'kfc',
    description: 'Finger-lickin\' good! Enjoy our world-famous Original Recipe chicken, crispy tenders, and delicious sides.',
    contact: {
      phone: '+971-50-501-8515'
    },
    category: 'Fast Food',
    backgroundImage: '/H and M.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 37, y: 64 }
    }
  },
  {
    name: 'McDonald\'s',
    slug: 'mcdonalds',
    description: 'I\'m lovin\' it! Enjoy your favorite burgers, fries, and more. Fast, friendly service in a clean, comfortable environment.',
    contact: {
      phone: '+971-50-501-8516'
    },
    category: 'Fast Food',
    backgroundImage: '/macdonalds.jpeg',
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
    contact: {
      phone: '+971-50-501-8523'
    },
    category: 'Fast Food',
    backgroundImage: '/hardees.jpeg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 64 }
    }
  },
  {
    name: 'Subway',
    slug: 'subway',
    description: 'Eat fresh! Build your perfect sandwich with fresh-baked bread, quality meats, and crisp vegetables. Customize it your way.',
    contact: {
      phone: '+971-50-501-8517'
    },
    category: 'Fast Food',
    backgroundImage: '/Sephora_2_1.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 34, y: 59 }
    }
  },
  {
    name: 'Burger King',
    slug: 'burger-king',
    description: 'Have it your way! Flame-grilled burgers, crispy fries, and refreshing drinks. Quality ingredients, great taste.',
    contact: {
      phone: '+971-50-501-8518'
    },
    category: 'Fast Food',
    backgroundImage: '/zara-forum6257.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 36, y: 62 }
    }
  },
  {
    name: 'Papa John\'s',
    slug: 'papa-johns',
    description: 'Better ingredients. Better pizza. Papa John\'s. Fresh dough, premium toppings, and signature garlic sauce in every box.',
    contact: {
      phone: '+971-50-501-8519'
    },
    category: 'Fast Food',
    backgroundImage: '/Aesop_Westfield_Stratford_City.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 41, y: 47 }
    }
  },
  {
    name: 'Domino\'s Pizza',
    slug: 'dominos-pizza',
    description: 'Pizza made fresh, just the way you like it. Fast delivery and carryout options available. Order online or in-store.',
    contact: {
      phone: '+971-50-501-8520'
    },
    category: 'Fast Food',
    backgroundImage: '/Victoria_s_Secret_Westfield_Stratford_City.jpg',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 43, y: 49 }
    }
  },
  {
    name: 'Costa Coffee',
    slug: 'costa-coffee',
    description: 'The nation\'s favorite coffee shop. Enjoy expertly crafted coffee, delicious pastries, and a welcoming atmosphere.',
    contact: {
      phone: '+971-50-501-8521'
    },
    category: 'Cafe',
    backgroundImage: '/Jok_Air_4TEMPS_CNIT_carrousel_homepage_2732x1436px.jpg',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 29, y: 59 }
    }
  },
  {
    name: 'Gloria Jean\'s Coffees',
    slug: 'gloria-jeans-coffees',
    description: 'Premium specialty coffee and tea from around the world. Experience the perfect blend of quality, flavor, and service.',
    contact: {
      phone: '+971-50-501-8522'
    },
    category: 'Cafe',
    backgroundImage: '/Swarovski_in_Scandinavia_2_784e0db59b.webp',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 34, y: 46 }
    }
  }
];

export function getDineBySlug(slug: string): DineDetail | undefined {
  return dineDetails.find(dine => dine.slug === slug);
}

export function getAllDineSlugs(): string[] {
  return dineDetails.map(dine => dine.slug);
}


