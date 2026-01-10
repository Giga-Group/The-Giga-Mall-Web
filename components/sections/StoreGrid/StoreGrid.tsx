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
    'bloon': '/logo/bloon logo.jpg',
    'bonanza': '/logo/bonanza satrangi logo.jpg',
    'breakout': '/logo/Breakout logo.png',
    'cambridge': '/logo/cambridge logo.jpg',
    'junaid-jamshed': '/logo/junaid jamshed logo.png',
    'kayseria': '/logo/kayseria logo.jpg',
    'miniso': '/logo/miniso logo.jpg',
    '1st-step': '/logo/1st step.jpg',
    'addidas': '/logo/addidas.jpg',
    'adoro': '/logo/adoro.jpg',
    'aesthetic-and-dental-works': '/logo/aesthetic and dental works.jpg',
    'ashraf-naturals': '/logo/ASHRAF.jpg',
    'asian-fusion': '/logo/asian fusion.jpg',
    'bata': '/logo/bata.jpeg',
    'beectree': '/logo/beectree.jpg',
    'brand-city': '/logo/brand city.jpeg',
    'carrefour': '/logo/carrefour.jpeg',
    'charcol': '/logo/charcol.jpg',
    'cinnabon': '/logo/cionnabon.jpg',
    'coppelia': '/logo/coppelia.jpg',
    'corn-station': '/logo/corn station.jpg',
    'coshes': '/logo/coshes.jpg',
    'cougar': '/logo/cougar.jpg',
    'crocs': '/logo/crocs.jpg',
    'cross-stitch': '/logo/croos stich.jpg',
    'dahri-mouch': '/logo/dahri mouch.jpg',
    'derma-orchard': '/logo/derma orchard.jpg',
    'diamond-crown': '/logo/diamond crown.jpeg',
    'dinneras': '/logo/dinneras.jpg',
    'dubai-islamic': '/logo/dubai islamic bank.jpeg',
    'dynasty': '/logo/dynasty.jpg',
    'eclairs': '/logo/eclairs.jpg',
    'ecs': '/logo/ecs.jpg',
    'edenropb': '/logo/edenropb.jpg',
    'elegent-makup-city': '/logo/elegent makup city.jpg',
    'engine': '/logo/engine.jpg',
    'equator': '/logo/equator.jpg',
    'ethnc': '/logo/ethnc.jpg',
    'f-optical-and-watch': '/logo/F optical and watch.jpg',
    'focus': '/logo/focus.jpg',
    'foot-and-leather': '/logo/foot and leathers.jpg',
    'fpl': '/logo/FPL.jpg',
    'friends-home': '/logo/friends home.jpeg',
    'furor': '/logo/furor.jpg',
    'genration': '/logo/genration.jpg',
    'glory-jeans': '/logo/glory jeans.jpg',
    'gulzari-optics': '/logo/gulzari optics.jpg',
    'h-n-h-decor': '/logo/H&H decore.jpg',
    'haroons': '/logo/Haroons.jpg',
    'hopscotch': '/logo/hopscotch.jpg',
    'hub': '/logo/hub.jpg',
    'hunza-emporium': '/logo/hunza emporium.jpg',
    'hush-dog': '/logo/hush dog.jpg',
    'hussain-jewellers': '/logo/hussain jewellers.jpg',
    'imc': '/logo/IMC.jpg',
    'insignia': '/logo/insignia.jpg',
    'j-frag': '/logo/J. frag.jpg',
    'jaffer-jees': '/logo/jaffer jees.jpg',
    'jc-bukman': '/logo/jc bukman.jpg',
    'jelly-factory': '/logo/jelly factory.jpeg',
    'johri': '/logo/johri.jpeg',
    'juice-fruity': '/logo/juice fruity.jpg',
    'juice-station': '/logo/juice station.jpg',
    'julkee': '/logo/juilkee.jpg',
    'kapok': '/logo/kapok.jpg',
    'kef-dimond': '/logo/kef dimond.jpg',
    'khadi': '/logo/khadi.jpg',
    'khussa-factory': '/logo/khussa factory.jpg',
    'king-coffe': '/logo/king coffe.jpg',
    'king-corn': '/logo/king corn.jpg',
    'kohinoor-jewels': '/logo/kohinoor jewelers.jpeg',
    'lady-privacey': '/logo/lady privacey.jpg',
    'lawrencepur': '/logo/lawrencepur.jpg',
    'lime-light': '/logo/lime light.jpg',
    'location': '/logo/location.jpg',
    'lulusar': '/logo/lulusar.jpg',
    'majhurat': '/logo/majhurat.jpeg',
    'maria-b': '/logo/MARIA B.jpg',
    'maybelline': '/logo/maybelline.jpg',
    'mi': '/logo/MI.jpg',
    'milli-shoes': '/logo/milli.jpeg',
    'mircel': '/logo/mircel.jpg',
    'mocciani': '/logo/mocciani.jpg',
    'monark': '/logo/monark.jpg',
    'mr-games': '/logo/mr games.jpg',
    'mr-kazi': '/logo/Mr kazi.jpg',
    'mtj': '/logo/MTJ.jpg',
    'ndure': '/logo/ndure.jpeg',
    'nizam-watch': '/logo/nizam watch.jpg',
    'oaks': '/logo/oaks.jpg',
    'one': '/logo/one.jpg',
    'pakistan-currencey-exchange': '/logo/pakistan currencey exchange.jpg',
    'pop-nosh': '/logo/pop nosh.jpg',
    'pound-stoore': '/logo/pound stoore.jpg',
    'readers-point': '/logo/readers point.jpeg',
    'rivaj': '/logo/rivaj.jpg',
    'rohi-reet': '/logo/rohi reet.jpg',
    'royal-tag': '/logo/royal tag.jpg',
    'saeed-ghani': '/logo/saeed ghani.jpeg',
    'samsung': '/logo/samsung.jpg',
    'sana-safinaz': '/logo/sana safinaz.jpg',
    'sapphire': '/logo/sapphire.jpg',
    'saya': '/logo/saya.jpg',
    'scents-n-stories': '/logo/scents n stories.jpg',
    'service': '/logo/service.jpeg',
    'silverstation': '/logo/silverstation.jpg',
    'siraj-sons': '/logo/siraj sons.jpg',
    'skecher': '/logo/skecher.jpg',
    'sohaye': '/logo/sohaye.jpg',
    'speed-sports': '/logo/speed sports.jpg',
    'sport-snation': '/logo/sport snation.jpg',
    'style-and-comfort': '/logo/style and comfort.jpg',
    'style-in-shoes': '/logo/style in shoes.jpg',
    'stylo': '/logo/stylo.jpg',
    'sveston': '/logo/sveston.jpg',
    'swaro-visky': '/logo/swaro visky.jpg',
    'sweet-and-salt': '/logo/sweet and salt.jpg',
    'swiss-arabiya': '/logo/swiss arabiya.jpg',
    'syed-royal-optics': '/logo/syed royal optics.jpg',
    'tag-heuer': '/logo/tag heuer.jpg',
    'tayyab': '/logo/tayyab.jpg',
    'tech-studio': '/logo/tech studio.jpg',
    'tesoro': '/logo/tesoro.jpg',
    'the-body-shop': '/logo/the body shop.jpg',
    'the-linen-company': '/logo/THE linen company.jpg',
    'the-potato-factory': '/logo/the potato factory.jpg',
    'tim-hrtons': '/logo/tim hrtons.jpg',
    'toy-club': '/logo/toy club.jpg',
    'ubl': '/logo/ubl.jpeg',
    'ultra-club': '/logo/ultra club.jpg',
    'umaiza-jewellers': '/logo/umaiza jewellers.jpg',
    'unioworth': '/logo/unioworth.jpg',
    'wasim-badami': '/logo/wasim badami.jpg',
    'wok-n-grill': '/logo/wok n grill.jpg',
    'zeen': '/logo/zeen.jpg',
    'zero': '/logo/zero.jpg',
    'zubaidas': '/logo/zubaidas.jpg',
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
    'bonanza-satrangi': '/logo/bonanza satrangi.jpg',
    'baskin-robbins': '/logo/BR BASKIN.jpg',
    'eklairs': '/logo/eclairs.jpg',
    'frutastic': '/logo/juice fruity.jpg',
    'gloria-jeans-coffees': '/logo/glory jeans.jpg',
    'goshez': '/logo/coshes.jpg',
    'islamic-honey-centre': '/logo/location.jpg',
    'king-coffee': '/logo/king coffe.jpg',
    'sweet-salt': '/logo/sweet and salt.jpg',
    'tim-hortons': '/logo/tim hrtons.jpg',
    'potato-factory': '/logo/the potato factory.jpg',
    // Entertainment logos
    'cinepax': '/logo/Vrkings.jpg',
    'vi-rides': '/logo/Virides.jpg',
    'vr-kings': '/logo/Vrkings.jpg'
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
  { name: 'Diamond Crown', slug: 'diamond-crown' },
  { name: 'Friends Home', slug: 'friends-home' },
  { name: 'Haroons', slug: 'haroons' },
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
  { name: 'Couger', slug: 'cougar'},
  { name: 'Crocs', slug: 'crocs'},
  { name: 'Cross Stitch', slug: 'cross-stitch'},
  { name: 'Dari Mooch', slug: 'dari-mooch'},
  { name: 'Engine', slug: 'engine'},
  { name: 'Equator', slug: 'equator'},
  { name: 'Ethnic', slug: 'ethnic'},
  { name: 'Focus', slug: 'focus'},
  { name: 'FPL', slug: 'fpl'},
  { name: 'Goshes', slug: 'goshes'},
  { name: 'Gulzari', slug: 'gulzari'},
  { name: 'Hussain Jewelers', slug: 'hussain-jewelers'},
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
  { name: 'Khaadi', slug: 'khaadi'},
  { name: 'Khusa Factory', slug: 'khusa-factory'},
  { name: 'Lady Privacy', slug: 'lady-privacy'},
  { name: 'Limelight', slug: 'limelight'},
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
  { name: 'Skechers', slug: 'skechers'},
  { name: 'Sona Chandi', slug: 'sona-chandi'},
  { name: 'Speed Sports', slug: 'speed-sports'},
  { name: 'Style in Shoes', slug: 'style-in-shoes'},
  { name: 'Svesto', slug: 'svesto'},
  { name: 'Swarovski', slug: 'swarovski'},
  { name: 'Syed Royal Optics', slug: 'syed-royal-optics'},
  { name: 'Tagheuer', slug: 'tagheuer'},
  { name: 'Tayyab Jewelers', slug: 'tayyab-jewelers'},
  { name: 'Tesoro', slug: 'tesoro'},
  { name: 'The Body Shop', slug: 'the-body-shop'},
  { name: 'Ultra Club', slug: 'ultra-club'},
  { name: 'Wasim Badami by Hemani', slug: 'wasim-badami-by-hemani'},
  { name: 'Zero', slug: 'zero'},
  { name: 'Ashraf Naturals', slug: 'ashraf-naturals'},
  { name: 'Asian Fusion', slug: 'asian-fusion'},
  { name: 'F Optical and Watch', slug: 'f-optical-and-watch'},
  { name: 'Foot and Leather', slug: 'foot-and-leather'},
  { name: 'H n H Decor', slug: 'h-n-h-decor'},
  { name: 'Kapok', slug: 'kapok'},
  { name: 'Melon Box', slug: 'melon-box'},
  { name: 'Mi', slug: 'mi'},
  { name: 'Mr Game', slug: 'mr-game'},
  { name: 'Pound Store', slug: 'pound-store'},
  { name: 'Rohi Reet', slug: 'rohi-reet'},
  { name: 'Silver Stition', slug: 'silver-stition'},
  { name: 'Sport Snation', slug: 'sport-snation'},
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  const { filters } = useFilters();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const itemsPerPage = 5;
  
  // Get initial count - use consistent default for SSR (assume desktop)
  // This ensures server and client render the same initial HTML
  const getInitialCount = () => {
    // Always return a consistent default for SSR (assume desktop = 10)
    // We'll update this after mount to match actual screen size
    if (typeof window === 'undefined') return 10;
    
    // On client, try to get from URL first
    const urlCount = searchParams.get('show');
    if (urlCount) {
      const count = parseInt(urlCount);
      if (!isNaN(count) && count >= 6) {
        return count;
      }
    }
    // Default to desktop (10) for initial render to match SSR
    return 10;
  };
  
  const [visibleCount, setVisibleCount] = useState(getInitialCount);
  
  // Update visible count after mount to match actual screen size and URL
  useEffect(() => {
    const urlCount = searchParams.get('show');
    if (urlCount) {
      const count = parseInt(urlCount);
      if (!isNaN(count) && count >= 6) {
        setVisibleCount(Math.max(count, isMobile ? 6 : 10));
        return;
      }
    }
    // Set to correct default based on screen size
    setVisibleCount(isMobile ? 6 : 10);
  }, [isMobile, searchParams]);

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

  // This effect is now handled in the mounted effect above

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
          'cinema': ['cinema'],
          'arcade': ['arcade'],
          'sports': ['sports'],
          'family': ['family'],
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