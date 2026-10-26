import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, ShieldCheck } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getSubtotal,
    getTotalItems,
    getWhatsAppOrderUrl
  } = useCartStore();

  const [deliveryNotes, setDeliveryNotes] = useState('');
  const subtotal = getSubtotal();
  const totalCount = getTotalItems();

  if (!isOpen) return null;

  const handleWhatsAppCheckout = () => {
    const url = getWhatsAppOrderUrl(deliveryNotes);
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 bg-[#123824] text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[#FFEB00]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight">
                  Your Kitchen Cart
                </h3>
                <span className="text-xs text-emerald-200">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-stone-200/80 text-stone-500 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#123824] mb-1">
                  Your cart is empty
                </h4>
                <p className="text-xs text-[#716A60] max-w-xs mb-6">
                  Experience the genuine taste of Kerala. Explore our cut mango, sea prawn, or lime pickles.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    const el = document.querySelector('#shop');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-[#1B5E20] hover:bg-[#123824] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              <div className="space-y-3.5">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.selectedSize}`}
                    className="p-3.5 rounded-2xl bg-white border border-[#EAE4DC] shadow-2xs flex items-center gap-3.5"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover border border-stone-200 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif font-bold text-sm text-[#123824] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.productId, item.selectedSize)}
                          aria-label={`Remove ${item.product.name}`}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[#716A60] mb-2">
                        <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md text-[10px]">
                          {item.selectedSize}
                        </span>
                        <span>₹{item.price} each</span>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Increment/Decrement */}
                        <div className="flex items-center border border-[#D5CDC2] rounded-lg bg-[#FAF8F5]">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.selectedSize, item.quantity - 1)
                            }
                            className="p-1 px-2 text-[#123824] hover:bg-stone-200 rounded-l-lg transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#123824]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.productId, item.selectedSize, item.quantity + 1)
                            }
                            className="p-1 px-2 text-[#123824] hover:bg-stone-200 rounded-r-lg transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif font-bold text-sm text-[#123824]">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Delivery Notes & Pin Code */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[#3D3830] mb-1">
                    Delivery Address / Pincode / Travel packing note:
                  </label>
                  <textarea
                    rows={2}
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                    placeholder="Enter pincode, city, or special NRI packing notes..."
                    className="w-full p-2.5 rounded-xl border border-[#D5CDC2] bg-white text-xs text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer with Subtotal & WhatsApp Dispatch */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#EAE4DC] shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 block">Subtotal</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Standard packaging included</span>
                </div>
                <span className="font-serif text-2xl font-bold text-[#123824]">
                  ₹{subtotal}
                </span>
              </div>

              {/* Direct WhatsApp Ordering Button */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 rounded-full bg-[#1B5E20] hover:bg-[#123824] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#FFEB00]" />
                <span>Dispatch Order via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#716A60]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Direct Kitchen Dispatch · Irinjalakuda</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
