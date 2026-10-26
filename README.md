# Veettile Achaar (വീട്ടിലെ അച്ചാർ) — IRIS Food & Kitchen Products
### Premium Food E-Commerce & Brand Experience

A custom, agency-grade digital product built for **Veettile Achaar** (IRIS Food & Kitchen Products), an authentic homestyle artisanal pickle kitchen based in Irinjalakuda, Thrissur, Kerala.

---

## 🌟 Key Features

1. **Authentic Client Brand Identity:**
   - Features the verified circular emblem with Malayalam script (**വീട്ടിലെ അച്ചാർ**), chef mascot, and FSSAI License Number (**`213252020000459`**).
   - Sampled color palette: Kerala Leaf Green (`#1E824C`), Sunlit Mustard (`#FFDC33`), Deep Forest (`#123824`), and Warm Cream (`#FAF8F5`).

2. **Editorial Food Storytelling:**
   - Asymmetric split hero composition with warm morning light photography.
   - Dedicated editorial spotlight on the slow-cured **Signature Kadumanga Achaar**.
   - Traditional Kerala Adukkala kitchen storytelling with Ammikkallu granite grinding stone.

3. **E-Commerce & Cart Engine:**
   - Interactive catalogue with instant category filtering (Vegetarian, Non-Veg, Spice Powders, Gift Sets).
   - Live search input matching product names, ingredients, and Malayalam text.
   - Multi-pack variant selector (250g, 400g, 1kg) with dynamic real-time price updates.
   - Slide-out Cart Drawer with quantity controls, local storage persistence, and one-click formatted WhatsApp order dispatch to `+91 97471 04005`.

4. **Event & Bulk Catering Workflow:**
   - Dedicated inquiry pipeline for weddings, feasts, and restaurant supply.
   - Direct quote request form with on-screen confirmation and instant WhatsApp link.

5. **Production Quality & Accessibility:**
   - WCAG 2.2 compliant contrast, keyboard navigation, and responsive touch targets.
   - Fully responsive across desktop (1920×1080, 1440×900) and mobile (390×844, 360×800).
   - Zero console errors; fast initial paint.

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Build production bundle
npm run build

# 3. Start production preview server (default: port 3000)
npx vite preview --port 3000

# 4. Or start dev server with HMR
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📂 Project Architecture

```
├── docs/
│   ├── brand-research.md          # Real client analysis & Instagram data
│   ├── product-inventory.md       # Canonical product model, sizes & prices
│   ├── asset-manifest.md          # Registry of authentic vs generated assets
│   ├── design-direction.md        # Art direction, typography & color tokens
│   ├── technical-architecture.md  # React + Vite + Zustand architecture
│   └── testing-report.md          # Comprehensive end-to-end browser test log
├── public/
│   └── images/                    # Curated, optimized food photography & logo
├── src/
│   ├── components/                # 15 custom section components + Cart Drawer + Modal
│   ├── data/                      # Structured product data model
│   ├── store/                     # Zustand cart store with WhatsApp generator
│   ├── types/                     # TypeScript interfaces
│   ├── App.tsx                    # Main storefront orchestrator
│   └── main.tsx                   # React root entry point
```

---

## 📄 License & Attributions
* **Client:** IRIS Food & Kitchen Products (Veettile Achaar)
* **FSSAI License:** 213252020000459
* **Helpline / Orders:** +91 97471 04005
