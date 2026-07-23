import React, { useState } from 'react';
import { CartItem } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from '../context/ToastContext';
import { X, CheckCircle2, Truck, ShieldCheck, CreditCard, Wallet, MapPin, Tag, ArrowRight } from 'lucide-react';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart: () => void;
}

const PAKISTAN_CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Peshawar',
  'Multan',
  'Faisalabad',
  'Quetta',
  'Sialkot',
  'Hyderabad',
  'Gujranwala',
  'Abbottabad',
  'Gilgit',
  'Muzaffarabad'
];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onClearCart,
}) => {
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Lahore',
    paymentMethod: 'cod', // cod | card | easypaisa | jazzcash
    promoCode: ''
  });

  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoSuccess, setPromoSuccess] = useState('');
  const [placedOrderInfo, setPlacedOrderInfo] = useState<{ trackingCode: string; total: number } | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = rawSubtotal * (discountPercent / 100);
  const shippingFee = rawSubtotal > 40 ? 0 : 4.0;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleApplyPromo = () => {
    const code = formData.promoCode.trim().toUpperCase();
    if (code === 'BARN10' || code === 'CHILTAN10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Harvest Discount Applied!');
      showToast('Promo Code Applied!', '10% discount has been subtracted from your subtotal.');
    } else if (code === 'FREESHIP') {
      setDiscountPercent(0);
      setPromoSuccess('Free Express Delivery Unlocked!');
      showToast('Free Shipping Unlocked!', 'Shipping fees waived for your order.');
    } else {
      showToast('Invalid Code', 'Try using promo code BARN10 for 10% off.', 'warning');
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      showToast('Missing Details', 'Please fill in your name, phone number, and delivery address.', 'warning');
      return;
    }

    const trackingCode = `PK-BARN-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder = {
      trackingCode,
      date: new Date().toLocaleDateString(),
      items: cart,
      total: finalTotal,
      city: formData.city,
      address: formData.address,
      status: 'Order Placed & Confirmed'
    };

    // Save order to localStorage history
    const existingOrders = JSON.parse(localStorage.getItem('barn_orders') || '[]');
    localStorage.setItem('barn_orders', JSON.stringify([newOrder, ...existingOrders]));

    setPlacedOrderInfo({ trackingCode, total: finalTotal });
    setStep('success');
    onClearCart();
    showToast('Order Confirmed!', `Tracking Code: ${trackingCode}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF8F4] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-[#4A5D50]/20 my-8">
        
        {/* Modal Header */}
        <div className="bg-[#4A5D50] text-[#FAF8F4] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BarnRoofMotif color="#C9962F" height={16} />
            <h2 className="font-serif text-lg font-bold">
              {step === 'details' ? 'Complete Your Barn.pk Order' : 'Order Successfully Placed!'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: Shipping Info */}
              <div className="space-y-4">
                <h3 className="font-serif text-sm font-bold text-[#2B2E2C] border-b border-[#4A5D50]/15 pb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9962F]" />
                  1. Shipping Information (Pakistan)
                </h3>

                <div>
                  <label className="text-xs font-bold text-[#2B2E2C] block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-[#4A5D50]/20 focus:border-[#4A5D50] focus:ring-1 focus:ring-[#4A5D50]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#2B2E2C] block mb-1">Phone Number (+92) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-[#4A5D50]/20 focus:border-[#4A5D50] focus:ring-1 focus:ring-[#4A5D50]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2B2E2C] block mb-1">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#4A5D50]/20 focus:border-[#4A5D50] focus:ring-1 focus:ring-[#4A5D50]"
                    >
                      {PAKISTAN_CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#2B2E2C] block mb-1">Complete Street Address *</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="House/Plot #, Block, Sector, Landmark..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl bg-white border border-[#4A5D50]/20 focus:border-[#4A5D50] focus:ring-1 focus:ring-[#4A5D50]"
                  />
                </div>

                {/* Payment Selection */}
                <h3 className="font-serif text-sm font-bold text-[#2B2E2C] border-b border-[#4A5D50]/15 pb-2 pt-2 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#4A5D50]" />
                  2. Payment Method
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  <label className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center gap-2 ${formData.paymentMethod === 'cod' ? 'border-[#C9962F] bg-[#C9962F]/10 text-[#2B2E2C]' : 'border-[#4A5D50]/20 bg-white'}`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#C9962F]"
                    />
                    <span>Cash on Delivery (COD)</span>
                  </label>

                  <label className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center gap-2 ${formData.paymentMethod === 'easypaisa' ? 'border-[#C9962F] bg-[#C9962F]/10 text-[#2B2E2C]' : 'border-[#4A5D50]/20 bg-white'}`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'easypaisa'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'easypaisa' })}
                      className="accent-[#C9962F]"
                    />
                    <span>EasyPaisa / JazzCash</span>
                  </label>
                </div>
              </div>

              {/* Right Column: Order Summary & Promo */}
              <div className="bg-white p-5 rounded-2xl border border-[#4A5D50]/15 space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#2B2E2C] border-b border-[#4A5D50]/15 pb-2 flex items-center justify-between">
                    <span>Order Summary</span>
                    <span className="text-xs text-[#C9962F] font-bold">{cart.length} items</span>
                  </h3>

                  {/* Items List */}
                  <div className="max-h-40 overflow-y-auto space-y-2 py-3 border-b border-[#4A5D50]/10">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center text-xs">
                        <span className="truncate max-w-[180px] text-[#2B2E2C]">
                          {item.quantity}x {item.product.name}
                        </span>
                        <span className="font-semibold text-[#4A5D50]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Promo Input */}
                  <div className="pt-3">
                    <label className="text-[11px] font-bold text-[#2B2E2C] block mb-1 flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-[#C9962F]" />
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. BARN10"
                        value={formData.promoCode}
                        onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                        className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-[#FAF8F4] border border-[#4A5D50]/20 uppercase"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-3 py-1.5 rounded-xl bg-[#4A5D50] text-white text-xs font-bold hover:bg-[#C9962F] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {promoSuccess && (
                      <span className="text-[11px] font-bold text-[#4A5D50] block mt-1">✓ {promoSuccess}</span>
                    )}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 pt-4 text-xs">
                    <div className="flex justify-between text-[#2B2E2C]/80">
                      <span>Subtotal</span>
                      <span>{formatPrice(rawSubtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#C9962F] font-semibold">
                        <span>Discount ({discountPercent}%)</span>
                        <span>-{formatPrice(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#2B2E2C]/80">
                      <span>Express Temperature-Controlled Delivery</span>
                      <span>{shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-sm text-[#2B2E2C] border-t border-[#4A5D50]/15 pt-2">
                      <span>Total Payable</span>
                      <span className="text-[#C9962F] font-serif text-base">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full mt-4 justify-center py-3 text-sm font-bold shadow-md"
                >
                  Confirm & Place Order
                </Button>
              </div>

            </div>

          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#4A5D50] text-white mx-auto flex items-center justify-center animate-bounce shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-[#C9962F]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">Order Placed Successfully!</h3>
              <p className="text-xs text-[#2B2E2C]/80 max-w-md mx-auto">
                Thank you for choosing Barn.pk & Chiltan Pure. Your organic harvest package is being prepared with temperature-controlled care.
              </p>
            </div>

            {placedOrderInfo && (
              <div className="bg-white p-4 rounded-xl border border-[#C9962F]/30 max-w-sm mx-auto space-y-2">
                <span className="text-xs text-[#2B2E2C]/70 block">Your Order Tracking Code:</span>
                <span className="font-mono text-lg font-bold text-[#C9962F] block tracking-wider bg-[#FAF8F4] py-1.5 rounded-lg border border-[#C9962F]/20">
                  {placedOrderInfo.trackingCode}
                </span>
                <span className="text-xs font-bold text-[#2B2E2C] block pt-1">
                  Total Paid: {formatPrice(placedOrderInfo.total)} (Cash on Delivery)
                </span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Button
                variant="primary"
                onClick={() => {
                  onClose();
                  navigate(`/track-order?code=${placedOrderInfo?.trackingCode}`);
                }}
                icon={<Truck className="w-4 h-4" />}
              >
                Track Live Delivery Status
              </Button>
              <Button variant="outline" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
