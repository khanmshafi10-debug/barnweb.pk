import React, { useState } from 'react';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { Building2, Gift, Send, CheckCircle2, ShieldCheck, Sparkles, PackageCheck } from 'lucide-react';

export const Wholesale: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [quantity, setQuantity] = useState(50);

  const getDiscountRate = (qty: number) => {
    if (qty >= 500) return 30;
    if (qty >= 200) return 25;
    if (qty >= 50) return 20;
    return 15;
  };

  const discountRate = getDiscountRate(quantity);

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            Wholesale, Retail Distribution & Corporate Gifting
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Bulk Orders & Customized Corporate Gift Boxes
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            Partner with Barn.pk for custom-engraved wooden gift boxes, high-tier hotel honey amenities, or wholesale retail distribution of our Sidr Honey and Shilajit lines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Tier Pricing Calculator */}
        <div className="bg-white rounded-2xl border border-[#4A5D50]/20 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9962F]">Volume Tier Estimator</span>
            <h2 className="font-serif text-2xl font-bold text-[#2B2E2C]">Estimate Bulk Wholesale Savings</h2>
          </div>

          <div className="space-y-4 bg-[#FAF8F4] p-6 rounded-xl border border-[#4A5D50]/15">
            <div className="flex justify-between items-center text-xs font-bold text-[#2B2E2C]">
              <span>Order Volume: {quantity} Units</span>
              <span className="text-[#4A5D50] text-sm font-serif">Tier Discount: {discountRate}% OFF</span>
            </div>

            <input
              type="range"
              min="20"
              max="1000"
              step="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full accent-[#4A5D50] cursor-pointer"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs pt-2">
              <div className="p-2 bg-white rounded-lg border border-[#4A5D50]/10">
                <span className="block text-[10px] text-[#2B2E2C]/60">20 - 49 Units</span>
                <strong className="text-[#2B2E2C]">15% Off</strong>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#4A5D50]/10">
                <span className="block text-[10px] text-[#2B2E2C]/60">50 - 199 Units</span>
                <strong className="text-[#2B2E2C]">20% Off</strong>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#4A5D50]/10">
                <span className="block text-[10px] text-[#2B2E2C]/60">200 - 499 Units</span>
                <strong className="text-[#2B2E2C]">25% Off</strong>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#4A5D50]/10">
                <span className="block text-[10px] text-[#2B2E2C]/60">500+ Units</span>
                <strong className="text-[#C9962F]">30% Off</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Gifting Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-[#4A5D50]/15 shadow-md space-y-4">
            <Gift className="w-8 h-8 text-[#C9962F]" />
            <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">Corporate & Festive Gift Boxes</h3>
            <p className="text-xs text-[#2B2E2C]/80 leading-relaxed">
              Custom pine wood boxes laser-etched with your company logo. Includes custom note cards, raw Sidr honey jars, and brass honey dippers.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#4A5D50]/15 shadow-md space-y-4">
            <PackageCheck className="w-8 h-8 text-[#4A5D50]" />
            <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">Retail & Pharmacy Stocking</h3>
            <p className="text-xs text-[#2B2E2C]/80 leading-relaxed">
              Complete point-of-sale display racks, tamper-proof glass seals, and PCSIR batch certificates supplied with every wholesale shipment.
            </p>
          </div>
        </div>

        {/* Wholesale Form */}
        <section className="p-8 sm:p-12 bg-white rounded-2xl border border-[#4A5D50]/20 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <BarnRoofMotif variant="divider" className="text-[#C9962F]" />
            <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">Submit a Wholesale / Gifting Inquiry</h3>
            <p className="text-xs text-[#2B2E2C]/70">Fill out your requirements below for a formal price quotation.</p>
          </div>

          {submitted ? (
            <div className="p-6 bg-[#4A5D50]/10 rounded-xl text-center space-y-2 border border-[#4A5D50]/30 max-w-md mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#4A5D50] mx-auto" />
              <h4 className="font-serif text-lg font-bold text-[#2B2E2C]">Bulk Quotation Request Sent</h4>
              <p className="text-xs text-[#2B2E2C]/80">Our corporate team will email your customized invoice within 12 business hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
            >
              <input type="text" required placeholder="Company / Organization Name *" className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4]" />
              <input type="text" required placeholder="Contact Person Name *" className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4]" />
              <input type="email" required placeholder="Business Email *" className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4]" />
              <input type="tel" required placeholder="Phone Number *" className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4]" />
              <select className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4]">
                <option>Interested Products: Sidr Honey</option>
                <option>Interested Products: Himalayan Shilajit</option>
                <option>Interested Products: Rosemary Hair Oil & Skincare</option>
                <option>Interested Products: Custom Corporate Gift Boxes</option>
              </select>
              <input type="number" placeholder="Estimated Quantity (e.g. 100)" className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4]" />
              <textarea placeholder="Additional requests, logo engraving details, or delivery deadline..." className="sm:col-span-2 p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4] h-24" />
              <div className="sm:col-span-2 text-center pt-2">
                <Button variant="primary-grown" size="md" icon={<Send className="w-4 h-4" />}>
                  Request Wholesale Quotation
                </Button>
              </div>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};
