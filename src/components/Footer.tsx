import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Button } from './Button';
import { Send, CheckCircle2, ShieldCheck, HeartHandshake, MapPin, Mail, Phone, Instagram, Facebook, Youtube, Truck, Award, Building2 } from 'lucide-react';

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
    <footer className="bg-[#2B2E2C] text-[#FAF8F4] pt-16 pb-12 relative overflow-hidden border-t-4 border-[#C9962F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FAF8F4]/15">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A5D50] text-[#FAF8F4] flex items-center justify-center shadow-md">
                <BarnRoofMotif color="#FAF8F4" height={16} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F4]">
                Barn<span className="text-[#C9962F]">.pk</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF8F4]/80 leading-relaxed max-w-sm">
              Pakistan's premier boutique brand for pure, unheated raw wild honeys, high-altitude Skardu Shilajit resin, cold-pressed essential oils, and botanical skincare. Independently PCSIR lab tested for 100% authenticity.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-[#FAF8F4]/10 hover:bg-[#C9962F] flex items-center justify-center transition-colors text-[#FAF8F4]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-[#FAF8F4]/10 hover:bg-[#C9962F] flex items-center justify-center transition-colors text-[#FAF8F4]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-[#FAF8F4]/10 hover:bg-[#C9962F] flex items-center justify-center transition-colors text-[#FAF8F4]">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Range Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#C9962F]">
              Pantry & Remedies
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F4]/80">
              <li>
                <Link to="/shop?category=grown" className="hover:text-[#C9962F] transition-colors">
                  Raw Sidr & Wildflower Honey
                </Link>
              </li>
              <li>
                <Link to="/shop?category=restored" className="hover:text-[#C9962F] transition-colors">
                  Pure Skardu Shilajit Resin
                </Link>
              </li>
              <li>
                <Link to="/shop?category=oils" className="hover:text-[#C9962F] transition-colors">
                  Cold-Pressed Rosemary & Oils
                </Link>
              </li>
              <li>
                <Link to="/shop?category=skincare" className="hover:text-[#C9962F] transition-colors">
                  Saffron Clay Mask & Rose Water
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bundles" className="hover:text-[#C9962F] transition-colors">
                  Custom Organic Trio Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care & Features Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#C9962F]">
              Customer Care & Outlets
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F4]/80">
              <li>
                <Link to="/stores" className="hover:text-[#C9962F] transition-colors flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C9962F]" />
                  <span>Physical Outlets & Lounges</span>
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-[#C9962F] transition-colors flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#C9962F]" />
                  <span>Track Order Shipment</span>
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-[#C9962F] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9962F]" />
                  <span>PCSIR Lab Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-[#C9962F] transition-colors">
                  Skin & Health Routine Quiz
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="hover:text-[#C9962F] transition-colors flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C9962F]" />
                  <span>Harvest Circle Rewards</span>
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-[#C9962F] transition-colors flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C9962F]" />
                  <span>Wholesale & Corporate Gifting</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Gazette Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#C9962F]">
              Harvest Gazette
            </h4>
            <p className="text-xs text-[#FAF8F4]/80 leading-relaxed">
              Subscribe for new harvest drops, mountain honey release dates, and 10% off your first order.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#C9962F]/20 border border-[#C9962F] rounded-xl flex items-center gap-2 text-xs text-[#FAF8F4]">
                <CheckCircle2 className="w-4 h-4 text-[#C9962F] shrink-0" />
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F4]/10 border border-[#FAF8F4]/20 text-xs text-[#FAF8F4] placeholder-[#FAF8F4]/50 focus:outline-none focus:border-[#C9962F]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#C9962F] text-[#FAF8F4] rounded-lg hover:bg-[#b08226] transition-colors flex items-center justify-center"
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F4]/70">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C9962F]" />
              100% Unheated & PCSIR Lab Tested
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-[#C9962F]" />
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
