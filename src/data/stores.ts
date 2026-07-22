import { StoreLocation } from '../types';

export const STORES: StoreLocation[] = [
  {
    id: 'lahore-flagship',
    city: 'Lahore',
    name: 'Barn.pk Flagship Organic Experience Store',
    address: '42-C, MM Alam Road, Gulberg III',
    area: 'Gulberg III',
    phone: '+92 42 3578 9911',
    hours: 'Mon - Sun: 10:00 AM - 10:00 PM',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    features: ['Raw Honey Tasting Bar', 'Fresh Cold-Pressing Station', 'Apothecary Consultation', 'In-Store Refill Station'],
    isFlagship: true
  },
  {
    id: 'islamabad-dha',
    city: 'Islamabad',
    name: 'Barn.pk Capital Wellness Emporium',
    address: 'Shop 14, F-6 Markaz, Super Market',
    area: 'F-6 Markaz',
    phone: '+92 51 2891 0022',
    hours: 'Mon - Sun: 10:00 AM - 9:30 PM',
    image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&q=80&w=800',
    features: ['Custom Oil Blending', 'Certified Organic Honey Vault', 'Gift Box Customization']
  },
  {
    id: 'karachi-clifton',
    city: 'Karachi',
    name: 'Barn.pk Coastal Organic Lounge',
    address: 'Block 4, Clifton, near Dolmen Mall',
    area: 'Clifton',
    phone: '+92 21 3589 4433',
    hours: 'Mon - Sun: 11:00 AM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800',
    features: ['Shilajit Purity Demonstration', 'Dermatology Herb Consults', 'Pick-Up Counter']
  },
  {
    id: 'peshawar-cantt',
    city: 'Peshawar',
    name: 'Barn.pk Khyber Heritage Vault',
    address: 'Saddar Road, Peshawar Cantt',
    area: 'Saddar',
    phone: '+92 91 5271 8844',
    hours: 'Mon - Sat: 10:00 AM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    features: ['Direct Mountain Honey Origin Display', 'Wholesale Inquiry Counter']
  }
];
