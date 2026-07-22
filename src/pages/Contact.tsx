import React, { useState } from 'react';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const hubs = [
    {
      city: 'Lahore Central Pantry',
      role: 'Main Dispatch & Customer Care',
      address: 'Gulberg III, Main Boulevard, Lahore, Pakistan',
      hours: 'Mon-Sat: 9:00 AM – 7:00 PM PKT',
      type: 'dispatch',
    },
    {
      city: 'Karak Wild Honey Reserve',
      role: 'Sidr Apiary Sourcing & Extraction Hub',
      address: 'Karak Valley Escarpment, Khyber Pakhtunkhwa',
      hours: 'Harvest Season Operations',
      type: 'sourcing',
    },
    {
      city: 'Skardu High-Altitude Base',
      role: 'Shilajit Mineral Purification Center',
      address: 'Skardu Plateau (16,000+ ft), Gilgit-Baltistan',
      hours: 'Sun-Drying & Quality Testing Unit',
      type: 'sourcing',
    },
  ];

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-[#4A5D50] text-[#FAF8F4] py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <BarnRoofMotif color="#C9962F" height={14} className="mx-auto" />
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Connect with Barn.pk
          </h1>
          <p className="text-sm text-[#FAF8F4]/80 max-w-xl mx-auto">
            Have questions regarding Sidr honey batches, Shilajit usage, or corporate gift boxes? We are here to assist.
          </p>
        </div>
      </section>

      {/* Main Form & Hubs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#4A5D50]/15 shadow-md space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#4A5D50]" />

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9962F]">
                Direct Message
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#2B2E2C]">
                Send an Inquiry to Barn.pk
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#4A5D50]/10 border border-[#4A5D50] rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#4A5D50] text-[#FAF8F4] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-[#C9962F]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2B2E2C]">Message Received</h3>
                <p className="text-xs text-[#2B2E2C]/80 leading-relaxed max-w-sm mx-auto">
                  Thank you, {formData.name || 'valued customer'}! Our sourcing steward will respond to {formData.email} within 24 business hours.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B2E2C] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fatima Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A5D50]/20 text-xs focus:outline-none focus:border-[#4A5D50]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2E2C] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A5D50]/20 text-xs focus:outline-none focus:border-[#4A5D50]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2E2C] mb-1">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A5D50]/20 text-xs focus:outline-none focus:border-[#4A5D50] bg-white font-medium"
                  >
                    <option value="Order Inquiry">Order Inquiry & Tracking</option>
                    <option value="Product Usage">Product Usage & Dosage Advice</option>
                    <option value="Bulk/Wholesale">Bulk & Corporate Gift Hampers</option>
                    <option value="Beekeeping Partnerships">Apiary / Farm Sourcing Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2E2C] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#4A5D50]/20 text-xs focus:outline-none focus:border-[#4A5D50]"
                  />
                </div>

                <Button
                  variant="primary-grown"
                  fullWidth
                  size="md"
                  type="submit"
                  icon={<Send className="w-4 h-4" />}
                >
                  Submit Inquiry
                </Button>
              </form>
            )}

          </div>

          {/* Right Column: Sourcing Map & Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-white rounded-2xl p-6 border border-[#4A5D50]/15 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">
                Direct Contacts
              </h3>
              
              <div className="space-y-3 text-xs text-[#2B2E2C]/80">
                <a
                  href="tel:+923001234567"
                  className="p-3 rounded-xl bg-[#FAF8F4] border border-[#4A5D50]/10 flex items-center gap-3 hover:border-[#C9962F] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C9962F] shrink-0" />
                  <div>
                    <strong className="block text-[#2B2E2C]">WhatsApp & Call Concierge</strong>
                    <span>+92 (300) 123-4567</span>
                  </div>
                </a>

                <a
                  href="mailto:care@barn.pk"
                  className="p-3 rounded-xl bg-[#FAF8F4] border border-[#4A5D50]/10 flex items-center gap-3 hover:border-[#C9962F] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#4A5D50] shrink-0" />
                  <div>
                    <strong className="block text-[#2B2E2C]">Email Support</strong>
                    <span>care@barn.pk</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Sourcing Hubs Accordion / Cards */}
            <div className="bg-white rounded-2xl p-6 border border-[#4A5D50]/15 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#2B2E2C] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C9962F]" />
                Sourcing & Dispatch Hubs
              </h3>

              <div className="space-y-3">
                {hubs.map((hub, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF8F4] border border-[#4A5D50]/10 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <strong className="font-bold text-[#4A5D50]">{hub.city}</strong>
                      <span className="text-[10px] bg-[#C9962F]/20 text-[#C9962F] font-bold px-2 py-0.5 rounded">
                        {hub.type === 'dispatch' ? 'Pantry Hub' : 'Origin Reserve'}
                      </span>
                    </div>
                    <p className="text-[#2B2E2C]/80">{hub.role}</p>
                    <p className="text-[#2B2E2C]/60 text-[11px]">{hub.address}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
