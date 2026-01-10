'use client';

import { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFilters } from '@/lib/contexts/FilterContext';
import { storeDetails } from '@/lib/utils/storeData';
import { serviceDetails } from '@/lib/utils/servicesData';
import { dineDetails } from '@/lib/utils/dineData';

export interface Store {
  name: string;
  slug?: string;
  hasOffers?: boolean;
  acceptsGiftCard?: boolean;
  category?: string;
  logo?: string;
}

interface StoreGridProps {
  items?: Store[];
  basePath?: string;
}

// Helper function to get logo path from store slug
const getStoreLogo = (slug?: string, itemLogo?: string): string | null => {
  // First, check if logo is provided directly in the item
  if (itemLogo) {
    const logoPath = itemLogo.trim();
    // Filter out invalid paths like '/logo/.jpg', '/.jpg', or paths ending with '/.jpg' or '/.png'
    if (logoPath && 
        logoPath !== '/logo/.jpg' && 
        logoPath !== '/.jpg' && 
        !logoPath.endsWith('/.jpg') && 
        !logoPath.endsWith('/.png') &&
        logoPath.length > 5) { // Ensure it's a real path, not just a placeholder
      return logoPath;
    }
  }

  if (!slug) return null;

  // First, try to get logo from storeDetails
  const storeDetail = storeDetails.find(store => store.slug === slug);
  if (storeDetail?.logo) {
    // Check if logo path is valid (not empty, not just .jpg, etc.)
    const logoPath = storeDetail.logo.trim();
    // Filter out invalid paths like '/logo/.jpg', '/.jpg', or paths ending with '/.jpg' or '/.png'
    if (logoPath && 
        logoPath !== '/logo/.jpg' && 
        logoPath !== '/.jpg' && 
        !logoPath.endsWith('/.jpg') && 
        !logoPath.endsWith('/.png') &&
        logoPath.length > 5) { // Ensure it's a real path, not just a placeholder
      return logoPath;
    }
  }

  // Also check serviceDetails for services
  const serviceDetail = serviceDetails.find(service => service.slug === slug);
  if (serviceDetail?.logo) {
    // Check if logo path is valid (not empty, not just .jpg, etc.)
    const logoPath = serviceDetail.logo.trim();
    // Filter out invalid paths like '/logo/.jpg', '/.jpg', or paths ending with '/.jpg' or '/.png'
    if (logoPath && 
        logoPath !== '/logo/.jpg' && 
        logoPath !== '/.jpg' && 
        !logoPath.endsWith('/.jpg') && 
        !logoPath.endsWith('/.png') &&
        logoPath.length > 5) { // Ensure it's a real path, not just a placeholder
      return logoPath;
    }
  }

  // Check dineDetails for restaurants
  const dineDetail = dineDetails.find(dine => dine.slug === slug);
  if (dineDetail?.logo) {
    // Check if logo path is valid (not empty, not just .jpg, etc.)
    const logoPath = dineDetail.logo.trim();
    // Filter out invalid paths like '/logo/.jpg', '/.jpg', or paths ending with '/.jpg' or '/.png'
    if (logoPath && 
        logoPath !== '/logo/.jpg' && 
        logoPath !== '/.jpg' && 
        !logoPath.endsWith('/.jpg') && 
        !logoPath.endsWith('/.png') &&
        logoPath.length > 5) { // Ensure it's a real path, not just a placeholder
      return logoPath;
    }
  }

  // Map of slug to logo filename - prioritizing dedicated logo files
  const logoMap: Record<string, string> = {
    // Shop logos - using dedicated logo files
    'alkaram': '/logo/alkaram logo.jpg',
    'almas': '/logo/almas logo.png',
    'almirah': '/logo/almirah logo.png',
    'batik-studio': '/logo/batik studio logo.jpg',
    'bloon': '/logo/bloon.jpg',
    'bonanza': '/logo/bonanza satrangi logo.jpg',
    'breakout': '/logo/Breakout logo.png',
    'cambridge': '/logo/cambridge logo.jpg',
    'junaid-jamshed': '/logo/junaid jamshed logo.png',
    'kayseria': '/logo/kayseria logo.jpg',
    'miniso': '/logo/miniso logo.jpg',
    // Restaurant/Dine logos
    'macdonalds': '/logo/Macdonalds logo.jpg',
    'mcdonalds': '/logo/Macdonalds logo.jpg',
    'hardees': '/logo/hardees logo.jpg',
    'pizzahut': '/logo/pizza hut logo.jpg',
    'pizza-hut': '/logo/pizza hut logo.jpg',
    'cheezious': '/logo/cheezious logo.jpg',
    'wild-wings': '/logo/wings logo.jpg',
    'redapple': '/logo/red apple logo.jpg',
    'optp': '/logo/optp logo.jpg',
    'chachajee': '/logo/chachajee logo.jpg',
    'simplysufi': '/logo/simplysufi logo.jpg',
    'rewayat': '/logo/rewayat logo.jpg',
    'spicefactory': '/logo/spice factory logo.jpg',
    'chinagrill': '/logo/china grill logo.jpg',
    'kababjees': '/logo/kabab jees logo.jpg',
    'bonanza satrangi': '/logo/bonanza satrangi.jpg'
  };

  return logoMap[slug] || null;
};

// Store Card Component with image error handling
// Currently unused - component uses inline JSX instead
// const StoreCard = ({ store, basePath, logoPath }: { store: Store; basePath: string; logoPath: string | null }) => {
//   const [imageError, setImageError] = useState(false);

//   return (
//     <Link
//       href={`${basePath}/${store.slug || store.name.toLowerCase().replace(/\s+/g, '-')}`}
//       style={{ textDecoration: 'none' }}
//     >
//       <Box
//         sx={{
//           position: 'relative',
//           aspectRatio: '1 / 1',
//           border: '1px solid #e0e0e0',
//           borderRadius: '4px',
//           backgroundColor: '#ffffff',
//           transition: 'all 0.3s ease',
//           cursor: 'pointer',
//           overflow: 'hidden',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           '&:hover': {
//             borderColor: '#D19F3B',
//             transform: 'translateY(-2px)',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//           }
//         }}
//       >
//         {logoPath && !imageError ? (
//           <Image
//             src={logoPath}
//             alt={store.name}
//             fill
//             sizes="(max-width: 600px) 50vw, (max-width: 960px) 33vw, (max-width: 1280px) 25vw, 20vw"
//             loading="lazy"
//             quality={75}
//             style={{
//               objectFit: 'contain',
//               padding: '12px'
//             }}
//             onError={() => setImageError(true)}
//           />
//         ) : (
//           <Typography
//             className="store-name"
//             sx={{
//               fontFamily: '"Arvo", serif',
//               fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem', lg: '6rem' },
//               color: '#333333',
//               fontWeight: 400,
//               lineHeight: 1,
//               transition: 'color 0.3s ease',
//               textAlign: 'center',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               width: '100%',
//               height: '100%'
//             }}
//           >
//             {store.name.charAt(0).toUpperCase()}
//           </Typography>
//         )}
//       </Box>
//     </Link>
//   );
// };

// Sample store data - in a real app, this would come from an API
const defaultStores: Store[] = [
  { name: 'Alkaram', slug: 'alkaram' },
  { name: 'Almas', slug: 'almas' },
  { name: 'Almirah', slug: 'almirah' },
  { name: 'Batik Studio', slug: 'batik-studio' },
  { name: 'Bloon', slug: 'bloon' },
  { name: 'Bonanza', slug: 'bonanza' },
  { name: 'Breakout', slug: 'breakout' },
  { name: 'Cambridge', slug: 'cambridge' },
  { name: 'Junaid Jamshed', slug: 'junaid-jamshed' },
  { name: 'Kayseria', slug: 'kayseria' },
  { name: 'Miniso', slug: 'miniso' },
  { name: 'Babys Day Out', slug: 'babys-day-out' },
  { name: 'Bata', slug: 'bata' },
  { name: 'Brand City', slug: 'brand-city' },
  // { name: 'Carrefour', slug: 'carrefour' },
  // { name: 'D Watson', slug: 'd-watson' },
  { name: 'Diamond Crown', slug: 'diamond-crown' },
  // { name: 'Dry Fruit', slug: 'dry-fruit' },
  { name: 'Friends Home', slug: 'friends-home' },
  { name: 'Haroons', slug: 'haroons' },
  // { name: 'Jelly Factory', slug: 'jelly-factory' },
  { name: 'Johri', slug: 'johri' },
  { name: 'Kohinoor Jewels', slug: 'kohinoor-jewels' },
  { name: 'The Linen Company', slug: 'the-linen-company' },
  { name: 'Little Explorer', slug: 'little-explorer' },
  { name: 'Location', slug: 'location' },
  { name: 'Majhurat', slug: 'majhurat' },
  { name: 'Milli Shoes', slug: 'milli-shoes' },
  { name: 'Mini Try', slug: 'mini-try' },
  { name: 'Mr Kazi', slug: 'mr-kazi' },
  { name: 'NDURE', slug: 'ndure' },
  { name: 'Readers Point', slug: 'readers-point' },
  { name: 'Rivaj', slug: 'rivaj' },
  { name: 'Saeed Ghani', slug: 'saeed-ghani' },
  { name: 'Service', slug: 'service' },
  { name: 'Style and Comfort', slug: 'style-and-comfort' },
  { name: 'Sveston', slug: 'sveston' },
  { name: 'Tech Studio', slug: 'tech-studio' },
  { name: 'Younique', slug: 'younique' },
  { name: 'Zero', slug: 'zero' },
  { name: 'Balochistan Dry Fruit Marchent', slug: 'balochistan-dry-fruit-marchent' },
  { name: 'Just Fragrance', slug: 'just-fragrance' },
  { name: 'Gadgets Mobile', slug: 'gadgets-mobile' },
  { name: 'Bonanza Satrangi', slug: 'bonanza-satrangi' },
  { name: 'Aroma Concepts', slug: 'aroma-concepts' },
  { name: 'Eastern Art and HandiCraft', slug: 'eastern-art-and-handicraft' },
  { name: 'Taana Baana', slug: 'taana-baana' },
  { name: 'Alpha Accessories', slug: 'alpha-accessories' },
  { name: 'Ximi Vogue', slug: 'ximi-vogue' },
  { name: 'Glamor', slug: 'glamor' },
  { name: 'Thai Zone', slug: 'thai-zone' },
  { name: 'Tajik', slug: 'tajik' },
  { name: 'Sams Abaya', slug: 'sams-abaya' },
  { name: 'Zamin Jewelers', slug: 'zamin-jewelers' },
  { name: 'Traditional Khusa', slug: 'traditional-khusa' },
  { name: 'Taarkashi', slug: 'taarkashi' },
  { name: 'The Time Zone', slug: 'the-time-zone' },
  { name: 'Mehran Jewellers', slug: 'mehran-jewellers' },
  { name: '1st Step', slug: '1st-step' },
  { name: 'Addidas', slug: 'addidas'},
  { name: 'Adoro', slug: 'adoro'},
  { name: 'Almirah', slug: 'almirah'},
  { name: 'Anta', slug: 'anta'},
  { name: 'Apavi', slug: 'apavi'},
  { name: 'Baskin Robin', slug: 'baskin-robin'},
  { name: 'Batik Studio', slug: 'batik-studio-3'},

  { name: 'Charcoal', slug: 'charcoal'},
  { name: 'Cinnabon', slug: 'cinnabon'},
  { name: 'Coppelia', slug: 'coppelia'},
  { name: 'Couger', slug: 'couger'},
  { name: 'Crocs', slug: 'crocs'},
  { name: 'Cross Stitch', slug: 'cross-stitch'},
  { name: 'Dari Mooch', slug: 'dari-mooch'},
  { name: 'Engine', slug: 'engine'},
  { name: 'Equator', slug: 'equator'},
  { name: 'Ethnc', slug: 'ethnc'},
  { name: 'Focus', slug: 'focus'},
  { name: 'FPL', slug: 'fpl'},
  { name: 'Goshes', slug: 'goshes'},
  { name: 'Gulzari', slug: 'gulzari'},
  { name: 'Haseen Jewelers', slug: 'haseen-jewelers'},
  { name: 'Hopscotch', slug: 'hopscotch'},
  { name: 'Hub', slug: 'hub'},
  { name: 'Hunza Emporium', slug: 'hunza-emporium'},
  { name: 'Hush Puppies', slug: 'hush-puppies'},
  { name: 'Insignia', slug: 'insignia'},
  { name: 'J. Fragrance and Costmetics', slug: 'j.-fragrance-and-costmetics'},
  { name: 'Jafferjees', slug: 'jaffer-jees'},
  { name: 'Jc Buckman', slug: 'jc-buckman'},
  { name: 'Juice Fruity', slug: 'juice-fruity'},
  { name: 'Julke', slug: 'julke'},
  { name: 'KefDiamonds', slug: 'kef-diamonds'},
  { name: 'Khadi', slug: 'khadi'},
  { name: 'Khusa Factory', slug: 'khusa-factory'},
  // { name: 'King Corn', slug: 'king-corn'},
  { name: 'Lady Privacy', slug: 'lady-privacy'},
  { name: 'Limelite', slug: 'limelite'},
  { name: 'Lullusar', slug: 'lullusar'},
  { name: 'Maria B 2', slug: 'maria-b-2'},
  { name: 'Maria B 3', slug: 'maria-b-3'},
  { name: 'Maybelline', slug: 'maybelline'},
  { name: 'Miracle', slug: 'miracle'},
  { name: 'Mocciani', slug: 'mocciani'},
  { name: 'Monark', slug: 'monark'},
  { name: 'MTJ Fragrance', slug: 'mtj-fragrance'},
  { name: 'Nizam Watch House', slug: 'nizam-watch-house'},
  { name: 'Pop Nosh', slug: 'pop-nosh'},
  { name: 'Rivaj', slug: 'rivaj'},
  { name: 'Royal Tag', slug: 'royal-tag'},
  { name: 'Sapphire0', slug: 'sapphire'},
  { name: 'Saya', slug: 'saya'},
  { name: 'Scents and Stories', slug: 'scents-and-stories'},
  { name: 'Sketchers', slug: 'sketcher'},
  { name: 'Sona Chandi', slug: 'sona-chandi'},
  { name: 'Speed Sports', slug: 'speed-sports'},
  { name: 'Style in Shoes', slug: 'style-in-shoes'},
  { name: 'Svesto', slug: 'svesto'},
  { name: 'Swarovski', slug: 'swarovski'},
  { name: 'Syed Royal Optics', slug: 'syed-royal-optics'},
  { name: 'Tagheuer', slug: 'tagheuer'},
  { name: 'Tayyab Jewelers', slug: 'tayyab-jewelers'},
  { name: 'Tessoro', slug: 'tessoro'},
  { name: 'The Body Shop', slug: 'the-body-shop'},
  // { name: 'Tim Hortins', slug: 'tim-hortins'},
  { name: 'Ultra Club', slug: 'ultra-club'},
  { name: 'Wasim Badami by Hemani', slug: 'wasim-badami-by-hemani'},
  { name: 'Zero', slug: 'zero'},
  { name: 'Ashraf Naturals', slug: 'ashraf-naturals'},
  { name: 'Asian Fusion', slug: 'asian-fusion'},
  // { name: 'Corn Station', slug: 'corn-station'},
  { name: 'F Optical and Watch', slug: 'f-optical-and-watch'},
  { name: 'Foot and Leather', slug: 'foot-and-leather'},
  { name: 'H n H Decor', slug: 'h-n-h-decor'},
  // { name: 'IMC', slug: 'imc'},
  { name: 'Kapok', slug: 'kapok'},
  // { name: 'King Coffee', slug: 'king-coffee'},
  { name: 'Melon Box', slug: 'melon-box'},
  { name: 'Mi', slug: 'mi'},
  { name: 'Mr Game', slug: 'mr-game'},
  { name: 'Pound Store', slug: 'pound-store'},
  { name: 'Rohi Reet', slug: 'rohi-reet'},
  { name: 'Silver Stition', slug: 'silver-stition'},
  { name: 'Sport Snation', slug: 'sport-snation'},
  // { name: 'Sweet and Salt', slug: 'sweet-and-salt'},
  // first floor
  { name: 'Abc Fragrance', slug: 'abc-fragrance'},
  { name: 'Alkaram', slug: 'alkaram'},
  { name: 'Almas', slug: 'almas'},
  { name: 'AMD', slug: 'amd'},
  { name: 'Amir', slug: 'amir'},
  { name: 'Bareeze', slug: 'bareeze'},
  { name: 'Batik', slug: 'batik'},
  { name: 'Beech Tree', slug: 'beech-tree'},
  { name: 'Bonanza Satrangi Beauty', slug: 'bonanza-satrangi-beauty'},
  { name: 'Borjan', slug: 'borjan'},
  { name: 'Brackets', slug: 'brackets'},
  { name: 'Cambridge', slug: 'cambridge'},
  { name: 'Charizma', slug: 'charizma'},
  { name: 'Chinyere', slug: 'chinyere'},
  { name: 'Chunri', slug: 'chunri'},
  { name: 'Corio', slug: 'corio'},
  { name: 'Dinners', slug: 'dinners'},
  { name: 'Dynasty', slug: 'dynasty'},
  { name: 'ECS', slug: 'ecs'},
  { name: 'Edenrobe', slug: 'edenrobe'},
  { name: 'Eklairs', slug: 'eklairs'},
  { name: 'Elegant', slug: 'elegant'},
  { name: 'Excel', slug: 'excel'},
  { name: 'Frutastic', slug: 'frutastic'},
  { name: 'Furor', slug: 'furor'},
  { name: 'Generation', slug: 'generation'},
  { name: 'Gloria Jeans', slug: 'gloria-jeans'},
  { name: 'Hi Volts', slug: 'hi-volts'},
  { name: 'Ideas', slug: 'ideas'},
  { name: 'Islamic Honey Center', slug: 'islamic-honey-center'},
  { name: 'Jiyas creation', slug: 'jiyas-creation'},
  { name: 'Junaid Jamshed', slug: 'junaid-jamshed'},
  { name: 'Kayseria', slug: 'kayseria'},
  { name: 'Lawrancepur', slug: 'lawrancepur'},
  { name: 'Little People', slug: 'little-people'},
  { name: 'Logo', slug: 'logo'},
  { name: 'M/Basic', slug: 'm-basic'},
  { name: 'Maria B', slug: 'maria-b'},
  { name: 'Minnie Mirrors', slug: 'minnie-mirrors'},
  { name: 'Mona', slug: 'mona'},
  { name: 'Nakoosh', slug: 'nakoosh'},
  { name: 'Nishat', slug: 'nishat'},
  { name: 'Oaks', slug: 'oaks'},
  { name: 'One', slug: 'one'},
  { name: 'Out Fitters', slug: 'out-fitters'},
  { name: 'Potato Factory', slug: 'potato-factory'},
  { name: 'Revolution London', slug: 'revolution-london'},
  { name: 'RTH', slug: 'rth'},
  { name: 'Sana Safinaz', slug: 'sana-safinaz'},
  { name: 'Siraj Sons Silver Shop', slug: 'siraj-sons-silver-shop'},
  { name: 'Sohaye', slug: 'sohaye'},
  { name: 'Sowearg', slug: 'sowearg'},
  { name: 'Stylo', slug: 'stylo'},
  { name: 'Swiss Arabia', slug: 'swiss-arabia'},
  { name: 'Threads and Motys', slug: 'threads-and-motys'},
  { name: 'Tiny Years', slug: 'tiny-years'},
  { name: 'Toy Club', slug: 'toy-club'},
  { name: 'Umaiza', slug: 'umaiza'},
  { name: 'Uniworth', slug: 'uniworth'},
  { name: 'Unze', slug: 'unze'},
  { name: 'Vereity Bags and Costmetics', slug: 'vereity-bags-and-costmetics'},
  { name: 'Zeen', slug:'zeen'},
  { name: 'Zubaidas', slug:'zubaidas'},
  { name: '361', slug: '361'},
  { name: 'a and i', slug: 'a-and-i'},
  { name: 'Al Baik', slug: 'al-baik'},
  { name: 'Ali Baba', slug: 'ali-baba'},
  { name: 'Anamta Fateh', slug: 'anamta-fateh'},
  { name: 'Anaya Jewelery', slug: 'anaya-jewelery'},
  { name: 'Apavi Shoes', slug: 'apavi-shoes'},
  { name: 'Bling Collection', slug: 'bling-collection'},
  { name: 'Minime Kids Mobile', slug: 'minime-kids-mobile'},
  { name: 'Ciggeretes and Choclates', slug: 'ciggerete-and-choclates'},
  { name: 'Dare to Dazzle', slug: 'dare-to-dazzle'},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
  { name: '', slug: ''},
];

// Helper function to check if a name matches viewBy filter
const matchesViewBy = (name: string, viewBy: string): boolean => {
  if (!viewBy) return true;
  
  const firstChar = name.charAt(0).toLowerCase();
  
  switch (viewBy) {
    case '0-9':
      return /[0-9]/.test(firstChar);
    case 'a-f':
      return /[a-f]/.test(firstChar);
    case 'g-l':
      return /[g-l]/.test(firstChar);
    case 'm-r':
      return /[m-r]/.test(firstChar);
    case 's-z':
      return /[s-z]/.test(firstChar);
    default:
      return true;
  }
};

const StoreGrid = ({ items = defaultStores, basePath = '/shop' }: StoreGridProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { filters } = useFilters();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const itemsPerPage = 5;
  
  // Get initial count from URL or default
  const getInitialCount = () => {
    if (typeof window === 'undefined') return isMobile ? 6 : 10;
    
    const urlCount = searchParams.get('show');
    if (urlCount) {
      const count = parseInt(urlCount);
      // Ensure the count is valid
      return isNaN(count) ? (isMobile ? 6 : 10) : Math.max(count, isMobile ? 6 : 10);
    }
    return isMobile ? 6 : 10;
  };
  
  const [visibleCount, setVisibleCount] = useState(getInitialCount);

  // Update URL when visibleCount changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Only update URL if count is different from default
    const defaultCount = isMobile ? 6 : 10;
    if (visibleCount > defaultCount) {
      params.set('show', visibleCount.toString());
    } else {
      params.delete('show');
    }
    
    // Create the new URL
    const newUrl = `?${params.toString()}`;
    
    // Update URL without scrolling or triggering navigation
    router.replace(newUrl, { scroll: false });
  }, [visibleCount, router, searchParams, isMobile]);

  // Update visible count when mobile/desktop changes
  useEffect(() => {
    const urlCount = searchParams.get('show');
    if (urlCount) {
      const count = parseInt(urlCount);
      if (!isNaN(count)) {
        setVisibleCount(count);
      }
    } else {
      setVisibleCount(isMobile ? 6 : 10);
    }
  }, [isMobile, searchParams]);

  // Filter items based on search query, category, viewBy, and offers
  const filteredItems = useMemo(() => {
    return items.filter((store) => {
      // Search query filter (case-insensitive)
      if (filters.searchQuery) {
        const searchLower = filters.searchQuery.toLowerCase();
        const nameLower = store.name.toLowerCase();
        if (!nameLower.includes(searchLower)) {
          return false;
        }
      }

      // Category filter (if category is selected and store has category)
      if (filters.category && store.category) {
        // Map filter category values to data category values
        const categoryMap: Record<string, string[]> = {
          'fashion-men': ['Fashion'],
          'fashion-women': ['Fashion'],
          'fashion-children': ['Fashion'],
          'beauty': ['Beauty'],
          'home': ['Lifestyle'],
          'toys': ['Lifestyle'],
          'electronics': ['Lifestyle'],
          'cafe': ['Cafe'],
          'fast-food': ['Fast Food'],
          'food-drink': ['Food & Drink'],
          'icecream': ['Icecream'],
          'restaurant': ['Restaurant', 'Fine Dining'],
        };
        
        const matchingCategories = categoryMap[filters.category] || [];
        if (matchingCategories.length > 0 && !matchingCategories.includes(store.category)) {
          return false;
        }
        // If no mapping exists, do exact match
        if (matchingCategories.length === 0 && filters.category.toLowerCase() !== store.category.toLowerCase()) {
          return false;
        }
      }

      // View by filter (alphabetical ranges)
      if (!matchesViewBy(store.name, filters.viewBy)) {
        return false;
      }

      // Offers filter
      if (filters.showOffersOnly && !store.hasOffers) {
        return false;
      }

      return true;
    });
  }, [items, filters.searchQuery, filters.category, filters.viewBy, filters.showOffersOnly]);

  // Reset visible count when filters change (except for search params)
  useEffect(() => {
    // Don't reset if we have a URL parameter for show count
    const hasShowParam = searchParams.get('show') !== null;
    
    if (!hasShowParam) {
      if (isMobile) {
        setVisibleCount(6);
      } else {
        setVisibleCount(10);
      }
    }
  }, [filters.searchQuery, filters.category, filters.viewBy, filters.showOffersOnly, isMobile, searchParams]);

  const handleLoadMore = () => {
    if (isMobile) {
      // On mobile, show all items when "Show More" is clicked
      setVisibleCount(filteredItems.length);
    } else {
      // On desktop, use the existing pagination logic
      setVisibleCount(prev => prev + itemsPerPage);
    }
  };

  // Determine which stores to show
  const visibleStores = filteredItems.slice(0, visibleCount);
  
  // Check if we need to show "Show More" button
  // On mobile: show button if there are more than 6 items and not all are visible
  // On desktop: show button if there are more items to load
  const hasMore = isMobile 
    ? (filteredItems.length > 6 && visibleCount < filteredItems.length)
    : (visibleCount < filteredItems.length);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
        backgroundColor: '#ffffff'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {/* Display message when no stores match filters */}
        {filteredItems.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#666',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400
              }}
            >
              No stores found matching your filters.
            </Typography>
          </Box>
        )}

        {/* Store Grid */}
        {filteredItems.length > 0 && (
          <>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(5, 1fr)'
                },
                gap: { xs: 1.5, sm: 2, md: 2.5 },
                mb: { xs: 3, sm: 4 }
              }}
            >
              {visibleStores.map((store, index) => {
                const logoPath = getStoreLogo(store.slug || store.name.toLowerCase().replace(/\s+/g, '-'), store.logo);

                return (
                  <Link
                    key={index}
                    href={`${basePath}/${store.slug || store.name.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                      // Preserve the URL parameters when navigating to store page
                      const params = new URLSearchParams(searchParams.toString());
                      const currentUrl = `${window.location.pathname}?${params.toString()}`;
                      
                      // Store current URL in sessionStorage for back navigation
                      sessionStorage.setItem('storeGridUrl', currentUrl);
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        aspectRatio: '1 / 1',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        backgroundColor: '#ffffff',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          borderColor: '#D19F3B',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      {logoPath ? (
                        <Image
                          src={logoPath}
                          alt={store.name}
                          fill
                          sizes="(max-width: 600px) 50vw, (max-width: 960px) 33vw, (max-width: 1280px) 25vw, 20vw"
                          style={{
                            objectFit: 'contain',
                            padding: '12px'
                          }}
                        />
                      ) : (
                        <Typography
                          className="store-name"
                          sx={{
                            fontFamily: 'Georgia, serif',
                            fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                            color: '#333333',
                            fontWeight: 400,
                            lineHeight: 1.4,
                            wordBreak: 'break-word',
                            transition: 'color 0.3s ease',
                            padding: { xs: 1.5, sm: 2 },
                            textAlign: 'center'
                          }}
                        >
                          {store.name}
                        </Typography>
                      )}
                    </Box>
                  </Link>
                );
              })}
            </Box>

            {/* Show More Button */}
            {hasMore && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: { xs: 3, sm: 4 }
                }}
              >
                <Button
                  onClick={handleLoadMore}
                  variant="outlined"
                  sx={{
                    border: '1px solid #D19F3B',
                    color: '#D19F3B',
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    fontWeight: 500,
                    fontFamily: '"Poppins", sans-serif',
                    padding: { xs: '10px 40px', sm: '12px 50px' },
                    borderRadius: 0,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#D19F3B',
                      color: '#ffffff',
                      backgroundColor: '#D19F3B'
                    }
                  }}
                >
                  {isMobile && visibleCount === 6 ? 'Show More' : 'Load More'}
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default StoreGrid;