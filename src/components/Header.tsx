import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Phone } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { useCartStore } from '../store/cartStore';

interface HeaderProps {
  onSelectCategory?: (category: string) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectCategory, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, category?: string) => {
    setMobileMenuOpen(false);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#EAE4DC]/80 py-2.5'
          : 'bg-[#FAF8F5] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1B5E20] rounded-xl p-1"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white shadow-md border-2 border-[#1B5E20]/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/brand/logo.png"
                alt="Veettile Achaar Authentic Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#123824] leading-tight">
                Veettile Achaar
              </span>
              <span className="font-malayalam font-bold text-xs sm:text-sm text-[#2E7D32] tracking-wide">
                വീട്ടിലെ അച്ചാർ <span className="font-sans font-normal text-[10px] text-[#716A60] ml-1">· IRIS Food</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#3D3830]">
            <button
              onClick={() => handleNavClick('#shop', 'all')}
              className="hover:text-[#1B5E20] transition-colors cursor-pointer"
            >
              All Pickles
            </button>
            <button
              onClick={() => handleNavClick('#shop', 'vegetarian')}
              className="hover:text-[#1B5E20] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
              Vegetarian
            </button>
            <button
              onClick={() => handleNavClick('#shop', 'non-vegetarian')}
              className="hover:text-[#1B5E20] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
              Non-Veg
            </button>
            <button
              onClick={() => handleNavClick('#shop', 'spices')}
              className="hover:text-[#1B5E20] transition-colors cursor-pointer"
            >
              Spice Powders
            </button>
            <button
              onClick={() => handleNavClick('#story')}
              className="hover:text-[#1B5E20] transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('#bulk')}
              className="hover:text-[#1B5E20] transition-colors cursor-pointer text-[#C62828] font-bold"
            >
              Bulk Orders
            </button>
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search products"
                className="p-2.5 rounded-full text-[#4A443B] hover:text-[#1B5E20] hover:bg-[#EAE4DC]/60 transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Direct WhatsApp Callout */}
            <a
              href="https://api.whatsapp.com/send?phone=919747104005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp enquiry"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#123824] bg-emerald-100/70 hover:bg-emerald-200/70 border border-emerald-300/60 px-3 py-2 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-800" />
              <span>WhatsApp</span>
            </a>

            {/* Shopping Bag Trigger with Badge */}
            <button
              onClick={openCart}
              aria-label={`Shopping Cart with ${totalItems} items`}
              className="relative p-2.5 rounded-full bg-[#123824] text-white hover:bg-[#1B5E20] shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 px-3.5 sm:px-4"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-bold tracking-wider">CART</span>
              {totalItems > 0 && (
                <span className="bg-[#FFEB00] text-[#123824] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2.5 rounded-xl text-[#3D3830] hover:bg-[#EAE4DC]/80 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#EAE4DC] shadow-xl py-6 px-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-base font-semibold text-[#2C2720]">
            <button
              onClick={() => handleNavClick('#shop', 'all')}
              className="text-left py-2 border-b border-[#EAE4DC]/60 flex items-center justify-between"
            >
              <span>All Pickles & Combos</span>
              <span className="text-xs bg-[#EAE4DC] px-2 py-0.5 rounded-full font-sans">Full Menu</span>
            </button>
            <button
              onClick={() => handleNavClick('#shop', 'vegetarian')}
              className="text-left py-2 border-b border-[#EAE4DC]/60 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              Vegetarian Pickles (Mango, Lime, Garlic)
            </button>
            <button
              onClick={() => handleNavClick('#shop', 'non-vegetarian')}
              className="text-left py-2 border-b border-[#EAE4DC]/60 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
              Non-Vegetarian Pickles (Prawn, Beef)
            </button>
            <button
              onClick={() => handleNavClick('#shop', 'spices')}
              className="text-left py-2 border-b border-[#EAE4DC]/60"
            >
              Spice Powders (Sambar, Rasam, Masala)
            </button>
            <button
              onClick={() => handleNavClick('#story')}
              className="text-left py-2 border-b border-[#EAE4DC]/60"
            >
              Our Heritage Kitchen Story
            </button>
            <button
              onClick={() => handleNavClick('#bulk')}
              className="text-left py-2 text-[#C62828] font-bold flex items-center justify-between"
            >
              <span>Bulk & Catering Orders</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-sans">Enquire</span>
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="text-left py-2 text-[#5A544A]"
            >
              Frequently Asked Questions
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=919747104005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1B5E20] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Order via WhatsApp (+91 97471 04005)</span>
              </a>
              <a
                href="https://www.instagram.com/veettile_achaar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-neutral-100 text-[#123824] rounded-xl font-semibold flex items-center justify-center gap-2 border border-neutral-300"
              >
                <InstagramIcon className="w-4 h-4 text-pink-700" />
                <span>Follow @veettile_achaar on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
