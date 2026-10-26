import React from 'react';
import { Heart, Sparkles, MapPin, ShieldCheck } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heritage Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img
                src="/images/story/kerala_heritage_kitchen.jpg"
                alt="Traditional Kerala Kitchen heritage - grinding spices on the Ammikkallu"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-300 block">
                  Rooted in Thrissur, Kerala
                </span>
                <p className="font-serif text-lg font-bold">
                  Generations of slow-fire cooking & granite stone-ground spices.
                </p>
              </div>
            </div>

            {/* Small Floating Seal */}
            <div className="absolute -top-4 -left-4 sm:left-4 bg-[#123824] text-white p-3.5 rounded-2xl shadow-lg border border-emerald-700/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FFEB00]">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-emerald-200 uppercase tracking-widest font-bold block">Tradition First</span>
                <span className="text-xs font-bold block">No Shortcuts. Zero Preservatives.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#2E7D32] bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
                Our Kitchen Heritage
              </span>
              <span className="flex items-center gap-1 text-xs text-[#716A60]">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                Irinjalakuda, Kerala
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123824] leading-tight mb-4">
              Born from a Passion for True Homemade Food.
            </h2>

            <p className="font-malayalam font-bold text-base text-[#1B5E20] mb-6">
              വീട്ടിൽ ഉണ്ടാക്കുന്ന അതേ സ്നേഹവും ശുദ്ധിയും നിങ്ങളുടെ മേശയിലേക്ക്.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#4A443B] leading-relaxed mb-8">
              <p>
                In every traditional Kerala household, the corner of the veranda held sacred ceramic <strong className="text-[#123824]">Bharanis</strong> — sealed with white muslin cloth, slowly maturing cut mangoes and lemons under the tropical sun.
              </p>
              <p>
                <strong className="text-[#123824]">IRIS Food & Kitchen Products</strong> established <strong className="text-[#123824]">Veettile Achaar</strong> to protect this dying art. We refused to use synthetic vinegar, artificial acidity regulators, or chemical colorings. Instead, we select fresh local produce from native Kerala farms and coastal fishermen, curing them gently in cold-pressed sesame oil.
              </p>
              <p>
                Whether you live in Thrissur, Bangalore, Delhi, or across the sea, opening a jar of Veettile Achaar instantly transports you back to the aroma of a warm Kerala lunch with steaming rice and comforting sambar.
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EAE4DC]">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D99B00] flex-shrink-0" />
                <span className="text-xs font-bold text-[#123824]">Hand-Roasted Spices</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-[#123824]">FSSAI Reg: 213252020000459</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
