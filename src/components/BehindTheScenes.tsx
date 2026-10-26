import React from 'react';
import { Sparkles, Sun, Flame, PackageCheck } from 'lucide-react';

export const BehindTheScenes: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Dawn Produce Selection',
      icon: Sun,
      desc: 'Unripe native mangoes, thin-skinned lemons, and fresh sea prawns sourced directly from local Kerala growers and coastal harbors.'
    },
    {
      num: '02',
      title: 'Mineral Sea Salt Curing',
      icon: Sparkles,
      desc: 'Cured slowly in traditional stone vessels to naturally release excess moisture while retaining crisp, crunchy texture.'
    },
    {
      num: '03',
      title: 'Cast-Iron Spice Roasting',
      icon: Flame,
      desc: 'Tellicherry pepper, Kashmiri chilies, and fenugreek seeds dry-roasted in small pans to release their natural essential oils.'
    },
    {
      num: '04',
      title: 'Airtight Glass Bottling',
      icon: PackageCheck,
      desc: 'Submerged in hot cold-pressed sesame oil and packed in airtight glass jars. Dispatched leakproof across India.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#EAE4DC]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2E7D32] bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Handcrafted Method
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123824] tracking-tight">
            How We Make Every Jar
          </h2>
          <p className="mt-2 text-sm text-[#5C5549]">
            Zero factory shortcuts. Just pure patience, authentic ingredients, and homestyle care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#EAE4DC] flex flex-col justify-between hover:border-[#1B5E20] transition-colors duration-200 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#1B5E20]/40 group-hover:text-[#1B5E20] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-[#EAE4DC] flex items-center justify-center text-[#123824]">
                      <Icon className="w-5 h-5 text-[#2E7D32]" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#123824] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
