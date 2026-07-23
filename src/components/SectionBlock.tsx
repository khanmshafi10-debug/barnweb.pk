import React from 'react';
import { Link } from 'react-router-dom';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Button } from './Button';
import { ImageWithFallback } from './ImageWithFallback';
import { CheckCircle2, ArrowRight, Sparkles, Sprout } from 'lucide-react';

interface SectionBlockProps {
  type: 'grown' | 'restored';
  reversed?: boolean;
}

export const SectionBlock: React.FC<SectionBlockProps> = ({ type, reversed = false }) => {
  const isGrown = type === 'grown';

  const content = isGrown
    ? {
        tag: 'Grown • The Nature & Food World',
        title: 'Pure Farm Harvests from Valleys & Orchards',
        description: 'Our Grown range brings unheated raw honeys, cold-pressed mustard oils, and Vedic A2 bilona ghee directly from smallholder farms to your kitchen. Unrefined, enzyme-dense, and deeply aromatic.',
        highlights: [
          'Raw Sidr & Wildflower honeys filtered without artificial heat',
          'A2 Bilona Desi Ghee churned traditionally from curd',
          'Zero synthetic preservatives, pesticides, or added sugars'
        ],
        ctaText: 'Shop Nature Range',
        ctaPath: '/shop?category=grown',
        buttonVariant: 'gold' as const,
        bgClass: 'bg-gradient-to-br from-[#27382B] via-[#2B3C2F] to-[#1E2B21] text-white border-y border-[#C9962F]/30',
        themeAccent: 'text-[#C9962F]',
        badgeBg: 'bg-[#C9962F] text-white',
        image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=900',
        imageAlt: 'Barn.pk Raw Sidr Honey Harvesting',
        icon: <Sprout className="w-5 h-5 text-[#C9962F]" />
      }
    : {
        tag: 'Restored • The Wellness & Health World',
        title: 'Botanical Vitality & High-Altitude Minerals',
        description: 'Our Restored line harnesses potent adaptogens, high-altitude Skardu Shilajit resin, and organic botanical infusions formulated to regulate stress, deepen restful sleep, and revitalize cellular energy.',
        highlights: [
          'Purified Skardu Shilajit with 60%+ bioactive fulvic acid',
          'Full-spectrum Ashwagandha & organic Moringa leaf powders',
          'Caffeine-free nighttime infusions for restorative rest'
        ],
        ctaText: 'Explore Wellness Line',
        ctaPath: '/shop?category=restored',
        buttonVariant: 'gold' as const,
        bgClass: 'bg-gradient-to-br from-[#271E56] via-[#483D8B] to-[#1B1440] text-white border-y border-[#483D8B]/40',
        themeAccent: 'text-[#8A7BE0]',
        badgeBg: 'bg-[#483D8B] text-white',
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=900',
        imageAlt: 'Barn.pk High-Altitude Shilajit Resin',
        icon: <Sparkles className="w-5 h-5 text-[#C9962F]" />
      };

  return (
    <section className={`py-16 lg:py-24 ${content.bgClass} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content Column */}
          <div className={`lg:col-span-6 space-y-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {content.icon}
              <span>{content.tag}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              {content.description}
            </p>

            {/* Checklist Highlights */}
            <ul className="space-y-3 pt-2">
              {content.highlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/95">
                  <CheckCircle2 className="w-5 h-5 text-[#C9962F] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link to={content.ctaPath}>
                <Button
                  variant={content.buttonVariant}
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {content.ctaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Block Column */}
          <div className={`lg:col-span-6 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              <ImageWithFallback
                src={content.image}
                alt={content.imageAlt}
                fallbackTitle={content.title}
                category={type}
                className="w-full h-[320px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Roof Line Motif Top Edge */}
              <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 to-transparent flex justify-between items-center text-white text-xs font-medium z-10">
                <span className="flex items-center gap-1.5">
                  <BarnRoofMotif color="#C9962F" height={10} />
                  Barn.pk Sourcing Verified
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#C9962F] text-white px-2.5 py-0.5 rounded shadow-xs">
                  Traceable Origin
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
