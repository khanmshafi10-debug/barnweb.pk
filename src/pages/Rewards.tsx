import React, { useState } from 'react';
import { BarnRoofMotif } from '../components/BarnRoofMotif';
import { Button } from '../components/Button';
import { Award, Gift, Sparkles, CheckCircle2, Copy, Share2, Users, ArrowRight } from 'lucide-react';

export const Rewards: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const referralLink = 'https://barn.pk/invite?ref=MEMBER_9821';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="bg-[#2B2E2C] text-[#FAF8F4] py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9962F]/20 text-[#C9962F] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Barn Harvest Circle
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Wellness Loyalty & Member Rewards
          </h1>
          <p className="text-sm sm:text-base text-[#FAF8F4]/80 max-w-xl mx-auto leading-relaxed">
            Earn 1 Barn Seed for every $1 spent. Redeem points for free Sidr Honey jars, complimentary cold-pressed oils, and exclusive seasonal harvest access.
          </p>
        </div>
      </section>

      {/* Main Rewards Portal */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Member Status Card */}
        <div className="bg-white rounded-2xl border border-[#4A5D50]/20 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#4A5D50]/15 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9962F]">Current Member Tier</span>
              <h2 className="font-serif text-2xl font-bold text-[#2B2E2C]">Harvest Circle • Gold Status</h2>
            </div>
            <div className="p-4 bg-[#FAF8F4] rounded-xl border border-[#C9962F]/30 text-right">
              <span className="text-[10px] uppercase font-bold text-[#2B2E2C]/60 block">Available Points</span>
              <span className="font-serif text-3xl font-bold text-[#C9962F]">420 Seeds</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between font-bold text-[#2B2E2C]">
              <span>Progress to Sovereign Circle Tier</span>
              <span>80 / 500 Seeds Needed</span>
            </div>
            <div className="w-full bg-[#FAF8F4] h-3 rounded-full overflow-hidden border border-[#4A5D50]/15">
              <div className="bg-[#C9962F] h-full w-[84%] transition-all" />
            </div>
          </div>
        </div>

        {/* Tiers Breakdown */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <BarnRoofMotif variant="divider" className="text-[#4A5D50]" />
            <h3 className="font-serif text-2xl font-bold text-[#2B2E2C]">Harvest Circle Membership Tiers</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#4A5D50]/15 shadow-sm space-y-4">
              <span className="text-xs font-bold text-[#4A5D50] uppercase tracking-wider">Tier I</span>
              <h4 className="font-serif text-xl font-bold text-[#2B2E2C]">Seedling Member</h4>
              <p className="text-xs text-[#2B2E2C]/70">0 - 200 Points</p>
              <ul className="text-xs space-y-2 text-[#2B2E2C]/80 pt-2 border-t border-[#4A5D50]/10">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D50]" /> 1 Seed per $1 spent</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D50]" /> Birthday Gift Jar</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-[#C9962F] shadow-md space-y-4 relative">
              <span className="absolute top-3 right-3 bg-[#C9962F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Current</span>
              <span className="text-xs font-bold text-[#C9962F] uppercase tracking-wider">Tier II</span>
              <h4 className="font-serif text-xl font-bold text-[#2B2E2C]">Harvest Circle</h4>
              <p className="text-xs text-[#2B2E2C]/70">201 - 500 Points</p>
              <ul className="text-xs space-y-2 text-[#2B2E2C]/80 pt-2 border-t border-[#4A5D50]/10">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9962F]" /> 1.5 Seeds per $1 spent</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9962F]" /> Free Express Cold-Chain Shipping</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C9962F]" /> Early Access to Shilajit Batches</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#45566B]/20 shadow-sm space-y-4">
              <span className="text-xs font-bold text-[#45566B] uppercase tracking-wider">Tier III</span>
              <h4 className="font-serif text-xl font-bold text-[#2B2E2C]">Sovereign Member</h4>
              <p className="text-xs text-[#2B2E2C]/70">501+ Points</p>
              <ul className="text-xs space-y-2 text-[#2B2E2C]/80 pt-2 border-t border-[#4A5D50]/10">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#45566B]" /> 2 Seeds per $1 spent</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#45566B]" /> Annual Wooden Honey Crock Gift</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#45566B]" /> Personal Apothecary Consultation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Invite & Earn $10 */}
        <section className="p-8 sm:p-10 bg-[#2B2E2C] text-[#FAF8F4] rounded-2xl shadow-xl space-y-4 text-center">
          <Users className="w-8 h-8 text-[#C9962F] mx-auto" />
          <h3 className="font-serif text-2xl font-bold">Give $10, Get $10 Friends Referral</h3>
          <p className="text-xs sm:text-sm text-[#FAF8F4]/80 max-w-md mx-auto">
            Share your unique referral link with friends. When they place their first order, you both get a $10 voucher.
          </p>

          <div className="max-w-md mx-auto flex items-center gap-2 pt-2">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="flex-1 p-3 rounded-xl bg-white/10 text-white text-xs border border-white/20 font-mono"
            />
            <Button variant="primary-restored" size="md" onClick={handleCopy} icon={<Copy className="w-4 h-4 text-[#B08D57]" />}>
              {copied ? 'Copied!' : 'Copy Link'}
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};
