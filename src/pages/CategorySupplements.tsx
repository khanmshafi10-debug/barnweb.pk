import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { LuxuryHeroCard } from '../components/LuxuryHeroCard';
import { Product } from '../types';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { CategoryExtraSections } from '../components/CategoryExtraSections';

interface CategorySupplementsProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
}

export const CategorySupplements: React.FC<CategorySupplementsProps> = ({
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlistIds = []
}) => {
  const [selectedSubcat, setSelectedSubcat] = useState<string>('all');

  const supplementProducts = PRODUCTS.filter(
    (p) => p.category === 'supplements' || p.subcategoryId === 'shilajit' || p.subcategoryId === 'ashwagandha' || p.subcategoryId === 'moringa' || p.subcategoryId === 'pollen'
  );

  const filteredProducts = supplementProducts.filter((p) => {
    if (selectedSubcat === 'all') return true;
    return p.subcategoryId === selectedSubcat || p.subcategory?.toLowerCase().includes(selectedSubcat.toLowerCase());
  });

  const SUBCATEGORIES = [
    { id: 'all', name: 'All Organic Supplements', count: supplementProducts.length, path: '/supplements' },
    { id: 'shilajit', name: 'Shilajit & Mineral Pitch', count: PRODUCTS.filter(p => p.subcategoryId === 'shilajit').length, path: '/sub/shilajit' },
    { id: 'ashwagandha', name: 'Ashwagandha & Adaptogens', count: PRODUCTS.filter(p => p.subcategoryId === 'ashwagandha').length, path: '/sub/ashwagandha' },
    { id: 'moringa', name: 'Moringa & Superfoods', count: PRODUCTS.filter(p => p.subcategoryId === 'moringa').length, path: '/sub/moringa' },
    { id: 'pollen', name: 'Bee Pollen & Immunity', count: PRODUCTS.filter(p => p.subcategoryId === 'pollen').length, path: '/sub/pollen' }
  ];

  const featuredProduct = supplementProducts[0];

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
                <span>Restored • High-Altitude Bioactive Line</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Organic Mountain <span className="text-[#C9962F] italic font-normal">Supplements</span> & Bioactive Minerals
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-xl">
                Harvested from rocky escarpments above 16,000 ft in Gilgit-Baltistan and shade-dried organic botanicals. Formulated to enhance cellular stamina, deepen sleep, and restore metabolic vigor.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-[#C9962F]" />
                  100% PCSIR Lab Certified
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <Zap className="w-4 h-4 text-[#C9962F]" />
                  60%+ Bioactive Fulvic Acid
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                  <Sparkles className="w-4 h-4 text-[#C9962F]" />
                  Zero Synthetic Solvents
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
            <span className="font-bold text-[#45566B] uppercase tracking-wider shrink-0 mr-2">
              Subcategories:
            </span>
            {SUBCATEGORIES.map((sub) => (
              <React.Fragment key={sub.id}>
                {sub.path ? (
                  <Link
                    to={sub.path}
                    className="px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all shrink-0 cursor-pointer bg-[#FAF8F4] text-[#2B2E2C]/80 border border-[#4A5D50]/15 hover:border-[#45566B] hover:bg-[#45566B]/5"
                  >
                    {sub.name} <span className="ml-1 text-[10px] opacity-75">({sub.count})</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => setSelectedSubcat(sub.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all shrink-0 cursor-pointer ${
                      selectedSubcat === sub.id
                        ? 'bg-[#45566B] text-white shadow-sm'
                        : 'bg-[#FAF8F4] text-[#2B2E2C]/80 border border-[#4A5D50]/15 hover:border-[#45566B] hover:bg-[#45566B]/5'
                    }`}
                  >
                    {sub.name} <span className="ml-1 text-[10px] opacity-75">({sub.count})</span>
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Subcategories Visual Cards */}
      <section className="py-12 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#2B2E2C]">
              Explore Dedicated Bioactive Supplement Pages
            </h2>
            <p className="text-xs sm:text-sm text-[#2B2E2C]/70 max-w-lg mx-auto">
              Click any subcategory below to access its dedicated deep-dive page, lab reports, and usage protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#45566B]/10 text-[#45566B] flex items-center justify-center font-serif text-xl font-bold">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Shilajit & Mineral Pitch</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Purified high-altitude mineral resin loaded with 85+ ionic minerals and fulvic acid for ATP energy.
              </p>
              <Link
                to="/sub/shilajit"
                className="text-xs font-bold text-[#45566B] hover:text-[#C9962F] flex items-center gap-1"
              >
                View Shilajit Page <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#45566B]/10 text-[#45566B] flex items-center justify-center font-serif text-xl font-bold">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Ashwagandha & Adaptogens</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Root extracts rich in withanolides formulated to lower cortisol and restore calm nervous equilibrium.
              </p>
              <Link
                to="/sub/ashwagandha"
                className="text-xs font-bold text-[#45566B] hover:text-[#C9962F] flex items-center gap-1"
              >
                View Adaptogens Page <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#45566B]/10 text-[#45566B] flex items-center justify-center font-serif text-xl font-bold">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Moringa Superfood</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Shade-dried green leaf powders packed with vitamin C, iron, and natural non-caffeinated vitality.
              </p>
              <Link
                to="/sub/moringa"
                className="text-xs font-bold text-[#45566B] hover:text-[#C9962F] flex items-center gap-1"
              >
                View Moringa Page <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#45566B]/10 text-[#45566B] flex items-center justify-center font-serif text-xl font-bold">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Wild Bee Pollen</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Raw mountain blossom granules rich in amino acids, live enzymes, and immune-building bioflavonoids.
              </p>
              <Link
                to="/sub/pollen"
                className="text-xs font-bold text-[#45566B] hover:text-[#C9962F] flex items-center gap-1"
              >
                View Pollen Page <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
                Supplement Catalog
              </h2>
              <p className="text-xs text-[#2B2E2C]/70 mt-0.5">
                Showing <strong>{filteredProducts.length}</strong> certified bioactive formulations
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

      {/* 5. Educational Deep-Dive Section */}
      <section className="py-16 bg-[#243547] text-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9962F]">
                PCSIR Lab Verification & Purity
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Why High-Altitude Shilajit & Botanicals Outperform Synthetic Pills
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Synthetic mineral isolates lack organic chelation, making them difficult for human cells to absorb. Our Gilgit Shilajit pitch contains natural fulvic and humic complexes that transport minerals directly across cellular membranes with zero artificial binders.
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Sun-cured and purified with pure mountain spring water</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Tested for heavy metals, microbial safety, and fulvic percentage</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Packaged in biophotonic dark Miron glass to preserve bio-energy</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/certifications">
                  <Button variant="gold" size="md">
                    View PCSIR Lab Reports
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shilajit Lab Testing"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive 9-Section Content Deep-Dive */}
      <CategoryExtraSections categoryKey="supplements" />

    </div>
  );
};
