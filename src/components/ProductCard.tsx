import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Button } from './Button';
import { ImageWithFallback } from './ImageWithFallback';
import { Star, ShoppingBag, Eye, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isWishlisted?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  isWishlisted = false,
}) => {
  const { formatPrice } = useCurrency();
  const isGrown = product.category === 'grown';

  // Palette tokens based on line
  const theme = isGrown
    ? {
        accentColor: '#1E3A8A',
        badgeBg: 'bg-[#1E3A8A]',
        badgeText: 'text-[#FBF9F4]',
        buttonVariant: 'primary-grown' as const,
      }
    : {
        accentColor: '#0F172A',
        badgeBg: 'bg-[#0F172A]',
        badgeText: 'text-[#FBF9F4]',
        buttonVariant: 'primary-restored' as const,
      };

  return (
    <motion.div 
      whileHover={{ 
        y: -7, 
        scale: 1.015,
        shadow: '0 25px 50px rgba(30, 58, 138, 0.15)',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="group relative bg-[#FBF9F4] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#1E3A8A]/15 flex flex-col h-full transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F7F5F0]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Category & Certification Badges Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${theme.badgeBg} ${theme.badgeText} shadow-sm`}
          >
            {product.categoryName || (isGrown ? 'Grown' : 'Restored')}
          </span>

          {/* Certification Badge — 2 to 3 products per page featured with certification */}
          {(product.isCertified ?? true) && (
            <span className="px-2.5 py-1 rounded-md text-[9.5px] font-bold uppercase tracking-wider bg-[#1E3A8A] text-white shadow-md flex items-center gap-1 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FDD229] shrink-0" />
              <span>{product.certification || 'PCSIR Lab Certified'}</span>
            </span>
          )}

          {product.badge && (
            <span className="px-2 py-0.5 rounded-md text-[9px] font-semibold bg-[#FDD229] text-black shadow-xs self-start">
              {product.badge}
            </span>
          )}
        </div>

        {/* Top Right Action Buttons: Wishlist & Quick View */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          {onToggleWishlist && (
            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-md ${
                isWishlisted
                  ? 'bg-[#FDD229] text-black'
                  : 'bg-[#FBFCFC]/90 text-[#2B2E2C] hover:text-[#FDD229] hover:bg-white'
              }`}
              title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              aria-label="Toggle Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          )}

          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="w-8 h-8 rounded-full bg-[#FBFCFC]/90 backdrop-blur-md text-[#2B2E2C] hover:text-[#1E3A8A] hover:bg-white flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-md"
              title="Quick View"
              aria-label="Quick View product"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Origin tag bottom overlay */}
        <div className="absolute bottom-2 left-3 right-3 text-[10px] text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md flex items-center justify-between z-10">
          <span className="truncate pr-1">{product.origin}</span>
          <span className="font-semibold shrink-0">{product.volumeOrWeight}</span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Rating & Lab Verification Pill */}
          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
            <div className="flex items-center gap-1 text-[#2B2E2C]/70">
              <div className="flex text-[#FDD229]">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-semibold text-[#2B2E2C]">{product.rating.toFixed(1)}</span>
              <span>({product.reviewCount})</span>
            </div>

            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1E3A8A] bg-[#1E3A8A]/10 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3 text-[#1E3A8A]" />
              Verified
            </span>
          </div>

          {/* Title */}
          <Link to={`/product/${product.id}`} className="block group-hover:text-[#4A5D50] transition-colors">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B2E2C] leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Excerpt */}
          <p className="text-xs text-[#2B2E2C]/70 line-clamp-2 mt-1 leading-relaxed">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#4A5D50]/10 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] sm:text-xs text-[#2B2E2C]/60 block leading-none">Price</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-base sm:text-lg font-bold text-[#2B2E2C]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-[#2B2E2C]/50 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <Button
            variant={theme.buttonVariant}
            size="sm"
            onClick={() => onAddToCart(product)}
            icon={<ShoppingBag className="w-3.5 h-3.5" />}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
