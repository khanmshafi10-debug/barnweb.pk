import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sun, ShieldCheck, Award, Sparkles, CheckCircle2, ChevronDown, 
  MapPin, Flame, Leaf, Utensils, Heart, Zap, Clock, Thermometer, 
  FileCheck, Droplets, Calendar, Star, HelpCircle
} from 'lucide-react';
import { BarnRoofMotif } from './BarnRoofMotif';

interface CategoryExtraSectionsProps {
  categoryKey: 'pickles' | 'supplements' | 'spices' | 'nuts';
}

export const CategoryExtraSections: React.FC<CategoryExtraSectionsProps> = ({ categoryKey }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Content configurations per category
  const config = {
    pickles: {
      origin: 'Multan & Pothohar Country Kitchens',
      elevation: '400 - 1,600 Feet',
      harvestSeason: 'May — July (Green Mango & Lemon Peak)',
      primaryOil: 'Cold-Pressed Unrefined Mustard Oil',
      curingDays: '45 Days Sun Fermentation',
      fermentType: 'Glazed Clay Earthenware (Matka)',
      activeCompounds: [
        { name: 'Lactic Acid Probiotics', val: '100% Live Cultures', desc: 'Soothes gut microbiome and assists natural nutrient absorption.' },
        { name: 'Cold-Pressed Mustard Oil', val: 'Zero Refined Solvent', desc: 'Preserves raw vitamins with natural antimicrobial warmth.' },
        { name: 'Roasted Kalonji & Cumin', val: 'Whole Roasted Spices', desc: 'Stimulates digestive enzymes and prevents bloating.' },
        { name: 'Zero Vinegar Acid', val: '0.00% Synthetic Acid', desc: 'Pure traditional fermentation without stomach-irritating acids.' }
      ],
      processSteps: [
        { step: '01', title: 'Dawn Orchard Harvest', desc: 'Hand-selecting crisp green raw mangoes & lemons at peak sourness.' },
        { step: '02', title: 'Spring Washing & Salting', desc: 'Washed in pure spring water, hand-sliced, and salted with unrefined pink salt.' },
        { step: '03', title: '45-Day Matka Sun-Curing', desc: 'Sun-cured in glazed earthen pots filled with cold-pressed mustard oil.' },
        { step: '04', title: 'Glass Jar Sealing', desc: 'Packed into food-grade glass jars without synthetic chemical preservatives.' }
      ],
      pairings: [
        { food: 'Warm Desi Ghee Paratha', match: '98% Pairing Score', note: 'Tangy mango achar cuts through ghee richness perfectly.' },
        { food: 'Khichdi & Yellow Dal', match: '99% Pairing Score', note: 'Zesty lemon pickle adds probiotic digestive kick to lentils.' },
        { food: 'Tandoori Naan & Kebabs', match: '95% Pairing Score', note: 'Whole garlic pickle cloves add savory garlic depth to grilled meats.' }
      ],
      faqs: [
        { q: 'Why is cold-pressed mustard oil used as the preserver?', q_bg: 'Mustard oil acts as a natural antimicrobial barrier while infusing authentic pungent aroma.', a: 'Unrefined cold-pressed mustard oil creates an airtight protective seal inside earthen matka pots, locking out wild moisture while fostering live lactic acid probiotic fermentation.' },
        { q: 'Does Barn pickle contain synthetic vinegar or acetic acid?', q_bg: 'No synthetic acids. 100% natural sun curing.', a: 'Never. Commercial brand pickles rely on cheap acetic acid/vinegar which irritates stomach linings. Barn pickles are cured using raw salt, sun warmth, and pure mustard oil.' },
        { q: 'How long does a jar stay fresh after opening?', q_bg: 'Up to 18 months when kept oil-submerged with a dry spoon.', a: 'Store at room temperature and always use a clean, dry wooden or stainless spoon. Keeping pickle pieces submerged beneath the mustard oil layer preserves freshness for 18+ months.' }
      ]
    },
    supplements: {
      origin: 'Skardu & Pamir High Elevation Valleys',
      elevation: '7,500 - 16,000 Feet',
      harvestSeason: 'June — August (High Sun Escarpments)',
      primaryOil: 'Pure Water-Based Solventless Extraction',
      curingDays: 'Cold Shade Dehydration',
      fermentType: 'Biophotonic Glass Preservation',
      activeCompounds: [
        { name: 'Fulvic Acid & Bio-Minerals', val: '84+ Ionic Minerals', desc: 'Crosses cell membranes for rapid cellular energy restoration.' },
        { name: 'Withanolide Glycosides', val: '5.2% Standardized', desc: 'Modulates HPA axis to lower cortisol and anxiety.' },
        { name: 'Chlorophyll & Phytol', val: 'High Bio-Available', desc: 'Alkalizes blood plasma and promotes red blood cell synthesis.' },
        { name: 'Rutin Bioflavonoids', val: 'Vascular Protection', desc: 'Strengthens micro-capillaries and supports cardiovascular health.' }
      ],
      processSteps: [
        { step: '01', title: 'High Altitude Foraging', desc: 'Harvesting raw botanical pitch and roots at extreme elevations (16,000+ ft).' },
        { step: '02', title: 'Glacial Spring Dissolution', desc: 'Purified in natural glacial meltwater without synthetic chemical solvents.' },
        { step: '03', title: 'Tri-Stage Cotton Filtration', desc: 'Filtered through fine cotton layers to eliminate raw rock sediment.' },
        { step: '04', title: 'Sun-Bed Evaporation', desc: 'Gently concentrated under clean solar warmth to preserve fragile enzymes.' }
      ],
      pairings: [
        { food: 'Warm Almond Milk & Honey', match: '99% Bio-Availability', note: 'Healthy fats dissolve fat-soluble adaptogen compounds.' },
        { food: 'Morning Herbal Green Tea', match: '96% Bio-Availability', note: 'Provides calm, non-jittery focus for daily work stamina.' },
        { food: 'Post-Workout Protein Smoothie', match: '94% Bio-Availability', note: 'Replenishes trace minerals lost in heavy perspiration.' }
      ],
      faqs: [
        { q: 'How do I verify pure mountain Shilajit pitch resin?', q_bg: 'Pure Shilajit dissolves completely in warm liquids and turns pliable with heat.', a: 'Authentic Shilajit dissolves 100% in warm water or milk without leaving sandy sediment. It turns soft and pliable in hand warmth and hardens when chilled in the fridge.' },
        { q: 'What is the best time of day to consume supplements?', q_bg: 'Morning fasting or 45 minutes before sleep.', a: 'Take Shilajit or Moringa first thing in the morning with warm water for sustained daytime stamina. Take Ashwagandha in the evening to lower cortisol before sleep.' },
        { q: 'Are Barn supplements lab-tested for heavy metals?', q_bg: '100% PCSIR lab-screened for 0.00% Lead and Mercury.', a: 'Yes. Every batch undergoes strict independent PCSIR laboratory testing to guarantee complete freedom from heavy metal contaminants, pesticides, or fillers.' }
      ]
    },
    spices: {
      origin: 'Azad Kashmir, Kasur & Kunri Spice Belts',
      elevation: '450 - 5,500 Feet',
      harvestSeason: 'October — November (Autumn Bloom & Crop)',
      primaryOil: 'Intact Natural Essential Spices Oils',
      curingDays: 'Slow Cold Stone-Milling',
      fermentType: 'Air-Tight Botanical Glass Jars',
      activeCompounds: [
        { name: 'Curcuminoid Complex', val: '5.2% Certified High', desc: 'Inhibits COX-2 inflammatory pathways for soothing joint comfort.' },
        { name: 'Crocin & Safranal', val: 'Grade-1 Sargol (>240)', desc: 'Imparts brilliant golden hue and enhances positive brain serotonin.' },
        { name: 'Capsaicin & Carotenoids', val: 'Fiery Natural Heat', desc: 'Stimulates metabolic calorie burn and vascular circulation.' },
        { name: 'Cinnamaldehyde & Eugenol', val: 'True Ceylon Quills', desc: 'Supports healthy blood sugar insulin sensitivity naturally.' }
      ],
      processSteps: [
        { step: '01', title: 'Dawn Field Harvesting', desc: 'Hand-picking crocus flowers and turmeric roots at dawn before heat rises.' },
        { step: '02', title: 'Hand-Sorting Grade A', desc: 'Separating yellow styles from deep red saffron stigmas and hand-sorting pods.' },
        { step: '03', title: 'Slow Cold Stone Milling', desc: 'Milled slowly on granite stones to prevent high friction heat from burning oils.' },
        { step: '04', title: 'Laboratory Screening', desc: 'Tested for 0% lead chromate, zero artificial dyes, and zero sawdust.' }
      ],
      pairings: [
        { food: 'Royal Rice Biryani & Pulao', match: '100% Culinary Match', note: 'Saffron threads & whole Ceylon cinnamon impart royal aroma.' },
        { food: 'Healing Golden Milk Latte', match: '98% Culinary Match', note: 'Stone-milled Haldi paired with black pepper for 2000% curcumin absorbency.' },
        { food: 'Fiery Tadka Lentil Dal', match: '97% Culinary Match', note: 'Kunri red chili tempered in hot desi ghee brightens curries.' }
      ],
      faqs: [
        { q: 'How do I test if my saffron is genuine Sargol grade?', q_bg: 'Real saffron colors water slowly to golden yellow; fake dyed silk turns red immediately.', a: 'Place 3-4 threads in warm water. Real saffron slowly turns water a brilliant golden-yellow over 15 minutes while the threads remain deep red. Fake dyed silk bleaches white instantly.' },
        { q: 'Why is stone-ground turmeric superior to commercial powder?', q_bg: 'Commercial steel mills heat up to 90°C, burning volatile oils.', a: 'High-speed factory mills produce friction heat that evaporates delicate essential oils and destroys curcumin. Slow cold stone milling retains 100% natural oil density.' },
        { q: 'Is Barn turmeric lab-screened for lead chromate adulteration?', q_bg: 'PCSIR certified 0.00% Lead Chromate dye free.', a: 'Yes! Cheap commercial spice brands often add lead chromate chemical yellow dye. Barn turmeric is independently lab certified 100% pure organic root powder.' }
      ]
    },
    nuts: {
      origin: 'Hunza Valley, Gilgit & Quetta Orchards',
      elevation: '5,300 - 8,500 Feet',
      harvestSeason: 'August — October (Glacier Orchard Harvest)',
      primaryOil: 'Unrefined Natural Omega-3 & Almond Oil',
      curingDays: 'Natural Air Sun Dehydration',
      fermentType: 'Nitrogen-Flushed Vacuum Pouches',
      activeCompounds: [
        { name: 'Alpha-Linolenic Acid (ALA)', val: '2.5g Omega-3 / Serve', desc: 'Feeds neuro-synaptic brain cells and maintains arterial elasticity.' },
        { name: 'Natural Almond Oil', val: '>52% Pure Oil Content', desc: 'Feeds skin collagen structure and strengthens hair root follicles.' },
        { name: 'Lutein & Zeaxanthin', val: 'Retinal Protection', desc: 'Shields eye macula against high energy blue light damage.' },
        { name: 'Pinolenic Acid', val: 'Satiety Hormone Trigger', desc: 'Triggers natural CCK fullness hormones for weight management.' }
      ],
      processSteps: [
        { step: '01', title: 'Glacier Water Orchard Care', desc: 'Trees irrigated exclusively by mineral-rich meltwater at 8,000+ ft altitude.' },
        { step: '02', title: 'Tree-Opened Harvesting', desc: 'Harvesting nuts only when shells split naturally open on the branch.' },
        { step: '03', title: 'Oil-Free Hot Air Roast', desc: 'Dry-roasted using hot air currents without rancid vegetable oils.' },
        { step: '04', title: 'Vacuum Pouch Packaging', desc: 'Sealed in barrier pouches to prevent delicate Omega-3 oxidation.' }
      ],
      pairings: [
        { food: 'Overnight Soaked Morning Ritual', match: '99% Bio-Availability', note: 'Soaking neutralizes phytic acid enzyme inhibitors in nut skins.' },
        { food: 'Hunza Honey & Yogurt Parfait', match: '96% Bio-Availability', note: 'Crisp paper-shell walnuts paired with raw Sidr honey.' },
        { food: 'Mountain Energy Trail Mix', match: '95% Bio-Availability', note: 'Gilgit salted pistachios paired with dark chocolate & raisins.' }
      ],
      faqs: [
        { q: 'Why are Hunza walnuts non-bitter compared to store walnuts?', q_bg: 'Glacier water and cold mountain air prevent bitter tannin accumulation.', a: 'Lowland commercial walnuts accumulate harsh bitter tannins. Hunza walnuts grow in cold alpine air irrigated by glacier water, producing sweet, non-bitter light amber kernels.' },
        { q: 'Why should nuts be soaked in water overnight before eating?', q_bg: 'Soaking neutralizes phytic acid enzyme inhibitors.', a: 'Raw nut skins contain natural phytic acid that protects nuts in nature but can tax human digestion. Soaking for 8 hours breaks down phytic acid, making Vitamin E and minerals 100% bio-available.' },
        { q: 'Are Barn pistachios fried in vegetable oil?', q_bg: '100% Oil-Free Dry Roasted with Himalayan Pink Salt.', a: 'Never! Commercial brands deep-fry pistachios in cheap palm oil. Barn pistachios are dry-roasted using hot air and lightly dusted with unrefined Himalayan pink salt.' }
      ]
    }
  };

  const data = config[categoryKey];

  const cinematicReveal = {
    hidden: { opacity: 0, y: 40, scale: 0.96, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="space-y-0 text-[#2A2A2A]">

      {/* ════════════════════════════════════════════════════════════
          1. TERROIR & MOUNTAIN SOURCING HERITAGE SHOWCASE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FBF9F4] border-t border-[#2D4233]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cinematicReveal}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2D4233]/10 text-[#2D4233] text-xs font-bold uppercase tracking-widest">
              <BarnRoofMotif color="#2D4233" height={14} />
              <span>Pure Origin Terroir</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C241D]">
              Sourced Directly From {data.origin}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Harvested at optimal micro-climate elevations where pristine glacial meltwater and mineral-rich virgin soil nourish pure botanical potency.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={cinematicReveal} 
              whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
              className="bg-[#FBF9F4] p-8 rounded-3xl border border-[#E2E8F0] shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2D4233]/10 text-[#2D4233] flex items-center justify-center shadow-inner">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Glacier Escarpment Origin</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Harvested exclusively in {data.origin} at high altitude micro-climates ({data.elevation}).
              </p>
              <div className="pt-2 text-sm font-bold text-[#B58600] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4233]" /> 100% Traceable Terroir
              </div>
            </motion.div>

            <motion.div 
              variants={cinematicReveal} 
              whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
              className="bg-[#FBF9F4] p-8 rounded-3xl border border-[#E2E8F0] shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FDD229]/20 text-[#B58600] flex items-center justify-center shadow-inner">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Seasonal Harvest Window</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                {data.harvestSeason}. Gathered only when nature permits peak bio-active compound density.
              </p>
              <div className="pt-2 text-sm font-bold text-[#B58600] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4233]" /> Limited Batch Harvest
              </div>
            </motion.div>

            <motion.div 
              variants={cinematicReveal} 
              whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
              className="bg-[#FBF9F4] p-8 rounded-3xl border border-[#E2E8F0] shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2D4233]/10 text-[#2D4233] flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Curing & Extraction Method</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                {data.curingDays} using {data.fermentType} to protect natural enzymes.
              </p>
              <div className="pt-2 text-sm font-bold text-[#B58600] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D4233]" /> Zero Chemical Solvents
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. ACTIVE NUTRITIONAL & BIO-COMPOUND BREAKDOWN
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#162017] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cinematicReveal}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Bio-Active Chemistry</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Primary Active Compounds & Potency
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Every batch undergoes rigorous bio-assay screening to ensure high concentrations of natural health compounds.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {data.activeCompounds.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={cinematicReveal}
                whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
                className="bg-white/5 border border-white/15 p-7 rounded-2xl backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-300 space-y-4 group"
              >
                <span className="inline-block text-xs font-bold uppercase px-3.5 py-1.5 bg-[#FDD229] text-black rounded-full shadow-sm">
                  {item.val}
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FDD229] transition-colors">{item.name}</h3>
                <p className="text-base text-white/75 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. TRADITIONAL FOUR-STEP HARVEST & PRESERVATION PROCESS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FBF9F4] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cinematicReveal}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D4233]">Heritage Method</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C241D]">
              Traditional 4-Step Harvest & Processing
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Preserving ancient techniques refined over generations to deliver pure unadulterated quality.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {data.processSteps.map((p, i) => (
              <motion.div 
                key={i} 
                variants={cinematicReveal}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.25 } }}
                className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2D4233] text-[#FDD229] flex items-center justify-center font-bold text-lg font-serif shadow-md">
                  {p.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C241D]">{p.title}</h3>
                <p className="text-base text-[#475569] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. PAIRING & WELLNESS HARMONY GUIDE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#FBF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cinematicReveal}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#B58600]">Optimal Bio-Availability</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C241D]">
              Culinary & Wellness Pairings
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Pairing natural ingredients with ideal foods maximizes absorption speed and enhances flavor harmony.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {data.pairings.map((pair, idx) => (
              <motion.div 
                key={idx} 
                variants={cinematicReveal}
                whileHover={{ y: -5, shadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-2xs transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <h3 className="font-serif text-xl font-bold text-[#1C241D]">{pair.food}</h3>
                  <span className="text-xs font-bold text-[#2D4233] bg-[#2D4233]/10 px-3 py-1 rounded-full">{pair.match}</span>
                </div>
                <p className="text-base text-[#475569] leading-relaxed">{pair.note}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. CATEGORY SPECIFIC FREQUENTLY ASKED QUESTIONS
      ════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#162017] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cinematicReveal}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Expert Guidance</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Category Knowledge & FAQs
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div 
                  key={idx} 
                  variants={cinematicReveal}
                  className="bg-white/5 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-md transition-colors"
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">{faq.q}</h3>
                      <p className="text-xs text-[#FDD229] font-medium">{faq.q_bg}</p>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-[#FDD229] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-7 pt-2 text-base text-white/80 leading-relaxed border-t border-white/10 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

    </div>
  );
};
