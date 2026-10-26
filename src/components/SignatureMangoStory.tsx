import React from 'react';
import { ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { PRODUCTS } from '../data/products';

export const SignatureMangoStory: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);
  const mangoProduct = PRODUCTS.find((p) => p.id === 'va-mango-01') || PRODUCTS[1];

  const handleOrderNow = () => {
    addItem(mangoProduct, '250g', 1);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#123824] text-white relative overflow-hidden">
      {/* Subtle Ambient Background Watermark */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#1B5E20]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <img
                src="/images/products/mango_pickle.jpg"
                alt="Signature Kerala Cut Mango Pickle"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag Overlays */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFEB00] block mb-1">
                  The Soul of Kerala Feeds
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">
                  Kadumanga Achaar
                </h3>
                <p className="font-malayalam text-emerald-300 text-sm">
                  നാടൻ കണ്ണിമാങ്ങയുടെ തനിമയാർന്ന രുചിക്കൂട്ട്
                </p>
              </div>
            </div>

            {/* Floating Highlight Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#FFEB00] text-[#123824] p-4 rounded-2xl shadow-xl border border-amber-300 font-bold flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#123824]" />
              <div className="text-left text-xs leading-snug">
                <span className="block text-[10px] uppercase tracking-wider text-amber-900 font-extrabold">Batch Processed</span>
                <span>Sun-cured with Sea Salt & Sesame Oil</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Process */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-300 bg-white/10 px-3.5 py-1.5 rounded-full self-start mb-4">
              Featured Editorial Focus
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Why Real Kerala Mango Pickle Can Never Be Rushed.
            </h2>

            <p className="text-base text-stone-300 leading-relaxed mb-6">
              In industrial factories, green mangoes are flash-boiled and drowned in synthetic acetic acid. At <strong className="text-white">Veettile Achaar</strong>, we preserve the centuries-old Kerala method:
            </p>

            {/* Bullet Proof Points */}
            <ul className="space-y-3.5 mb-8">
              <li className="flex items-start gap-3 text-sm text-stone-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Crisp Native Mangoes:</strong> Harvested unripe so each cube retains its crunch inside the spicy marinade.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Cast-Iron Roasted Fenugreek & Mustard:</strong> Milled on granite to unlock nutty bitterness that balances the tart mango.
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Pure Cold-Pressed Gingelly Oil:</strong> Gently warmed to infuse aromatic curry leaves and asafoetida.
                </span>
              </li>
            </ul>

            {/* Price & Action */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15">
              <div>
                <span className="text-xs text-stone-400 block">From</span>
                <span className="font-serif text-3xl font-bold text-[#FFEB00]">₹160</span>
                <span className="text-xs text-stone-400 ml-1.5">/ 250g Jar</span>
              </div>

              <button
                onClick={handleOrderNow}
                className="px-8 py-4 rounded-full bg-[#FFEB00] hover:bg-amber-300 text-[#123824] font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Mango Pickle to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
