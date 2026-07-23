import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles, Truck, ShieldCheck, Globe, Leaf } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const ANNOUNCEMENTS = [
  '🚚 Free Temperature-Controlled Delivery across Pakistan on Orders over Rs. 4,000',
  '🧪 Every Batch Independently PCSIR Lab Tested for Guaranteed 100% Purity',
  '🍃 100% Raw, Unheated Sidr Honey & High-Altitude Skardu Shilajit Resin',
  '✨ Use Code BARN10 for 10% Off on Your First Harvest Order'
];

export const TopBar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#162017] via-[#233226] to-[#162017] text-[#FBF9F4] text-xs py-2 px-4 border-b border-white/10 select-none overflow-hidden shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Side: Helpline & Supplements */}
        <div className="hidden xl:flex items-center gap-4 text-[#FBF9F4]/85 text-[11px] shrink-0 whitespace-nowrap">
          <a
            href="tel:+924235789911"
            className="flex items-center gap-1.5 hover:text-[#FDD229] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#FDD229] shrink-0" />
            <span className="whitespace-nowrap">Pak Helpline: <strong className="font-bold">+92 42 3578 9911</strong></span>
          </a>
          <span className="text-white/20 shrink-0">|</span>
          <Link
            to="/supplements"
            className="flex items-center gap-1 hover:text-[#FDD229] transition-colors whitespace-nowrap shrink-0"
          >
            <Leaf className="w-3.5 h-3.5 text-[#FDD229] shrink-0" />
            <span className="whitespace-nowrap">Organic Supplements</span>
          </Link>
        </div>

        {/* Center: Ticker Announcement */}
        <div className="flex-1 min-w-0 flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#FDD229] shrink-0 animate-pulse" />
          <span className="transition-all duration-300 truncate whitespace-nowrap text-[#FBFCFC]">
            {ANNOUNCEMENTS[currentIdx]}
          </span>
        </div>

        {/* Right Side: Currency Switcher & Quick Links */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-[#FBFCFC]/85 text-[11px] sm:text-xs shrink-0 whitespace-nowrap">
          
          {/* Currency Switcher Pill */}
          <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-lg border border-white/15 shrink-0 whitespace-nowrap">
            <Globe className="w-3 h-3 text-[#FDD229] shrink-0" />
            <button
              onClick={() => setCurrency('PKR')}
              className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold transition-colors whitespace-nowrap ${
                currency === 'PKR' ? 'bg-[#FDD229] text-black shadow-2xs' : 'hover:text-white text-white/80'
              }`}
            >
              PKR (Rs)
            </button>
            <span className="text-white/30 shrink-0">|</span>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold transition-colors whitespace-nowrap ${
                currency === 'USD' ? 'bg-[#FDD229] text-black shadow-2xs' : 'hover:text-white text-white/80'
              }`}
            >
              USD ($)
            </button>
          </div>

          <span className="hidden md:inline text-white/20 shrink-0">|</span>

          {/* Track Order Link */}
          <Link
            to="/track-order"
            className="hover:text-[#FDD229] flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
          >
            <Truck className="w-3.5 h-3.5 text-[#FDD229] shrink-0" />
            <span className="whitespace-nowrap">Track Order</span>
          </Link>
          
          <span className="hidden lg:inline text-white/20 shrink-0">|</span>

          {/* Lab Reports Link */}
          <Link
            to="/certifications"
            className="hover:text-[#FDD229] hidden lg:flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#FDD229] shrink-0" />
            <span className="whitespace-nowrap">PCSIR Lab Reports</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
