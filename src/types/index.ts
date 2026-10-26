export type ProductCategory = 'all' | 'vegetarian' | 'non-vegetarian' | 'spices' | 'combos';

export interface ProductVariant {
  size: string; // e.g. "250g", "400g", "1kg"
  price: number; // in INR
  inStock: boolean;
  packageType: string; // e.g. "Glass Jar", "Food-grade Pouch"
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameMalayalam: string;
  category: 'vegetarian' | 'non-vegetarian' | 'spices' | 'combos';
  badge?: string; // e.g. "Signature Flagship", "Best Seller", "Coastal Special"
  tagline: string;
  description: string;
  storyNote?: string;
  image: string;
  secondaryImage?: string;
  rating: number; // e.g. 4.9
  reviewCount: number;
  variants: ProductVariant[];
  ingredients: string[];
  dietary: 'veg' | 'non-veg';
  spiciness: 1 | 2 | 3 | 4 | 5; // flame scale
  netWeightDefault: string;
  shelfLife: string;
  storage: string;
  isSpecialty?: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  selectedSize: string;
  price: number;
  quantity: number;
}

export interface BulkEnquiryData {
  name: string;
  organization?: string;
  phone: string;
  email: string;
  productInterest: string;
  quantityKg: string;
  destination: string;
  message: string;
}
