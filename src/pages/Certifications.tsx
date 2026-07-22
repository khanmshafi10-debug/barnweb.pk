import React, { useState } from 'react';
import { LAB_CERTIFICATES } from '../data/certifications';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { ShieldCheck, FileCheck, Award, CheckCircle2, Search, Download, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState(LAB_CERTIFICATES[0]);

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Laboratory Transparency
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Independent Quality & Batch Test Reports
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            We refuse hidden additives, adulteration, or thermal degradation. Every batch of Sidr honey, Shilajit, and Cold-Pressed oil is independently tested by government-accredited labs.
          </p>
        </div>
      </section>

      {/* Main Lab Reports Portal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Core Guarantees Banner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#4A5D50]/15 shadow-sm space-y-2">
            <Award className="w-8 h-8 text-[#C9962F]" />
            <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">PCSIR Accredited</h3>
            <p className="text-xs text-[#2B2E2C]/70">Tested at Pakistan Council of Scientific & Industrial Research laboratories for heavy metals and purity.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#4A5D50]/15 shadow-sm space-y-2">
            <FileCheck className="w-8 h-8 text-[#4A5D50]" />
            <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">Zero C4 Sugar Additives</h3>
            <p className="text-xs text-[#2B2E2C]/70">Certified zero corn syrup or high-fructose adulteration in our raw wild honeys.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#4A5D50]/15 shadow-sm space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#45566B]" />
            <h3 className="font-serif text-lg font-bold text-[#2B2E2C]">60%+ Fulvic Acid</h3>
            <p className="text-xs text-[#2B2E2C]/70">High-altitude Skardu Shilajit resin independently verified for bioactive mineral density.</p>
          </div>
        </div>

        {/* Live Batch Certificate Viewer */}
        <div className="bg-white rounded-2xl border border-[#4A5D50]/20 p-6 sm:p-10 shadow-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#4A5D50]/15 pb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9962F] block">
                Batch Analysis Portal
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#2B2E2C]">
                Select Product Batch Report
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
              {LAB_CERTIFICATES.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedBatch(cert)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedBatch.id === cert.id
                      ? 'bg-[#4A5D50] text-[#FAF8F4] shadow-md'
                      : 'bg-[#FAF8F4] text-[#2B2E2C]/70 border border-[#4A5D50]/15'
                  }`}
                >
                  {cert.productName}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Certificate Card */}
          <div className="bg-[#FAF8F4] p-6 sm:p-8 rounded-2xl border border-[#4A5D50]/15 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#4A5D50]/10 pb-4">
              <div>
                <span className="text-xs font-bold text-[#4A5D50]">Batch #{selectedBatch.batchNumber}</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2E2C]">{selectedBatch.productName}</h3>
                <p className="text-xs text-[#2B2E2C]/70 mt-0.5">Tested by: <strong>{selectedBatch.labName}</strong> on {selectedBatch.testDate}</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#C9962F]/30 text-right">
                <span className="text-[10px] uppercase font-bold text-[#2B2E2C]/60 block">Verified Purity Index</span>
                <span className="font-serif text-xl font-bold text-[#C9962F]">{selectedBatch.purityScore}</span>
              </div>
            </div>

            {/* Metrics Breakdown Table */}
            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-[#2B2E2C]">Analytical Breakdown & Lab Readings</h4>
              <div className="divide-y divide-[#4A5D50]/10 bg-white rounded-xl border border-[#4A5D50]/15 overflow-hidden text-xs">
                {selectedBatch.keyMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between gap-4">
                    <span className="font-semibold text-[#2B2E2C]">{metric.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[#4A5D50] font-bold">{metric.value}</span>
                      <span className="px-2 py-0.5 rounded-md bg-[#4A5D50]/10 text-[#4A5D50] font-bold text-[10px]">
                        {metric.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#2B2E2C]/70">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#4A5D50]" />
                Official Electronic Verification Seal Attached
              </span>
              <Button variant="secondary" size="md" icon={<Download className="w-4 h-4" />}>
                Download PDF Certificate
              </Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
