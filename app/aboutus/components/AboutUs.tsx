"use client";

import React from "react";
import { Bean, ShieldCheck, Tag } from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#f8faf1] px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-2xl bg-[#f8faf1] md:min-h-100 md:flex-row">
        {/* Left Content */}
        <div className="relative z-10 flex w-full items-center py-8 md:w-[48%] md:py-10 lg:w-[46%]">
          <div className="max-w-xl">
            {/* Label */}
            <div className="mb-4 flex items-center gap-2">
              <Bean size={17} strokeWidth={2.5} className="text-[#438c35]" />
              <span className="text-sm font-bold font-serif tracking-wide text-[#438c35]">
                About Parwan Roastery Abu Dhabi
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-extrabold   text-[#171717] md:text-5xl lg:text-[48px]">
              Parwan Roastery Abu Dhabi; nuts and spices
              <br />
              <span className="text-[#28772b] font-serif">
                supplier Abu Dhabi
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-132.5 text-sm leading-6 text-[#555] md:text-[15px]">
              Parwan Roastery Abu Dhabi offers a varied selection of food
              products, including nuts, seeds, spices, dried fruits, lentils,
              candies and specialty chocolate. We help customers explore our
              product range and contact us for product information, availability
              and pricing.
            </p>

            {/* Features */}
            <div className="mt-8 flex w-full flex-col gap-5 md:flex-row md:flex-nowrap md:items-stretch md:gap-0">
              {/* Feature 2 */}
              <div className="flex flex-1 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e7f2dc]">
                  <ShieldCheck
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#438c35]"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-[#252525]">
                    Premium Quality
                  </h3>
                  <p className="mt-1 max-w-26.25 text-[11px] leading-4 text-[#666]">
                    Carefully graded and tested
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-auto w-px shrink-0 bg-[#d9dfd2] md:mx-4 md:block" />

              {/* Feature 3 */}
              <div className="flex flex-1 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e7f2dc]">
                  <Tag size={21} strokeWidth={1.8} className="text-[#438c35]" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-[#252525]">
                    Wholesale Prices
                  </h3>
                  <p className="mt-1 max-w-26.25 text-[11px] leading-4 text-[#666]">
                    Best rates on bulk orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-75 w-full md:min-h-0 md:w-[54%]">
          <Image
            src="/img/about/3.jpg"
            alt="Farmers working together in the field"
            fill
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 hidden w-40 bg-linear-to-r from-[#f8faf1] via-[#f8faf1]/80 to-transparent md:block" />

          {/* Overall subtle fade */}
          <div className="absolute inset-0 bg-linear-to-r from-[#f8faf1]/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
