"use client";

import React, { useId, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import InquiryModel from "@/app/components/InquiryModel";
import ThemeBtnOne from "@/app/components/ThemeBtnOne";

const WHATSAPP_NUMBER = "971508221435";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Parwan Roastery, I have a question about your products.",
)}`;

const CATEGORIES = [
  "All",
  "Ordering",
  "Pricing & Payment",
  "Delivery",
  "Products & Quality",
] as const;
type Category = (typeof CATEGORIES)[number];

type FaqItem = {
  id: string;
  category: Exclude<Category, "All">;
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    id: "how-to-order",
    category: "Ordering",
    q: "How do I place a wholesale order?",
    a: "Browse our products, then send an enquiry through the form, WhatsApp or email with the product, quantity and delivery location. We reply with a quotation, and your order is confirmed once you accept it.",
  },
  {
    id: "moq",
    category: "Ordering",
    q: "What is the minimum order quantity (MOQ)?",
    a: "The MOQ depends on the product and is shown on each product page. Most items start from 25 kg. Contact us if you need a smaller trial quantity.",
  },
  {
    id: "samples",
    category: "Ordering",
    q: "Can I get a sample before ordering in bulk?",
    a: "Yes. Mention it in your enquiry and we will arrange a sample. Samples may be chargeable depending on the product.",
  },
  {
    id: "private-label",
    category: "Ordering",
    q: "Do you offer private label or custom packing?",
    a: "Yes. We can pack under your own brand in retail pouches or bulk cartons. Minimum quantities apply, so send us your requirements for a quote.",
  },
  {
    id: "wholesale-pricing",
    category: "Pricing & Payment",
    q: "Do you offer discounts on larger quantities?",
    a: "Yes. Prices drop as quantities increase. Tell us how much you need and how often you order, and we will share the best rate we can offer.",
  },
  {
    id: "price-changes",
    category: "Pricing & Payment",
    q: "Why do the prices on the website change?",
    a: "Nut and dried fruit prices follow the market, so website prices are indicative. The final price is the one on your confirmed quotation.",
  },
  {
    id: "payment-methods",
    category: "Pricing & Payment",
    q: "What payment methods do you accept?",
    a: "Payment methods, VAT and terms are stated on your quotation or invoice. Please confirm them with our team before ordering.",
  },
  {
    id: "delivery-area",
    category: "Delivery",
    q: "Where do you deliver?",
    a: "We deliver across Abu Dhabi and the rest of the UAE. Export shipments can be arranged on request.",
  },
  {
    id: "delivery-time",
    category: "Delivery",
    q: "How long does delivery take?",
    a: "Stocked items usually ship within 1 to 3 working days. Larger or custom-packed orders may take longer, and we will confirm the date on your quote.",
  },
  {
    id: "damaged",
    category: "Delivery",
    q: "What if my order arrives damaged or incorrect?",
    a: "Please inspect the goods on delivery and report any issue within 24 hours with photos of the product and packaging. Approved claims are replaced or credited.",
  },
  {
    id: "freshness",
    category: "Products & Quality",
    q: "How fresh are your products and how long do they last?",
    a: "We source fresh stock, store it in controlled conditions and pack to order. Most nuts and dried fruits have a shelf life of around 12 months when kept in a cool, dry place.",
  },
  {
    id: "preservatives",
    category: "Products & Quality",
    q: "Are your products natural, with no preservatives?",
    a: "Our products are natural and carefully graded. Some dried fruits may contain sulphites, so please check the label or ask us about a specific product.",
  },
  {
    id: "allergens",
    category: "Products & Quality",
    q: "Do your products contain allergens?",
    a: "Our products may contain or come into contact with nuts, sesame, sulphites and other allergens. Contact us if you have specific requirements.",
  },
];

const Faq = () => {
  const baseId = useId();
  const [category, setCategory] = useState<Category>("All");
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const items = useMemo(
    () =>
      category === "All" ? FAQS : FAQS.filter((f) => f.category === category),
    [category],
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="w-full bg-[#faf8f3] px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="font-serif text-xs font-bold uppercase tracking-[0.2em]">
            <span className="text-green-600">Got </span>
            <span className="text-green-900">Questions?</span>
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">
            Everything you need to know about ordering, pricing, delivery and
            quality from Parwan Roastery.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Left: chips + accordion */}
          <div className="min-w-0">
            {/* Category chips */}
            <div
              role="tablist"
              aria-label="FAQ categories"
              className="mb-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {CATEGORIES.map((c) => {
                const active = category === c;
                return (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setCategory(c);
                      setOpenId(null);
                    }}
                    className={`h-9 shrink-0 whitespace-nowrap rounded-full border px-4 text-xs font-semibold transition ${
                      active
                        ? "border-green-800 bg-green-800 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-green-700 hover:text-green-800"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {items.map((item) => {
                const open = openId === item.id;
                const panelId = `${baseId}-${item.id}-panel`;
                const btnId = `${baseId}-${item.id}-btn`;

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border bg-white transition-all duration-300 ${
                      open
                        ? "border-green-200 shadow-[0_6px_20px_rgba(20,60,40,0.08)]"
                        : "border-[#e3e8df] shadow-sm hover:border-green-200"
                    }`}
                  >
                    <h3>
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenId(open ? null : item.id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start sm:px-6 sm:py-5"
                      >
                        <span className="font-serif text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
                          {item.q}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            open
                              ? "bg-green-800 text-white"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              open ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: help card */}
          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-[#e3e8df] bg-white shadow-[0_6px_24px_rgba(20,60,40,0.08)]">
              <div className="bg-gradient-to-br from-green-900 to-green-800 px-6 py-6 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-green-200">
                  Need help?
                </p>
                <h3 className="mt-1.5 font-serif text-xl font-bold leading-tight">
                  Still have questions?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-green-100/80">
                  Our team replies within 24 hours with pricing, samples and
                  availability.
                </p>
              </div>

              <div className="space-y-3 p-6">
                <InquiryModel />

                <ThemeBtnOne
                  text="Chat on WhatsApp"
                  url="https://wa.me/971508221435"
                  icon={<BsWhatsapp size={16} />}
                  className={`mt-3 h-11 w-full rounded-full border px-4 text-sm font-serif font-semibold text-nowrap cursor-pointer border-green-700 bg-white text-black`}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Faq;
