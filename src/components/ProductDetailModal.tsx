import React, { useState } from 'react';
import { X, ShoppingBag, Star, Flame, Check } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants[0]?.size || product.netWeightDefault
  );
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const currentVariant =
    product.variants.find((v) => v.size === selectedSize) || product.variants[0];

  const handleAdd = () => {
    addItem(product, selectedSize, 1);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl text-left border border-[#EAE4DC] animate-in zoom-in-95 duration-200 my-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#123824] hover:bg-[#123824] hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Image */}
            <div className="relative h-72 sm:h-96 md:h-full bg-stone-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span>Spiciness: {product.spiciness}/5</span>
              </div>
            </div>

            {/* Right: Content Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              <div>
                {/* Malayalam & Dietary tag */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-malayalam font-bold text-sm text-[#2E7D32]">
                    {product.nameMalayalam}
                  </span>
                  <div className="flex items-center gap-1 font-bold text-xs text-[#123824]">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400">({product.reviewCount})</span>
                  </div>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#123824] leading-tight mb-3">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Ingredients Pill Tags */}
                <div className="mb-5">
                  <h4 className="text-[11px] font-bold text-[#123824] uppercase tracking-wider mb-2">
                    Key Authentic Ingredients:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-[#FAF8F5] border border-[#EAE4DC] text-[#4A443B] px-2.5 py-1 rounded-lg"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Storage & Shelf Life */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 mb-5 text-xs text-[#5C5549] space-y-1">
                  <div>
                    <strong className="text-[#123824]">Shelf Life:</strong> {product.shelfLife}
                  </div>
                  <div>
                    <strong className="text-[#123824]">Storage Instructions:</strong> {product.storage}
                  </div>
                </div>

                {/* Pack Variant Selector */}
                {product.variants.length > 1 && (
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#123824] block mb-2">
                      Choose Jar / Pack Size:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {product.variants.map((v) => (
                        <button
                          key={v.size}
                          type="button"
                          onClick={() => setSelectedSize(v.size)}
                          className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                            selectedSize === v.size
                              ? 'bg-[#123824] text-white border-[#123824] shadow-xs'
                              : 'bg-white text-[#4A443B] border-[#D5CDC2] hover:border-[#123824]'
                          }`}
                        >
                          <span className="block text-xs font-bold">{v.size}</span>
                          <span
                            className={`block text-[11px] font-semibold mt-0.5 ${
                              selectedSize === v.size ? 'text-amber-300' : 'text-emerald-800'
                            }`}
                          >
                            ₹{v.price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Price & Add to Cart Action */}
              <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-500 block">Total Price</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#123824]">
                    ₹{currentVariant ? currentVariant.price : 0}
                  </span>
                </div>

                <button
                  onClick={handleAdd}
                  className={`px-6 sm:px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer ${
                    added
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#1B5E20] hover:bg-[#123824] text-white active:scale-95'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#FFEB00]" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
