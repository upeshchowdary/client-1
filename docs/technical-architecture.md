# Technical Architecture — Veettile Achaar

## 1. Stack Selection
* **Core:** React 19 + TypeScript + Vite 6
* **Styling:** Modern Tailwind CSS + Custom CSS Design Tokens (HSL color model, responsive clamp typography, GPU-accelerated micro-animations)
* **Icons:** Lucide Icons (lightweight, zero-bloat, accessible SVG icons)
* **Cart & State Management:** Zustand with local storage persistence (cart retains items across page reloads)
* **Interactive Animations:** Lightweight CSS transitions & IntersectionObserver scroll reveals (respects `prefers-reduced-motion`)
* **Ordering Integration:**
  - Interactive Cart Drawer with live subtotal calculation, quantity adjustment, and pack variant switching.
  - One-click WhatsApp Ordering Dispatch generating URI-encoded order breakdowns directly to the official phone `+91 97471 04005`.
  - Direct Bulk Order Enquiry modal/section with client-side validation and confirmation feedback.

## 2. Directory Structure
```
c:\Users\UPESH CHOWDARY\Desktop\bot\
├── docs/
│   ├── brand-research.md
│   ├── product-inventory.md
│   ├── asset-manifest.md
│   ├── design-direction.md
│   └── technical-architecture.md
├── public/
│   └── images/
│       ├── brand/ (logo.png)
│       ├── hero/
│       ├── categories/
│       ├── products/
│       └── story/
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── BrandTrust.tsx
│   │   ├── CategorySection.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetailModal.tsx
│   │   ├── SignatureMangoStory.tsx
│   │   ├── TastingBoxSection.tsx
│   │   ├── BrandStory.tsx
│   │   ├── BehindTheScenes.tsx
│   │   ├── BulkOrderSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   └── CartDrawer.tsx
│   ├── data/
│   │   └── products.ts
│   ├── store/
│   │   └── cartStore.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
