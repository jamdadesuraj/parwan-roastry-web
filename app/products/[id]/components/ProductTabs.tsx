"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "./product.data";

const TABS = [
  "Description",
  "Specifications",
  "Packaging & Delivery",
  "FAQs",
] as const;
type Tab = (typeof TABS)[number];

const InfoTable = ({ rows }: { rows: { label: string; value: string }[] }) => (
  <dl className="overflow-hidden rounded-xl border border-slate-200">
    {rows.map((row, i) => (
      <div
        key={row.label}
        className={`grid grid-cols-1 gap-1 px-4 py-3 text-sm sm:grid-cols-[220px_1fr] sm:gap-4 ${
          i % 2 === 0 ? "bg-[#faf8f3]" : "bg-white"
        }`}
      >
        <dt className="font-semibold text-slate-900">{row.label}</dt>
        <dd className="text-slate-600">{row.value}</dd>
      </div>
    ))}
  </dl>
);

const ProductTabs = ({ product }: { product: Product }) => {
  const [tab, setTab] = useState<Tab>("Description");

  return (
    <div className="rounded-2xl border border-[#e3e8df] bg-white shadow-sm">
      <div
        role="tablist"
        aria-label="Product information"
        className="flex gap-1 overflow-x-auto border-b border-slate-200 px-3 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-5"
      >
        {TABS.map((t) => {
          const active = tab === t;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t)}
              className={`relative shrink-0 whitespace-nowrap px-4 py-3 font-serif text-sm font-bold transition ${
                active
                  ? "text-green-900"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {t}
              <span
                className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full transition ${
                  active ? "bg-green-800" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="p-5 sm:p-7">
        {tab === "Description" && (
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-slate-600">
            {product.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {tab === "Specifications" && <InfoTable rows={product.specs} />}

        {tab === "Packaging & Delivery" && (
          <InfoTable rows={product.packaging} />
        )}

        {tab === "FAQs" && (
          <div className="space-y-3">
            {product.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-[#faf8f3] px-4 py-3"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-serif text-sm font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
