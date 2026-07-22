import React from 'react';
import { Hero } from '../components/Hero';
import { SectionBlock } from '../components/SectionBlock';
import { ProductCard } from '../components/ProductCard';
import { BenefitsGrid } from '../components/BenefitsGrid';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQAccordion } from '../components/FAQAccordion';
import { BundleBuilder } from '../components/BundleBuilder';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { ArrowRight, Sparkles, MapPin, ShieldCheck, Award, Gift } from 'lucide-react';

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
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Intro Motto Bar */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-8 border-y border-[#C9962F]/30">
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

      {/* Quick Access Feature Highlights */}
      <section className="bg-white py-8 border-b border-[#4A5D50]/10 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <Link to="/quiz" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-colors group space-y-1">
              <Sparkles className="w-5 h-5 text-[#C9962F] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">Routine Builder Quiz</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">Find your custom remedy</span>
            </Link>

            <Link to="/stores" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-colors group space-y-1">
              <MapPin className="w-5 h-5 text-[#4A5D50] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">Physical Outlets</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">Lahore, Isb, KHI, Pesh</span>
            </Link>

            <Link to="/certifications" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-colors group space-y-1">
              <ShieldCheck className="w-5 h-5 text-[#45566B] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">PCSIR Lab Reports</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">100% Purity Verified</span>
            </Link>

            <Link to="/rewards" className="p-4 rounded-xl bg-[#FAF8F4] hover:bg-[#4A5D50]/10 transition-colors group space-y-1">
              <Award className="w-5 h-5 text-[#C9962F] mx-auto group-hover:scale-110 transition-transform" />
              <strong className="font-serif text-sm font-bold text-[#2B2E2C] block">Harvest Rewards</strong>
              <span className="text-[11px] text-[#2B2E2C]/70 block">Earn points on orders</span>
            </Link>

          </div>
        </div>
      </section>

      {/* Featured Bestsellers Grid */}
      <section className="py-16 bg-[#FAF8F4]">
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

      {/* Interactive Bundle Builder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BundleBuilder onAddToCart={onAddToCart} />
      </section>

      {/* "Grown" Feature Block (Green & Gold) */}
      <SectionBlock type="grown" />

      {/* "Restored" Feature Block (Blue & Honey) */}
      <SectionBlock type="restored" reversed />

      {/* Benefits Grid */}
      <BenefitsGrid />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Accordion */}
      <FAQAccordion />

    </div>
  );
};
