import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, selectedSize: string, quantity?: number) => void;
  removeItem: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotalItems: () => number;
  getWhatsAppOrderUrl: (customerNotes?: string) => string;
}

const STORAGE_KEY = 'veettile_achaar_cart_v1';

const getInitialItems = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const persistItems = (items: CartItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore local storage errors
  }
};

export const useCartStore = create<CartState>((set, get) => ({
  items: getInitialItems(),
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (product, selectedSize, quantity = 1) => {
    const variant = product.variants.find(v => v.size === selectedSize) || product.variants[0];
    const price = variant ? variant.price : 0;

    set(state => {
      const existingIndex = state.items.findIndex(
        i => i.productId === product.id && i.selectedSize === selectedSize
      );

      let newItems: CartItem[];
      if (existingIndex > -1) {
        newItems = [...state.items];
        newItems[existingIndex].quantity += quantity;
      } else {
        newItems = [
          ...state.items,
          {
            productId: product.id,
            product,
            selectedSize,
            price,
            quantity
          }
        ];
      }
      persistItems(newItems);
      return { items: newItems, isOpen: true };
    });
  },

  removeItem: (productId, selectedSize) => {
    set(state => {
      const newItems = state.items.filter(
        i => !(i.productId === productId && i.selectedSize === selectedSize)
      );
      persistItems(newItems);
      return { items: newItems };
    });
  },

  updateQuantity: (productId, selectedSize, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId, selectedSize);
      return;
    }
    set(state => {
      const newItems = state.items.map(item => {
        if (item.productId === productId && item.selectedSize === selectedSize) {
          return { ...item, quantity };
        }
        return item;
      });
      persistItems(newItems);
      return { items: newItems };
    });
  },

  clearCart: () => {
    persistItems([]);
    set({ items: [] });
  },

  getSubtotal: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getTotalItems: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getWhatsAppOrderUrl: (customerNotes = '') => {
    const { items, getSubtotal } = get();
    if (items.length === 0) return '';

    const phone = '919747104005'; // Verified official phone from Linktree
    let text = `*New Order Request — Veettile Achaar (വീട്ടിലെ അച്ചാർ)*\n\n`;
    text += `Hello IRIS Food & Kitchen Products team, I would like to place an order from your website:\n\n`;

    items.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}* (${item.selectedSize})\n`;
      text += `   Qty: ${item.quantity} × ₹${item.price} = *₹${item.price * item.quantity}*\n`;
    });

    text += `\n*Subtotal: ₹${getSubtotal()}*\n`;
    text += `(Standard packing included • Delivery calculated by pin code)\n\n`;

    if (customerNotes.trim()) {
      text += `*Delivery / Special Note:* ${customerNotes.trim()}\n\n`;
    }

    text += `Please confirm product availability and payment details. Thank you!`;

    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  }
}));
