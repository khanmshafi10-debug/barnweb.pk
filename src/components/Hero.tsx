import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BarnRoofMotif } from './BarnRoofMotif';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight, Sparkles, Shield, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#FAF8F4] overflow-hidden pt-6 pb-16 lg:py-24">
      {/* Background Soft Roof Geometry & Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#4A5D50]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9962F]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Copy - Orchestrated motion container */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Utility Label / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A5D50]/10 text-[#4A5D50] text-xs font-semibold uppercase tracking-wider">
              <BarnRoofMotif color="#C9962F" height={12} />
              <span>Boutique Farm-Rooted Harvests</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2B2E2C] tracking-tight leading-[1.15]">
              Nourishment from the <span className="text-[#4A5D50] italic font-normal">Valley.</span> Pure Vitality from the <span className="text-[#45566B] italic font-normal">Peaks.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#2B2E2C]/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Barn.pk connects you with raw, unadulterated nature. Discover our two signature worlds: <strong className="text-[#4A5D50]">Grown</strong> for raw wild honeys and organic farm foods, and <strong className="text-[#45566B]">Restored</strong> for high-altitude shilajit and botanical tinctures.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/shop?category=grown" className="w-full sm:w-auto">
                <Button variant="primary-grown" size="lg" fullWidth icon={<ArrowRight className="w-4 h-4" />}>
                  Shop Nature Range
                </Button>
              </Link>
              <Link to="/shop?category=restored" className="w-full sm:w-auto">
                <Button variant="primary-restored" size="lg" fullWidth icon={<Sparkles className="w-4 h-4 text-[#B08D57]" />}>
                  Explore Wellness Line
                </Button>
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-[#4A5D50]/15 grid grid-cols-3 gap-2 sm:gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#4A5D50]">100% Raw</span>
                <span className="text-[11px] sm:text-xs text-[#2B2E2C]/70">Unfiltered Honey</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#45566B]">16,000 ft</span>
                <span className="text-[11px] sm:text-xs text-[#2B2E2C]/70">Skardu Shilajit</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#C9962F]">Lab Tested</span>
                <span className="text-[11px] sm:text-xs text-[#2B2E2C]/70">Zero Additives</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Image Frame with Signature Roof Mask Accent */}
          <motion.div
            className="lg:col-span-5 relative mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Roof Silhouette Accent Top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-32 bg-[#4A5D50] text-[#FAF8F4] py-1 px-3 rounded-t-xl text-[11px] font-semibold uppercase tracking-widest text-center shadow-md">
                Raw Harvest
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F4] bg-[#4A5D50]/5 aspect-4/3 sm:aspect-square lg:aspect-auto lg:h-[480px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=1000"
                  alt="Barn.pk Organic Sidr Honey Harvest"
                  fallbackTitle="Karak Wild Sidr Honey Harvest"
                  category="grown"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Card Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-[#FAF8F4]/95 backdrop-blur-md shadow-lg border border-[#4A5D50]/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#C9962F] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured Harvest
                    </div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#2B2E2C]">Wild Karak Sidr Honey</h3>
                    <p className="text-[11px] sm:text-xs text-[#2B2E2C]/70">Cold-extracted in Karak Valley</p>
                  </div>
                  <Link to="/product/sidr-honey-1">
                    <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4A5D50] text-white flex items-center justify-center hover:bg-[#C9962F] transition-colors shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Secondary Floating Mini Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-[#45566B] text-[#FAF8F4] shadow-xl border border-[#FAF8F4]/20 z-20 max-w-[220px]">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=150"
                    alt="Pure Shilajit Resin"
                    fallbackTitle="Skardu Shilajit Resin"
                    category="restored"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#B08D57]">Restored Line</span>
                  <p className="text-xs font-bold leading-tight">Shilajit Resin</p>
                  <p className="text-[10px] text-white/80">60%+ Fulvic Acid</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

