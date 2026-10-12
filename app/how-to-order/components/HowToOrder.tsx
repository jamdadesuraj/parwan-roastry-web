import InquiryModel from "@/app/components/InquiryModel";

import { Search, MessageSquareText, FileText, Truck } from "lucide-react";
import React from "react";

type Step = {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    id: "step-1",
    number: "01",
    icon: Search,
    title: "Browse Products",
    description: "Explore our nuts, dried fruits, spices and more.",
  },
  {
    id: "step-2",
    number: "02",
    icon: MessageSquareText,
    title: "Send Enquiry",
    description: "Share your product, quantity and delivery location.",
  },
  {
    id: "step-3",
    number: "03",
    icon: FileText,
    title: "Get a Quote",
    description: "Receive bulk pricing and samples within 24 hours.",
  },
  {
    id: "step-4",
    number: "04",
    icon: Truck,
    title: "Confirm & Deliver",
    description: "Approve the order and we deliver fresh to your door.",
  },
];

const HowToOrder = () => {
  return (
    <section className="w-full bg-[#faf8f3] px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="font-serif text-xs font-bold uppercase tracking-[0.2em]">
            <span className="text-green-600">Simple </span>
            <span className="text-green-900">Process</span>
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-5xl">
            How To Order
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 md:text-base">
            Four easy steps from enquiry to delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
          {/* Horizontal line (desktop) */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-green-300 lg:block"
            aria-hidden="true"
          />
          {/* Vertical line (mobile) */}
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 -translate-x-1/2 border-l-2 border-dashed border-green-300 sm:hidden"
            aria-hidden="true"
          />

          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Node */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-green-700 bg-white ring-8 ring-[#faf8f3] transition-colors duration-300 group-hover:bg-green-700">
                  <Icon
                    className="h-7 w-7 text-green-700 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-700 font-serif text-[11px] font-bold text-white shadow-sm ring-2 ring-[#faf8f3] transition-colors duration-300 group-hover:bg-white group-hover:text-green-700">
                    {step.number}
                  </span>
                </div>

                {/* Card (flex-1 so all cards match height) */}
                <div className="relative z-10 mt-5 w-full flex-1 rounded-2xl border border-gray-100 bg-white px-5 py-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-200 group-hover:shadow-lg group-hover:shadow-green-900/5">
                  <h3 className="font-serif text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <InquiryModel />
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
