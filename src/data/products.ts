import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'va-prawn-01',
    slug: 'fresh-prawn-pickle',
    name: 'Fresh Coastal Prawn Pickle',
    nameMalayalam: 'നല്ല നാടൻ ചെമ്മീൻ അച്ചാർ',
    category: 'non-vegetarian',
    badge: 'Coastal Best Seller',
    tagline: 'Crispy fried sea prawns cured in spiced gingelly oil & garlic.',
    description: 'Fresh, succulent sea prawns caught daily off the Kerala coast, marinated with roasted spices, golden fried in cold-pressed sesame oil, and bottled with roasted garlic pods and fiery green chilies. A true Malabar culinary treasure.',
    storyNote: 'Featured directly on our Instagram showcase. Slow-simmered in small batches in Irinjalakuda.',
    image: '/images/products/prawn_pickle.jpg',
    secondaryImage: '/images/categories/nonveg_pickles.jpg',
    rating: 4.9,
    reviewCount: 42,
    dietary: 'non-veg',
    spiciness: 4,
    netWeightDefault: '250g',
    shelfLife: '6 Months (Store chilled after opening)',
    storage: 'Refrigerate after unsealing. Always use a clean, bone-dry spoon.',
    ingredients: [
      'Fresh Kerala coastal prawns',
      'Cold-pressed sesame/gingelly oil',
      'Peeled country garlic cloves',
      'Slit green bird’s eye chilies',
      'Kashmiri chili powder',
      'Roasted fenugreek & mustard',
      'Natural coconut vinegar',
      'Fresh curry leaves',
      'Sea salt'
    ],
    variants: [
      { size: '250g', price: 380, inStock: true, packageType: 'Airtight Glass Jar' },
      { size: '400g', price: 580, inStock: true, packageType: 'Airtight Glass Jar' },
      { size: '1kg', price: 1350, inStock: true, packageType: 'Travel-Grade Leakproof Pack' }
    ]
  },
  {
    id: 'va-mango-01',
    slug: 'kerala-cut-mango-pickle',
    name: 'Signature Kerala Mango Pickle',
    nameMalayalam: 'കണ്ണിമാങ്ങ / നാടൻ മാങ്ങ അച്ചാർ',
    category: 'vegetarian',
    badge: 'Heritage Flagship',
    tagline: 'Hand-cut raw green mangoes tossed with crushed fenugreek & mustard.',
    description: 'The defining staple of Kerala homes. Unripe, crisp native mangoes harvested at dawn, sliced into bite-sized morsels, salt-cured, and spiced with freshly dry-roasted fenugreek, fiery Byadgi chilies, and pure aromatic asafoetida (kaya podi).',
    storyNote: 'The heart and soul of Veettile Achaar. Made according to our grandmother’s 60-year-old family recipe.',
    image: '/images/products/mango_pickle.jpg',
    secondaryImage: '/images/hero/hero_kerala_pickle.jpg',
    rating: 5.0,
    reviewCount: 78,
    dietary: 'veg',
    spiciness: 3,
    netWeightDefault: '250g',
    shelfLife: '12 Months',
    storage: 'Store in a cool, shaded pantry. Avoid wet spoons.',
    ingredients: [
      'Crisp raw green mangoes',
      'Cold-pressed sesame oil',
      'Cracked black mustard seeds',
      'Roasted fenugreek powder (methi)',
      'Sun-dried red chili powder',
      'Compounded asafoetida (hing)',
      'Fresh curry leaves',
      'Mineral sea salt'
    ],
    variants: [
      { size: '250g', price: 160, inStock: true, packageType: 'Airtight Glass Jar' },
      { size: '400g', price: 250, inStock: true, packageType: 'Airtight Glass Jar' },
      { size: '1kg', price: 580, inStock: true, packageType: 'Bulk Catering Bucket' }
    ]
  },
  {
    id: 'va-lime-01',
    slug: 'traditional-lime-pickle',
    name: 'Tangy Sun-Cured Lime Pickle',
    nameMalayalam: 'നാടൻ നാരങ്ങ അച്ചാർ',
    category: 'vegetarian',
    badge: 'Festive Classic',
    tagline: 'Quartered yellow lemons slow-cured with ginger & green chilies.',
    description: 'Juicy, fragrant thin-skinned Kerala lemons steam-blanched and sun-matured until tender. The perfect balance of natural tartness, gentle citrus bitterness, and spicy pepper warmth.',
    image: '/images/products/lime_pickle.jpg',
    secondaryImage: '/images/categories/veg_pickles.jpg',
    rating: 4.8,
    reviewCount: 35,
    dietary: 'veg',
    spiciness: 3,
    netWeightDefault: '250g',
    shelfLife: '12 Months (Ages gracefully)',
    storage: 'Keep at ambient room temperature in dry conditions.',
    ingredients: [
      'Selected thin-skinned Kerala lemons',
      'Cold-pressed sesame oil',
      'Fresh ginger slivers',
      'Green chilies',
      'Turmeric & red chili powder',
      'Mustard & fenugreek seeds',
      'Asafoetida',
      'Rock salt'
    ],
    variants: [
      { size: '250g', price: 150, inStock: true, packageType: 'Airtight Glass Jar' },
      { size: '400g', price: 240, inStock: true, packageType: 'Airtight Glass Jar' }
    ]
  },
  {
    id: 'va-beef-01',
    slug: 'malabar-beef-roast-pickle',
    name: 'Slow-Roasted Malabar Beef Pickle',
    nameMalayalam: 'നാടൻ ബീഫ് അച്ചാർ',
    category: 'non-vegetarian',
    badge: 'Spice Lover Favorite',
    tagline: 'Tender beef cubes slow-roasted with black pepper, garlic & fennel.',
    description: 'Slow-braised tender beef morsels roasted till dark and caramelized, infused with freshly cracked Tellicherry black pepper, shallots, garlic slivers, and fragrant coconut vinegar.',
    image: '/images/products/beef_pickle.jpg',
    secondaryImage: '/images/categories/nonveg_pickles.jpg',
    rating: 4.9,
    reviewCount: 51,
    dietary: 'non-veg',
    spiciness: 5,
    netWeightDefault: '250g',
    shelfLife: '6 Months',
    storage: 'Store chilled after breaking vacuum seal.',
    ingredients: [
      'Prime tender beef cuts',
      'Crushed Tellicherry black pepper',
      'Cold-pressed sesame oil',
      'Garlic pods & ginger paste',
      'Toasted fennel & garam masala',
      'Natural fermented vinegar',
      'Curry leaves',
      'Salt'
    ],
    variants: [
      { size: '250g', price: 390, inStock: true, packageType: 'Airtight Glass Jar' },
      { size: '400g', price: 590, inStock: true, packageType: 'Airtight Glass Jar' }
    ]
  },
  {
    id: 'va-tasting-01',
    slug: 'kerala-feast-discovery-trio',
    name: 'Kerala Feast Discovery Trio Box',
    nameMalayalam: 'വീട്ടിലെ അച്ചാർ സ്പെഷ്യൽ ട്രിയോ ബോക്സ്',
    category: 'combos',
    badge: 'Gift & Discovery Pack',
    tagline: 'Mango, Prawn, and Lime Pickles presented in an eco-kraft gift box.',
    description: 'Our most requested gift set for food connoisseurs and families. Contains three 250g jars: Signature Mango, Coastal Prawn, and Sun-Cured Lime. Hand-packed in a charming presentation box lined with dried spices.',
    storyNote: 'Ideal for housewarmings, festival feasts, and sending a genuine taste of home to relatives abroad.',
    image: '/images/products/tasting_trio_box.jpg',
    rating: 5.0,
    reviewCount: 64,
    dietary: 'non-veg',
    spiciness: 4,
    netWeightDefault: '750g (3 x 250g)',
    shelfLife: '6-12 Months',
    storage: 'Refer to individual jar instructions.',
    ingredients: [
      '1x 250g Signature Cut Mango Pickle',
      '1x 250g Fresh Coastal Prawn Pickle',
      '1x 250g Tangy Lime Pickle',
      'Eco-friendly presentation box with tasting guide'
    ],
    variants: [
      { size: '3 x 250g Box', price: 680, inStock: true, packageType: 'Presentation Box Set' }
    ]
  },
  {
    id: 'va-spice-01',
    slug: 'authentic-sambar-powder',
    name: 'Stone-Ground Kerala Sambar Powder',
    nameMalayalam: 'നാടൻ വറുത്തരച്ച സാമ്പാർ പൊടി',
    category: 'spices',
    badge: '100% Roasted Spices',
    tagline: 'Slow-roasted coriander, Kashmiri chili, chana dal & aromatic spices.',
    description: 'Whole spices slow-roasted individually on cast-iron skillets with fresh curry leaves and stone-milled to preserve essential aromatic oils. Gives authentic Kerala Sadya-style fragrance to your sambar.',
    image: '/images/categories/spices.jpg',
    rating: 4.8,
    reviewCount: 29,
    dietary: 'veg',
    spiciness: 2,
    netWeightDefault: '250g',
    shelfLife: '9 Months',
    storage: 'Keep in an airtight container away from moisture.',
    ingredients: [
      'Coriander seeds',
      'Byadgi red chilies',
      'Roasted chana dal & urad dal',
      'Cumin & fenugreek seeds',
      'Whole black pepper',
      'Turmeric',
      'Curry leaves',
      'Asafoetida'
    ],
    variants: [
      { size: '100g Pouch', price: 90, inStock: true, packageType: 'Zip-Lock Aroma Pack' },
      { size: '250g Jar', price: 210, inStock: true, packageType: 'Sealed Spice Tin' }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products', count: PRODUCTS.length },
  { id: 'vegetarian', label: 'Vegetarian Pickles', count: PRODUCTS.filter(p => p.category === 'vegetarian').length },
  { id: 'non-vegetarian', label: 'Non-Vegetarian Pickles', count: PRODUCTS.filter(p => p.category === 'non-vegetarian').length },
  { id: 'spices', label: 'Spice Powders', count: PRODUCTS.filter(p => p.category === 'spices').length },
  { id: 'combos', label: 'Gift & Combo Boxes', count: PRODUCTS.filter(p => p.category === 'combos').length },
];
