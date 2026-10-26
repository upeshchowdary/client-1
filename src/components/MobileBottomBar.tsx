import React from 'react';
import { ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const MobileBottomBar: React.FC = () => {
  const { getTotalItems, getSubtotal, openCart } = useCartStore();
  const totalItems = getTotalItems();
  const subtotal = getSubtotal();

  return (
    <div className="fixed bottom-4 inset-x-4 z-40 lg:hidden pointer-events-none">
      {totalItems > 0 ? (
        /* Floating Cart Notification Pill */
        <div
          onClick={openCart}
          className="pointer-events-auto bg-[#123824] text-white p-3.5 px-5 rounded-2xl shadow-2xl border-2 border-emerald-500/30 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-4 duration-300 cursor-pointer active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-[#FFEB00]">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#FFEB00] text-[#123824] font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] text-emerald-200 font-medium leading-none mb-1">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} in cart
              </span>
              <span className="font-serif font-bold text-lg text-white leading-none">
                ₹{subtotal}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-[#FFEB00] text-[#123824] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm flex-shrink-0">
            <span>View Cart</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      ) : (
        /* Floating Quick WhatsApp Support / Direct Order Pill */
        <div className="flex justify-end pointer-events-auto">
          <a
            href="https://api.whatsapp.com/send?phone=919747104005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="bg-[#2E7D32] hover:bg-emerald-800 text-white p-3 px-4 rounded-full shadow-xl border border-emerald-400/40 flex items-center gap-2 text-xs font-bold active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
};
