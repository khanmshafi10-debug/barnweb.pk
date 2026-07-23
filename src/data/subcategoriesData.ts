export interface SubcategoryInfo {
  id: string;
  categoryKey: 'supplements' | 'spices' | 'pickles' | 'nuts';
  categoryTitle: string;
  title: string;
  subtitle: string;
  heroImage: string;
  galleryTitle: string;
  galleryImages: { url: string; caption: string; shape: 'arch' | 'circle' | 'pill' | 'badge' }[];
  description: string;
  extendedHistory: string;
  origin: string;
  extractionMethod: string;
  purityGrade: string;
  shelfLife: string;
  altitude: string;
  botanicalName: string;
  activeCompounds: string;
  nutritionalHighlights: { label: string; value: string }[];
  keyBenefits: { title: string; desc: string }[];
  howToUseSteps: { step: string; title: string; desc: string }[];
  recipes: { title: string; ingredients: string[]; instructions: string }[];
  comparisonData: { feature: string; barnStandard: string; commercialBrand: string }[];
  faqs: { question: string; answer: string }[];
  reviews: { author: string; city: string; rating: number; date: string; comment: string }[];
}

export const SUBCATEGORIES_DATA: Record<string, SubcategoryInfo> = {
  // ══════════════════════════════════════════
  // SUPPLEMENTS
  // ══════════════════════════════════════════
  'shilajit': {
    id: 'shilajit',
    categoryKey: 'supplements',
    categoryTitle: 'Organic Mountain Supplements',
    title: 'Shilajit & Mineral Pitch',
    subtitle: 'High-altitude 16,000+ ft Gilgit-Baltistan resin enriched with 85+ ionic trace minerals and 60%+ fulvic acid.',
    heroImage: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Skardu Mountain Foraging & Biophotonic Glass Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80', caption: 'Purified Raw Resin Pitch', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', caption: '16,000 ft Skardu Crags', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', caption: 'Miron Dark Glass Packaging', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=800&q=80', caption: 'Glacier Water Sun Filtration', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80', caption: 'PCSIR Lab Density Verification', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=800&q=80', caption: 'Pure Resin Golden Elixir', shape: 'circle' }
    ],
    description: 'Sourced exclusively from dark rocky crevices above 16,000 feet on the Skardu Plateau. Sun-dried and slow-filtered with pure glacier water without synthetic solvents or high-heat processing.',
    extendedHistory: 'Himalayan Shilajit has been treasured in traditional Ayurvedic and Unani tibb medicine for over 3,000 years. Formed slowly over centuries by the decomposition of pristine high-altitude medicinal flora trapped beneath mountain rocks under intense tectonic pressure, Shilajit oozes out during warm summer months as a thick, bio-rich mineral pitch.',
    origin: 'Skardu Plateau (16,000+ ft), Gilgit-Baltistan',
    extractionMethod: 'Traditional Sun-Cured Glacier Water Filtration',
    purityGrade: 'PCSIR Certified Grade-A Resin (60%+ Fulvic Acid)',
    shelfLife: '36 Months in Biophotonic Miron Glass',
    altitude: '16,000 to 18,500 Feet',
    botanicalName: 'Asphaltum Punjabianum',
    activeCompounds: 'Fulvic Acid, Humic Acid, Dibenzo-alpha-pyrones (DBPs), 85+ Ionic Minerals',
    nutritionalHighlights: [
      { label: 'Fulvic Acid Content', value: '62.4%' },
      { label: 'Ionic Minerals', value: '85+ Trace Elements' },
      { label: 'Heavy Metal Safety', value: 'PCSIR Lab Screened (0.00% Lead/Mercury)' },
      { label: 'Solvents Used', value: 'Zero (Pure Glacier Water Only)' }
    ],
    keyBenefits: [
      { title: 'Cellular Energy & ATP Production', desc: 'Fulvic acid acts as an electron carrier, stimulating mitochondrial activity and accelerating ATP energy synthesis for non-jittery physical stamina.' },
      { title: 'Cognitive Focus & Memory Clarity', desc: 'Dibenzo-alpha-pyrones protect brain tissue from oxidative micro-damage, enhancing recall speed, mental sharpness, and alertness.' },
      { title: 'Hormonal Balance & Testosterone Support', desc: 'Clinical studies demonstrate that pure resin promotes natural endocrine balance, vitality, and hormonal regulation in both men and women.' },
      { title: 'Mineral Absorption Vehicle', desc: 'Transports 85+ ionic trace minerals directly across cellular membranes, reversing nutrient deficiencies caused by modern depleted diets.' },
      { title: 'Muscle Recovery & Endurance', desc: 'Reduces lactic acid buildup after strenuous exercise, speeding up joint, tendon, and muscular tissue repair.' },
      { title: 'Immune Resilience & Detoxification', desc: 'Chelates heavy metals and metabolic waste toxins, flushing them safely out of the lymphatic system.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Measure Precise Portion', desc: 'Scoop a small pea-sized portion (200mg-300mg) using the included wooden applicator tool.' },
      { step: '02', title: 'Dissolve in Warm Liquid', desc: 'Stir thoroughly into warm filtered water, green tea, herbal infusion, or warm golden milk until completely dissolved.' },
      { step: '03', title: 'Morning Fasting Consumption', desc: 'Drink every morning on an empty stomach 20-30 minutes before breakfast for maximum bio-availability.' },
      { step: '04', title: 'Consistent 8-Week Protocol', desc: 'Follow the protocol continuously for 8 weeks followed by a 1-week rest period to allow cellular integration.' }
    ],
    recipes: [
      {
        title: 'Skardu Mountain Golden Shilajit Tonic',
        ingredients: ['200mg Barn Shilajit Resin', '1 cup Warm Almond Milk', '1/2 tsp Barn Organic Haldi', '1 tsp Raw Sidr Honey', 'Pinch of Black Pepper'],
        instructions: 'Heat almond milk to 65°C. Stir in Haldi, black pepper, and Shilajit resin until smooth. Remove from heat, mix in Sidr Honey, and sip slowly.'
      }
    ],
    comparisonData: [
      { feature: 'Harvest Elevation', barnStandard: '16,000+ ft Skardu Escarpment', commercialBrand: '3,000 ft Lowland Sediment' },
      { feature: 'Purification Process', barnStandard: 'Glacier Water Sun-Cured (Zero Solvents)', commercialBrand: 'Chemical Alcohol & High-Heat Drying' },
      { feature: 'Bioactive Fulvic Acid', barnStandard: '62.4% Certified High Potency', commercialBrand: '< 15% Diluted Powder' },
      { feature: 'Packaging Material', barnStandard: 'Biophotonic Miron Dark Glass', commercialBrand: 'Cheap Plastic Tubs' }
    ],
    faqs: [
      { question: 'How do I test if my Shilajit resin is 100% authentic?', answer: 'Genuine high-altitude Shilajit dissolves completely in warm liquid without leaving sandy sediment, hardens in cold temperatures, pliable at room temperature, and burns without producing ash.' },
      { question: 'What is fulvic acid and why is 60%+ concentration important?', answer: 'Fulvic acid is nature’s ultimate nutrient transporter. It chelates minerals into microscopic ionic particles that effortlessly cross cell walls.' },
      { question: 'Can women take Shilajit resin safely?', answer: 'Yes! Shilajit is equally beneficial for women. It supports iron absorption, balances female hormones, improves bone density, and combats daily fatigue.' },
      { question: 'How long does a 30g jar of Shilajit resin last?', answer: 'When taken daily at the recommended 250mg dose, a single 30g jar provides a full 120-day supply.' }
    ],
    reviews: [
      { author: 'Dr. Tariq Mahmood', city: 'Lahore', rating: 5, date: '14 July 2026', comment: 'Outstanding purity. I tested this resin at a local lab and verified the high fulvic acid profile.' },
      { author: 'Zainab Shah', city: 'Islamabad', rating: 5, date: '02 June 2026', comment: 'Dissolves cleanly in warm green tea. No metallic aftertaste, just pure earthy energy.' },
      { author: 'Kamran Akram', city: 'Karachi', rating: 5, date: '28 May 2026', comment: 'Hands down the best Shilajit in Pakistan. Real resin pitch that hardens in the fridge.' }
    ]
  },

  'ashwagandha': {
    id: 'ashwagandha',
    categoryKey: 'supplements',
    categoryTitle: 'Organic Mountain Supplements',
    title: 'Ashwagandha & Adaptogens',
    subtitle: 'Full-spectrum KSM-66 organic root extract to lower cortisol, calm chronic stress, and restore stamina.',
    heroImage: 'https://images.unsplash.com/photo-1515023115894-bacee5665a73?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Skardu Organic Nursery & Root Powder Extraction',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1515023115894-bacee5665a73?auto=format&fit=crop&w=800&q=80', caption: 'Organic Ashwagandha Roots', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80', caption: 'KSM-66 Bio-Assay Testing', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80', caption: 'Milled Root Powder Jar', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1550411294-875e42ee0261?auto=format&fit=crop&w=800&q=80', caption: 'Shade-Drying Root Trays', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', caption: 'Bedtime Moon Milk Tonic', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80', caption: 'Skardu High Crop Soil', shape: 'circle' }
    ],
    description: 'High-potency organic root extract derived from high-altitude Skardu crops. Helps lower cortisol, enhance cognitive focus, and restore nighttime deep sleep balance.',
    extendedHistory: 'Known in classical Sanskrit literature as the "Smell of a Horse", Ashwagandha imparts both the physical stamina of a stallion and serene mental calm.',
    origin: 'Skardu Valley, Gilgit-Baltistan',
    extractionMethod: 'Pure Water-Based Green Extraction',
    purityGrade: '5% Standardized Withanolides',
    shelfLife: '24 Months in Miron Glass',
    altitude: '7,500 Feet',
    botanicalName: 'Withania Somnifera',
    activeCompounds: 'Withanolides, Withaferin A, Alkaloids, Saponins',
    nutritionalHighlights: [
      { label: 'Withanolide Content', value: '5.2% Standardized' },
      { label: 'Cortisol Reduction', value: 'Up to -27.9% Clinical' },
      { label: 'Solvents Used', value: 'Zero Synthetic Chemicals' },
      { label: 'Organic Grade', value: '100% Certified Root Only' }
    ],
    keyBenefits: [
      { title: 'Lowers Cortisol & Mental Fatigue', desc: 'Modulates the HPA axis, reducing overproduction of stress hormones during high-pressure work.' },
      { title: 'Promotes Deep Restorative Sleep', desc: 'Induces GABAergic nerve signaling that calms racing thoughts before bed.' },
      { title: 'Hormonal Vitality & Endurance', desc: 'Supports natural testosterone levels in men and thyroid balance in women.' },
      { title: 'Neuro-Protection & Focus', desc: 'Stimulates dendrite growth, improving memory retention and task clarity.' },
      { title: 'Adrenal Recovery & Stamina', desc: 'Rebuilds depleted adrenal reserves caused by chronic caffeine reliance.' },
      { title: 'Anti-Inflammatory Action', desc: 'Withaferin A suppresses inflammatory cytokines in muscle tissue.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Evening Dosage', desc: 'Take 1 tsp powder or 1 capsule 30-45 minutes before sleep.' },
      { step: '02', title: 'Prepare Moon Milk', desc: 'Whisk powder into warm almond or cow milk with honey and cinnamon.' },
      { step: '03', title: 'Daily Consistency', desc: 'Use daily for at least 30 days to experience full adaptogenic resilience.' },
      { step: '04', title: 'Avoid High Heat', desc: 'Do not boil powder directly; add to warm liquids after heating.' }
    ],
    recipes: [
      {
        title: 'Ashwagandha Bedtime Moon Milk',
        ingredients: ['1 tsp Barn Ashwagandha Powder', '1 cup Warm Whole Milk', '1/2 tsp Nutmeg', '1 tsp Raw Honey'],
        instructions: 'Heat milk until warm. Whisk in Ashwagandha and nutmeg. Remove from heat, stir in honey, and drink warm in bed.'
      }
    ],
    comparisonData: [
      { feature: 'Plant Component', barnStandard: '100% Organic Roots Only', commercialBrand: 'Diluted Leaves & Stems' },
      { feature: 'Withanolide Potency', barnStandard: '5.2% Standardized Extract', commercialBrand: '< 1.5% Crude Dust' },
      { feature: 'Chemical Additives', barnStandard: 'Zero Fillers or Silicon Dioxide', commercialBrand: 'Magnesium Stearate & Talc' },
      { feature: 'Sleep Quality Impact', barnStandard: 'Proven Deep Sleep Enhancement', commercialBrand: 'Minimal Impact' }
    ],
    faqs: [
      { question: 'When is the best time to take Ashwagandha?', answer: 'Evening or 45 minutes before bedtime is ideal as it calms cortisol and prepares the mind for restorative sleep.' },
      { question: 'Does Ashwagandha cause drowsiness during the day?', answer: 'No! Adaptogens balance your state — bringing calm at night and focused stamina during daytime.' },
      { question: 'Can men and women both take Ashwagandha?', answer: 'Yes, it balances cortisol and thyroid function for women while supporting vitality for men.' },
      { question: 'How long until I notice results?', answer: 'Stress relief is often felt within 3-5 days; optimal hormonal balance builds over 3-4 weeks.' }
    ],
    reviews: [
      { author: 'Bilal Hassan', city: 'Rawalpindi', rating: 5, date: '18 June 2026', comment: 'Transformed my sleep quality! I take 1 spoon in warm milk every night and wake up fully refreshed.' },
      { author: 'Dr. Ayesha Malik', city: 'Lahore', rating: 5, date: '04 June 2026', comment: 'As a physician, I highly recommend Barn Ashwagandha. Authentic root powder with great results.' },
      { author: 'Usman Ali', city: 'Peshawar', rating: 5, date: '21 May 2026', comment: 'Significantly lowered my work anxiety. Excellent quality.' }
    ]
  },

  'moringa': {
    id: 'moringa',
    categoryKey: 'supplements',
    categoryTitle: 'Organic Mountain Supplements',
    title: 'Moringa Superfood',
    subtitle: 'Nutrient-dense green leaf powder packed with 90+ vitamins, minerals, and 46 antioxidants.',
    heroImage: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Multan Organic Moringa Tree Grove & Leaf Powder',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80', caption: 'Shade-Dried Green Leaves', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=800&q=80', caption: 'Fine Milled Superfood Powder', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80', caption: 'Fresh Moringa Drumstick Pods', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', caption: 'Chlorophyll Green Powder', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80', caption: 'Green Smoothie Preparation', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', caption: 'Multan Organic Grove', shape: 'circle' }
    ],
    description: 'Shade-dried organic moringa oleifera leaf powder rich in chlorophyll, calcium, iron, and essential amino acids.',
    extendedHistory: 'Known as the "Miracle Tree of Life", Moringa oleifera leaves contain 7x more Vitamin C than oranges and 4x more calcium than milk.',
    origin: 'Multan Organic Moringa Groves',
    extractionMethod: 'Shade-Dried Dehydration & Cold Milled',
    purityGrade: '100% Pure Raw Leaf Powder',
    shelfLife: '24 Months in Sealed Pouch',
    altitude: '450 Feet',
    botanicalName: 'Moringa Oleifera',
    activeCompounds: 'Chlorophyll, Quercetin, Chlorogenic Acid, 18 Amino Acids',
    nutritionalHighlights: [
      { label: 'Vitamin C vs Orange', value: '7x Concentration' },
      { label: 'Calcium vs Milk', value: '4x Concentration' },
      { label: 'Protein Content', value: '27% Plant Protein' },
      { label: 'Drying Method', value: '100% Shade Dried' }
    ],
    keyBenefits: [
      { title: 'Combats Fatigue & Iron Deficiency', desc: 'Bioavailable plant iron and Vitamin C boost hemoglobin levels.' },
      { title: 'Regulates Blood Sugar & Glucose', desc: 'Chlorogenic acid reduces post-meal blood sugar spikes.' },
      { title: 'Potent 46 Antioxidants', desc: 'Quercetin and kaempferol neutralize cellular free radicals.' },
      { title: 'Supports Gut & Digestion', desc: 'High fiber content promotes smooth bowel movements.' },
      { title: 'Lactation Support for Mothers', desc: 'Traditional galactagogue that increases natural breastmilk production.' },
      { title: 'Alkalizes Body System', desc: 'Rich green chlorophyll restores optimal systemic alkalinity.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Daily Morning Scoop', desc: 'Add 1 teaspoon (3g-5g) into fresh water or juice.' },
      { step: '02', title: 'Blend in Smoothies', desc: 'Blend into green smoothies with apple, cucumber, and lemon.' },
      { step: '03', title: 'Sprinkle on Soups', desc: 'Dust over warm lentils, soups, or curries after cooking.' },
      { step: '04', title: 'Store Cool & Dark', desc: 'Keep pouch sealed in a cool dark pantry away from sunlight.' }
    ],
    recipes: [
      {
        title: 'Moringa Green Vitality Elixir',
        ingredients: ['1 tsp Barn Moringa Powder', '1 cup Fresh Apple Juice', '1/2 Squeezed Lemon', 'Mint Leaves'],
        instructions: 'Mix moringa powder into fresh apple juice. Add lemon juice and stir vigorously. Garnish with mint.'
      }
    ],
    comparisonData: [
      { feature: 'Leaf Drying Method', barnStandard: '100% Shade-Dried (Nutrients Preserved)', commercialBrand: 'Sun/Oven Dried (Brown Nutrients Lost)' },
      { feature: 'Powder Color', barnStandard: 'Vibrant Deep Emerald Green', commercialBrand: 'Dull Yellowish Brown' },
      { feature: 'Stem Content', barnStandard: 'Zero Stems (De-stemmed Leaf Only)', commercialBrand: 'Grind Stems & Twigs Filler' },
      { feature: 'Pesticide Safety', barnStandard: 'PCSIR Certified 100% Organic', commercialBrand: 'High Synthetic Residue' }
    ],
    faqs: [
      { question: 'Why is Barn Moringa bright emerald green instead of brown?', answer: 'We shade-dry leaves in temperature-controlled rooms. High heat or direct sunlight bleaches green chlorophyll brown.' },
      { question: 'Does Moringa replace a daily multivitamin?', answer: 'Yes! Moringa is nature’s most complete superfood with 90+ vitamins, minerals, and all 9 essential amino acids.' },
      { question: 'Can pregnant or nursing mothers take Moringa?', answer: 'It is a traditional nursing galactagogue, but consult your physician during pregnancy.' },
      { question: 'How much Moringa should I take daily?', answer: 'Start with 1 teaspoon daily and increase to 2 teaspoons as your body adapts.' }
    ],
    reviews: [
      { author: 'Shahid Khan', city: 'Multan', rating: 5, date: '11 July 2026', comment: 'Deep emerald green color and super fresh! My energy levels stay steady all day.' },
      { author: 'Nadia Pervez', city: 'Karachi', rating: 5, date: '29 June 2026', comment: 'Extremely fine powder. Easy to blend in morning green smoothies.' },
      { author: 'Dr. Faisal Hameed', city: 'Faisalabad', rating: 5, date: '15 May 2026', comment: 'Great natural iron supplement. Highly recommended.' }
    ]
  },

  'pollen': {
    id: 'pollen',
    categoryKey: 'supplements',
    categoryTitle: 'Organic Mountain Supplements',
    title: 'Bee Pollen & Honey',
    subtitle: 'Golden wildflower bee pollen granules gathered from alpine Swat Valley hives.',
    heroImage: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Swat Valley Wildflower Apiary & Pollen Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80', caption: 'Golden Wildflower Granules', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80', caption: 'Swat Valley Apiary Hives', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80', caption: 'Raw Honey Pollen Blend', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1550411294-875e42ee0261?auto=format&fit=crop&w=800&q=80', caption: 'Natural Bee Pollen Bowl', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&w=800&q=80', caption: 'Fresh Hive Collection', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', caption: 'Yogurt Topping Bowl', shape: 'circle' }
    ],
    description: 'Raw, unheated bee pollen granules packed with essential amino acids, B-vitamins, bioflavonoids, and live digestive enzymes.',
    extendedHistory: 'Harvested gently by nomadic beekeepers in high alpine valleys, bee pollen contains nearly every nutrient required by the human body.',
    origin: 'Swat Valley Alpine Meadows',
    extractionMethod: 'Gently Trapped Hive Pollen Collection',
    purityGrade: '100% Pure Raw Wildflower Granules',
    shelfLife: '18 Months in Glass Jar',
    altitude: '6,500 Feet',
    botanicalName: 'Apis Mellifera Flora Pollen',
    activeCompounds: 'Rutin, B-Complex Vitamins, Complete Proteins, Enzymes',
    nutritionalHighlights: [
      { label: 'Plant Protein', value: '35% Amino Acids' },
      { label: 'Rutin Bioflavonoid', value: 'High Vascular Support' },
      { label: 'Enzyme Processing', value: '100% Unheated Raw' },
      { label: 'Pesticides', value: '0.00% Alpine Clean' }
    ],
    keyBenefits: [
      { title: 'Clean Non-Caffeinated Energy', desc: 'B-vitamins and glycogen fuel physical stamina without crash.' },
      { title: 'Seasonal Allergy Resilience', desc: 'Micro-exposure to local flora pollen builds natural histaminic immunity.' },
      { title: 'Complete Plant Protein Source', desc: 'Contains all 22 essential amino acids required for tissue repair.' },
      { title: 'Capillary & Vascular Health', desc: 'High rutin content strengthens capillaries and vein elasticity.' },
      { title: 'Live Digestive Enzymes', desc: 'Active amylase and phosphatase assist gastrointestinal digestion.' },
      { title: 'Skin Cell Regeneration', desc: 'Bio-nutrients nourish skin collagen synthesis.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Start Small', desc: 'Begin with 1/2 teaspoon daily to test personal digestive tolerance.' },
      { step: '02', title: 'Top Morning Food', desc: 'Sprinkle over yogurt, chia bowls, warm oats, or fresh fruit.' },
      { step: '03', title: 'Do Not Cook', desc: 'Never heat or cook pollen granules to preserve live enzymes.' },
      { step: '04', title: 'Refrigerate', desc: 'Store jar in refrigerator to keep delicate enzymes potent.' }
    ],
    recipes: [
      {
        title: 'Alpine Pollen & Sidr Honey Power Parfait',
        ingredients: ['1 tbsp Barn Bee Pollen', '1 tbsp Barn Sidr Honey', '1 cup Greek Yogurt', 'Fresh Berries'],
        instructions: 'Layer Greek yogurt with berries. Drizzle Sidr Honey on top and sprinkle fresh golden bee pollen granules.'
      }
    ],
    comparisonData: [
      { feature: 'Heat Treatment', barnStandard: '100% Raw Unheated Granules', commercialBrand: 'High-Heat Kiln Dried (Enzymes Destroyed)' },
      { feature: 'Floral Origin', barnStandard: 'High Alpine Swat Wildflowers', commercialBrand: 'Commercial Monoculture Crops' },
      { feature: 'Flavor Profile', barnStandard: 'Sweet Floral Nutty Crunch', commercialBrand: 'Bitter Moldy Stale' },
      { feature: 'Purity Standard', barnStandard: 'Zero Sugar Water Feeding', commercialBrand: 'Adulterated Sugar Syrup' }
    ],
    faqs: [
      { question: 'What does Bee Pollen taste like?', answer: 'It has a sweet, floral, slightly nutty flavor with a delicate crunch.' },
      { question: 'Does Bee Pollen help with seasonal allergies?', answer: 'Yes! Consuming wild pollen introduces low micro-doses of natural plant proteins, building immunity.' },
      { question: 'Can children take Bee Pollen?', answer: 'Children over 1 year can enjoy 1/2 teaspoon daily; avoid under 12 months.' },
      { question: 'Should Bee Pollen be kept in the fridge?', answer: 'Yes, keeping raw pollen refrigerated preserves live enzymes for up to 18 months.' }
    ],
    reviews: [
      { author: 'Mariam Zubair', city: 'Islamabad', rating: 5, date: '05 July 2026', comment: 'Sweet golden granules! I sprinkle them on my morning yogurt every single day.' },
      { author: 'Dr. Haroon Rashid', city: 'Peshawar', rating: 5, date: '19 June 2026', comment: 'Helped tremendously with my spring pollen allergies. Superb quality.' },
      { author: 'Asad Shah', city: 'Rawalpindi', rating: 5, date: '02 June 2026', comment: '100% pure raw bee pollen. Exceptional taste and energy boost.' }
    ]
  },

  // ══════════════════════════════════════════
  // SPICES
  // ══════════════════════════════════════════
  'saffron': {
    id: 'saffron',
    categoryKey: 'spices',
    categoryTitle: 'Farm Spices & Pamir Saffron',
    title: 'Pamir Kashmiri Saffron',
    subtitle: 'Grade-1 Sargol deep crimson red stigma threads hand-harvested in Pamir Heights & Azad Kashmir.',
    heroImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Pamir Heights Harvest & Acrylic Keepsake Box Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', caption: 'Grade-1 Sargol Red Filaments', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=800&q=80', caption: 'Pamir Heights Crocus Fields', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80', caption: 'Saffron Infused Golden Dish', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1599909631715-ba3740556cff?auto=format&fit=crop&w=800&q=80', caption: 'Crocin Color Bio-Assay', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80', caption: 'Zafrani Milk Steeping', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80', caption: 'Autumn Bloom Hand Pick', shape: 'circle' }
    ],
    description: 'Deep crimson stigma threads hand-picked from organic crocus flowers. Certified Grade-1 Sargol saffron with vibrant floral aroma.',
    extendedHistory: 'Harvested during a brief 2-week autumn window at dawn before sunrise, it takes over 150,000 crocus flowers to yield just 1 kilogram of pure Sargol saffron.',
    origin: 'Pamir Foothills, Azad Kashmir',
    extractionMethod: 'Hand-Separated Stigma & Dawn Harvested',
    purityGrade: 'Certified Grade-1 Sargol Red (Crocin > 240)',
    shelfLife: '36 Months in Acrylic Box',
    altitude: '5,500 Feet',
    botanicalName: 'Crocus Sativus',
    activeCompounds: 'Crocin (Color), Safranal (Aroma), Picrocrocin (Taste)',
    nutritionalHighlights: [
      { label: 'Crocin Strength', value: '> 240 (Grade 1 Red)' },
      { label: 'Yellow Style Threads', value: '0% (Pure Red Stigma Only)' },
      { label: 'Synthetic Dyes', value: '0.00% Certified Free' },
      { label: 'Flowers / Gram', value: '150 Dawn-Picked Flowers' }
    ],
    keyBenefits: [
      { title: 'Gives Rich Golden Color & Aroma', desc: 'Highest natural crocin content releases brilliant golden hue in food.' },
      { title: 'Potent Mood Balancer & Serotonin', desc: 'Safranal enhances synaptic serotonin, supporting positive mood.' },
      { title: 'Promotes Radiant Skin Tone', desc: 'Protects skin against hyper-pigmentation and dullness.' },
      { title: 'Supports Eye Retinal Health', desc: 'Antioxidants protect macular tissue against age-related stress.' },
      { title: 'Digestive Comfort & Warmth', desc: 'Soothes stomach spasms and improves digestive assimilation.' },
      { title: '100% Pure Unadulterated', desc: 'Zero artificial red dyes, corn silk, or added weight oils.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Gently Crush Threads', desc: 'Place 4-6 threads in a mortar with a tiny pinch of sugar and crush.' },
      { step: '02', title: 'Steep in Warm Liquid', desc: 'Pour 2 tablespoons of warm water or milk over saffron and steep for 15 mins.' },
      { step: '03', title: 'Add to Culinary Recipe', desc: 'Add steeped golden liquid to biryani, kheer, kahwa tea, or rice.' },
      { step: '04', title: 'Store Air-Tight', desc: 'Keep in dark acrylic container away from moisture and light.' }
    ],
    recipes: [
      {
        title: 'Royal Kashmiri Zafrani Kahwa Tea',
        ingredients: ['5 Barn Saffron Threads', '2 Green Cardamoms', '1 Cinnamon Stick', '1 tsp Green Tea', 'Sliced Almonds', 'Honey'],
        instructions: 'Boil water with cardamom and cinnamon. Add green tea leaves, remove from heat. Strain into cup, add steeped saffron water, almonds, and honey.'
      }
    ],
    comparisonData: [
      { feature: 'Red Stigma Purity', barnStandard: '100% Pure Sargol All-Red', commercialBrand: 'Mixed Yellow/White Style Threads' },
      { feature: 'Crocin Color Score', barnStandard: '> 240 (Certified Grade 1)', commercialBrand: '< 120 (Faded Low Grade)' },
      { feature: 'Artificial Coloring', barnStandard: '0.00% Lab Screened', commercialBrand: 'Dyed Corn Silk Adulteration' },
      { feature: 'Aroma & Fragrance', barnStandard: 'Intense Warm Floral Honey', commercialBrand: 'Musty Chemical Smell' }
    ],
    faqs: [
      { question: 'How do I test if my saffron is genuine or dyed?', answer: 'Real saffron colors water slowly into golden yellow. Dyed saffron turns water red immediately.' },
      { question: 'What is Sargol saffron?', answer: 'Sargol means "top of the flower". It consists of only the deep crimson red stigma tips, without yellow styles.' },
      { question: 'How many threads should I use per dish?', answer: 'Just 4 to 6 threads are enough for a family dish of biryani or 4 cups of tea.' },
      { question: 'How long does saffron stay fresh?', answer: 'Stored in a cool dark container, it retains full aroma for 3 years.' }
    ],
    reviews: [
      { author: 'Begum Salma', city: 'Lahore', rating: 5, date: '10 July 2026', comment: 'Intense golden color and incredible aroma! Just 5 threads transformed my biryani.' },
      { author: 'Dr. Kashif Raza', city: 'Islamabad', rating: 5, date: '22 June 2026', comment: 'Highest quality Kashmiri saffron I have bought in Pakistan. Genuine Sargol grade.' },
      { author: 'Hina Tariq', city: 'Karachi', rating: 5, date: '05 June 2026', comment: 'Beautiful gift packaging and amazing fragrance. 100% pure.' }
    ]
  },

  'haldi': {
    id: 'haldi',
    categoryKey: 'spices',
    categoryTitle: 'Farm Spices & Pamir Saffron',
    title: 'Organic Haldi (Turmeric)',
    subtitle: 'Unadulterated high-curcumin stone-ground organic turmeric root powder.',
    heroImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Kasur Spice Belt & Stone-Ground Haldi Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', caption: 'High Curcumin Haldi Powder', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', caption: 'Sun-Dried Turmeric Root Fingers', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80', caption: 'Golden Milk Latte Preparation', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', caption: 'Spice Market Display', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1514536338938-0e39e1d7e25a?auto=format&fit=crop&w=800&q=80', caption: 'Golden Haldi Cooking Prep', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1599909631715-ba3740556cff?auto=format&fit=crop&w=800&q=80', caption: 'Kasur Farm Root Harvest', shape: 'circle' }
    ],
    description: 'Traditional slow stone-milled organic turmeric roots containing 5%+ natural curcumin. Free of yellow dyes, lead chromate, or starch fillers.',
    extendedHistory: 'Cultivated in the rich fertile soil of Kasur, our organic turmeric roots are boiled naturally, sun-dried, and cold stone-ground.',
    origin: 'Kasur Organic Spice Farms, Punjab',
    extractionMethod: 'Slow Cold Stone-Milled Roots',
    purityGrade: '100% Pure Organic Root (5%+ Curcumin)',
    shelfLife: '24 Months in Sealed Pouch',
    altitude: '650 Feet',
    botanicalName: 'Curcuma Longa',
    activeCompounds: 'Curcuminoids, Turmerones, Essential Oils',
    nutritionalHighlights: [
      { label: 'Curcumin Level', value: '5.2% Certified High' },
      { label: 'Lead Chromate', value: '0.00% Lab Screened' },
      { label: 'Yellow Dye Fillers', value: '0.00% Purity Verified' },
      { label: 'Grinding Method', value: 'Slow Cold Stone Mill' }
    ],
    keyBenefits: [
      { title: 'Natural Anti-Inflammatory & Joint Support', desc: 'Curcumin inhibits COX-2 inflammatory pathways, soothing joint discomfort.' },
      { title: 'Enhances Immunity & Gut Defense', desc: 'Stimulates digestive bile and strengthens intestinal lining.' },
      { title: 'Gives Rich Golden Hue & Earthy Taste', desc: 'Adds authentic rich color to home cooking without artificial dyes.' },
      { title: 'Potent Liver Detoxifier', desc: 'Increases glutathione production, supporting liver filtration.' },
      { title: 'Facial Glow & Acne Ubtan', desc: 'Natural antibacterial mask ingredient that fades dark spots.' },
      { title: '100% Unadulterated Purity', desc: 'Screened to ensure zero lead chromate adulteration.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Cooking Curry Base', desc: 'Add 1/2 tsp to hot oil along with onions and garlic.' },
      { step: '02', title: 'Golden Milk Remedy', desc: 'Whisk 1/2 tsp into warm milk with black pepper and honey.' },
      { step: '03', title: 'Skincare Face Mask', desc: 'Mix 1/4 tsp with yogurt or rose water for 15-minute face ubtan.' },
      { step: '04', title: 'Always Pair with Pepper', desc: 'Add a pinch of black pepper to increase curcumin absorption by 2000%.' }
    ],
    recipes: [
      {
        title: 'Authentic Healing Golden Haldi Milk',
        ingredients: ['1/2 tsp Barn Organic Haldi', '1 cup Warm Whole Milk', 'Pinch of Black Pepper', '1/4 tsp Cinnamon', '1 tsp Raw Honey'],
        instructions: 'Warm milk in saucepan. Add Haldi, black pepper, and cinnamon. Whisk until fragrant. Remove from heat, mix in honey, and drink warm.'
      }
    ],
    comparisonData: [
      { feature: 'Lead Safety', barnStandard: '0.00% Certified Free (PCSIR Tested)', commercialBrand: 'High Lead Chromate Dye Adulteration' },
      { feature: 'Curcumin Potency', barnStandard: '5.2% High Bioactive Level', commercialBrand: '< 1.5% Depleted Extract' },
      { feature: 'Grinding Heat', barnStandard: 'Slow Cold Stone Mill (Nutrients Retained)', commercialBrand: 'High-Heat Steel Mill (Burned Oils)' },
      { feature: 'Color Source', barnStandard: '100% Natural Turmeric Root', commercialBrand: 'Chemical Yellow Dye & Starch' }
    ],
    faqs: [
      { question: 'Is Barn Haldi tested for lead chromate adulteration?', answer: 'Yes! Every batch undergoes independent laboratory testing to certify zero lead chromate.' },
      { question: 'Why should black pepper be consumed with turmeric?', answer: 'Piperine in black pepper boosts curcumin absorption by 2,000%.' },
      { question: 'Can I use this turmeric for face masks (ubtan)?', answer: 'Yes, it is 100% pure food-grade turmeric. For non-staining facial masks, try our Kasthuri Manjal.' },
      { question: 'How much curcumin is in this Haldi?', answer: 'Our Kasur harvest tests at over 5.2% natural curcumin content.' }
    ],
    reviews: [
      { author: 'Chaudhry Salman', city: 'Kasur', rating: 5, date: '12 July 2026', comment: 'Real aromatic Haldi! The golden color and fragrance in curries is unbelievable.' },
      { author: 'Dr. Humaira Riaz', city: 'Lahore', rating: 5, date: '28 June 2026', comment: 'Laboratory certified lead-free. Perfect for golden milk drinks.' },
      { author: 'Sobia Farooq', city: 'Faisalabad', rating: 5, date: '14 May 2026', comment: 'Very high quality organic turmeric. Excellent taste.' }
    ]
  },

  'chili': {
    id: 'chili',
    categoryKey: 'spices',
    categoryTitle: 'Farm Spices & Pamir Saffron',
    title: 'Red Chilis & Paprika',
    subtitle: 'Sun-dried stone-ground red chilis from Kunri with vibrant crimson color and fiery kick.',
    heroImage: 'https://images.unsplash.com/photo-1588879460419-74d3d19e075c?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Kunri Chili Capital Harvest & Spice Mill Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1588879460419-74d3d19e075c?auto=format&fit=crop&w=800&q=80', caption: 'Kunri Red Chili Powder', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=800&q=80', caption: 'Whole Sun-Dried Kashmiri Pods', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1526346698789-22fd84314424?auto=format&fit=crop&w=800&q=80', caption: 'Crushed Red Pepper Flakes', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1592769606534-fe78d27bf450?auto=format&fit=crop&w=800&q=80', caption: 'Sun Drying Field Mats', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', caption: 'Fiery Red Chili Oil', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?auto=format&fit=crop&w=800&q=80', caption: 'Smoked Chili Condiment', shape: 'circle' }
    ],
    description: 'Freshly milled red chilis sourced from Kunri — the chili capital of Pakistan. Rich capsaicin content without artificial red dyes or sawdust.',
    extendedHistory: 'Kunri in Sindh produces some of the finest red chilis in Asia. Harvested at peak ripeness and sun-dried on clean mats.',
    origin: 'Kunri Chili Farms, Sindh',
    extractionMethod: 'Sun-Dried & Slow Stone-Ground',
    purityGrade: '100% Pure Red Chili Pods',
    shelfLife: '24 Months in Sealed Pouch',
    altitude: '50 Feet',
    botanicalName: 'Capsicum Annuum',
    activeCompounds: 'Capsaicin, Dihydrocapsaicin, Vitamin C, Carotenoids',
    nutritionalHighlights: [
      { label: 'Capsaicin Heat', value: 'Authentic Fiery Kick' },
      { label: 'Synthetic Dyes', value: '0.00% Rhodamine B Free' },
      { label: 'Wood Sawdust Filler', value: '0.00% Pure Spice Only' },
      { label: 'Drying Standard', value: 'Sun-Dried Clean Mats' }
    ],
    keyBenefits: [
      { title: 'Vibrant Natural Red Color', desc: 'Adds brilliant crimson hue to curries naturally without synthetic dyes.' },
      { title: 'Authentic Spicy Capsaicin Kick', desc: 'Capsaicin stimulates endorphins and boosts metabolic calorie burn.' },
      { title: 'Supports Circulation & Heart', desc: 'Promotes healthy blood vessel dilation and circulation.' },
      { title: 'Rich in Vitamin C & Carotenoids', desc: 'Freshly milled chilis contain natural antioxidants.' },
      { title: 'Enhances Appetite & Digestion', desc: 'Stimulates gastric secretions for smoother food digestion.' },
      { title: '100% Pure Unadulterated', desc: 'Screened to ensure zero brick dust, sawdust, or illegal dyes.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Curry Spice Base', desc: 'Add 1/2 to 1 tsp red chili powder while sautéing onions and tomatoes.' },
      { step: '02', title: 'Tadka Oil Tempering', desc: 'Fry whole red chilis in hot ghee for 30 seconds before pouring over dal.' },
      { step: '03', title: 'Meat Marinades', desc: 'Mix with yogurt, lemon, and garlic to coat chicken for grilling.' },
      { step: '04', title: 'Store Airtight', desc: 'Keep in an airtight jar in a cool dark pantry.' }
    ],
    recipes: [
      {
        title: 'Fiery Kunri Red Chili Tadka Dal',
        ingredients: ['1/2 tsp Barn Red Chili Powder', '3 Barn Whole Red Chilis', '2 tbsp Barn Desi Ghee', '1 cup Cooked Yellow Dal', '1 tsp Cumin'],
        instructions: 'Heat ghee in a small pan. Add cumin seeds and whole red chilis. Fry until fragrant. Stir in red chili powder and immediately pour hot tadka over cooked dal.'
      }
    ],
    comparisonData: [
      { feature: 'Color Safety', barnStandard: '100% Natural Chili Pod Red', commercialBrand: 'Toxic Rhodamine B Chemical Dye' },
      { feature: 'Filler Additives', barnStandard: 'Zero Sawdust or Brick Dust', commercialBrand: 'Wood Powder & Starch Fillers' },
      { feature: 'Flavor Profile', barnStandard: 'Fiery Pungent Fruity Chili', commercialBrand: 'Bland Bitter Chemical Heat' },
      { feature: 'Aflatoxin Testing', barnStandard: 'PCSIR Screened & Verified Safe', commercialBrand: 'High Mold Aflatoxin Risk' }
    ],
    faqs: [
      { question: 'Is Barn red chili powder colored with artificial red dye?', answer: 'Never! Our red chili is 100% pure sun-dried Kunri chilis. We lab test every batch for zero synthetic dyes.' },
      { question: 'What is the difference between Kashmiri chili and regular chili?', answer: 'Kashmiri chili gives deep red color with mild heat; regular Kunri chili provides vibrant red color with fiery heat.' },
      { question: 'How do I store red chili powder to keep it fresh?', answer: 'Keep it sealed in an airtight glass jar away from moisture and direct sunlight.' },
      { question: 'Is capsaicin healthy?', answer: 'Yes! Capsaicin boosts metabolism, supports heart health, and releases natural endorphins.' }
    ],
    reviews: [
      { author: 'Mirza Kamran', city: 'Karachi', rating: 5, date: '16 July 2026', comment: 'Authentic Kunri red chili! Great natural color and hot fiery taste without any chemical dye.' },
      { author: 'Nabeel Ahmed', city: 'Hyderabad', rating: 5, date: '30 June 2026', comment: 'The best red chili powder in Sindh. Very clean and fresh.' },
      { author: 'Rubina Yasmin', city: 'Multan', rating: 5, date: '11 May 2026', comment: 'Deep red color in curries. Excellent quality.' }
    ]
  },

  'whole': {
    id: 'whole',
    categoryKey: 'spices',
    categoryTitle: 'Farm Spices & Pamir Saffron',
    title: 'Ceylon Cinnamon & Whole Spices',
    subtitle: 'Fragrant Ceylon cinnamon quills, jumbo green cardamoms, and hand-sorted whole spices.',
    heroImage: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Swat Organic Spice Belt & Whole Spice Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80', caption: 'Ceylon Cinnamon Quills', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1541511553554-35944e5e5a74?auto=format&fit=crop&w=800&q=80', caption: 'Jumbo Green Cardamom Pods', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1583530749498-d4c32b0e2b7a?auto=format&fit=crop&w=800&q=80', caption: 'Tellicherry Black Peppercorns', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80', caption: 'Star Anise & Cloves Mix', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80', caption: 'Royal Garam Masala Blend', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80', caption: 'Whole Spice Arrangement', shape: 'circle' }
    ],
    description: 'Thin-layered fragrant Ceylon cinnamon quills with delicate sweet aroma and low coumarin content safe for daily use.',
    extendedHistory: 'Sourced from organic nurseries, our whole spices are hand-sorted to remove broken debris and packed whole to preserve natural essential oils.',
    origin: 'Swat Organic Spice Belt & Kashmir',
    extractionMethod: 'Hand-Sorted Whole Harvested Spices',
    purityGrade: '100% Pure Grade-A Whole Spices',
    shelfLife: '36 Months in Glass Jar',
    altitude: '4,500 Feet',
    botanicalName: 'Cinnamomum Verum & Spices',
    activeCompounds: 'Cinnamaldehyde, Eucalyptol, Piperine, Eugenol',
    nutritionalHighlights: [
      { label: 'Cinnamon Species', value: 'True Ceylon (Low Coumarin)' },
      { label: 'Essential Oil Level', value: 'High Natural Volatile Oil' },
      { label: 'Spices Sorting', value: '100% Hand-Sorted Grade A' },
      { label: 'Exhausted Spices', value: '0% Oil Extracted' }
    ],
    keyBenefits: [
      { title: 'Supports Healthy Blood Sugar Balance', desc: 'Ceylon cinnamon quills improve insulin receptor sensitivity.' },
      { title: 'Rich Aromatic Kitchen Fragrance', desc: 'Whole unground spices release sweet woody aromas when warmed.' },
      { title: 'Low Coumarin Safety for Daily Use', desc: 'True Ceylon contains 250x less liver-taxing coumarin than Cassia.' },
      { title: 'Freshens Breath & Digestion', desc: 'Green cardamom seeds act as natural oral antimicrobials.' },
      { title: 'High Essential Oil Retention', desc: 'Whole spices lock in essential oils until cracked or ground at home.' },
      { title: '100% Hand-Sorted Purity', desc: 'Cleaned and sorted to eliminate twigs, dust, or hollow shells.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Warm Oil Tempering', desc: 'Add whole cinnamon sticks, cardamoms, and cloves to hot ghee before adding rice or curry.' },
      { step: '02', title: 'Herbal Tea Decoction', desc: 'Simmer 1 cinnamon stick and 2 crushed cardamoms in boiling water for 10 minutes.' },
      { step: '03', title: 'Fresh Home Grinding', desc: 'Grind small batches in a coffee grinder for ultra-fresh garam masala.' },
      { step: '04', title: 'Glass Jar Storage', desc: 'Store in airtight glass jars to prevent essential oil evaporation.' }
    ],
    recipes: [
      {
        title: 'Fragrant Whole Spice Royal Rice Biryani',
        ingredients: ['1 Barn Ceylon Cinnamon Stick', '3 Barn Green Cardamoms', '4 Cloves', '1 Star Anise', '2 cups Basmati Rice', '2 tbsp Desi Ghee'],
        instructions: 'Sauté whole cinnamon stick, cardamoms, cloves, and star anise in hot ghee for 60 seconds until fragrant. Add soaked basmati rice and water, cover and cook.'
      }
    ],
    comparisonData: [
      { feature: 'Cinnamon Type', barnStandard: 'True Ceylon Cinnamomum Verum', commercialBrand: 'Cheap Hard Cassia Bark (High Coumarin)' },
      { feature: 'Oil Retention', barnStandard: '100% Intact Natural Oils', commercialBrand: 'Distilled Spent Waste Spices' },
      { feature: 'Cardamom Pod Size', barnStandard: 'Jumbo Plump Green Pods', commercialBrand: 'Small Bleached Yellow Empty Shells' },
      { feature: 'Dust & Debris', barnStandard: '0% Clean Hand-Sorted', commercialBrand: 'High Dirt & Stick Contamination' }
    ],
    faqs: [
      { question: 'What is the difference between Ceylon Cinnamon and Cassia?', answer: 'Ceylon is thin, layered, sweet, and safe for daily use. Cassia is hard, dark, bitter, and high in liver-taxing coumarin.' },
      { question: 'Why are whole spices better than pre-ground powders?', answer: 'Whole spices lock essential volatile oils inside their natural structure for 3+ years.' },
      { question: 'Are these green cardamoms artificially dyed?', answer: 'No! Our cardamoms are naturally dried in dark rooms to preserve natural green chlorophyll.' },
      { question: 'How long do whole spices remain potent?', answer: 'Stored in sealed glass jars, whole spices remain aromatic for up to 3 years.' }
    ],
    reviews: [
      { author: 'Tariq Mehmood', city: 'Islamabad', rating: 5, date: '19 July 2026', comment: 'Authentic thin Ceylon cinnamon! You can peel the layers easily with your fingernail.' },
      { author: 'Sadia Imran', city: 'Lahore', rating: 5, date: '01 July 2026', comment: 'Jumbo green cardamoms bursting with fragrant black seeds. Premium spice quality.' },
      { author: 'Zubair Shah', city: 'Rawalpindi', rating: 5, date: '18 May 2026', comment: 'Very clean whole spices with zero dust. Highly recommended.' }
    ]
  },

  // ══════════════════════════════════════════
  // PICKLES
  // ══════════════════════════════════════════
  'mango': {
    id: 'mango',
    categoryKey: 'pickles',
    categoryTitle: 'Handcrafted Desi Pickles',
    title: 'Raw Mango Achar (Aam)',
    subtitle: 'Crisp green mangoes cured in earthen pots with cold-pressed mustard oil & whole spices.',
    heroImage: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Multan Mango Orchard & Traditional Matka Fermentation',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80', caption: 'Crisp Green Mango Slice Achar', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1626200419199-391ae487d14a?auto=format&fit=crop&w=800&q=80', caption: 'Multan Raw Mango Ferment', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', caption: 'Cold-Pressed Mustard Oil Curing', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', caption: 'Kalonji & Fenugreek Seed Mix', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80', caption: 'Traditional Earthen Pot Sun Cure', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', caption: 'Paratha & Achar Breakfast Plate', shape: 'circle' }
    ],
    description: 'Crisp sour green mangoes sun-dried with kalonji, fenugreek, and cured in earthen pots with cold-pressed mustard oil.',
    extendedHistory: 'Made using age-old family recipes from Multan, green mangoes are hand-sliced, salted, sun-dried, and fermented naturally in mustard oil.',
    origin: 'Multan Mango Orchards, Punjab',
    extractionMethod: 'Earthen Pot Sun-Cured Fermentation',
    purityGrade: '100% Mustard Oil Cured (Zero Vinegar)',
    shelfLife: '18 Months in Glass Jar',
    altitude: '400 Feet',
    botanicalName: 'Mangifera Indica Pickle',
    activeCompounds: 'Lactic Acid Probiotics, Capsaicin, Mustard Glucosides',
    nutritionalHighlights: [
      { label: 'Preservative Oil', value: '100% Cold-Pressed Mustard Oil' },
      { label: 'Acetic Acid / Vinegar', value: '0.00% (Zero Synthetic Acids)' },
      { label: 'Probiotic Bacteria', value: 'Live Lactic Acid Ferment' },
      { label: 'Chemical Colors', value: '0.00% Certified Free' }
    ],
    keyBenefits: [
      { title: 'Stimulates Digestive Juices & Appetite', desc: 'Tart organic acids stimulate salivary and stomach digestive enzymes.' },
      { title: 'Natural Gut Probiotic Fermentation', desc: 'Traditional oil curing fosters beneficial lactic acid probiotic cultures.' },
      { title: 'Zero Synthetic Vinegar or Acid', desc: 'Preserved naturally using mustard oil, salt, and sunshine without acetic acid.' },
      { title: 'Crisp Texture & Authentic Desi Taste', desc: 'Hand-sliced unripe mangoes retain satisfying firm crunch.' },
      { title: 'Rich in Digestive Spices', desc: 'Kalonji, fenugreek, and nigella seeds soothe abdominal gas.' },
      { title: '100% Pure Unadulterated Ingredients', desc: 'No artificial preservatives, food colorings, or cheap commercial oils.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Use Dry Spoon Always', desc: 'Always scoop pickle with a clean, dry spoon to prevent water contamination.' },
      { step: '02', title: 'Pair with Parathas', desc: 'Serve alongside warm stuffed parathas, puri, or dal chawal.' },
      { step: '03', title: 'Keep Mangoes Submerged', desc: 'Ensure pickle pieces remain submerged under mustard oil layer in jar.' },
      { step: '04', title: 'Room Temperature Storage', desc: 'Store jar at room temperature in a cool dry pantry.' }
    ],
    recipes: [
      {
        title: 'Traditional Multani Achar Paratha Roll',
        ingredients: ['1 tbsp Barn Raw Mango Achar', '1 Crispy Whole Wheat Paratha', '1 cup Plain Greek Yogurt'],
        instructions: 'Spread Barn Mango Achar over hot crispy wheat paratha. Roll tightly and enjoy with a bowl of cool plain yogurt.'
      }
    ],
    comparisonData: [
      { feature: 'Oil Source', barnStandard: '100% Cold-Pressed Mustard Oil', commercialBrand: 'Rancid Hydrogenated Palm Oil' },
      { feature: 'Preservation Acid', barnStandard: 'Natural Sun Fermentation (Zero Vinegar)', commercialBrand: 'Synthetic Acetic Acid / Vinegar' },
      { feature: 'Mango Quality', barnStandard: 'Hand-Sliced Fresh Green Mangoes', commercialBrand: 'Rotten Factory Waste Mangoes' },
      { feature: 'Artificial Colors', barnStandard: '0.00% Natural Spice Colors', commercialBrand: 'Tartrazine & Sunset Yellow Dyes' }
    ],
    faqs: [
      { question: 'Why is mustard oil used to preserve mango pickle?', answer: 'Pure cold-pressed mustard oil is a natural antimicrobial barrier that prevents mold growth while enhancing flavor.' },
      { question: 'Does Barn Mango Achar contain synthetic vinegar?', answer: 'No! Our pickle is 100% free from vinegar or synthetic acetic acid.' },
      { question: 'How long does a jar of Mango Achar stay good?', answer: 'When kept oil-submerged with a dry spoon, it stays delicious for up to 18 months.' },
      { question: 'Why does my pickle need oil covering the pieces?', answer: 'Oil creates an oxygen-free seal on top, preventing oxidation and preserving probiotics.' }
    ],
    reviews: [
      { author: 'Chaudhry Riaz', city: 'Multan', rating: 5, date: '15 July 2026', comment: 'Authentic Multani mango achar! Pure mustard oil taste just like my grandmother used to make.' },
      { author: 'Bushra Imran', city: 'Lahore', rating: 5, date: '02 July 2026', comment: 'Crisp mango chunks with zero vinegar bitterness. Tastes fantastic with dal rice.' },
      { author: 'Tariq Aziz', city: 'Rawalpindi', rating: 5, date: '20 May 2026', comment: 'Top quality pickle. Oil-submerged pieces stay super fresh.' }
    ]
  },

  'lemon': {
    id: 'lemon',
    categoryKey: 'pickles',
    categoryTitle: 'Handcrafted Desi Pickles',
    title: 'Lemon & Green Chili Pickle',
    subtitle: 'Sun-ripened lemons and spicy green chilis fermented with nigella seeds & rock salt.',
    heroImage: 'https://images.unsplash.com/photo-1590004953392-5141f9172eb0?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Pothohar Country Kitchen & Lemon Fermentation Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1590004953392-5141f9172eb0?auto=format&fit=crop&w=800&q=80', caption: 'Sun-Ripened Lemon Quarters', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=800&q=80', caption: 'Spicy Green Chili Strips', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', caption: 'Nigella & Cumin Curing Spices', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1605197788044-5a024f23685b?auto=format&fit=crop&w=800&q=80', caption: 'Traditional Jar Fermentation', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80', caption: 'Fresh Citrus Harvest Bowl', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', caption: 'Desi Lunch Plate Pairing', shape: 'circle' }
    ],
    description: 'Thin-skinned lemons and fresh green chilis cured in earthen pots for 45 days. Delivers a fiery, tangy punch.',
    extendedHistory: 'Crafted in Pothohar country kitchens, juicy lemons are quartered, spiced with roasted cumin and kalonji, and sun-fermented until rind softens.',
    origin: 'Pothohar Country Kitchens',
    extractionMethod: 'Earthen Pot 45-Day Sun Fermentation',
    purityGrade: '100% Pure Farm Lemon & Chili',
    shelfLife: '18 Months in Glass Jar',
    altitude: '1,600 Feet',
    botanicalName: 'Citrus Limon & Capsicum Pickle',
    activeCompounds: 'Citric Acid, Capsaicin, Bioflavonoids, Probiotic Cultures',
    nutritionalHighlights: [
      { label: 'Preservation Style', value: '45-Day Sun Fermentation' },
      { label: 'Vitamin C Content', value: 'High Bioavailable Level' },
      { label: 'Oil Type', value: 'Cold-Pressed Mustard Oil' },
      { label: 'Chemical Acids', value: '0.00% Acetic Acid Free' }
    ],
    keyBenefits: [
      { title: 'Supports Gut Microbiome & Probiotics', desc: 'Natural pot fermentation fosters healthy probiotic digestive bacteria.' },
      { title: 'Rich in Vitamin C & Bioflavonoids', desc: 'Sun-ripened lemons supply natural immune-boosting Vitamin C.' },
      { title: 'Zesty Tangy & Spicy Flavor Punch', desc: 'Juicy lemon rind paired with fiery green chilis brightens any meal.' },
      { title: 'Aids Stomach Bloating & Gas', desc: 'Ajwain and nigella seeds relieve post-meal abdominal fullness.' },
      { title: 'Zero Synthetic Preservatives', desc: '100% free from sodium benzoate or artificial vinegar.' },
      { title: 'Soft Tender Edible Lemon Rind', desc: '45-day sun fermentation turns lemon rind buttery soft and easy to eat.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Always Use Dry Spoon', desc: 'Prevent moisture entrance by using clean dry utensils.' },
      { step: '02', title: 'Pair with Khichdi & Rice', desc: 'Serve a lemon quarter alongside warm lentil khichdi or pulao.' },
      { step: '03', title: 'Mix with Yogurt Dip', desc: 'Mash a small piece into plain yogurt for an instant zesty dip.' },
      { step: '04', title: 'Store in Cool Pantry', desc: 'Keep jar tightly closed at room temperature.' }
    ],
    recipes: [
      {
        title: 'Pothohar Lemon Chili Khichdi Bowl',
        ingredients: ['1 Barn Lemon Chili Pickle Quarter', '1 Bowl Warm Moong Dal Khichdi', '1 tbsp Barn Desi Ghee'],
        instructions: 'Drizzle hot desi ghee over warm moong dal khichdi. Serve with a quarter of Barn Lemon & Green Chili Pickle on the side.'
      }
    ],
    comparisonData: [
      { feature: 'Rind Softness', barnStandard: 'Buttery Soft 45-Day Sun Cured', commercialBrand: 'Hard Tough Chemical Soaked Rind' },
      { feature: 'Green Chilis', barnStandard: 'Fresh Farm Green Chilis', commercialBrand: 'Old Stale Yellowish Chilis' },
      { feature: 'Oil Purity', barnStandard: 'Pure Cold-Pressed Mustard Oil', commercialBrand: 'Re-used Commercial Fryer Oil' },
      { feature: 'Chemical Additives', barnStandard: '0.00% Synthetic Chemicals', commercialBrand: 'Sodium Benzoate & Acid Preservatives' }
    ],
    faqs: [
      { question: 'Why is the lemon rind soft in Barn pickle?', answer: 'Our 45-day earthen pot sun fermentation naturally breaks down tough rind cellulose into tender buttery texture.' },
      { question: 'Is lemon pickle good for digestion?', answer: 'Yes! Natural lemon citric acid and spices stimulate digestive enzymes.' },
      { question: 'Can I eat the lemon skin/peel?', answer: 'Absolutely! The lemon peel contains high concentrations of bioflavonoids and Vitamin C.' },
      { question: 'Is this pickle very spicy?', answer: 'It has a pleasant medium-spicy kick from fresh green chilis balanced by sour lemon juice.' }
    ],
    reviews: [
      { author: 'Mian Yousaf', city: 'Rawalpindi', rating: 5, date: '18 June 2026', comment: 'Tangy, spicy, and the lemon skin is so soft you can eat the whole quarter effortlessly!' },
      { author: 'Dr. Sameena Kausar', city: 'Islamabad', rating: 5, date: '04 June 2026', comment: 'Authentic country style lemon pickle. Great digestive aid after heavy meals.' },
      { author: 'Fariha Shah', city: 'Lahore', rating: 5, date: '19 May 2026', comment: 'Wonderful zesty taste. Tastes amazing with stuffed parathas.' }
    ]
  },

  'garlic': {
    id: 'garlic',
    categoryKey: 'pickles',
    categoryTitle: 'Handcrafted Desi Pickles',
    title: 'Garlic & Ginger Relish',
    subtitle: 'Peeled mountain garlic cloves and ginger cured in cold-pressed mustard oil & spices.',
    heroImage: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Kashmiri Garlic Farm & Mustard Oil Curing Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80', caption: 'Peeled Garlic Cloves', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', caption: 'Fresh Ginger Root', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', caption: 'Cold-Pressed Mustard Oil Bath', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', caption: 'Spice Curing Ingredients', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1605197788044-5a024f23685b?auto=format&fit=crop&w=800&q=80', caption: 'Earthen Pot Matka Ferment', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80', caption: 'Spicy Garlic Dinner Relish', shape: 'circle' }
    ],
    description: 'Mellow whole garlic cloves sun-fermented in mustard oil with kalonji and fenugreek. Pungent, savory, and rich in natural allicin.',
    extendedHistory: 'Sourced from high Kashmiri mountain soil, whole peeled garlic cloves are fermented slowly in mustard oil to remove harsh raw burn while locking in allicin.',
    origin: 'Kashmiri Garlic Farms',
    extractionMethod: 'Mustard Oil Earthen Pot Sun Cured',
    purityGrade: '100% Whole Mountain Garlic Cloves',
    shelfLife: '18 Months in Glass Jar',
    altitude: '5,000 Feet',
    botanicalName: 'Allium Sativum Pickle',
    activeCompounds: 'Allicin, S-Allyl-Cysteine, Gingerols, Mustard Glucosides',
    nutritionalHighlights: [
      { label: 'Garlic Quality', value: 'Whole Mountain Cloves' },
      { label: 'Allicin Protection', value: 'Oil-Fermented Intact' },
      { label: 'Preservative Oil', value: '100% Cold-Pressed Mustard' },
      { label: 'Raw Garlic Burn', value: 'Mellowed Sun Fermented' }
    ],
    keyBenefits: [
      { title: 'Supports Cardiovascular & Heart Health', desc: 'Allicin and garlic sulfur compounds maintain healthy cholesterol and circulation.' },
      { title: 'Boosts Immune Defenses', desc: 'Natural antimicrobial properties assist immune white blood cells.' },
      { title: 'Mellow Non-Harsh Garlic Flavor', desc: 'Oil fermentation mellows raw garlic burn into smooth, savory richness.' },
      { title: 'Warming Joint & Body Support', desc: 'Ginger and garlic provide natural thermogenic body warmth.' },
      { title: 'Improves Sluggish Appetite', desc: 'Savory garlic spices stimulate digestive appetite.' },
      { title: '100% Pure Unadulterated Ingredients', desc: 'No synthetic colors, garlic paste fillers, or chemical vinegars.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Daily Wellness Cloves', desc: 'Eat 2 pickle-cured garlic cloves daily alongside lunch or dinner.' },
      { step: '02', title: 'Serve with Naan & Roti', desc: 'Enjoy whole garlic cloves with warm rotis, kebabs, or curries.' },
      { step: '03', title: 'Always Use Dry Utensils', desc: 'Prevent moisture in jar by using a dry spoon.' },
      { step: '04', title: 'Keep Oil Submerged', desc: 'Keep garlic cloves covered beneath mustard oil layer.' }
    ],
    recipes: [
      {
        title: 'Kashmiri Garlic Relish Roti Plate',
        ingredients: ['3 Barn Peeled Garlic Pickle Cloves', '1 Hot Tandoori Naan', '1 cup Mutton Curry'],
        instructions: 'Serve whole pickle-cured Kashmiri garlic cloves alongside hot tandoori naan and mutton curry.'
      }
    ],
    comparisonData: [
      { feature: 'Garlic Form', barnStandard: '100% Whole Peeled Mountain Cloves', commercialBrand: 'Chopped Factory Waste Garlic' },
      { feature: 'Raw Burn Bite', barnStandard: 'Mellowed Sun Fermented Richness', commercialBrand: 'Harsh Chemical Vinegar Burn' },
      { feature: 'Oil Quality', barnStandard: 'Cold-Pressed Mustard Oil', commercialBrand: 'Refined Commercial Oil' },
      { feature: 'Allicin Potency', barnStandard: 'High Retained Allicin Bioactive', commercialBrand: 'Boiled Heat Destroyed' }
    ],
    faqs: [
      { question: 'Does Barn Garlic Achar have a harsh raw garlic smell?', answer: 'No! The 45-day mustard oil sun curing process mellows out raw harshness into a savory, delicious garlic clove.' },
      { question: 'Is garlic pickle good for high blood pressure & cholesterol?', answer: 'Yes! Garlic sulfur compounds (allicin) promote vascular relaxation and cholesterol balance.' },
      { question: 'How many garlic cloves should I eat daily?', answer: '2 to 3 cloves daily with meals provide great health benefits.' },
      { question: 'Does this pickle contain ginger too?', answer: 'We offer both pure Garlic Achar and Ginger-Garlic mixed relish jars.' }
    ],
    reviews: [
      { author: 'Dr. Asim Shah', city: 'Islamabad', rating: 5, date: '09 July 2026', comment: 'Mellow, savory whole garlic cloves! I eat 2 cloves every lunch for cholesterol management.' },
      { author: 'Rehan Ahmed', city: 'Karachi', rating: 5, date: '25 June 2026', comment: 'Superior garlic pickle quality. No harsh raw burn, just pure delicious garlic flavor.' },
      { author: 'Zubaida Begum', city: 'Lahore', rating: 5, date: '10 May 2026', comment: 'Great taste! Whole peeled cloves preserved in real mustard oil.' }
    ]
  },

  'chutney': {
    id: 'chutney',
    categoryKey: 'pickles',
    categoryTitle: 'Handcrafted Desi Pickles',
    title: 'Tamarind & Plum Chutney',
    subtitle: 'Tangy sweet reduction of ripe tamarind pulp, dried black plums, roasted cumin, & jaggery.',
    heroImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Peshawar Old City Recipe & Tamarind Reduction',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', caption: 'Velvety Tamarind Dip', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1607672632458-9eb56696346a?auto=format&fit=crop&w=800&q=80', caption: 'Dried Black Plums', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80', caption: 'Organic Gur Jaggery', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', caption: 'Roasted Cumin & Salt', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80', caption: 'Samosa Chaat Drizzle', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', caption: 'Copper Cauldron Cooking', shape: 'circle' }
    ],
    description: 'Slow-cooked royal chutney blending tart tamarind with sweet dried plums, black salt, roasted cumin, and organic jaggery.',
    extendedHistory: 'Adapted from Peshawar old city royal court recipes, ripe tamarind pulp is simmered slowly in copper vessels with whole dried plums.',
    origin: 'Peshawar Old City Kitchens',
    extractionMethod: 'Slow Copper Cauldron Jaggery Reduction',
    purityGrade: '100% Natural Fruit & Jaggery Blend',
    shelfLife: '12 Months in Glass Jar',
    altitude: '1,100 Feet',
    botanicalName: 'Tamarindus Indica & Prunus Chutney',
    activeCompounds: 'Tartaric Acid, Iron, Potassium, Black Salt Minerals',
    nutritionalHighlights: [
      { label: 'Sweetener Used', value: '100% Organic Gur Jaggery' },
      { label: 'Refined White Sugar', value: '0.00% (Zero Refined Sugar)' },
      { label: 'Fruit Component', value: 'Real Tamarind & Black Plums' },
      { label: 'Chemical Thickeners', value: '0.00% Cornstarch Free' }
    ],
    keyBenefits: [
      { title: 'Rich Sweet & Tangy Gourmet Dip', desc: 'Perfect balance of tart tamarind and sweet black plum sweetness.' },
      { title: 'Digestive Comfort & Appetite Boost', desc: 'Tartaric acid and roasted cumin promote smooth digestion after heavy meals.' },
      { title: 'Sweetened with Organic Jaggery (Gur)', desc: '100% free from refined white sugar, corn syrup, or artificial sweetening.' },
      { title: 'No Cornstarch or Gums', desc: 'Thickened naturally through slow fruit pulp reduction without starch.' },
      { title: 'Rich in Plant Iron & Minerals', desc: 'Tamarind and jaggery provide bioavailable dietary iron.' },
      { title: 'Versatile Condiment for Snacks', desc: 'Ideal sauce for samosas, dahi bhallas, pakoras, or roasted roasts.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Chaat & Samosa Drizzle', desc: 'Drizzle generously over samosas, pakoras, or fruit chaat.' },
      { step: '02', title: 'Barbecue Glaze', desc: 'Brush over grilled chicken kebabs during the last 2 minutes of grilling.' },
      { step: '03', title: 'Yogurt Dip Stir', desc: 'Stir 2 tablespoons into plain yogurt for sweet-tangy raita.' },
      { step: '04', title: 'Refrigerate After Opening', desc: 'Keep jar refrigerated once seal is opened.' }
    ],
    recipes: [
      {
        title: 'Peshawari Zafrani Chaat with Tamarind Plum Drizzle',
        ingredients: ['3 tbsp Barn Tamarind Plum Chutney', '1 cup Boiled Chickpeas', '1 Chopped Potato', 'Yogurt', 'Chaat Masala'],
        instructions: 'Assemble chickpeas, potato, and yogurt in a bowl. Drizzle generously with Barn Tamarind & Dried Plum Chutney and sprinkle chaat masala.'
      }
    ],
    comparisonData: [
      { feature: 'Sweetening Source', barnStandard: '100% Organic Sugarcane Jaggery (Gur)', commercialBrand: 'High Fructose Corn Syrup & White Sugar' },
      { feature: 'Thickening Agent', barnStandard: 'Slow Fruit Pulp Reduction (Zero Starch)', commercialBrand: 'Commercial Modified Cornstarch & Gums' },
      { feature: 'Fruit Content', barnStandard: 'Real Tamarind Pulp & Whole Black Plums', commercialBrand: 'Artificial Tamarind Flavor & Citric Acid' },
      { feature: 'Artificial Colors', barnStandard: '0.00% Dark Plum Color', commercialBrand: 'Caramel Color IV Dyes' }
    ],
    faqs: [
      { question: 'Is Barn Tamarind Chutney made with refined sugar?', answer: 'No! We use 100% unrefined organic sugarcane jaggery (Gur) for rich caramel sweetness.' },
      { question: 'Does this chutney contain artificial thickeners?', answer: 'Never. Our thick velvety texture comes solely from slow cauldron reduction of real fruit pulp.' },
      { question: 'Can I use this chutney as a barbecue sauce?', answer: 'Yes! It makes an incredible sweet-sour glaze for grilled kebabs and roasts.' },
      { question: 'How long does a jar last after opening?', answer: 'Refrigerated after opening, it stays sweet and fresh for 6 months.' }
    ],
    reviews: [
      { author: 'Farhana Rashid', city: 'Peshawar', rating: 5, date: '12 July 2026', comment: 'Authentic Peshawari Imli Aloo Bukhara chutney! Thick, rich, and naturally sweet from jaggery.' },
      { author: 'Kamran Siddiqui', city: 'Karachi', rating: 5, date: '27 June 2026', comment: 'The best samosa chutney in Pakistan. No artificial starch or sugar syrup taste.' },
      { author: 'Nida Waseem', city: 'Lahore', rating: 5, date: '14 May 2026', comment: 'Delightful sweet and sour flavor. Kids love it on everything.' }
    ]
  },

  // ══════════════════════════════════════════
  // NUTS
  // ══════════════════════════════════════════
  'walnut': {
    id: 'walnut',
    categoryKey: 'nuts',
    categoryTitle: 'Hunza Mountain Dry Fruits & Nuts',
    title: 'Hunza Walnuts (Akhrot)',
    subtitle: 'High-altitude paper-shell light amber walnut halves rich in plant-based Omega-3 (ALA).',
    heroImage: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Hunza Valley Glacier Orchard & Paper Shell Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80', caption: 'Light Amber Paper-Shell Halves', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=800&q=80', caption: 'Hunza Valley Orchard Groves', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80', caption: 'Raw Unbleached Kernels', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', caption: 'Walnut Bread Topping', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', caption: 'Glacier Water Fed Trees', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', caption: 'Honey Walnut Oatmeal Bowl', shape: 'circle' }
    ],
    description: 'Hand-shelled light amber walnut halves grown without chemical pesticides in Hunza Valley (8,000+ ft). Crisp, sweet, and rich in brain-boosting Omega-3 fatty acids.',
    extendedHistory: 'Hunza Valley is world-renowned for the legendary longevity and health of its inhabitants. Grown at altitudes above 8,000 feet, irrigated exclusively by mineral-rich glacial meltwater, Hunza walnuts develop exceptionally thin paper shells and sweet, non-bitter kernels.',
    origin: 'Hunza Valley (8,000+ ft), Gilgit-Baltistan',
    extractionMethod: 'Hand-Shelled Glacier Water Cultivated',
    purityGrade: 'Raw Unbleached Light Amber Halves',
    shelfLife: '12 Months in Vacuum Pouch',
    altitude: '8,500 Feet',
    botanicalName: 'Juglans Regia',
    activeCompounds: 'Alpha-Linolenic Acid (ALA Omega-3), Ellagic Acid, Polyphenols',
    nutritionalHighlights: [
      { label: 'Omega-3 ALA', value: '2.5g Per Serving' },
      { label: 'Bleaching Chemicals', value: '0.00% Unbleached' },
      { label: 'Pesticide Residue', value: '0.00% Glacier Clean' },
      { label: 'Kernel Color', value: 'Light Amber (Grade 1)' }
    ],
    keyBenefits: [
      { title: 'Brain Power & Neuro-Protection', desc: 'High Omega-3 ALA and polyphenols enhance neuro-synaptic speed and memory retention.' },
      { title: 'Cardiovascular Elasticity', desc: 'Reduces LDL cholesterol oxidation while maintaining flexible vascular linings.' },
      { title: 'Sustained Satiety & Weight', desc: 'Protein, healthy fats, and fiber promote long-lasting fullness without blood sugar spikes.' },
      { title: 'Gut Microbiome Nourishment', desc: 'Acts as a prebiotic, nourishing beneficial butyrate-producing gut bacteria.' },
      { title: 'Non-Bitter Sweet Taste', desc: 'Glacier water cultivation prevents harsh bitter skin tannins common in commercial walnuts.' },
      { title: 'Cellular Anti-Aging', desc: 'Ellagic acid and melatonin support night-time cellular damage repair.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Overnight Soak Protocol', desc: 'Soak 4 walnut halves in water overnight to neutralize phytic acid enzyme inhibitors.' },
      { step: '02', title: 'Morning Brain Snack', desc: 'Eat soaked walnuts first thing in the morning with Sidr honey.' },
      { step: '03', title: 'Salad & Oatmeal Topping', desc: 'Chop coarsely over morning oatmeal, yogurt, or fresh green salads.' },
      { step: '04', title: 'Vacuum Pouch Storage', desc: 'Reseal vacuum pouch tightly and store in refrigerator to preserve delicate Omega-3 oils.' }
    ],
    recipes: [
      {
        title: 'Hunza Longevity Brain Breakfast Bowl',
        ingredients: ['4 Soaked Barn Hunza Walnuts', '1 tbsp Barn Raw Sidr Honey', '1 cup Warm Oatmeal', 'Sliced Banana', 'Pinch of Cinnamon'],
        instructions: 'Prepare warm oatmeal. Top with sliced banana, soaked Hunza walnut halves, sprinkle with cinnamon, and drizzle generously with raw Sidr honey.'
      }
    ],
    comparisonData: [
      { feature: 'Bleaching Agent', barnStandard: '100% Unbleached Natural Amber', commercialBrand: 'Chlorine Gas Bleached White Shells' },
      { feature: 'Irrigation Source', barnStandard: 'Pure Glacial Meltwater', commercialBrand: 'Commercial Canal/Wastewater' },
      { feature: 'Kernel Taste', barnStandard: 'Sweet Crisp Non-Bitter', commercialBrand: 'Harsh Bitter & Rancid' },
      { feature: 'Omega-3 Retention', barnStandard: 'Fresh Current-Crop Harvest', commercialBrand: 'Old Stale Cold-Storage Stock' }
    ],
    faqs: [
      { question: 'Why are Hunza walnuts non-bitter compared to store-bought walnuts?', answer: 'Commercial walnuts are often bleached with chlorine and grown in warm lowlands which causes bitter tannin accumulation. Hunza walnuts grow in cold glacial air, producing sweet kernels.' },
      { question: 'Why should I soak walnuts overnight before eating?', answer: 'Soaking neutralizes phytic acid enzyme inhibitors, making minerals bio-available and turning the nut texture sweet and creamy.' },
      { question: 'Are these walnuts bleached?', answer: 'Never! Barn walnuts are 100% unbleached with natural light-amber skins.' },
      { question: 'How long do walnuts stay fresh in the fridge?', answer: 'In our sealed vacuum pouch inside the refrigerator, they remain sweet and crisp for 12 months.' }
    ],
    reviews: [
      { author: 'Dr. Imran Raza', city: 'Islamabad', rating: 5, date: '17 June 2026', comment: 'Crisp light amber halves with zero bitterness! My kids eat them soaked every morning.' },
      { author: 'Suleman Baig', city: 'Gilgit', rating: 5, date: '03 June 2026', comment: 'Authentic Hunza paper-shell walnuts. You can crack them easily with your hands.' },
      { author: 'Nida Farhan', city: 'Lahore', rating: 5, date: '19 May 2026', comment: 'Super fresh current crop harvest. Excellent source of plant Omega-3.' }
    ]
  },

  'pista': {
    id: 'pista',
    categoryKey: 'nuts',
    categoryTitle: 'Hunza Mountain Dry Fruits & Nuts',
    title: 'Gilgit Pistachios (Pista)',
    subtitle: 'Jumbo naturally split pistachios dry roasted with unrefined Himalayan pink salt.',
    heroImage: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Gilgit Mountain Grove & Pink Salt Dry Roast Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80', caption: 'Jumbo Tree-Opened Pistachios', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=800&q=80', caption: 'Gilgit Mountain Orchard', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1541511553554-35944e5e5a74?auto=format&fit=crop&w=800&q=80', caption: 'Oil-Free Dry Roasting', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', caption: 'Himalayan Pink Salt Dusting', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', caption: 'Pistachio Snack Bowl', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80', caption: 'Mindful Shell Snack', shape: 'circle' }
    ],
    description: 'Sun-ripened mountain pistachios dry-roasted in small batches without oil and lightly dusted with unrefined Himalayan pink salt.',
    extendedHistory: 'Grown in high mountain groves in Gilgit, our pistachios mature naturally on the tree until the shells split open naturally under sunshine.',
    origin: 'Gilgit Mountain Groves, GB',
    extractionMethod: 'Small-Batch Oil-Free Dry Roast',
    purityGrade: 'Jumbo Naturally Open Shell',
    shelfLife: '12 Months in Vacuum Jar',
    altitude: '6,800 Feet',
    botanicalName: 'Pistacia Vera',
    activeCompounds: 'Lutein, Zeaxanthin, Vitamin B6, Gamma-Tocopherol',
    nutritionalHighlights: [
      { label: 'Roast Oil Used', value: '0% (100% Oil-Free Dry Roast)' },
      { label: 'Shell Split', value: '100% Natural Tree-Opened' },
      { label: 'Salt Type', value: 'Himalayan Pink Salt' },
      { label: 'Protein / Serving', value: '6g Complete Protein' }
    ],
    keyBenefits: [
      { title: 'Eye Retina & Vision Protection', desc: 'Rich in lutein and zeaxanthin carotenoid antioxidants that shield eyes against blue light.' },
      { title: 'Blood Sugar & Calorie Balance', desc: 'Lowest calorie count per nut; high protein and fiber slow glucose absorption.' },
      { title: 'Heart Health & Gamma-Tocopherol', desc: 'Potent vitamin E isomer reduces arterial inflammation and supports circulation.' },
      { title: 'Mindful Shell Snack', desc: 'De-shelling pistachios slows eating speed by 41%, preventing accidental overeating.' },
      { title: 'Complete Protein & Vitamin B6', desc: 'Supports neurotransmitter synthesis and red blood cell formation.' },
      { title: '100% Oil-Free Roasted', desc: 'Roasted using hot air currents without rancid vegetable oils.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Daily Snack Portion', desc: 'Enjoy a handful (approx 28g / 49 kernels) as an energizing afternoon snack.' },
      { step: '02', title: 'Dessert Garnish', desc: 'Crush coarsely over zafrani kheer, kulfi, or baklava.' },
      { step: '03', title: 'Pista Milk Shake', desc: 'Blend un-salted pistachios with warm milk, saffron, and honey.' },
      { step: '04', title: 'Airtight Jar Storage', desc: 'Store in an airtight glass container to preserve shell crunchiness.' }
    ],
    recipes: [
      {
        title: 'Gilgit Salted Pistachio & Almond Trail Mix',
        ingredients: ['1/2 cup Barn Gilgit Pistachios', '1/2 cup Barn Quetta Almonds', '1/4 cup Raisins', 'Dark Chocolate Chips'],
        instructions: 'Mix dry-roasted pistachios, almonds, raisins, and dark chocolate chips in a container for the ultimate high-energy mountain trail mix.'
      }
    ],
    comparisonData: [
      { feature: 'Shell Opening', barnStandard: 'Naturally Tree-Opened Shells', commercialBrand: 'Machine Pliers Mechanical Split' },
      { feature: 'Roast Oil', barnStandard: '100% Oil-Free Hot Air Roast', commercialBrand: 'Deep Fried in Palm Oil' },
      { feature: 'Salt Source', barnStandard: 'Himalayan Pink Mineral Salt', commercialBrand: 'Bleached Industrial White Salt' },
      { feature: 'Kernel Size', barnStandard: 'Jumbo Mountain Grade', commercialBrand: 'Small Stunted Kernels' }
    ],
    faqs: [
      { question: 'Are these pistachios fried in oil?', answer: 'No! Our pistachios are 100% dry-roasted with hot air without a single drop of added oil.' },
      { question: 'What does "naturally open shell" mean?', answer: 'It means the pistachio grew full and plump inside the shell on the tree until it burst open naturally.' },
      { question: 'Are pistachios good for weight loss?', answer: 'Yes! Pistachios have the lowest calorie content per nut and high protein satiety.' },
      { question: 'What salt is used?', answer: 'We dust them lightly with pure unrefined Himalayan pink salt.' }
    ],
    reviews: [
      { author: 'Zahid Mehmood', city: 'Faisalabad', rating: 5, date: '29 May 2026', comment: 'Jumbo size pistachios with a delicious crunchy roast! Zero oily film on hands.' },
      { author: 'Dr. Saima Riaz', city: 'Islamabad', rating: 5, date: '14 May 2026', comment: 'Lightly pink salted perfection. Huge natural open shells that are easy to peel.' },
      { author: 'Hamid Raza', city: 'Karachi', rating: 5, date: '01 May 2026', comment: 'The freshest pistachios I have ordered online in Pakistan. Crunchy and delicious.' }
    ]
  },

  'almond': {
    id: 'almond',
    categoryKey: 'nuts',
    categoryTitle: 'Hunza Mountain Dry Fruits & Nuts',
    title: 'Quetta Almonds (Badam)',
    subtitle: 'Raw sweet mountain almonds loaded with natural almond oil and Vitamin E.',
    heroImage: 'https://images.unsplash.com/photo-1508061252226-7c25838562eb?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Quetta Mountain Orchard & Sweet Almond Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1508061252226-7c25838562eb?auto=format&fit=crop&w=800&q=80', caption: 'High-Oil Content Kernels', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', caption: 'Quetta Orchard Harvest', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1574570068680-09b44tried9?auto=format&fit=crop&w=800&q=80', caption: 'Soaked Peeled Almonds', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', caption: 'Almond Pastry Topping', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', caption: 'Badam Milk Shake', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', caption: 'Raw Almond Smoothie Bowl', shape: 'circle' }
    ],
    description: 'Harvested from non-GMO organic orchards in Quetta. High oil content kernels providing potent Vitamin E, magnesium, and sweet almond aroma.',
    extendedHistory: 'Quetta almonds are famous across South Asia for their concentrated natural almond oil (>52%). Cultivated in cold mountain valleys, these almonds develop thick sweet kernels.',
    origin: 'Quetta Mountain Orchards, Balochistan',
    extractionMethod: 'Sun-Dried Hand-Shelled Kernels',
    purityGrade: '100% Raw Sweet Almond Kernels',
    shelfLife: '12 Months in Vacuum Pouch',
    altitude: '5,300 Feet',
    botanicalName: 'Prunus Dulcis',
    activeCompounds: 'Alpha-Tocopherol (Vitamin E), Magnesium, Riboflavin, L-Carnitine',
    nutritionalHighlights: [
      { label: 'Natural Almond Oil', value: '> 52% Pure Oil Content' },
      { label: 'Vitamin E', value: '50% RDA Per Handful' },
      { label: 'Chemical Spray', value: '0.00% Pesticide Free' },
      { label: 'Bitter Kernels', value: '0.00% Guaranteed Sweet' }
    ],
    keyBenefits: [
      { title: 'Skin & Hair Nourishment', desc: 'High Alpha-Tocopherol Vitamin E feeds hair follicles and protects skin against UV damage.' },
      { title: 'Memory & Cognitive Memory', desc: 'L-carnitine and riboflavin support cholinergic brain pathways, improving recall speed.' },
      { title: 'Cardiovascular Endothelial Health', desc: 'Monounsaturated fats reduce LDL cholesterol and support flexible arterial walls.' },
      { title: 'Blood Sugar Regulation', desc: 'High magnesium content improves insulin sensitivity after meals.' },
      { title: 'Bone Density & Magnesium', desc: 'Essential minerals build strong bone matrix structure.' },
      { title: 'Sustained Satiety & Muscle', desc: '6g protein per ounce promotes post-workout muscle repair.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Overnight Soak', desc: 'Soak 7 almonds in water overnight to soften brown skin and activate digestive enzymes.' },
      { step: '02', title: 'Peel Brown Skin', desc: 'Peel the soft skin easily in the morning and eat on an empty stomach.' },
      { step: '03', title: 'Badam Harira Milk', desc: 'Blend peeled almonds with warm milk, cardamom, and honey for memory milk.' },
      { step: '04', title: 'Pantry Storage', desc: 'Store in an airtight container in a cool pantry or refrigerator.' }
    ],
    recipes: [
      {
        title: 'Traditional Quetta Badam Milk Shake',
        ingredients: ['10 Soaked Barn Quetta Almonds', '1 cup Warm Milk', '1 tsp Barn Raw Honey', 'Pinch of Saffron'],
        instructions: 'Peel soaked almonds. Blend with warm milk, saffron threads, and raw honey until smooth and creamy. Sip warm before study or work.'
      }
    ],
    comparisonData: [
      { feature: 'Natural Oil Density', barnStandard: '> 52% Pure Almond Oil', commercialBrand: '< 30% Dried Out Imports' },
      { feature: 'Flavor Profile', barnStandard: 'Sweet Nutty Aroma', commercialBrand: 'Bland Cardboard Taste' },
      { feature: 'Chemical Treatment', barnStandard: '100% Raw Non-Pasteurized', commercialBrand: 'Propylene Oxide Gas Pasteurized' },
      { feature: 'Kernel Uniformity', barnStandard: 'Hand-Sorted Grade A Kernels', commercialBrand: 'Broken & Insect Damaged' }
    ],
    faqs: [
      { question: 'Why should I soak almonds before eating?', answer: 'Soaking neutralizes tannin enzyme inhibitors in the brown skin, making Vitamin E and magnesium 100% bio-available.' },
      { question: 'Are Quetta almonds sweet or bitter?', answer: 'Quetta almonds are 100% sweet eating almonds. Every batch is hand-tested to ensure zero bitter kernels.' },
      { question: 'Do these almonds contain natural almond oil?', answer: 'Yes! Barn almonds contain over 52% natural almond oil.' },
      { question: 'Can I give soaked almonds to children?', answer: 'Yes! Soaked peeled almonds are a traditional daily brain memory supplement for children.' }
    ],
    reviews: [
      { author: 'Farah Naz', city: 'Quetta', rating: 5, date: '14 June 2026', comment: 'Sweet kernels packed with rich almond oil! You can feel the oil when you press them.' },
      { author: 'Dr. Sohail Akhtar', city: 'Lahore', rating: 5, date: '30 May 2026', comment: 'Incredible quality. We soak 10 almonds every night for the whole family.' },
      { author: 'Maimoona Shah', city: 'Karachi', rating: 5, date: '12 May 2026', comment: 'Top-tier sweet almonds. No broken pieces or bitter taste.' }
    ]
  },

  'chilgoza': {
    id: 'chilgoza',
    categoryKey: 'nuts',
    categoryTitle: 'Hunza Mountain Dry Fruits & Nuts',
    title: 'Kashmir Pine Nuts (Chilgoza)',
    subtitle: 'Wild harvested pine nuts with buttery soft texture and rich monounsaturated fats.',
    heroImage: 'https://images.unsplash.com/photo-1502217625004-89c03571bcca?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Wild Kashmir Forest Harvest & Chilgoza Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1502217625004-89c03571bcca?auto=format&fit=crop&w=800&q=80', caption: 'Raw Wild Pine Nut Kernels', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=800&q=80', caption: 'Wild Kashmir Forest Pines', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80', caption: 'Buttery Chilgoza Kernels', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', caption: 'Pine Nut Pesto Making', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=800&q=80', caption: 'Zafrani Pulao Garnish', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', caption: 'Kashmir Mountain Harvest', shape: 'circle' }
    ],
    description: 'Hand-extracted from pine cones growing wild in high Kashmir forests. Buttery soft, sweet, and loaded with pinolenic acid for natural appetite satiety.',
    extendedHistory: 'Chilgoza (Pinus gerardiana) is one of the world’s rare wild nuts, growing exclusively in high elevation Himalayan forests.',
    origin: 'Azad Kashmir Wild Pine Forests',
    extractionMethod: 'Hand-Harvested Wild Cone Extraction',
    purityGrade: '100% Pure Raw Chilgoza Kernels',
    shelfLife: '12 Months in Vacuum Container',
    altitude: '9,000 Feet',
    botanicalName: 'Pinus Gerardiana',
    activeCompounds: 'Pinolenic Acid, Zinc, Magnesium, Monounsaturated Oleic Acid',
    nutritionalHighlights: [
      { label: 'Pinolenic Acid', value: 'High Natural Appetite Control' },
      { label: 'Zinc Content', value: 'High Bioavailable Level' },
      { label: 'Cultations Spray', value: '0.00% (Wild Harvest)' },
      { label: 'Kernel Grade', value: 'Jumbo White Kernels' }
    ],
    keyBenefits: [
      { title: 'Appetite Control & Satiety (Pinolenic Acid)', desc: 'Pinolenic acid triggers CCK satiety hormones in stomach, reducing hunger cravings.' },
      { title: 'Zinc & Immune Fortification', desc: 'Dense bio-zinc supports immune white blood cell function and wound healing.' },
      { title: 'Magnesium Energy Synthesis', desc: 'Relieves muscle fatigue and supports ATP cellular energy.' },
      { title: 'Heart Health Oleic Acid', desc: 'Monounsaturated fatty acids support healthy blood lipid balances.' },
      { title: 'Buttery Gourmet Texture', desc: 'Soft creamy texture melts in your mouth with delicate pine fragrance.' },
      { title: 'Wild Forest Purity', desc: '100% wild harvested without fertilizers, pesticides, or commercial farming.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Raw Gourmet Snack', desc: 'Eat raw by the handful (approx 15-20 kernels) for instant buttery energy.' },
      { step: '02', title: 'Light Dry Toast', desc: 'Toast gently in a dry skillet for 2 minutes to release fragrant pine oils.' },
      { step: '03', title: 'Pulao & Halwa Garnish', desc: 'Garnish over royal zafrani pulao, mutton biryani, or suji halwa.' },
      { step: '04', title: 'Vacuum Storage', desc: 'Store in refrigerator inside vacuum container to preserve fresh pine oil.' }
    ],
    recipes: [
      {
        title: 'Chilgoza & Zafrani Pulao Garnish',
        ingredients: ['2 tbsp Barn Chilgoza Pine Nuts', '1 tbsp Barn Desi Ghee', 'Royal Saffron Rice Pulao'],
        instructions: 'Heat ghee in a small pan. Add chilgoza pine nuts and roast on low heat for 90 seconds until light golden. Pour ghee and toasted pine nuts over hot saffron pulao.'
      }
    ],
    comparisonData: [
      { feature: 'Harvest Origin', barnStandard: 'Wild Himalayan Kashmir Forests', commercialBrand: 'Farmed Asian Commercial Imports' },
      { feature: 'Kernel Texture', barnStandard: 'Soft Creamy Buttery Texture', commercialBrand: 'Hard Dry Rubber' },
      { feature: 'Pine Mouth Syndrome', barnStandard: '0% Risk (Pure Gerardiana Species)', commercialBrand: 'High Risk (Cheap Chinese Species)' },
      { feature: 'Processing Heat', barnStandard: 'Gentle Sun & Low Cone Heat', commercialBrand: 'High-Heat Machine Par-Boiling' }
    ],
    faqs: [
      { question: 'Why are Chilgoza pine nuts premium and expensive?', answer: 'Chilgoza pine trees grow wild at 9,000 ft and take 15 to 25 years before bearing cones.' },
      { question: 'What is Pine Mouth syndrome and is Barn Chilgoza safe?', answer: 'Cheap Chinese pine nut species cause metallic bitter taste. Barn Chilgoza is 100% genuine Himalayan Pinus gerardiana.' },
      { question: 'Should I roast or eat raw?', answer: 'Both! Raw kernels are soft and buttery; light roasting adds a crispy pine fragrance.' },
      { question: 'How long do chilgoza kernels stay fresh?', answer: 'Refrigerated in our vacuum container, they stay sweet and fresh for 12 months.' }
    ],
    reviews: [
      { author: 'Suleman Lodhi', city: 'Peshawar', rating: 5, date: '08 July 2026', comment: 'Creamy, buttery, and fresh pine nut quality! Worth every rupee.' },
      { author: 'Chaudhry Waqas', city: 'Lahore', rating: 5, date: '25 June 2026', comment: 'Real Kashmir Chilgoza. Jumbo size kernels with divine flavor.' },
      { author: 'Dr. Amina Tariq', city: 'Islamabad', rating: 5, date: '10 June 2026', comment: 'Excellent quality wild harvest. No bitter aftertaste at all.' }
    ]
  },

  'apricot': {
    id: 'apricot',
    categoryKey: 'nuts',
    categoryTitle: 'Hunza Mountain Dry Fruits & Nuts',
    title: 'Hunza Dried Apricots',
    subtitle: 'Naturally sun-dried sweet Hunza apricots with edible inner kernels.',
    heroImage: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1600&q=80',
    galleryTitle: 'Hunza Apricot Orchards & Sun Drying Showcase',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80', caption: 'Glacier Sun-Dried Apricots', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=800&q=80', caption: 'Hunza Valley Orchard Harvest', shape: 'circle' },
      { url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80', caption: 'Zero Sulfur Dehydration', shape: 'pill' },
      { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', caption: 'Sweet Edible Apricot Kernels', shape: 'badge' },
      { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', caption: 'Mountain Orchard Vista', shape: 'arch' },
      { url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', caption: 'Organic Apricot Smoothie', shape: 'circle' }
    ],
    description: 'Whole sun-dried organic apricots harvested in Hunza. Naturally rich in dietary fiber, potassium, and beta-carotene with zero sulfur dioxide gas bleaching.',
    extendedHistory: 'Hunza longevity is famed worldwide, with organic apricots forming a daily staple of the mountain diet.',
    origin: 'Hunza Valley Orchards, GB',
    extractionMethod: 'High Mountain Glacial Sun-Drying',
    purityGrade: '100% Pure Organic Dried Apricots',
    shelfLife: '18 Months in Sealed Pouch',
    altitude: '8,000 Feet',
    botanicalName: 'Prunus Armeniaca',
    activeCompounds: 'Beta-Carotene (Vitamin A), Potassium, Dietary Fiber, Apricot Seed Oil',
    nutritionalHighlights: [
      { label: 'Sulfur Dioxide Gas', value: '0.00% Sulfur Free' },
      { label: 'Drying Method', value: 'High Mountain Glacial Sun' },
      { label: 'Inner Seed Kernel', value: '100% Edible Sweet Kernel' },
      { label: 'Fiber Content', value: 'High Soluble Fiber' }
    ],
    keyBenefits: [
      { title: 'Smooth Digestive Motility', desc: 'Soluble fruit pectin and dietary fiber relieve intestinal constipation naturally.' },
      { title: 'Beta-Carotene Eye Protection', desc: 'Pro-Vitamin A protects retinal health and night vision.' },
      { title: 'High Potassium Electrolyte', desc: 'Supports cardiovascular fluid balance and blood pressure.' },
      { title: 'Edible Sweet Kernel Inside', desc: 'Crack inner seed for sweet almond-like kernel packed with laetrile B17.' },
      { title: 'Zero Chemical Bleaching', desc: 'Naturally dark honey-amber color free of bright yellow sulfur gas.' },
      { title: 'Clean Natural Energy', desc: 'Complex fruit fructose supplies steady non-spiking energy.' }
    ],
    howToUseSteps: [
      { step: '01', title: 'Overnight Water Soak', desc: 'Soak 5 whole apricots in warm water overnight.' },
      { step: '02', title: 'Drink Apricot Water', desc: 'Drink sweet apricot-infused water first thing in morning.' },
      { step: '03', title: 'Eat Soft Fruit', desc: 'Eat the softened fruit flesh.' },
      { step: '04', title: 'Crack Inner Seed', desc: 'Crack the inner pit to enjoy the sweet apricot kernel inside.' }
    ],
    recipes: [
      {
        title: 'Hunza Khubani Digestive Water',
        ingredients: ['5 Barn Dried Hunza Apricots', '1 glass Filtered Water'],
        instructions: 'Submerge apricots in water overnight. In the morning, drink the golden apricot water on an empty stomach and eat the fruit.'
      }
    ],
    comparisonData: [
      { feature: 'Sulfur Gas Bleaching', barnStandard: '0% Sulfur (Natural Honey Amber Color)', commercialBrand: 'High Sulfur Dioxide (Bright Neon Yellow)' },
      { feature: 'Kernel Availability', barnStandard: 'Whole Apricot with Edible Pit Included', commercialBrand: 'Pitted Pits Discarded' },
      { feature: 'Irrigation Source', barnStandard: 'Pristine Glacier Meltwater', commercialBrand: 'Lowland Canal Water' },
      { feature: 'Taste Profile', barnStandard: 'Deep Sweet Caramel Honey', commercialBrand: 'Sour Chemical Acidic' }
    ],
    faqs: [
      { question: 'Why are Barn dried apricots dark amber instead of bright yellow?', answer: 'Commercial bright yellow apricots are bleached with sulfur dioxide gas. Natural organic sun-dried apricots turn dark honey-amber as fruit sugars caramelize in mountain sun.' },
      { question: 'Can I eat the seed kernel inside the apricot pit?', answer: 'Yes! Hunza apricots contain sweet edible seeds that taste like almonds.' },
      { question: 'How does apricot water help constipation?', answer: 'Soaking releases natural fruit pectins and fiber into water, soothing intestinal walls.' },
      { question: 'How long do they stay fresh?', answer: 'They remain soft and sweet for 18 months in a sealed pouch.' }
    ],
    reviews: [
      { author: 'Jahanzaib Hunzai', city: 'Gilgit', rating: 5, date: '15 July 2026', comment: 'Genuine sweet Hunza apricots! Natural amber color and zero sulfur gas taste.' },
      { author: 'Dr. Bushra Rehan', city: 'Lahore', rating: 5, date: '01 July 2026', comment: 'Overnight apricot water works wonders for digestion.' },
      { author: 'Taimoor Shah', city: 'Islamabad', rating: 5, date: '18 May 2026', comment: 'High quality dried fruit. The inner seed kernel is super sweet!' }
    ]
  }
};
