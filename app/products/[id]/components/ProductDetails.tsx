import React from "react";
import Link from "next/link";
import { DEFAULT_PRODUCT, type Product } from "./product.data";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

const ProductDetails = ({
  product = DEFAULT_PRODUCT,
}: {
  product?: Product;
}) => {
  return (
    <section className="w-full bg-[#faf8f3] px-4 py-8 sm:px-6 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <Link href="/" className="hover:text-green-800">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products-list" className="hover:text-green-800">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-slate-800">{product.name}</span>
        </nav>

        {/* Top: left (images + info) | right (form) */}
        <div className="grid items-start gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid min-w-0 gap-8 md:grid-cols-1">
            <ProductImages images={product.images} name={product.name} />
          </div>
          <div className="grid min-w-0 gap-8 md:grid-cols-1">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Bottom: tabs */}
        <div className="mt-10">
          <ProductTabs product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
