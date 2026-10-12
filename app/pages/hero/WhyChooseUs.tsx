import React from "react";
import Image from "next/image";
import { BadgeCheck, LayoutGrid, Tag, Truck } from "lucide-react";

type Feature = {
  id: number;
  title: string;
  text: string;
  icon: React.ElementType;
};

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Premium Quality",
    text: "Carefully graded & tested",
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: "Wide Variety",
    text: "Nuts, dried fruits, spices & more",
    icon: LayoutGrid,
  },
  {
    id: 3,
    title: "Wholesale Pricing",
    text: "Best rates on bulk orders",
    icon: Tag,
  },
  {
    id: 4,
    title: "Fast Delivery",
    text: "Across Abu Dhabi & the UAE",
    icon: Truck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#faf8f3]">
      {/* Background image: full section, anchored left */}
      <div className="relative h-48 w-full sm:h-60 lg:absolute lg:inset-0 lg:h-full">
        <Image
          src="/img/banner/b2.png"
          alt="Premium nuts, dried fruits and spices in a wooden scoop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />

        {/* Cream fade: image stays clear on the left, blends out before the text */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, rgba(250,248,243,0) 0%, rgba(250,248,243,0) 22%, rgba(250,248,243,0.9) 40%, #faf8f3 50%)",
          }}
        />
        {/* Mobile only: fade the bottom edge into the content below */}
        <div
          className="absolute inset-0 lg:hidden"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,248,243,0) 60%, #faf8f3 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative px-4 py-8 sm:px-8 lg:py-14 lg:pl-[36%] lg:pr-12">
        <p className="font-serif text-xs font-bold uppercase tracking-[0.2em]">
          <span className="text-green-600">Why </span>
          <span className="text-green-900">Choose Us</span>
        </p>
        <h2 className="mt-1 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
          Nature&apos;s Best, Delivered to You
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
          Premium nuts, dried fruits and spices for retailers, hotels and
          caterers, with consistent quality and reliable wholesale supply.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 lg:px-4 ${
                  index === 0 ? "lg:ps-0" : "lg:border-s lg:border-slate-200"
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100/80">
                  <Icon
                    className="h-6 w-6 text-green-800"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-sm font-bold leading-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
