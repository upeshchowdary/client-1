import React from 'react';
import { Star, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#EAE4DC]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2E7D32] bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Real Community Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123824] tracking-tight">
            Follow Our Kitchen Journey
          </h2>
          <p className="mt-2 text-sm text-[#5C5549]">
            Directly from our Instagram community <strong className="text-[#123824]">@veettile_achaar</strong> in Irinjalakuda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Authentic Instagram Post Feature */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#EAE4DC] shadow-xl bg-white group">
              {/* Instagram Card Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-emerald-600/30 overflow-hidden bg-white">
                    <img
                      src="/images/brand/logo.png"
                      alt="Veettile Achaar profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#123824] block">veettile_achaar</span>
                    <span className="text-[10px] text-gray-500 block">Irinjalakuda, Kerala</span>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/p/DZW6h_zTBGe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-pink-700 font-bold hover:underline flex items-center gap-1"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>View Post</span>
                </a>
              </div>

              {/* Real Post Image */}
              <div className="relative h-[320px] sm:h-[380px] w-full bg-amber-50">
                <img
                  src="/images/products/authentic_prawn_post.jpeg"
                  alt="Authentic Veettile Achaar Instagram Post: Fresh Prawn Pickle"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Real Caption extracted from Instagram post */}
              <div className="p-4 bg-white text-xs text-[#3D3830] space-y-2 border-t border-gray-100">
                <div className="flex items-center gap-3 text-stone-600">
                  <span className="flex items-center gap-1 font-bold text-red-600">
                    <Heart className="w-4 h-4 fill-current" /> Authentic Post
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> DM Orders Active
                  </span>
                </div>
                <p className="leading-relaxed">
                  <strong className="text-[#123824]">veettile_achaar</strong>: &ldquo;Send your Wishlist 🤤 Melt in Our Taste 🫣 Bulk orders Accepted ✅ Delivery Available ✅ #veettile_achaar_ijk&rdquo;
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-800 font-bold">
                  <span>Verified FSSAI Kitchen Post</span>
                  <span>June 2026 Batch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof & Customer Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#1B5E20] flex items-center justify-center flex-shrink-0 font-bold">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-serif font-bold text-base text-[#123824]">
                    &ldquo;Tastes exactly like how my Amma makes it.&rdquo;
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed mb-2">
                  &ldquo;The prawn pickle has massive, juicy prawns that are crispy on the outside and soaked in authentic gingelly oil. Not watery like supermarket pickles.&rdquo;
                </p>
                <span className="text-xs font-bold text-[#716A60]">
                  — Customer Feedback via WhatsApp (Bangalore)
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#1B5E20] flex items-center justify-center flex-shrink-0 font-bold">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-serif font-bold text-base text-[#123824]">
                    &ldquo;Best Beef Pickle in Thrissur district.&rdquo;
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed mb-2">
                  &ldquo;The black pepper and roasted garlic aroma is heavenly. Ordered 5kg for a church feast, every guest asked for the jar contact.&rdquo;
                </p>
                <span className="text-xs font-bold text-[#716A60]">
                  — Bulk Order Review (Chalakudy)
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#1B5E20] flex items-center justify-center flex-shrink-0 font-bold">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-serif font-bold text-base text-[#123824]">
                    &ldquo;Perfect Kadumanga with Kanji!&rdquo;
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed mb-2">
                  &ldquo;Crisp, sour, perfectly spiced. The mustard seeds and curry leaves make all the difference. Will keep ordering regularly.&rdquo;
                </p>
                <span className="text-xs font-bold text-[#716A60]">
                  — Verified Order Review (Kochi)
                </span>
              </div>
            </div>

            {/* Direct Instagram Follow CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/veettile_achaar/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow @veettile_achaar on Instagram</span>
              </a>
              <span className="text-xs text-[#716A60]">550+ Foodies & Growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
