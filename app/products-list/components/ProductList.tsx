"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Heart,
  User,
  BadgeCheck,
  Star,
  ShoppingBag,
  Minus,
  Plus,
} from "lucide-react";
import Image from "next/image";
import ThemeBtnOne from "@/app/components/ThemeBtnOne";
import { BsShop, BsWhatsapp } from "react-icons/bs";
import Filter from "./Filter";
import InquiryModel from "@/app/components/InquiryModel";

const ProductList = () => {
  const router = useRouter();

  // Keyed by product id so each card has its own independent quantity
  const [quantities, setQuantities] = React.useState<Record<number, number>>(
    {},
  );

  const products = [
    {
      id: 1,
      name: "Cashew White",
      category: "Nuts",
      location:
        "Shop 4, Building Al Danah, Sector E10 , Plot 64, Abu Dhabi, UAE",
      price: "38",
      originalPrice: "60",
      unit: "per kg",
      quantity: "120 kg available",
      shopName: "Parwan Roastery Abu Dhabi",
      phone: "911234567890", // added: was referenced but never defined
      image: "/img/products/p1.jpg",
      rating: 4.5,
      reviews: 50,
    },
  ];

  const getQty = (id: number) => quantities[id] ?? 1;

  const setQty = (id: number, updater: (prev: number) => number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, updater(prev[id] ?? 1)),
    }));
  };

  return (
    <section className="min-h-screen bg-[#f8faf5] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Filter />
        {/* Product List */}
        <div className="space-y-5 mt-6">
          {products.map((product) => {
            const quantity = getQty(product.id);

            return (
              <div
                key={product.id}
                role="link"
                tabIndex={0}
                onClick={() => router.push(`/products/${product.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    router.push(`/products/${product.id}`);
                  }
                }}
                className="group block cursor-pointer overflow-hidden border border-[#e3e8df] bg-white transition duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative h-60 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-75 sm:w-56 lg:w-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 256px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    {/* Top */}
                    <div>
                      {/* Category */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-[#e7f2dc] px-3 py-1 text-[10px] font-bold text-[#438c35]">
                          {product.category}
                        </span>

                        <span className="text-sm font-semibold text-black">
                          {product.quantity}
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0">
                          {/* Product Name */}
                          <h2 className="text-lg font-serif font-bold text-[#252525] transition group-hover:text-[#438c35] sm:text-xl">
                            {product.name}
                          </h2>

                          {/* Rating */}
                          <div className="mt-1.5 flex flex-wrap items-center gap-2">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  size={13}
                                  fill={
                                    star <= Math.round(product.rating)
                                      ? "#F5B83D"
                                      : "none"
                                  }
                                  className={
                                    star <= Math.round(product.rating)
                                      ? "text-[#F5B83D]"
                                      : "text-[#D5D5D5]"
                                  }
                                />
                              ))}
                            </div>

                            <span className="text-xs font-semibold text-[#444]">
                              {product.rating}
                            </span>

                            <span className="text-xs text-[#999]">
                              ({product.reviews} reviews)
                            </span>
                          </div>

                          {/* Location */}
                          <div className="mt-2 flex items-center gap-1.5 text-xs text-black">
                            <MapPin
                              size={14}
                              className="shrink-0 text-[#438c35]"
                            />
                            {product.location}
                          </div>

                          {/* Farmer */}
                          <div className="mt-2 flex items-center gap-1.5 text-xs text-black">
                            <BsShop
                              size={14}
                              className="shrink-0 text-[#438c35]"
                            />

                            <span>Shop Name:</span>

                            <span className="flex items-center gap-1 font-semibold text-[#444]">
                              {product.shopName}

                              <span className="text-[#aaa]">|</span>

                              <BadgeCheck
                                size={15}
                                strokeWidth={2}
                                className="shrink-0 text-[#438c35]"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex flex-col gap-4 border-t border-[#edf0ea] pt-4 sm:flex-row sm:items-center sm:justify-between">
                      {/* Price */}
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-medium text-[#a3a3a3] line-through">
                            AED {product.originalPrice}
                          </span>

                          <span className="text-2xl font-extrabold tracking-tight text-[#438c35]">
                            AED {product.price}
                          </span>

                          <span className="text-xs font-medium text-[#888]">
                            {product.unit}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full border border-[#e8d9b8] bg-[#fff9ed] px-2.5 py-1 text-[10px] font-bold text-[#b87918]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d8952b]" />
                          10% off
                        </span>
                      </div>

                      {/* Buttons */}
                      <div
                        className="flex flex-col gap-2 sm:flex-row"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <InquiryModel />

                        <ThemeBtnOne
                          text="Chat on WhatsApp"
                          url={`/whatsapp?phone=${product.phone}`}
                          icon={<BsWhatsapp size={16} />}
                          className="py-3 px-4 mt-3 w-full rounded-full cursor-pointer border border-green-700 text-xs  font-serif bg-white text-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
