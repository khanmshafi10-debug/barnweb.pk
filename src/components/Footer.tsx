import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Send, CheckCircle2, ShieldCheck, HeartHandshake, Truck, Award, Building2, Instagram, Facebook, Youtube, Leaf, Flame, Sun, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0B132B] via-[#1E295D] to-[#0A0F24] text-[#FBFCFC] pt-16 pb-12 relative overflow-hidden border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FBFCFC]/15">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-[#FBFCFC] flex items-center justify-center shadow-md border border-white/10">
                <BarnRoofMotif color="#FBFCFC" height={16} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FBFCFC]">
                Barn<span className="text-[#FDD229]">.pk</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FBFCFC]/80 leading-relaxed max-w-sm">
              Pakistan's premier boutique brand for pure, unheated raw wild honeys, high-altitude Skardu Shilajit resin, cold-pressed essential oils, organic spices, and artisanal pickles. Independently PCSIR lab tested for 100% authenticity.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FDD229] hover:text-black flex items-center justify-center transition-colors text-[#FBFCFC]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FDD229] hover:text-black flex items-center justify-center transition-colors text-[#FBFCFC]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FDD229] hover:text-black flex items-center justify-center transition-colors text-[#FBFCFC]">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Category Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#FDD229]">
              Pantry & Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#FBFCFC]/80">
              <li>
                <Link to="/supplements" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-[#FDD229]" />
                  <span>Organic Supplements & Shilajit</span>
                </Link>
              </li>
              <li>
                <Link to="/spices" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#FDD229]" />
                  <span>Farm Spices & Pamir Saffron</span>
                </Link>
              </li>
              <li>
                <Link to="/pickles" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-[#FDD229]" />
                  <span>Handcrafted Desi Pickles</span>
                </Link>
              </li>
              <li>
                <Link to="/shop?category=grown" className="hover:text-[#FDD229] transition-colors">
                  Raw Sidr & Wildflower Honey
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care & Features Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#FDD229]">
              Customer Care & Portal
            </h4>
            <ul className="space-y-2 text-xs text-[#FBFCFC]/80">
              <li>
                <Link to="/track-order" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#FDD229]" />
                  <span>Track Order Shipment</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#FDD229]" />
                  <span>About Our Heritage & Story</span>
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8A7BE0]" />
                  <span>PCSIR Lab Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-[#FDD229] transition-colors">
                  Skin & Health Routine Quiz
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FDD229]" />
                  <span>Harvest Circle Rewards</span>
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-[#FDD229] transition-colors flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#FDD229]" />
                  <span>Wholesale & Corporate Gifting</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Gazette Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-[#FDD229]">
              Harvest Gazette
            </h4>
            <p className="text-xs text-[#FBFCFC]/80 leading-relaxed">
              Subscribe for new harvest drops, mountain honey release dates, and 10% off your first order.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#FDD229]/20 border border-[#FDD229] rounded-xl flex items-center gap-2 text-xs text-[#FBFCFC]">
                <CheckCircle2 className="w-4 h-4 text-[#FDD229] shrink-0" />
                <span>Subscribed! Use code <strong>HARVEST10</strong> for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-[#FBFCFC] placeholder-white/50 focus:outline-none focus:border-[#FDD229]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#FDD229] text-black font-bold text-xs rounded-lg hover:bg-[#FFE066] transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FBFCFC]/70">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FDD229]" />
              100% Unheated & PCSIR Lab Tested
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-[#FDD229]" />
              Ethical Beekeeping & Foraging
            </span>
          </div>

          <div className="text-center md:text-right">
            © {new Date().getFullYear()} Barn.pk. All Rights Reserved. Crafted for authentic wellness.
          </div>
        </div>

      </div>
    </footer>
  );
};
