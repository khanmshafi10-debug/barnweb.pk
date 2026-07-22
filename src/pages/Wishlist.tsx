import React from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Heart, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

interface WishlistProps {
  wishlistIds: string[];
  products: Product[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const Wishlist: React.FC<WishlistProps> = ({
  wishlistIds,
  products,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) => {
  const savedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-current" />
            Saved Botanical Collection
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Your Saved Wishlist & Comparison ({savedProducts.length})
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            Review your favorite raw honey, Shilajit, cold-pressed oils, and skincare items saved for future wellness orders.
          </p>
        </div>
      </section>

      {/* Main Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {savedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#4A5D50]/15 p-12 text-center space-y-4 max-w-lg mx-auto shadow-sm">
            <Heart className="w-12 h-12 text-[#4A5D50]/30 mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">Your Wishlist is Empty</h3>
            <p className="text-xs text-[#2B2E2C]/70">
              Browse our pure organic catalog and click the heart icon on any product to save it here.
            </p>
            <a href="/#/shop" className="inline-block pt-2">
              <Button variant="primary-grown" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Organic Catalog
              </Button>
            </a>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {savedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={true}
                />
              ))}
            </div>

            {/* Feature Comparison Matrix */}
            <section className="bg-white rounded-2xl border border-[#4A5D50]/20 p-6 sm:p-10 shadow-xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9962F]">Side-by-Side Matrix</span>
                <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">Compare Saved Products</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#4A5D50]/20 text-[#2B2E2C]/70 uppercase">
                      <th className="p-3">Product</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Origin</th>
                      <th className="p-3">Volume</th>
                      <th className="p-3">Price</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#4A5D50]/10 font-sans">
                    {savedProducts.map((prod) => (
                      <tr key={prod.id} className="hover:bg-[#FAF8F4]">
                        <td className="p-3 font-bold font-serif text-[#2B2E2C]">{prod.name}</td>
                        <td className="p-3 text-[#4A5D50]">{prod.categoryName}</td>
                        <td className="p-3 text-[#2B2E2C]/80">{prod.origin}</td>
                        <td className="p-3">{prod.volumeOrWeight}</td>
                        <td className="p-3 font-serif font-bold text-[#2B2E2C]">${prod.price.toFixed(2)}</td>
                        <td className="p-3">
                          <button
                            onClick={() => onAddToCart(prod)}
                            className="px-3 py-1.5 rounded-lg bg-[#4A5D50] text-[#FAF8F4] font-bold text-[11px] hover:bg-[#C9962F] transition-colors"
                          >
                            + Add to Cart
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        )}
      </div>
    </div>
  );
};
