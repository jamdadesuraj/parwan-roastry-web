"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import InquiryModel from "@/app/components/InquiryModel";
import { useRouter } from "next/navigation";

type Unit = "kg" | "gm" | "pack" | "piece";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  mrp: number;
  unit: Unit;
  rating: number;
  reviews: number;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cashew White",
    image: "/img/products/p1.jpg",
    price: 38,
    mrp: 50,
    unit: "kg",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Raisins Black Jumbo",
    image: "/img/products/p2.png",
    price: 30,
    mrp: 50,
    unit: "kg",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    name: "Raisins Golden Jumbo",
    image: "/img/products/p3.jpg",
    price: 30,
    mrp: 50,
    unit: "kg",
    rating: 4.6,
    reviews: 87,
  },
  {
    id: 4,
    name: "Cinnamon Stick",
    image: "/img/products/p4.jpg",
    price: 15.75,
    mrp: 20,
    unit: "kg",
    rating: 4.5,
    reviews: 72,
  },
  {
    id: 5,
    name: "Almond Raw",
    image: "/img/products/p5.jpg",
    price: 180,
    mrp: 200,
    unit: "kg",
    rating: 4.7,
    reviews: 110,
  },
  {
    id: 6,
    name: "Saffron",
    image: "/img/products/p6.jpg",
    price: 13.33,
    mrp: 15,
    unit: "gm",
    rating: 4.8,
    reviews: 96,
  },
];

const getDiscount = (price: number, mrp: number) =>
  Math.round(((mrp - price) / mrp) * 100);

// Avoid long decimals like 4.670000000000002
const formatPrice = (n: number) => Number(n.toFixed(2)).toString();

const FeaturedProducts = () => {
  const router = useRouter();
  const trackRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);

  // Work out how many dots are needed and which one is active
  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const totalPages = Math.max(
      1,
      Math.ceil(el.scrollWidth / el.clientWidth - 0.05),
    );
    setPages(totalPages);

    if (maxScroll <= 0 || totalPages === 1) {
      setActive(0);
      return;
    }
    const progress = el.scrollLeft / maxScroll;
    setActive(Math.round(progress * (totalPages - 1)));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#faf8f3] px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">
            Discover Our Featured Products
          </h2>

          <Link
            href="/products-list"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-serif text-xs font-bold text-slate-900 shadow-sm transition hover:border-green-700 hover:text-green-800"
          >
            View All Products
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Slider track */}
        <div
          ref={trackRef}
          onScroll={update}
          className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 pt-1 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              onClick={() => router.push(`/products/${product.id}`)}
              className="group flex shrink-0 cursor-pointer basis-[calc((100%-1rem)/2)] snap-start flex-col rounded-xl bg-white p-2.5 shadow-[0_4px_16px_rgba(20,60,40,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(20,60,40,0.12)] sm:basis-[calc((100%-2rem)/3)] lg:basis-[calc((100%-3rem)/4)] xl:basis-[calc((100%-4rem)/5)]"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f3ece0]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Discount badge */}
                <span className="absolute left-2 top-2 rounded bg-green-800 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {getDiscount(product.price, product.mrp)}% OFF
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col pt-3">
                <h3 className="truncate font-serif text-sm font-bold text-slate-900">
                  {product.name}
                </h3>

                <div className="mt-1 flex items-center gap-1 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="font-semibold text-slate-800">
                    {product.rating}
                  </span>
                  <span className="text-slate-400">({product.reviews})</span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-serif">
                  <span className="text-lg font-bold text-slate-900">
                    AED {formatPrice(product.price)}
                    <span className="ml-0.5 text-xs font-semibold text-slate-500">
                      /{product.unit}
                    </span>
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    AED {formatPrice(product.mrp)}/{product.unit}
                  </span>
                </div>

                {/* inquiry */}
                <InquiryModel />
              </div>
            </article>
          ))}
        </div>

        {/* Dots only (hidden when everything fits on one page) */}
        {pages > 1 && (
          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Product slider pages"
          >
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-6 bg-green-800"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
