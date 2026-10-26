import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/products';
import { Search } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: Product) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  searchQuery,
  onSearchChange,
}) => {
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameMalayalam.includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.ingredients.some((ing) =>
        ing.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#EAE4DC]">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#2E7D32] bg-emerald-100/70 px-3 py-1 rounded-full inline-block mb-3">
              Direct from Kitchen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123824] tracking-tight">
              Our Fresh Pickles & Spices
            </h2>
            <p className="mt-2 text-sm text-[#5C5549]">
              Prepared in small batches with cold-pressed oil, unpolished sea salt, and pure Kerala spices.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search by pickle, prawn, mango..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#D5CDC2] text-sm text-[#123824] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent transition-all shadow-2xs"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#123824] text-white shadow-md'
                  : 'bg-white text-[#4A443B] border border-[#D5CDC2] hover:border-[#123824] hover:bg-[#F4EFEA]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-emerald-200'
                    : 'bg-stone-200 text-stone-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EAE4DC] p-8">
            <p className="text-base font-semibold text-[#123824]">
              No products found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-[#5C5549] mt-1">
              Try searching for mango, prawn, beef, lime, or clear the category filters.
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#1B5E20] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
