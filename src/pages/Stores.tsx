import React, { useState } from 'react';
import { STORES } from '../data/stores';
import { StoreLocation } from '../types';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Button } from '../components/Button';
import { MapPin, Phone, Clock, Sparkles, CheckCircle2, Navigation, Send } from 'lucide-react';

export const Stores: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedStore, setSelectedStore] = useState<StoreLocation>(STORES[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const cities = ['all', ...Array.from(new Set(STORES.map((s) => s.city)))];

  const filteredStores = STORES.filter((s) =>
    selectedCity === 'all' ? true : s.city === selectedCity
  );

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Physical Outlets & Experience Lounges
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Find a Barn.pk Experience Store
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F4]/80 max-w-2xl mx-auto leading-relaxed">
            Visit our physical locations across Pakistan to taste raw honey harvests, experience custom cold-pressing, and receive personalized apothecary consultations.
          </p>
        </div>
      </section>

      {/* Main Store Locator Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* City Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 border-b border-[#4A5D50]/15">
          <span className="text-xs font-bold text-[#2B2E2C]/60 uppercase tracking-wider mr-2">City:</span>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCity === city
                  ? 'bg-[#4A5D50] text-[#FAF8F4] shadow-md'
                  : 'bg-white text-[#2B2E2C]/70 border border-[#4A5D50]/20 hover:border-[#4A5D50]'
              }`}
            >
              {city === 'all' ? 'All Outlets' : city}
            </button>
          ))}
        </div>

        {/* Store Grid & Focus Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Store Cards List (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#2B2E2C] flex items-center gap-2">
              <span>Barn Outlets ({filteredStores.length})</span>
            </h3>

            {filteredStores.map((store) => {
              const isSelected = selectedStore.id === store.id;
              return (
                <div
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className={`p-5 rounded-2xl bg-white border cursor-pointer transition-all space-y-3 relative overflow-hidden ${
                    isSelected
                      ? 'border-2 border-[#4A5D50] ring-2 ring-[#4A5D50]/15 shadow-md'
                      : 'border-[#4A5D50]/15 hover:border-[#4A5D50]/40'
                  }`}
                >
                  {store.isFlagship && (
                    <span className="absolute top-3 right-3 bg-[#C9962F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                      Flagship Store
                    </span>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4A5D50]/10 text-[#4A5D50] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9962F]">
                        {store.city} • {store.area}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#2B2E2C]">
                        {store.name}
                      </h4>
                      <p className="text-xs text-[#2B2E2C]/70 mt-0.5">{store.address}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#4A5D50]/10 flex items-center justify-between text-xs text-[#2B2E2C]/80">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#4A5D50]" />
                      {store.hours}
                    </span>
                    <span className="font-bold text-[#4A5D50] flex items-center gap-1">
                      View Details <Navigation className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Store View & Experience Features (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#4A5D50]/15 p-6 sm:p-8 shadow-lg space-y-6 sticky top-24">
            
            <div className="aspect-16/9 rounded-xl overflow-hidden border border-[#4A5D50]/10 relative">
              <ImageWithFallback
                src={selectedStore.image}
                alt={selectedStore.name}
                fallbackTitle={selectedStore.name}
                category="grown"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs font-bold text-[#C9962F] uppercase tracking-wider">
                    {selectedStore.city} Experience Lounge
                  </span>
                  <h2 className="font-serif text-2xl font-bold">{selectedStore.name}</h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#4A5D50]/10 space-y-1">
                <span className="text-[10px] text-[#2B2E2C]/60 uppercase font-bold block">Physical Address</span>
                <p className="font-bold text-[#2B2E2C]">{selectedStore.address}</p>
              </div>

              <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#4A5D50]/10 space-y-1">
                <span className="text-[10px] text-[#2B2E2C]/60 uppercase font-bold block">Direct Store Contact</span>
                <p className="font-bold text-[#4A5D50]">{selectedStore.phone}</p>
              </div>
            </div>

            {/* In-Store Experience Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-base font-bold text-[#2B2E2C] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C9962F]" />
                In-Store Apothecary Services at this Location
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedStore.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#2B2E2C] p-2.5 bg-[#4A5D50]/5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#4A5D50] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Directions CTA */}
            <div className="pt-4 border-t border-[#4A5D50]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#2B2E2C]/70">Opening Hours: <strong>{selectedStore.hours}</strong></span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedStore.name + ' ' + selectedStore.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary-grown" size="md" icon={<Navigation className="w-4 h-4" />}>
                  Get Directions on Maps
                </Button>
              </a>
            </div>

          </div>

        </div>

        {/* Stockist or Partner Outlet Inquiry */}
        <section className="p-8 sm:p-12 bg-white rounded-2xl border border-[#4A5D50]/20 shadow-xl space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <BarnRoofMotif variant="divider" className="text-[#C9962F]" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2E2C]">
              Become an Authorized Barn.pk Stockist
            </h3>
            <p className="text-xs sm:text-sm text-[#2B2E2C]/70">
              Are you an organic store, luxury hotel, or health spa owner interested in stocking our Sidr Honey, Shilajit, or Cold-Pressed Oils?
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-[#4A5D50]/10 rounded-xl text-center space-y-2 border border-[#4A5D50]/30 max-w-md mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#4A5D50] mx-auto" />
              <h4 className="font-serif text-lg font-bold text-[#2B2E2C]">Stockist Inquiry Received</h4>
              <p className="text-xs text-[#2B2E2C]/80">Our corporate retail team will contact you within 24 business hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
            >
              <input
                type="text"
                required
                placeholder="Business or Store Name *"
                className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4] focus:outline-none focus:border-[#4A5D50]"
              />
              <input
                type="text"
                required
                placeholder="City & Location *"
                className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4] focus:outline-none focus:border-[#4A5D50]"
              />
              <input
                type="email"
                required
                placeholder="Email Address *"
                className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4] focus:outline-none focus:border-[#4A5D50]"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                className="p-3 rounded-xl border border-[#4A5D50]/20 bg-[#FAF8F4] focus:outline-none focus:border-[#4A5D50]"
              />
              <div className="sm:col-span-2 text-center pt-2">
                <Button variant="primary-grown" size="md" icon={<Send className="w-4 h-4" />}>
                  Submit Stockist Application
                </Button>
              </div>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};
