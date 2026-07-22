import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sprout, Flame, PackageCheck } from 'lucide-react';
import { BarnRoofMotif } from './BarnRoofMotif';

export const BenefitsGrid: React.FC = () => {
  const benefits = [
    {
      icon: <Sprout className="w-7 h-7 text-[#C9962F]" />,
      title: 'Direct Farm Sourcing',
      description: 'We partner directly with smallholder beekeepers and mountain harvesters, eliminating middlemen to guarantee farm-to-table authenticity.',
    },
    {
      icon: <Flame className="w-7 h-7 text-[#4A5D50]" />,
      title: 'Zero Artificial Heat',
      description: 'Our honeys and cold-pressed oils are extracted strictly below 35°C to preserve natural bioactive enzymes, pollen, and delicate aromas.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#45566B]" />,
      title: 'Mass Spectrometry Certified',
      description: 'Every batch undergoes third-party lab testing for heavy metals, antibiotic residues, and C4 sugar adulteration before bottling.',
    },
    {
      icon: <PackageCheck className="w-7 h-7 text-[#B08D57]" />,
      title: 'UV-Protected Glass Jars',
      description: 'Packaged in heavy amber and Miron glass crocks to shield living nutrients from light oxidation and eliminate microplastic leaching.',
    },
  ];

  return (
    <section className="py-16 bg-[#FAF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto space-y-3 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BarnRoofMotif variant="divider" className="text-[#4A5D50]" />
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B2E2C]">
            The Barn.pk Guarantee
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2E2C]/80 leading-relaxed">
            Founded on transparency and uncompromising respect for nature’s original composition.
          </p>
        </motion.div>

        {/* 4-Column Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white border border-[#4A5D50]/15 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3 relative overflow-hidden"
            >
              {/* Roof Line Accent Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#4A5D50]/20 group-hover:bg-[#C9962F] transition-colors" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#FAF8F4] border border-[#4A5D50]/10 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B2E2C]">
                {item.title}
              </h3>

              <p className="text-xs text-[#2B2E2C]/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
