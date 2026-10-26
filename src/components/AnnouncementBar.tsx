import React from 'react';
import { ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#123824] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#1b5e20]/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="inline-flex items-center gap-1 bg-[#2E7D32]/60 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider text-emerald-100 uppercase">
            <ShieldCheck className="w-3 h-3 text-emerald-300" />
            FSSAI Lic. 213252020000459
          </span>
          <span className="hidden sm:inline text-emerald-200/80">•</span>
          <span className="hidden sm:inline">Handcrafted in Irinjalakuda, Kerala</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium ml-auto">
          <span className="flex items-center gap-1.5 text-emerald-200">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Pure Gingelly Oil & Zero Preservatives</span>
          </span>
          <a
            href="https://api.whatsapp.com/send?phone=919747104005"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-amber-300 hover:text-white transition-colors duration-200"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Orders & Bulk: +91 97471 04005</span>
          </a>
        </div>
      </div>
    </div>
  );
};
