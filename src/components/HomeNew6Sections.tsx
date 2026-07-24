import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sun, Sunrise, Moon, ShieldCheck, Leaf, Sparkles, CheckCircle2, 
  MapPin, Clock, Award, Droplets, Heart, ArrowRight, Package, Feather
} from 'lucide-react';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Link } from 'react-router-dom';

export const HomeNew6Sections: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('spring');

  // Animation settings
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="space-y-0 overflow-hidden text-[#1E293B]">

      {/* ════════════════════════════════════════════════════════════
          1. HARVEST CALENDAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FBF9F4] border-t border-[#1E3A8A]/10 relative overflow-hidden">
        {/* Ambient Radial Soft Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDD229]/15 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
              <BarnRoofMotif color="#1E3A8A" height={12} />
              <span>Seasonal Harvest Calendar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
              Nature Decides the Schedule — Not Us
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Every Barn.pk harvest follows nature's own rhythm. We never rush flowering seasons, resin collection, or traditional processing. This means every jar and bottle reflects the exact time and place it was gathered.
            </p>
          </motion.div>

          {/* Interactive Season Tabs */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-12">
            {[
              { id: 'spring', label: 'Spring 🌸 Wildflower Honey', color: '#10B981' },
              { id: 'summer', label: 'Summer ☀️ Sidr Honey', color: '#F59E0B' },
              { id: 'autumn', label: 'Autumn 🍂 Botanical Herbs', color: '#D97706' },
              { id: 'winter', label: 'Winter 🏔 High-Altitude Shilajit', color: '#1E3A8A' }
            ].map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeSeason === season.id
                    ? 'bg-[#1E3A8A] text-white shadow-md scale-105'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#EEF2FF]'
                }`}
              >
                {season.label}
              </button>
            ))}
          </div>

          {/* 4 Season Grid Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                season: 'Spring',
                icon: '🌸',
                title: 'Wildflower Honey',
                desc: 'Collected from blooming mountain valleys filled with native flowers.',
                badge: 'Peak Nectar Flow',
                img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
                active: activeSeason === 'spring'
              },
              {
                season: 'Summer',
                icon: '☀️',
                title: 'Sidr Honey',
                desc: 'Harvested once the Sidr trees reach peak nectar flow in Karak & Potohar.',
                badge: 'Single-Origin Harvest',
                img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80',
                active: activeSeason === 'summer'
              },
              {
                season: 'Autumn',
                icon: '🍂',
                title: 'Botanical Herbs',
                desc: 'Fresh herbs are carefully dried at low temperatures to preserve aroma and active compounds.',
                badge: 'Shade Dried',
                img: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80',
                active: activeSeason === 'autumn'
              },
              {
                season: 'Winter',
                icon: '🏔',
                title: 'High-Altitude Shilajit',
                desc: 'Naturally released from Himalayan rock formations after seasonal temperature shifts.',
                badge: '16,000+ Ft Elevation',
                img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
                active: activeSeason === 'winter'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`relative group rounded-3xl overflow-hidden bg-white border transition-all duration-500 flex flex-col justify-between ${
                  item.active
                    ? 'border-2 border-[#1E3A8A] shadow-xl scale-[1.02]'
                    : 'border-[#E2E8F0] shadow-sm hover:shadow-md'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#1E3A8A]">
                    {item.season} {item.icon}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mt-2">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#1E3A8A]">
                    <span>{item.badge}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Seasonal Banner */}
          <div className="mt-14 p-6 sm:p-8 bg-[#1E3A8A] text-white rounded-3xl text-center shadow-lg border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-xs uppercase font-bold tracking-[2px] text-[#FDD229] block">Limited Seasonal Batches</span>
              <p className="text-base sm:text-lg font-serif font-bold text-white mt-1">
                Every season tells a different story. Every harvest is naturally limited.
              </p>
            </div>
            <Link to="/shop">
              <button className="btn-premium-gold whitespace-nowrap text-xs">
                Explore Seasonal Line
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. INSIDE EVERY JAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2563EB]/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Uncompromised Standards</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Makes Every Barn.pk Product Different?
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Before any product reaches your home, it passes through a careful journey designed to preserve its natural integrity.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                step: '01',
                title: 'Directly Harvested',
                desc: 'Collected directly from trusted farmers and mountain harvesters.',
                icon: MapPin,
                tag: 'Direct Sourcing'
              },
              {
                step: '02',
                title: 'Minimal Processing',
                desc: 'Never overheated, chemically refined, or artificially enhanced.',
                icon: Droplets,
                tag: 'Raw & Unrefined'
              },
              {
                step: '03',
                title: 'Laboratory Verified',
                desc: 'Every production batch is independently tested for purity and authenticity.',
                icon: ShieldCheck,
                tag: 'PCSIR Certified'
              },
              {
                step: '04',
                title: 'Glass Packed',
                desc: 'Stored in premium glass containers to preserve freshness and eliminate plastic contamination.',
                icon: Package,
                tag: 'Zero Micro-Plastics'
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white/5 border border-white/15 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all duration-300 space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-serif font-bold text-[#FDD229]">{pillar.step}</span>
                    <pillar.icon className="w-6 h-6 text-white/70 group-hover:text-[#FDD229] transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FDD229] transition-colors">{pillar.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs font-bold text-[#FDD229]">
                  ✓ {pillar.tag}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. WELLNESS STARTS WITH DAILY RITUALS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-[#1E3A8A]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
              <BarnRoofMotif color="#1E3A8A" height={12} />
              <span>Daily Health Protocol</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Wellness Starts With Daily Rituals
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Healthy living isn't about complicated routines. Small daily rituals often create the greatest long-term impact.
            </p>
          </motion.div>

          {/* Interactive Protocol Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            
            {/* Morning */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FDD229]/20 flex items-center justify-center text-[#B58600]">
                  <Sunrise className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A]">Morning Ritual</h3>
                  <span className="text-xs text-[#64748B] font-semibold">Stamina & Vitality</span>
                </div>
              </div>
              <ul className="space-y-3 pt-2">
                {[
                  'Raw Sidr Honey in warm water',
                  'High-Altitude Shilajit Resin (pea size)',
                  'Raw Apple Cider Vinegar shot'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-semibold text-[#1E293B]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Afternoon */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A]">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A]">Afternoon Ritual</h3>
                  <span className="text-xs text-[#64748B] font-semibold">Focus & Energy</span>
                </div>
              </div>
              <ul className="space-y-3 pt-2">
                {[
                  'Hand-steeped Herbal Green Tea',
                  'Hunza Walnuts & Sweet Almonds',
                  'Moringa Superfood Smoothie'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-semibold text-[#1E293B]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#1E3A8A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evening */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0F172A] flex items-center justify-center text-white">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A]">Evening Ritual</h3>
                  <span className="text-xs text-[#64748B] font-semibold">Recovery & Sleep</span>
                </div>
              </div>
              <ul className="space-y-3 pt-2">
                {[
                  'Warm Botanical Haldi Infusion',
                  'Pure Rose Water Facial Mist',
                  'Deep Sleep & Relaxation Ritual'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-semibold text-[#1E293B]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#0F172A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom CTA Box */}
          <div className="p-8 bg-[#EEF2FF] border border-[#1E3A8A]/20 rounded-3xl text-center max-w-4xl mx-auto space-y-4">
            <p className="text-base sm:text-lg text-[#1E293B] font-medium max-w-2xl mx-auto">
              Create your own natural wellness routine using authentic ingredients harvested from Pakistan's mountains and valleys.
            </p>
            <Link to="/quiz" className="inline-block">
              <button className="btn-premium-navy text-xs">
                Build Your Personal Ritual →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. SUSTAINABLE BY NATURE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FBF9F4] border-b border-[#1E3A8A]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Environmental Responsibility</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
                Good For You. Better For The Planet.
              </h2>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                Nature gives generously. We believe it deserves the same respect in return.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  '✓ Glass-first packaging',
                  '✓ Reduced plastic usage',
                  '✓ Ethical mountain harvesting',
                  '✓ Responsible beekeeping',
                  '✓ Small-batch production',
                  '✓ Support for local farming communities'
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] text-xs sm:text-sm font-bold text-[#1E293B] shadow-2xs">
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <p className="text-sm font-semibold text-[#1E3A8A] italic">
                  Every purchase helps preserve traditional harvesting practices for future generations.
                </p>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Sustainable Mountain Sourcing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs uppercase font-bold text-[#FDD229] tracking-widest block">100% Recyclable Packaging</span>
                  <h4 className="font-serif text-xl font-bold text-white">Biophotonic Glass Protection</h4>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. DISCOVER PAKISTAN'S NATURAL REGIONS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#EEF2FF] border-b border-[#1E3A8A]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">Territorial Origin Map</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Sourced From Remarkable Landscapes
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Each region contributes its own unique climate, minerals, flowers, and traditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
            {[
              { region: 'Skardu', product: 'Himalayan Shilajit', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80' },
              { region: 'Hunza', product: 'Apricots & Walnuts', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
              { region: 'Swat', product: 'Wild Botanical Herbs', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80' },
              { region: 'Karak', product: 'Pure Sidr Nectar', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80' },
              { region: 'Kashmir', product: 'Garlic & Saffron', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80' },
              { region: 'Pothohar', product: 'Desi Achar Pickles', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80' }
            ].map((reg, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 text-center h-52 flex flex-col justify-end"
              >
                <img
                  src={reg.img}
                  alt={reg.region}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10 p-4 text-white space-y-0.5">
                  <span className="text-xs font-bold text-[#FDD229] uppercase tracking-wider block">{reg.region}</span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white/90">{reg.product}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-1">
            <span className="text-sm font-bold text-[#1E3A8A] block">Authenticity begins with origin.</span>
            <span className="text-xs text-[#64748B] block">Every location has its own story.</span>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. WHY THOUSANDS CHOOSE BARN.PK
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B132B] via-[#1E295D] to-[#0A0F24] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDD229]/15 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Trusted Nationwide</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why Thousands Choose Barn.pk
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              More Than Products — A Commitment To Authenticity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { title: '100% Natural', desc: 'No artificial flavors, preservatives, or fillers.' },
              { title: 'Small Batch', desc: 'Crafted in limited quantities for consistent quality.' },
              { title: 'Transparent Sourcing', desc: 'Know where every harvest begins.' },
              { title: 'Carefully Packed', desc: 'Protected in premium glass for lasting freshness.' },
              { title: 'Trusted Across Pakistan', desc: 'Families choose Barn.pk for ingredients they recognize & trust.' }
            ].map((card, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all space-y-3 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#FDD229] text-black font-bold flex items-center justify-center mx-auto text-sm">
                  ✓
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{card.title}</h3>
                <p className="text-xs text-white/75 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Conversion CTA */}
          <div className="text-center max-w-2xl mx-auto space-y-6 pt-6 border-t border-white/15">
            <p className="text-lg sm:text-xl font-serif text-white/90">
              Experience food and wellness the way nature intended.
            </p>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#FDD229] tracking-tight">
              Shop Pure. Live Naturally.
            </h3>
            <div>
              <Link to="/shop">
                <button className="btn-premium-gold text-sm px-8 py-3.5">
                  Explore Full Catalog <ArrowRight className="w-4 h-4 inline ml-1.5" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
