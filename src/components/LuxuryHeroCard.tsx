import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface LuxuryHeroCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  volumeOrWeight: string;
  productId?: string;
  onAddToCart?: () => void;
  onToggleWishlist?: () => void;
  isWishlisted?: boolean;
  badge?: string;
}

export const LuxuryHeroCard: React.FC<LuxuryHeroCardProps> = ({
  image,
  title,
  subtitle,
  price,
  volumeOrWeight,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  badge = 'PCSIR Certified'
}) => {
  const { formatPrice } = useCurrency();

  return (
    <div className="relative rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/25 p-3.5 sm:p-4 shadow-2xl hover:border-white/40 transition-all duration-500 w-full group">
      {/* Image Container with Top Wishlist & Action Buttons — Fills 100% Card Width */}
      <div className="relative rounded-[22px] overflow-hidden w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-[#FAF8F4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Top Left Certification Badge */}
        {badge && (
          <div className="absolute top-3.5 left-3.5 z-20">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1E3A8A]/90 text-white backdrop-blur-md shadow-md border border-white/20">
              {badge}
            </span>
          </div>
        )}

        {/* Top Right Action Buttons: Wishlist & Bag */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-20">
          <button
            onClick={onToggleWishlist}
            className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-lg cursor-pointer ${
              isWishlisted
                ? 'bg-[#FDD229] text-black scale-105'
                : 'bg-white/85 text-[#2B2E2C] hover:text-[#FDD229] hover:bg-white'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            aria-label="Toggle Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={onAddToCart}
            className="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md text-[#2B2E2C] hover:text-[#1E3A8A] hover:bg-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
            title="Quick Add to Cart"
            aria-label="Quick Add"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Image Overlay Pills */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-20">
          {/* Left: Translucent Buy Now Glass Pill */}
          <button
            onClick={onAddToCart}
            className="bg-black/40 backdrop-blur-md text-white pl-4 pr-1.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2.5 border border-white/20 hover:bg-black/60 transition-all cursor-pointer group/btn shadow-lg"
          >
            <span>Buy now</span>
            <span className="w-6 h-6 rounded-full bg-white text-[#2B2E2C] flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform shadow-xs">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Right: Dark Price Badge Pill */}
          <div className="bg-[#181818] text-white px-4 py-2 rounded-full text-xs font-bold font-mono tracking-tight shadow-md border border-white/15 shrink-0">
            {formatPrice(price)}
          </div>
        </div>
      </div>

      {/* Bottom Content Box — Clean Layout With Zero Cutoffs */}
      <div className="bg-[#FBFCFC] p-4 rounded-[18px] flex items-center justify-between gap-3 mt-3 border border-white/50 shadow-sm text-[#2B2E2C]">
        <div className="space-y-1 min-w-0 flex-1 text-left">
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#2A2A2A] leading-tight truncate">
            {title}
          </h3>
          <p className="text-xs text-[#666] line-clamp-1 leading-snug">
            {subtitle}
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="underline underline-offset-4 decoration-[#C9962F] font-bold text-xs text-[#2A2A2A] uppercase tracking-wider whitespace-nowrap">
            {volumeOrWeight}
          </span>
        </div>
      </div>
    </div>
  );
};
