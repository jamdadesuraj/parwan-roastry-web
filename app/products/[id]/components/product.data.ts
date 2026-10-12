export type Product = {
  name: string;
  category: string;
  images: string[];
  price: number;
  mrp: number;
  unit: string;
  rating: number;
  reviews: number;
  moq: string;
  shortDesc: string;
  highlights: { label: string; value: string }[];
  description: string[];
  specs: { label: string; value: string }[];
  packaging: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const WHATSAPP_NUMBER = "971508221435";

export const formatPrice = (n: number) => Number(n.toFixed(2)).toString();

/* Replace with your API / CMS data */
export const DEFAULT_PRODUCT: Product = {
  name: "Cashew White",
  category: "Nuts",
  images: [
    "/img/products/p1.jpg",
    "/img/products/p2.png",
    "/img/products/p3.jpg",
    "/img/products/p4.jpg",
  ],
  price: 38,
  mrp: 50,
  unit: "kg",
  rating: 4.8,
  reviews: 124,
  moq: "25 kg",
  shortDesc:
    "Whole, creamy white cashew kernels with a naturally sweet, buttery taste. Carefully graded and sorted for snacking, sweets, catering and retail packing.",
  highlights: [
    { label: "Origin", value: "Vietnam / India" },
    { label: "Grade", value: "W320 Premium" },
    { label: "Shelf life", value: "12 months" },
    { label: "Type", value: "Raw, whole" },
  ],
  description: [
    "Our white cashews are hand-selected whole kernels with a pale ivory colour, a firm crunch and a mild, creamy flavour. They are sorted to a consistent size and stored in a controlled environment to keep them fresh.",
    "Ideal for retailers, hotels, caterers, sweet shops and distributors who need dependable quality in bulk. Available loose, vacuum packed or in retail packs, and private labelling can be arranged on request.",
  ],
  specs: [
    { label: "Product name", value: "Cashew White Whole" },
    { label: "Grade", value: "W320" },
    { label: "Moisture", value: "Max 5%" },
    { label: "Broken kernels", value: "Max 5%" },
    { label: "Colour", value: "Pale ivory / white" },
    { label: "Storage", value: "Cool, dry place below 25°C" },
    { label: "Shelf life", value: "12 months from packing" },
  ],
  packaging: [
    { label: "Bulk packing", value: "10 kg / 25 kg cartons, vacuum packed" },
    { label: "Retail packs", value: "250 g, 500 g, 1 kg pouches" },
    { label: "Private label", value: "Available on request (MOQ applies)" },
    { label: "Delivery", value: "Across the UAE, export on request" },
    { label: "Lead time", value: "1–3 working days for stocked items" },
  ],
  faqs: [
    {
      q: "Can I get a sample before ordering in bulk?",
      a: "Yes. Mention it in the enquiry form and our team will arrange a sample for you.",
    },
    {
      q: "Do you offer wholesale pricing?",
      a: "Yes. Prices drop with larger quantities. Send your required quantity and we will share a quote.",
    },
    {
      q: "Do you deliver outside Abu Dhabi?",
      a: "We deliver across the UAE and can arrange export shipments on request.",
    },
  ],
};
