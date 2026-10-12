import React from "react";
import { ShieldCheck, Sprout, Headset, Award, Bean } from "lucide-react";

type FeatureItem = {
  id: number;
  title: string;
  text: string;
  icon: React.ElementType;
};

const FEATURES: FeatureItem[] = [
  { id: 1, title: "Secure Payment", text: "100% protected", icon: ShieldCheck },
  { id: 2, title: "Fresh & Natural", text: "No preservatives", icon: Bean },
  { id: 3, title: "24/7 Support", text: "We're here to help", icon: Headset },
  { id: 4, title: "Trusted by 10K+", text: "Happy customers", icon: Award },
];

const Counter = () => {
  return (
    <section className="w-full  px-4 py-8 sm:px-6 lg:px-12">
      <div className="mx-auto grid max-w-8xl grid-cols-2 rounded-2xl border border-white bg-white/70 p-2 shadow-[0_4px_24px_rgba(20,60,40,0.06)] sm:p-3 lg:grid-cols-4 lg:p-4">
        {FEATURES.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="relative flex flex-col items-center gap-2 px-3 py-4 text-center sm:flex-row sm:gap-4 sm:px-5 sm:text-left lg:justify-center"
            >
              {/* Divider (desktop only) */}
              {index > 0 && (
                <span
                  className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-slate-200 lg:block"
                  aria-hidden="true"
                />
              )}

              {/* Icon */}
              <Icon
                className="h-9 w-9 shrink-0 text-green-800 sm:h-10 sm:w-10"
                strokeWidth={1.25}
                aria-hidden="true"
              />

              {/* Text */}
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold leading-tight text-slate-900 font-serif">
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
    </section>
  );
};

export default Counter;
