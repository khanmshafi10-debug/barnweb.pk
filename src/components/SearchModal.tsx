import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Search, X, Sparkles, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onQuickView
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesName = product.name.toLowerCase().includes(q);
    const matchesSubtitle = product.subtitle.toLowerCase().includes(q);
    const matchesOrigin = product.origin.toLowerCase().includes(q);
    const matchesSubcat = product.subcategory?.toLowerCase().includes(q);
    const matchesIngredients = product.ingredients.some((ing) =>
      ing.toLowerCase().includes(q)
    );
    const matchesConcerns = product.concerns?.some((c) =>
      c.toLowerCase().includes(q)
    );

    return (
      matchesCategory &&
      (matchesName ||
        matchesSubtitle ||
        matchesOrigin ||
        matchesSubcat ||
        matchesIngredients ||
        matchesConcerns)
    );
  });

  const POPULAR_TAGS = ['Sidr Honey', 'Shilajit', 'Rosemary Oil', 'Saffron Mask', 'A2 Ghee', 'Rose Water', 'Hair Fall', 'Immunity'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-[#FAF8F4] rounded-2xl shadow-2xl border border-[#4A5D50]/20 overflow-hidden flex flex-col max-h-[85vh] z-10">
        
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 border-b border-[#4A5D50]/15 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#4A5D50]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by ingredient, remedy (e.g. Sidr, Shilajit, Rosemary, Hair Fall)..."
            className="flex-1 bg-transparent border-none text-sm sm:text-base text-[#2B2E2C] focus:outline-none placeholder:text-[#2B2E2C]/50 font-sans"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#2B2E2C]/50 hover:text-[#2B2E2C] text-xs font-bold px-2 py-1 bg-black/5 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#2B2E2C]/70"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pill Filters */}
        <div className="px-4 py-3 bg-[#FAF8F4] border-b border-[#4A5D50]/10 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="font-bold text-[#2B2E2C]/60 shrink-0">Filter:</span>
          {[
            { id: 'all', label: 'All Products' },
            { id: 'grown', label: 'Nature & Foods' },
            { id: 'restored', label: 'Minerals & Shilajit' },
            { id: 'oils', label: 'Cold-Pressed Oils' },
            { id: 'skincare', label: 'Botanical Skincare' },
            { id: 'teas', label: 'Organic Teas' },
            { id: 'bundles', label: 'Value Bundles' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-all font-semibold ${
                selectedCategory === cat.id
                  ? 'bg-[#4A5D50] text-[#FAF8F4]'
                  : 'bg-white text-[#2B2E2C]/70 border border-[#4A5D50]/15 hover:border-[#4A5D50]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Suggestion Tags if query empty */}
        {!query && (
          <div className="px-5 py-3 bg-white/50 border-b border-[#4A5D50]/10 text-xs flex items-center gap-2 flex-wrap">
            <span className="text-[#C9962F] font-bold flex items-center gap-1 shrink-0">
              <Sparkles className="w-3 h-3" />
              Popular Searches:
            </span>
            {POPULAR_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 bg-white border border-[#4A5D50]/10 rounded-md text-[#2B2E2C]/80 hover:text-[#4A5D50] hover:border-[#4A5D50] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Search Results List */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="font-serif text-lg text-[#2B2E2C]">No organic products match "{query}"</p>
              <p className="text-xs text-[#2B2E2C]/60">Try searching for Sidr, Shilajit, Rosemary, Ghee, or Hair Fall</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-3 rounded-xl bg-white border border-[#4A5D50]/10 hover:border-[#4A5D50]/30 shadow-2xs hover:shadow-sm transition-all flex items-center justify-between gap-4 group"
              >
                <div
                  className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                  onClick={() => {
                    onQuickView(product);
                    onClose();
                  }}
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#4A5D50]/10">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      fallbackTitle={product.name}
                      category={product.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9962F]">
                      {product.categoryName}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#2B2E2C] group-hover:text-[#4A5D50] transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#2B2E2C]/70 truncate">{product.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <span className="font-serif text-base font-bold text-[#2B2E2C]">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#2B2E2C]/50 line-through block">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="p-2 rounded-xl bg-[#4A5D50] text-[#FAF8F4] hover:bg-[#C9962F] transition-colors"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAF8F4] border-t border-[#4A5D50]/15 text-center text-xs text-[#2B2E2C]/60 flex items-center justify-between px-5">
          <span>Showing <strong>{filteredProducts.length}</strong> natural products</span>
          <Link
            to="/shop"
            onClick={onClose}
            className="font-bold text-[#4A5D50] hover:text-[#C9962F] flex items-center gap-1"
          >
            Explore Full Catalog <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
