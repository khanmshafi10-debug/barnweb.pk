import React from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { BarnRoofMotif } from './BarnRoofMotif';
import { ImageWithFallback } from './ImageWithFallback';
import { useCurrency } from '../context/CurrencyContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenCheckout
}) => {
  const { formatPrice } = useCurrency();

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 40.0; // $40 = Rs. 11,200
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F4] shadow-2xl flex flex-col justify-between border-l border-[#4A5D50]/20">
          
          {/* Header */}
          <div className="p-5 bg-[#4A5D50] text-[#FAF8F4] flex items-center justify-between relative">
            <div className="flex items-center gap-2">
              <BarnRoofMotif color="#C9962F" height={14} />
              <h2 className="font-serif text-lg font-bold">Your Barn.pk Pantry</h2>
              <span className="text-xs bg-[#C9962F] text-white font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#4A5D50]/10 p-3 px-5 border-b border-[#4A5D50]/15 text-xs text-[#2B2E2C]">
            {isFreeShipping ? (
              <span className="flex items-center gap-1.5 font-semibold text-[#4A5D50]">
                <CheckCircle2 className="w-4 h-4 text-[#C9962F]" />
                Unlocked FREE Temperature-Controlled Delivery!
              </span>
            ) : (
              <span>
                Add <strong>{formatPrice(freeShippingThreshold - subtotal)}</strong> more for FREE Delivery
              </span>
            )}
            <div className="w-full h-1.5 bg-black/10 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#C9962F] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-[#2B2E2C]/70">
                <div className="w-16 h-16 rounded-full bg-[#4A5D50]/10 flex items-center justify-center text-[#4A5D50]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Your pantry is empty</h3>
                  <p className="text-xs">Explore our wild Sidr honey, high-altitude shilajit, or organic hair serums.</p>
                </div>
                <Button variant="outline" size="sm" onClick={onClose}>
                  Browse Organic Catalog
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white p-3.5 rounded-xl border border-[#4A5D50]/15 flex gap-3 shadow-2xs group relative"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-black/5 bg-gray-50">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      category={item.product.category}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-serif text-xs font-bold text-[#2B2E2C] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#2B2E2C]/40 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#2B2E2C]/60 block">{item.product.volumeOrWeight}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 border border-[#4A5D50]/20 rounded-lg px-2 py-0.5 bg-[#FAF8F4]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="text-[#2B2E2C]/70 hover:text-[#4A5D50]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#2B2E2C] min-w-[16px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="text-[#2B2E2C]/70 hover:text-[#4A5D50]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-[#2B2E2C]">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#4A5D50]/15 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#2B2E2C]/70">Subtotal</span>
                <span className="font-serif text-xl font-bold text-[#2B2E2C]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-[#2B2E2C]/60">
                Taxes & express temperature-controlled shipping calculated at checkout.
              </p>
              
              <Button
                variant="primary"
                className="w-full justify-center py-3 text-sm font-bold shadow-md"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
              >
                Proceed to Checkout
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
