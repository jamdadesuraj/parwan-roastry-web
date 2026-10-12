"use client";

import React from "react";
import { Bean } from "lucide-react";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#f8fbf5] px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 lg:gap-12">
        {/* Right Image */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <Image
            src="/img/about/3.jpg"
            alt=""
            width={700}
            height={520}
            className="h-80 w-full object-cover"
          />

          {/* Green Overlay Card */}
          <div className="absolute left-5 top-5 w-36.25 rounded-lg border border-green-400/30 bg-[#26752b]/85 p-4 text-white shadow-sm backdrop-blur-sm">
            <Bean size={15} strokeWidth={2} className="mb-3" />

            <p className="text-[11px] font-semibold leading-4">
              Join Thousands of Buyers
            </p>

            <p className="mt-2 text-[10px] leading-4 text-green-100">
              Grow Together,
              <br />
              Stronger Together.
            </p>
          </div>
        </div>
        {/* Left Content */}
        <div className="relative z-10 flex w-full items-center">
          <div className="w-full max-w-135">
            {/* Label */}
            <div className="mb-4 flex items-center gap-2">
              <Bean size={17} strokeWidth={2.5} className="text-[#438c35]" />

              <span className="text-sm font-serif font-bold tracking-wide text-[#438c35]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl font-extrabold leading-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-[40px]">
              Quality You Can Taste,
              <br />
              <span className="font-serif text-[#28772b]">
                Freshness You Can Trust
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
