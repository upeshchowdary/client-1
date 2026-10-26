import React from 'react';
import { ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-20 lg:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FFEB00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kerala Provenance Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-white/90 border border-[#EAE4DC] shadow-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#123824] mb-5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B5E20]"></span>
              </span>
              <span>Authentic Kerala Heritage Kitchen · Irinjalakuda</span>
              <span className="text-[#C62828] font-bold">FSSAI Certified</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#123824] leading-[1.12] mb-4">
              A Little Taste of Home,{' '}
              <span className="italic font-normal text-[#1B5E20] block sm:inline">
                in Every Spoonful.
              </span>
            </h1>

            {/* Malayalam Subheading */}
            <p className="font-malayalam font-bold text-lg sm:text-xl text-[#B71C1C] mb-4 tracking-wide">
              വീട്ടിലെ രുചി, മാറ്റമില്ലാത്ത പരമ്പരാഗത അച്ചാറുകൾ.
            </p>

            {/* Brand Statement */}
            <p className="text-base sm:text-lg text-[#4A443B] leading-relaxed max-w-2xl mb-8">
              Hand-prepared by <strong className="text-[#123824]">IRIS Food & Kitchen Products</strong> using hand-picked raw mangoes, coastal sea prawns, and sun-ripened lemons. Preserved slowly in pure cold-pressed gingelly oil, stone-ground chilies, and aromatic roasted fenugreek — without industrial preservatives.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('#shop')}
                className="px-7 py-4 rounded-full bg-[#123824] hover:bg-[#1B5E20] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Shop Pickles & Powders</span>
                <ArrowRight className="w-4 h-4 text-[#FFEB00]" />
              </button>

              <button
                onClick={() => scrollTo('#story')}
                className="px-6 py-4 rounded-full bg-white hover:bg-[#EAE4DC]/50 text-[#123824] border border-[#D5CDC2] font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                Our Heritage Kitchen Story
              </button>

              <a
                href="#bulk"
                className="text-xs font-bold text-[#B71C1C] hover:underline flex items-center gap-1 ml-1"
              >
                <Flame className="w-3.5 h-3.5 text-[#B71C1C]" />
                <span>Bulk & Event Catering Available</span>
              </a>
            </div>

            {/* Micro Highlights Pill Bar */}
            <div className="pt-6 border-t border-[#EAE4DC] grid grid-cols-3 gap-3 max-w-xl text-left">
              <div>
                <span className="block font-serif text-xl font-bold text-[#123824]">100%</span>
                <span className="text-xs text-[#5C5549] font-medium">Natural Cold-Pressed Oil</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-[#123824]">0%</span>
                <span className="text-xs text-[#5C5549] font-medium">Chemical Preservatives</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-[#123824]">FSSAI</span>
                <span className="text-xs text-[#5C5549] font-medium">Govt. Licensed Kitchen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Culinary Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="/images/hero/hero_kerala_pickle.jpg"
                alt="Authentic Kerala Mango Pickle in traditional ceramic Bharani and glass jar"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                fetchPriority="high"
              />

              {/* Gradient Vignette for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl glass-dark text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFEB00] block">
                    Signature Flagship
                  </span>
                  <span className="font-serif font-bold text-base sm:text-lg block leading-snug">
                    Kerala Kadumanga Achaar
                  </span>
                  <span className="text-xs text-white/80 font-malayalam">
                    നാടൻ കണ്ണിമാങ്ങ അച്ചാർ
                  </span>
                </div>
                <button
                  onClick={() => scrollTo('#shop')}
                  className="px-3.5 py-2 rounded-xl bg-[#FFEB00] hover:bg-amber-300 text-[#123824] font-bold text-xs transition-colors cursor-pointer flex-shrink-0"
                >
                  Order ₹160
                </button>
              </div>
            </div>

            {/* Floating Top Trust Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#EAE4DC] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#1B5E20]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Verified Safe</span>
                <span className="text-xs font-bold text-[#123824] block">FSSAI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
