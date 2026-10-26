import React, { useState } from 'react';
import { Package, Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { BulkEnquiryData } from '../types';

export const BulkOrderSection: React.FC = () => {
  const [formData, setFormData] = useState<BulkEnquiryData>({
    name: '',
    organization: '',
    phone: '',
    email: '',
    productInterest: 'Assorted Pickles (Mango, Prawn, Lime)',
    quantityKg: '5 - 10 kg',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const phone = '919747104005';
    let text = `*Bulk & Event Enquiry — Veettile Achaar*\n\n`;
    text += `*Name:* ${formData.name}\n`;
    if (formData.organization) text += `*Organization/Event:* ${formData.organization}\n`;
    text += `*Phone:* ${formData.phone}\n`;
    if (formData.email) text += `*Email:* ${formData.email}\n`;
    text += `*Product Interest:* ${formData.productInterest}\n`;
    text += `*Approx. Quantity:* ${formData.quantityKg}\n`;
    if (formData.destination) text += `*Delivery Destination:* ${formData.destination}\n`;
    if (formData.message) text += `*Message/Notes:* ${formData.message}\n\n`;
    text += `Please share bulk pricing, lead time, and sample availability. Thank you!`;

    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="bulk" className="py-20 sm:py-28 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#123824] to-[#0A2417] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Context & Offerings */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFEB00] bg-white/10 px-3.5 py-1.5 rounded-full self-start mb-4">
                Catering, Events & Retail
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Bulk Orders & Special Event Supplies
              </h2>

              <p className="font-malayalam font-bold text-sm text-emerald-300 mb-6">
                വിവാഹങ്ങൾക്കും സദ്യകൾക്കും കാറ്ററിംഗിനും ആവശ്യമായ അച്ചാറുകൾ മൊത്തമായി ഓർഡർ ചെയ്യാം.
              </p>

              <p className="text-sm text-stone-300 leading-relaxed mb-8">
                Hosting a wedding, Sadya feast, housewarming, or running a gourmet restaurant? We supply freshly prepared bulk barrels and leakproof travel packs across Kerala, pan-India, and for overseas travelers.
              </p>

              <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-stone-200">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-[#FFEB00] flex-shrink-0" />
                  <span>Custom pack sizes: 1kg, 5kg, 10kg, and 25kg food-grade containers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFEB00] flex-shrink-0" />
                  <span>Freshly made to order — guaranteed maximum shelf life</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFEB00] flex-shrink-0" />
                  <span>Direct hotline with our kitchen team in Irinjalakuda</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-stone-400 block mb-1">Direct Kitchen Helpline:</span>
                <a
                  href="tel:+919747104005"
                  className="font-serif text-xl font-bold text-[#FFEB00] hover:underline"
                >
                  +91 97471 04005
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white text-[#1A1917] p-6 sm:p-10 rounded-3xl shadow-xl">
              {submitted ? (
                <div className="text-center py-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1B5E20] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#123824] mb-2">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-[#5C5549] max-w-md mb-6">
                    Thank you, <strong className="text-[#123824]">{formData.name}</strong>. Our kitchen manager will contact you at <strong className="text-[#123824]">{formData.phone}</strong> shortly with bulk pricing and sample availability.
                  </p>

                  <button
                    onClick={handleSendViaWhatsApp}
                    className="px-6 py-3.5 rounded-full bg-[#1B5E20] hover:bg-[#123824] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4 text-[#FFEB00]" />
                    <span>Send details directly via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-stone-500 hover:text-stone-800 underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#123824] mb-2">
                    Request a Bulk Quote
                  </h3>
                  <p className="text-xs text-[#716A60] mb-4">
                    Fill out your requirements below, or send us a WhatsApp message directly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3830] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anjali Menon"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC2] text-sm text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3D3830] mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98460 12345"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC2] text-sm text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3830] mb-1">
                        Event / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Family Wedding / Caterers"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC2] text-sm text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3D3830] mb-1">
                        Delivery City / State
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Kochi / Bangalore / Dubai"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC2] text-sm text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3D3830] mb-1">
                        Product of Interest
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC2] text-sm text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20] bg-white"
                      >
                        <option value="Signature Mango Pickle">Signature Mango Pickle</option>
                        <option value="Fresh Coastal Prawn Pickle">Fresh Coastal Prawn Pickle</option>
                        <option value="Tangy Lime Pickle">Tangy Lime Pickle</option>
                        <option value="Malabar Beef Roast Pickle">Malabar Beef Roast Pickle</option>
                        <option value="Whole Garlic Pickle">Whole Garlic Pickle</option>
                        <option value="Assorted Mixed Pickles">Assorted Mixed Pickles</option>
                        <option value="Homemade Sambar / Rasam Spices">Homemade Sambar / Rasam Spices</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3D3830] mb-1">
                        Estimated Quantity
                      </label>
                      <select
                        value={formData.quantityKg}
                        onChange={(e) => setFormData({ ...formData, quantityKg: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC2] text-sm text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20] bg-white"
                      >
                        <option value="5 - 10 kg">5 – 10 kg</option>
                        <option value="10 - 25 kg">10 – 25 kg</option>
                        <option value="25 - 50 kg">25 – 50 kg</option>
                        <option value="50 kg+ (Commercial / Feast)">50 kg+ (Commercial / Feast)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3D3830] mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify dates, packing preferences (e.g. leakproof NRI packing), or questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CDC2] text-sm text-[#123824] focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-[#123824] hover:bg-[#1B5E20] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#FFEB00]" />
                      <span>Submit Bulk Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-3.5 bg-[#2E7D32] hover:bg-emerald-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
