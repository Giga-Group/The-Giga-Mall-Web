// App-wide constants

export const NAV_ITEMS = ["What's New", "Shop", "Dine", "Services", /* "Stay", */ "Entertain", "Plan your visit", "Visitors Guide"];

export const BRAND_COLOR = '#D19F3B';

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// Helper function to get mobile image path for brands
export const getMobileBrandImage = (originalImage: string, brandName?: string, brandSlug?: string): string => {
  // Map of brand slugs to mobile image filenames
  const mobileImageMap: Record<string, string> = {
    'cheezious': '/chezious.jpg',
    'alkaram': '/alkaram-mobile.jpg',
    'almas': '/almas-mobile.jpg',
    'almirah': '/almirah-mobile.jpg',
    'batik-studio': '/batikstudio-mobile.jpg',
    'batikstudio': '/batikstudio-mobile.jpg',
    'bloon': '/bloon-mobile.jpg',
    'bonanza': '/bonanza-mobile.jpg',
    'breakout': '/breakout-mobile.jpg',
    'cambridge': '/cambridge-mobile.jpg',
    'junaid-jamshed': '/junaidjamshed-mobile.jpg',
    'junaidjamshed': '/junaidjamshed-mobile.jpg',
    'kayseria': '/kayseria-mobile.jpg',
    'miniso': '/miniso-mobile.jpg',
    'babys-day-out': '/shops/Babysdayout-mobile.JPG',
    'bata': '/shops/Bata mobile.JPG',
    'brand-city': '/shops/Brand City mobile.JPG',
    'diamond-crown': '/shops/Diamond Crown mobile.JPG',
    'friends-home': '/shops/Friends Home mobile.JPG',
    'haroons': '/shops/Haroons mobile.JPG',
    'jelly-factory': '/shops/Jelly Fish mobile.JPG',
    'johri': '/shops/Johri mobile.JPG',
    'kohinoor-jewels': '/shops/Kohinoor Jewels mobile.JPG',
    'the-linen-company': '/shops/Linen mobile.JPG',
    'little-explorer': '/shops/Little Explorer mobile.JPG',
    'location': '/shops/Location mobile.JPG',
    'majhurat': '/shops/Majhurat mobile.JPG',
    'milli-shoes': '/shops/Milli mobile.JPG',
    'mini-try': '/shops/Mini Try mobile.JPG',
    'mr-kazi': '/shops/Mr Kazi mobile.JPG',
    'ndure':'/shops/Ndure mobile.JPG',
    'readers-point': '/shops/Readers Point mobile.JPG',
    'rivaj': '/shops/Rivaj mobile.JPG',
    'saeed-ghani': '/shops/Saeed Ghani mobile.JPG',
    'service': '/shops/Service mobile.JPG',
    'style-and-comfort': '/shops/Style and Comfort mobile.JPG',
    'sveston': '/shops/Sveston mobile.JPG',
    'tech-studio': '/shops/Tech Studio mobile.JPG',
    'younique': '/shops/Younique mobile.JPG',
    'zero': '/shops/Zero mobile.JPG',
    'balochistan-dry-fruit-marchent': '/shops/Dry Fruit mobile.JPG',
    'just-fragrance': '/Just Fragrance mobile.JPG',
    'gadgets-mobile': '/Gadgets Mobile mobile.JPG',
    'bonanza-satrangi': '/Bonanza Satrangi mobile.JPG',
    'aroma-concepts': '/Aroma Concepts mobile.JPG',
    'eastern-art-and-handicraft': '/Eastern Art and HandiCraft mobile.JPG',
    'taana-baana': '/Taana Baana mobile.JPG',
    'alpha-accessories': '/Alpha Accessories mobile.JPG',
    'ximi-vogue': '/Ximi Vogue mobile.JPG',
    'glamor': '/Glamor mobile.JPG',
    'thai-zone': '/Thai Zone mobile.JPG',
    'tajik': '/Tajik mobile.JPG',
    'sams-abaya': "/Sam's Abaya mobile.JPG",
    'zamin-jewelers': '/Zamin Jewelers mobile.JPG',
    'traditional-khusa': '/Traditional Khusa mobile.JPG',
    'taarkashi': '/Taarkshi mobile.JPG',
    'the-time-zone': '/The Time Zone mobile.JPG',
    'mehran-jewellers': '/Mehran Jewellers mobile.JPG'
  };

  // Try to find mobile image by slug first (most reliable)
  if (brandSlug) {
    const normalizedSlug = brandSlug.toLowerCase().trim();
    if (mobileImageMap[normalizedSlug]) {
      return mobileImageMap[normalizedSlug];
    }
  }

  // Try to find mobile image by brand name
  if (brandName) {
    const normalizedName = brandName.toLowerCase().replace(/\s+/g, '-');
    if (mobileImageMap[normalizedName]) {
      return mobileImageMap[normalizedName];
    }
  }

  // Try to extract brand name from image path
  const imageName = originalImage.split('/').pop()?.toLowerCase() || '';
  const brandKey = imageName
    .replace(/\.(jpg|jpeg|png|webp)$/, '')
    .replace(/\s+/g, '-')
    .replace(/-logo$/, '');

  if (mobileImageMap[brandKey]) {
    return mobileImageMap[brandKey];
  }

  // If no mobile image found, return original
  return originalImage;
};

// Helper function to get mobile image path for dine/restaurants
export const getMobileDineImage = (originalImage: string, dineName?: string, dineSlug?: string): string => {
  // Map of dine slugs/names to mobile image filenames
  const mobileDineImageMap: Record<string, string> = {
    'mcdonalds': '/macdonald-mobile.jpg',
    'mcdonald\'s': '/macdonald-mobile.jpg',
    'macdonald': '/macdonald-mobile.jpg',
    'hardees': '/hardees-mobile.jpg',
    'hardee\'s': '/hardees-mobile.jpg',
    'pizzahut': '/pizzahut-mobile.jpg',
    'pizza-hut': '/pizzahut-mobile.jpg',
    'pizza hut': '/pizzahut-mobile.jpg',
    'wild-wings': '/wildwings-mobile.jpg',
    'wildwings': '/wildwings-mobile.jpg',
    'wild wings': '/wildwings-mobile.jpg',
    'cheezious': '/cheezious mobile view.jpg',
    'starbucks': '/starbucks-mobile.jpg',
    'nandos': '/nandos-mobile.jpg',
    'nando\'s': '/nandos-mobile.jpg',
    'eataly': '/eataly-mobile.jpg',
    'angelina': '/angelina-mobile.jpg',
    'social-house': '/socialhouse-mobile.jpg',
    'socialhouse': '/socialhouse-mobile.jpg',
    'cheesecake-factory': '/cheesecakefactory-mobile.jpg',
    'cheesecakefactory': '/cheesecakefactory-mobile.jpg',
    'markette': '/markette-mobile.jpg',
    'pizza-express': '/pizzaexpress-mobile.jpg',
    'pizzaexpress': '/pizzaexpress-mobile.jpg',
    'shake-shack': '/shakeshack-mobile.jpg',
    'shakeshack': '/shakeshack-mobile.jpg',
    'tim-hortons': '/timhortons-mobile.jpg',
    'timhortons': '/timhortons-mobile.jpg',
    'cinnabon': '/cinnabon-mobile.jpg',
    'baskin-robbins': '/baskinrobbins-mobile.jpg',
    'baskinrobbins': '/baskinrobbins-mobile.jpg',
    'cold-stone-creamery': '/coldstonecreamery-mobile.jpg',
    'coldstonecreamery': '/coldstonecreamery-mobile.jpg',
    'dunkin': '/dunkin-mobile.jpg',
    'kfc': '/kfc-mobile.jpg',
    'subway': '/subway-mobile.jpg',
    'burger-king': '/burgerking-mobile.jpg',
    'burgerking': '/burgerking-mobile.jpg',
    'papa-johns': '/papajohns-mobile.jpg',
    'papajohns': '/papajohns-mobile.jpg',
    'dominos-pizza': '/dominospizza-mobile.jpg',
    'dominospizza': '/dominospizza-mobile.jpg',
    'costa-coffee': '/costacoffee-mobile.jpg',
    'costacoffee': '/costacoffee-mobile.jpg',
    'gloria-jeans-coffees': '/gloriajeanscoffees-mobile.jpg',
    'gloriajeanscoffees': '/gloriajeanscoffees-mobile.jpg',
    'redapple': '/redapple-mobile.jpg',
    'red-apple': '/redapple-mobile.jpg',
    'optp': '/optp-mobile.jpg',
    'chachajee': '/chachajee-mobile.jpg',
    'simplysufi': '/simplesufi-mobile.JPG',
    'simply-sufi': '/simplesufi-mobile.JPG',
    'rewayat': '/rewayat-mobile.JPG',
    'spicefactory': '/spicefactory-mobile.jpg',
    'spice-factory': '/spicefactory-mobile.jpg',
    'chinagrill': '/chinagrill-mobile.jpg',
    'china-grill': '/chinagrill-mobile.jpg',
    'kababjees': '/kababjees-mobile.jpg',
    'kabab-jees': '/kababjees-mobile.jpg',
  };

  // Try to find mobile image by slug first (most reliable)
  if (dineSlug) {
    const normalizedSlug = dineSlug.toLowerCase().trim();
    if (mobileDineImageMap[normalizedSlug]) {
      return mobileDineImageMap[normalizedSlug];
    }
  }

  // Try to find mobile image by dine name
  if (dineName) {
    const normalizedName = dineName.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '').replace(/&/g, 'and');
    if (mobileDineImageMap[normalizedName]) {
      return mobileDineImageMap[normalizedName];
    }
    // Also try with original spaces and apostrophes
    const nameWithSpaces = dineName.toLowerCase();
    if (mobileDineImageMap[nameWithSpaces]) {
      return mobileDineImageMap[nameWithSpaces];
    }
  }

  // Try to extract dine name from image path and construct mobile image path
  const imageName = originalImage.split('/').pop()?.toLowerCase() || '';
  const dineKey = imageName
    .replace(/\.(jpg|jpeg|png|webp)$/, '')
    .replace(/\s+/g, '-')
    .replace(/-logo$/, '');

  if (mobileDineImageMap[dineKey]) {
    return mobileDineImageMap[dineKey];
  }

  // Try to construct mobile image path from original image name
  // If original is '/pizzahut.jpeg', try '/pizzahut-mobile.jpg'
  const baseName = imageName.replace(/\.(jpg|jpeg|png|webp)$/, '');
  
  // Check if this matches any known pattern (we can't check file existence in browser, but we can try common patterns)
  const commonPatterns = [
    baseName.replace(/\s+/g, '').toLowerCase() + '-mobile.jpg',
    baseName.replace(/\s+/g, '-').toLowerCase() + '-mobile.jpg',
    baseName.replace(/-/g, '').toLowerCase() + '-mobile.jpg',
  ];
  
  for (const pattern of commonPatterns) {
    const testKey = pattern.replace('-mobile.jpg', '').replace('.jpg', '');
    if (mobileDineImageMap[testKey]) {
      return mobileDineImageMap[testKey];
    }
  }

  // If no mobile image found, return original
  return originalImage;
};

