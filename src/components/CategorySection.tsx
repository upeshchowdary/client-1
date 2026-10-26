import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'vegetarian',
      title: 'Vegetarian Pickles',
      titleMalayalam: 'നാടൻ വെജിറ്റേറിയൻ അച്ചാറുകൾ',
      description: 'Cut Mango, Tender Lime, and Whole Country Garlic pickled in pure gingelly oil and fenugreek.',
      image: '/images/categories/veg_pickles.jpg',
      badge: 'Traditional Favorites',
      count: '3 Products'
    },
    {
      id: 'non-vegetarian',
      title: 'Non-Vegetarian Pickles',
      titleMalayalam: 'നോൺ-വെജ് സ്പെഷ്യൽ അച്ചാറുകൾ',
      description: 'Fresh Coastal Prawns and slow-roasted Kerala Beef preserved with Tellicherry pepper and garlic.',
      image: '/images/categories/nonveg_pickles.jpg',
      badge: 'Signature Delicacies',
      count: '2 Products'
    },
    {
      id: 'spices',
      title: 'Authentic Spice Powders',
      titleMalayalam: 'വറുത്തരച്ച മസാലപ്പൊടികൾ',
      description: 'Stone-milled Sambar, Rasam, and Meat Masalas made from slow-roasted native Kerala spices.',
      image: '/images/categories/spices.jpg',
      badge: 'Cast-Iron Roasted',
      count: 'Spices & Combos'
    }
  ];

  const handleCardClick = (id: string) => {
    onSelectCategory(id);
    const el = document.querySelector('#shop');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2E7D32] bg-emerald-100/70 px-3 py-1 rounded-full inline-block mb-3">
            Handcrafted Range
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123824] tracking-tight">
            Explore by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C5549]">
            From sun-ripened farm harvests to coastal sea catches — authentic recipes created for every feast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat.id)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-[#EAE4DC] flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 text-[#123824] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {cat.badge}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-malayalam text-emerald-300 block mb-0.5">
                    {cat.titleMalayalam}
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <p className="text-sm text-[#5C5549] leading-relaxed mb-6">
                  {cat.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#EAE4DC]/70">
                  <span className="text-xs font-semibold text-[#8C8476]">
                    {cat.count}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#1B5E20] group-hover:text-[#2E7D32] transition-colors">
                    <span>Browse Collection</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
