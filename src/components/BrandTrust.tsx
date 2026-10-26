import React from 'react';
import { Leaf, Award, ShieldCheck, Truck } from 'lucide-react';

export const BrandTrust: React.FC = () => {
  const trustPoints = [
    {
      icon: Leaf,
      title: '100% Homestyle Kitchen',
      description: 'Handcrafted in small batches using traditional recipes without artificial colors or preservatives.',
      highlight: 'Zero chemicals'
    },
    {
      icon: Award,
      title: 'Cold-Pressed Sesame Oil',
      description: 'Slowly cured in pure gingelly oil, fresh curry leaves, and sun-dried stone-ground Kerala spices.',
      highlight: 'Aromatic & Authentic'
    },
    {
      icon: ShieldCheck,
      title: 'FSSAI Licensed Kitchen',
      description: 'Prepared under strict hygiene standards by IRIS Food & Kitchen Products (Lic. 213252020000459).',
      highlight: 'Govt. Certified'
    },
    {
      icon: Truck,
      title: 'Fresh Dispatch & Bulk Supply',
      description: 'Carefully leak-proof packed for home deliveries, catering events, weddings, and NRI travel.',
      highlight: 'Pan-India Delivery'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-[#EAE4DC]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC]/60 hover:border-[#1B5E20]/40 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100/80 text-[#1B5E20] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif font-bold text-sm text-[#123824]">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#5C5549] leading-relaxed mb-2">
                    {point.description}
                  </p>
                  <span className="text-[11px] font-bold text-[#2E7D32] uppercase tracking-wider">
                    {point.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
