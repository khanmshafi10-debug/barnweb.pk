import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, ShoppingBag, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from './Button';
import { BarnRoofMotif } from './BarnRoofMotif';
import { ImageWithFallback } from './ImageWithFallback';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const isGrown = product.category === 'grown';

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF8F4] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#4A5D50]/20 overflow-hidden z-10 my-8">
        
        {/* Roof Silhouette Accent Top */}
        <div className="h-2 bg-[#4A5D50]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#2B2E2C] flex items-center justify-center shadow-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Image Column */}
          <div className="space-y-3">
            <div className="aspect-square rounded-xl overflow-hidden bg-black/5 border border-[#4A5D50]/10 relative">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                fallbackTitle={product.name}
                category={product.category}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#4A5D50] text-[#FAF8F4] text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md shadow-xs z-10">
                {product.categoryName}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#2B2E2C]/70">
              <MapPin className="w-4 h-4 text-[#C9962F] shrink-0" />
              <span>Sourced: {product.origin}</span>
            </div>
          </div>

          {/* Info Column */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              {/* Rating */}
              <div className="flex items-center gap-1.5 text-xs text-[#2B2E2C]/70 mb-1">
                <div className="flex text-[#C9962F]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold text-[#2B2E2C]">{product.rating.toFixed(1)}</span>
                <span>({product.reviewCount} customer reviews)</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2E2C]">
                {product.name}
              </h3>
              <p className="text-xs text-[#2B2E2C]/70 mt-1">{product.subtitle}</p>

              <div className="mt-3 font-serif text-2xl font-bold text-[#4A5D50]">
                ${product.price.toFixed(2)}{' '}
                <span className="text-xs font-sans text-[#2B2E2C]/60 font-normal">
                  / {product.volumeOrWeight}
                </span>
              </div>

              <p className="text-xs text-[#2B2E2C]/80 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Key Benefits */}
              <div className="mt-3 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D50] block">
                  Key Benefits
                </span>
                {product.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-[#2B2E2C]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9962F] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="pt-4 border-t border-[#4A5D50]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center justify-between sm:justify-start border border-[#4A5D50]/20 rounded-xl bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2.5 py-1 text-sm font-bold text-[#2B2E2C]"
                >
                  -
                </button>
                <span className="px-2 text-sm font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2.5 py-1 text-sm font-bold text-[#2B2E2C]"
                >
                  +
                </button>
              </div>

              <div className="flex-1">
                <Button
                  variant={isGrown ? 'primary-grown' : 'primary-restored'}
                  fullWidth
                  size="md"
                  onClick={handleAdd}
                  icon={<ShoppingBag className="w-4 h-4" />}
                >
                  Add to Cart
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

