import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandTrust } from './components/BrandTrust';
import { CategorySection } from './components/CategorySection';
import { ProductGrid } from './components/ProductGrid';
import { SignatureMangoStory } from './components/SignatureMangoStory';
import { TastingBoxSection } from './components/TastingBoxSection';
import { BrandStory } from './components/BrandStory';
import { BehindTheScenes } from './components/BehindTheScenes';
import { BulkOrderSection } from './components/BulkOrderSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { PRODUCTS } from './data/products';
import { Product } from './types';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const handleOpenSearch = () => {
    const el = document.querySelector('#shop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1917]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header */}
      <Header
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 3. Signature Hero */}
        <Hero />

        {/* 4. Brand Trust Pillars */}
        <BrandTrust />

        {/* 5. Shop by Category */}
        <CategorySection onSelectCategory={(cat) => setSelectedCategory(cat)} />

        {/* 6. Product Discovery Grid */}
        <ProductGrid
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onQuickView={(p) => setActiveModalProduct(p)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
        />

        {/* 7. Signature Mango Pickle Story */}
        <SignatureMangoStory />

        {/* 8. Product Discovery Packs / Combo Box */}
        <TastingBoxSection />

        {/* 9. Brand Heritage Story */}
        <BrandStory />

        {/* 10. Behind the Scenes Handcrafted Process */}
        <BehindTheScenes />

        {/* 11. Bulk Orders & Event Catering */}
        <BulkOrderSection />

        {/* 12. Real Instagram & Customer Reviews */}
        <ReviewsSection />

        {/* 13. FAQ Section */}
        <FAQSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <CartDrawer />
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Floating Mobile Sticky Action Bar */}
      <MobileBottomBar />
    </div>
  );
};

export default App;
