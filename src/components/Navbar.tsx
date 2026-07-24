import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Heart, Sparkles, ChevronDown, ChevronRight, SlidersHorizontal, ArrowRight, ShieldCheck } from 'lucide-react';
import { BarnRoofMotif } from './BarnRoofMotif';
import { TopBar } from './TopBar';
import { useCurrency } from '../context/CurrencyContext';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenAi
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  const handleMouseEnter = (menuKey: string) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setActiveMegaMenu(menuKey);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const MEGA_MENUS: Record<string, {
    title: string;
    description: string;
    path: string;
    subcategories: { name: string; path: string; desc: string }[];
    featured: { name: string; tag: string; price: string; image: string; path: string };
  }> = {
    supplements: {
      title: 'Organic Mountain Supplements',
      description: 'High-altitude Gilgit Shilajit, adaptogenic Ashwagandha, and organic superfood powders.',
      path: '/supplements',
      subcategories: [
        { name: 'Shilajit & Mineral Pitch', path: '/sub/shilajit', desc: '16,000 ft Skardu resin with 60%+ fulvic acid' },
        { name: 'Ashwagandha & Adaptogens', path: '/sub/ashwagandha', desc: 'KSM-66 root extracts for stress & sleep' },
        { name: 'Moringa & Superfood Powders', path: '/sub/moringa', desc: 'Shade-dried green leaf nutrition' },
        { name: 'Bee Pollen & Immunity', path: '/sub/pollen', desc: 'Wild blossom pollen granules' },
      ],
      featured: {
        name: 'Pure Himalayan Shilajit Resin',
        tag: 'Bestseller',
        price: 'Rs. 12,600',
        image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300',
        path: '/sub/shilajit'
      }
    },
    spices: {
      title: 'Farm Spices & Pamir Saffron',
      description: 'Slow stone-ground organic turmeric, hand-pounded Kashmiri chilis, and Grade-1 Pamir saffron.',
      path: '/spices',
      subcategories: [
        { name: 'Pamir & Kashmiri Saffron', path: '/sub/saffron', desc: 'Grade-1 Sargol red filaments' },
        { name: 'Organic Haldi & Turmeric', path: '/sub/haldi', desc: 'Stone-ground 5%+ curcumin turmeric' },
        { name: 'Hand-Pounded Red Chilis', path: '/sub/chili', desc: 'Coarse Kashmiri chili flakes' },
        { name: 'Whole Spices & Darchini', path: '/sub/whole', desc: 'Ceylon cinnamon & green cardamom' },
      ],
      featured: {
        name: 'Pure Pamir Organic Saffron',
        tag: 'Grade-1 Sargol',
        price: 'Rs. 10,640',
        image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=300',
        path: '/sub/saffron'
      }
    },
    pickles: {
      title: 'Handcrafted Desi Pickles & Chutneys',
      description: 'Traditional 45-day earthen pot sun-cured pickles preserved in cold-pressed mustard oil.',
      path: '/pickles',
      subcategories: [
        { name: 'Raw Mango Achar (Aam)', path: '/sub/mango', desc: 'Green mangoes with kalonji & mustard oil' },
        { name: 'Lemon & Green Chili Pickle', path: '/sub/lemon', desc: 'Fiery zesty lemons cured with nigella seeds' },
        { name: 'Garlic & Ginger Relish', path: '/sub/garlic', desc: 'Whole garlic cloves pickled for digestion' },
        { name: 'Tamarind & Plum Chutney', path: '/sub/chutney', desc: 'Tangy sweet relishes with jaggery' },
      ],
      featured: {
        name: 'Traditional Hyderabadi Mango Achar',
        tag: 'Handcrafted',
        price: 'Rs. 4,480',
        image: 'https://images.pexels.com/photos/4199094/pexels-photo-4199094.jpeg?auto=compress&cs=tinysrgb&w=300',
        path: '/sub/mango'
      }
    }
  };

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Supplements', path: '/supplements', hasMega: true, key: 'supplements' },
    { name: 'Spices', path: '/spices', hasMega: true, key: 'spices' },
    { name: 'Pickles', path: '/pickles', hasMega: true, key: 'pickles' },
    { name: 'Routine Quiz', path: '/quiz' },
    { name: 'About Us', path: '/about' },
  ];

  const categories = [
    { name: 'Supplements', path: '/supplements' },
    { name: 'Spices', path: '/spices' },
    { name: 'Pickles', path: '/pickles' },
    { name: 'Sidr Honey', path: '/shop?category=grown' },
    { name: 'Skardu Shilajit', path: '/sub/shilajit' },
    { name: 'Rosemary Hair Care', path: '/shop?category=oils' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <TopBar />

      {/* Sticky Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F4]/98 backdrop-blur-md shadow-md border-b border-[#1E3A8A]/15 py-2'
            : 'bg-[#FBF9F4] py-3 border-b border-[#1E3A8A]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Left: Mobile Drawer Trigger & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1C241D] hover:bg-[#1E3A8A]/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="group flex items-center gap-2 focus:outline-none shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1E3A8A] text-[#FBFCFC] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <BarnRoofMotif color="#FBFCFC" height={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2B2E2C] leading-none group-hover:text-[#1E3A8A] transition-colors">
                  Barn<span className="text-[#FDD229]">.pk</span>
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-wider uppercase font-bold text-[#1E3A8A] mt-0.5 whitespace-nowrap">
                  Chiltan Organic Foods
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Main Navigation Links with Mega-Menu Support */}
          <nav className="hidden lg:flex items-center space-x-1 shrink-0 relative">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <div
                  key={link.name}
                  className="relative py-1.5"
                  onMouseEnter={() => link.hasMega && link.key && handleMouseEnter(link.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={link.path}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                      active
                        ? 'text-[#1E3A8A] bg-[#1E3A8A]/10 font-bold'
                        : 'text-[#2B2E2C]/85 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/5'
                    }`}
                  >
                    {link.name}
                    {link.hasMega && <ChevronDown className="w-3 h-3 opacity-60" />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Compact Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-[#2B2E2C]/80 bg-white border border-[#1E3A8A]/20 hover:border-[#FDD229] transition-all shadow-2xs whitespace-nowrap"
              title="Search remedies..."
            >
              <Search className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
              <span className="hidden 2xl:inline text-[11px]">Search remedies...</span>
            </button>

            {/* Compact AI Advisor Button */}
            <button
              onClick={onOpenAi}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#172554] transition-all shadow-xs whitespace-nowrap shrink-0 border border-[#FDD229]/40"
              title="Ask Barn & Chiltan AI Advisor"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FDD229] shrink-0 animate-pulse" />
              <span className="hidden sm:inline">AI Advisor</span>
            </button>

            {/* Wishlist Button */}
            <Link
              to="/wishlist"
              className="p-1.5 sm:p-2 rounded-full text-[#2B2E2C]/80 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10 transition-colors relative shrink-0"
              title="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#FDD229] text-black text-[9px] font-extrabold rounded-full flex items-center justify-center shadow-2xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Compact Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E3A8A] text-[#FBFCFC] hover:bg-[#172554] transition-colors shadow-xs group shrink-0"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#FDD229] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-xs font-bold font-serif hidden sm:inline whitespace-nowrap">Cart</span>
              <span className="text-[11px] font-extrabold bg-[#FDD229] text-black px-1.5 py-0.2 rounded-full">
                {cartCount}
              </span>
            </button>

          </div>

        </div>

        {/* Mega Menu Overlay */}
        {activeMegaMenu && MEGA_MENUS[activeMegaMenu] && (
          <div
            className="absolute top-full left-0 right-0 bg-[#FBFCFC] border-b-2 border-[#FDD229] shadow-2xl z-50 animate-fade-in"
            onMouseEnter={() => {
              if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Column 1: Subcategories List */}
                <div className="col-span-7 space-y-4 border-r border-[#4A5D50]/15 pr-8">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">
                      {MEGA_MENUS[activeMegaMenu].title}
                    </h3>
                    <p className="text-xs text-[#2B2E2C]/70 mt-1">
                      {MEGA_MENUS[activeMegaMenu].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {MEGA_MENUS[activeMegaMenu].subcategories.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={sub.path}
                        onClick={() => setActiveMegaMenu(null)}
                        className="p-3 rounded-xl hover:bg-[#FAF8F4] border border-transparent hover:border-[#4A5D50]/15 transition-all group"
                      >
                        <div className="font-bold text-xs text-[#2B2E2C] group-hover:text-[#4A5D50] flex items-center justify-between">
                          <span>{sub.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9962F]" />
                        </div>
                        <p className="text-[11px] text-[#2B2E2C]/60 mt-0.5 line-clamp-1">
                          {sub.desc}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to={MEGA_MENUS[activeMegaMenu].path}
                      onClick={() => setActiveMegaMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A5D50] hover:text-[#C9962F] transition-colors"
                    >
                      View Complete Range <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Featured Range Card */}
                <div className="col-span-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-[#C9962F] tracking-wider">
                      Featured In {activeMegaMenu}
                    </span>
                    <span className="text-[10px] font-bold bg-[#4A5D50] text-white px-2 py-0.5 rounded">
                      {MEGA_MENUS[activeMegaMenu].featured.tag}
                    </span>
                  </div>

                  <Link
                    to={MEGA_MENUS[activeMegaMenu].featured.path}
                    onClick={() => setActiveMegaMenu(null)}
                    className="flex items-center gap-4 p-3 bg-[#FAF8F4] rounded-2xl border border-[#4A5D50]/15 hover:border-[#C9962F] transition-all group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-black/5 bg-white">
                      <img
                        src={MEGA_MENUS[activeMegaMenu].featured.image}
                        alt={MEGA_MENUS[activeMegaMenu].featured.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-[#2B2E2C] group-hover:text-[#4A5D50] transition-colors">
                        {MEGA_MENUS[activeMegaMenu].featured.name}
                      </h4>
                      <p className="font-serif text-sm font-bold text-[#C9962F]">
                        {MEGA_MENUS[activeMegaMenu].featured.price}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4A5D50] group-hover:underline">
                        Order Now <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>

                  <div className="p-3 rounded-xl bg-[#4A5D50]/5 border border-[#4A5D50]/10 text-xs text-[#2B2E2C]/80 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#C9962F] shrink-0" />
                    <span>Every batch independently PCSIR lab certified for guaranteed purity.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Categories Quick Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs border-t border-[#4A5D50]/10 mt-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9962F] shrink-0 whitespace-nowrap flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-[#C9962F]" />
            Categories:
          </span>
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.path}
              className="shrink-0 px-3 py-1 rounded-full bg-white hover:bg-[#4A5D50] hover:text-white border border-[#4A5D50]/15 transition-all text-[11px] font-semibold text-[#2B2E2C] whitespace-nowrap shadow-2xs"
            >
              {cat.name}
            </Link>
          ))}
        </div>

      </header>

      {/* Mobile Navigation Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF8F4] shadow-2xl flex flex-col justify-between p-6 border-r border-[#4A5D50]/20 z-50 overflow-y-auto">
            
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#4A5D50]/15">
                <div className="flex items-center gap-2">
                  <BarnRoofMotif color="#4A5D50" height={16} />
                  <span className="font-serif text-xl font-bold text-[#2B2E2C]">Barn.pk</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-[#2B2E2C]/70 hover:text-[#2B2E2C]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Currency Selector */}
              <div className="bg-white p-3 rounded-xl border border-[#4A5D50]/15 flex items-center justify-between">
                <span className="text-xs font-bold text-[#2B2E2C]">Select Currency:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setCurrency('PKR')}
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      currency === 'PKR' ? 'bg-[#C9962F] text-white' : 'bg-black/5 text-[#2B2E2C]'
                    }`}
                  >
                    PKR (Rs)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      currency === 'USD' ? 'bg-[#C9962F] text-white' : 'bg-black/5 text-[#2B2E2C]'
                    }`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'bg-[#4A5D50] text-white font-bold'
                        : 'text-[#2B2E2C] hover:bg-[#4A5D50]/10'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="space-y-3 pt-6 border-t border-[#4A5D50]/15 mt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAi();
                }}
                className="w-full py-3 rounded-xl bg-[#4A5D50] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#C9962F]" />
                <span>Ask Barn & Chiltan AI Advisor</span>
              </button>
              <div className="text-[11px] text-center text-[#2B2E2C]/60">
                Order Helpline: +92 42 3578 9911
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
