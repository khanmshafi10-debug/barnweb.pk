import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { BundleBuilder } from '../components/BundleBuilder';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Search, Filter, SlidersHorizontal, Sparkles, Sprout, Droplets, Flower2, Coffee, Gift } from 'lucide-react';

interface ShopProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
}

export const Shop: React.FC<ShopProps> = ({
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlistIds = []
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [activeTab, setActiveTab] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // Sync tab with URL parameter change
  React.useEffect(() => {
    if (categoryParam) {
      setActiveTab(categoryParam);
    }
  }, [categoryParam]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams(tab === 'all' ? {} : { category: tab });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Tab Filter
      if (activeTab === 'grown' && product.category !== 'grown') return false;
      if (activeTab === 'restored' && product.category !== 'restored') return false;
      if (activeTab === 'oils' && product.category !== 'oils') return false;
      if (activeTab === 'skincare' && product.category !== 'skincare') return false;
      if (activeTab === 'teas' && product.category !== 'teas') return false;
      if (activeTab === 'bundles' && product.category !== 'bundles') return false;
      if (activeTab === 'bestseller' && !product.isBestseller) return false;

      // Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSub = product.subtitle.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesOrigin = product.origin.toLowerCase().includes(query);
        const matchesIngredients = product.ingredients.some((i) => i.toLowerCase().includes(query));
        return matchesName || matchesSub || matchesDesc || matchesOrigin || matchesIngredients;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }, [activeTab, searchQuery, sortBy]);

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <BarnRoofMotif color="#C9962F" height={16} className="mx-auto" />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            The Complete Barn.pk Harvest Pantry
          </h1>
          <p className="text-xs sm:text-base text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            Unheated Sidr Honeys, High-Altitude Shilajit, Cold-Pressed Essential Oils, and Botanical Skincare formulated for purity.
          </p>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-[#4A5D50]/15">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `All Range (${PRODUCTS.length})` },
              { id: 'grown', label: 'Foods & Honey', icon: Sprout },
              { id: 'restored', label: 'Shilajit & Minerals', icon: Sparkles },
              { id: 'oils', label: 'Cold-Pressed Oils', icon: Droplets },
              { id: 'skincare', label: 'Botanical Skincare', icon: Flower2 },
              { id: 'teas', label: 'Organic Teas', icon: Coffee },
              { id: 'bundles', label: 'Value Bundles', icon: Gift },
              { id: 'bestseller', label: '⭐ Bestsellers' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#4A5D50] text-[#FAF8F4] shadow-md'
                      : 'bg-white text-[#2B2E2C]/80 border border-[#4A5D50]/20 hover:border-[#4A5D50]'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-[#C9962F]" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#2B2E2C]/50 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search Sidr, Shilajit, Rosemary..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-[#4A5D50]/20 rounded-xl text-xs text-[#2B2E2C] placeholder-[#2B2E2C]/50 focus:outline-none focus:border-[#4A5D50]"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-[#4A5D50] shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#4A5D50]/20 rounded-xl px-3 py-2 text-xs font-semibold text-[#2B2E2C] focus:outline-none focus:border-[#4A5D50] w-full sm:w-auto"
              >
                <option value="featured">Sort: Featured Harvests</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>
          </div>

        </div>

      </section>

      {/* Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#4A5D50]/15 space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">No natural products found</h3>
            <p className="text-xs text-[#2B2E2C]/70">Try adjusting your search terms or category filters.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#4A5D50] underline hover:text-[#C9962F]"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
              />
            ))}
          </div>
        )}

        {/* Bundle Builder Interactive Section */}
        <BundleBuilder onAddToCart={onAddToCart} />

      </section>

    </div>
  );
};
