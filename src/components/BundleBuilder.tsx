import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Button } from './Button';
import { ImageWithFallback } from './ImageWithFallback';
import { Check, ShoppingBag, Gift } from 'lucide-react';

interface BundleBuilderProps {
  onAddToCart: (product: Product) => void;
}

export const BundleBuilder: React.FC<BundleBuilderProps> = ({ onAddToCart }) => {
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);

  const handleToggle = (product: Product) => {
    if (selectedItems.some((item) => item.id === product.id)) {
      setSelectedItems(selectedItems.filter((item) => item.id !== product.id));
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, product]);
      }
    }
  };

  const rawTotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const discountAmount = selectedItems.length === 3 ? rawTotal * 0.15 : 0;
  const finalPrice = rawTotal - discountAmount;

  const handleAddBundleToCart = () => {
    if (selectedItems.length !== 3) return;
    
    // Create bundle virtual product
    const customBundleProduct: Product = {
      id: `custom-bundle-${Date.now()}`,
      name: `Custom Organic Trio (${selectedItems.map((i) => i.name.split(' ')[0]).join(', ')})`,
      subtitle: 'Build Your Own Organic Box • 15% Off Discount Applied',
      category: 'bundles',
      categoryName: 'Custom Bundle Box',
      price: finalPrice,
      originalPrice: rawTotal,
      rating: 5.0,
      reviewCount: 1,
      image: selectedItems[0]?.image || 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
      badge: 'Custom 15% Off',
      description: `Includes: ${selectedItems.map((i) => i.name).join(' + ')}. Hand-packaged in a wooden keepsake box.`,
      origin: 'Barn.pk Artisanal Sourcing',
      volumeOrWeight: '3 Full-Size Items',
      ingredients: selectedItems.flatMap((i) => i.ingredients),
      benefits: ['Custom tailored wellness trio', '15% Bundle savings', 'Includes wooden keepsake gift packaging'],
      howToUse: 'Use each product according to individual label instructions.'
    };

    onAddToCart(customBundleProduct);
    setSelectedItems([]);
  };

  return (
    <div className="bg-[#4A5D50]/5 border border-[#4A5D50]/20 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden my-12">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/15 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            Build Your Own Organic Trio Box
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2B2E2C]">
            Pick Any 3 Products & Enjoy <span className="text-[#C9962F] underline decoration-wavy">15% Off</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2E2C]/70 max-w-xl mx-auto">
            Select three natural products from our Sidr Honey, Shilajit, Cold-Pressed Oils, or Botanical Skincare lines to create a custom wellness box.
          </p>
        </motion.div>

        {/* Selected Slots Preview Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#4A5D50]/15 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {[0, 1, 2].map((slotIdx) => {
              const item = selectedItems[slotIdx];
              return (
                <div
                  key={slotIdx}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 flex items-center justify-center relative overflow-hidden transition-all ${
                    item
                      ? 'border-[#4A5D50] bg-[#FAF8F4]'
                      : 'border-dashed border-[#4A5D50]/30 bg-black/5 text-[#2B2E2C]/40 text-xs'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {item ? (
                      <motion.div
                        key={item.id}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="w-full h-full relative"
                      >
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          fallbackTitle={item.name}
                          category={item.category}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => handleToggle(item)}
                          className="absolute top-1 right-1 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center text-[10px] font-bold"
                          title="Remove from slot"
                        >
                          ✕
                        </button>
                      </motion.div>
                    ) : (
                      <span className="text-[10px] sm:text-xs font-semibold">Slot {slotIdx + 1}</span>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Pricing & Add Button */}
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-[#4A5D50]/10">
            <div>
              <span className="text-[10px] text-[#2B2E2C]/60 block uppercase font-bold">
                {selectedItems.length < 3 ? `Select ${3 - selectedItems.length} More` : 'Custom Trio Price'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#2B2E2C]">
                  ${finalPrice.toFixed(2)}
                </span>
                {selectedItems.length === 3 && (
                  <span className="text-xs text-[#2B2E2C]/50 line-through">
                    ${rawTotal.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <Button
              variant="primary-grown"
              size="md"
              disabled={selectedItems.length !== 3}
              onClick={handleAddBundleToCart}
              icon={<ShoppingBag className="w-4 h-4" />}
            >
              Add Trio to Cart
            </Button>
          </div>
        </div>

        {/* Product Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
          {PRODUCTS.filter((p) => p.category !== 'bundles').map((product) => {
            const isSelected = selectedItems.some((i) => i.id === product.id);
            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleToggle(product)}
                className={`p-3 rounded-xl bg-white border cursor-pointer transition-all flex flex-col justify-between relative ${
                  isSelected
                    ? 'border-2 border-[#4A5D50] ring-2 ring-[#4A5D50]/20 shadow-md'
                    : 'border-[#4A5D50]/15 hover:border-[#4A5D50]/40'
                }`}
              >
                <div className="space-y-2">
                  <div className="aspect-square rounded-lg overflow-hidden relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      fallbackTitle={product.name}
                      category={product.category}
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#4A5D50] text-white rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-[#2B2E2C] leading-snug line-clamp-1">
                    {product.name}
                  </h4>
                  <span className="text-[10px] text-[#2B2E2C]/60 block">{product.volumeOrWeight}</span>
                </div>

                <div className="pt-2 border-t border-[#4A5D50]/10 flex items-center justify-between mt-2">
                  <span className="font-serif text-xs sm:text-sm font-bold text-[#2B2E2C]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-[#4A5D50] text-white'
                        : 'bg-[#4A5D50]/10 text-[#4A5D50]'
                    }`}
                  >
                    {isSelected ? 'Selected' : '+ Add'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
