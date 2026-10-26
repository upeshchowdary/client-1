import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How can I place an order?',
      a: 'You can add items to your online cart on this website and click "Dispatch via WhatsApp" to instantly send an encoded itemized order directly to our kitchen team (+91 97471 04005). You can also send a direct message on Instagram (@veettile_achaar) or call us directly.'
    },
    {
      q: 'What product sizes are available?',
      a: 'Standard pickles (Mango, Lime, Garlic, Prawn, Beef) are available in 250g and 400g glass jars. For catering, large families, and NRI travel packs, 1kg, 5kg, and 10kg food-grade airtight leakproof packs are available on demand.'
    },
    {
      q: 'How is delivery handled across India and overseas?',
      a: 'Orders within Kerala are delivered within 24 to 48 hours via fast courier. Pan-India shipments (Bangalore, Chennai, Mumbai, Delhi, Hyderabad) take 3 to 5 business days. For NRI customers traveling to the Middle East, UK, US, or Europe, we provide specialized vacuum-sealed, leakproof bubble packing that is airport security compliant.'
    },
    {
      q: 'Are bulk and event orders accepted?',
      a: 'Yes, absolutely! We regularly cater for weddings, Onam Sadya feasts, church gatherings, housewarmings, and restaurant distribution. Please use the Bulk Order enquiry form above or WhatsApp us at least 3 to 5 days in advance so we can prepare fresh batches.'
    },
    {
      q: 'How should I store these pickles?',
      a: 'Because our pickles contain no synthetic chemical preservatives, always use a clean, completely dry stainless steel or ceramic spoon. Keep the top layer of oil covering the pickle surface. Vegetarian pickles (Mango, Lime, Garlic) keep wonderfully at ambient room temperature in a dry pantry for 12 months. Non-vegetarian pickles (Prawn, Beef, Fish) should be refrigerated after opening.'
    },
    {
      q: 'Are there any artificial colors, preservatives, or MSG?',
      a: 'Never. IRIS Food & Kitchen Products is committed to 100% natural homestyle food. We use pure cold-pressed gingelly (sesame) oil, naturally fermented vinegar, hand-roasted spices, and unrefined sea salt. We hold valid FSSAI License 213252020000459.'
    },
    {
      q: 'What is your return or replacement policy?',
      a: 'If any jar arrives damaged in transit or compromised during shipping, take a quick photo of the parcel and WhatsApp our helpline (+91 97471 04005) within 24 hours. We will promptly dispatch a fresh replacement jar or process an immediate refund.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2E7D32] bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Customer Information
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#123824] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[#5C5549]">
            Everything you need to know about our recipes, delivery, packaging, and storage.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#EAE4DC] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#123824]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#123824] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-[#1B5E20]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#5C5549] leading-relaxed border-t border-[#EAE4DC]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Box */}
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#123824]">Have an ingredient or allergy question?</h4>
              <p className="text-xs text-[#5C5549]">Our culinary team in Irinjalakuda will assist you immediately.</p>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=919747104005"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#1B5E20] hover:bg-[#123824] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors flex-shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
