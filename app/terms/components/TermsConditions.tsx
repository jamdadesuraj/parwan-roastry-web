import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  MessageSquareText,
  CreditCard,
  Truck,
  PackageCheck,
  AlertCircle,
  Scale,
  Ban,
  Mail,
} from "lucide-react";

type TermSection = {
  id: string;
  title: string;
  icon: React.ElementType;
  tone?: "green" | "amber";
  paragraphs: string[];
  points?: string[];
  note?: string;
};

const LAST_UPDATED = "August 20, 2026";

const SECTIONS: TermSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: FileText,
    paragraphs: [
      "Welcome to Parwan Roastery Abu Dhabi. These Terms & Conditions govern your access to and use of our website and your purchase of nuts, dried fruits, seeds, spices and related products from us.",
      "By using our website or placing an order, you confirm that you have read, understood and agreed to these terms.",
    ],
  },
  {
    id: "using-our-website",
    title: "Using Our Website",
    icon: ShieldCheck,
    paragraphs: [
      "Our website showcases our wholesale product range and lets you contact us. You agree to use it responsibly and only for lawful purposes.",
    ],
    points: [
      "Provide accurate and up-to-date information in all forms.",
      "Use the website only for genuine business enquiries.",
      "Do not copy our images, content or branding without written permission.",
    ],
  },
  {
    id: "enquiries-quotations",
    title: "Enquiries & Quotations",
    icon: MessageSquareText,
    paragraphs: [
      "Submitting an enquiry form, WhatsApp message or email is a request for information and a quote. It is not a confirmed order.",
      "An order is confirmed only when we send you a written quotation or invoice and you accept it.",
    ],
    points: [
      "Quotations are valid for the period stated on the quote.",
      "Minimum order quantities (MOQ) apply and are shown on each product.",
      "Samples may be available on request and may be chargeable.",
    ],
  },
  {
    id: "pricing-payment",
    title: "Pricing & Payment",
    icon: CreditCard,
    paragraphs: [
      "Prices shown on our website are in UAE Dirhams (AED) and are indicative. Dry fruit and nut prices change with the market, so the final price is the one on your confirmed quotation.",
      "Payment terms, accepted payment methods and applicable VAT are stated on your quotation or invoice.",
    ],
    note: "Always check the quantity, price, packaging and delivery details on your quotation before confirming an order or making a payment.",
  },
  {
    id: "delivery-returns",
    title: "Delivery, Returns & Quality",
    icon: Truck,
    paragraphs: [
      "We deliver across Abu Dhabi and the UAE, and can arrange export shipments on request. Delivery times are estimates and may vary with stock, location and circumstances beyond our control.",
      "Because our products are food items, we cannot accept returns once goods have been delivered, except where they are damaged, incorrect or not as described.",
    ],
    points: [
      "Please inspect goods on delivery and report any issue within 24 hours.",
      "Send photos of the product and packaging so we can resolve it quickly.",
      "Approved claims are replaced or credited at our discretion.",
    ],
  },
  {
    id: "product-information",
    title: "Product Information",
    icon: PackageCheck,
    paragraphs: [
      "We take care to describe our products accurately. Natural products vary in size, colour and appearance from batch to batch, and images are for illustration.",
      "Our products may contain or come into contact with nuts, sesame, sulphites and other allergens. Please check the label and contact us if you have specific requirements.",
    ],
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    icon: Ban,
    tone: "amber",
    paragraphs: [
      "You must not misuse our website or engage in activities that may harm us or other users.",
    ],
    points: [
      "Submit false, fraudulent or misleading information.",
      "Attempt to access restricted areas or interfere with the website.",
      "Use the website or our products for any illegal purpose.",
      "Resell products in a way that misrepresents their origin or quality.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: AlertCircle,
    tone: "amber",
    paragraphs: [
      "To the extent permitted by applicable law, we are not responsible for indirect or consequential losses, website interruptions, or delays caused by circumstances beyond our reasonable control.",
      "Our liability for any claim relating to a product is limited to the value of the goods supplied.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law & Termination",
    icon: Scale,
    paragraphs: [
      "We may refuse service or cancel an order if these terms are breached or the information provided is inaccurate.",
      "These Terms & Conditions are governed by the laws of the United Arab Emirates as applied in the Emirate of Abu Dhabi, and any dispute is subject to the courts of Abu Dhabi.",
    ],
  },
];

const TermsConditions = () => {
  return (
    <section className="min-h-screen bg-[#faf8f3] px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-xs font-bold uppercase tracking-[0.2em]">
            <span className="text-green-600">Legal </span>
            <span className="text-green-900">Information</span>
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#666] sm:text-base">
            Please read these terms carefully before using our website or
            placing an order with Parwan Roastery Abu Dhabi.
          </p>

          <p className="mt-3 text-xs text-[#999]">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Main */}
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-[#e3e8df] bg-white p-4 shadow-sm lg:sticky lg:top-24">
            <p className="px-3 pb-3 text-xs font-bold uppercase tracking-wider text-[#999]">
              Contents
            </p>

            <nav aria-label="Terms contents" className="space-y-1">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2.5 text-xs font-medium text-[#666] transition hover:bg-[#e7f2dc] hover:text-[#438c35]"
                >
                  {i + 1}. {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Terms */}
          <article className="min-w-0 rounded-2xl border border-[#e3e8df] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {SECTIONS.map((s, i) => {
              const Icon = s.icon;
              const amber = s.tone === "amber";

              return (
                <React.Fragment key={s.id}>
                  {i > 0 && <div className="my-8 h-px bg-[#edf0ea]" />}

                  <section id={s.id} className="scroll-mt-24">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          amber ? "bg-[#fff3df]" : "bg-[#e7f2dc]"
                        }`}
                      >
                        <Icon
                          size={19}
                          className={
                            amber ? "text-[#d58a20]" : "text-[#438c35]"
                          }
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0">
                        <h2 className="font-serif text-lg font-bold text-[#252525]">
                          {i + 1}. {s.title}
                        </h2>

                        <div className="mt-3 space-y-3 text-sm leading-7 text-[#666]">
                          {s.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>

                        {s.points && (
                          <ul className="mt-4 space-y-3 text-sm leading-6 text-[#666]">
                            {s.points.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span
                                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                                    amber ? "bg-[#d58a20]" : "bg-[#438c35]"
                                  }`}
                                  aria-hidden="true"
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}

                        {s.note && (
                          <div className="mt-4 rounded-xl bg-[#f8faf5] p-4">
                            <p className="text-xs leading-5 text-[#666]">
                              <strong className="text-[#438c35]">
                                Important:
                              </strong>{" "}
                              {s.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </React.Fragment>
              );
            })}

            {/* Footer notice */}
            <div className="mt-10 flex items-start gap-4 rounded-xl border border-[#dcebd5] bg-[#f4faef] p-5">
              <Mail
                size={20}
                className="mt-0.5 shrink-0 text-[#438c35]"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-serif text-sm font-bold text-[#438c35]">
                  Questions about these terms?
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#666]">
                  Contact us at{" "}
                  <a
                    href="mailto:info@parwanroastery.com"
                    className="font-semibold text-green-800 hover:underline"
                  >
                    info@parwanroastery.com
                  </a>{" "}
                  or{" "}
                  <Link
                    href="/contactus"
                    className="font-semibold text-green-800 hover:underline"
                  >
                    send us a message
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
