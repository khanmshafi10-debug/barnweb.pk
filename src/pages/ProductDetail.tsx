import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Star, ShieldCheck, MapPin, CheckCircle2, ArrowLeft, ShoppingBag, Truck, MessageSquare, Send } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from '../context/ToastContext';

interface ProductDetailProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onQuickView: (product: Product) => void;
}

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart, onQuickView }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'usage' | 'reviews'>('benefits');
  const [selectedCity, setSelectedCity] = useState('Lahore');

  // Customer Reviews State
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Dr. Tariq Mahmood',
      rating: 5,
      date: 'July 18, 2026',
      comment: 'Remarkable purity! The Karak Sidr honey aroma is thick, floral, and non-sticky. Truly raw quality as certified by PCSIR labs.',
      verified: true
    },
    {
      id: '2',
      name: 'Ayesha Khan',
      rating: 5,
      date: 'July 12, 2026',
      comment: 'Ordered from Islamabad and received temperature-controlled glass packaging within 24 hours. Fantastic organic product line!',
      verified: true
    }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const isGrown = product.category === 'grown';

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    showToast('Added to Cart!', `${quantity}x ${product.name} added to your pantry.`);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      showToast('Missing Fields', 'Please enter your name and review comment.', 'warning');
      return;
    }

    const reviewObj: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      comment: newReview.comment,
      verified: true
    };

    setReviews([reviewObj, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
    showToast('Review Submitted!', 'Thank you for sharing your experience.');
  };

  const getCityDeliveryEstimate = (city: string) => {
    if (city === 'Lahore') return 'Same-Day Express Delivery (Within 6 Hours)';
    if (city === 'Islamabad' || city === 'Rawalpindi' || city === 'Karachi') return 'Express 24-48 Hours Temperature-Controlled Delivery';
    return '2-3 Days Express Courier Delivery';
  };

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5D50] hover:text-[#C9962F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Harvest Catalog
        </button>
      </div>

      {/* Main Product Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-2xl p-6 sm:p-10 border border-[#4A5D50]/15 shadow-md relative overflow-hidden">
          
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#4A5D50]" />

          {/* Left: Product Image */}
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
                <span><strong>Harvest Sourcing:</strong> {product.origin}</span>
              </div>
              <span className="font-bold text-[#4A5D50]">{product.volumeOrWeight}</span>
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Rating */}
              <div className="flex items-center gap-2 text-xs text-[#2B2E2C]/70">
                <div className="flex text-[#C9962F]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold text-[#2B2E2C]">{product.rating.toFixed(1)}</span>
                <span>({reviews.length + product.reviewCount} verified ratings)</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2E2C]">
                {product.name}
              </h1>

              <p className="text-sm font-medium text-[#4A5D50]">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-serif text-3xl font-bold text-[#2B2E2C]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#2B2E2C]/50 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs bg-[#C9962F]/20 text-[#C9962F] font-bold px-2 py-0.5 rounded">
                  In Stock • PCSIR Certified Fresh Batch
                </span>
              </div>

              <p className="text-sm text-[#2B2E2C]/80 leading-relaxed border-t border-[#4A5D50]/10 pt-4">
                {product.description}
              </p>

              {/* Delivery Calculator */}
              <div className="p-3.5 bg-[#FAF8F4] rounded-xl border border-[#4A5D50]/15 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#2B2E2C] flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#C9962F]" />
                    Delivery Timeline Estimator:
                  </span>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="bg-white border border-[#4A5D50]/20 rounded-lg px-2.5 py-1 text-xs font-semibold"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad / Rawalpindi</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Multan">Multan</option>
                    <option value="Other">Other Pakistan City</option>
                  </select>
                </div>
                <p className="text-xs text-[#4A5D50] font-semibold">
                  ✓ {getCityDeliveryEstimate(selectedCity)}
                </p>
              </div>

              {/* Tabs */}
              <div className="pt-2">
                <div className="flex border-b border-[#4A5D50]/15 gap-4 text-xs font-bold overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'benefits' ? 'border-[#4A5D50] text-[#4A5D50]' : 'border-transparent text-[#2B2E2C]/60'
                    }`}
                  >
                    Key Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'ingredients' ? 'border-[#4A5D50] text-[#4A5D50]' : 'border-transparent text-[#2B2E2C]/60'
                    }`}
                  >
                    100% Ingredients
                  </button>
                  <button
                    onClick={() => setActiveTab('usage')}
                    className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'usage' ? 'border-[#4A5D50] text-[#4A5D50]' : 'border-transparent text-[#2B2E2C]/60'
                    }`}
                  >
                    How to Enjoy
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-2 border-b-2 whitespace-nowrap transition-colors ${
                      activeTab === 'reviews' ? 'border-[#4A5D50] text-[#4A5D50]' : 'border-transparent text-[#2B2E2C]/60'
                    }`}
                  >
                    Customer Reviews ({reviews.length})
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

                  {activeTab === 'reviews' && (
                    <div className="space-y-4">
                      {/* Form to submit review */}
                      <form onSubmit={handleAddReview} className="bg-[#FAF8F4] p-4 rounded-xl border border-[#4A5D50]/15 space-y-3">
                        <span className="font-bold text-xs text-[#2B2E2C] block">Write a Verified Review</span>
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={newReview.name}
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                            className="px-3 py-1.5 text-xs rounded-lg bg-white border border-[#4A5D50]/20"
                          />
                          <select
                            value={newReview.rating}
                            onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                            className="px-3 py-1.5 text-xs rounded-lg bg-white border border-[#4A5D50]/20"
                          >
                            <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                            <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                            <option value={3}>⭐⭐⭐ (3 Stars)</option>
                          </select>
                        </div>
                        <textarea
                          rows={2}
                          placeholder="Write your feedback about product taste, texture, purity..."
                          value={newReview.comment}
                          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs rounded-lg bg-white border border-[#4A5D50]/20"
                        />
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-lg bg-[#4A5D50] text-white text-xs font-bold hover:bg-[#C9962F] transition-colors"
                        >
                          Submit Review
                        </button>
                      </form>

                      {/* Display Reviews */}
                      <div className="space-y-3">
                        {reviews.map((rev) => (
                          <div key={rev.id} className="p-3 bg-white rounded-xl border border-[#4A5D50]/10 space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-xs text-[#2B2E2C]">{rev.name}</span>
                              <span className="text-[10px] text-[#2B2E2C]/50">{rev.date}</span>
                            </div>
                            <div className="flex text-[#C9962F]">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                            <p className="text-xs text-[#2B2E2C]/80">{rev.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
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
                  <span>PCSIR Lab Certified 100% Raw</span>
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
