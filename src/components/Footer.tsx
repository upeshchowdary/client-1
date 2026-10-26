import React from 'react';
import { ShieldCheck, Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123824] text-[#FAF8F5] pt-16 pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info & Logo Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md border-2 border-white/20 flex-shrink-0">
                <img
                  src="/images/brand/logo.png"
                  alt="Veettile Achaar Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white leading-tight">
                  Veettile Achaar
                </h3>
                <span className="font-malayalam font-bold text-sm text-[#FFEB00] block">
                  വീട്ടിലെ അച്ചാർ
                </span>
                <span className="text-xs text-emerald-200/80 block">
                  IRIS Food & Kitchen Products
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 max-w-sm">
              Handcrafted homestyle Kerala pickles and stone-ground spices prepared with cold-pressed gingelly oil, sea salt, and zero artificial preservatives.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-200">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold block">FSSAI Certified</span>
                <span className="font-mono text-xs font-semibold">Lic. 213252020000459</span>
              </div>
            </div>
          </div>

          {/* Categories Links */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FFEB00] mb-4">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Signature Cut Mango
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Fresh Coastal Prawns
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Sun-Cured Tangy Lime
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Malabar Beef Roast Pickle
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Whole Garlic Pickle
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Kerala Feast Trio Box
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Roasted Sambar & Rasam Masala
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Policies */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FFEB00] mb-4">
              Information & Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Heritage Story
                </a>
              </li>
              <li>
                <a href="#bulk" className="hover:text-white transition-colors text-amber-300 font-semibold">
                  Bulk & Event Catering
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Storage & Shelf Life
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Delivery & NRI Packing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Replacement Policy
                </a>
              </li>
              <li>
                <span className="text-stone-400">Privacy & Terms</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#FFEB00] mb-4">
              Kitchen Contacts
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Irinjalakuda, Thrissur District, Kerala, India</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href="https://api.whatsapp.com/send?phone=919747104005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFEB00] transition-colors font-semibold"
                >
                  +91 97471 04005
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/veettile_achaar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFEB00] transition-colors"
                >
                  @veettile_achaar
                </a>
              </div>

              <div className="pt-3">
                <a
                  href="https://linktr.ee/veettileachaar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/10"
                >
                  <span>Official Linktree</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p>
              © {new Date().getFullYear()} Veettile Achaar (വീട്ടിലെ അച്ചാർ). IRIS Food & Kitchen Products. All rights reserved.
            </p>
            <p className="text-[11px] text-stone-500 mt-1">
              FSSAI Lic. No. 213252020000459 · Authentic Kerala Homestyle Food
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
