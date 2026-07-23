import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { LuxuryHeroCard } from '../components/LuxuryHeroCard';
import { Product } from '../types';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { CategoryExtraSections } from '../components/CategoryExtraSections';

interface CategorySpicesProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
}

export const CategorySpices: React.FC<CategorySpicesProps> = ({
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlistIds = []
}) => {
  const [selectedSubcat, setSelectedSubcat] = useState<string>('all');

  const spiceProducts = PRODUCTS.filter(
    (p) => p.category === 'spices' || p.subcategoryId === 'saffron' || p.subcategoryId === 'haldi' || p.subcategoryId === 'chili' || p.subcategoryId === 'whole'
  );

  const filteredProducts = spiceProducts.filter((p) => {
    if (selectedSubcat === 'all') return true;
    return p.subcategoryId === selectedSubcat || p.subcategory?.toLowerCase().includes(selectedSubcat.toLowerCase());
  });

  const SUBCATEGORIES = [
    { id: 'all', name: 'All Organic Spices', count: spiceProducts.length },
    { id: 'saffron', name: 'Pamir Kashmiri Saffron (Zafran)', count: PRODUCTS.filter(p => p.subcategoryId === 'saffron').length },
    { id: 'haldi', name: 'Kasur Lakadong Haldi (Turmeric)', count: PRODUCTS.filter(p => p.subcategoryId === 'haldi').length },
    { id: 'chili', name: 'Kunri Mathania Red Chili', count: PRODUCTS.filter(p => p.subcategoryId === 'chili').length },
    { id: 'whole', name: 'Swat Whole Ceylon Cinnamon', count: PRODUCTS.filter(p => p.subcategoryId === 'whole').length }
  ];

  const featuredProduct = spiceProducts[0];

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
                <span>Grown • Farm Spice Harvest</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Unadulterated Farm <span className="text-[#C9962F] italic font-normal">Spices</span> & Pure Saffron
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-xl">
                Slow stone-milled spices harvested from organic family farms in Kasur, Pamir, and Swat. Free from synthetic yellow dyes, lead chromate, starch fillers, or high-heat commercial processing.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-[#C9962F]" />
                  100% Pure Stone-Milled
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <Flame className="w-4 h-4 text-[#C9962F]" />
                  Grade-1 Pamir Saffron
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <Sparkles className="w-4 h-4 text-[#C9962F]" />
                  Zero Artificial Dyes
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
            <span className="font-bold text-[#4A2E1D] uppercase tracking-wider shrink-0 mr-2">
              Subcategories:
            </span>
            {SUBCATEGORIES.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcat(sub.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all shrink-0 cursor-pointer ${
                  selectedSubcat === sub.id
                    ? 'bg-[#C9962F] text-white shadow-sm'
                    : 'bg-[#FAF8F4] text-[#2B2E2C]/80 border border-[#4A5D50]/15 hover:border-[#C9962F] hover:bg-[#C9962F]/5'
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
              Authentic Pakistani & Pamir Spice Collections
            </h2>
            <p className="text-xs sm:text-sm text-[#2B2E2C]/70 max-w-lg mx-auto">
              Preserving essential aromatic oils through traditional granite stone crushing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C9962F]/10 text-[#C9962F] flex items-center justify-center font-serif text-xl font-bold">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Kashmiri & Pamir Saffron</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Deep red Grade-1 Sargol filaments hand-harvested from crocus blossoms for aroma and radiance.
              </p>
              <button
                onClick={() => setSelectedSubcat('saffron')}
                className="text-xs font-bold text-[#C9962F] hover:text-[#2B2E2C] flex items-center gap-1"
              >
                Browse Saffron <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C9962F]/10 text-[#C9962F] flex items-center justify-center font-serif text-xl font-bold">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Organic Haldi & Turmeric</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Stone-ground raw turmeric containing 5%+ natural curcumin for intense color and anti-inflammatory benefit.
              </p>
              <button
                onClick={() => setSelectedSubcat('haldi')}
                className="text-xs font-bold text-[#C9962F] hover:text-[#2B2E2C] flex items-center gap-1"
              >
                Browse Haldi <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C9962F]/10 text-[#C9962F] flex items-center justify-center font-serif text-xl font-bold">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Hand-Pounded Chilis</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Coarsely pounded Kashmiri red chilis offering vivid natural red hue and warm balanced heat.
              </p>
              <button
                onClick={() => setSelectedSubcat('chili')}
                className="text-xs font-bold text-[#C9962F] hover:text-[#2B2E2C] flex items-center gap-1"
              >
                Browse Chilis <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C9962F]/10 text-[#C9962F] flex items-center justify-center font-serif text-xl font-bold">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Whole Spices & Darchini</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Sun-dried Ceylon cinnamon quills, green cardamom, and cumin seeds rich in natural aromatic oils.
              </p>
              <button
                onClick={() => setSelectedSubcat('whole')}
                className="text-xs font-bold text-[#C9962F] hover:text-[#2B2E2C] flex items-center gap-1"
              >
                Browse Whole Spices <ArrowRight className="w-3.5 h-3.5" />
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
                Organic Farm Spice Catalog
              </h2>
              <p className="text-xs text-[#2B2E2C]/70 mt-0.5">
                Showing <strong>{filteredProducts.length}</strong> stone-ground natural items
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
      <section className="py-16 bg-[#3B2519] text-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9962F]">
                Cold Stone Milling vs High-Heat Mills
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                How We Protect Volatile Essential Oils in Farm Spices
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Commercial spice factories run high-speed steel mills that heat spices above 80°C, burning off fragile essential oils and curcumin. At Barn.pk, our spices are ground on slow granite stones at ambient temperatures, preserving full flavor, therapeutic aroma, and natural color.
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Zero synthetic yellow chromate or starch adulteration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>100% pure whole spice roots ground in small batch lots</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Sealed in triple-foil aroma lock pouches for maximum freshness</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/shop">
                  <Button variant="gold" size="md">
                    Explore Spice Range
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                alt="Farm Spices"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive 9-Section Content Deep-Dive */}
      <CategoryExtraSections categoryKey="spices" />

    </div>
  );
};
