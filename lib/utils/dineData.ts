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
  {
    name: 'Coffee Planet',
    slug: 'coffee-planet',
    description: 'All you need is coffee, WiFi & dreams. Experience premium coffee blends and a cozy atmosphere perfect for work or relaxation.',
    contact: {
      phone: '+971-50-501-8532'
    },
    category: 'Cafe',
    backgroundImage: '/dine/coffeeplanet web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 45, y: 60 }
    }
  },
  {
    name: 'Corn Station',
    slug: 'corn-station',
    description: 'Enjoy delicious sweet corn, refreshing slush drinks, and freshly popped popcorn. A perfect quick snack stop for the whole family.',
    contact: {
      phone: '+971-50-501-8533'
    },
    category: 'Snacks',
    backgroundImage: '/dine/corn station web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 47, y: 62 }
    }
  },
  {
    name: 'Asian Fusion',
    slug: 'asian-fusion',
    description: 'Experience authentic Asian cuisine with a modern twist. Enjoy fresh juice and shake options alongside traditional dishes in a contemporary setting.',
    contact: {
      phone: '+971-50-501-8534'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/asian fusion web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 49, y: 64 }
    }
  },
  {
    name: 'Eklairs',
    slug: 'eklairs',
    description: 'Indulge in premium eclairs and artisanal pastries. From classic flavors to innovative creations, experience the perfect blend of sweetness and elegance in every bite.',
    contact: {
      phone: '+971-50-501-8535'
    },
    category: 'Desserts',
    backgroundImage: '/dine/eklairs web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 51, y: 66 }
    }
  },
  {
    name: 'Frutastic',
    slug: 'frutastic',
    description: 'Fresh, natural juices made from the finest fruits. Enjoy a variety of healthy options including orange, apple, sugarcane, and more. Refreshing and nutritious beverages for every taste.',
    contact: {
      phone: '+971-50-501-8536'
    },
    category: 'Juice Bar',
    backgroundImage: '/dine/frutastic web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 53, y: 68 }
    }
  },
  {
    name: 'Gloria Jean\'s Coffees',
    slug: 'gloria-jeans-coffees',
    description: 'Established in 1979, Gloria Jean\'s Coffees offers premium coffee blends, chillers, and delicious pastries. Experience the perfect cup of coffee in a welcoming atmosphere.',
    contact: {
      phone: '+971-50-501-8537'
    },
    category: 'Cafe',
    backgroundImage: '/dine/gloria web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 55, y: 70 }
    }
  },
  {
    name: 'Goshez',
    slug: 'goshez',
    description: 'Ice cream solves everything! Indulge in premium ice cream, frozen treats, and delightful desserts. From classic flavors to innovative creations, satisfy your sweet cravings.',
    contact: {
      phone: '+971-50-501-8538'
    },
    category: 'Ice Cream',
    backgroundImage: '/dine/goshez web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 57, y: 72 }
    }
  },
  {
    name: 'Islamic Honey Centre',
    slug: 'islamic-honey-centre',
    description: 'Discover the finest quality honey products. From pure natural honey to specialty varieties, experience the authentic taste and health benefits of premium honey.',
    contact: {
      phone: '+971-50-501-8539'
    },
    category: 'Specialty Store',
    backgroundImage: '/dine/islamic honey web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 59, y: 74 }
    }
  },
  {
    name: 'Juice Fruity',
    slug: 'juice-fruity',
    description: 'Fresh, natural juices made from the finest fruits. Enjoy a variety of healthy options including orange, apple, sugarcane, and more. Refreshing and nutritious beverages for every taste.',
    contact: {
      phone: '+971-50-501-8540'
    },
    category: 'Juice Bar',
    backgroundImage: '/dine/juice fruity web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 61, y: 76 }
    }
  },
  {
    name: 'Juice Station',
    slug: 'juice-station',
    description: 'As natural as you! Fresh, pure juices made from the finest fruits with no additives. Grab & go options available in 250ML, 500ML, and 1LTR sizes. Experience the authentic taste of natural ingredients.',
    contact: {
      phone: '+971-50-501-8541'
    },
    category: 'Juice Bar',
    backgroundImage: '/dine/juice station web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 63, y: 78 }
    }
  },
  {
    name: 'King Coffee',
    slug: 'king-coffee',
    description: 'The Master of Coffee. Experience premium coffee blends, Chinese cuisine, burgers, and more in a warm and welcoming atmosphere. Perfect for coffee lovers and food enthusiasts.',
    contact: {
      phone: '+971-50-501-8542'
    },
    category: 'Cafe',
    backgroundImage: '/dine/king coffee web.JPG',
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 65, y: 80 }
    }
  },
  {
    name: 'King Corn',
    slug: 'king-corn',
    description: 'Sweet & Tasty! Enjoy delicious sweet corn, popcorn, ice cream, and refreshing slush drinks. A perfect snack destination offering a variety of flavors and treats for everyone.',
    contact: {
      phone: '+971-50-501-8543'
    },
    category: 'Snacks',
    backgroundImage: '/dine/king corn web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 67, y: 82 }
    }
  },
  {
    name: 'Pop Nosh',
    slug: 'pop-nosh',
    description: 'Gourmet Popcorn! Indulge in a variety of premium popcorn flavors including chocolate, caramel, cheese, and colorful candy-coated options. Perfect for movie nights and sweet cravings.',
    contact: {
      phone: '+971-50-501-8544'
    },
    category: 'Snacks',
    backgroundImage: '/dine/popnosh web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 69, y: 84 }
    }
  },
  {
    name: 'Sweet & Salt',
    slug: 'sweet-salt',
    description: 'Always Fresh! Enjoy authentic chaat items including Raj Kachori, Gol Gappay, Dahi Bhally, Chana Chaat, Papri Chaat, and Samosa Chaat. Also offering a variety of teas including Pink Tea and Green Tea.',
    contact: {
      phone: '+971-50-501-8545'
    },
    category: 'Snacks',
    backgroundImage: '/dine/sweet&salt web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 71, y: 86 }
    }
  },
  {
    name: 'Tim Hortons',
    slug: 'tim-hortons',
    description: 'Always Fresh Since 1964. Crafted with care, made to order. Enjoy premium coffee, fresh donuts, pastries, and baked goods in a warm and welcoming cafe atmosphere.',
    contact: {
      phone: '+971-50-501-8546'
    },
    category: 'Cafe',
    backgroundImage: '/dine/tim horton web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 73, y: 88 }
    }
  },
  {
    name: 'Baskin Robbins',
    slug: 'baskin-robbins',
    description: 'Ice Cream & Cakes! Indulge in a wide variety of premium ice cream flavors, sundaes, and delicious ice cream cakes. Experience the joy of 31 flavors and more in a vibrant, welcoming atmosphere.',
    contact: {
      phone: '+971-50-501-8547'
    },
    category: 'Ice Cream',
    backgroundImage: '/dine/baskin robin web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 75, y: 90 }
    }
  },
  {
    name: 'Ashraf Naturals',
    slug: 'ashraf-naturals',
    description: 'Discover premium natural products including pure honey, organic foods, and health essentials. Experience the finest quality natural goods in a welcoming and comfortable environment.',
    contact: {
      phone: '+971-50-501-8548'
    },
    category: 'Specialty Store',
    backgroundImage: '/dine/ashraf naturals web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 77, y: 92 }
    }
  },
];

export function getDineBySlug(slug: string): DineDetail | undefined {
  return dineDetails.find(dine => dine.slug === slug);
}

export function getAllDineSlugs(): string[] {
  return dineDetails.map(dine => dine.slug);
}


