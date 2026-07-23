import React from 'react';
import { Link } from 'react-router-dom';
import { BarnRoofMotif } from './BarnRoofMotif';

interface CategoryItem {
  id: string;
  name: string;
  category: string;
  image: string;
}

const CHILTAN_CATEGORIES: CategoryItem[] = [
  {
    id: 'desi-ghee',
    name: 'Desi Ghee',
    category: 'grown',
    image: 'https://images.pexels.com/photos/4199094/pexels-photo-4199094.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'pure-honeys',
    name: 'Pure Honeys',
    category: 'grown',
    image: 'https://images.pexels.com/photos/1618776/pexels-photo-1618776.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'shilajit',
    name: 'Shilajit & Resin',
    category: 'restored',
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'rosemary-oils',
    name: 'Hair Oils & Serums',
    category: 'oils',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'ubtan-saffron',
    name: 'Ubtan & Saffron',
    category: 'skincare',
    image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'rose-arq',
    name: 'Pure Rose Arq',
    category: 'skincare',
    image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera Gel',
    category: 'skincare',
    image: 'https://images.pexels.com/photos/5938634/pexels-photo-5938634.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Superfood',
    category: 'restored',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'cider-vinegar',
    name: 'Apple Cider Vinegar',
    category: 'grown',
    image: 'https://images.pexels.com/photos/672051/pexels-photo-672051.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'herbal-teas',
    name: 'Herbal Teas',
    category: 'teas',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'nuts-seeds',
    name: 'Organic Nuts & Seeds',
    category: 'grown',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'wellness-bundles',
    name: 'Gift Bundles',
    category: 'bundles',
    image: 'https://images.pexels.com/photos/1618776/pexels-photo-1618776.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const ChiltanCategoryGrid: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-[#4A5D50]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <BarnRoofMotif color="#C9962F" height={14} className="mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2E2C]">
            Explore Chiltan Pure Harvest Categories
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2E2C]/70 max-w-xl mx-auto">
            Explore our complete farm-fresh pantry range from Karak Sidr honeys to Gilgit Shilajit and Swat cold-pressed oils.
          </p>
        </div>

        {/* 12-Category Studio Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {CHILTAN_CATEGORIES.map((item) => (
            <Link
              key={item.id}
              to={`/shop?category=${item.category}`}
              className="group bg-[#FAF8F4] p-4 rounded-2xl border border-[#4A5D50]/15 hover:border-[#C9962F] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white p-2 border border-black/5 shadow-2xs group-hover:scale-105 transition-transform">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <span className="font-serif text-xs font-bold text-[#2B2E2C] group-hover:text-[#4A5D50] transition-colors leading-tight">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
