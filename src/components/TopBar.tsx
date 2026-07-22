import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Truck, ShieldCheck, Sparkles, ChevronRight, Award } from 'lucide-react';

const ANNOUNCEMENTS = [
  '🚚 Free Express Temperature-Controlled Delivery on Orders over $50',
  '🧪 Every Single Batch Independently PCSIR Lab Tested for 100% Purity',
  '🍃 100% Raw, Unheated, Unfiltered Sidr Honey & High-Altitude Shilajit',
  '✨ Buy Any 3 Oils or Care Items & Get 15% Off Automatically at Checkout'
];

export const TopBar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#2B2E2C] text-[#FAF8F4] text-xs py-2 px-4 border-b border-[#FAF8F4]/10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left Side: Helpline & Outlets */}
        <div className="hidden lg:flex items-center gap-5 text-[#FAF8F4]/80">
          <a
            href="tel:+924235789911"
            className="flex items-center gap-1.5 hover:text-[#C9962F] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9962F]" />
            <span>Order Helpline: <strong>+92 42 3578 9911</strong></span>
          </a>
          <span className="text-[#FAF8F4]/20">|</span>
          <Link
            to="/stores"
            className="flex items-center gap-1 hover:text-[#C9962F] transition-colors"
          >
            <MapPin className="w-3 h-3 text-[#C9962F]" />
            <span>Find Barn Experience Store</span>
          </Link>
        </div>

        {/* Center: Ticker Announcement */}
        <div className="flex items-center gap-2 text-center text-[11px] sm:text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#C9962F] shrink-0 animate-pulse" />
          <span className="transition-all duration-300 min-h-[18px]">
            {ANNOUNCEMENTS[currentIdx]}
          </span>
        </div>

        {/* Right Side: Quick Links */}
        <div className="flex items-center gap-4 text-[#FAF8F4]/80 text-[11px] sm:text-xs">
          <Link
            to="/track-order"
            className="hover:text-[#C9962F] flex items-center gap-1 transition-colors"
          >
            <Truck className="w-3.5 h-3.5 text-[#C9962F]" />
            <span>Track Order</span>
          </Link>
          <span className="text-[#FAF8F4]/20">|</span>
          <Link
            to="/certifications"
            className="hover:text-[#C9962F] flex items-center gap-1 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D50]" />
            <span className="hidden sm:inline">Lab Reports</span>
          </Link>
          <span className="text-[#FAF8F4]/20">|</span>
          <Link
            to="/rewards"
            className="hover:text-[#C9962F] flex items-center gap-1 font-semibold text-[#C9962F] transition-colors"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Rewards</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
