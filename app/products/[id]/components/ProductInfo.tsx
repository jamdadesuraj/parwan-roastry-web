import { Star, BadgeCheck, Truck, Package } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Product, WHATSAPP_NUMBER, formatPrice } from "./product.data";
import InquiryModel from "@/app/components/InquiryModel";
import ThemeBtnOne from "@/app/components/ThemeBtnOne";

const ProductInfo = ({ product }: { product: Product }) => {
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100,
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello, I would like to enquire about ${product.name}.`,
  )}`;

  return (
    <div className="min-w-0">
      <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-green-800">
        {product.category}
      </span>

      <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
        {product.name}
      </h1>

      <div className="mt-3 flex items-center gap-1 text-sm">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
        <span className="ml-1 font-semibold text-slate-800">
          {product.rating}
        </span>
        <span className="text-slate-400">({product.reviews} reviews)</span>
      </div>

      {/* Price */}
      <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif">
        <span className="text-3xl font-bold text-slate-900">
          AED {formatPrice(product.price)}
          <span className="ml-1 text-sm font-semibold text-slate-500">
            /{product.unit}
          </span>
        </span>
        <span className="text-sm text-slate-400 line-through">
          AED {formatPrice(product.mrp)}
        </span>
        <span className="rounded bg-green-600 px-2 py-0.5 text-xs text-white">
          {discount}% OFF
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Minimum order:{" "}
        <span className="font-semibold text-slate-800">{product.moq}</span>.
        Bulk pricing available.
      </p>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        {product.shortDesc}
      </p>

      {/* Highlights */}
      <dl className="mt-5 grid grid-cols-2 gap-3">
        {product.highlights.map((h) => (
          <div
            key={h.label}
            className="rounded-xl border border-slate-200 bg-white px-3.5 py-3"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {h.label}
            </dt>
            <dd className="mt-1 font-serif text-sm font-bold text-slate-900">
              {h.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Trust points */}
      <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
        <li className="flex items-center gap-2.5">
          <BadgeCheck className="h-4 w-4 shrink-0 text-green-700" />
          Premium quality, carefully sourced and tested
        </li>
        <li className="flex items-center gap-2.5">
          <Package className="h-4 w-4 shrink-0 text-green-700" />
          Fresh stock, packed to order
        </li>
        <li className="flex items-center gap-2.5">
          <Truck className="h-4 w-4 shrink-0 text-green-700" />
          Fast delivery across the UAE
        </li>
      </ul>

      <div className="mt-5 flex  items-center gap-3">
        <InquiryModel />

        <ThemeBtnOne
          text="Chat on WhatsApp"
          url={`/whatsapp?phone=${product.phone}`}
          icon={<BsWhatsapp size={16} />}
          className="py-3 px-4 mt-3  rounded-full cursor-pointer border border-green-700 text-xs  font-serif bg-white text-black"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
