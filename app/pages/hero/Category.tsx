import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CropCategory = {
  name: string;
  slug: string;
  shortDesc: string;
  image: string;
  accent?: string; // color class for the "Shop now" link
};

const categories: CropCategory[] = [
  {
    name: "Nuts",
    slug: "nuts",
    shortDesc: "Premium nuts, seeds, spices and specialty products",
    image: "/img/category/1.png",
    accent: "text-green-800",
  },
  {
    name: "Organic Nuts",
    slug: "organic-nuts",
    shortDesc: "Premium nuts, seeds, spices and specialty products",
    image: "/img/category/2.png",
    accent: "text-green-800",
  },
  {
    name: "Dried Fruits",
    slug: "dried-fruits",
    shortDesc: "Premium nuts, seeds, spices and specialty products",
    image: "/img/category/3.png",
    accent: "text-green-800",
  },
  {
    name: "Superfoods",
    slug: "superfoods",
    shortDesc: "Premium nuts, seeds, spices and specialty products",
    image: "/img/category/4.png",
    accent: "text-green-800",
  },
  {
    name: "Breakfast Cereals",
    slug: "breakfast-cereals",
    shortDesc: "Premium nuts, seeds, spices and specialty products",
    image: "/img/category/5.png",
    accent: "text-green-800",
  },
];

/* Decorative leaf – swap for <Image src="/img/leaf.png" /> if you have an asset */
const LeafDecor = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={`pointer-events-none absolute text-green-700/15 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M100 8C150 40 175 95 100 192C25 95 50 40 100 8Z" />
    <path
      d="M100 192V50"
      stroke="white"
      strokeOpacity="0.6"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const Category = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 sm:px-6 lg:px-12">
      {/* Background leaves */}
      <LeafDecor className="-left-10 top-4 h-44 w-44 rotate-[-25deg] md:h-56 md:w-56" />
      <LeafDecor className="-left-14 top-32 h-36 w-36 rotate-60 md:h-48 md:w-48" />
      <LeafDecor className="-right-10 top-2 h-44 w-44 rotate-30 md:h-60 md:w-60" />

      <div className="relative mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-serif text-xs font-bold uppercase tracking-[0.2em]">
              <span className="text-green-600">Shop </span>
              <span className="text-green-900">by Category</span>
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              Explore Our Product Categories
            </h2>
            <p className="mt-2 text-sm text-slate-900">
              From almonds and cashews to aromatic spices, nutritious seeds,
              dried fruits and specialty sweets, explore a varied product
              selection in one convenient place.
            </p>
          </div>

          <Link
            href="/categories"
            className="group flex items-center gap-2 font-serif text-sm font-semibold text-green-900"
          >
            View All Categories
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products-list/${category.slug}`}
              className="group relative block aspect-3/4 overflow-hidden rounded-2xl bg-[#3a3835] shadow-[0_6px_20px_rgba(60,40,10,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(60,40,10,0.16)]"
            >
              {/* Full-bleed image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 14vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Top-left cream gradient: strongest in the corner, fades diagonally */}
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, #f6efe3 0%, rgba(246,239,227,0.85) 25%, rgba(246,239,227,0.4) 45%, rgba(246,239,227,0) 65%)",
                }}
              />

              {/* Text overlay */}
              <div className="absolute inset-x-0 top-0 p-4">
                <h3 className="truncate font-serif text-[13px] font-extrabold uppercase tracking-wide text-slate-900">
                  {category.name}
                </h3>
                <p className="mt-2 text-xs leading-snug text-slate-600">
                  {category.shortDesc}
                </p>
                <span
                  className={`mt-2 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide font-serif ${
                    category.accent ?? "text-green-800"
                  }`}
                >
                  Shop now
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
