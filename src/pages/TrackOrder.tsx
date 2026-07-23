import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { Truck, Search, CheckCircle2, Package, MapPin, Clock, ShieldCheck, ThermometerSnowflake, FileText, ArrowRight } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const TrackOrder: React.FC = () => {
  const location = useLocation();
  const { formatPrice } = useCurrency();

  const [trackingNumber, setTrackingNumber] = useState('');
  const [activeOrder, setActiveOrder] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const codeFromUrl = params.get('code');
    const targetCode = codeFromUrl || trackingNumber || 'PK-BARN-98421';
    
    setTrackingNumber(targetCode);

    // Look for saved order in localStorage
    const savedOrders = JSON.parse(localStorage.getItem('barn_orders') || '[]');
    const matched = savedOrders.find((o: any) => o.trackingCode?.toUpperCase() === targetCode.toUpperCase());

    if (matched) {
      setActiveOrder({
        id: matched.trackingCode,
        date: matched.date,
        estimatedDelivery: 'Express Delivery (Tomorrow by 4:00 PM)',
        status: matched.status || 'In Transit',
        destination: `${matched.address}, ${matched.city}, Pakistan`,
        total: matched.total,
        items: matched.items.map((i: any) => ({
          name: i.product.name,
          qty: i.quantity,
          price: i.product.price * i.quantity
        })),
        timeline: [
          {
            title: 'Order Placed & Confirmed',
            time: 'Today • Just Now',
            desc: `Order received for express delivery to ${matched.city}`,
            completed: true
          },
          {
            title: 'Batch Quality & PCSIR Lab Verified',
            time: 'Today • 2 Hours Ago',
            desc: 'Batch #BN-2026 passed purity verification',
            completed: true
          },
          {
            title: 'Packed in Temperature-Controlled Box',
            time: 'Today • 1 Hour Ago',
            desc: 'Sealed with tamper-evident seal',
            completed: true
          },
          {
            title: 'In Transit with Courier',
            time: 'Estimated Tomorrow • 09:00 AM',
            desc: 'En route to local distribution hub',
            completed: false
          }
        ]
      });
    } else {
      // Default Mock Order for demo code PK-BARN-98421
      setActiveOrder({
        id: targetCode,
        date: 'July 21, 2026',
        estimatedDelivery: 'Tomorrow by 4:00 PM',
        status: 'In Transit',
        destination: 'Gulberg III, Lahore, Pakistan',
        total: 79.0,
        items: [
          { name: 'Raw Organic Sidr Honey (500g Glass Jar)', qty: 1, price: 34.0 },
          { name: 'Pure Himalayan Shilajit Resin (30g)', qty: 1, price: 45.0 }
        ],
        timeline: [
          {
            title: 'Order Placed & Cold Storage Reservation',
            time: 'July 21, 2026 • 09:30 AM',
            desc: 'Order received at Karak Valley cold storage vault',
            completed: true
          },
          {
            title: 'Batch Quality & PCSIR Lab Verified',
            time: 'July 21, 2026 • 11:15 AM',
            desc: 'Batch #BN-SIDR-2026-04 passed purity checks',
            completed: true
          },
          {
            title: 'Picked & Packed in Insulated Glass Box',
            time: 'July 22, 2026 • 02:45 PM',
            desc: 'Sealed with tamper-evident security tape',
            completed: true
          },
          {
            title: 'In Transit with Temperature Control',
            time: 'July 22, 2026 • 08:00 AM',
            desc: 'Express dispatch en route to destination',
            completed: true
          }
        ]
      });
    }
  }, [location.search, trackingNumber]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5" />
            Live Pakistan Shipment Portal
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Track Your Barn.pk Order Status
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            Enter your order tracking code (e.g. PK-BARN-98421) below to inspect live temperature-controlled transit status across Pakistan.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto pt-4 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter Order Code (e.g. PK-BARN-98421)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-[#2B2E2C] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9962F]"
              />
              <Search className="w-4 h-4 text-[#2B2E2C]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <Button variant="primary-restored" size="md" icon={<ArrowRight className="w-4 h-4 text-[#B08D57]" />}>
              Track
            </Button>
          </form>

          <p className="text-xs text-[#FAF8F4]/60 pt-1">
            Tip: Try sample order tracking code <strong className="text-[#C9962F] cursor-pointer" onClick={() => setTrackingNumber('PK-BARN-98421')}>PK-BARN-98421</strong>
          </p>
        </div>
      </section>

      {/* Main Order Timeline Content */}
      {activeOrder && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="bg-white rounded-2xl border border-[#4A5D50]/20 p-6 sm:p-10 shadow-xl space-y-8">
            
            {/* Order Header Summary */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#4A5D50]/15 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9962F] block">
                  Tracking Code #{activeOrder.id}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2E2C] flex items-center gap-2">
                  Status: <span className="text-[#4A5D50]">{activeOrder.status}</span>
                </h2>
                <p className="text-xs text-[#2B2E2C]/70">Placed on {activeOrder.date} • Destination: {activeOrder.destination}</p>
              </div>

              <div className="p-3 bg-[#FAF8F4] rounded-xl border border-[#4A5D50]/10 text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#2B2E2C]/60 block">Estimated Arrival</span>
                <strong className="text-[#4A5D50] font-serif text-sm block">{activeOrder.estimatedDelivery}</strong>
              </div>
            </div>

            {/* Temperature Guarantee Banner */}
            <div className="p-4 bg-[#4A5D50]/5 rounded-xl border border-[#4A5D50]/20 flex items-center gap-3 text-xs text-[#2B2E2C]">
              <ThermometerSnowflake className="w-5 h-5 text-[#45566B] shrink-0" />
              <div>
                <strong>Temperature-Controlled Cold Chain Active:</strong>
                <span className="text-[#2B2E2C]/80 ml-1">Your raw honey and organic remedies are maintained below 25°C in thermal insulated boxes.</span>
              </div>
            </div>

            {/* Progress Log */}
            <div className="space-y-6 pt-2">
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9962F]" />
                Shipment Progress Log
              </h3>

              <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-[#4A5D50]/20">
                {activeOrder.timeline.map((item: any, idx: number) => (
                  <div key={idx} className="relative">
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-xs ${
                        item.completed
                          ? 'bg-[#4A5D50] text-white'
                          : 'bg-white border-2 border-[#4A5D50]/30 text-[#2B2E2C]/40'
                      }`}
                    >
                      {item.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-serif text-sm sm:text-base font-bold text-[#2B2E2C]">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-bold text-[#C9962F]">{item.time}</span>
                      </div>
                      <p className="text-xs text-[#2B2E2C]/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Items in Package */}
            <div className="pt-6 border-t border-[#4A5D50]/15 space-y-3">
              <h4 className="font-serif text-sm font-bold text-[#2B2E2C] flex items-center gap-2">
                <Package className="w-4 h-4 text-[#4A5D50]" />
                Items in Package ({activeOrder.items.length})
              </h4>
              <div className="space-y-2 text-xs">
                {activeOrder.items.map((it: any, idx: number) => (
                  <div key={idx} className="p-3 bg-[#FAF8F4] rounded-lg flex items-center justify-between">
                    <span className="font-semibold text-[#2B2E2C]">{it.name} × {it.qty}</span>
                    <span className="font-serif font-bold text-[#2B2E2C]">{formatPrice(it.price)}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
