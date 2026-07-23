import React from 'react';
import { Hero } from '../components/Hero';
import { SectionBlock } from '../components/SectionBlock';
import { ProductCard } from '../components/ProductCard';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQAccordion } from '../components/FAQAccordion';
import { BundleBuilder } from '../components/BundleBuilder';
import { ChiltanCategoryGrid } from '../components/ChiltanCategoryGrid';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { ArrowRight, Sparkles, ShieldCheck, Award, Leaf } from 'lucide-react';

interface HomeProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
}

export const Home: React.FC<HomeProps> = ({
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  wishlistIds = []
}) => {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <div className="space-y-0 bg-[#FAF8F4]">
      {/* 1. Hero Section with Farm Photography & Dark Slate Gradient */}
      <Hero />

      {/* 2. Intro Motto Bar (Dark Slate Green) */}
      <section className="bg-[#223126] text-[#FAF8F4] py-8 border-y border-[#C9962F]/30 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <BarnRoofMotif color="#C9962F" height={14} className="mx-auto" />
          <p className="font-serif text-lg sm:text-2xl font-medium tracking-wide max-w-3xl mx-auto italic">
            "Two lines, one commitment — unadulterated nature harvested with honor."
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#C9962F] font-semibold uppercase tracking-widest pt-2">
            <span>• Grown (Pure Foods & Honeys)</span>
            <span>• Restored (High-Altitude Shilajit)</span>
            <span>• Cold-Pressed Oils & Skincare</span>
          </div>
        </div>
      </section>

      {/* 3. Chiltan Pure Category Studio Grid */}
      <ChiltanCategoryGrid />

      {/* 4. Quick Access Feature Highlights */}
      <section className="bg-white py-10 border-b border-[#4A5D50]/10 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <Link to="/quiz" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-all group space-y-1 border border-[#4A5D50]/10">
              <Sparkles className="w-5 h-5 text-[#C9962F] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">Routine Builder Quiz</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">Find your custom remedy</span>
            </Link>

            <Link to="/supplements" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-all group space-y-1 border border-[#4A5D50]/10">
              <Leaf className="w-5 h-5 text-[#4A5D50] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">Organic Supplements</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">Shilajit & Superfoods</span>
            </Link>

            <Link to="/certifications" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-all group space-y-1 border border-[#4A5D50]/10">
              <ShieldCheck className="w-5 h-5 text-[#45566B] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">PCSIR Lab Reports</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">100% Purity Verified</span>
            </Link>

            <Link to="/rewards" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-all group space-y-1 border border-[#4A5D50]/10">
              <Award className="w-5 h-5 text-[#C9962F] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">Harvest Rewards</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">Earn points on orders</span>
            </Link>

          </div>
        </div>
      </section>

      {/* 5. Featured Bestsellers Grid */}
      <section className="py-16 bg-[#EEF2EF] border-b border-[#4A5D50]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#4A5D50]/15 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold text-[#C9962F] tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Harvest Favorites
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#2B2E2C] mt-1">
                Bestsellers from Barn.pk
              </h2>
            </div>

            <Link to="/shop">
              <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                View Full Catalog
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
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

      {/* 6. Interactive Bundle Builder Section */}
      <section className="py-16 bg-[#FAF5EC] border-b border-[#C9962F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BundleBuilder onAddToCart={onAddToCart} />
        </div>
      </section>

      {/* 7. "Grown" Feature Block */}
      <SectionBlock type="grown" />

      {/* 8. "Restored" Feature Block */}
      <SectionBlock type="restored" reversed />

      {/* 9. Benefits Grid */}
      <BenefitsGrid />

      {/* 10. Testimonials Section */}
      <TestimonialsSection />

      {/* 11. FAQ Accordion */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

    </div>
  );
};
