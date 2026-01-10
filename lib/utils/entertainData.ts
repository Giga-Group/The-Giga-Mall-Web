export interface EntertainDetail {
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

// Entertain data - in a real app, this would come from an API
export const entertainDetails: EntertainDetail[] = [
  {
    name: 'Cinepax Cinema',
    slug: 'cinepax',
    description: 'Experience the latest blockbusters in luxury at Cinepax Cinema. State-of-the-art screens, premium sound systems, and comfortable seating make every movie experience unforgettable.',
    logo: '/logo/Vrkings.jpg',
    backgroundImage: '/Entertain/SpaceCraft Horizontal.jpg',
    category: 'Cinema',
    contact: {
      phone: '+971-50-501-8599',
      email: 'info@cinepax.com'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 25, y: 40 }
    },
    hasOffers: true
  },
  {
    name: 'Bowling Alley',
    slug: 'bowling-alley',
    description: 'Strike up some fun at our modern bowling alley! Perfect for families, friends, and corporate events. Enjoy state-of-the-art lanes, scoring systems, and a vibrant atmosphere.',
    backgroundImage: '/Entertain/bowling 3.jpg',
    category: 'Sports & Recreation',
    contact: {
      phone: '+971-50-501-8599'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 30, y: 45 }
    }
  },
  {
    name: 'VI Rides Arcade',
    slug: 'vi-rides',
    description: 'Get ready for an adrenaline rush at VI Rides Arcade! Featuring the latest arcade games, simulators, and interactive experiences for all ages.',
    logo: '/logo/Virides.jpg',
    backgroundImage: '/Entertain/Vi Rides Horizontal.jpg',
    category: 'Arcade & Gaming',
    contact: {
      phone: '+971-50-501-8599'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 50, y: 60 }
    }
  },
  {
    name: 'VR Kings',
    slug: 'vr-kings',
    description: 'Step into the future of entertainment at VR Kings! Immerse yourself in virtual reality experiences, from thrilling adventures to creative simulations.',
    logo: '/logo/Vrkings.jpg',
    backgroundImage: '/Entertain/VR Kings Horizontal.jpg',
    category: 'Arcade & Gaming',
    contact: {
      phone: '+971-50-501-8599'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 55, y: 65 }
    }
  },
  {
    name: 'Funcity',
    slug: 'funcity',
    description: 'The ultimate family entertainment destination! Funcity offers a wide range of activities including rides, games, and attractions designed for the whole family.',
    backgroundImage: '/Entertain/Funcity Horizontal.jpg',
    category: 'Family Entertainment',
    contact: {
      phone: '+971-50-501-8599'
    },
    location: {
      level: 'Ground Floor',
      parking: 'P1, Main Parking',
      mapPosition: { x: 40, y: 50 }
    }
  },
  {
    name: 'SpaceCraft',
    slug: 'spacecraft',
    description: 'Embark on a cinematic journey at SpaceCraft! Premium movie experience with cutting-edge technology, luxury seating, and an immersive atmosphere.',
    backgroundImage: '/Entertain/SpaceCraft Horizontal.jpg',
    category: 'Cinema',
    contact: {
      phone: '+971-50-501-8599'
    },
    location: {
      level: 'First Floor',
      parking: 'P2, Grand Parking',
      mapPosition: { x: 60, y: 70 }
    }
  },
];

export function getEntertainBySlug(slug: string): EntertainDetail | undefined {
  return entertainDetails.find(entertain => entertain.slug === slug);
}

export function getAllEntertainSlugs(): string[] {
  return entertainDetails.map(entertain => entertain.slug);
}


