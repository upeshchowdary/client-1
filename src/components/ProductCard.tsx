import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Flame, Check } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants[0]?.size || product.netWeightDefault
  );
  const [addedAnim, setAddedAnim] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const currentVariant =
    product.variants.find((v) => v.size === selectedSize) || product.variants[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, selectedSize, 1);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#EAE4DC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      {/* Product Image Area */}
      <div
        className="relative h-64 sm:h-72 w-full bg-stone-50 overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Dietary Icon Badge (Veg green circle / Non-veg brown triangle) */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
          <div
            className={`w-6 h-6 rounded-md bg-white/95 shadow-xs border flex items-center justify-center ${
              product.dietary === 'veg' ? 'border-emerald-600' : 'border-[#8B4513]'
            }`}
          >
            {product.dietary === 'veg' ? (
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 block" />
            ) : (
              <span className="w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-b-[8px] border-b-[#8B4513] block" />
            )}
          </div>
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#123824] text-white px-2.5 py-1 rounded-full shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Button (visible on mobile, hover-revealed on desktop) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          aria-label={`View details for ${product.name}`}
          className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-[#123824] hover:bg-[#123824] hover:text-white shadow-md flex items-center justify-center transition-all opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transform sm:translate-y-1 sm:group-hover:translate-y-0 active:scale-95 cursor-pointer"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Spiciness Level Flames */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-0.5 text-[10px] font-bold text-amber-700 shadow-2xs">
          <Flame className="w-3 h-3 text-red-600 fill-red-500" />
          <span>Heat {product.spiciness}/5</span>
        </div>
      </div>

      {/* Card Content & Controls */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Malayalam Name */}
          <div className="flex items-center justify-between text-xs text-[#716A60] mb-1">
            <span className="font-malayalam font-bold text-[#2E7D32]">
              {product.nameMalayalam}
            </span>
            <div className="flex items-center gap-1 font-semibold text-[#123824]">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-lg sm:text-xl text-[#123824] hover:text-[#1B5E20] transition-colors cursor-pointer leading-snug mb-2"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#5C5549] line-clamp-2 leading-relaxed mb-4">
            {product.tagline}
          </p>
        </div>

        <div>
          {/* Pack Size Variant Selector - Touch-friendly */}
          {product.variants.length > 1 && (
            <div className="mb-4">
              <span className="text-[11px] font-semibold text-[#716A60] uppercase tracking-wider block mb-1.5">
                Select Pack Size:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.size}
                    type="button"
                    onClick={() => setSelectedSize(v.size)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer min-h-[34px] flex items-center justify-center active:scale-95 ${
                      selectedSize === v.size
                        ? 'bg-[#123824] text-white border-[#123824] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#4A443B] border-[#D5CDC2] hover:border-[#123824]'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price & Add to Cart Action */}
          <div className="pt-3 border-t border-[#EAE4DC] flex items-center justify-between gap-3">
            <div>
              <span className="text-xs text-gray-500 block leading-none mb-1">Price</span>
              <span className="font-serif font-bold text-xl text-[#123824] leading-none">
                ₹{currentVariant ? currentVariant.price : 0}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs min-h-[42px] ${
                addedAnim
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1B5E20] hover:bg-[#123824] text-white active:scale-95'
              }`}
            >
              {addedAnim ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#FFEB00]" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
