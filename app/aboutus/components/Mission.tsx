import { CheckCircle2, Eye, HandHeart, Target } from "lucide-react";
import React from "react";

type InfoCard = {
  id: string;
  icon: React.ElementType;
  title: string;
  text?: string;
  points?: string[];
};

const CARDS: InfoCard[] = [
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    text: "To supply premium nuts, dried fruits, seeds and spices to retailers, hotels and caterers at fair wholesale prices, with consistent quality and reliable delivery.",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Our Vision",
    text: "To become the UAE's most trusted dry fruits wholesaler, where every buyer finds fresh, quality products and a hassle-free ordering experience in one place.",
  },
  {
    id: "values",
    icon: HandHeart,
    title: "Our Values",
    points: [
      "Quality & Freshness",
      "Trust & Transparency",
      "Fair Wholesale Pricing",
      "Customer First Service",
    ],
  },
];

const Mission = () => {
  return (
    <section className="w-full bg-[#faf8f3] px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="font-serif text-xs font-bold uppercase tracking-[0.2em]">
            <span className="text-green-600">Who </span>
            <span className="text-green-900">We Are</span>
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Our Mission, Vision & Values
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(20,60,40,0.12)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eef5e7]">
                  <Icon
                    size={27}
                    strokeWidth={1.6}
                    className="text-green-700"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-base font-bold text-green-800">
                    {card.title}
                  </h3>

                  {card.text && (
                    <p className="mt-2 text-[13px] leading-6 text-gray-600">
                      {card.text}
                    </p>
                  )}

                  {card.points && (
                    <ul className="mt-3 space-y-2 text-[13px] text-gray-600">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <CheckCircle2
                            size={14}
                            className="shrink-0 text-green-700"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
