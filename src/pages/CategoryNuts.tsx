import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { LuxuryHeroCard } from '../components/LuxuryHeroCard';
import { Product } from '../types';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Sun, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { CategoryExtraSections } from '../components/CategoryExtraSections';

interface CategoryNutsProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
}

export const CategoryNuts: React.FC<CategoryNutsProps> = ({
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlistIds = []
}) => {
  const [selectedSubcat, setSelectedSubcat] = useState<string>('all');

  const nutProducts = PRODUCTS.filter(
    (p) => p.category === 'nuts' || p.subcategoryId === 'walnut' || p.subcategoryId === 'pista' || p.subcategoryId === 'almond' || p.subcategoryId === 'chilgoza' || p.subcategoryId === 'apricot'
  );

  const filteredProducts = nutProducts.filter((p) => {
    if (selectedSubcat === 'all') return true;
    return p.subcategoryId === selectedSubcat || p.subcategory?.toLowerCase().includes(selectedSubcat.toLowerCase());
  });

  const SUBCATEGORIES = [
    { id: 'all', name: 'All Organic Dry Fruits & Nuts', count: nutProducts.length },
    { id: 'walnut', name: 'Hunza Raw Walnuts (Akhrot)', count: PRODUCTS.filter(p => p.subcategoryId === 'walnut').length },
    { id: 'pista', name: 'Gilgit Salted Pistachios (Pista)', count: PRODUCTS.filter(p => p.subcategoryId === 'pista').length },
    { id: 'almond', name: 'Quetta Raw Almonds (Badam)', count: PRODUCTS.filter(p => p.subcategoryId === 'almond').length },
    { id: 'chilgoza', name: 'Kashmir Pine Nuts (Chilgoza)', count: PRODUCTS.filter(p => p.subcategoryId === 'chilgoza').length }
  ];

  const featuredProduct = nutProducts[0];

  return (
    <div className="space-y-0 bg-[#FAF8F4] min-h-screen">
      
      {/* Category Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#1B271E] via-[#2B3B2E] to-[#152017] text-[#FBFCFC] py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FDD229]/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2B3B2E]/40 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C9962F]/40 text-[#C9962F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <BarnRoofMotif color="#C9962F" height={12} />
                <span>Grown • High-Altitude Mountain Harvest</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Hunza Mountain <span className="text-[#C9962F] italic font-normal">Dry Fruits</span> & Organic Nuts
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-xl">
                Hand-shelled light amber Hunza walnuts, roasted Gilgit pistachios, and Quetta sweet almonds harvested from pesticide-free high-altitude mountain groves.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-[#C9962F]" />
                  100% Unbleached & Chemical-Free
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <Heart className="w-4 h-4 text-[#C9962F]" />
                  Rich in Omega-3 (ALA) & Fiber
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <Sparkles className="w-4 h-4 text-[#C9962F]" />
                  Nitrogen-Sealed Vacuum Freshness
                </span>
              </div>
            </div>

            {/* Right Side — Luxury Floating Card In Front */}
            <div className="lg:col-span-5">
              {featuredProduct && (
                <LuxuryHeroCard
                  image={featuredProduct.image}
                  title={featuredProduct.name}
                  subtitle={featuredProduct.subtitle}
                  price={featuredProduct.price}
                  originalPrice={featuredProduct.originalPrice}
                  volumeOrWeight={featuredProduct.volumeOrWeight}
                  productId={featuredProduct.id}
                  onAddToCart={() => onAddToCart(featuredProduct)}
                  onToggleWishlist={() => onToggleWishlist && onToggleWishlist(featuredProduct.id)}
                  isWishlisted={wishlistIds.includes(featuredProduct.id)}
                  badge={featuredProduct.badge || 'PCSIR Certified'}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Subcategory Navigation Bar */}
      <section className="bg-white border-b border-[#4A5D50]/15 sticky top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 text-xs">
            <span className="font-bold text-[#382D24] uppercase tracking-wider shrink-0 mr-2">
              Subcategories:
            </span>
            {SUBCATEGORIES.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcat(sub.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all shrink-0 cursor-pointer ${
                  selectedSubcat === sub.id
                    ? 'bg-[#382D24] text-white shadow-sm'
                    : 'bg-[#FAF8F4] text-[#2B2E2C]/80 border border-[#4A5D50]/15 hover:border-[#382D24] hover:bg-[#382D24]/5'
                }`}
              >
                {sub.name} <span className="ml-1 text-[10px] opacity-75">({sub.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Subcategories Visual Cards */}
      <section className="py-12 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#2B2E2C]">
              Explore Premium Mountain Nut Harvests
            </h2>
            <p className="text-xs sm:text-sm text-[#2B2E2C]/70 max-w-lg mx-auto">
              Sourced from Northern valleys famous for longevity and natural nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#382D24]/10 text-[#382D24] flex items-center justify-center font-serif text-xl font-bold">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Hunza Walnuts (Akhrot)</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Light amber paper-shell halves loaded with ALA Omega-3s and antioxidants for brain health.
              </p>
              <button
                onClick={() => setSelectedSubcat('walnut')}
                className="text-xs font-bold text-[#382D24] hover:text-[#C9962F] flex items-center gap-1"
              >
                Browse Walnuts <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#382D24]/10 text-[#382D24] flex items-center justify-center font-serif text-xl font-bold">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Gilgit Pistachios (Pista)</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Jumbo naturally split pistachios dry roasted with Himalayan pink salt.
              </p>
              <button
                onClick={() => setSelectedSubcat('pista')}
                className="text-xs font-bold text-[#382D24] hover:text-[#C9962F] flex items-center gap-1"
              >
                Browse Pistachios <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#382D24]/10 text-[#382D24] flex items-center justify-center font-serif text-xl font-bold">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Quetta Almonds (Badam)</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Sweet raw almonds high in natural oil content and vitamin E for daily brain & skin nourishment.
              </p>
              <button
                onClick={() => setSelectedSubcat('almond')}
                className="text-xs font-bold text-[#382D24] hover:text-[#C9962F] flex items-center gap-1"
              >
                Browse Almonds <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#382D24]/10 text-[#382D24] flex items-center justify-center font-serif text-xl font-bold">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Kashmir Pine Nuts (Chilgoza)</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Wild harvested pine nuts with buttery crunch and rich healthy monounsaturated fats.
              </p>
              <button
                onClick={() => setSelectedSubcat('chilgoza')}
                className="text-xs font-bold text-[#382D24] hover:text-[#C9962F] flex items-center gap-1"
              >
                Browse Chilgoza <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Catalog Listing */}
      <section className="py-12 bg-white border-t border-[#4A5D50]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#4A5D50]/15">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2B2E2C]">
                Mountain Nut & Dry Fruit Catalog
              </h2>
              <p className="text-xs text-[#2B2E2C]/70 mt-0.5">
                Showing <strong>{filteredProducts.length}</strong> raw vacuum-sealed items
              </p>
            </div>
          </div>

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
        </div>
      </section>

      {/* 5. Educational Deep-Dive */}
      <section className="py-16 bg-[#29221B] text-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9962F]">
                Hunza Valley Longevity Nutrition
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Why High-Altitude Sun-Dried Nuts Retain Maximum Omega-3 & Vitamin E
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Hunza Valley is globally famous for the healthy longevity of its inhabitants. Grown at altitudes over 8,000 feet in crystal glacier water, our walnuts and almonds develop dense cell structures filled with protective antioxidant polyphenols and essential fatty acids.
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>100% unbleached paper-shell nuts shelled fresh per batch</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Vacuum nitrogen pouch sealing to eliminate rancidity</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Zero sulfur dioxide bleaching or artificial oil coating</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/shop">
                  <Button variant="gold" size="md">
                    Shop Full Mountain Harvest
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organic Nuts & Dry Fruits"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive 9-Section Content Deep-Dive */}
      <CategoryExtraSections categoryKey="nuts" />

    </div>
  );
};
