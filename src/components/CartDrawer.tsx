import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { BarnRoofMotif } from './BarnRoofMotif';
import { ImageWithFallback } from './ImageWithFallback';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 40.0; // $40
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutSuccess(false);
      onClose();
    }, 2800);
  };

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
                You unlocked FREE Temperature-Controlled Delivery!
              </span>
            ) : (
              <span>
                Add <strong>${(freeShippingThreshold - subtotal).toFixed(2)}</strong> more for FREE Shipping
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
            {checkoutSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#4A5D50] text-[#FAF8F4] flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-[#C9962F]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">Order Placed!</h3>
                <p className="text-sm text-[#2B2E2C]/70">
                  Thank you for nourishing your family with Barn.pk. We are preparing your fresh batch.
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#2B2E2C]/60 py-12">
                <div className="w-16 h-16 rounded-full bg-[#4A5D50]/10 flex items-center justify-center text-[#4A5D50]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Your cart is empty</h3>
                <p className="text-xs max-w-xs">
                  Discover our raw Karak Sidr Honey, A2 Bilona Ghee, or Skardu Shilajit resin.
                </p>
                <Button variant="primary-grown" size="sm" onClick={onClose}>
                  Browse Shop Range
                </Button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3 bg-white rounded-xl border border-[#4A5D50]/10 shadow-2xs flex items-center gap-3"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      fallbackTitle={item.product.name}
                      category={item.product.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-bold text-[#2B2E2C] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#2B2E2C]/60">{item.product.volumeOrWeight}</p>
                    <span className="text-xs font-bold text-[#4A5D50] mt-0.5 block">
                      ${item.product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex items-center gap-1.5 bg-[#FAF8F4] border border-[#4A5D50]/15 rounded-lg p-1">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 hover:bg-[#4A5D50]/10 rounded text-[#2B2E2C]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 hover:bg-[#4A5D50]/10 rounded text-[#2B2E2C]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-[#2B2E2C]/40 hover:text-red-600 p-1 transition-colors"
                    title="Remove item"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && !checkoutSuccess && (
            <div className="p-5 bg-white border-t border-[#4A5D50]/15 space-y-3">
              <div className="flex justify-between text-sm text-[#2B2E2C]">
                <span>Subtotal</span>
                <span className="font-bold text-base">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#2B2E2C]/70">
                <span>Estimated Delivery</span>
                <span>{isFreeShipping ? 'FREE' : '$4.99'}</span>
              </div>
              
              <div className="pt-2 border-t border-[#4A5D50]/10 flex justify-between font-serif text-lg font-bold text-[#2B2E2C]">
                <span>Total</span>
                <span>${(subtotal + (isFreeShipping ? 0 : 4.99)).toFixed(2)}</span>
              </div>

              <Button
                variant="gold"
                fullWidth
                size="lg"
                onClick={handleCheckout}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Proceed to Checkout
              </Button>

              <div className="text-[10px] text-center text-[#2B2E2C]/60 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D50]" />
                100% Glass-Safe Packaging • Satisfaction Guarantee
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

