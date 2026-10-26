import React from 'react';
import { Gift, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { PRODUCTS } from '../data/products';

export const TastingBoxSection: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);
  const combo = PRODUCTS.find((p) => p.category === 'combos') || PRODUCTS[4];

  const handleAddCombo = () => {
    addItem(combo, '3 x 250g Box', 1);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#EAE4DC]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FAF8F5] border border-[#EAE4DC] p-8 sm:p-12 lg:p-16 overflow-hidden relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Trio Photo */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white group">
                <img
                  src="/images/products/tasting_trio_box.jpg"
                  alt="Kerala Achaar Tasting Trio Discovery Box"
                  className="w-full h-[340px] sm:h-[420px] object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#123824] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <Gift className="w-3.5 h-3.5 text-[#FFEB00]" />
                <span>Gift & Feast Special Edition</span>
              </div>
            </div>

            {/* Right: Box Details & Purchase Action */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#2E7D32] bg-emerald-100/80 px-3 py-1 rounded-full">
                  Curated Discovery Set
                </span>
                <span className="text-xs font-bold text-[#C62828] bg-red-100 px-3 py-1 rounded-full">
                  Save ₹90 on Trio
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123824] leading-tight mb-2">
                Kerala Feast Discovery Trio Box
              </h2>
              <p className="font-malayalam font-bold text-sm text-[#2E7D32] mb-4">
                വീട്ടിലെ അച്ചാർ സ്പെഷ്യൽ 3-ഇൻ-1 ഫീസ്റ്റ് ബോക്സ്
              </p>

              <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed mb-6">
                Cannot decide which pickle to try first? Our curated Tasting Trio features 3 generous 250g glass jars packed with Kerala’s defining culinary tastes:
              </p>

              {/* Items included */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EAE4DC]/80">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#123824]">Signature Cut Mango Pickle (250g)</h4>
                    <p className="text-xs text-[#716A60]">Tender green mangoes salt-cured in gingelly oil & roasted fenugreek.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EAE4DC]/80">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#123824]">Fresh Coastal Prawn Pickle (250g)</h4>
                    <p className="text-xs text-[#716A60]">Crisp coastal sea prawns with roasted garlic pods and fiery red oil.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EAE4DC]/80">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#123824]">Tangy Sun-Cured Lime Pickle (250g)</h4>
                    <p className="text-xs text-[#716A60]">Steam-cured thin-skinned lemons with green chilies and ginger slivers.</p>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#EAE4DC]">
                <div>
                  <span className="text-xs text-gray-500 block">Complete 750g Set</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-[#123824]">₹680</span>
                    <span className="text-sm text-gray-400 line-through">₹770</span>
                  </div>
                </div>

                <button
                  onClick={handleAddCombo}
                  className="px-8 py-3.5 rounded-full bg-[#1B5E20] hover:bg-[#123824] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Tasting Box</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Leakproof Eco-Kraft Pack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
