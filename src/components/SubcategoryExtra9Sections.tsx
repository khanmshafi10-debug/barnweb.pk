import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SubcategoryInfo } from '../data/subcategoriesData';
import { BarnRoofMotif } from './BarnRoofMotif';
import { 
  ShieldCheck, Award, Sparkles, CheckCircle2, MapPin, Leaf, 
  Calendar, Lock, QrCode, FileText, Check, X, AlertTriangle, 
  Sun, Moon, Coffee, HeartHandshake, Eye, Flame, Droplets, ArrowRight
} from 'lucide-react';

interface SubcategoryExtra9SectionsProps {
  subData: SubcategoryInfo;
}

export const SubcategoryExtra9Sections: React.FC<SubcategoryExtra9SectionsProps> = ({ subData }) => {
  const [qrScanned, setQrScanned] = useState(false);

  // Customized image sets per category for maximum visual authenticity
  const getImage = (type: string) => {
    const isSupplements = subData.categoryKey === 'supplements';
    const isSpices = subData.categoryKey === 'spices';
    const isPickles = subData.categoryKey === 'pickles';
    const isNuts = subData.categoryKey === 'nuts';

    switch (type) {
      case 'rare':
        if (isSupplements) return 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80';
        if (isSpices) return 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=1200&q=80';
        if (isPickles) return 'https://images.unsplash.com/photo-1626200419199-391ae487d14a?auto=format&fit=crop&w=1200&q=80';
        return 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80';

      case 'unboxing':
        if (isSupplements) return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80';
        if (isSpices) return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80';
        if (isPickles) return 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80';
        return 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80';

      case 'terroir':
        if (isSupplements) return 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80';
        if (isSpices) return 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1200&q=80';
        if (isPickles) return 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=1200&q=80';
        return 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80';

      case 'lifestyle':
        if (isSupplements) return 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80';
        if (isSpices) return 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=80';
        if (isPickles) return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80';
        return 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80';

      case 'community':
        return 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80';

      default:
        return subData.heroImage;
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="space-y-0 text-[#1C241D] overflow-hidden font-sans">

      {/* ════════════════════════════════════════════════════════════
          SECTION 1: WHY AUTHENTIC IS RARE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-t border-[#2D4233]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            
            {/* Left Image Collage */}
            <motion.div className="lg:col-span-6 relative" variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#2D4233]/15 aspect-4/3 group">
                <img 
                  src={getImage('rare')} 
                  alt={`Rare harvest of ${subData.title}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FDD229]">High Altitude Terroir</span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold">{subData.origin}</h4>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 bg-[#2D4233] text-white p-4 rounded-xl shadow-lg border border-white/20 hidden sm:block">
                <span className="block font-serif text-xl font-bold text-[#FDD229]">{subData.altitude}</span>
                <span className="text-xs text-white/80">Extreme Foraging Elevation</span>
              </div>
            </motion.div>

            {/* Right Copy */}
            <motion.div className="lg:col-span-6 space-y-5" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D4233]/10 text-[#2D4233] text-xs font-bold uppercase tracking-wider">
                <BarnRoofMotif color="#2D4233" height={12} />
                <span>Limited Annual Yield</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C241D] leading-tight">
                Why Authentic {subData.title} Is Extremely Rare
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Authentic {subData.title} from {subData.origin} is one of nature’s rarest harvests. Unlike cultivated crops or mass-factory supplements, it cannot be artificially manufactured or forced into year-round yield.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                The natural formation depends entirely on specific seasonal micro-climates, pristine glacial water flow, and centuries of geological compression inside mountain rock layers. Each harvest window lasts only a few short weeks per year.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] shadow-2xs hover:border-[#2D4233]/30 transition-all">
                  <span className="block text-xs font-bold uppercase text-[#2D4233] mb-1">Harvest Window</span>
                  <span className="font-serif text-base font-bold text-[#1C241D]">Peak 4-Week Window</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] shadow-2xs hover:border-[#2D4233]/30 transition-all">
                  <span className="block text-xs font-bold uppercase text-[#B58600] mb-1">Purity Grade</span>
                  <span className="font-serif text-base font-bold text-[#1C241D]">{subData.purityGrade}</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2: INSIDE EVERY JAR / UNBOXING EXPERIENCE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#162017] text-white relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FDD229]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Unboxing Experience</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Inside Every Jar & Package
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              Every detail of Barn.pk packaging is engineered to protect natural potency from mountain harvest to your doorstep.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            
            {[
              { num: '01', title: 'Biophotonic Glass / Airtight Pouch', desc: 'Packaged in light-filtering dark glass or multi-layer oxygen barrier pouches to block UV degradation.' },
              { num: '02', title: 'Natural Applicator / Wooden Tool', desc: 'Includes an authentic wooden applicator tool or bamboo measuring spoon to prevent metal ion oxidation.' },
              { num: '03', title: 'Airtight Freshness Security Seal', desc: 'Tamper-evident airtight inner foil seal locks in volatile essential oils and protects freshness.' },
              { num: '04', title: 'Batch Identification & Lab Tag', desc: 'Stamped with unique harvest batch ID and QR code linking directly to PCSIR lab verification report.' },
              { num: '05', title: 'Printed Ritual & Usage Guide', desc: 'Step-by-step instructions on daily dosage, ideal steeping liquid, and traditional wellness rituals.' },
              { num: '06', title: 'Eco-Safe Protective Packaging', desc: 'Cushioned inside recyclable molded fiber boxes for 100% breakage-free delivery across Pakistan.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white/5 border border-white/15 p-6 rounded-2xl backdrop-blur-sm space-y-3 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDD229] text-black flex items-center justify-center font-bold font-serif text-lg">
                  {item.num}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                <p className="text-base text-white/75 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 3: SEASONAL HARVEST CALENDAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D4233]">Nature's Schedule</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C241D]">
              Seasonal Harvest & Activity Calendar
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Unlike factory mass products, authentic {subData.title} respects nature's seasonal cycle in {subData.origin}.
            </p>
          </motion.div>

          <motion.div 
            className="overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-sm bg-white no-scrollbar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#2D4233] text-white text-xs uppercase font-bold tracking-wider">
                  <th className="p-4 sm:p-5">Season</th>
                  <th className="p-4 sm:p-5">Terroir Condition</th>
                  <th className="p-4 sm:p-5">Harvesting & Processing Activity</th>
                  <th className="p-4 sm:p-5">Purity Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] text-base text-[#1C241D]">
                <tr className="hover:bg-[#FBF9F4] transition-colors">
                  <td className="p-4 sm:p-5 font-bold flex items-center gap-2 text-[#2D4233]">
                    <Moon className="w-4 h-4 shrink-0" /> Winter
                  </td>
                  <td className="p-4 sm:p-5 text-[#64748B]">Snowbound Escarpments</td>
                  <td className="p-4 sm:p-5">Orchards & mountains rest under deep snow. Terroir mineral accumulation.</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#2D4233]">Zero Human Disturbance</td>
                </tr>
                <tr className="hover:bg-[#FBF9F4] transition-colors">
                  <td className="p-4 sm:p-5 font-bold flex items-center gap-2 text-[#B58600]">
                    <Sun className="w-4 h-4 shrink-0" /> Spring
                  </td>
                  <td className="p-4 sm:p-5 text-[#64748B]">Glacier Thaw & Bloom</td>
                  <td className="p-4 sm:p-5">Expedition planning, hive inspection & soil nutrient monitoring.</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#2D4233]">Glacial Mineral Flow</td>
                </tr>
                <tr className="hover:bg-[#FBF9F4] transition-colors bg-[#FDD229]/10">
                  <td className="p-4 sm:p-5 font-bold flex items-center gap-2 text-[#B58600]">
                    <Flame className="w-4 h-4 shrink-0" /> Summer
                  </td>
                  <td className="p-4 sm:p-5 text-[#1C241D] font-bold">Peak Escarpment Melt</td>
                  <td className="p-4 sm:p-5 font-bold">Limited high-altitude foraging, fruit picking & raw resin collection.</td>
                  <td className="p-4 sm:p-5 font-bold text-[#B58600]">Peak Bio-Active Potency</td>
                </tr>
                <tr className="hover:bg-[#FBF9F4] transition-colors">
                  <td className="p-4 sm:p-5 font-bold flex items-center gap-2 text-[#2D4233]">
                    <Leaf className="w-4 h-4 shrink-0" /> Autumn
                  </td>
                  <td className="p-4 sm:p-5 text-[#64748B]">Crisp Mountain Air</td>
                  <td className="p-4 sm:p-5">Slow sun-drying, cold stone milling, PCSIR lab testing & biophotonic sealing.</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#2D4233]">100% Lab Verified Batch</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 4: MEET THE TERROIR & LANDSCAPE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            
            <motion.div className="lg:col-span-6 space-y-5" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D4233]/10 text-[#2D4233] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Terroir Landscape</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C241D] leading-tight">
                Meet the Terroir: {subData.origin}
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                The extreme micro-climate of {subData.origin} ({subData.altitude}) creates one of the world's most pristine botanical habitats.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                Glacial meltwater, mineral-rich rock strata, intense UV mountain sunlight, and dramatic temperature shifts force wild flora to synthesize dense protective antioxidants and bioactive enzymes.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] text-center shadow-2xs">
                  <strong className="block font-serif text-base sm:text-lg font-bold text-[#2D4233]">{subData.altitude}</strong>
                  <span className="text-xs text-[#64748B]">Elevation</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] text-center shadow-2xs">
                  <strong className="block font-serif text-base sm:text-lg font-bold text-[#B58600]">{subData.origin.split(',')[0]}</strong>
                  <span className="text-xs text-[#64748B]">Region</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] text-center shadow-2xs">
                  <strong className="block font-serif text-base sm:text-lg font-bold text-[#2D4233]">0.00%</strong>
                  <span className="text-xs text-[#64748B]">Pesticides</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-6" variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#2D4233]/15 aspect-4/3 group">
                <img 
                  src={getImage('terroir')} 
                  alt={`Terroir landscape of ${subData.origin}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 5: BATCH TRACEABILITY
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#162017] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            
            <motion.div className="lg:col-span-5 bg-white/5 border border-white/15 p-6 sm:p-8 rounded-2xl backdrop-blur-sm space-y-6" variants={fadeInUp}>
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs text-[#FDD229] font-bold uppercase tracking-wider">Live Batch System</span>
                  <h3 className="font-serif text-xl font-bold text-white">Batch #BN-2026-SKD</h3>
                </div>
                <QrCode className="w-10 h-10 text-[#FDD229] shrink-0" />
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/70">Harvest Location:</span>
                  <span className="font-bold text-white">{subData.origin}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/70">Extraction Standard:</span>
                  <span className="font-bold text-white truncate max-w-[180px]">{subData.extractionMethod}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/70">Purity Grade:</span>
                  <span className="font-bold text-[#FDD229]">{subData.purityGrade}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-white/70">PCSIR Clearance:</span>
                  <span className="font-bold text-white flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#FDD229]" /> Verified Safe</span>
                </div>
              </div>

              <button 
                onClick={() => setQrScanned(!qrScanned)}
                className="w-full py-3.5 bg-[#FDD229] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#FFE066] active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                {qrScanned ? '✓ Lab Certificate Verified' : 'Simulate Scan QR Code'}
              </button>
            </motion.div>

            <motion.div className="lg:col-span-7 space-y-5" variants={fadeInUp}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Complete Transparency</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                100% Batch Traceability
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Transparency begins long before the product reaches your doorstep. Every production batch is carefully documented from high-altitude foraging to final packaging.
              </p>
              <p className="text-base text-white/80 leading-relaxed">
                Scan the QR code on your jar label to view independent laboratory density reports, heavy metal screening certificate, and harvest date.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/90">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#FDD229]" /> PCSIR Certified</span>
                <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#FDD229]" /> ISO 22000 Facility</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 6: THE BARN.PK EXCLUSION PROMISE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D4233]">Clean Label Standard</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C241D]">
              The Barn.pk Exclusion Promise
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              We believe true authenticity is defined not only by what is included — but also by what is strictly excluded.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { label: 'Artificial Colors', desc: '0% Synthetic Dyes or DYE-40' },
              { label: 'Chemical Preservatives', desc: '0% Sodium Benzoate or Acetic Acid' },
              { label: 'Added Refined Sugar', desc: '0% High Fructose Corn Syrup' },
              { label: 'Synthetic Flavorings', desc: '0% Artificial Fragrance Extracts' },
              { label: 'Fillers & Sawdust', desc: '0% Starch, Flour or Wood Powder' },
              { label: 'Alcohol Processing', desc: '0% Chemical Solvent Extractions' },
              { label: 'Heavy Metals', desc: '0.00% Lead, Mercury & Arsenic Free' },
              { label: 'Anti-Caking Agents', desc: '0% Silicon Dioxide or Talc' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="p-5 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs hover:shadow-md hover:border-[#2D4233]/30 transition-all duration-300 space-y-2"
              >
                <div className="w-8 h-8 rounded-full bg-[#2D4233]/10 text-[#2D4233] flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#1C241D]">No {item.label}</h4>
                <p className="text-xs text-[#64748B]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 7: FREQUENTLY MISTAKEN & COUNTERFEIT PRODUCTS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#B58600]">Buyer Education Guide</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C241D]">
              Frequently Mistaken & Counterfeit Products
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Many products sold as "{subData.title}" differ significantly in appearance, texture, purity, and processing. Know what you are buying.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            
            {/* Authentic Card */}
            <motion.div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#2D4233] shadow-md space-y-5" variants={fadeInUp}>
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D4233]">The Authentic Standard</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C241D]">Barn.pk {subData.title}</h3>
                </div>
                <CheckCircle2 className="w-8 h-8 text-[#2D4233] shrink-0" />
              </div>
              
              <ul className="space-y-3.5 text-base text-[#1C241D]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#2D4233] shrink-0 mt-0.5" />
                  <span><strong>Natural Terroir Aroma:</strong> Rich earthy floral scent derived directly from {subData.origin}.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#2D4233] shrink-0 mt-0.5" />
                  <span><strong>Complete Dissolution:</strong> Dissolves 100% in warm water without leaving sandy rocks or grit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#2D4233] shrink-0 mt-0.5" />
                  <span><strong>PCSIR Lab Verified:</strong> Certified for high bio-active potency ({subData.purityGrade}).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[#2D4233] shrink-0 mt-0.5" />
                  <span><strong>Zero Heat Destruction:</strong> Sun-cured or cold stone-milled to retain live enzymes.</span>
                </li>
              </ul>
            </motion.div>

            {/* Counterfeit Card */}
            <motion.div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-red-200 shadow-md space-y-5" variants={fadeInUp}>
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">Common Market Risk</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C241D]">Diluted Commercial Alternatives</h3>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
              </div>
              
              <ul className="space-y-3.5 text-base text-[#475569]">
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Diluted Powders:</strong> Blended with starch, sawdust, or cheap maltodextrin filler.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Synthetic Dyes:</strong> Colored with chemical yellow/red dyes to disguise faded quality.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>High-Heat Extraction:</strong> Processed with alcohol solvents or high heat that burns nutrients.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Heavy Metal Risk:</strong> Unscreened lowland crops grown with contaminated canal water.</span>
                </li>
              </ul>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 8: CRAFTED FOR EVERYDAY WELLNESS RITUALS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D4233]">Mindful Self-Care</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C241D]">
              Crafted for Everyday Wellness Rituals
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Incorporating pure {subData.title} into your daily routine creates a habit of intentional self-care that is as valuable as the product itself.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            
            <motion.div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3" variants={fadeInUp}>
              <Sun className="w-8 h-8 text-[#B58600]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Morning Fasting Elixir</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Enjoyed first thing in the morning dissolved in warm filtered water or green tea for clean cellular energy.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3" variants={fadeInUp}>
              <Coffee className="w-8 h-8 text-[#2D4233]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Midday Creative Focus</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Replaces afternoon caffeine crashes with steady, non-jittery mental stamina and task recall.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3" variants={fadeInUp}>
              <Flame className="w-8 h-8 text-[#B58600]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Post-Workout Recovery</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Replenishes bio-minerals and reduces muscle soreness after intense exercise.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-3" variants={fadeInUp}>
              <Moon className="w-8 h-8 text-[#2D4233]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Evening Moon Milk</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Whisked into warm almond milk before bed to calm nerve pathways and support deep restorative sleep.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 9: OUR VISION & COMMUNITY CONSERVATION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#162017] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            
            <motion.div className="lg:col-span-7 space-y-5" variants={fadeInUp}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Mountain Stewardship</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Preserving Himalayan Heritage for Future Generations
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Barn.pk was founded with a clear purpose: to share authentic mountain wellness without compromising nature, tradition, or indigenous livelihoods.
              </p>
              <p className="text-base text-white/80 leading-relaxed">
                Every purchase directly supports fair-trade living wages for mountain farming families, eliminates exploitative middlemen, and funds clean water systems in mountain valleys.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <HeartHandshake className="w-6 h-6 text-[#FDD229] mb-1" />
                  <strong className="text-base sm:text-lg font-bold text-white block">100% Fair Pay</strong>
                  <span className="text-xs text-white/70 block">Direct farmer alliance</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <Leaf className="w-6 h-6 text-[#FDD229] mb-1" />
                  <strong className="text-base sm:text-lg font-bold text-white block">Eco-Foraging</strong>
                  <span className="text-xs text-white/70 block">Zero chemical soil care</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <Droplets className="w-6 h-6 text-[#FDD229] mb-1" />
                  <strong className="text-base sm:text-lg font-bold text-white block">10% Reinvested</strong>
                  <span className="text-xs text-white/70 block">Valley clean water</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5" variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/15 aspect-4/3 group">
                <img 
                  src={getImage('community')} 
                  alt="Mountain village community partnership" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase text-[#FDD229]">Community Alliance</span>
                  <h4 className="font-serif text-lg font-bold">Skardu & Gilgit Farming Families</h4>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};
