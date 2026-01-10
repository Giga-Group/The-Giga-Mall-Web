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
    logo: '/logo/cheezious logo.jpg',
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
    logo: '/logo/corn station.jpg',
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
    logo: '/logo/asian fusion.jpg',
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
    logo: '/logo/coshes.jpg',
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
    logo: '/logo/juice fruity.jpg',
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
    logo: '/logo/juice station.jpg',
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
    logo: '/logo/king coffe.jpg',
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
    logo: '/logo/king corn.jpg',
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
    logo: '/logo/pop nosh.jpg',
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
    logo: '/logo/sweet and salt.jpg',
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
    logo: '/logo/tim hrtons.jpg',
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
    logo: '/logo/BR BASKIN.jpg',
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
    logo: '/logo/ASHRAF.jpg',
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
  {
    name: 'Dark Side',
    slug: 'dark-side',
    description: 'Indulge in delicious ice cream, refreshing slush drinks, premium coffee, and specialty shakes. A perfect destination for sweet treats and cool beverages.',
    contact: {
      phone: '+971-50-501-8535'
    },
    category: 'Desserts & Beverages',
    backgroundImage: '/dine/dark side web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 78, y: 93 }
    }
  },
  {
    name: 'Cigarettes & Chocolates',
    slug: 'cigarettes-chocolates',
    description: 'Your one-stop shop for premium chocolates, candies, confectionery, and tobacco products. Discover a wide selection of sweet treats and convenience items.',
    contact: {
      phone: '+971-50-501-8536'
    },
    category: 'Convenience Store',
    backgroundImage: '/dine/ciggeretes and choclates web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 79, y: 94 }
    }
  },
  {
    name: 'House of Mandi',
    slug: 'house-of-mandi',
    description: 'Experience the real Arabic taste with authentic Mandi dishes. Specializing in traditional Arabic cuisine including chicken and mutton Mandi, BBQ platters, appetizers, and desserts in a warm, culturally themed setting.',
    contact: {
      phone: '+971-50-501-8537'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/house of mandi web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 80, y: 95 }
    }
  },
  {
    name: 'Howdy',
    slug: 'howdy',
    description: 'Wild vibes and bold flavors! A Western-themed fast-food restaurant offering delicious burgers, prawn specialties, combo deals, and classic favorites. Experience the sea-sational twist with our signature Prawn Star burger and enjoy fantastic deals for individuals, couples, and groups.',
    contact: {
      phone: '+971-50-501-8538'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/howdy web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 81, y: 96 }
    }
  },
  {
    name: 'Ice Curl',
    slug: 'ice-curl',
    description: 'Taste the original! A dessert kiosk specializing in rolled ice cream, customizable frozen treats, and refreshing beverages. Enjoy signature flavors like Rooh Afza Lemonade, Espresso Lite, Fudge Brownie, All About Oreo, and Lemonicious.',
    contact: {
      phone: '+971-50-501-8539'
    },
    category: 'Desserts & Beverages',
    backgroundImage: '/dine/ice curl web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 82, y: 97 }
    }
  },
  {
    name: 'Jelly Factory',
    slug: 'jelly-factory',
    description: 'A vibrant candy and ice cream cart offering a wide selection of colorful candies, jellies, gummy treats, slushies, and ice cream. Discover sweet delights from our Jelly Factory and cool treats from our Ice Cream Stop.',
    contact: {
      phone: '+971-50-501-8540'
    },
    category: 'Desserts & Beverages',
    backgroundImage: '/dine/Jelly Factory web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 83, y: 98 }
    }
  },
  {
    name: 'Jojo',
    slug: 'jojo',
    description: 'A colorful candy store offering a wide variety of bulk candies, gummies, chocolates, and sweet treats. Discover an extensive selection of candies in a playful, vibrant setting with a gumball machine and delightful candy displays.',
    contact: {
      phone: '+971-50-501-8541'
    },
    category: 'Desserts & Beverages',
    backgroundImage: '/dine/jojo web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 84, y: 99 }
    }
  },
  {
    name: 'Juices Land',
    slug: 'juices-land',
    description: 'A tropical-themed juice bar offering fresh fruit juices, bubble tea, milk tea, and healthy beverages. Enjoy a wide selection of fresh juices made from pomegranates, oranges, apples, and more, along with a Jeely Factory candy section.',
    contact: {
      phone: '+971-50-501-8542'
    },
    category: 'Desserts & Beverages',
    backgroundImage: '/dine/juices land web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 85, y: 100 }
    }
  },
  {
    name: 'Pepe\'s Piri Piri',
    slug: 'pepes-piri-piri',
    description: 'A fast-food restaurant specializing in Piri Piri chicken, offering flame-grilled chicken, wings, wraps, burgers, and combo deals. Enjoy delicious Texan wraps, family platters, and happy hour specials with flavorful Piri Piri seasoning.',
    contact: {
      phone: '+971-50-501-8543'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/pepes piri web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 86, y: 101 }
    }
  },
  {
    name: 'PITA',
    slug: 'pita',
    description: 'The Shawarma Revolution! A modern food stall specializing in authentic shawarmas, rice bowls, pita boxes, and Middle Eastern cuisine. Discover fresh, flavorful wraps and combos with premium ingredients, perfect for a quick and satisfying meal.',
    contact: {
      phone: '+971-50-501-8544'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/pita web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 87, y: 102 }
    }
  },
  {
    name: 'Pizza n Pasta',
    slug: 'pizza-n-pasta',
    description: 'A fast-food restaurant offering delicious pizzas, pasta, burgers, subs, and salads. Enjoy XL pizzas, crunch burgers, zinger burgers, sub sandwiches, and combo deals. Perfect for families and groups with winter specials and party deals.',
    contact: {
      phone: '+971-50-501-8545'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/pizza n pasta web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 88, y: 103 }
    }
  },
  {
    name: 'The Potato Factory',
    slug: 'potato-factory',
    description: 'A specialty snack stall offering delicious fries in various styles. Enjoy original fries, twister fries, and other potato specialties served fresh and crispy. Perfect for a quick snack or side dish.',
    contact: {
      phone: '+971-50-501-8546'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/potato factory web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 89, y: 104 }
    }
  },
  {
    name: 'Sip Smart',
    slug: 'sip-smart',
    description: 'A vibrant food stall specializing in Indian street food and fresh beverages. Enjoy authentic chaat items like Pani Puri, Gol Gappay, Dahi Bhallay, Chana Chat, Rajkachori, and Fruit Chat, along with fresh fruit juices and slushies made from fresh ingredients.',
    contact: {
      phone: '+971-50-501-8547'
    },
    category: 'Fast Food',
    backgroundImage: '/shops/sip smart web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 90, y: 105 }
    }
  },
  {
    name: 'Sohaib\'s Wood & Cocoa',
    slug: 'sohaibs-wood-cocoa',
    description: 'A cozy cafe and art studio offering premium coffee, beverages, and custom wood burning portraits. Enjoy coffee served with a smile, live pyrography demonstrations, coffee tasting experiences, and unique handcrafted wood-burned artwork. A perfect blend of art and coffee culture.',
    contact: {
      phone: '+971-50-501-8548'
    },
    category: 'Cafe',
    backgroundImage: '/shops/sohaibs web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 91, y: 106 }
    }
  },
  {
    name: 'Tawa Chatkhara',
    slug: 'tawa-chatkhara',
    description: 'A vibrant food stall specializing in tawa-cooked dishes and flavorful street food. Enjoy freshly prepared meals cooked on traditional flat griddles, featuring a variety of delicious options with bold flavors and authentic taste.',
    contact: {
      phone: '+971-50-501-8549'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/tawa chatkhara web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 92, y: 107 }
    }
  },
  {
    name: 'Tayto',
    slug: 'tayto',
    description: 'A modern cafe and restaurant offering a diverse menu of burgers, pasta, fish & chips, steaks, coffee, and desserts. Enjoy smash burgers, signature grilled chicken, herb olive beef steak, and combo deals. Perfect for dine-in or take-away with a slogan "lovin\' good food".',
    contact: {
      phone: '+971-50-501-8550'
    },
    category: 'Restaurant',
    backgroundImage: '/dine/tayto web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 93, y: 108 }
    }
  },
  {
    name: 'Turk Station',
    slug: 'turk-station',
    description: 'We don\'t sell ice cream, we sell happiness! A dessert kiosk specializing in Turkish-style ice cream, rolled ice cream, and frozen treats. Enjoy premium ice cream served with a smile, featuring traditional Turkish ice cream preparation and a variety of delicious flavors.',
    contact: {
      phone: '+971-50-501-8552'
    },
    category: 'Desserts & Beverages',
    backgroundImage: '/dine/turk web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 94, y: 109 }
    }
  },
  {
    name: 'True Taste',
    slug: 'true-taste',
    description: 'A vibrant food stall offering a wide array of snacks and beverages. Enjoy steamed, fried, and cheese momos, various bubble teas and boba, traditional chai, hearty lasagna, refreshing sodas, coffees, falooda, and ice cream shakes. Perfect for a quick and satisfying meal.',
    contact: {
      phone: '+971-50-501-8553'
    },
    category: 'Fast Food',
    backgroundImage: '/dine/true taste web.JPG',
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 96, y: 111 }
    }
  },
];

export function getDineBySlug(slug: string): DineDetail | undefined {
  return dineDetails.find(dine => dine.slug === slug);
}

export function getAllDineSlugs(): string[] {
  return dineDetails.map(dine => dine.slug);
}


