import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BarnRoofMotif } from './BarnRoofMotif';
import { ImageWithFallback } from './ImageWithFallback';
import { ArrowRight, Sparkles, Shield, Award, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 text-[#FAF8F4]">

      {/* Background High-Resolution Farm & Mountain Photography Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/158028/bavaria-field-grain-field-[#1E2C22].jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Organic Farm Harvest Backdrop"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75"
        />
        {/* Slate Green & Subtle Organic Dark Slate Blue (#483D8B) Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B271E]/96 via-[#253229]/92 via-[#292A44]/80 to-[#152017]/96 backdrop-blur-[2px]" />
        
        {/* Subtle Ambient Dark Slate Blue Accent Glow Spot Behind Floating Hero Card */}
        <div className="absolute top-1/4 -right-10 w-96 h-96 bg-[#483D8B]/35 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FDD229]/15 rounded-full filter blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Hero Copy */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow Badge with Subtle Dark Slate Blue Inner Glow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#483D8B]/30 border border-[#FDD229]/40 text-[#FDD229] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <BarnRoofMotif color="#FDD229" height={12} />
              <span>Boutique Farm-Rooted Harvests</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              Nourishment from the <span className="text-[#FDD229] italic font-normal">Valley.</span> Pure Vitality from the <span className="text-[#B8AEE8] italic font-normal">Peaks.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-sans">
              Barn.pk connects you with raw, unadulterated nature. Discover our two signature worlds: <strong className="text-[#FDD229] font-bold">Grown</strong> for raw wild honeys and organic farm foods, and <strong className="text-[#B8AEE8] font-bold">Restored</strong> for high-altitude shilajit and botanical tinctures.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/shop?category=grown" className="w-full sm:w-auto">
                <Button variant="gold" size="lg" fullWidth icon={<ArrowRight className="w-4 h-4 text-black" />}>
                  Shop Nature Range
                </Button>
              </Link>
              <Link to="/shop?category=restored" className="w-full sm:w-auto">
                <Button variant="primary-restored" size="lg" fullWidth icon={<Sparkles className="w-4 h-4 text-[#FDD229]" />}>
                  Explore Wellness Line
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#FDD229]">100% Raw</span>
                <span className="text-[11px] sm:text-xs text-white/80">Unfiltered Honey</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#B8AEE8]">16,000 ft</span>
                <span className="text-[11px] sm:text-xs text-white/80">Skardu Shilajit</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-2xl font-bold text-[#FDD229]">PCSIR Tested</span>
                <span className="text-[11px] sm:text-xs text-white/80">Zero Additives</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Image Frame */}
          <motion.div
            className="lg:col-span-5 relative mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Roof Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-36 bg-[#FDD229] text-black py-1 px-3 rounded-t-xl text-[11px] font-extrabold uppercase tracking-widest text-center shadow-lg">
                Raw Harvest
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 aspect-4/3 sm:aspect-square lg:aspect-auto lg:h-[480px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=1000"
                  alt="Barn.pk Organic Sidr Honey Harvest"
                  fallbackTitle="Karak Wild Sidr Honey Harvest"
                  category="grown"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Card Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-[#FAF8F4]/95 backdrop-blur-md shadow-lg border border-[#4A5D50]/10 flex items-center justify-between text-[#2B2E2C]">
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

              {/* Floating Mini Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-[#283747] text-[#FAF8F4] shadow-xl border border-white/20 z-20 max-w-[220px]">
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
                  <span className="text-[10px] uppercase font-bold text-[#C9962F]">Restored Line</span>
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
