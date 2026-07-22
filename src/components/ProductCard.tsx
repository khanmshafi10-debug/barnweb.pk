import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Button } from './Button';
import { ImageWithFallback } from './ImageWithFallback';
import { Star, ShoppingBag, Eye, ShieldCheck, Heart } from 'lucide-react';

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
  const isGrown = product.category === 'grown';

  // Palette tokens based on line
  const theme = isGrown
    ? {
        badgeBg: 'bg-[#4A5D50]',
        badgeText: 'text-[#FAF8F4]',
        accent: 'text-[#C9962F]',
        buttonVariant: 'primary-grown' as const,
        borderHover: 'hover:border-[#4A5D50]/30',
      }
    : {
        badgeBg: 'bg-[#45566B]',
        badgeText: 'text-[#FAF8F4]',
        accent: 'text-[#B08D57]',
        buttonVariant: 'primary-restored' as const,
        borderHover: 'hover:border-[#45566B]/30',
      };

  return (
    <div
      className={`group bg-[#FAF8F4] border border-[#4A5D50]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative ${theme.borderHover}`}
    >
      {/* Top Roof Silhouette Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#4A5D50]/10 group-hover:bg-[#C9962F] transition-colors z-10" />

      {/* Image & Badges Frame */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#2B2E2C]/5">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          fallbackTitle={product.name}
          category={product.category}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <span
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${theme.badgeBg} ${theme.badgeText} shadow-sm`}
          >
            {product.categoryName || (isGrown ? 'Grown' : 'Restored')}
          </span>
          {product.badge && (
            <span className="px-2 py-0.5 rounded-md text-[9px] font-semibold bg-[#C9962F] text-white shadow-xs">
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
                  ? 'bg-[#C9962F] text-white'
                  : 'bg-[#FAF8F4]/90 text-[#2B2E2C] hover:text-[#C9962F] hover:bg-white'
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
              className="w-8 h-8 rounded-full bg-[#FAF8F4]/90 backdrop-blur-md text-[#2B2E2C] hover:text-[#4A5D50] hover:bg-white flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-md"
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
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-[#2B2E2C]/70 mb-1">
            <div className="flex text-[#C9962F]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-semibold text-[#2B2E2C]">{product.rating.toFixed(1)}</span>
            <span>({product.reviewCount})</span>
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
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-[#2B2E2C]/50 line-through">
                  ${product.originalPrice.toFixed(2)}
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
    </div>
  );
};


