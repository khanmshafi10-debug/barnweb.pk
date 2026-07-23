import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, ShoppingBag, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from '../context/ToastContext';
import { BarnRoofMotif } from './BarnRoofMotif';

interface AiRemedyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  recommendedProducts?: Product[];
}

export const AiRemedyModal: React.FC<AiRemedyModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onQuickView
}) => {
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Assalam-o-Alaikum! I am your **Barn & Chiltan AI Wellness Advisor**. Tell me about your health goals, skin concerns, hair fallout, or energy needs, and I will recommend our 100% lab-tested organic remedies.',
      recommendedProducts: PRODUCTS.filter((p) => p.isBestseller).slice(0, 2)
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    '⚡ Best natural remedy for low energy & fatigue?',
    '🌿 How to stop hair fall & dandruff naturally?',
    '🍯 Difference between Sidr Honey & Wildflower Honey?',
    '✨ Natural routine for glowing, acne-free skin?'
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input.trim();
    if (!textToSend || loading) return;

    const userMsgId = Date.now().toString();
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: textToSend
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setLoading(true);

    try {
      // Analyze text to find matching products
      const queryLower = textToSend.toLowerCase();
      let matchedProducts: Product[] = [];
      let replyText = '';

      if (queryLower.includes('hair') || queryLower.includes('dandruff') || queryLower.includes('scalp') || queryLower.includes('growth')) {
        matchedProducts = PRODUCTS.filter((p) => p.category === 'oils' || p.concerns?.includes('Hair Fall'));
        replyText = 'For hair fall, dandruff, and scalp restoration, we recommend our **Cold-Pressed Rosemary & Biotin Hair Serum** and **Pure Organic Castor Oil**. Regular scalp massaging with these cold-pressed oils stimulates blood flow and activates dormant follicles.';
      } else if (queryLower.includes('energy') || queryLower.includes('fatigue') || queryLower.includes('stamina') || queryLower.includes('shilajit')) {
        matchedProducts = PRODUCTS.filter((p) => p.subcategory === 'Shilajit' || p.id === 'sidr-honey-1' || p.id === 'bundle-royal-duo');
        replyText = 'For cellular stamina and fighting fatigue, **Pure Himalayan Shilajit Resin** combined with **Raw Sidr Honey** is our premier gold-standard protocol. It supplies over 85+ trace minerals and fulvic acid for natural morning vigor.';
      } else if (queryLower.includes('skin') || queryLower.includes('glow') || queryLower.includes('acne') || queryLower.includes('saffron') || queryLower.includes('spot')) {
        matchedProducts = PRODUCTS.filter((p) => p.category === 'skincare');
        replyText = 'For radiant, clear skin, try our **Organic Saffron & Herbal Ubtan Mask** paired with **Pure Damask Rose Water Hydrosol**. Rose water balances skin pH while saffron and Multani Mitti gently draw out impurities.';
      } else if (queryLower.includes('honey') || queryLower.includes('cough') || queryLower.includes('throat') || queryLower.includes('immunity')) {
        matchedProducts = PRODUCTS.filter((p) => p.subcategory === 'Honey' || p.id === 'acv-mother-1');
        replyText = 'Our **Raw Organic Sidr Honey** is wild-harvested from Karak mountain orchards. It is rich in bio-enzymes and natural antibacterial compounds ideal for immune defense and throat comfort.';
      } else {
        matchedProducts = PRODUCTS.filter((p) => p.isBestseller).slice(0, 3);
        replyText = `Thank you for asking! For general wellness and vitality, our top recommended farm-rooted remedies are ${matchedProducts.map(p => p.name).join(', ')}. All products are 100% PCSIR lab-certified for pure unadulterated quality.`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        recommendedProducts: matchedProducts.slice(0, 3)
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Our pure Sidr Honey and Himalayan Shilajit are our top recommendations for daily vitality and immune health.',
          recommendedProducts: PRODUCTS.slice(0, 2)
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-[#FAF8F4] w-full sm:max-w-xl h-[85vh] sm:h-[650px] sm:rounded-2xl shadow-2xl flex flex-col border border-[#4A5D50]/20 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#4A5D50] text-[#FAF8F4] p-4 px-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C9962F] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base font-bold leading-tight">Barn & Chiltan AI Advisor</h3>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[#FAF8F4]">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-[#FAF8F4]/80">Ask about hair loss, energy, skin remedies & honey</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#FAF8F4]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-[#4A5D50] text-white flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                  <BarnRoofMotif color="#C9962F" height={12} />
                </div>
              )}

              <div className={`max-w-[85%] space-y-3 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#4A5D50] text-white rounded-tr-none shadow-xs'
                      : 'bg-white text-[#2B2E2C] border border-[#4A5D50]/15 rounded-tl-none shadow-2xs'
                  }`}
                >
                  <p className="whitespace-pre-line font-sans">{msg.text}</p>
                </div>

                {/* Inline Recommended Product Cards */}
                {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] uppercase font-bold text-[#C9962F] tracking-wider block">
                      Suggested Organic Remedies:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {msg.recommendedProducts.map((product) => (
                        <div
                          key={product.id}
                          className="bg-white p-2.5 rounded-xl border border-[#4A5D50]/15 flex items-center gap-3 hover:border-[#C9962F] transition-all shadow-2xs group"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover shrink-0 border border-black/5"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-serif text-xs font-bold text-[#2B2E2C] truncate group-hover:text-[#4A5D50]">
                              {product.name}
                            </h5>
                            <span className="text-[11px] font-bold text-[#C9962F] block">
                              {formatPrice(product.price)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => {
                                onAddToCart(product);
                                showToast('Added to Cart!', `${product.name} added.`);
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-[#4A5D50] text-white text-[11px] font-bold hover:bg-[#C9962F] transition-colors flex items-center gap-1 shadow-2xs"
                            >
                              <ShoppingBag className="w-3 h-3" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#C9962F] text-white flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-xs text-[#2B2E2C]/60 italic">
              <div className="w-8 h-8 rounded-full bg-[#4A5D50] text-white flex items-center justify-center animate-pulse">
                <Sparkles className="w-4 h-4 text-[#C9962F]" />
              </div>
              <span>Formulating remedy advice...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="p-2 px-4 bg-white border-t border-[#4A5D50]/10 overflow-x-auto flex gap-2 no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] font-medium whitespace-nowrap px-3 py-1 rounded-full bg-[#FAF8F4] border border-[#4A5D50]/15 hover:bg-[#4A5D50]/10 hover:border-[#4A5D50] transition-colors text-[#2B2E2C]"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <div className="p-3 bg-white border-t border-[#4A5D50]/15 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about skin, hair, energy, or remedies..."
            className="flex-1 bg-[#FAF8F4] px-4 py-2.5 rounded-xl border border-[#4A5D50]/20 text-xs focus:outline-none focus:border-[#4A5D50] focus:ring-1 focus:ring-[#4A5D50]"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-xl bg-[#4A5D50] text-white hover:bg-[#C9962F] disabled:opacity-50 transition-colors shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
