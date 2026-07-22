import React from 'react';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Sprout, ShieldCheck, Heart, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      
      {/* Page Header */}
      <section className="bg-[#4A5D50] text-[#FAF8F4] py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-semibold uppercase tracking-wider">
            <BarnRoofMotif color="#C9962F" height={12} />
            <span>Rooted in Nature</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Our Story & Sourcing Philosophy
          </h1>
          <p className="text-base sm:text-lg text-[#FAF8F4]/80 max-w-2xl mx-auto leading-relaxed">
            Barn.pk was built on a simple promise: to protect the original integrity of food and high-altitude botanicals, bringing raw nature directly to your family.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-16 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9962F]">
              The Barn.pk Origin
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2E2C]">
              Why We Refuse Machine Processing
            </h2>
            <p className="text-sm text-[#2B2E2C]/80 leading-relaxed">
              When industrial honey is flash-heated and fine-filtered under pressure, its living enzymes, pollen particles, and delicate aromatic compounds are lost forever. What remains is mere amber syrup.
            </p>
            <p className="text-sm text-[#2B2E2C]/80 leading-relaxed">
              At Barn.pk, our journey began in the wild Sidr groves of Karak and the high-altitude valleys of Skardu. We sought out traditional beekeepers and mountain foragers who still honor slow, low-temperature gravity extraction.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3 sm:aspect-auto sm:h-[360px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=800"
              alt="Raw Honey Hive Sourcing"
              fallbackTitle="Karak Sidr Beekeeping Community"
              category="grown"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-[#FAF8F4]/90 backdrop-blur-xs p-3 rounded-xl border border-[#4A5D50]/10 text-xs z-10">
              <strong className="text-[#4A5D50] font-serif block">Karak Sidr Beekeeping Community</strong>
              <span className="text-[#2B2E2C]/70">Pesticide-free wild flora reserves</span>
            </div>
          </div>

        </div>
      </section>

      {/* Two Product Worlds Grid */}
      <section className="py-16 bg-[#4A5D50]/5 border-y border-[#4A5D50]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <BarnRoofMotif variant="divider" className="text-[#4A5D50]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2E2C]">
              The Two Pillars of Barn.pk
            </h2>
            <p className="text-xs sm:text-sm text-[#2B2E2C]/70">
              We structure our offerings around two distinct, complementary paths to vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grown Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#4A5D50]/20 shadow-md space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#4A5D50] text-[#FAF8F4] flex items-center justify-center font-bold text-lg">
                <Sprout className="w-6 h-6 text-[#C9962F]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9962F] block">
                Line I: Grown
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2E2C]">
                Whole Foods & Pure Farm Harvests
              </h3>
              <p className="text-xs text-[#2B2E2C]/80 leading-relaxed">
                Nourishment rooted in fertile soil. Unheated wildflower honeys, wooden cold-pressed mustard oil, and Vedic A2 bilona ghee crafted from whole cultured milk.
              </p>
              <ul className="space-y-2 text-xs text-[#2B2E2C]/90 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  Zero C4 sugar additives or syrup diluents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                  Unpasteurized & enzyme rich
                </li>
              </ul>
            </div>

            {/* Restored Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#45566B]/20 shadow-md space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#45566B] text-[#FAF8F4] flex items-center justify-center font-bold text-lg">
                <Award className="w-6 h-6 text-[#B08D57]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57] block">
                Line II: Restored
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2E2C]">
                Botanical Vitality & High-Altitude Minerals
              </h3>
              <p className="text-xs text-[#2B2E2C]/80 leading-relaxed">
                Formulations crafted to revitalize body and mind. High-altitude Skardu Shilajit resin, KSM-66 Ashwagandha tinctures, and caffeine-free sleep tea blends.
              </p>
              <ul className="space-y-2 text-xs text-[#2B2E2C]/90 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
                  60%+ Fulvic acid density in Shilajit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B08D57]" />
                  Pure Miron UV glass protection
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Founder Note */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-12 bg-white rounded-2xl border border-[#4A5D50]/15 shadow-xl relative text-center space-y-4">
          <BarnRoofMotif color="#C9962F" height={18} className="mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">
            A Note from Our Founder
          </h3>
          <p className="font-serif text-sm sm:text-lg italic text-[#2B2E2C]/80 leading-relaxed max-w-2xl mx-auto">
            "When you hold a jar of Barn.pk raw honey or Shilajit, you are holding weeks of patient labor by mountain beekeepers and high-altitude foragers. We pledge never to compromise on purity, temperature, or glass packaging."
          </p>
          <div className="pt-2">
            <span className="font-bold text-[#4A5D50] text-sm block">Muhammad Shafi</span>
            <span className="text-xs text-[#2B2E2C]/60">Founder & Sourcing Steward, Barn.pk</span>
          </div>
        </div>
      </section>

    </div>
  );
};

