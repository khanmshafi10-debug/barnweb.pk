import React from 'react';
import { motion } from 'motion/react';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { 
  Sparkles, ShieldCheck, Award, Leaf, MapPin, Heart, ArrowRight, 
  CheckCircle2, Droplets, Sun, Compass, Users, Clock, ShieldAlert,
  Package, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';

export const About: React.FC = () => {
  // Motion animations
  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="bg-[#FBFCFC] min-h-screen text-[#1E293B] overflow-x-hidden font-sans">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#FBFCFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <Link to="/" className="hover:text-[#1E3A8A] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="font-semibold text-[#1E293B]">About Barn.pk</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-[#0B132B] via-[#1E295D] via-[#1E3A8A] to-[#0A0F24] text-[#FBFCFC] py-20 lg:py-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FDD229]/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#2563EB]/25 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <motion.div 
              className="lg:col-span-7 space-y-6 text-left"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#FDD229]/40 text-[#FDD229] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <BarnRoofMotif color="#FDD229" height={12} />
                <span>Our Story</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12]">
                From Pakistan's Wild Landscapes <span className="text-[#FDD229] italic font-normal">to Your Everyday Wellness.</span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-2xl">
                <p>
                  Barn.pk was founded with one simple belief: nature already provides extraordinary nourishment when it is respected, protected, and delivered without unnecessary processing.
                </p>
                <p>
                  Across Pakistan's valleys, forests, orchards, and mountain ranges, generations of farmers, beekeepers, herbalists, and harvesters have preserved traditions that modern food production often overlooks.
                </p>
                <p>
                  Our mission is to reconnect people with those traditions by offering natural foods and wellness essentials that remain as close to their original form as possible.
                </p>
              </div>

              <div className="pt-4 p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md inline-block max-w-xl">
                <p className="text-sm font-semibold text-[#FDD229] italic">
                  "Every harvest represents honesty, craftsmanship, and respect for the land that produced it."
                </p>
              </div>
            </motion.div>

            {/* Right Masonry Photo Grid */}
            <motion.div 
              className="lg:col-span-5 grid grid-cols-2 gap-4"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 aspect-4/5 group">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
                    alt="Himalayan Valley"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 aspect-square group">
                  <img
                    src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80"
                    alt="Wild Beekeeping"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 aspect-square group">
                  <img
                    src="https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80"
                    alt="Botanical Herbs"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 aspect-4/5 group">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
                    alt="High Altitude Shilajit Rocks"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — WHO WE ARE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#1E3A8A]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-6 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#1E3A8A]">Who We Are</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                More Than a Store. <br />
                <span className="text-[#1E3A8A]">A Community Built Around Pure Living.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
                Barn.pk is a boutique natural wellness company dedicated to sourcing exceptional products directly from trusted growers, mountain harvesters, and artisan producers throughout Pakistan.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Rather than creating products in factories, we focus on preserving nature's original quality through ethical sourcing, minimal processing, and transparent practices. Every product we offer is selected because it reflects authenticity—not trends.
              </p>

              {/* Our Focus 6 Pills */}
              <div className="pt-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F172A] block mb-3">Our Core Focus Areas</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Raw Wild Honeys',
                    'Himalayan Shilajit',
                    'Botanical Wellness',
                    'Cold-Pressed Oils',
                    'Traditional Farm Foods',
                    'Organic Superfoods'
                  ].map((focus, i) => (
                    <div key={i} className="px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs text-xs sm:text-sm font-bold text-[#1E3A8A] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FDD229] shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Image Feature */}
            <motion.div 
              className="lg:col-span-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisan Harvesters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-bold uppercase text-[#FDD229] tracking-widest">Boutique Sourcing</span>
                  <h3 className="font-serif text-xl font-bold text-white">Ethical Mountain & Farm Stewardship</h3>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 3 — OUR PHILOSOPHY
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#EEF2FF] border-b border-[#1E3A8A]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
              <BarnRoofMotif color="#1E3A8A" height={12} />
              <span>Sourcing Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Nature Doesn't Need Improving. <br />
              <span className="text-[#1E3A8A]">It Needs Protecting.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Modern processing often removes what nature worked hardest to create. We believe genuine wellness begins by preserving the integrity of every ingredient.
            </p>
          </motion.div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'No Unnecessary Refining', desc: 'Preserving raw vitamins, active enzymes, and natural aromas.' },
              { title: 'No Artificial Additives', desc: '0.00% synthetic flavorings, preservatives, or chemical thickeners.' },
              { title: 'No Shortcuts', desc: 'Respecting 45-day curing cycles and slow gravity extraction.' },
              { title: 'No Compromise', desc: 'Independent laboratory testing for every production batch.' }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-7 rounded-2xl bg-white border border-[#1E3A8A]/15 shadow-sm hover:shadow-xl transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-[#FDD229] font-bold flex items-center justify-center font-serif text-lg">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">{pillar.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#1E3A8A]/20 text-center max-w-3xl mx-auto">
            <p className="text-base text-[#1E293B] font-medium italic">
              "Instead, we focus on careful harvesting, responsible sourcing, and gentle preparation methods that respect every ingredient's natural composition."
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 4 — OUR JOURNEY (EVERY PRODUCT HAS A STORY)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Traceable Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Every Product Has a Story
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Discover the careful 6-step journey behind every Barn.pk harvest.
            </p>
          </motion.div>

          {/* 6 Step Journey Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 'Step 01', title: 'Trusted Harvesters', desc: 'Finding trusted farmers and mountain harvesters across Pakistan.' },
              { step: 'Step 02', title: 'Seasonal Harvesting', desc: 'Gathered strictly during peak natural flowering and resin flow seasons.' },
              { step: 'Step 03', title: 'Purification & Inspection', desc: 'Careful hand inspection and low-temperature natural purification.' },
              { step: 'Step 04', title: 'Laboratory Verification', desc: 'Independent PCSIR lab testing for purity and bioactive potency.' },
              { step: 'Step 05', title: 'Premium Glass Packaging', desc: 'Sealed in biophotonic glass containers to eliminate plastic contamination.' },
              { step: 'Step 06', title: 'Direct Doorstep Delivery', desc: 'Delivered directly to your home with fresh harvest guarantee.' }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/15 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all space-y-4 group"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FDD229] px-3 py-1 bg-white/10 rounded-full">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FDD229] transition-colors">{step.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 5 — THE PLACES THAT INSPIRE US
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FBF9F4] border-b border-[#1E3A8A]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
              <BarnRoofMotif color="#1E3A8A" height={12} />
              <span>Regional Origins</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              The Places That Inspire Us — Harvested Across Pakistan
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              From Himalayan peaks to fertile valleys, every region contributes its own unique natural character.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { region: 'Skardu', specialty: 'High-Altitude Shilajit', desc: 'Extracted from 16,000+ ft Himalayan escarpments.', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80' },
              { region: 'Karak', specialty: 'Wild Sidr Honey', desc: 'Harvested from wild Sidr groves during peak nectar flow.', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80' },
              { region: 'Hunza', specialty: 'Mountain Nuts & Apricots', desc: 'Paper-shell walnuts & sun-dried Hunza apricots.', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
              { region: 'Swat', specialty: 'Medicinal Herbs', desc: 'High-potency botanical teas & shade-dried leaves.', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80' },
              { region: 'Kashmir', specialty: 'Saffron & Botanicals', desc: 'Grade-1 red saffron filaments & wild garlic.', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80' },
              { region: 'Pothohar', specialty: 'Traditional Citrus Harvests', desc: 'Green lemons & raw mangoes cured in earthen matkas.', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80' }
            ].map((place, idx) => (
              <div 
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 h-64 flex flex-col justify-end"
              >
                <img
                  src={place.img}
                  alt={place.region}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10 p-6 text-white space-y-1">
                  <span className="text-xs font-bold text-[#FDD229] uppercase tracking-widest block">{place.region}</span>
                  <h3 className="font-serif text-xl font-bold text-white">{place.specialty}</h3>
                  <p className="text-xs text-white/80">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-[#1E293B] font-medium italic">
              "Every landscape shapes the quality, aroma, flavor, and nutritional profile of what we offer."
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 6 — QUALITY WITHOUT COMPROMISE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#1E3A8A]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">Ironclad Quality</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Quality Without Compromise — Every Detail Matters
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Premium products deserve premium standards. Before reaching your home, every harvest is evaluated for quality, freshness, and authenticity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              '✓ Carefully Selected Origins',
              '✓ Small Batch Production',
              '✓ Independent Laboratory Testing',
              '✓ Glass-First Packaging',
              '✓ Traceable Harvest Sources',
              '✓ Ethical Partnerships'
            ].map((std, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm font-bold text-[#1E293B] text-base flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1E3A8A] shrink-0" />
                <span>{std.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#EEF2FF] rounded-2xl border border-[#1E3A8A]/20 text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-[#1E293B] font-bold">
              Quality is never an afterthought—it is built into every step of our process.
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 7 — THE PEOPLE BEHIND EVERY HARVEST
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Local Farming Communities"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs uppercase font-bold text-[#FDD229] tracking-widest block">Direct Livelihoods</span>
                  <h3 className="font-serif text-xl font-bold text-white">Supporting Local Mountain Communities</h3>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Community Stewardship</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The People Behind Every Harvest — Supporting Communities, Not Supply Chains
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Behind every product is someone who has spent years mastering their craft. Barn.pk works closely with independent beekeepers, small family farms, mountain gatherers, herbal cultivators, and artisan producers.
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                By sourcing directly whenever possible, we help preserve traditional knowledge while supporting sustainable local livelihoods. When you choose Barn.pk, you support real people—not anonymous industrial production.
              </p>

              <div className="pt-2 p-5 bg-white/10 rounded-2xl border border-white/15">
                <p className="text-sm font-semibold text-[#FDD229] italic">
                  "Supporting real families, honoring traditional knowledge, and protecting natural ecosystems."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 8 — OUR PROMISE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#EEF2FF] border-b border-[#1E3A8A]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest">
              <BarnRoofMotif color="#1E3A8A" height={12} />
              <span>Our Sacred Promise</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              What You Can Always Expect
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Every Barn.pk order reflects the same commitment we would expect for our own families.
            </p>
          </motion.div>

          {/* 5 Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Transparency', desc: 'Know where your products come from.' },
              { title: 'Authenticity', desc: 'Nature, without unnecessary alteration.' },
              { title: 'Responsibility', desc: 'Respect for people and the environment.' },
              { title: 'Consistency', desc: 'Carefully maintained quality standards.' },
              { title: 'Trust', desc: 'Relationships built through honesty rather than marketing.' }
            ].map((val, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-[#1E3A8A]/15 shadow-sm hover:shadow-lg transition-all space-y-3 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-[#FDD229] font-bold flex items-center justify-center mx-auto text-sm">
                  ✓
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">{val.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 9 — LOOKING AHEAD
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FBF9F4] border-b border-[#1E3A8A]/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A8A]">The Future Vision</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Building the Future of Natural Wellness
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-3xl mx-auto">
            We believe the future belongs to brands that value transparency over exaggeration, quality over quantity, and sustainability over convenience.
          </p>
          <p className="text-base text-[#64748B] leading-relaxed max-w-3xl mx-auto">
            Our vision is to continue expanding partnerships with responsible producers across Pakistan while making authentic natural products accessible to more families around the world.
          </p>
          <div className="pt-4 p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm max-w-2xl mx-auto">
            <p className="text-base text-[#1E3A8A] font-serif font-bold italic">
              "Every new harvest is another opportunity to celebrate Pakistan's remarkable natural heritage."
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 10 — JOIN OUR JOURNEY (CALL TO ACTION)
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0B132B] via-[#1E295D] to-[#0A0F24] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FDD229]/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDD229]/20 text-[#FDD229] text-xs font-bold uppercase tracking-wider border border-[#FDD229]/40 mx-auto">
            <BarnRoofMotif color="#FDD229" height={12} />
            <span>Join Our Journey</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Experience Nature As It Was Meant To Be
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're searching for nourishing foods, botanical wellness, or trusted natural ingredients, Barn.pk invites you to become part of a growing community that values authenticity above all else.
          </p>

          <p className="text-sm font-semibold text-white/70">
            Together, we can preserve traditional knowledge, support ethical harvesting, and celebrate the remarkable diversity of Pakistan's landscapes.
          </p>

          <div className="pt-2">
            <span className="text-lg font-serif font-bold text-[#FDD229] block mb-6">
              Because true wellness begins where nature remains untouched.
            </span>

            <div className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md max-w-xl mx-auto space-y-5">
              <h3 className="font-serif text-2xl font-bold text-white">Explore Our Collection</h3>
              <p className="text-xs uppercase font-bold tracking-widest text-white/80">
                Pure Harvests • Honest Ingredients • Timeless Traditions
              </p>
              <div>
                <Link to="/shop">
                  <button className="btn-premium-gold text-sm px-8 py-3.5 group">
                    Shop Barn.pk Catalog <ArrowRight className="w-4 h-4 inline ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
