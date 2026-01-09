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
    'cheezious': '/dine/chezious.jpg',
    'alkaram': '/shops/alkaram-mobile.jpg',
    'almas': '/shops/almas-mobile.jpg',
    'almirah': '/shops/almirah-mobile.jpg',
    'batik-studio': '/shops/batikstudio-mobile.jpg',
    'batikstudio': '/shops/batikstudio-mobile.jpg',
    'bloon': '/shops/bloon-mobile.jpg',
    'bonanza': '/shops/bonanza-mobile.jpg',
    'breakout': '/shops/breakout-mobile.jpg',
    'cambridge': '/shops/cambridge-mobile.jpg',
    'junaid-jamshed': '/shops/junaidjamshed-mobile.jpg',
    'junaidjamshed': '/shops/junaidjamshed-mobile.jpg',
    'kayseria': '/shops/kayseria-mobile.jpg',
    'miniso': '/shops/miniso-mobile.jpg',
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
    'just-fragrance': '/shops/Just Fragrance mobile.JPG',
    'gadgets-mobile': '/shops/Gadgets Mobile mobile.JPG',
    'bonanza-satrangi': '/shops/Bonanza Satrangi mobile.JPG',
    'aroma-concepts': '/shops/Aroma Concepts mobile.JPG',
    'eastern-art-and-handicraft': '/shops/Eastern Art and HandiCraft mobile.JPG',
    'taana-baana': '/shops/Taana Baana mobile.JPG',
    'alpha-accessories': '/shops/Alpha Accessories mobile.JPG',
    'ximi-vogue': '/shops/Ximi Vogue mobile.JPG',
    'glamor': '/shops/Glamor mobile.JPG',
    'thai-zone': '/shops/Thai Zone mobile.JPG',
    'tajik': '/shops/Tajik mobile.JPG',
    'sams-abaya': "/shops/Sam's Abaya mobile.JPG",
    'zamin-jewelers': '/shops/Zamin Jewelers mobile.JPG',
    'traditional-khusa': '/shops/Traditional Khusa mobile.JPG',
    'taarkashi': '/shops/Taarkshi mobile.JPG',
    'the-time-zone': '/shops/The Time Zone mobile.JPG',
    'mehran-jewellers': '/shops/Mehran Jewellers mobile.JPG',
    'derma-orchid': '/Services/derma orchid mobile.JPG',
    'dermaorchid': '/Services/derma orchid mobile.JPG',
    'derma orchid': '/Services/derma orchid mobile.JPG',
    'aesthetics-and-dental-works': '/Services/aesthetic n dental work mobile.JPG',
    'aestheticsanddentalworks': '/Services/aesthetic n dental work mobile.JPG',
    'aesthetics and dental works': '/Services/aesthetic n dental work mobile.JPG',
    'aesthetic-n-dental-work': '/Services/aesthetic n dental work mobile.JPG',
    'aestheticndentalwork': '/Services/aesthetic n dental work mobile.JPG',
    'aesthetic n dental work': '/Services/aesthetic n dental work mobile.JPG',
    'imc': '/Services/imc mobile.JPG',
    'imc-integrative-medical-center': '/Services/imc mobile.JPG',
    'integrative-medical-center': '/Services/imc mobile.JPG',
    'pakistan-currency-exchange': '/Services/pakistan currency exchange mobile.JPG',
    'pakistancurrencyexchange': '/Services/pakistan currency exchange mobile.JPG',
    'pakistan currency exchange': '/Services/pakistan currency exchange mobile.JPG',
    'currency-exchange': '/Services/pakistan currency exchange mobile.JPG',
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
    'mcdonalds': '/dine/macdonald-mobile.jpg',
    'mcdonald\'s': '/dine/macdonald-mobile.jpg',
    'macdonald': '/dine/macdonald-mobile.jpg',
    'hardees': '/dine/hardees-mobile.jpg',
    'hardee\'s': '/dine/hardees-mobile.jpg',
    'pizzahut': '/dine/pizzahut-mobile.jpg',
    'pizza-hut': '/dine/pizzahut-mobile.jpg',
    'pizza hut': '/dine/pizzahut-mobile.jpg',
    'wild-wings': '/dine/wildwings-mobile.jpg',
    'wildwings': '/dine/wildwings-mobile.jpg',
    'wild wings': '/dine/wildwings-mobile.jpg',
    'cheezious': '/dine/cheezious mobile view.jpg',
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
    'tim-hortons': '/dine/tim horton mobile.JPG',
    'timhortons': '/dine/tim horton mobile.JPG',
    'tim hortons': '/dine/tim horton mobile.JPG',
    'tim-horton': '/dine/tim horton mobile.JPG',
    'timhorton': '/dine/tim horton mobile.JPG',
    'cinnabon': '/cinnabon-mobile.jpg',
    'baskin-robbins': '/dine/baskin robin mobile.JPG',
    'baskinrobbins': '/dine/baskin robin mobile.JPG',
    'baskin robins': '/dine/baskin robin mobile.JPG',
    'baskin robin': '/dine/baskin robin mobile.JPG',
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
    'gloria-jeans-coffees': '/dine/gloria mobile.JPG',
    'gloriajeanscoffees': '/dine/gloria mobile.JPG',
    'redapple': '/dine/redapple-mobile.JPG',
    'red-apple': '/dine/redapple-mobile.JPG',
    'optp': '/dine/optp-mobile.JPG',
    'chachajee': '/dine/chachajee-mobile.JPG',
    'simplysufi': '/dine/simplesufi-mobile.JPG',
    'simply-sufi': '/dine/simplesufi-mobile.JPG',
    'rewayat': '/dine/rewayat-mobile.JPG',
    'spicefactory': '/dine/spicefactory-mobile.JPG',
    'spice-factory': '/dine/spicefactory-mobile.JPG',
    'chinagrill': '/dine/chinagrill-mobile.JPG',
    'china-grill': '/dine/chinagrill-mobile.JPG',
    'kababjees': '/dine/kababjees-mobile.JPG',
    'kabab-jees': '/dine/kababjees-mobile.JPG',
    'coffee-planet': '/dine/coffee planet mobile.JPG',
    'coffeeplanet': '/dine/coffee planet mobile.JPG',
    'coffee planet': '/dine/coffee planet mobile.JPG',
    'corn-station': '/dine/corn station mobile.JPG',
    'cornstation': '/dine/corn station mobile.JPG',
    'corn station': '/dine/corn station mobile.JPG',
    'asian-fusion': '/dine/asian fusion mobile.JPG',
    'asianfusion': '/dine/asian fusion mobile.JPG',
    'asian fusion': '/dine/asian fusion mobile.JPG',
    'eklairs': '/dine/eklairs mobile.JPG',
    'frutastic': '/dine/frutastic mobile.JPG',
    'gloria jeans coffees': '/dine/gloria mobile.JPG',
    'gloria': '/dine/gloria mobile.JPG',
    'goshez': '/dine/goshez mobile.JPG',
    'islamic-honey-centre': '/dine/islamic honey mobile.JPG',
    'islamichoneycentre': '/dine/islamic honey mobile.JPG',
    'islamic honey centre': '/dine/islamic honey mobile.JPG',
    'islamic honey': '/dine/islamic honey mobile.JPG',
    'juice-fruity': '/dine/juice fruity mobile.JPG',
    'juicefruity': '/dine/juice fruity mobile.JPG',
    'juice fruity': '/dine/juice fruity mobile.JPG',
    'juice-station': '/dine/juice station mobile.JPG',
    'juicestation': '/dine/juice station mobile.JPG',
    'juice station': '/dine/juice station mobile.JPG',
    'king-coffee': '/dine/king coffee mobile.JPG',
    'kingcoffee': '/dine/king coffee mobile.JPG',
    'king coffee': '/dine/king coffee mobile.JPG',
    'king-corn': '/dine/king corn mobile.JPG',
    'kingcorn': '/dine/king corn mobile.JPG',
    'king corn': '/dine/king corn mobile.JPG',
    'pop-nosh': '/dine/popnosh mobile.JPG',
    'popnosh': '/dine/popnosh mobile.JPG',
    'pop nosh': '/dine/popnosh mobile.JPG',
    'sweet-salt': '/dine/sweet&salt mobile.JPG',
    'sweetandsalt': '/dine/sweet&salt mobile.JPG',
    'sweet & salt': '/dine/sweet&salt mobile.JPG',
    'ashraf-naturals': '/dine/ashraf naturals mobile.JPG',
    'ashrafnaturals': '/dine/ashraf naturals mobile.JPG',
    'ashraf naturals': '/dine/ashraf naturals mobile.JPG',
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

