import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { AiRemedyModal } from './components/AiRemedyModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Journal } from './pages/Journal';
import { Contact } from './pages/Contact';
import { Quiz } from './pages/Quiz';
import { TrackOrder } from './pages/TrackOrder';
import { Certifications } from './pages/Certifications';
import { Rewards } from './pages/Rewards';
import { Wholesale } from './pages/Wholesale';
import { Wishlist } from './pages/Wishlist';
import { CategorySupplements } from './pages/CategorySupplements';
import { CategorySpices } from './pages/CategorySpices';
import { CategoryPickles } from './pages/CategoryPickles';
import { CategoryNuts } from './pages/CategoryNuts';
import { SubcategoryDetail } from './pages/SubcategoryDetail';
import { CurrencyProvider } from './context/CurrencyContext';
import { ToastProvider } from './context/ToastContext';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('barn_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('barn_wishlist');
    return saved ? JSON.parse(saved) : ['sidr-honey-1', 'shilajit-resin-1'];
  });

  useEffect(() => {
    localStorage.setItem('barn_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('barn_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const handleAddToCart = (product: Product, quantityToAdd: number = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      return [...prevCart, { product, quantity: quantityToAdd }];
    });
    setIsCartOpen(true);
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CurrencyProvider>
      <ToastProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#2B2E2C] selection:bg-[#C9962F] selection:text-white">
            
            {/* Navbar */}
            <Navbar
              cartCount={cartCount}
              wishlistCount={wishlistIds.length}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenAi={() => setIsAiOpen(true)}
            />

            {/* Main Route Content */}
            <main className="flex-1">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onToggleWishlist={handleToggleWishlist}
                      wishlistIds={wishlistIds}
                    />
                  }
                />
                <Route path="/about" element={<About />} />
                <Route
                  path="/shop"
                  element={
                    <Shop
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onToggleWishlist={handleToggleWishlist}
                      wishlistIds={wishlistIds}
                    />
                  }
                />
                <Route
                  path="/supplements"
                  element={
                    <CategorySupplements
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onToggleWishlist={handleToggleWishlist}
                      wishlistIds={wishlistIds}
                    />
                  }
                />
                <Route
                  path="/spices"
                  element={
                    <CategorySpices
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onToggleWishlist={handleToggleWishlist}
                      wishlistIds={wishlistIds}
                    />
                  }
                />
                <Route
                  path="/pickles"
                  element={
                    <CategoryPickles
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onToggleWishlist={handleToggleWishlist}
                      wishlistIds={wishlistIds}
                    />
                  }
                />
                <Route
                  path="/nuts"
                  element={
                    <CategoryNuts
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onToggleWishlist={handleToggleWishlist}
                      wishlistIds={wishlistIds}
                    />
                  }
                />
                <Route
                  path="/sub/:subId"
                  element={
                    <SubcategoryDetail
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                      onToggleWishlist={handleToggleWishlist}
                      wishlistIds={wishlistIds}
                    />
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <ProductDetail
                      onAddToCart={handleAddToCart}
                      onQuickView={(p) => setQuickViewProduct(p)}
                    />
                  }
                />
                <Route
                  path="/quiz"
                  element={
                    <Quiz
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                    />
                  }
                />
                <Route path="/track-order" element={<TrackOrder />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/wholesale" element={<Wholesale />} />
                <Route
                  path="/wishlist"
                  element={
                    <Wishlist
                      wishlistIds={wishlistIds}
                      products={PRODUCTS}
                      onToggleWishlist={handleToggleWishlist}
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                    />
                  }
                />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="*"
                  element={
                    <Home
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onQuickView={(p) => setQuickViewProduct(p)}
                    />
                  }
                />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Slide-over Cart Drawer */}
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cart={cart}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
              onOpenCheckout={() => setIsCheckoutOpen(true)}
            />

            {/* Checkout Modal */}
            <CheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
              cart={cart}
              onClearCart={handleClearCart}
            />

            {/* AI Remedy Assistant Modal */}
            <AiRemedyModal
              isOpen={isAiOpen}
              onClose={() => setIsAiOpen(false)}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onQuickView={(p) => setQuickViewProduct(p)}
            />

            {/* Live Search Modal */}
            <SearchModal
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onQuickView={(p) => setQuickViewProduct(p)}
            />

            {/* Quick View Modal */}
            <QuickViewModal
              product={quickViewProduct}
              onClose={() => setQuickViewProduct(null)}
              onAddToCart={handleAddToCart}
            />

          </div>
        </BrowserRouter>
      </ToastProvider>
    </CurrencyProvider>
  );
}
