import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SUBCATEGORIES_DATA } from '../data/subcategoriesData';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { LuxuryHeroCard } from '../components/LuxuryHeroCard';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Product } from '../types';
import { CheckCircle2, ArrowRight, ChevronRight, ChevronDown, Star, Sun, Moon, Sunrise, Truck, Package, RotateCcw, Zap, Heart, Target, TrendingUp, FlaskConical, ShieldCheck, Award, X, Phone, Mail } from 'lucide-react';
import { CategoryExtraSections } from '../components/CategoryExtraSections';
import { SubcategoryExtra9Sections } from '../components/SubcategoryExtra9Sections';

/* ── Scroll-triggered animation hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Animated Counter ── */
function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const progress = Math.min((Date.now() - start) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={counterRef}>{count}{suffix}</span>;
}

const DEFAULT_FALLBACK_IMG = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80';

/* ═══════ WallCurtains-style decorative image frame ═══════ */
/* Arch-topped image with offset dark border outline + beige background rectangle + small circle accent */
function DecorativeFrame({ src, alt, small, reverse }: { src: string; alt: string; small?: string; reverse?: boolean }) {
  return (
    <div className="relative" style={{ minHeight: '460px' }}>
      {/* Offset beige/tan background rectangle — shifted behind the image */}
      <div
        className="absolute"
        style={{
          width: '65%',
          height: '75%',
          backgroundColor: '#E8DCC8',
          borderRadius: '4px',
          bottom: reverse ? 'auto' : '0',
          top: reverse ? '0' : 'auto',
          left: reverse ? 'auto' : '0',
          right: reverse ? '0' : 'auto',
          zIndex: 0,
        }}
      />

      {/* Dark outline border — rounded-top arch shape, offset from image */}
      <div
        className="absolute"
        style={{
          width: '78%',
          height: '92%',
          border: '3px solid #3D5A45',
          borderRadius: '200px 200px 8px 8px',
          top: reverse ? '20px' : '-10px',
          left: reverse ? '-10px' : '50px',
          zIndex: 1,
        }}
      />

      {/* Main arch-topped image */}
      <div
        className="relative overflow-hidden"
        style={{
          width: '75%',
          height: '430px',
          borderRadius: '200px 200px 8px 8px',
          marginLeft: reverse ? '0' : '40px',
          marginRight: reverse ? '40px' : '0',
          marginTop: '15px',
          zIndex: 2,
          float: reverse ? 'right' : 'left',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            if (e.currentTarget.src !== DEFAULT_FALLBACK_IMG) {
              e.currentTarget.src = DEFAULT_FALLBACK_IMG;
            }
          }}
        />
      </div>

      {/* Small circle accent image — top corner */}
      {small && (
        <div
          className="absolute overflow-hidden"
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            border: '4px solid white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            top: '5px',
            right: reverse ? 'auto' : '0',
            left: reverse ? '0' : 'auto',
            zIndex: 3,
          }}
        >
          <img
            src={small}
            alt="accent"
            className="w-full h-full object-cover"
            onError={(e) => {
              if (e.currentTarget.src !== DEFAULT_FALLBACK_IMG) {
                e.currentTarget.src = DEFAULT_FALLBACK_IMG;
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ═══════ WallCurtains-style rectangular overlapping frame ═══════ */
/* Two overlapping rectangles with dark border outline */
function OverlappingFrame({ src, alt, src2 }: { src: string; alt: string; src2?: string }) {
  return (
    <div className="relative" style={{ minHeight: '440px' }}>
      {/* Dark border outline rectangle — offset */}
      <div
        className="absolute"
        style={{
          width: '70%',
          height: '70%',
          border: '3px solid #384E3C',
          borderRadius: '6px',
          bottom: '0',
          right: '0',
          zIndex: 0,
        }}
      />

      {/* Main image rectangle */}
      <div className="relative overflow-hidden" style={{ width: '80%', height: '380px', borderRadius: '6px', zIndex: 1 }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            if (e.currentTarget.src !== DEFAULT_FALLBACK_IMG) {
              e.currentTarget.src = DEFAULT_FALLBACK_IMG;
            }
          }}
        />
      </div>

      {/* Second overlapping image — bottom right */}
      {src2 && (
        <div
          className="absolute overflow-hidden"
          style={{
            width: '45%',
            height: '220px',
            borderRadius: '6px',
            border: '5px solid white',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            bottom: '0',
            right: '0',
            zIndex: 2,
          }}
        >
          <img
            src={src2}
            alt="overlay"
            className="w-full h-full object-cover"
            onError={(e) => {
              if (e.currentTarget.src !== DEFAULT_FALLBACK_IMG) {
                e.currentTarget.src = DEFAULT_FALLBACK_IMG;
              }
            }}
          />
        </div>
      )}
    </div>
  );
}


interface SubcategoryDetailProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlistIds?: string[];
}

export const SubcategoryDetail: React.FC<SubcategoryDetailProps> = ({
  onAddToCart, onQuickView, onToggleWishlist, wishlistIds = []
}) => {
  const { subId } = useParams<{ subId: string }>();
  const subData = SUBCATEGORIES_DATA[subId || 'shilajit'] || SUBCATEGORIES_DATA['shilajit'];
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const matchingProducts = PRODUCTS.filter((p) => {
    const idMatch = p.subcategoryId === subData.id;
    const titleMatch = p.subcategory?.toLowerCase().includes(subData.title.toLowerCase()) || false;
    const keyMatch = p.subcategory?.toLowerCase().includes(subData.id.toLowerCase()) || false;
    return idMatch || titleMatch || keyMatch;
  });

  const g = subData.galleryImages;

  const s1 = useInView(); const s2 = useInView(); const s3 = useInView();
  const s4 = useInView(); const s5 = useInView(); const s6 = useInView();
  const s7 = useInView(); const s8 = useInView(); const s9 = useInView();
  const s10 = useInView(); const s11 = useInView(); const s12 = useInView();

  const anim = (v: boolean, dir: 'up' | 'left' | 'right' = 'up') =>
    v ? `animate-fade-in-${dir}` : 'opacity-0';

  return (
    <div className="bg-[#FBFCFC] min-h-screen overflow-x-hidden" style={{ fontFamily: "'DM Sans', 'Poppins', system-ui, sans-serif" }}>

      {/* ── Lightbox ── */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightboxImg(null)} style={{ animation: 'scaleIn 0.3s ease-out' }}>
          <button onClick={() => setLightboxImg(null)} className="absolute top-6 right-6 text-white/80 hover:text-white z-10 transition-colors"><X className="w-8 h-8" /></button>
          <img src={lightboxImg} alt="Gallery" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}

      {/* ═══════════ BREADCRUMBS ═══════════ */}
      <div className="bg-[#FBFCFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-5 py-3">
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <Link to="/" className="hover:text-[#384E3C] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to={`/${subData.categoryKey}`} className="hover:text-[#384E3C] transition-colors">{subData.categoryTitle}</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="font-semibold" style={{ color: '#2A2A2A' }}>{subData.title}</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          1. HERO — Slate Green & Subtle Dark Slate Blue (#483D8B) Ambient Glow
      ════════════════════════════════════════════════════════════ */}
      <section ref={s1.ref} className="relative overflow-hidden bg-gradient-to-r from-[#1B271E] via-[#253229] via-[#292A44]/80 to-[#152017] text-[#FBFCFC] py-16 lg:py-24">
        {/* Ambient Glow Spots */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FDD229]/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#483D8B]/35 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left — Content & Copy */}
            <div className={`lg:col-span-7 space-y-6 text-left ${anim(s1.visible, 'left')}`}>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#FDD229]/40 text-[#FDD229] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <BarnRoofMotif color="#FDD229" height={12} />
                <span>{subData.categoryTitle} • Pure Terroir</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12]">
                {subData.title} <span className="text-[#FDD229] italic font-normal">Harvest.</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-xl">
                {subData.subtitle}
              </p>

              {/* Specs Pills — High Contrast Crisp Legibility */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  { label: 'Species', val: subData.botanicalName },
                  { label: 'Origin', val: subData.origin },
                  { label: 'Elevation', val: subData.altitude },
                  { label: 'Purity', val: subData.purityGrade }
                ].map((spec, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-lg bg-white/15 border border-white/25 text-xs text-white font-medium backdrop-blur-xs shadow-xs">
                    <strong className="text-[#FDD229] font-bold mr-1.5">{spec.label}:</strong> {spec.val}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-3">
                <a href="#catalog">
                  <button className="btn-premium-gold group">
                    Shop {subData.title} <ArrowRight className="w-3.5 h-3.5 inline ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </a>
                <a href="#gallery">
                  <button className="btn-premium-outline-white">
                    View Gallery
                  </button>
                </a>
              </div>

              {/* Trust Signals Bar */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-3 text-left max-w-lg">
                <div>
                  <span className="block font-serif text-base sm:text-xl font-bold text-[#FDD229]">100% Raw</span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">PCSIR Tested</span>
                </div>
                <div>
                  <span className="block font-serif text-base sm:text-xl font-bold text-white">{subData.altitude}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">Mountain Grade</span>
                </div>
                <div>
                  <span className="block font-serif text-base sm:text-xl font-bold text-[#FDD229]">Zero Additives</span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">Pure Botanical</span>
                </div>
              </div>
            </div>

            {/* Right Side — Luxury Floating Product Card in Front of Content */}
            <div className={`lg:col-span-5 ${anim(s1.visible, 'right')}`}>
              <LuxuryHeroCard
                image={matchingProducts[0]?.image || g[0]?.url || subData.heroImage}
                title={matchingProducts[0]?.name || subData.title}
                subtitle={matchingProducts[0]?.subtitle || subData.subtitle}
                price={matchingProducts[0]?.price || 34.00}
                originalPrice={matchingProducts[0]?.originalPrice}
                volumeOrWeight={matchingProducts[0]?.volumeOrWeight || '500G'}
                productId={matchingProducts[0]?.id || subData.id}
                onAddToCart={() => matchingProducts[0] && onAddToCart(matchingProducts[0])}
                onToggleWishlist={() => matchingProducts[0] && onToggleWishlist(matchingProducts[0].id)}
                isWishlisted={matchingProducts[0] ? wishlistIds.includes(matchingProducts[0].id) : false}
                badge={matchingProducts[0]?.badge || 'PCSIR Certified'}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ 2. TRUST BADGES ═══════════ */}
      <section style={{ backgroundColor: '#384E3C' }}>
        <div className="max-w-[1240px] mx-auto px-5 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Truck, title: 'Free Delivery', desc: 'On orders above PKR 3,000' },
              { icon: ShieldCheck, title: 'Lab Certified', desc: 'PCSIR tested & verified' },
              { icon: RotateCcw, title: 'Easy Returns', desc: '7-day return guarantee' },
              { icon: Package, title: 'Premium Glass', desc: 'Biophotonic protection' }
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <Icon className="w-6 h-6 text-[#FDD229]" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[1.5px] text-white">{title}</span>
                <span className="text-xs font-medium text-white/80">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. SECTION — Text Left + Overlapping Frame Right ═══════════ */}
      <section ref={s2.ref} className="relative overflow-hidden bg-[#FAF8F4] border-y border-[#3D5A45]/10">
        {/* Background Mountain Harvest Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600" alt="" className="w-full h-full object-cover filter contrast-125" />
        </div>
        {/* Watermark Text */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[120px] lg:text-[180px] font-serif font-bold text-[#C9962F]/[0.05] select-none pointer-events-none uppercase tracking-widest leading-none hidden lg:block">
          HARVEST
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`space-y-5 ${anim(s2.visible, 'left')}`}>
              <span className="text-[11px] uppercase font-bold tracking-[3px]" style={{ color: '#C9962F' }}>100% Organic Sourcing</span>
              <h2 className="text-3xl sm:text-[38px] font-bold leading-[1.15]" style={{ color: '#2A2A2A', fontFamily: "'Poppins', sans-serif" }}>
                Pure Mountain-Grade Harvest From {subData.origin}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#334155]">{subData.extendedHistory}</p>
              <ul className="space-y-3.5 pt-2">
                {[
                  `PCSIR Lab Certified for Authenticity & Safety`,
                  `Zero Synthetic Solvents, Preservatives, or Fillers`,
                  `Active Bio-Compounds: ${subData.activeCompounds}`
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base font-semibold text-[#1E293B]">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#3D5A45]" /> <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#catalog">
                <button className="btn-premium-green mt-4 group">
                  Discover More <ArrowRight className="w-3.5 h-3.5 inline ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </a>
            </div>
            <div className={`${anim(s2.visible, 'right')}`}>
              <OverlappingFrame
                src={g[1]?.url || subData.heroImage}
                alt={subData.title}
                src2={g[2]?.url}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 4. GALLERY GRID ═══════════ */}
      <section ref={s3.ref} id="gallery" style={{ backgroundColor: '#F7F5F0' }}>
        <div className="max-w-[1240px] mx-auto px-5 py-20 lg:py-28">
          <div className={`text-center mb-14 ${anim(s3.visible)}`}>
            <span className="text-[11px] uppercase font-bold tracking-[3px] block mb-3" style={{ color: '#C9962F' }}>{subData.galleryTitle}</span>
            <h2 className="text-3xl sm:text-[38px] font-bold" style={{ color: '#2A2A2A', fontFamily: "'Poppins', sans-serif" }}>Our Premium Collection</h2>
            <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: '#999' }}>Click any image to view full size.</p>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-5 ${anim(s3.visible)}`}>
            {g.map((img, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden relative bg-white"
                style={{ borderRadius: '6px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                onClick={() => setLightboxImg(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-60 sm:h-68 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    if (e.currentTarget.src !== DEFAULT_FALLBACK_IMG) {
                      e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-bold text-white">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. SECTION — Arch Frame Left + Text Right (REVERSED) ═══════════ */}
      <section ref={s4.ref} className="relative overflow-hidden bg-white border-y border-[#3D5A45]/10">
        {/* Background Landscape Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600" alt="" className="w-full h-full object-cover filter contrast-125" />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[140px] font-serif font-bold text-[#3D5A45]/[0.05] select-none pointer-events-none uppercase tracking-widest hidden lg:block">
          HERITAGE
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className={`order-2 lg:order-1 ${anim(s4.visible, 'left')}`}>
              <DecorativeFrame
                src={g[2]?.url || subData.heroImage}
                alt={subData.title}
                small={g[3]?.url}
                reverse
              />
            </div>
            <div className={`order-1 lg:order-2 space-y-5 ${anim(s4.visible, 'right')}`}>
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#FDD229]">Heritage & Terroir</span>
              <h2 className="text-3xl sm:text-[38px] font-bold leading-[1.15] text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Centuries-Old Botanical Wisdom, Modern Purity
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#334155] font-normal">
                Every harvest is gathered respecting local biodiversity, supporting small mountain farmers, and ensuring zero environmental depletion. Our commitment to sustainability means future generations will continue to benefit from these extraordinary botanical treasures.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-3">
                {subData.nutritionalHighlights.map((stat, i) => (
                  <div key={i} className="border-l-[3px] border-[#FDD229] pl-4 py-1.5">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#64748B] block">{stat.label}</span>
                    <strong className="text-lg font-bold text-[#1E293B] block mt-0.5" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 6. STATS COUNTER BAR ═══════════ */}
      <section ref={s5.ref} style={{ backgroundColor: '#2A2A2A' }}>
        <div className="max-w-[1240px] mx-auto px-5 py-16 lg:py-20">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${anim(s5.visible)}`}>
            {[
              { num: 15000, suffix: '+', label: 'Happy Customers' },
              { num: 100, suffix: '%', label: 'Organic Certified' },
              { num: 50, suffix: '+', label: 'Lab Tests Passed' },
              { num: 4, suffix: '.9★', label: 'Average Rating' }
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-bold text-[#FDD229]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {s5.visible ? <AnimatedCounter end={s.num} suffix={s.suffix} /> : `0${s.suffix}`}
                </div>
                <span className="text-[11px] mt-2 block uppercase tracking-[2px] font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. BENEFITS — Grid Cards ═══════════ */}
      <section ref={s6.ref} className="relative overflow-hidden bg-gradient-to-b from-[#FBFCFC] to-[#FBFCFC]">
        {/* Background Botanical Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply">
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" alt="" className="w-full h-full object-cover filter contrast-125" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 py-20 lg:py-28">
          <div className={`text-center mb-14 ${anim(s6.visible)}`}>
            <span className="text-[11px] uppercase font-bold tracking-[3px] block mb-3 text-[#FDD229]">Health Benefits</span>
            <h2 className="text-3xl sm:text-[38px] font-bold" style={{ color: '#2A2A2A', fontFamily: "'Poppins', sans-serif" }}>Why Choose Barn.pk {subData.title}?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200" style={{ borderRadius: '6px', overflow: 'hidden' }}>
            {subData.keyBenefits.map((benefit, idx) => {
              const icons = [Zap, Heart, Target, FlaskConical, TrendingUp, ShieldCheck];
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className={`p-8 transition-all duration-300 group hover:bg-[#FBFCFC] ${anim(s6.visible)}`}
                  style={{
                    borderRight: (idx % 3 !== 2) ? '1px solid #E8E4DC' : 'none',
                    borderBottom: idx < 3 ? '1px solid #E8E4DC' : 'none',
                    animationDelay: `${idx * 80}ms`,
                  }}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-5 bg-[#384E3C] rounded-md">
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>{benefit.title}</h3>
                  <p className="text-base leading-relaxed text-[#334155]">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. CTA — Dark Banner with Bg Image ═══════════ */}
      <section className="relative overflow-hidden bg-[#2A2A2A]">
        <div className="absolute inset-0 opacity-[0.07]"><img src={g[3]?.url || subData.heroImage} alt="" className="w-full h-full object-cover" /></div>
        <div className="relative max-w-[800px] mx-auto px-5 py-20 lg:py-28 text-center">
          <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Ironclad Purity Promise</h2>
          <p className="text-sm leading-[1.85] mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Every batch undergoes rigorous independent laboratory testing at PCSIR-certified facilities. We test for heavy metals, microbial contamination, pesticide residues, and bioactive compound potency.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#catalog">
              <button className="btn-premium-gold group">
                Shop {subData.title} <ArrowRight className="w-3.5 h-3.5 inline ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </a>
            <button className="btn-premium-outline-white">
              View Lab Reports
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ 9. COMPARISON TABLE ═══════════ */}
      {subData.comparisonData && subData.comparisonData.length > 0 && (
        <section ref={s7.ref} className="bg-[#FBFCFC]">
          <div className={`max-w-[900px] mx-auto px-5 py-20 lg:py-28 ${anim(s7.visible)}`}>
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase font-bold tracking-[3px] block mb-3 text-[#FDD229]">Quality Transparency</span>
              <h2 className="text-3xl sm:text-[38px] font-bold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>Barn.pk vs Commercial Brands</h2>
            </div>
            <div className="overflow-hidden bg-[#FBFCFC]" style={{ borderRadius: '6px', border: '1px solid #E8E4DC' }}>
              <div className="grid grid-cols-12 text-sm sm:text-base font-bold uppercase tracking-[1.5px] p-5 bg-[#384E3C] text-white">
                <div className="col-span-4">Quality Metric</div>
                <div className="col-span-4 text-[#FDD229]">Barn.pk Standard</div>
                <div className="col-span-4 text-white/80">Commercial</div>
              </div>
              {subData.comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center border-b border-gray-100 last:border-0 text-base hover:bg-[#FBFCFC] transition-colors" style={{ backgroundColor: idx % 2 === 0 ? '#FBFCFC' : '#F7F9F8' }}>
                  <div className="col-span-4 font-bold text-[#1E293B]">{row.feature}</div>
                  <div className="col-span-4 flex items-center gap-2 font-semibold text-[#384E3C]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#384E3C]" /> <span>{row.barnStandard}</span>
                  </div>
                  <div className="col-span-4 italic text-[#475569] font-medium">{row.commercialBrand}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ 10. HOW TO USE — Text Left + Overlapping Frame Right ═══════════ */}
      <section ref={s8.ref} className="bg-[#FBFCFC]">
        <div className="max-w-[1240px] mx-auto px-5 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`space-y-6 ${anim(s8.visible, 'left')}`}>
              <span className="text-[11px] uppercase font-bold tracking-[3px] text-[#FDD229]">Step-by-Step Guide</span>
              <h2 className="text-3xl sm:text-[38px] font-bold leading-[1.15]" style={{ color: '#2A2A2A', fontFamily: "'Poppins', sans-serif" }}>How to Use {subData.title}</h2>
              <div className="space-y-0">
                {subData.howToUseSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-5 items-start group py-5" style={{ borderBottom: '1px solid #F0EDE7' }}>
                    <div className="w-11 h-11 flex items-center justify-center text-base font-bold text-white shrink-0 bg-[#384E3C] rounded-md" style={{ fontFamily: "'Poppins', sans-serif" }}>{step.step}</div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-[#1E293B]">{step.title}</h4>
                      <p className="text-base leading-relaxed text-[#334155]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${anim(s8.visible, 'right')}`}>
              <OverlappingFrame
                src={g[3]?.url || g[0]?.url || subData.heroImage}
                alt="Usage"
                src2={g[4]?.url}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 11. PRODUCT CATALOG ═══════════ */}
      <section ref={s9.ref} id="catalog" className="bg-[#FBFCFC]">
        <div className={`max-w-[1240px] mx-auto px-5 py-20 lg:py-28 ${anim(s9.visible)}`}>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#384E3C] text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 shadow-md border border-white/20">
              <ShieldCheck className="w-4 h-4 text-[#FDD229]" />
              <span>PCSIR Lab Certified & Verified Products</span>
            </div>
            <span className="text-[11px] uppercase font-bold tracking-[3px] block mb-3 text-[#FDD229]">Product Catalog</span>
            <h2 className="text-3xl sm:text-[38px] font-bold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>{subData.title} Collection</h2>
            <p className="text-base sm:text-lg font-semibold text-[#1E293B] mt-3 flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-[#384E3C]" />
              <span>All products certified for 0.00% Heavy Metals & 100% Organic Purity</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {matchingProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onQuickView={onQuickView} onToggleWishlist={onToggleWishlist} isWishlisted={wishlistIds.includes(product.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 12. DAILY SCHEDULE + RECIPE — Two Column ═══════════ */}
      <section ref={s10.ref} className="relative overflow-hidden bg-gradient-to-b from-[#FBFCFC] via-white to-[#FBFCFC] border-t border-[#384E3C]/10">
        {/* Background Kitchen Recipe Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply">
          <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=1600" alt="" className="w-full h-full object-cover filter contrast-125" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Daily Schedule */}
            <div className={`space-y-6 ${anim(s10.visible, 'left')}`}>
              <span className="text-[11px] uppercase font-bold tracking-[3px] text-[#FDD229]">Daily Protocol</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>Optimal Usage Schedule</h2>
              <div className="space-y-4">
                {[
                  { icon: Sunrise, title: 'Morning Protocol', desc: 'Take on an empty stomach 20 minutes before breakfast.', color: '#FDD229' },
                  { icon: Sun, title: 'Afternoon Boost', desc: 'Add to smoothie or herbal tea for steady energy.', color: '#384E3C' },
                  { icon: Moon, title: 'Evening Recovery', desc: 'Mix into warm golden milk for deep restorative sleep.', color: '#2A2A2A' }
                ].map(({ icon: Icon, title, desc, color }, i) => (
                  <div key={i} className="flex gap-4 items-start p-5 transition-all duration-300 hover:bg-[#FBFCFC] group" style={{ border: '1px solid #F0EDE7', borderRadius: '6px' }}>
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-md" style={{ backgroundColor: color }}>
                      <Icon className={`w-4.5 h-4.5 ${color === '#FDD229' ? 'text-black' : 'text-white'}`} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-1 text-[#1E293B]">{title}</h4>
                      <p className="text-base leading-relaxed text-[#334155]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recipe */}
            {subData.recipes && subData.recipes.length > 0 && (
              <div className={`space-y-6 ${anim(s10.visible, 'right')}`}>
                <span className="text-[11px] uppercase font-bold tracking-[3px] text-[#FDD229]">Traditional Recipe</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>{subData.recipes[0].title}</h2>
                <div className="p-6 bg-[#FBFCFC]" style={{ border: '1px solid #F0EDE7', borderRadius: '6px' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[2px] mb-4 text-[#FDD229]">Ingredients</h4>
                  <ul className="space-y-2.5 mb-6">
                    {subData.recipes[0].ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-base font-medium text-[#1E293B]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#384E3C]" /> <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-5 border-t border-[#F0EDE7]">
                    <h4 className="text-[11px] font-bold uppercase tracking-[2px] mb-3 text-[#FDD229]">Preparation</h4>
                    <p className="text-base leading-relaxed text-[#334155]">{subData.recipes[0].instructions}</p>
                  </div>
                </div>
                <div className="overflow-hidden" style={{ borderRadius: '6px' }}>
                  <img
                    src={g[4]?.url || g[0]?.url || subData.heroImage}
                    alt="Recipe"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      if (e.currentTarget.src !== DEFAULT_FALLBACK_IMG) {
                        e.currentTarget.src = DEFAULT_FALLBACK_IMG;
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ 9 NEW BRAND TRUST SECTIONS ═══════════ */}
      <SubcategoryExtra9Sections subData={subData} />

      {/* ═══════════ 13. CUSTOMER REVIEWS ═══════════ */}
      <section ref={s11.ref} className="bg-[#FBFCFC]">
        <div className="max-w-[1240px] mx-auto px-5 py-20 lg:py-28">
          <div className={`text-center mb-14 ${anim(s11.visible)}`}>
            <span className="text-[11px] uppercase font-bold tracking-[3px] block mb-3 text-[#FDD229]">Customer Testimonials</span>
            <h2 className="text-3xl sm:text-[38px] font-bold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subData.reviews.map((rev, idx) => (
              <div key={idx} className={`bg-[#FBFCFC] p-7 space-y-4 transition-all duration-300 hover:shadow-md ${anim(s11.visible)}`} style={{ borderRadius: '6px', border: '1px solid #E8E4DC', animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">{[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FDD229] fill-[#FDD229]" />)}</div>
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-white px-2.5 py-1 bg-[#384E3C] rounded-xs">Verified</span>
                </div>
                <p className="text-base italic leading-relaxed text-[#334155]">"{rev.comment}"</p>
                <div className="pt-3 text-sm flex justify-between border-t border-[#F0EDE7]">
                  <span className="font-bold text-[#1E293B]">{rev.author}</span>
                  <span className="text-[#64748B] font-medium">{rev.city} • {rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 14. FAQ ACCORDION ═══════════ */}
      <section ref={s12.ref} className="bg-[#FBFCFC]">
        <div className={`max-w-[800px] mx-auto px-5 py-20 lg:py-28 ${anim(s12.visible)}`}>
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase font-bold tracking-[3px] block mb-3 text-[#FDD229]">Got Questions?</span>
            <h2 className="text-3xl sm:text-[38px] font-bold text-[#1E293B]" style={{ fontFamily: "'Poppins', sans-serif" }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-0 overflow-hidden" style={{ borderRadius: '6px', border: '1px solid #E8E4DC' }}>
            {subData.faqs.map((f, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} style={{ borderBottom: i < subData.faqs.length - 1 ? '1px solid #E8E4DC' : 'none', backgroundColor: isOpen ? '#FBFCFC' : 'white' }}>
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full px-6 py-5 text-left text-base sm:text-lg font-bold text-[#1E293B] flex items-center justify-between gap-4 hover:bg-[#FBFCFC] transition-colors"
                  >
                    <span>{f.question}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-[#FDD229]`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-base leading-relaxed text-[#334155] animate-fade-in-up">
                      {f.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 15. BOTTOM CTA ═══════════ */}
      <section className="relative overflow-hidden bg-[#384E3C]">
        <div className="absolute inset-0 opacity-[0.06]"><img src={g[0]?.url || subData.heroImage} alt="" className="w-full h-full object-cover" /></div>
        <div className="max-w-[800px] mx-auto px-5 py-20 lg:py-28 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>Ready to Experience Pure {subData.title}?</h2>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.50)' }}>
            100% organic, PCSIR lab verified, sourced directly from {subData.origin}. Free delivery on orders above PKR 3,000.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#catalog">
              <button className="btn-premium-gold group">
                Shop {subData.title} <ArrowRight className="w-3.5 h-3.5 inline ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </a>
            <Link to={`/${subData.categoryKey}`}>
              <button className="btn-premium-outline-white">
                Browse All {subData.categoryTitle}
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 pt-10 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +92-300-1234567</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> info@barn.pk</span>
          </div>
        </div>
      </section>

    </div>
  );
};
