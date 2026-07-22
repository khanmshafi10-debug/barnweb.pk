import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { BarnRoofMotif } from './BarnRoofMotif';
import { ImageWithFallback } from './ImageWithFallback';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-[#4A5D50] text-[#FAF8F4] relative overflow-hidden">
      {/* Background Subtle Roof Line Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <BarnRoofMotif color="#FAF8F4" height={300} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center space-y-3 mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F4]/10 text-xs uppercase tracking-widest text-[#C9962F]">
            <Quote className="w-3.5 h-3.5" />
            Verified Customer Voices
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold">
            Trusted by Mindful Homes Across Pakistan
          </h2>
        </motion.div>

        {/* Carousel Card */}
        <div className="bg-[#FAF8F4] text-[#2B2E2C] rounded-2xl p-6 sm:p-12 shadow-2xl relative border border-[#C9962F]/30 overflow-hidden">
          
          {/* Top Roof Silhouette Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-[#C9962F] rounded-b-md" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              
              {/* Author Avatar & Product */}
              <div className="flex flex-col items-center text-center shrink-0 space-y-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#4A5D50]/20 shadow-md">
                  <ImageWithFallback
                    src={current.avatar}
                    alt={current.author}
                    fallbackTitle={current.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold">{current.author}</h4>
                  <p className="text-xs text-[#2B2E2C]/70">{current.location}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#4A5D50] font-semibold mt-1 bg-[#4A5D50]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-[#C9962F]" /> Verified Buyer
                  </span>
                </div>
              </div>

              {/* Quote Body */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex justify-center md:justify-start text-[#C9962F] gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif text-base sm:text-xl italic text-[#2B2E2C] leading-relaxed">
                  "{current.quote}"
                </blockquote>

                <p className="text-xs text-[#4A5D50] font-medium">
                  Purchased: <strong className="text-[#2B2E2C]">{current.productUsed}</strong>
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Controls Bottom Row */}
          <div className="mt-8 pt-6 border-t border-[#4A5D50]/10 flex items-center justify-between">
            <div className="flex space-x-1">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-[#C9962F]' : 'w-2 bg-[#4A5D50]/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#4A5D50]/20 hover:bg-[#4A5D50] hover:text-white transition-colors flex items-center justify-center text-[#2B2E2C]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#4A5D50]/20 hover:bg-[#4A5D50] hover:text-white transition-colors flex items-center justify-center text-[#2B2E2C]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
