import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Heart, Sparkles, MapPin, Award, ShieldCheck, Truck } from 'lucide-react';
import { BarnRoofMotif } from './BarnRoofMotif';
import { Button } from './Button';
import { TopBar } from './TopBar';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Routine Quiz', path: '/quiz' },
    { name: 'Outlets', path: '/stores' },
    { name: 'Lab Reports', path: '/certifications' },
    { name: 'Rewards', path: '/rewards' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Journal', path: '/journal' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <TopBar />

      {/* Sticky Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F4]/95 backdrop-blur-md shadow-sm border-b border-[#4A5D50]/10 py-3'
            : 'bg-[#FAF8F4] py-3.5 border-b border-[#4A5D50]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo Left */}
          <Link to="/" className="group flex items-center gap-2.5 focus:outline-none shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#4A5D50] text-[#FAF8F4] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <BarnRoofMotif color="#FAF8F4" height={14} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2B2E2C] leading-none group-hover:text-[#4A5D50] transition-colors">
                Barn<span className="text-[#C9962F]">.pk</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-medium text-[#4A5D50]/80 mt-0.5">
                Farm-Rooted Health
              </span>
            </div>
          </Link>

          {/* Links Center */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors relative ${
                    active
                      ? 'text-[#4A5D50] bg-[#4A5D50]/10 font-bold'
                      : 'text-[#2B2E2C]/80 hover:text-[#4A5D50] hover:bg-[#4A5D50]/5'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#C9962F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-[#2B2E2C]/80 bg-white border border-[#4A5D50]/15 hover:border-[#4A5D50] transition-all shadow-2xs"
              title="Search products (Cmd/Ctrl + K)"
            >
              <Search className="w-4 h-4 text-[#4A5D50]" />
              <span className="hidden sm:inline">Search remedies...</span>
              <kbd className="hidden lg:inline text-[9px] font-mono bg-black/5 px-1.5 py-0.5 rounded text-[#2B2E2C]/50">
                ⌘K
              </kbd>
            </button>

            {/* Wishlist Trigger */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-xl text-[#2B2E2C] hover:text-[#C9962F] hover:bg-[#4A5D50]/10 transition-colors"
              title="View Saved Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C9962F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-xl text-[#2B2E2C] hover:text-[#4A5D50] hover:bg-[#4A5D50]/10 transition-colors focus:outline-none"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#4A5D50] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Shop CTA */}
            <div className="hidden sm:block">
              <Link to="/shop">
                <Button variant="primary-grown" size="sm">
                  Explore Shop
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-[#2B2E2C] hover:bg-[#4A5D50]/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F4] border-b border-[#4A5D50]/10 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-lg animate-fade-in">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                      active
                        ? 'bg-[#4A5D50] text-[#FAF8F4]'
                        : 'text-[#2B2E2C] hover:bg-[#4A5D50]/10 bg-white border border-[#4A5D50]/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#4A5D50]/10 flex flex-col gap-2">
              <Link to="/track-order" className="text-xs text-[#2B2E2C]/80 flex items-center gap-2 p-2">
                <Truck className="w-4 h-4 text-[#C9962F]" />
                <span>Track Order Shipment</span>
              </Link>
              <Link to="/shop" className="w-full">
                <Button variant="primary-grown" fullWidth size="md">
                  Shop All Barn Products
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
