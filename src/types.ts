export type ProductCategory = 'grown' | 'restored' | 'skincare' | 'oils' | 'teas' | 'bundles'; 
// grown = Nature/Foods, restored = Minerals/Supplements, skincare = Botanical Care, oils = Cold-Pressed Oils, teas = Organic Teas, bundles = Value Kits

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory; 
  categoryName: string; // e.g. "Grown • Pure Foods", "Restored • Botanical Health", "Cold-Pressed Oils"
  subcategory?: string; // e.g. "Honey", "Shilajit", "Hair Oil", "Facial Care", "Tea"
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
  origin: string;
  volumeOrWeight: string;
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  concerns?: string[]; // e.g. ['Hair Fall', 'Acne', 'Immunity', 'Stress', 'Fatigue', 'Glowing Skin']
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: ProductCategory | 'lifestyle';
  categoryLabel: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  productUsed: string;
  rating: number;
  verified: boolean;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'sourcing' | 'shipping' | 'usage' | 'orders' | 'quality';
}

export interface StoreLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  area: string;
  phone: string;
  hours: string;
  image: string;
  mapEmbedUrl?: string;
  features: string[];
  isFlagship?: boolean;
}

export interface LabCertificate {
  id: string;
  batchNumber: string;
  productName: string;
  testDate: string;
  labName: string;
  purityScore: string;
  keyMetrics: { label: string; value: string; status: 'Pass' | 'Optimal' }[];
  pdfUrl?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    icon?: string;
    tag: string;
    description: string;
  }[];
}

