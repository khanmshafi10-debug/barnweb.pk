import React, { useState, useEffect, useRef } from 'react';
import { BarnRoofMotif } from './BarnRoofMotif';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  category?: 'grown' | 'restored' | 'oils' | 'skincare' | 'teas' | 'bundles' | string;
  aspectRatioClass?: string;
}

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
  const [attemptedSecondary, setAttemptedSecondary] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  // Sync src if prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setAttemptedSecondary(false);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  // Check if image is already loaded from cache immediately on mount or src update
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoading(false);
    }
  }, [currentSrc]);

  // Determine robust secondary image fallback based on title / category
  const getSecondaryFallback = () => {
    const titleLower = (fallbackTitle || alt || '').toLowerCase();
    
    if (titleLower.includes('honey') || titleLower.includes('sidr')) {
      return 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('shilajit') || titleLower.includes('resin')) {
      return 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('oil') || titleLower.includes('rosemary') || titleLower.includes('neem')) {
      return 'https://images.unsplash.com/photo-1608248597261-83325805435f?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('mask') || titleLower.includes('saffron') || titleLower.includes('skincare') || titleLower.includes('ubtan')) {
      return 'https://images.unsplash.com/photo-1567928269937-ae146e45b428?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('rose') || titleLower.includes('mist')) {
      return 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('ghee') || titleLower.includes('butter') || titleLower.includes('fat')) {
      return 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('tea') || titleLower.includes('infusion') || titleLower.includes('chamomile')) {
      return 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('ashwagandha') || titleLower.includes('tonic') || titleLower.includes('elixir')) {
      return 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('moringa') || titleLower.includes('green') || titleLower.includes('powder')) {
      return 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('vinegar') || titleLower.includes('acv') || titleLower.includes('cider')) {
      return 'https://images.unsplash.com/photo-1590005354167-6da97870c757?auto=format&fit=crop&q=80&w=800';
    }
    if (titleLower.includes('bundle') || titleLower.includes('box') || titleLower.includes('duo') || titleLower.includes('kit')) {
      return 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800';
    }

    // Category fallbacks
    if (category === 'restored' || category === 'restored-line') {
      return 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800';
    }
    if (category === 'oils') {
      return 'https://images.unsplash.com/photo-1608248597261-83325805435f?auto=format&fit=crop&q=80&w=800';
    }
    if (category === 'skincare') {
      return 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800';
    }

    return 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=800';
  };

  const handleError = () => {
    if (!attemptedSecondary) {
      setAttemptedSecondary(true);
      const secondary = getSecondaryFallback();
      setCurrentSrc(secondary);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const isRestored = category === 'restored' || category === 'restored-line';
  const bgColor = isRestored ? 'bg-[#313E4D]' : 'bg-[#37473C]';
  const accentColor = isRestored ? '#B08D57' : '#C9962F';

  if (hasError || !currentSrc) {
    return (
      <div
        className={`w-full h-full min-h-[180px] ${bgColor} text-[#FAF8F4] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden select-none border border-white/10 ${aspectRatioClass} ${className}`}
      >
        {/* Subtle Background Roof Pattern */}
        <div className="absolute inset-0 opacity-15 flex items-center justify-center pointer-events-none">
          <BarnRoofMotif color="#ffffff" height={200} />
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-2.5">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-md">
            <BarnRoofMotif color={accentColor} height={22} />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FAF8F4]/80">
            Barn.pk Harvest Certificate
          </span>
          <p className="font-serif text-base font-bold text-white max-w-[220px] leading-tight">
            {fallbackTitle || alt || 'Pure Natural Product'}
          </p>
          <div className="pt-1">
            <span className="inline-block text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#C9962F] text-white shadow-xs">
              100% Organic & Lab Tested
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full ${aspectRatioClass}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#EFECE6] animate-pulse flex items-center justify-center z-10">
          <BarnRoofMotif color="#4A5D50" height={24} className="opacity-30 animate-bounce" />
        </div>
      )}

      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt || 'Barn.pk Harvest'}
        className={`w-full h-full object-cover transition-opacity duration-300 ${className}`}
        referrerPolicy="no-referrer"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};
