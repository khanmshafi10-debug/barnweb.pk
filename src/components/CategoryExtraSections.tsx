import React, { useState } from 'react';
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
        { food: 'Tandoori Naan & Kebabs', match: '95% Pairing Score', note: 'Whole garlic pickle cloves add savory garlic depth to grilled meats.' },
        { food: 'Samosa & Pakora Chaat', match: '97% Pairing Score', note: 'Tamarind plum chutney provides sweet and sour glaze perfection.' }
      ],
      tasteNotes: [
        { label: 'Tangy Sourness', val: 90 },
        { label: 'Spicy Kick', val: 75 },
        { label: 'Umami Savory', val: 85 },
        { label: 'Aromatic Spice', val: 95 }
      ],
      faqs: [
        { q: 'Why does Barn.pk use mustard oil instead of commercial vinegar?', a: 'Commercial vinegar (synthetic acetic acid) destroys beneficial gut probiotics and causes stomach acidity. Cold-pressed mustard oil creates an airtight natural protective seal, allowing friendly lactic acid bacteria to thrive and ferment naturally.' },
        { q: 'How long do these handcrafted pickles stay fresh?', a: 'Because they are sun-fermented in mustard oil, our pickles naturally stay fresh for 18+ months at room temperature. Always use a dry spoon to prevent water contamination.' },
        { q: 'Are these pickles safe for people with acidity concerns?', a: 'Yes! Unlike acidic vinegar pickles, our 45-day sun-cured pickles contain natural probiotic cultures and kalonji seeds that actually soothe digestion and assist bile production.' }
      ],
      reviews: [
        { name: 'Chaudhry Salman', city: 'Lahore', comment: 'Reminds me of my grandmother’s handmade Achar in Multan! Pure mustard oil flavor without any chemical burn.' },
        { name: 'Dr. Humaira Riaz', city: 'Islamabad', comment: 'Laboratory certified lead-free. Perfect probiotic addition to daily lunch.' }
      ]
    },

    supplements: {
      origin: 'Skardu Plateau & Gilgit Escarpment',
      elevation: '16,000+ Feet High Altitude',
      harvestSeason: 'June — August (Summer Escarpment Melt)',
      primaryOil: 'Zero Oils / Pure Bio-Resin',
      curingDays: 'Sun-Dried Glacier Filtration',
      fermentType: 'Biophotonic Miron Glass',
      activeCompounds: [
        { name: 'Fulvic Acid Content', val: '62.4% Certified', desc: 'Chelates 85+ minerals into ionic form for direct cellular transport.' },
        { name: 'Ionic Trace Minerals', val: '85+ Bioactive Elements', desc: 'Restores essential mineral reserves lost in depleted modern diets.' },
        { name: 'Withanolide Glycosides', val: 'Full-Spectrum KSM-66', desc: 'Calms central nervous system and regulates cortisol stress response.' },
        { name: 'Pure Chlorophyll Matrix', val: '100% Shade-Dried', desc: 'Boosts red blood cell oxygen transport and daily cellular stamina.' }
      ],
      processSteps: [
        { step: '01', title: 'High Altitude Escarpment Foraging', desc: 'Foraged from pristine rock crevices above 16,000 feet in Skardu.' },
        { step: '02', title: 'Glacier Water Extraction', desc: 'Slowly dissolved in pure glacier meltwater to filter rock sediment.' },
        { step: '03', title: 'Low-Temp Sun Evaporation', desc: 'Sun-dried at natural mountain temperatures without heat destruction.' },
        { step: '04', title: 'Miron Dark Glass Packaging', desc: 'Sealed in biophotonic Miron glass to preserve bio-energy for 36 months.' }
      ],
      pairings: [
        { food: 'Warm Herbal Green Tea', match: '99% Pairing Score', note: 'Shilajit resin dissolves completely in warm tea for rapid energy.' },
        { food: 'Bedtime Golden Almond Milk', match: '97% Pairing Score', note: 'Ashwagandha root powder calms nervous system before sleep.' },
        { food: 'Morning Chlorophyll Smoothie', match: '96% Pairing Score', note: 'Moringa powder blends seamlessly into green fruit smoothies.' },
        { food: 'Wild Honey & Warm Water', match: '98% Pairing Score', note: 'Bee pollen granules dissolve naturally into wildflower honey water.' }
      ],
      tasteNotes: [
        { label: 'Earthy Mineral Purity', val: 95 },
        { label: 'Bittersweet Herbal', val: 80 },
        { label: 'Bio-Energy Potency', val: 98 },
        { label: 'Smooth Dissolution', val: 90 }
      ],
      faqs: [
        { q: 'How do I verify the authenticity of Barn Shilajit Resin?', a: 'Genuine high-altitude Shilajit pitch dissolves completely in warm water without leaving sandy sediment, hardens in the fridge, becomes pliable at room temperature, and burns without producing ash.' },
        { q: 'Can women consume Shilajit and Ashwagandha safely?', a: 'Yes! Both Shilajit and Ashwagandha are adaptogens that balance endocrine hormones, improve cellular stamina, combat fatigue, and support iron absorption in women.' },
        { q: 'What makes Miron Dark Glass packaging superior?', a: 'Biophotonic Miron glass blocks the entire spectrum of visible light except violet and infrared, preventing photon oxidation and keeping supplements potent for 36 months.' }
      ],
      reviews: [
        { name: 'Dr. Tariq Mahmood', city: 'Lahore', comment: 'Tested in my laboratory — 62% fulvic acid profile verified! Exceptional mountain resin.' },
        { name: 'Zainab Shah', city: 'Islamabad', comment: 'Non-jittery clean energy all day long. Dissolves cleanly in green tea.' }
      ]
    },

    spices: {
      origin: 'Pamir Foothills, Kasur & Kunri Belt',
      elevation: '450 - 5,500 Feet',
      harvestSeason: 'October — November Dawn Harvest',
      primaryOil: 'Natural Volatile Spice Oils',
      curingDays: 'Cold Stone-Ground Milled',
      fermentType: 'Air-Tight Botanical Jars',
      activeCompounds: [
        { name: 'Natural Curcuminoids', val: '5.2% High Potency', desc: 'Potent natural anti-inflammatory agent for joint and cellular wellness.' },
        { name: 'Pure Red Crocin Threads', val: '> 240 Color Score', desc: 'Highest international Grade-1 Sargol crocin rating for Kashmiri saffron.' },
        { name: 'Capsaicin Thermogenics', val: 'Fiery Natural Heat', desc: 'Stimulates metabolic calorie burn and vascular blood flow.' },
        { name: 'Cinnamaldehyde Volatiles', val: 'True Ceylon Low Coumarin', desc: 'Sweet aromatic quills safe for daily metabolic glucose balance.' }
      ],
      processSteps: [
        { step: '01', title: 'Dawn Hand Harvest', desc: 'Saffron crocus flowers hand-picked at dawn before sunrise in Kashmir.' },
        { step: '02', title: 'Clean Field Sun-Drying', desc: 'Turmeric roots and Kunri chilis sun-dried on clean hygienic mats.' },
        { step: '03', title: 'Slow Cold Stone Milling', desc: 'Ground using traditional stone mills to avoid high-heat oil loss.' },
        { step: '04', title: 'Purity Screen & Packaging', desc: 'Tested for zero lead chromate, sawdust, or synthetic dyes before sealing.' }
      ],
      pairings: [
        { food: 'Royal Kashmiri Zafrani Biryani', match: '100% Pairing Score', note: 'Sargol red saffron stigma threads infuse brilliant golden aroma.' },
        { food: 'Golden Healing Haldi Latte', match: '98% Pairing Score', note: 'Kasur organic turmeric paired with black pepper for 2000% absorption.' },
        { food: 'Fiery Red Chili Tadka Dal', match: '97% Pairing Score', note: 'Kunri red chili provides deep crimson color without chemical dye.' },
        { food: 'Cinnamon & Cardamom Kahwa', match: '99% Pairing Score', note: 'Ceylon cinnamon quills provide delicate sweet aroma without bitterness.' }
      ],
      tasteNotes: [
        { label: 'Aromatic Volatiles', val: 98 },
        { label: 'Golden Color Density', val: 95 },
        { label: 'Pungent Heat', val: 85 },
        { label: 'Earthy Sweetness', val: 90 }
      ],
      faqs: [
        { q: 'Is Barn Haldi tested for toxic lead chromate adulteration?', a: 'Yes! Commercial turmeric is frequently adulterated with yellow lead chromate. Every batch of Barn Haldi undergoes independent PCSIR testing to guarantee 0.00% lead.' },
        { q: 'Why is True Ceylon Cinnamon safer than common Cassia cinnamon?', a: 'Common Cassia cinnamon contains high levels of coumarin, which can cause liver stress. True Ceylon cinnamon has ultra-low coumarin and is delicate, sweet, and safe for daily use.' },
        { q: 'How can I test if my Saffron is genuine or dyed?', a: 'Genuine Saffron threads release a golden-yellow hue slowly into warm liquid over 15 minutes. Fake dyed saffron turns water dark red instantly.' }
      ],
      reviews: [
        { name: 'Begum Salma', city: 'Lahore', comment: 'Intense golden color and incredible aroma! Just 5 threads transformed my biryani.' },
        { name: 'Chaudhry Salman', city: 'Kasur', comment: 'Real aromatic Haldi! Verified lead-free and stone ground.' }
      ]
    },

    nuts: {
      origin: 'Hunza Valley & Quetta Mountain Orchards',
      elevation: '5,300 - 8,500 Feet',
      harvestSeason: 'September — October Mountain Harvest',
      primaryOil: 'Natural Plant Omega Oils (ALA)',
      curingDays: 'Natural Glacier Sun Drying',
      fermentType: 'Vacuum Sealed Protective Pouches',
      activeCompounds: [
        { name: 'Alpha-Linolenic Acid (ALA)', val: '2.5g Omega-3 / Serve', desc: 'Plant-based Omega-3 fatty acid supporting brain tissue and memory.' },
        { name: 'Natural Tocopherols', val: '50% RDA Vitamin E', desc: 'High natural almond oil content nourishing skin, hair, and vascular walls.' },
        { name: 'Lutein & Zeaxanthin', val: 'Ocular Shield', desc: 'Pistachio antioxidants protecting eyes against screen light strain.' },
        { name: 'Pinolenic Satiety Acid', val: 'Wild Chilgoza Extract', desc: 'Stimulates CCK hormone release for natural appetite satiety.' }
      ],
      processSteps: [
        { step: '01', title: 'Glacier Water Orchard Growth', desc: 'Grown in high altitude mountain orchards irrigated by mineral glacier meltwater.' },
        { step: '02', title: 'Tree-Opened Natural Harvest', desc: 'Pistachios and walnuts mature naturally until shells open on the tree.' },
        { step: '03', title: 'Zero Sulfur Sun Drying', desc: 'Apricots and nuts sun-dried naturally without toxic sulfur gas bleaching.' },
        { step: '04', title: 'Hand-Shelled Vacuum Packing', desc: 'Hand-sorted light amber kernels sealed in oxygen-barrier pouches.' }
      ],
      pairings: [
        { food: 'Overnight Soaked Badam', match: '99% Pairing Score', note: 'Soaking Quetta almonds removes skin tannins for 100% Vitamin E absorption.' },
        { food: 'Honey Walnut Morning Oats', match: '98% Pairing Score', note: 'Crisp Hunza paper-shell walnut halves add rich Omega-3 brain power.' },
        { food: 'Pink Salt Roasted Pista Snack', match: '96% Pairing Score', note: 'Jumbo Gilgit pistachios dry roasted oil-free with unrefined pink salt.' },
        { food: 'Zafrani Pulao & Desserts', match: '97% Pairing Score', note: 'Wild Kashmir Chilgoza pine nuts add buttery rich gourmet topping.' }
      ],
      tasteNotes: [
        { label: 'Crisp Sweet Kernel', val: 95 },
        { label: 'Rich Natural Oil', val: 98 },
        { label: 'Zero Bitterness', val: 90 },
        { label: 'Glacier Freshness', val: 96 }
      ],
      faqs: [
        { q: 'Why are Barn Hunza Walnuts non-bitter compared to imported walnuts?', a: 'Hunza walnuts grow above 8,000 feet irrigated by mineral glacier water. They develop ultra-thin paper shells and light amber kernels rich in sweet natural oils without bitter skin tannins.' },
        { q: 'Are your dried apricots treated with sulfur dioxide gas?', a: 'Never! Commercial bright orange apricots are bleached with toxic sulfur gas. Barn Hunza apricots are 100% naturally sun-dried, resulting in a dark golden color and deep honey sweetness.' },
        { q: 'Are Quetta almonds sweet or bitter?', a: 'Every batch of Quetta almonds is hand-tested to guarantee 100% sweet kernels with high natural almond oil content (>52%).' }
      ],
      reviews: [
        { name: 'Farah Naz', city: 'Quetta', comment: 'Sweet kernels packed with rich almond oil! You can feel the oil when pressed.' },
        { name: 'Begum Salma', city: 'Islamabad', comment: 'Hunza paper shell walnuts are unbelievable. Easy to crack by hand and super crisp.' }
      ]
    }
  };

  const data = config[categoryKey];

  return (
    <div className="space-y-0 text-[#2A2A2A]">

      {/* ════════════════════════════════════════════════════════════
          1. TERROIR & MOUNTAIN SOURCING HERITAGE SHOWCASE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-t border-[#2D4233]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D4233]/10 text-[#2D4233] text-xs font-bold uppercase tracking-wider">
              <BarnRoofMotif color="#2D4233" height={12} />
              <span>Pure Origin Terroir</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C241D]">
              Sourced Directly From {data.origin}
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Harvested at optimal micro-climate elevations where pristine glacial meltwater and mineral-rich virgin soil nourish pure botanical potency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FBF9F4] p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2D4233]/10 text-[#2D4233] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Glacier Escarpment Origin</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Harvested exclusively in {data.origin} at high altitude micro-climates ({data.elevation}).
              </p>
              <div className="pt-2 text-sm font-bold text-[#B58600] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D4233]" /> 100% Traceable Terroir
              </div>
            </div>

            <div className="bg-[#FBF9F4] p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FDD229]/20 text-[#B58600] flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Peak Season Harvest</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Gathered strictly during {data.harvestSeason} when bioactive nutrients reach peak potency.
              </p>
              <div className="pt-2 text-sm font-bold text-[#B58600] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D4233]" /> Micro-Batch Harvest
              </div>
            </div>

            <div className="bg-[#FBF9F4] p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2D4233]/10 text-[#2D4233] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Artisanal Preservation</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Preserved using {data.fermentType} and {data.curingDays} without chemical solvents.
              </p>
              <div className="pt-2 text-sm font-bold text-[#B58600] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D4233]" /> Zero Synthetic Additives
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. ARTISANAL 4-STEP PROCESSING TIMELINE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#162017] text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FDD229]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Process Integrity</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The 4-Step Artisanal Harvest Pipeline
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              Every jar follows a traditional slow processing protocol to safeguard natural enzymes, volatile essential oils, and nutritional potency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((s, idx) => (
              <div key={idx} className="bg-white/5 border border-white/15 p-6 rounded-2xl backdrop-blur-sm space-y-3 relative group hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#FDD229] text-black flex items-center justify-center font-serif text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{s.title}</h3>
                <p className="text-base text-white/75 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. BIO-ACTIVE COMPOUND & NUTRITIONAL MATRIX GRID
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D4233]">Bio-Active Potency</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C241D]">
              Bio-Active Compound & Nutritional Matrix
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Independently verified bioactive markers that distinguish genuine mountain produce from depleted commercial mass production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.activeCompounds.map((item, idx) => (
              <div key={idx} className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-3 shadow-2xs">
                <div className="inline-block px-3 py-1 rounded-full bg-[#2D4233] text-white text-xs font-bold">
                  {item.val}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C241D]">{item.name}</h3>
                <p className="text-base text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. CULINARY PAIRING & SENSORY TASTE RADAR
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Pairing Recommendations */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B58600]">Sensory Pairings</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C241D] mt-2">
                  Optimal Culinary & Wellness Pairings
                </h2>
                <p className="text-base text-[#475569] mt-2">
                  Enhance your daily dining and wellness rituals with perfect flavor and digestive harmony.
                </p>
              </div>

              <div className="space-y-4">
                {data.pairings.map((p, idx) => (
                  <div key={idx} className="bg-[#FBF9F4] p-5 rounded-xl border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#1C241D] flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-[#2D4233]" /> {p.food}
                      </h4>
                      <p className="text-base text-[#475569] mt-1">{p.note}</p>
                    </div>
                    <span className="shrink-0 px-3 py-1 rounded-full bg-[#FDD229]/20 text-[#B58600] text-xs font-bold self-start sm:self-center">
                      {p.match}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sensory Flavor Meter */}
            <div className="lg:col-span-5 bg-[#FBF9F4] p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#1C241D] border-b border-[#E2E8F0] pb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B58600]" /> Organoleptic Sensory Meter
              </h3>

              <div className="space-y-5">
                {data.tasteNotes.map((note, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-base font-bold text-[#1C241D]">
                      <span>{note.label}</span>
                      <span className="text-[#2D4233]">{note.val}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#EAE7DF] overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#2D4233] to-[#FDD229] rounded-full transition-all duration-1000"
                        style={{ width: `${note.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-[#64748B] flex items-center gap-2 bg-[#FBF9F4] p-3 rounded-lg border border-[#E2E8F0]">
                <FileCheck className="w-4 h-4 text-[#2D4233]" /> 100% Natural Organoleptic Purity Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. PCSIR TRIPLE-LAB SAFETY GUARANTEE BANNER
      ════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#2D4233] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Award className="w-8 h-8 text-[#FDD229]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Triple Safety Audit</span>
                <h3 className="font-serif text-2xl font-bold text-white">PCSIR Laboratory Certified Safe</h3>
                <p className="text-base text-white/80 mt-1">Screened for 0.00% Lead, 0.00% Mercury, 0.00% Pesticides & Zero Synthetic Colorings.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FDD229]" /> Verified Batch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. SEASONAL HARVEST CALENDAR & BATCH TRACKER
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B58600]">Harvest Chronology</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C241D]">
              Seasonal Harvest & Micro-Batch Tracker
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              We never mix multi-year harvests. Every container belongs to a single seasonal micro-batch stamped with origin tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-2 text-center shadow-2xs">
              <Calendar className="w-8 h-8 text-[#2D4233] mx-auto mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Active Batch Harvest</span>
              <h4 className="font-serif text-xl font-bold text-[#1C241D]">{data.harvestSeason}</h4>
            </div>

            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-2 text-center shadow-2xs">
              <MapPin className="w-8 h-8 text-[#2D4233] mx-auto mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Micro-Region</span>
              <h4 className="font-serif text-xl font-bold text-[#1C241D]">{data.origin}</h4>
            </div>

            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-2 text-center shadow-2xs">
              <Thermometer className="w-8 h-8 text-[#2D4233] mx-auto mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Processing Standard</span>
              <h4 className="font-serif text-xl font-bold text-[#1C241D]">{data.curingDays}</h4>
            </div>

            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-2 text-center shadow-2xs">
              <ShieldCheck className="w-8 h-8 text-[#2D4233] mx-auto mb-2" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Quality Rating</span>
              <h4 className="font-serif text-xl font-bold text-[#1C241D]">Grade A Pure Terroir</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. PROBIOTIC & GUT-HEALTH WELLNESS GRID
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D4233]">Holistic Wellness</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C241D]">
              4 Pillars of Holistic Health Restoration
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              How pure unadulterated organic harvest supports cellular energy, gut microbiota, and systemic resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-3 shadow-2xs">
              <Heart className="w-8 h-8 text-[#2D4233]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Microbiome Balance</h3>
              <p className="text-base text-[#475569] leading-relaxed">Encourages natural digestive enzyme secretion and friendly gut bacteria growth.</p>
            </div>

            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-3 shadow-2xs">
              <Zap className="w-8 h-8 text-[#B58600]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Cellular ATP Energy</h3>
              <p className="text-base text-[#475569] leading-relaxed">Supplies essential bio-minerals to boost mitochondrial stamina without caffeine jitters.</p>
            </div>

            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-3 shadow-2xs">
              <Leaf className="w-8 h-8 text-[#2D4233]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Zero Toxic Burden</h3>
              <p className="text-base text-[#475569] leading-relaxed">Free of synthetic preservatives, heavy metal dyes, or high-heat oxidized oils.</p>
            </div>

            <div className="bg-[#FBF9F4] p-6 rounded-2xl border border-[#E2E8F0] space-y-3 shadow-2xs">
              <Sparkles className="w-8 h-8 text-[#B58600]" />
              <h3 className="font-serif text-xl font-bold text-[#1C241D]">Antioxidant Shield</h3>
              <p className="text-base text-[#475569] leading-relaxed">Protects cells against oxidative micro-damage and restores youthful vitality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          8. ARTISANAL STORAGE & JAR CARE GUIDELINES
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#FBF9F4] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B58600]">Longevity Care</span>
              <h2 className="font-serif text-3xl font-bold text-[#1C241D]">
                Preserving Optimal Potency at Home
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Follow these traditional pantry storage steps to ensure your artisanal harvest stays fresh and potent for up to 36 months.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-base text-[#1C241D] font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#2D4233] shrink-0 mt-0.5" />
                  <span>Store in a cool, dark pantry away from direct heat or stove steam.</span>
                </div>
                <div className="flex items-start gap-3 text-base text-[#1C241D] font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#2D4233] shrink-0 mt-0.5" />
                  <span>Always use a clean, dry spoon to prevent water droplet contamination.</span>
                </div>
                <div className="flex items-start gap-3 text-base text-[#1C241D] font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#2D4233] shrink-0 mt-0.5" />
                  <span>Ensure glass lid is tightly fastened after every single spoon scoop.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FBF9F4] p-8 rounded-2xl border border-[#E2E8F0] space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#1C241D]">Pantry Shelf-Life Guarantee</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FBF9F4] p-4 rounded-xl border border-[#E2E8F0]">
                  <Clock className="w-6 h-6 text-[#2D4233] mb-1" />
                  <span className="text-xs text-[#64748B] block">Unopened Jar</span>
                  <strong className="text-base text-[#1C241D] block">Up to 36 Months</strong>
                </div>
                <div className="bg-[#FBF9F4] p-4 rounded-xl border border-[#E2E8F0]">
                  <Droplets className="w-6 h-6 text-[#B58600] mb-1" />
                  <span className="text-xs text-[#64748B] block">Opened Jar</span>
                  <strong className="text-base text-[#1C241D] block">12 — 18 Months</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          9. SUSTAINABLE FAIR-TRADE MOUNTAIN FARMING ALLIANCE
      ════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#162017] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FDD229]">Ethical Sourcing</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Supporting Local Mountain Farming Families
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                By purchasing Barn.pk produce, you directly fund fair-trade living wages for small-scale indigenous farming communities in mountain valleys. We eliminate exploitative middlemen and invest 10% of profits into local clean water systems and regenerative soil care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <Heart className="w-6 h-6 text-[#FDD229] mb-1" />
                  <strong className="text-xl font-bold text-white block">100% Fair Pay</strong>
                  <span className="text-xs text-white/70 block">Direct farmer payouts</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <Leaf className="w-6 h-6 text-[#FDD229] mb-1" />
                  <strong className="text-xl font-bold text-white block">Zero Chemical</strong>
                  <span className="text-xs text-white/70 block">Organic soil care</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <ShieldCheck className="w-6 h-6 text-[#FDD229] mb-1" />
                  <strong className="text-xl font-bold text-white block">10% Reinvested</strong>
                  <span className="text-xs text-white/70 block">Valley clean water</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 p-8 rounded-2xl border border-white/15 backdrop-blur-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#FDD229]">Soil Stewardship Pledge</h3>
              <p className="text-base text-white/85 leading-relaxed">
                Our partner farms use multi-crop rotation and organic compost to maintain topsoil fertility without synthetic chemical fertilizers or pesticides.
              </p>
              <div className="pt-2 text-sm font-semibold text-white/90 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FDD229]" /> Certified Eco-Harvest Standard
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
