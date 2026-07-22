import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Star, ShieldCheck, MapPin, CheckCircle2, ArrowLeft, ShoppingBag, Truck, RotateCcw } from 'lucide-react';

interface ProductDetailProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onQuickView: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart, onQuickView }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'usage'>('benefits');

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const isGrown = product.category === 'grown';

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAdd = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5D50] hover:text-[#C9962F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Harvest Range
        </button>
      </div>

      {/* Main Detail Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-2xl p-6 sm:p-10 border border-[#4A5D50]/15 shadow-md relative overflow-hidden">
          
          {/* Top Roof Silhouette Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#4A5D50]" />

          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-black/5 border border-[#4A5D50]/10 relative group">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                fallbackTitle={product.name}
                category={product.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#4A5D50] text-[#FAF8F4] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm z-10">
                {product.categoryName}
              </span>
            </div>

            {/* Sourcing Origin Tag */}
            <div className="p-4 rounded-xl bg-[#FAF8F4] border border-[#4A5D50]/15 flex items-center justify-between text-xs text-[#2B2E2C]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9962F]" />
                <span><strong>Origin:</strong> {product.origin}</span>
              </div>
              <span className="font-bold text-[#4A5D50]">{product.volumeOrWeight}</span>
            </div>
          </div>

          {/* Right Column: Specs & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Rating */}
              <div className="flex items-center gap-2 text-xs text-[#2B2E2C]/70">
                <div className="flex text-[#C9962F]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold text-[#2B2E2C]">{product.rating.toFixed(1)}</span>
                <span>({product.reviewCount} verified reviews)</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2E2C]">
                {product.name}
              </h1>

              <p className="text-sm font-medium text-[#4A5D50]">
                {product.subtitle}
              </p>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-serif text-3xl font-bold text-[#2B2E2C]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#2B2E2C]/50 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs bg-[#C9962F]/20 text-[#C9962F] font-bold px-2 py-0.5 rounded">
                  In Stock • Fresh Batch
                </span>
              </div>

              <p className="text-sm text-[#2B2E2C]/80 leading-relaxed border-t border-[#4A5D50]/10 pt-4">
                {product.description}
              </p>

              {/* Tabs for Benefits / Ingredients / How to Use */}
              <div className="pt-2">
                <div className="flex border-b border-[#4A5D50]/15 gap-4 text-xs font-bold overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'benefits'
                        ? 'border-[#4A5D50] text-[#4A5D50]'
                        : 'border-transparent text-[#2B2E2C]/60'
                    }`}
                  >
                    Key Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'ingredients'
                        ? 'border-[#4A5D50] text-[#4A5D50]'
                        : 'border-transparent text-[#2B2E2C]/60'
                    }`}
                  >
                    100% Ingredients
                  </button>
                  <button
                    onClick={() => setActiveTab('usage')}
                    className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'usage'
                        ? 'border-[#4A5D50] text-[#4A5D50]'
                        : 'border-transparent text-[#2B2E2C]/60'
                    }`}
                  >
                    How to Enjoy
                  </button>
                </div>

                <div className="pt-3 text-xs text-[#2B2E2C]/80 leading-relaxed">
                  {activeTab === 'benefits' && (
                    <ul className="space-y-2">
                      {product.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C9962F] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'ingredients' && (
                    <div className="p-3 bg-[#FAF8F4] rounded-xl border border-[#4A5D50]/10">
                      <p className="font-semibold text-[#4A5D50] mb-1">Clean Label Composition:</p>
                      <p>{product.ingredients.join(', ')}</p>
                    </div>
                  )}

                  {activeTab === 'usage' && (
                    <p className="p-3 bg-[#FAF8F4] rounded-xl border border-[#4A5D50]/10">
                      {product.howToUse}
                    </p>
                  )}
                </div>
              </div>

            </div>

            {/* Quantity Selector & Add Button */}
            <div className="pt-6 border-t border-[#4A5D50]/15 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex items-center justify-between sm:justify-start border border-[#4A5D50]/20 rounded-xl bg-[#FAF8F4] p-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white font-bold text-[#2B2E2C] hover:bg-[#4A5D50]/10"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white font-bold text-[#2B2E2C] hover:bg-[#4A5D50]/10"
                  >
                    +
                  </button>
                </div>

                <div className="flex-1">
                  <Button
                    variant={isGrown ? 'primary-grown' : 'primary-restored'}
                    fullWidth
                    size="lg"
                    onClick={handleAdd}
                    icon={<ShoppingBag className="w-4 h-4" />}
                  >
                    Add to Barn Cart
                  </Button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-[#2B2E2C]/70 pt-2">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#4A5D50]" />
                  <span>Safe Temperature Glass Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4A5D50]" />
                  <span>Lab Certified 100% Raw</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Related Harvests */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="mb-6 pb-2 border-b border-[#4A5D50]/15">
            <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">
              More from the {product.category === 'grown' ? 'Grown' : 'Restored'} Range
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={(prod) => onAddToCart(prod, 1)}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

