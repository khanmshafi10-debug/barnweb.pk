import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Sun, CheckCircle2, ArrowRight } from 'lucide-react';
import { CategoryExtraSections } from '../components/CategoryExtraSections';

interface CategoryPicklesProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
}

export const CategoryPickles: React.FC<CategoryPicklesProps> = ({
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlistIds = []
}) => {
  const [selectedSubcat, setSelectedSubcat] = useState<string>('all');

  const pickleProducts = PRODUCTS.filter(
    (p) => p.category === 'pickles' || p.subcategoryId === 'mango' || p.subcategoryId === 'lemon' || p.subcategoryId === 'garlic' || p.subcategoryId === 'chutney'
  );

  const filteredProducts = pickleProducts.filter((p) => {
    if (selectedSubcat === 'all') return true;
    return p.subcategoryId === selectedSubcat || p.subcategory?.toLowerCase().includes(selectedSubcat.toLowerCase());
  });

  const SUBCATEGORIES = [
    { id: 'all', name: 'All Desi Pickles & Chutneys', count: pickleProducts.length },
    { id: 'mango', name: 'Raw Mango Achar (Aam)', count: PRODUCTS.filter(p => p.subcategoryId === 'mango').length },
    { id: 'lemon', name: 'Lemon & Green Chili Pickle', count: PRODUCTS.filter(p => p.subcategoryId === 'lemon').length },
    { id: 'garlic', name: 'Garlic & Ginger Relish', count: PRODUCTS.filter(p => p.subcategoryId === 'garlic').length },
    { id: 'chutney', name: 'Tamarind & Plum Chutney', count: PRODUCTS.filter(p => p.subcategoryId === 'chutney').length }
  ];

  return (
    <div className="space-y-0 bg-[#FAF8F4] min-h-screen">
      
      {/* Category Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#1B271E] via-[#2B3B2E] to-[#152017] text-[#FBFCFC] py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FDD229]/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2B3B2E]/40 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C9962F]/40 text-[#C9962F] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <BarnRoofMotif color="#C9962F" height={12} />
              <span>Grown • Handcrafted Pantry</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Handcrafted <span className="text-[#C9962F]">Desi Pickles</span> & Tangy Chutneys
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-sans">
              Hand-sliced raw green mangoes, farm lemons, and chilis cured in earthen pots for 45 days. Preserved exclusively in cold-pressed mustard oil with whole roasted kalonji and fennel.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Sun className="w-4 h-4 text-[#C9962F]" />
                100% Sun-Cured Earthen Ferment
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="w-4 h-4 text-[#C9962F]" />
                Cold-Pressed Mustard Oil Base
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <Sparkles className="w-4 h-4 text-[#C9962F]" />
                Zero Synthetic Vinegar or Acid
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Subcategory Navigation Bar */}
      <section className="bg-white border-b border-[#4A5D50]/15 sticky top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 text-xs">
            <span className="font-bold text-[#3A4B36] uppercase tracking-wider shrink-0 mr-2">
              Subcategories:
            </span>
            {SUBCATEGORIES.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcat(sub.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-bold transition-all shrink-0 cursor-pointer ${
                  selectedSubcat === sub.id
                    ? 'bg-[#3A4B36] text-white shadow-sm'
                    : 'bg-[#FAF8F4] text-[#2B2E2C]/80 border border-[#4A5D50]/15 hover:border-[#3A4B36] hover:bg-[#3A4B36]/5'
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
              Authentic Traditional Achar Formulations
            </h2>
            <p className="text-base text-[#2B2E2C]/80 max-w-lg mx-auto font-medium">
              Probiotic-rich, slow fermented, and packed with traditional digestive spices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3A4B36]/10 text-[#3A4B36] flex items-center justify-center font-serif text-xl font-bold">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">Raw Mango Achar (Aam)</h3>
              <p className="text-base text-[#2B2E2C]/85 leading-relaxed">
                Crisp green mango wedges cured with kalonji, fennel, and cold-pressed mustard oil.
              </p>
              <button
                onClick={() => setSelectedSubcat('mango')}
                className="text-sm sm:text-base font-bold text-[#3A4B36] hover:text-[#C9962F] flex items-center gap-1 mt-2"
              >
                Browse Mango Achar <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3A4B36]/10 text-[#3A4B36] flex items-center justify-center font-serif text-xl font-bold">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">Lemon & Green Chili</h3>
              <p className="text-base text-[#2B2E2C]/85 leading-relaxed">
                Zesty lemons and fiery green chilis cured with unrefined pink salt and nigella seeds.
              </p>
              <button
                onClick={() => setSelectedSubcat('lemon')}
                className="text-sm sm:text-base font-bold text-[#3A4B36] hover:text-[#C9962F] flex items-center gap-1 mt-2"
              >
                Browse Lemon Chili <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3A4B36]/10 text-[#3A4B36] flex items-center justify-center font-serif text-xl font-bold">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">Garlic & Ginger Relish</h3>
              <p className="text-base text-[#2B2E2C]/85 leading-relaxed">
                Whole organic garlic cloves and ginger juliennes pickled for digestive heat and flavor.
              </p>
              <button
                onClick={() => setSelectedSubcat('garlic')}
                className="text-sm sm:text-base font-bold text-[#3A4B36] hover:text-[#C9962F] flex items-center gap-1 mt-2"
              >
                Browse Garlic Relish <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 shadow-2xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3A4B36]/10 text-[#3A4B36] flex items-center justify-center font-serif text-xl font-bold">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Tamarind & Plum Chutneys</h3>
              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                Sweet and sour relishes simmered slow with jaggery, cumin, and dried red chilis.
              </p>
              <button
                onClick={() => setSelectedSubcat('chutney')}
                className="text-xs font-bold text-[#3A4B36] hover:text-[#C9962F] flex items-center gap-1"
              >
                Browse Chutneys <ArrowRight className="w-3.5 h-3.5" />
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
                Desi Pickle & Chutney Catalog
              </h2>
              <p className="text-xs text-[#2B2E2C]/70 mt-0.5">
                Showing <strong>{filteredProducts.length}</strong> sun-cured artisanal jars
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
      <section className="py-16 bg-[#2F3A2C] text-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9962F]">
                Traditional Earthenware Sun-Curing
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Why Cold-Pressed Mustard Oil Preserves Probiotic Goodness
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Commercial supermarket pickles rely on synthetic acetic acid (vinegar) which kills natural gut probiotics. Our pickles undergo natural lactic fermentation under the sun in glazed clay jars filled with pure cold-pressed mustard oil, unlocking probiotic enzymes that soothe digestive health.
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>100% natural mustard oil preservation without chemicals</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Hand-selected raw green mangoes from Multan orchards</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  <span>Rich source of digestive probiotics and natural enzymes</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/shop">
                  <Button variant="gold" size="md">
                    Explore All Pantry Jars
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="https://images.pexels.com/photos/4199094/pexels-photo-4199094.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Handcrafted Desi Pickles"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive 9-Section Content Deep-Dive */}
      <CategoryExtraSections categoryKey="pickles" />

    </div>
  );
};
