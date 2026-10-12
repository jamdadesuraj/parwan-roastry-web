import React from "react";
import Link from "next/link";
import {
  LockKeyhole,
  UserRound,
  Database,
  Cookie,
  Share2,
  Eye,
  Clock,
  Mail,
} from "lucide-react";

type PolicySection = {
  id: string;
  title: string;
  icon: React.ElementType;
  paragraphs: string[];
  points?: string[];
  note?: { label: string; text: string };
};

const LAST_UPDATED = "August 20, 2026";
const EMAIL = "info@parwanroastery.com";

const SECTIONS: PolicySection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: Database,
    paragraphs: [
      "We collect information that you give us directly when you submit an enquiry form, contact us by email, phone or WhatsApp, or ask for a quotation or sample.",
    ],
    points: [
      "Name, company name, email address and phone / WhatsApp number.",
      "Product, quantity, packaging and delivery details in your enquiry.",
      "Any message or notes you send us.",
      "Basic device, browser and usage information when you visit our website.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: Eye,
    paragraphs: [
      "We use your information to respond to your enquiries and to run our wholesale business smoothly.",
    ],
    points: [
      "Prepare quotations, samples and invoices.",
      "Process, deliver and follow up on your orders.",
      "Provide customer support and answer questions.",
      "Improve our website, products and services.",
      "Prevent fraud and misuse of our website.",
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    icon: Share2,
    paragraphs: [
      "We do not sell your personal information. We share limited information only when needed, for example with delivery partners, payment providers, website and email service providers, or authorities where the law requires it.",
    ],
    note: {
      label: "Your information matters:",
      text: "We share only what is needed to complete your order or operate our website.",
    },
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: LockKeyhole,
    paragraphs: [
      "We take reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure or destruction.",
      "However, no internet-based service can guarantee complete security. Please avoid sending sensitive information, such as card details, by email or WhatsApp.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Local Storage",
    icon: Cookie,
    paragraphs: [
      "We may use cookies and similar technologies to keep the website working, remember preferences such as your chosen language (English or Arabic), and understand how visitors use our pages.",
      "You can block or delete cookies in your browser settings, but some parts of the website may not work as intended.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    icon: UserRound,
    paragraphs: [
      "Depending on applicable law, you may have rights over your personal information. To use any of them, email us.",
    ],
    points: [
      "Request access to the information we hold about you.",
      "Ask us to correct inaccurate information.",
      "Request deletion where legally applicable.",
      "Opt out of marketing messages at any time.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: Clock,
    paragraphs: [
      "We keep personal information only as long as reasonably necessary to respond to your enquiry, fulfill orders, keep business and tax records, resolve disputes and meet legal requirements. After that, we delete or anonymize it.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    paragraphs: [
      "If you have questions about this Privacy Policy or how your information is handled, please contact us.",
    ],
  },
];

const Privacy = () => {
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
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#666] sm:text-base">
            Your privacy matters to us. This policy explains how Parwan Roastery
            Abu Dhabi collects, uses and protects your information when you use
            our website or contact us.
          </p>

          <p className="mt-3 text-xs text-[#999]">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-[#e3e8df] bg-white p-4 shadow-sm lg:sticky lg:top-24">
            <p className="px-3 pb-3 text-xs font-bold uppercase tracking-wider text-[#999]">
              Contents
            </p>

            <nav aria-label="Privacy policy contents" className="space-y-1">
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

          {/* Policy */}
          <article className="min-w-0 rounded-2xl border border-[#e3e8df] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {SECTIONS.map((s, i) => {
              const Icon = s.icon;

              return (
                <React.Fragment key={s.id}>
                  {i > 0 && <div className="my-8 h-px bg-[#edf0ea]" />}

                  <section id={s.id} className="scroll-mt-24">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f2dc]">
                        <Icon
                          size={19}
                          className="text-[#438c35]"
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
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#438c35]"
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
                                {s.note.label}
                              </strong>{" "}
                              {s.note.text}
                            </p>
                          </div>
                        )}

                        {s.id === "contact" && (
                          <div className="mt-4 rounded-xl bg-[#f4faef] p-4">
                            <p className="text-xs font-semibold text-[#438c35]">
                              Email
                            </p>
                            <a
                              href={`mailto:${EMAIL}`}
                              className="mt-1 block text-sm font-semibold text-green-800 hover:underline"
                            >
                              {EMAIL}
                            </a>
                            <p className="mt-3 text-xs text-[#666]">
                              Or use our{" "}
                              <Link
                                href="/contactus"
                                className="font-semibold text-green-800 hover:underline"
                              >
                                contact form
                              </Link>
                              .
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </React.Fragment>
              );
            })}

            {/* Bottom notice */}
            <div className="mt-10 rounded-xl border border-[#dcebd5] bg-[#f4faef] p-5">
              <h3 className="font-serif text-sm font-bold text-[#438c35]">
                Privacy is important to us
              </h3>
              <p className="mt-1 text-xs leading-5 text-[#666]">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
