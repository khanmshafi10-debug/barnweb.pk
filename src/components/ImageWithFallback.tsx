import React, { useState, useEffect } from 'react';
import { BarnRoofMotif } from './BarnRoofMotif';
import { ShieldCheck, Package } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  category?: string;
  aspectRatioClass?: string;
}

// Ultra-reliable Pexels & Unsplash Studio Product Photography CDN Links
const RELIABLE_STUDIO_IMAGES: Record<string, string[]> = {
  grown: [
    'https://images.pexels.com/photos/1618776/pexels-photo-1618776.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1587049352847-4a222e784d38?w=800&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/4199094/pexels-photo-4199094.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  restored: [
    'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  oils: [
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1608248597261-83325805435f?w=800&auto=format&fit=crop&q=80',
    'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  skincare: [
    'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1567928269937-ae146e45b428?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80'
  ],
  teas: [
    'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80'
  ],
  bundles: [
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80'
  ]
};

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  category = 'grown',
  aspectRatioClass = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentSrc(src);
    setFallbackIndex(0);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    const list = RELIABLE_STUDIO_IMAGES[category] || RELIABLE_STUDIO_IMAGES.grown;
    if (fallbackIndex < list.length) {
      const nextSrc = list[fallbackIndex];
      setFallbackIndex((prev) => prev + 1);
      setCurrentSrc(nextSrc);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  if (hasError || !currentSrc) {
    return (
      <div
        className={`w-full h-full min-h-[200px] bg-white text-[#2B2E2C] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden select-none border border-[#4A5D50]/15 ${aspectRatioClass} ${className}`}
      >
        <div className="w-16 h-16 rounded-2xl bg-[#4A5D50]/10 flex items-center justify-center text-[#4A5D50] mb-2 shadow-xs">
          <Package className="w-8 h-8 text-[#C9962F]" />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#4A5D50] block">
          Chiltan Pure Organic Jar
        </span>
        <p className="font-serif text-xs font-bold text-[#2B2E2C] max-w-[180px] leading-tight mt-1">
          {fallbackTitle || 'Pure Organic Remedy'}
        </p>
        <div className="mt-2">
          <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#4A5D50] text-white">
            <ShieldCheck className="w-3 h-3 text-[#C9962F]" /> 100% Lab Verified
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full bg-white ${aspectRatioClass}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#F4F1EA] animate-pulse flex items-center justify-center z-10">
          <BarnRoofMotif color="#4A5D50" height={24} className="opacity-30 animate-bounce" />
        </div>
      )}

      <img
        src={currentSrc}
        alt={alt || 'Chiltan Pure Product'}
        className={`w-full h-full object-cover transition-opacity duration-300 ${className}`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        {...props}
      />
    </div>
  );
};
